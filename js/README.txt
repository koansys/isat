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

