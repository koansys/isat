==========
 PROBLEMS
==========

Matlab code uses fgets().
FreeMat doesn't have fgets() but fgetline() works.
Octave has fgets() but no fgetline().


Miura's SGP4 MATLAB files
=========================

I don't have the $2K for MATLAB so trying FreeMat and Octave.

NB: The SGP4-VER.TLE file uses `#` delimited comments to annotate and
indicate satellite names, while the NORAD TLEs from Celestrak indicate
names as the 0th line before TLE line1 and line2.


FreeMat
-------

Use the File Browser pane to walk into the dir and select
`testmat.m`. In the editor window, hit the green arrow Play
key.

If I run through the GUI green "play" forward arrow, the first input
query about "type of run" is missed. In the console, do::

  source testmat.m

I had to replace MATLAB's `fgets(infile, 130)` with
`fgetline(infile)` as FreeMat doesn't have fgets().

I had to comment
out the `globals` definition in getgravc.m else it shadowed the return
of the list of values to the caller, and `radiusearthkm` got set to
0.0 in the callers.

Answer the prompts in the interactive prompt window::

  input type of run c, v, m: v
  input constants 721, 72, 84 72
  input elset filename: SGP4-VER.TLE

and watch it go::

   5
   4632
   6251
   8195
   9880
   9998
   11801
   14128
   16925
   20413
   21897
   22312
  # *** error: t:= 494.202867 *** code =   1
   22674
   23177
   23333
   23599
   24208
   25954
   26900
   26975
   28057
   28129
   28350
  # *** error: t:= 1560.000000 *** code =   1
   28623
   28626
   28872
   29141
  # *** error: t:= 440.000000 *** code =   6
   29238
   88888

The code has text output commented out, indicating:

1. error em: ((em >= 1.0) || (em < -0.001) || (am < 0.95))
6. decay condition: mrt < 1.0

I don't know what those mean.

The output is send to tmatver.out (in 'v' verification mode). I don't
understand it: I see the clock ticking in intervals of 120 but don't
know what the lines are with non-120-interval first fields::

 88888 xx

       0.00000000    2328.96975262   -5995.22051338    1719.97297192  2.912073281 -0.983417956 -7.090816210

     120.00000000    1020.69234558    2286.56260634   -6191.55565927 -3.746543902  6.467532721  1.827985678 

    6626.014153 0.010521   72.83280  115.75005   63.53600  220.46695  221.25411 

     240.00000000   -3226.54349155    3503.70977525    4532.80979343  1.000992116 -5.788042888  5.162585826 

    6633.574667 0.009052   72.84300  115.55580   59.75875  346.41877  346.66076 

     360.00000000    2456.10706533   -6071.93855503    1222.89768554  2.679390040 -0.448290811 -7.228792155 

Columns are defined to be, left-to-right:

  Minutes from Epoch
  X-Position, Y-Position, Z-Position
  X-Velocity, Y-Velocity, Z-Velocity
  Year, Month, Day
  Hour, Minute, Second

If I ignore the non-intervalic lines, a visual inspection shows that
my results for satellite 5 and 8888 have the same results as those in
Appendix C.


Octave
------

I built Octave after arguing with::

  brew install octave

I have to use MatLab's fgets() as it doesn't have FreeMat's
fgetstring.

The results seem to match.

When I first rand it, it complained::

  error: for A^b, A must be square
  error: called from:
  error:   /Users/cshenton/Projects/smd/sot/Miura_Thesis_CD/SGP4 MATLAB/twoline2rv.m at line 165, column 13
  error:   /Users/cshenton/Projects/smd/sot/Miura_Thesis_CD/SGP4 MATLAB/testmat.m at line 78, column 40

This occurred calculating satrec.a::

  %     // ---- convert to sgp4 units ----
    satrec.a    = (satrec.no*tumin)^(-2/3);                % [er]
    satrec.ndot = satrec.ndot  / (xpdotp*1440.0);          % [rad/min^2]
    satrec.nddot= satrec.nddot / (xpdotp*1440.0*1440);     % [rad/min^3]

and it appeared that tumin was an empty array::

  octave:9> tumin
  tumin = [](0x0)

which indicated improper initialization and seemed like a repeat of
the globals issue found above when using FreeMat.  So I put a debug
statement in testmat-octave.m that made a call to `getgravc()` and
printed results::

  [tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2] = getgravc(whichconst);
  printf('tumin=%f mu=%f radiusearthkm=%f xke=%f j2=%f j3=%f j4=%f j3oj2', tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2)

then the program ran fine. When I commented out, the code continue to
run fine. WTF?  Exiting Octave and restarting re-surfaces this bug.

Both the Octave I compiled with `brew` and the one I downloaded from
SourceForget (octave-3.4.0-i386.dmg) produce the same outputs. Notice
that the downloaded one is `i386`, not 64-bit. The one I built is
Octave-3.4.3 and is 64-bit.

Extracting Machine-Readable Verification Results
================================================

Miura's "Appendix C -- Verification Results Data" is in the PDF and DOC, but
there's no machine-readable text file.

If I use OS X Preview to cut/paste the data, it puts the elements in
the wrong order, as if the table is column-based rather than row
based; Safari does likewise.

I can use Chrome cut/paste on the PDF.  I can open the DOC with
LibreOffice or Pages, and a cut/paste works OK there too.  It's not
quite right, not fix-column formatted like the FORTRAN output, but
should be usable.

Any analysis software should split on blanks instead of assuming fixed
columns.

