==============================
 SOT: Satellite Orbit Tracker
==============================

Goal
====

We seek to develop a replacement for the functionality of JTrack-3d
which runs in the browser, implemented as JavaScript.

Previous Work
=============

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
===================

Before we embark on porting code we need to be able to run existing
code, gather results, and compare with published results to ensure our
builds are OK.  Code is avaialable in FORTRAN, MATLAB, and also C++,
Java, Pascal, and possibly others.

MATLAB
------

My reading of the Miura paper indicates that MATLAB implementaiton is
most robust, but MATLAB is commercial software costing around $2000
plus plugins.  I have not yet been able to run the .m files with
clones such as Octave or FreeLab.

FORTRAN
-------

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

