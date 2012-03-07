/*global
  module: true, test: true, equals: true, ok: true,
  getgravc: true
 */

var ml, rets, tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2,
whichconst;

// Values from MATLAB code run under Octave.
// We output values using scientific notation to reduce rounding artifacts

ml = {
    721: {
        tumin:          1.344684e+01,
	mu:             3.986008e+05,
	radiusearthkm:  6.378135e+03,
	xke:            7.436692e-02,
	j2:             1.082616e-03,
	j3:            -2.538810e-06,
	j4:            -1.655970e-06,
	j3oj2:         -2.345070e-03,
    },
    72: {
        tumin:          1.344684e+01,
	mu:             3.986008e+05,
	radiusearthkm:  6.378135e+03,
	xke:            7.436692e-02,
	j2:             1.082616e-03,
	j3:            -2.538810e-06,
	j4:            -1.655970e-06,
	j3oj2:         -2.345070e-03,
    },
    84: {
        tumin:          1.344685e+01,
	mu:             3.986005e+05,
	radiusearthkm:  6.378137e+03,
	xke:            7.436685e-02,
	j2:             1.082630e-03,
	j3:            -2.532153e-06,
	j4:            -1.610988e-06,
	j3oj2:         -2.338891e-03,
    }
};


function close(result,  expected, tolerance) {
    // Return true if result is within tolerance of expected.
    // If your expected is rounded due to printing you might fail here.
    if (! tolerance) {
        tolerance = 0.000001;      // 0.0001% difference
    }
    return Math.abs((result / expected) - 1.0) < tolerance;
}


module('getgravc');

test('whichconst size', function () {
    equal(Object.keys(ml).length, 3, "number of different 'whichconst' is 3");
});


for (whichconst in ml) {
    whichconst = Number(whichconst);
    test("whichconst=" + whichconst, function () {
        rets = getgravc(whichconst);
        tumin               = rets.shift();
        mu                  = rets.shift();
        radiusearthkm       = rets.shift();
        xke                 = rets.shift();
        j2                  = rets.shift();
        j3                  = rets.shift();
        j4                  = rets.shift();
        j3oj2               = rets.shift();
        ok(close(tumin,               ml[whichconst].tumin),           "tumin", tumin, ml[whichconst].tumin);
        ok(close(mu,                  ml[whichconst].mu),              "mu");
        ok(close(radiusearthkm,       ml[whichconst].radiusearthkm),   "radiusearthkm");
        ok(close(xke,                 ml[whichconst].xke),             "xke");
        ok(close(j2,                  ml[whichconst].j2),              "j2 " + j2 + " want " + ml[whichconst].j2);
        ok(close(j3,                  ml[whichconst].j3),              "j3 " + j3 + " want " + ml[whichconst].j3);
        ok(close(j4,                  ml[whichconst].j4),              "j4 " + j4 + " want " + ml[whichconst].j4);
        ok(close(j3oj2,               ml[whichconst].j3oj2),           "j3oj2");
    })
}

