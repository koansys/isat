/*global
  alert: true,
  debug: true,
  window: true
*/
// -----------------------------------------------------------------------------
//
//                           function getgravc
//
//  this function gets constants for the propagator. note that mu is identified to
//    facilitiate comparisons with newer models.
//
//  author        : david vallado                  719-573-2600   21 jul 2006
//
//  inputs        :
//    whichconst  - which set of constants to use  721, 72, 84
//
//  outputs       :
//    tumin       - minutes in one time unit
//    mu          - earth gravitational parameter
//    radiusearthkm - radius of the earth in km
//    xke         - reciprocal of tumin
//    j2, j3, j4  - un-normalized zonal harmonic values
//    j3oj2       - j3 divided by j2
//
//  locals        :
//
//  coupling      :
//
//  references    :
//    norad spacetrack report #3
//    vallado, crawford, hujsak, kelso  2006
// [tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2] = getgravc(whichconst);
//  --------------------------------------------------------------------------- */

function getgravc(whichconst) {
    var mu, radiusearthkm, xke, tumin, j2, j3, j4, j3oj2;

    switch (whichconst) {
    case 721:
        // -- wgs-72 low precision str#3 constants --
        mu     = 398600.79964;        // in km3 / s2
        radiusearthkm = 6378.135;     // km
        xke    = 0.0743669161;
        tumin  = 1.0 / xke;
        j2     =   0.001082616;
        j3     =  -0.00000253881;
        j4     =  -0.00000165597;
        j3oj2  =  j3 / j2;
        break;
    case 72:
        // ------------ wgs-72 constants ------------
        mu     = 398600.8;            // in km3 / s2
        radiusearthkm = 6378.135;     // km
        xke    = 60.0 / Math.sqrt(radiusearthkm * radiusearthkm * radiusearthkm / mu);
        tumin  = 1.0 / xke;
        j2     =   0.001082616;
        j3     =  -0.00000253881;
        j4     =  -0.00000165597;
        j3oj2  =  j3 / j2;
        break;
    case 84:
        // ------------ wgs-84 constants ------------
        mu     = 398600.5;            // in km3 / s2
        radiusearthkm = 6378.137;     // km
        xke    = 60.0 / Math.sqrt(radiusearthkm * radiusearthkm * radiusearthkm / mu);
        tumin  = 1.0 / xke;
        j2     =   0.00108262998905;
        j3     =  -0.00000253215306;
        j4     =  -0.00000161098761;
        j3oj2  =  j3 / j2;
        break;
    default:
        alert('unknown gravity option: ' + whichconst); // TODO: alert() not defined??
        break;
    }
    return [tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2];
}

// function test_getgravc(whichconst) {
//     var rets, tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2;
//     // can't we default whichconst?
//     debug("test_getgravc starting");
//     if (! whichconst) {
//         whichconst = 72;
//     }
//     rets = getgravc(whichconst);
//     tumin               = rets.shift();
//     mu                  = rets.shift();
//     radiusearthkm       = rets.shift();
//     xke                 = rets.shift();
//     j2                  = rets.shift();
//     j3                  = rets.shift();
//     j4                  = rets.shift();
//     j3oj2               = rets.shift();
//     debug('tumin=' + tumin);
//     debug('mu=' + mu);
//     debug('radiusearthkm=' + radiusearthkm);
//     debug('xke=' + xke);
//     debug('j2=' + j2);
//     debug('j3=' + j3);
//     debug('j4=' + j4);
//     debug('j3oj2=' + j3oj2);
// }

// window.onload = function () {
//     alert("getgravc.js here");
//     test_getgravc(72);
// }
