==========================
 RUNNING AND VERIFICATION
==========================

We run various code FORTRAN and MATLAB implementations from AIAA and
Miura, then compare their results against the values published in
Appendix C of Miura's paper. These demonstrate the installation works,
even substituting Octave for MATLAB as I've done.

After we implement in JavaScript, we'll do likewise to ensure our new
version is correct.


Input and Output Files
======================

SGP4-VER.TLE
------------

Miura's paper has the file SGP4-VER.TLE that we feed to his MATLAB
implementation as well as the AIAA MATLAB and FORTRAN implementations.

Machine-Readable Verification Results
-------------------------------------

Miura's "Appendix C -- Verification Results Data" is in the PDF and DOC, but
there's no machine-readable text file.

If I use OS X Preview to cut/paste the data, it puts the elements in
the wrong order, as if the table is column-based rather than row
based; Safari does likewise. I can use Chrome cut/paste on the PDF.  I
can open the DOC with LibreOffice or Pages, and a cut/paste works OK
there too.  It's not quite right, not fix-column formatted like the
FORTRAN output, but should be usable.

Any analysis software should split on blanks instead of assuming fixed
columns.

Calculation Output Fields
-------------------------

The different implementations produce 7 or more columns of data for
each satellite, in 'v' verification mode:

* AIAA FORTRAN: 7 columns
* AIAA MATLAB:  7 columns for first line, 14 for the others
* Miura MATLAB: 7 columns for first line, 14 for the others

The implementations have different amounts of blank lines separating
satellite runs.  Our verification code accommodates both of these.

Running the Software and Verify Results
=======================================

We run the AIAA FORTRAN and MATLAB versions, and the Miura MATLAB code
in verify mode.

Then compare the calculated results with the values in Miura's
Appendix C, extracted as a text file. The verifier will show any lines
whose (first 7) values don't match exactly, then calculate
differences, and pass judgement on "close-enough" vaues.  I see some
differences but only in the 8th decimal place::

  ERROR: sat=20413 mismatch line
   truth=('0.00000000', '25123.29290741', '-13225.49966287', '3249.40351869', '0.488683419', '4.797897593', '-0.961119693') 
   calcd=('0.00000000', '25123.29290741', '-13225.49966286', '3249.40351869', '0.488683419', '4.797897593', '-0.961119693')
   diffs=[0.0, 0.0, -9.998984751291573e-09, 0.0, 0.0, 0.0, 0.0]
   oks=['ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok']


AIAA FORTRAN
------------

Build it with the new Makefile::

  cd .../sot/AIAA-2006-6753/for
  make

Run it in verification mode; case does matter, don't add trailing
space to the file name::

  ./testfor

   Input Opsmode - a, i
  i
   Input typerun - V, C, M
  V
   Input whichconst - 721, 72, 84
  72
   Input elset filename 
  SGP4-VER.TLE
             5
          4632
          ...

It will save results in `tforver.out`. Run the validator against the
results::

  ../../tests/verify_results.py ../../Miura_Thesis_CD/VERIFICATION-RESULTS-DATA.txt tforver.out


AIAA MATLAB
-----------

Invoke Octave, a MATLAB clone, and run the `testmat.m` file::

  cd .../sot/AIAA-2006-6753/mat

  octave testmat.m

  input opsmode afspc a, improved i i
  input type of run c, v, m: v
  input constants 721, 72, 84 72
  input elset filename: SGP4-VER.TLE

   5
   4632
   ...
   88888

  octave:2> exit

Results are saved to `tmatver.out`, verify the results::

  ../../tests/verify_results.py ../../Miura_Thesis_CD/VERIFICATION-RESULTS-DATA.txt tmatver.out


Miura MATLAB
------------

Invoke Octave, a MATLAB clone, and run the `testmat.m` file::

  cd .../sot/Miura_Thesis_CD/SGP4 MATLAB

  octave testmat.m

  input opsmode afspc a, improved i i
  input type of run c, v, m: v
  input constants 721, 72, 84 72
  input elset filename: SGP4-VER.TLE

   5
   4632
   ...
   88888

Results are again saved to `tmatver.out`, verify them::

  ../../tests/verify_results.py ../../Miura_Thesis_CD/VERIFICATION-RESULTS-DATA.txt tmatver.out 
