#!/usr/bin/env python

# Compare our calculated results from Miura's SGP4-VEC.TLE with the
# results identified in his paper's APPENDIX C - Verifiation of
# Results Data

# We have to split on spaces since we can't get FORTRAN-style fixed
# columns from his paper.

# Format for each satellite is like:
#
#  4632 xx
#
#      0.00000000    2334.11450085  -41920.44035349      -0.03867437  2.826321032 -0.065091664  0.570936053
# -5184.00000000  -29020.02587128   13819.84419063   -5713.33679183 -1.768068390 -3.235371192 -0.395206135 
# -5064.00000000  -32982.56870101  -11125.54996609   -6803.28472771  0.617446996 -3.379240041  0.085954707 
# -4944.00000000  -22097.68730513  -31583.13829284   -4836.34329328  2.230597499 -2.166594667  0.426443070 
# -4896.00000000  -15129.94694545  -36907.74526221   -3487.56256701  2.581167187 -1.524204737  0.504805763 
#
# Each satellite has an "xx" line with the satellite number.
# Data lines contain: time, x,y,z-position, x,y,z-velocity
###############################################################################

import sys

TOOMUCH = 5e-8                  # how much difference to tolerate

def parse_file(fname):
    # open and parse file into nested dicts keyed on satellite number,
    # attributes are a list (one per time event) of a (time, x,y,z, vx,vy,vz)

    satdata = {}
    satnum = 0
    for line in open(fname, 'r'):
        line = line.strip()
        if line == "":
            continue
        if line.endswith('xx'):
            (satnum, xx) = line.split()
            satdata[satnum] = []
        else:
            # Miura's verification file only has the first 7 fields
            (t, x, y, z, vx, vy, vz) = line.split()[:7]
            satdata[satnum].append((t, x, y, z, vx, vy, vz))
    return satdata

if __name__ == '__main__':
    if len(sys.argv) != 3:
        raise RuntimeError("Usage: %s truth_output_path calculated_output_path" % sys.argv[0])

    truth = parse_file(sys.argv[1])
    calcd = parse_file(sys.argv[2])

    for sat in sorted(truth.keys(), cmp=lambda x,y: cmp(int(x), int(y))):
        print "Satellite", sat
        tlines = truth[sat]
        try: 
            clines = calcd[sat]
        except KeyError, e:
            print "ERROR: sat=%s not found in calculated results (it's in truth data)" % sat
            continue
        if len(tlines) != len(clines):
            print "ERROR: sat=%d mismatched number of lines: tlines=%d clines=%d:" % (
                sat, len(tlines), len(clines))
            continue
        for t, c in zip(tlines, clines):
            if t != c:
                val_pairs = zip(t, c)
                diffs = [ float(tt) - float(cc) for (tt, cc) in val_pairs ]
                oks = [ "ok" if abs(d) < TOOMUCH else "TOO MUCH" for d in diffs]
                if "TOO MUCH" in oks:
                    print "ERROR: sat=%s mismatch line\n truth=%s \n calcd=%s" % (sat, t, c)
                    print " diffs=%s" % diffs
                    print " oks=%s" % oks
                else:
                    print "WARNING: sat=%s not quite exact but close enough\n truth=%s \n calcd=%s" % (sat, t, c)

