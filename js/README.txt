===========
 README JS
===========

This is an effort to translate Miura's MATLAB code into JavaScript.

That code does the SGP4 calculations.  We'll start with this and
implement a similar functionality to `testmat.m' so we can verify our
math implementation.

Neither the AIAA nor Miura's code do any UI or visualiztions; that will come later.

Concerns
========

Ensure trig functions in JS Math.* work as MATLAB's.

I've seen some comparisons with floating point, e.g.::

    if (sinim !== 0.0)

This seems unreliable to me.

Does the MATLAB rem() remainder work identically to JS's `%` operator?
For both positive and negative numbers? Floating and integer?

PROBLEMS
========

Missing Math
------------

I need `sinh' and `asinh`; they aren't in the Math module.

Array Notation in Assignment
----------------------------

Some of the .m files assigned things like::

  [hbar] = cross(r,v)

I presume this is MATLAB notation that [hbar] is an array or list. If
so, then we just assign it as::

  hbar = cross(r,v)

and use it normally.

Destructured Assignment
-----------------------

I can't do destructured assignment (until JavaScript-1.7) so I can't do things like::

  [x, y, z] = myVector(whatever);

Our functions tend to return gobs of data as lists like this: gravity
constants, globals, etc. I dread having to do stuff like::

  tmp = getgravc(whichconst);
  mu            = tmp[0];
  radiusearthkm = tmp[1];
  ...
  j3oj2         = tmp[7];

Maybe after I go through the painful translation I can modify things
to use objects so we can use them more explicitely and easily.

Missing Math functions
----------------------

I defined it cross() and dot() in rv2coe.js, maybe duplicated
elsewhere; put them in a math library or something.  

Do same for sinh() and asinh().

Perhaps add them to Math.prototype.

angl()
sign()



MATLAB Array/list subscripts are (), 1-based
--------------------------------------------

Ensure we convert foo(1) to foo[0], etc



ANNOYANCES
==========

Emacs-23 has js-mode. It doesn't properly indent nor highlight `var`
continuation lines. This makes it hard to see what's intended, and
formats differently than all the other JS out there.
