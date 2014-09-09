#!/usr/bin/env python

# Copy TLE files from Celestrak, generate COMBINED.txt and SMD.txt based
# on list of missions from CSV with slug, name, norad id, cospar id, comment

# TLE sources:
# We can get a .txt or .xls file with satellites and long names, NORAD and COSPAR
# http://www.ucsusa.org/assets/documents/nwgs/UCS_Satellite_Database_2-1-14.txt
# http://www.ucsusa.org/assets/documents/nwgs/UCS_Satellite_Database_2-1-14.xls
# http://celestrak.com/pub/satcat.txt (see adjacent format desc)
# Sadly, the n2yo.com site provides the most complete data on operational and
# decayed satellites; combine this with science.nasa.gov/missions/ and NSSDC.
# Space-track.org has solid info but requies auth and policy prevents reuse!
# API docs: https://www.space-track.org/documentation#/api
# https://www.space-track.org/basicspacedata/query/class/tle_latest/ORDINAL/1/format/3le

import argparse
from collections import defaultdict
import csv
import logging
import os
import re
import urllib2

CELESTRAK_BASE_URL = "http://www.celestrak.com/NORAD/elements/"
TLE_OUTPUT_BASE_PATH = "/repfiles/nasascience/media/sot/tle/"  # For Production
SMD_SATELLITES_NORAD_BASENAME = 'smd-satellites-norad'
SMD_SATELLITES_NORAD_SUFFIX = '.csv'
SMD_OUTPUT_FILENAME = 'SMD.txt'
SCIENCE_SATELLITES_FOLDER = '/repfiles/nasascience/media/medialibrary'
N2YO_QUERY_URL = 'http://www.n2yo.com/satellite/?s=%s'
CELESTRAK_TLE_QUERY_URL = 'http://www.celestrak.com/cgi-bin/TLE.pl?CATNR=%s'
CELESTRAK_TLE_RE = re.compile(r'<PRE>(.+)</PRE>', re.DOTALL | re.IGNORECASE)

# TODO: is there a way to find this list of files? or is it static?
# We really want a way to read the names of all the TLE .txt files
# from Celestrak so we don't have to hard code them here; how?

CELESTRAK_FILES = {
    "tle-new.txt": "Last 30 Days' Launches",
    "stations.txt": "Space Stations",
    "visual.txt": "100 (or so) Brightest",
    "1999-025.txt": "FENGYUN 1C Debris",
    "iridium-33-debris.txt": "IRIDIUM 33 Debris",
    "cosmos-2251-debris.txt": "COSMOS 2251 Debris",
    "weather.txt": "Weather",
    "noaa.txt": "NOAA",
    "goes.txt": "GOES",
    "resource.txt": "Earth Resources",
    "sarsat.txt": "Search & Rescue (SARSAT)",
    "dmc.txt": "Disaster Monitoring",
    "tdrss.txt": "Tracking and Data Relay Satellite",
    "geo.txt": "Geostationary",
    "intelsat.txt": "Intelsat",
    "gorizont.txt": "Gorizont",
    "raduga.txt": "Raduga",
    "molniya.txt": "Molniya",
    "iridium.txt": "Iridium",
    "orbcomm.txt": "Orbcomm",
    "globalstar.txt": "Globalstar",
    "amateur.txt": "Amateur Radio",
    "x-comm.txt": "Experimental",
    "other-comm.txt": "Other",
    "gps-ops.txt": "GPS Operational",
    "glo-ops.txt": "Glonass Operational",
    "galileo.txt": "Galileo",
    "sbas.txt": "Satellite-Based Augmentation System (WAAS/EGNOS/MSAS)",
    "nnss.txt": "Navy Navigation Satellite System (NNSS)",
    "musson.txt": "Russian LEO Navigation",
    "science.txt": "Space & Earth Science",
    "geodetic.txt": "Geodetic",
    "engineering.txt": "Engineering",
    "education.txt": "Education",
    "military.txt": "Miscellaneous Military",
    "radar.txt": "Radar Calibration",
    "cubesat.txt": "CubeSats",
    "other.txt": "Other",
}


