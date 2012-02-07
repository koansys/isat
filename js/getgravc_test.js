var rets, tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2;
// values from MATLAB code run under Octave

ml = {
    721: {
        tumin:              13.446840,
        mu:                 398600.799640,
        radiusearthkm:      6378.135000,
        xke:                0.074367,
        j2:                 0.001083,
        j3:                 -0.000003,
        j4:                 -0.000002,
        j3oj2:              -0.002345
    },
    72: {
        tumin:              13.446840,
        mu:                 398600.800000,
        radiusearthkm:      6378.135000,
        xke:                0.074367,
        j2:                 0.001083,
        j3:                 -0.000003,
        j4:                 -0.000002,
        j3oj2:              -0.002345
    },
    84: {
        tumin:              13.446851,
        mu:                 398600.500000,
        radiusearthkm:      6378.137000,
        xke:                0.074367,
        j2:                 0.001083,
        j3:                 -0.000003,
        j4:                 -0.000002,
        j3oj2:              -0.002339
    }
}

function close(result, expected, tolerance) {
    // return true if result is within tolerance of expected
    if (! tolerance) {
        tolerance = 0.0001;      // 0.01%
    }
    return Math.abs((result / expected) - 1.0) < tolerance;
}


module('getgravc');

test('whichconst size', function () {
    equals(Object.keys(ml).length, 3, "number of different 'whichconst' is 3");
})

// Our close-ness tests fail at 0.01% for j2, and 0.1% for j3, j4:
//   j2  0.00108262998905 want  0.001083
//   j3 -0.00000253215306 want -0.000003
//   j4 -0.00000161098761 want -0.000002
//
// I believe this is a rounding issue: the left is our calculation,
// the right is what we got from MATLAB/Octave. If we round our
// results to the same precision as the target values, we get the
// same. How to we accommodate this? 

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

        // var diff, expected, div, div2;
        // expected = ml[whichconst].j3;
        // diff = expected - j3;
        // div = diff / expected;
        // div2 = j3 / expected - 1.0;
        // alert("j3=" + j3 + " expected=" + expected + " diff=" + diff + " div=" + div + " div2=" + div2);
    })
}

