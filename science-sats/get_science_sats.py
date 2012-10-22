#!/usr/bin/env python
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
CELESTRAK = 'COMBINED.txt'
SMD_TLE_FILENAME = 'SMD.txt'

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
print "# Science sats:", len(scisats)
print "# Science divs:", len(scidivs)

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
            import pdb; pdb.set_trace()
            continue
        tle = {'name': name,
               'id': tid,
               'tle1': tle1,        # don't really need
               'tle2': tle2,        # don't really need
               }
        tles_by_name[name] = tle
        tles_by_id[id] = tle
print "# Celestrak sats:", len(tles_by_name)

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
print "Found=%d,  Not Found=%d" % (found, notfound)
print "Not Founds:"
print sorted(notfounds)

# Output our found sats as a TLE filex1
with open(SMD_TLE_FILENAME, 'w') as smd_tles:
    for sat in founds:
        smd_tles.write("%-24s\r\n" % sat['name']) # DOS line endings match tle1, tle2
        smd_tles.write(sat['tle1'])
        smd_tles.write(sat['tle2'])