logging.basicConfig(level=logging.INFO)

def get_sci_csv_path(folder):
    """Find latest by date 'smd-satellites-norad*.csv' in Fein CMS's medialibrary.
    Subsequent ones get underscore suffixes, like medialibrary/2013/08/26/smd-satellites-norad__.csv
    """
    smd_satellite_norad_pattern = SMD_SATELLITES_NORAD_BASENAME + '*' + SMD_SATELLITES_NORAD_SUFFIX
    if not os.path.isdir(folder):
        raise RuntimeError('Could not find SMD "%s" folder=%s' %
                           (smd_satellite_norad_pattern, folder))
    satellites = []
    for (dirpath, dirname, filenames) in os.walk(folder):
        for file in filenames:
            if file.startswith(SMD_SATELLITES_NORAD_BASENAME) and file.endswith(SMD_SATELLITES_NORAD_SUFFIX):
                path = os.path.join(dirpath, file)
                satellites.append({'path': path, 'mtime': os.stat(path).st_mtime})
                logging.info('Found satellites*.csv: path=%s' % path)
    if not satellites:
        raise RuntimeError('Could not find any SMD "%s" file under folder=%s' % (smd_satellite_norad_pattern, folder))
    max_time = max(satellite['mtime'] for satellite in satellites)
    newest_csv_placement = next(index for (index, d) in enumerate(satellites) if d['mtime'] == max_time)
    sci_csv = satellites[newest_csv_placement]['path']
    return sci_csv

def get_smd_norads(science_satellites_folder):
    """Parse SMD satellites CSV and get unique IDs to match TLE files.
    We might not find SMD NORAD if it's decayed, future.
    CSV: Division,TLE,Name,NORAD,COSPAR,Nonoperational,Comments
    """
    smd_sats = {}
    smd_norads  = {}
    sci_csv_path = get_sci_csv_path(science_satellites_folder)

    logging.info('Reading SMD satellites from CSV=%s' % sci_csv_path)
    with open(sci_csv_path, 'rU') as sci_csv:
        reader = csv.DictReader(sci_csv)
        for row in reader:
            if row['Nonoperational'].strip():
                continue
            norad = row['NORAD'].strip().zfill(5) # zero-prefix to match Celestrak TLE files
            cospar = row['COSPAR'].strip()
            if not norad:
                logging.info('SMD CSV has no NORAD, skipping: %s' % row)
                continue
            smd_norads[norad] = row
    return smd_norads

def get_celestrak_tles(tle_output_base_path):
    """Copy TLE files from Celestrak and return deduped TLEs by NORAD.
    Side Effect: creates TLE files in the output dir.
    Pass on any non-text file returned.
    """
    if not os.path.isdir(tle_output_base_path):
        raise IOError('No TLE output directory=%s' % tle_output_base_path)
    tles_by_norad = {}
    for fname, description in CELESTRAK_FILES.items():
        logging.info('Getting Celestrak file=%s' % fname)
        response = urllib2.urlopen(CELESTRAK_BASE_URL + fname)
        # Celestrak returns HTTP 200 for a not-found file with text/html and JS redirect!
        # Look for text/plain indicating a good file.
        if (response.headers.getheader('content-type') != 'text/plain'):
            logging.warning('Did not get Celestrak text/plain file=%s (skipping)' % fname)
            continue
        tle_lines = response.readlines()
        tle_out_path = os.path.join(tle_output_base_path, fname)
        try:
            with open(tle_out_path, 'w') as out:
                out.writelines(tle_lines)
        except IOError, e:
            raise IOError('Could not write to TLE destination=%s: %s' % (tle_output_base_path, e))
        while tle_lines:
            tle = {'name': tle_lines.pop(0).strip(),
                   'tle1': tle_lines.pop(0).strip(),
                   'tle2': tle_lines.pop(0).strip()}
            norad = tle['tle2'].split()[1]
            tles_by_norad[norad] = tle
    return tles_by_norad

