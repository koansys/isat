==============================
 SOT: Satellite Orbit Tracker
==============================

Goal
====

We are developing a replacement for the functionality of JTrack-3D
which uses the SGP4 algorithms to calculate satellite positions and
renders them in 3D using the Cesium engine -- completely in the browser,
implemented as JavaScript.

(Dis)Claimer
============

This is my first attempt at JavaScript.  I also haven't used MATLAB
until now.

As such, my JavaScript code is not following good practices for
structure, modularity, loading, inhertiance, etc, etc.  I'm starting
with bare JavaScript before using jQuery, RequireJS, AMD, etc. I'm
learning, and the Cesium code is really a good exemplar.

Overview
========

I've translated the SGP algorithms from MATLAB which we believe to be
the best current propagator implementation; see Miura's PhD thesis.
It's a direct translation and has some very un-JavaScript structure,
including globals used by the original FORTRAN and MATLAB
implementations.  This needs to be restructured.  I've written tests
to capture MATLAB calculations and translated them to validate the
JavaScript implementation.

We use NORAD Two Line Element (TLE) data which describes the last
known position, velocity, and orbital parameters for each satellite.
These are pulled from Dr. T.S. Kelso's site Celestrak.com which is
canonical for public data and updated frequently.  Currently the TLE
files are stored with the code for development, but we plan to have
the browser download them directly and cache them locally using HTML5
local storage.

AGI's Cesium is an excellent virtual globe and map engine, built on
WebGL, and open sourced on GitHub.  It would not be possible for us to
provide sophisticated visualizations without this software.

We believe client-side JavaScript is the best way to deliver this
content to users without requiring plugings (e.g., Eyes On The Solar
System's requirement for the Unity game engine, or World Wind's Java
download). While not all browsers support WebGL now, most desktops
browsers do and mobile is improving.  Running client-side means we do
not need a farm of servers to stream satellite locations to clients:
the calculations are done in the browsers themselves.

The code here is divided into two areas: SGP4 satellite calculations
and Cesium-based visualizaiton.

SGP4 Satellite Calculation
==========================

Previous Work
-------------

This entails replicating the mathematical models, calculations
described by:

* SPACETRACK REPORT NO. 3: Models for Propagation of NORAD Element Sets
  Felix R. Hoots, Ronald L. Roehrich
  December 1980
  Package Compiled by TS Kelso
  31 December 1988

* Revisiting Spacetrack Report #3
  David A. Vallado
  Paul Crawford
  Richard Hujsak
  T. S. Kelso
  http://celestrak.com/publications/AIAA/2006-6753/AIAA-2006-6753.pdf
  Code: http://celestrak.com/publications/AIAA/2006-6753/AIAA-2006-6753.zip

* Comparison and Design of Simplified General Perturbation Models
  (SGP4) and Code for NASA Johnson Space Center, Orbital Debris
  Program Office
  Nicholas Zwiep Miura
  May 2009
  http://digitalcommons.calpoly.edu/theses/86/

* PREDICT software in various languages, drives the SGP model

Validation approach
-------------------

Before we embark on porting code we need to be able to run existing
code, gather results, and compare with published results to ensure our
builds are OK.  Code is avaialable in FORTRAN, MATLAB, and also C++,
Java, Pascal, and possibly others.

MATLAB
~~~~~~

My reading of the Miura paper indicates that MATLAB implementaiton is
most robust, but MATLAB is commercial software costing around $2000
plus plugins.  I've been running the .m files with GNU Octave, and
with minor changes, FreeLab.

Change dir to the Miura paper, SGP MATLAB subdir, then::

  SGP4 MATLAB$ octave testmat.m
  GNU Octave, version 3.4.3
  Octave was configured for "x86_64-apple-darwin11.2.0".

  input opsmode afspc a, improved i i
  input type of run c, v, m: v
  input constants 721, 72, 84 72
  input elset filename: SGP4-VER.TLE

  warning: /Users/cshenton/Projects/smd/sot/Miura_Thesis_CD/SGP4 MATLAB/days2mdh.m: possible Matlab-style short-circuit operator at line 45, column 41
  ...
   4632
  ...
  # *** error: t:= 494.202867 *** code =   1
  ...
   29238
   88888

We did a 'verify' run, so examine results in the generated tmatver.out file.

