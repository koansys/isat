#!/usr/bin/env python
# -*- encoding: utf-8 -*-
# Generate call graph of MATLAB/Octave files/functions for GraphViz.

# Usage:
#  ../callgraph.py `ls *\.m |grep -v _test\.m` > ~/Desktop/matlab.dot
#
# then render with:
#   dot -Tpdf -o ~/Desktop/matlabdot.pdf ~/Desktop/matlab.dot

# We assume one function per file, with same name as file.
# From each filename, derive and save function name.
# For each filename, look for "functionname\s*("
# or "functionname\s;" for every functionname.
# Output list of functions and callees in dot notation.

# WARNING
# We can't reliably avoid comments and quotes when intermingled
# so don't try now; this will lead to false positives.
#
# NOTE
# Hardwiring functions to ignore: I've added isequalRel
# to the files to generate assertions for tests; ignore them.

import sys
import os.path
import re
import pprint
import logging

IGNORE_FUNCS = ['isequalRel']

logging.basicConfig(level=logging.INFO)

def fname_to_func(fname):
    return re.sub("\.m$", "", os.path.basename(fname))

# Get target files from command line so user can exclude stuff like _test.m

files = sys.argv[1:]

# Get function names from file names
funcs = []
for fname in files:
    base = fname_to_func(fname)
    if base not in IGNORE_FUNCS:
        funcs.append(base)

calls = {}                  # dict keyed on func storing list of called funcs
logging.info("funcs: %s" % funcs)

for fname in files:
    #logging.info("fname=%s" % fname)
    filefunc = fname_to_func(fname)
    calls[filefunc] = []
    content = []
    with open(fname) as f:
        content = f.read()
        for func in funcs:
            if func == filefunc: # this is the file the func is defined in
                continue
            re_function = "\W%s\s*\(" % func # this looks across \n too
            re_import   = "\W%s\s*;"  % func
            if re.search(re_function, content) or re.search(re_import, content):
                if func not in calls[filefunc]:
                    calls[filefunc].append(func)
                continue
print "digraph matlab {"
print "node [shape=box];"
for funcfile in sorted(calls):
    if not calls[funcfile]:
        print '%s;' % funcfile
    else:
        for func in calls[funcfile]:
            print '%s -> %s;' % (funcfile, func)
print "}"

