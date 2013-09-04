#!/usr/bin/env python
# Pull each Celestrak TLE file and save a local copy, a combined .txt file
# In a separate process, well have to produce artifacts like SMD satellite file.
# We aren't worrying about duplicates here, do it in postprocessing.
# TODO:
# - is there a way to find this list of files? or is it static?

import urllib2

CELESTRAC_BASE_URL = "http://www.celestrak.com/NORAD/elements/"
COMBINED_NAME = "COMBINED.txt"
ROOT_DOMAIN = "/usr/local/src/koansys/isat/test_folder/"

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

with open(ROOT_DOMAIN + COMBINED_NAME, 'w') as combined:
    for fname, description in files.items():
        response = urllib2.urlopen(CELESTRAC_BASE_URL + fname)
        tles = response.read()
        with open(ROOT_DOMAIN + fname, 'w') as out:
            out.write(tles)
        combined.write(tles)

# Parse the CSV of Science satellites SMD wants by name,
# find satelite ID from Celestrak files.
# The names are unlikely to match perfectly -- parenthetical suffixes, etc

# The CSV is (typical) a visually-formatted file with:
#   HEADER LINE
#   Division, Name, Stuff
#   Description, stuff
# We will have to do some annoying parsing to get the right lines.

# The TLE file is sets of 3 lines with Name, TLE1, TLE2; ID is 2nd field sans U
#   GALILEO-PFM (GSAT0101)
#   1 37846U 11060A   12293.53312491  .00000049  00000-0  00000-0 0  1435
#   2 37846  54.7963 119.5777 0000994 319.0618  40.9779  1.70474628  6204

# 2012-10-22: Found=35,  Not Found=164

from collections import defaultdict
import csv
import logging

SCI_CSV = 'NASA-Satellites-for-SkyWatch.csv'
CELESTRAK = ROOT_DOMAIN + 'COMBINED.txt'
SMD_TLE_FILENAME = ROOT_DOMAIN + 'SMD.txt'

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
               'tle1': tle1,        # don't really need
               'tle2': tle2,        # don't really need
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