Miura's paper only hints at how to run the 'manual' run, but here's an attempt::

  SGP4 MATLAB$ octave testmat.m
  GNU Octave, version 3.4.3
  Octave was configured for "x86_64-apple-darwin11.2.0".

  input opsmode afspc a, improved i i
  input type of run c, v, m: m
  input mfe, epoch (YMDHMS), or dayofyr approach, m,e,d: d
  input constants 721, 72, 84 72
  input elset filename: SGP4-VER.TLE
  input start year2012
  input start dayofyr1
  input stop year2012
  input stop dayofyr2
  input time step in minutes 60

   5

  input start year  ^C

We have to break out with ^C, it seems to want new start/stop
datestamps for each different satellite found in the TLE file, which
is a bit painful.  I've fixed a format string problem and the
generated `tmat.out` file looks like::

   5 xx
         0.00000000    7022.46529266   -1400.08296755       0.03995155  1.893841015  6.405893759  4.534807250
   6054069.67110716   -4710.81527506   -7217.35635029    -447.90939263  4.043257922 -3.916653908 -3.811906057  2012  1  1  0: 0: 0.000000
   6054129.67110716    8574.68620318    1135.34666356   -4152.11184918 -0.507298882  5.488137517  2.557985956  2012  1  1  0:59:59.999987
   ...
   6055449.67110716    8360.90621257   -1951.35032343   -5195.10657947  1.568213864  5.331466059  1.544093857  2012  1  1 23: 0: 0.000013
   6055509.67110716   -5951.56210276    1345.16358168    3674.34009534 -3.239864628 -7.270449185 -1.546601204  2012  1  2  0: 0: 0.000000



FORTRAN
~~~~~~~

Miura also mentions this implementation, and offers fixes in his
paper.  I can compile it with GNU FORTRAN but don't know what data
files to feed it::

  $ ./a.out
   DO YOU WANT TO RUN THE ECC(1),CIRC(0), OR BOTH (2):
  2
  mkdir: ecc: File exists
  mkdir: circ: File exists
   INPUT OBSERVATIONS FILE :

What is the format and content of this Observations File?

I can compile the FORTRAN code from the AIAA ZIP and it generates the
expected `tfor.out` file.  So my intent is to automate the build of
that code, generation of output corresponding to the parameters  of the
published papers, and then comparison of values with those papers.

Once we start porting whichever implementation, we will compare our
code's output with that of the truthy AIAA or Miura outputs.  This
should be automated.

To that end, I am including in this repo code referenced by the AIAA
and Miura papers.

Visualization using Cesium
==========================

TBD

Resources
---------

Start here, check the demos; the Lots of Satellites demo blew me away
and sold me on it immediately:

  http://cesium.agi.com/

The code is available on GitHub:

  https://github.com/AnalyticalGraphicsInc/cesium

They encourage forking and pull requests.

The Cesium-dev mailing list is very helpful, lots of smart people there:

  https://groups.google.com/forum/#!forum/cesium-dev

Trying it out
-------------

It would be nice if you could clone this code, then open the
viz/index.html file in a browser.  Unfortunately, images and globe
backgrounds won't render due to cross-domain issues "SECURITY_ERR: DOM
Exception 18" on Chrome. Firefox seems to render everything
fine. Safari renders the images but for me is stalled loading the
tiles from Bing (beachball of death).

Instead, put the unpacked files into a place your web server can see
them, then hit the index.html.  On my Mac, I put it under ~/Sites/

Browser support
---------------

I'm developing on OS X.

I primarily use Chrome (22.0.1229.94) to visualize it.

Firefox 16.0 and 17.0 have worked fine for me.

Safari 6.0.1 doesn't have WebGL support unless you enable it:
Preference, Advanced, Show Develop menu in menu bar; Develop menu,
Enable WebGL.

Android CyanogenMod 9 on HP TouchPad:

- The stock browser partially renders some statellites and globe, but then hangs.
- Firefox runs and displays the calculations but shows me a blank screen.
- Dolphin: TBD

Android CyanogenMod 7 on Nook Color:

- Stock browser: TBD
- Firefox: TBD
- Dolphin: TBD

Android CyanogenMod (SuperSonic) 7.2.0 on HTC Evo 3G (2+ years old):

- Stock Browser: Renders UI controls which work, but no globe or positions displayed
- Firefox:       Renders UI controls which work, but no globe or positions displayed
- Dolphin:       Renders UI controls which work, but no globe or positions displayed

