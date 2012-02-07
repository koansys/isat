var rets, tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2;
// values from MATLAB code run under Octave

ml[721] = {
    tumin:              13.446840,
    mu:                 398600.799640,
    radiusearthkm:      6378.135000,
    xke:                0.074367,
    j2:                 0.001083,
    j3:                 -0.000003,
    j4:                 -0.000002,
    j3oj2:              -0.002345
}

ml[72] = {
    tumin:              13.446840,
    mu:                 398600.800000,
    radiusearthkm:      6378.135000,
    xke:                0.074367,
    j2:                 0.001083,
    j3:                 -0.000003,
    j4:                 -0.000002,
    j3oj2:              -0.002345
}

ml[84] = {
    tumin:              13.446851,
    mu:                 398600.500000,
    radiusearthkm:      6378.137000,
    xke:                0.074367,
    j2:                 0.001083,
    j3:                 -0.000003,
    j4:                 -0.000002,
    j3oj2:              -0.002339
}

function close(result, expected, tolerance) {
    // return true if result is within tolerance of expected
    if (! tolerance) {
        tolerance = 0.1;      // 0.1%
    }
    return Math.abs((expected - result) / expected) < tolerance;
}


module('getgravc');

test('list size', function () {
    equals(Object.keys(ml).length, 3, "size 3");
})

test("loop", function () {
    for (k in ml) {
        alert(k);
    }
})

test("721", function () {
    rets = getgravc(721);
    tumin               = rets.shift();
    mu                  = rets.shift();
    radiusearthkm       = rets.shift();
    xke                 = rets.shift();
    j2                  = rets.shift();
    j3                  = rets.shift();
    j4                  = rets.shift();
    j3oj2               = rets.shift();
    ok(close(tumin,               ml[721].tumin),           "tumin", tumin, ml[721].tumin);
    ok(close(mu,                  ml[721].mu),              "mu"); // expected 398600.79964 (NO Result
    ok(close(radiusearthkm,       ml[721].radiusearthkm),   "radiusearthkm"); // expected 6789.135 (No Result)
    ok(close(xke,                 ml[721].xke),             "xke");
    ok(close(j2,                  ml[721].j2),              "j2");
    ok(close(j3,                  ml[721].j3),              "j3 " + j3 + " want " + ml[721].j3);
    ok(close(j4,                  ml[721].j4),              "j4 " + j4 + " want " + ml[721].j4);
    ok(close(j3oj2,               ml[721].j3oj2),           "j3oj2");
})

