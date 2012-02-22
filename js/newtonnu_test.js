/*global
  module: true, test: true, equal: true, notEqual: true, ok: true,
  newtonnu: true
 */

module('newtonnu');

test('eccentricity = 0.0', function () {
    var TOLERANCE     = 1e-14,
        TOLERANCE_BIG = 1e-13,
        ecc = 0.0,
        rets, e0, m;

    rets = newtonnu(ecc, -6.28);
    e0 = rets.shift();
    m  = rets.shift();
    ok(Math.abs(e0 - -6.28000000000000E+00) < TOLERANCE, "got e0=" + e0);
    ok(Math.abs(m - 3.18530717958598E-03) < TOLERANCE, "got m=" + m);

    rets = newtonnu(ecc, -3.14);
    e0 = rets.shift();
    m  = rets.shift();
    ok(Math.abs(e0 - -3.14000000000000E+00) < TOLERANCE, "got e0=" + e0);
    ok(Math.abs(m - 3.14318530717959E+00) < TOLERANCE, "got m=" + m);

    rets = newtonnu(ecc, 0.0);
    e0 = rets.shift();
    m  = rets.shift();
    ok(Math.abs(e0 -  0.00000000000000E+00) < TOLERANCE, "got e0=" + e0);
    ok(Math.abs(m - 0.00000000000000E+00) < TOLERANCE, "got m=" + m);

    rets = newtonnu(ecc, 3.14);
    e0 = rets.shift();
    m  = rets.shift();
    ok(Math.abs(e0 -  3.14000000000000E+00) < TOLERANCE, "got e0=" + e0);
    ok(Math.abs(m - 3.14000000000000E+00) < TOLERANCE, "got m=" + m);

    rets = newtonnu(ecc, 6.28);
    e0 = rets.shift();
    m  = rets.shift();
    ok(Math.abs(e0 -  6.28000000000000E+00) < TOLERANCE, "got e0=" + e0);
    ok(Math.abs(m - 6.28000000000000E+00) < TOLERANCE, "got m=" + m);
});

test('eccentricity = 0.333', function () {
    var TOLERANCE     = 1e-14,
        TOLERANCE_BIG = 1e-13,
        ecc = 0.333,
        rets, e0, m;

    rets = newtonnu(ecc, -6.28);
    e0 = rets.shift();
    m  = rets.shift();
    ok(Math.abs(e0 -  2.25319794362693E-03) < TOLERANCE, "got e0=" + e0);
    ok(Math.abs(m - 1.50288366327809E-03) < TOLERANCE, "got m=" + m);

    rets = newtonnu(ecc, -3.14);
    e0 = rets.shift();
    m  = rets.shift();
    ok(Math.abs(e0 - -3.13934114612643E+00) < TOLERANCE, "got e0=" + e0);
    ok(Math.abs(m - 3.14459391240500E+00) < TOLERANCE, "got m=" + m);

    rets = newtonnu(ecc, 0.0);
    e0 = rets.shift();
    m  = rets.shift();
    ok(Math.abs(e0 -  0.00000000000000E+00) < TOLERANCE, "got e0=" + e0);
    ok(Math.abs(m - 0.00000000000000E+00) < TOLERANCE, "got m=" + m);

    rets = newtonnu(ecc, 3.14);
    e0 = rets.shift();
    m  = rets.shift();
    ok(Math.abs(e0 -  3.13934114612643E+00) < TOLERANCE_BIG, "got e0=" + e0);
    ok(Math.abs(m - 3.13859139477458E+00) < TOLERANCE_BIG, "got m=" + m);

    rets = newtonnu(ecc, 6.28);
    e0 = rets.shift();
    m  = rets.shift();
    ok(Math.abs(e0 - -2.25319794362693E-03) < TOLERANCE, "got e0=" + e0);
    ok(Math.abs(m - 6.28168242351631E+00) < TOLERANCE_BIG, "got m=" + m);
});

test('eccentricity = 0.666', function () {
    var TOLERANCE     = 1e-14,
        TOLERANCE_BIG = 1e-13,
        ecc = 0.666,
        rets, e0, m;

    rets = newtonnu(ecc, -6.28);
    e0 = rets.shift();
    m  = rets.shift();
    ok(Math.abs(e0 -  1.42622271470173E-03) < TOLERANCE, "got e0=" + e0);
    ok(Math.abs(m - 4.76358708731962E-04) < TOLERANCE, "got m=" + m);

    rets = newtonnu(ecc, -3.14);
    e0 = rets.shift();
    m  = rets.shift();
    ok(Math.abs(e0 - -3.13803564246188E+00) < TOLERANCE, "got e0=" + e0);
    ok(Math.abs(m - 3.14751862913340E+00) < TOLERANCE_BIG, "got m=" + m);

    rets = newtonnu(ecc, 0.0);
    e0 = rets.shift();
    m  = rets.shift();
    ok(Math.abs(e0 -  0.00000000000000E+00) < TOLERANCE, "got e0=" + e0);
    ok(Math.abs(m - 0.00000000000000E+00) < TOLERANCE, "got m=" + m);

    rets = newtonnu(ecc, 3.14);
    e0 = rets.shift();
    m  = rets.shift();
    ok(Math.abs(e0 -  3.13803564246188E+00) < TOLERANCE, "got e0=" + e0);
    ok(Math.abs(m - 3.13566667804618E+00) < TOLERANCE_BIG, "got m=" + m);

    rets = newtonnu(ecc, 6.28);
    e0 = rets.shift();
    m  = rets.shift();
    ok(Math.abs(e0 - -1.42622271470173E-03) < TOLERANCE);
    ok(Math.abs(m - 6.28270894847085E+00) < TOLERANCE_BIG, "got m=" + m);
});
