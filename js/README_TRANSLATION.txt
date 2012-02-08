===================
 TRANSLATION NOTES
===================

Array offsets
- MATLAB is 1-based: "abc"[2] => "b"
- JS is 0-based:     "abc"[1] => "b

String slicing:
- MATLAB: "abc"[2] => "b"
- JS: "abc".slice(1) => "bc" (to end of string)

String indices:
- MATLAB does "abc"[2:3] => "bc"
- JS: "abc".slice(1, 3) => "bc"

Arrays
- MATLAB presumably can return true 2D (and 3D) arrays
- JS returns lists of lists

sgp4init returned [satrec], we now just return satrec

Exponentiation
- MATLAB uses "^"
- JS *silently* fails on "^", use Math.pow(base, power)

Question
========

Can we implement in JS a replacement for 'input()' that takes a
prompt, gets input, and returns the value given as a string? A popup
perhaps?

