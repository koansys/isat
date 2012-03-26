==================
 README CALLSTACK
==================

The MATLAB code modules call each other, and we need to better
understand their call stack -- what calls what.  This will allow us to
focus testing on "inner" modules before trying to test modules higher
in the stack.

The MATLAB code also makes extensive use of Global variables which
makes understanding the dataflow down the stack harder.

We'll just walk the code files and add calls we see to each one's
list. For now, note MATLAB-specific functions we'll have to emulate or
code around (e.g., getting user input).

* days2mdh:
  - jday
* dpper: none [global opsmode]
* dscom: none
* dsinit: none
* dspace: none
* getgravc: none
* gstime: none
* initl:
  - gstime
* jday: none
* twoline2rv:
  - days2mdh
  - getgravc
  - jday
  - sgp4init
  - MATLAB: parseFloat, input
* sgp4:
  - getgravc
  - dspace: TODO, commented out
  - dpper: TODO: partially commented out
* sgp4init:
  - getgravc
  - initl
  - dscom
  - dpper
  - dsinit
  - sgp4

Files I haven't seen invoked, haven't mapped yet:
* angl: none
* compat: none (NOT USED? My own funcs to emulate MATLAB calls, in progress)
* constastro: none
* constmath: none
* invjday:
  - days2mdh
* mag: none
* math_utils: none (emulate MATLAB math calls)
* newtonnu: none
* rv2coe:
  - mag
  - cross (my math_utils)
  - dot (my math_utils)
  - angl
  - newtonnu
* test_utils: none (my utils for testing)
* testmat
  - MATLAB: input, fopen, fprintf
  - getgravc
  - twoline2rv
  - sgp4
  - invjday
  - rv2coe
