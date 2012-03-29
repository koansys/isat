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

* angl: none
* compat: none (NOT USED? My own funcs to emulate MATLAB calls, in progress)
* constastro: none
* constmath: none
* days2mdh:
  - jday
* dpper: none [global opsmode; mutates inputs] DONE
* dscom: none [no globals; no input mutation] DONE
* dsinit: none [globals from getgravc()] DONE
* dspace: none [mutates inputs: atime, em, argpm, inclm, xli, mm, xni, nodem, nm] DONE
* getgravc: none DONE
* gstime: none DONE
* initl: [mutates inputs: no; unused input: satn; globals: opsmode and many from getgravc()] DONE
  - gstime
* invjday:
  - days2mdh
* jday: none DONE
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