def get_smd_tles(smd_norads, tles_by_norad):
    """Return SMD TLEs by correlating NORAD IDs with Celestrac TLEs.
    """
    smd_tles = {}
    for norad, tle in tles_by_norad.items():
        if norad in smd_norads:
            logging.info('Celestrak has SMD NORAD=%s name=%s' % (norad, tle['name']))
            smd_tles[norad] = tle
    return smd_tles

def find_missing_smd_tles(smd_norads, smd_tles):
    """Identify missing SMD TLEs, query Celestrak for them, return any found.
    """
    smd_found_tles = {}
    smd_missing = set(smd_norads) - set(smd_tles)
    logging.info('SMD missing: %s' % smd_missing)
    for norad in smd_missing:
        resp = urllib2.urlopen(CELESTRAK_TLE_QUERY_URL % norad)
        if resp.getcode() != 200:
            logging.warning('Celestrak not found norad=%s HTTP code=%s' % (norad, resp.getcode()))
        else:
            text = resp.read()
            if 'No TLE found' in text:
                logging.warning('Celestrak no TLE found in search norad=%s (%s)' % (norad, smd_norads[norad]))
            else:
                m = CELESTRAK_TLE_RE.search(text)
                if m:
                    tle_lines = m.group(1).strip().splitlines()[:3]
                    smd_tles[norad] = {'name': tle_lines[0].strip(),
                                       'tle1': tle_lines[1].strip(),
                                       'tle2': tle_lines[2].strip(),
                    }
                    logging.info('Celestrak search found norad=%s: %s' % (norad, smd_tles[norad]))
    return smd_found_tles

def write_smd_tles_file(smd_tles, tle_output_base_path):
    """Write TLEs (sorted by NORAD, date equivalent) to output file.
    We might want it by Name, but that's a UI issue.
    """
    smd_tles_file = os.path.join(tle_output_base_path, SMD_OUTPUT_FILENAME)
    with open(smd_tles_file, 'w') as smd_tles_file:
        for norad, tle in sorted(smd_tles.items()):
            smd_tles_file.writelines([
                "%-24s\n" % tle['name'],
                '%-69s\n' % tle['tle1'],
                '%-69s\n' % tle['tle2'],
            ])

def main(tle_output_base_path=TLE_OUTPUT_BASE_PATH, science_satellites_folder=SCIENCE_SATELLITES_FOLDER):
    smd_norads = get_smd_norads(science_satellites_folder)
    tles_by_norad = get_celestrak_tles(tle_output_base_path)
    smd_tles = get_smd_tles(smd_norads, tles_by_norad)
    logging.info('TALLY1 TLEs celestrak=%d smd=%d' % (len(tles_by_norad), len(smd_tles)))

    smd_tles_found = find_missing_smd_tles(smd_norads, smd_tles)
    smd_tles.update(smd_tles_found)
    logging.info('TALLY2 TLEs celestrak=%d smd=%d' % (len(tles_by_norad), len(smd_tles)))

    write_smd_tles_file(smd_tles, tle_output_base_path)

if __name__ == '__main__':
    # Default to the paths used on the Django server so the cron job doesn't break.
    # Override for testing by passing options, e.g.,
    #   ./create_tle_files.py --tle-dir /tmp/tle/ --smd-csv ~/Downloads/

    parser = argparse.ArgumentParser(description='Copy TLEs from Celestrak, build COMBINED.txt file, and SMD.txt file from NASA Science CSV missions list.')
    parser.add_argument('-t', '--tle-dir', default=TLE_OUTPUT_BASE_PATH,
                        help='Directory to save the TLEs; must exist (default="%s", for testing, maybe /tmp/tle)' % TLE_OUTPUT_BASE_PATH)
    parser.add_argument('-s', '--smd-csv', default=SCIENCE_SATELLITES_FOLDER,
                        help='Path to SMD Missions CSV with URL slug, name, NORAD id, COSPAR id, Comment (default="%s", for testing maybe /tmp/smd_folder' %  SCIENCE_SATELLITES_FOLDER)
    args = parser.parse_args()
    main(tle_output_base_path=args.tle_dir, science_satellites_folder=args.smd_csv)



