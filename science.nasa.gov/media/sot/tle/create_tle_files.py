#!/usr/bin/env python
# Copy TLE files from Celestrak, generate COMBINED.txt and SMD.txt based
# on list of missions from CSV with slug, name, norad id, cospar id, comment
# We can get a .txt or .xls file with satellites and long names, NORAD and COSPAR
# http://www.ucsusa.org/assets/documents/nwgs/UCS_Satellite_Database_2-1-14.txt
# http://www.ucsusa.org/assets/documents/nwgs/UCS_Satellite_Database_2-1-14.xls
# http://celestrak.com/pub/satcat.txt (see adjacent format desc)
# Sadly, the n2yo.com site provides the most complete data on operational and
# decayed satellites; combine this with science.nasa.gov/missions/ and NSSDC.
###############################################################################

# Pull each Celestrak TLE file and save a local copy, a combined .txt file

# Parse the CSV of Science satellites SMD wants by name, find satellite ID from
# Celestrak files and create a SMD.txt file.

# The names are unlikely to match perfectly -- parenthetical suffixes, etc

# We aren't worrying about duplicates here, do it in postprocessing.
# TODO:
# - is there a way to find this list of files? or is it static?

import argparse
from collections import defaultdict
import csv
import logging
import os
import urllib2

CELESTRAK_BASE_URL = "http://www.celestrak.com/NORAD/elements/"
TLE_OUTPUT_BASE_PATH = "/repfiles/nasascience/media/sot/tle/"  # For Production
SCIENCE_SATELLITES_FOLDER = '/repfiles/nasascience/media/medialibrary'
N2YO_URL = 'http://www.n2yo.com/satellite/?s=%s'

# We really want a way to read the names of all the TLE .txt files from Celestrak
# so we don't have to hard code them here; how?

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
    """Find latest by date `satellites.csv` in Fein CMS's medialibrary.
    Subsequent ones get underscore suffixes, like medialibrary/2013/08/26/satellites__.csv
    """
    if not os.path.isdir(folder):
        raise RuntimeError('Could not find SMD "satellite*.csv" folder=%s' % folder)
    satellites = []
    for (dirpath, dirname, filenames) in os.walk(folder):
        for file in filenames:
            if file.startswith("satellites") and file.endswith(".csv"):
                path = os.path.join(dirpath, file)
                satellites.append({'path': path, 'mtime': os.stat(path).st_mtime})
                logging.info('Found satellites*.csv: path=%s' % path)
    if not satellites:
        raise RuntimeError('Could not find any SMD "satellite*.csv" file under folder=%s' % folder)
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
            norad = row['NORAD'].strip()
            cospar = row['COSPAR'].strip()
            if not norad:
                logging.info('SMD CSV has no NORAD, skipping: %s' % row)
                continue
            smd_norads[norad] = row
    return smd_norads


