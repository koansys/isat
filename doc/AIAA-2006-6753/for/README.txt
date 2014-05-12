========
 README
========

Build
=====

Use the new Makefile::

  make

Run
===

I need to reread the papers to see how I should run this, but try
this::

  ./testfor

   Input Opsmode - a, i
  i
   Input typerun - V, C, M
  m
   input mfe, epoch (YMDHMS), or dayofyr approach, M,E,D
  m
   Input whichconst - 721, 72, 84
  72
   Input elset filename
  TEME.TLE
             5
   hit return to continue, or ctr-c to quit

             0           1
           999           2
  At line 266 of file testfor.for
  Fortran runtime error: Non-existing record number

Obviously that was a problem. I need better run params, later...

Now check the `tfor.out` output.

What's `tfora.out` and `Sgp4Rec.bak`?

