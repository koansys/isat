TOL = 0.000001;

[tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2] = getgravc(84);
assert(isequalRel(tumin,         13.446851082045, TOL))
assert(isequalRel(mu,            398600.500000000000, TOL))
assert(isequalRel(radiusearthkm, 6378.137000000000, TOL))
assert(isequalRel(xke,           0.074366853169, TOL))
assert(isequalRel(j2,            0.001082629989, TOL))
assert(isequalRel(j3,            -0.000002532153, TOL))
assert(isequalRel(j4,            -0.000001610988, TOL))
assert(isequalRel(j3oj2,         -0.002338890559, TOL))

[tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2] = getgravc(72);
assert(isequalRel(tumin,         13.446839696959, TOL))
assert(isequalRel(mu,            398600.799999999988, TOL))
assert(isequalRel(radiusearthkm, 6378.135000000000, TOL))
assert(isequalRel(xke,           0.074366916133, TOL))
assert(isequalRel(j2,            0.001082616000, TOL))
assert(isequalRel(j3,            -0.000002538810, TOL))
assert(isequalRel(j4,            -0.000001655970, TOL))
assert(isequalRel(j3oj2,         -0.002345069720, TOL))

[tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2] = getgravc(721);
assert(isequalRel(tumin,         13.446839702958, TOL))
assert(isequalRel(mu,            398600.799639999983, TOL))
assert(isequalRel(radiusearthkm, 6378.135000000000, TOL))
assert(isequalRel(xke,           0.074366916100, TOL))
assert(isequalRel(j2,            0.001082616000, TOL))
assert(isequalRel(j3,            -0.000002538810, TOL))
assert(isequalRel(j4,            -0.000001655970, TOL))
assert(isequalRel(j3oj2,         -0.002345069720, TOL))