def main(tle_output_base_path=TLE_OUTPUT_BASE_PATH, science_satellites_folder=SCIENCE_SATELLITES_FOLDER):
    COMBINED_PATH_TMP = os.path.join(tle_output_base_path, "COMBINED-NEW.txt")
    COMBINED_PATH     = os.path.join(tle_output_base_path, "COMBINED.txt")
    SMD_TLE_FILENAME  = os.path.join(tle_output_base_path, 'SMD.txt')

    smd_norads = get_smd_norads(science_satellites_folder)

    # Copy TLE files from Celestrak; pass if not text file from URL.
    write_fail = False
    try:
        with open(COMBINED_PATH_TMP, 'w') as combined:
            for fname, description in CELESTRAK_FILES.items():
                logging.info('Getting Celestrak file=%s' % fname)
                response = urllib2.urlopen(CELESTRAK_BASE_URL + fname)
                if (response.headers.getheader('content-type') == 'text/plain'):
                    tles = response.read()
                    with open(os.path.join(tle_output_base_path, fname), 'w') as out:
                        out.write(tles)
                    combined.write(tles)
                else:
                    write_fail = True
                    logging.error('Getting Celestrak file=%s FAILED' % fname)
                    pass
    except IOError, e:
        raise IOError('Could not write to TLE destination=%s: %s' % (tle_output_base_path, e))

    # Only replace COMBINDED.txt if there was no issue
    if not write_fail:
        os.rename(COMBINED_PATH_TMP, COMBINED_PATH)
    else:
        os.remove(COMBINED_PATH_TMP)

    # Get TLEs that we can look up by name from Celestrak
    #CUBESAT XI-IV (CO-57)
    #1 27848U 03031J   14237.28345355  .00000112  00000-0  71266-4 0  9415
    #2 27848  98.7088 244.8110 0010806  85.2134  36.7572 14.21225139578313

    tles_by_name = {}
    tles_by_norad = {}
    tles_by_id = {}
    combined_smds = {}
    with open(COMBINED_PATH, 'rU') as combined:
        # TODO: Why does this exit properly?
        while True:                 # need to find EOF
            name = combined.readline().strip()
            if not name:
                logging.warning('##### got empty name, breaking')
                break
            tle1 = combined.readline()
            tle2 = combined.readline()
            try:
                norad = tle2.split()[1]
            except IndexError, e:
                logging.warning("Can't split to find NORAD ID in TLE2: %s" % tle2)
                continue
            tle = {'name': name,
                   'norad': norad,
                   'tle1': tle1,
                   'tle2': tle2,
                   }
            tles_by_name[name] = tle
            tles_by_norad[norad] = tle # TODO: unused; why copy TLE
            # TODO: can't I just append the TLE if it's in smd_norads?
            # That won't help us identify missing SMD NORADs?
            if norad in smd_norads:
                #logging.info('COMBINED has SMD NORAD=%s name=%s' % (norad, name))
                combined_smds[norad] = tle # TODO: does this match what we get post-processing?

    # Lookup SMD NORAD IDs in Celestrak TLEs
    founds = []
    notfounds = {}
    found2 = {}
    for smd_norad, smd_row in smd_norads.items():
        if smd_norad in tles_by_norad:
            founds.append(tles_by_norad[smd_norad])
            found2[smd_norad] = tles_by_norad[smd_norad]
        else:
            logging.warning('SMD NOT found norad=%s row=%s' % (smd_norad, smd_row))
            notfounds[smd_norad] = smd_row

    logging.info('norad found=%d found2=%d notfound=%d' % (len(founds), len(found2), len(notfounds)))

    if combined_smds != found2:
        logging.error('combined != nfound2')
        import pdb; pdb.set_trace()

    # Output our found sats as a TLE filex1
    with open(SMD_TLE_FILENAME, 'w') as smd_tles:
        for norad, tle in found2.items():
            smd_tles.write("%-24s\r\n" % tle['name'])  # DOS line endings match tle1, tle2
            smd_tles.write(tle['tle1'])
            smd_tles.write(tle['tle2'])

if __name__ == '__main__':
    # Default to the paths used on the Django server so the cron job doesn't break.
    # Override for testing by passing options, e.g., -t /tmp/tle -s smd_folder

    parser = argparse.ArgumentParser(description='Copy TLEs from Celestrak, build COMBINED.txt file, and SMD.txt file from NASA Science CSV missions list.')
    parser.add_argument('-t', '--tle-dir', default=TLE_OUTPUT_BASE_PATH,
                        help='Directory to save the TLEs; must exist (default="%s", for testing, maybe /tmp/tle)' % TLE_OUTPUT_BASE_PATH)
    parser.add_argument('-s', '--smd-csv', default=SCIENCE_SATELLITES_FOLDER,
                        help='Path to SMD Missions CSV with URL slug, name, NORAD id, COSPAR id, Comment (default="%s", for testing maybe /tmp/smd_folder' %  SCIENCE_SATELLITES_FOLDER)
    args = parser.parse_args()
    main(tle_output_base_path=args.tle_dir, science_satellites_folder=args.smd_csv)


