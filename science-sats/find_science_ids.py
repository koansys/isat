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

# Phase IDs:
# 1: under study
# 2: development
# 3: operating
# 4: past
# 14: studied
# 15: extended


import csv
import logging

SCIENCE_CSV = "missions_mission_titles_phases.csv"
COMBINED_TLES = "COMBINED.txt"
PHASES_WITH_IDS = ['3', '4', '15']

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
        tles[name] = {'norad' : tle1[2:7].strip(),
                      'intldesig': tle1[9:17].strip() # YYNNNPPP
                      }

logging.info('Read %d TLE entries' % len(tles))
# Try to find each sat title/slug in TLEs data.
# Don't know what to do yet for ones we can't find
# Store sats like:
# sat['science_name'] = {'tle_name': 'ACTS 1', 'norad': '02608', 'intldesig': 2}

sats = {}
num_with_ids = 0
num_sans_ids = 0
with open(SCIENCE_CSV) as science_csv:
    reader = csv.DictReader(science_csv)
    for linenum, row in enumerate(reader):
        if row['phase_id'] not in PHASES_WITH_IDS:
            logging.info('Skip phase_id=%s for %s' %
                         (row['phase_id'], row['slug']))
            num_sans_ids += 1
            continue
        num_with_ids += 1
        title = row['title']
        slug = row['slug']
        upslug = slug.upper()
        if title in tles:
            tle = tles[title]
            sats[title] = tle
            sats[title]['tle_name'] = title # same name, shocking
            logging.info('Found by title="%s"' % title)
        elif upslug in tles:
            tle = tles[upslug]
            sats[title] = tle
            sats[title]['tle_name'] = upslug # different name
            logging.info('Found by upslug="%s"' % upslug)

        # TODO: store from -> to URL path
        # /sot/norad/26871 -> /missions/goes-m
        else:
            logging.warning('Can\'t find title="%s" slug="%s"' %
                            (title, slug))

logging.info('Num with ids=%d sans=%d' % (num_with_ids, num_sans_ids))
logging.info('Found %d sats of %d in TLEs' % (len(sats), linenum + 1))

