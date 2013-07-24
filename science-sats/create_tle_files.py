#!/usr/local/bin/python

# Pull each Celestrak TLE file and save a local copy, a combined .txt file

# Parse the CSV of Science satellites SMD wants by name, find satellite ID from
# Celestrak files and create a SMD.txt file.

# The names are unlikely to match perfectly -- parenthetical suffixes, etc

# We aren't worrying about duplicates here, do it in postprocessing.
# TODO:
# - is there a way to find this list of files? or is it static?

from collections import defaultdict
import csv
import logging
import os
import urllib2

TLE_END_PATH = "/repfiles/nasascience/media/sot/tle/"  # For Production
# TLE_END_PATH = "tle/"  # for testing

CELESTRAK_BASE_URL = "http://www.celestrak.com/NORAD/elements/"
COMBINED_NAME = TLE_END_PATH + "COMBINED-NEW.txt"

WRITE_FAIL = False


# Algorithm to find latest `satellites.csv` in Fein CMS's medialibrary.
folder = '/repfiles/nasascience/media/medialibrary'
satellites = []
for (dirpath, dirname, filenames) in os.walk(folder):
    for file in filenames:
        if file.endswith('satellites.csv'):
            path = os.path.join(dirpath, file)
            satellites.append({'path': path, 'mtime': os.stat(path).st_mtime})

max_time = max(satellite['mtime'] for satellite in satellites)

newest_csv_placement = next(index for (index, d) in enumerate(satellites) if d['mtime'] == max_time)

# The CSV is (typical) a visually-formatted file with:
#   HEADER LINE
#   Division, Name, Stuff
#   Description, stuff
# We will have to do some annoying parsing to get the right lines.
# SCI_CSV = TLE_END_PATH + 'NASA-Satellites-for-SkyWatch.csv'  # For Production
# SCI_CSV = 'satellites.csv'  # For Testing
SCI_CSV = satellites[newest_csv_placement]['path']  # Admin accessible version

CELESTRAK = TLE_END_PATH + 'COMBINED.txt'
SMD_TLE_FILENAME = TLE_END_PATH + 'SMD.txt'

files = {
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

# Create files from list above. Passes if not text file from URL.
with open(COMBINED_NAME, 'w') as combined:
    for fname, description in files.items():
        response = urllib2.urlopen(CELESTRAK_BASE_URL + fname)
        if (response.headers.getheader('content-type') == 'text/plain'):
            tles = response.read()
            with open(TLE_END_PATH + fname, 'w') as out:
                out.write(tles)
            combined.write(tles)
        else:
            WRITE_FAIL = True
            pass

# Overwrites COMBINDED.txt if there was no issue
if(not WRITE_FAIL):
    os.rename(COMBINED_NAME, TLE_END_PATH + 'COMBINED.txt')
else:
    os.remove(COMBINED_NAME)

scisats = {}
scidivs = defaultdict(list)

with open(SCI_CSV) as sci_csv:
    reader = csv.DictReader(sci_csv)
    for row in reader:
        division = row['Division']
        name = row['Name'].strip()
        if division:
            scisats[name] = division
            scidivs[division].append(name)

# Get TLEs that we can look up by name from Celestrak
tles_by_name = {}
tles_by_id = {}
with open(CELESTRAK) as celestrak:
    while True:                 # need to find EOF
        name = celestrak.readline().strip()
        if not name:
            break
        tle1 = celestrak.readline()
        tle2 = celestrak.readline()
        try:
            tid = tle2.split()[1]
        except IndexError, e:
            logging.warning("Can't split to find ID in TLE2: %s" % tle2)
            continue
        tle = {'name': name,
               'id': tid,
               'tle1': tle1,
               'tle2': tle2,
               }
        tles_by_name[name] = tle
        tles_by_id[id] = tle

# Lookup Science names in Celestrak names
found = 0
notfound = 0
founds = []
notfounds = []
for sciname in scisats:
    sciname_up = sciname.upper()
    if sciname_up in tles_by_name:
        #print sciname, tles_by_name[sciname_up]
        founds.append(tles_by_name[sciname_up])
        found += 1
    else:
        notfound += 1
        notfounds.append(sciname)

# Output our found sats as a TLE filex1
with open(SMD_TLE_FILENAME, 'w') as smd_tles:
    for sat in founds:
        smd_tles.write("%-24s\r\n" % sat['name'])  # DOS line endings match tle1, tle2
        smd_tles.write(sat['tle1'])
        smd_tles.write(sat['tle2'])
