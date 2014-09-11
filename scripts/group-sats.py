#!/usr/bin/env python

# Read the files specified on the command line, pull satellites and
# group by filename (satellite type)

# Usage: ./group-sats.py *.txt

import logging
import sys

from collections import defaultdict

logging.basicConfig(level=logging.INFO)

satgroups = defaultdict(list)
sattypes  = []
for fname in sys.argv[1:]:
    logging.info("File %s" % fname)
    sattype = fname.split('.')[0]
    sattypes.append(sattype)    # record our canonical types (groups)
    # TODO: clean filename
    with open(fname) as satfile:
        for line in satfile:
            if not (line.startswith('1 ') or line.startswith('2 ')):
                satgroups[line.strip()].append(sattype)

# display


print "%-25s, " % "SATELLITE",
print ", ".join(sattypes)
for sat, groups in sorted(satgroups.items()):

    print "%-25s, " % sat,          # sat name is first column
    for sattype in sattypes:    # for each possible type
        if sattype in groups:   # if it's in my satellites list of types
            print "%s," % sattype,
        else:
            print "%s," % (" " * len(sattype)),
    print




                           
