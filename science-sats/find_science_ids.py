#!/usr/bin/env python
# Lookup Science sats in TLEs to find NORAD, IntlDesig IDs
# Output table suitable for adding to FeinCMS redirector:
# id (null), source URL, target URL
# Source URL should have both NORAD and IntlDesig variants.
# TODO:
# - prefix epoch with century, 19 or 20? (epoch 57-99 => 19; 00-56 -> 20)
# - launch date future: has no ID, no TLE
# - science.nasa.gov has missions/cluster but TLEs have CLUSTER II-FM5,6,7,8

# TLEs file is sets of 3 lines looking like:
# GOES 12                 
# 1 26871U 01031A   12339.37812238 -.00000274  00000-0  10000-3 0  8358
# 2 26871   2.6330  71.2258 0002186 201.9435 236.9577  1.00277188 41701

# CSV file has fields:
# - title: GOES I - M
# - slug: goes-m
# - full_name: Geostationary Operational Environmental Satellite, I-M Series
# - home_page: of original site, don't use: http://goespoes.gsfc.nasa.gov/
# - launch_date: Apr 13, 1994
# - phase_id: 1,2,3,4,14,15 (see below)

import csv
import logging

SCIENCE_CSV = "missions_mission_titles_phases.csv" # Exported from CMS DB
COMBINED_TLES = "COMBINED.txt"
OUTPUT_CSV = "output.csv"       # will be gratuitously, silently overwritten
OUTPUT_KEYS   = [               # sucks these have to be hand-coded
    'title', 'slug', 'tle_name',
    'full_name', 'home_page',
    'noradid', 'intldesig',
    'noradid_url', 'intldesig_url', 'mission_url',
    'launch_date', 'phase_id', # are these needed in output?
    ]
PHASE_NAMES = {'1': 'Under Study',
               '2': 'Development',
               '3': 'Operating',
               '4': 'Past',
               '14': 'Studied',
               '15': 'Extended'}
PHASES_WITH_TLES = ['3', '15']

logging.basicConfig(level=logging.INFO)

# cache the TLE info

tles = {}
with open(COMBINED_TLES, 'r') as tle_file:
    while True:
        name = tle_file.readline().strip()
        if not name:           # end of file
            break
        tle1 = tle_file.readline().strip()
        tle2 = tle_file.readline().strip()
        tles[name] = {'noradid' : tle1[2:7].strip(),
                      'intldesig': tle1[9:17].strip() # YYNNNPPP
                      }

logging.info('Read %d TLE entries' % len(tles))
# Try to find each sat title/slug in TLEs data.
# Don't know what to do yet for ones we can't find
# Store sats like:
# sat['science_name'] = {'tle_name': 'ACTS 1', 'norad': '02608', 'intldesig': 2}

# CSV exported from CMS has: title, slug, full_name, launch_date, phase_id, home_page

sats = {}
num_with_ids = 0
num_sans_ids = 0
num_with_tles = 0
with open(SCIENCE_CSV) as science_csv:
    reader = csv.DictReader(science_csv)
    for linenum, row in enumerate(reader):
        if row['phase_id'] not in PHASES_WITH_TLES:
            logging.info('Skip phase_id=%s (%s) for %s' %
                          (row['phase_id'], PHASE_NAMES[row['phase_id']], row['slug']))
            num_sans_ids += 1
            continue
        num_with_ids += 1
        title = row['title']
        slug = row['slug']
        upslug = slug.upper()
        satName = False
        # Try to find a match by a couple attribute heuristics; don't be too sloppy
        if title in tles:
            satName = title
            logging.info('Found by title="%s"' % title)
        elif upslug in tles:
            satName = upslug
            logging.info('Found by upslug="%s"' % upslug)
        # If we got one, store the other attrs:
        if satName:
            num_with_tles += 1
            tle = tles[satName]
            # TODO: add intldesig field
            sats[satName] = {'tle_name'      : satName,
                             'noradid_url'   : '/sot/noradid/%s'   % tle['noradid'],
                             'intldesig_url' : '/sot/intldesig/%s' % tle['intldesig'],
                             'mission_url'   : '/missions/%s'      % row['slug'],
                             }
            sats[satName].update(tle) # noradid, intldesig
            sats[satName].update(row) # title, slug, full_name, launch_date, phase_id, home_page
        # TODO: if we did NOT find one, store what we know, leave blank what we don't -- by what key?
        else:
            logging.warning('Can\'t find title="%s" slug="%s"' %
                            (title, slug))
            # picking 'title' as key arbitrarily, could be 'slug' I suppose
            sats[title] = row # title, slug, full_name, launch_date, phase_id, home_page
            # TODO: add intldesig field
            sats[title].update({'mission_url' : '/missions/%s' % row['slug']})


logging.info('Num with  IDs=%d sans=%d' % (num_with_ids, num_sans_ids))
logging.info('Num with TLEs=%d' % num_with_tles)
logging.info('Found %d sats of %d in TLEs' % (len(sats), linenum + 1))

from pprint import pprint as pp

# Save it as a CSV so we can manually update it.
# Really want URLs to be clickable to assist humans; may have to do as HTML rather than CSV.

with open(OUTPUT_CSV, 'w') as output_csv:
    writer = csv.DictWriter(output_csv, OUTPUT_KEYS)
    writer.writeheader()
    # for k, v in sats.items():
    #     writer.writerow(v)
    writer.writerows(sats.values())


