/*global
  module: true, test: true, equals: true, ok: true, isequalRel: true,
  getgravc: true,
 */

var TOL = 0.000001;

test('721', function () {
    var rets          = getgravc(721),
        tumin         = rets.shift(),
        mu            = rets.shift(),
        radiusearthkm = rets.shift(),
        xke           = rets.shift(),
        j2            = rets.shift(),
        j3            = rets.shift(),
        j4            = rets.shift(),
        j3oj2         = rets.shift();
    ok(isequalRel(tumin,         13.446839702958, TOL));
    ok(isequalRel(mu,            398600.799639999983, TOL));
    ok(isequalRel(radiusearthkm, 6378.135000000000, TOL));
    ok(isequalRel(xke,           0.074366916100, TOL));
    ok(isequalRel(j2,            0.001082616000, TOL));
    ok(isequalRel(j3,            -0.000002538810, TOL));
    ok(isequalRel(j4,            -0.000001655970, TOL));
    ok(isequalRel(j3oj2,         -0.002345069720, TOL));
});


test('72', function () {
    var rets          = getgravc(72),
        tumin         = rets.shift(),
        mu            = rets.shift(),
        radiusearthkm = rets.shift(),
        xke           = rets.shift(),
        j2            = rets.shift(),
        j3            = rets.shift(),
        j4            = rets.shift(),
        j3oj2         = rets.shift();
    ok(isequalRel(tumin,         13.446839696959, TOL));
    ok(isequalRel(mu,            398600.799999999988, TOL));
    ok(isequalRel(radiusearthkm, 6378.135000000000, TOL));
    ok(isequalRel(xke,           0.074366916133, TOL));
    ok(isequalRel(j2,            0.001082616000, TOL));
    ok(isequalRel(j3,            -0.000002538810, TOL));
    ok(isequalRel(j4,            -0.000001655970, TOL));
    ok(isequalRel(j3oj2,         -0.002345069720, TOL));
});

test('84', function () {
    var rets          = getgravc(84),
        tumin         = rets.shift(),
        mu            = rets.shift(),
        radiusearthkm = rets.shift(),
        xke           = rets.shift(),
        j2            = rets.shift(),
        j3            = rets.shift(),
        j4            = rets.shift(),
        j3oj2         = rets.shift();
    ok(isequalRel(tumin,         13.446851082045, TOL));
    ok(isequalRel(mu,            398600.500000000000, TOL));
    ok(isequalRel(radiusearthkm, 6378.137000000000, TOL));
    ok(isequalRel(xke,           0.074366853169, TOL));
    ok(isequalRel(j2,            0.001082629989, TOL));
    ok(isequalRel(j3,            -0.000002532153, TOL));
    ok(isequalRel(j4,            -0.000001610988, TOL));
    ok(isequalRel(j3oj2,         -0.002338890559, TOL));
});

