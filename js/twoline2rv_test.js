/*global
  module: true, test: true, equal: true, notEqual: true, ok: true, isequalRel: true,
  twoline2rv: true
 */

module('rv2coe');

TOL = 0.000001;

test("1 00005U 58002B   00179.78495062  .00000023  00000-0  28098-4 0  4753", function () {
    var TOL = 0.000001,
    rets = twoline2rv(72,
                      "1 00005U 58002B   00179.78495062  .00000023  00000-0  28098-4 0  4753",
                      "2 00005  34.2682 348.7242.1859667 331.7664  19.3264 10.82419157413667     0.00      4320.0        360.00 ",
                      "v", "e"),
    satrec = rets.shift(),
    startmfe = rets.shift(),
    stopmfe = rets.shift(),
    deltamin = rets.shift();
    //
    equal(satrec.error, 0);
    equal(satrec.satnum, 5);
    equal(satrec.epochyr, 0);
    ok(isequalRel(satrec.epochdays, 1.797849506200e+02, TOL));
    ok(isequalRel(satrec.ndot, 6.969196665950e-13, TOL));
    equal(satrec.nddot, 0);
    ok(isequalRel(satrec.bstar, 2.809800000000e-05, TOL));
    ok(isequalRel(satrec.inclo, 5.980929187319e-01, TOL));
    ok(isequalRel(satrec.nodeo, 6.086385471383e+00, TOL));
    ok(isequalRel(satrec.ecco, 1.859667000000e-01, TOL));
    ok(isequalRel(satrec.argpo, 5.790416027489e+00, TOL));
    ok(isequalRel(satrec.mo, 3.373093125574e-01, TOL));
    ok(isequalRel(satrec.no, 4.720630155918e-02, TOL));
    ok(isequalRel(satrec.a, 1.353457482755e+00, TOL));
    ok(isequalRel(satrec.alta, 6.051555044136e-01, TOL));
    ok(isequalRel(satrec.altp, 1.017594610970e-01, TOL));
    ok(isequalRel(satrec.jdsatepoch, 2.451723284951e+06, TOL));
    equal(satrec.isimp, 0);
    equal(satrec.method, "n");
    ok(isequalRel(satrec.aycof, 6.602162317959e-04, TOL));
    ok(isequalRel(satrec.con41, 1.048865087996e+00, TOL));
    ok(isequalRel(satrec.cc1, 9.531093269423e-12, TOL));
    ok(isequalRel(satrec.cc4, 5.259360731617e-07, TOL));
    ok(isequalRel(satrec.cc5, 1.646515247679e-05, TOL));
    ok(isequalRel(satrec.d2, 1.439873790292e-21, TOL));
    ok(isequalRel(satrec.d3, 3.217106892468e-31, TOL));
    ok(isequalRel(satrec.d4, 8.358359772163e-41, TOL));
    ok(isequalRel(satrec.delmo, 4.873084659112e+00, TOL));
    ok(isequalRel(satrec.eta, 7.369095429280e-01, TOL));
    ok(isequalRel(satrec.argpdot, 5.429305256054e-05, TOL));
    ok(isequalRel(satrec.omgcof, 6.701312384410e-15, TOL));
    ok(isequalRel(satrec.sinmao, 3.309492298727e-01, TOL));
    equal(satrec.t, 0);
    ok(isequalRel(satrec.t2cof, 1.429663990413e-11, TOL));
    ok(isequalRel(satrec.t3cof, 1.621557268113e-21, TOL));
    ok(isequalRel(satrec.t4cof, 2.846182838253e-31, TOL));
    ok(isequalRel(satrec.t5cof, 6.080661397341e-41, TOL));
    ok(isequalRel(satrec.x1mth2, 3.170449706681e-01, TOL));
    ok(isequalRel(satrec.x7thm1, 3.780685205323e+00, TOL));
    ok(isequalRel(satrec.mdot, 4.722944338321e-02, TOL));
    ok(isequalRel(satrec.nodedot, -3.717135384537e-05, TOL));
    ok(isequalRel(satrec.xlcof, 1.289057728039e-03, TOL));
    ok(isequalRel(satrec.xmcof, -1.885936118348e-11, TOL));
    ok(isequalRel(satrec.nodecf, -1.194221173313e-15, TOL));
    equal(satrec.irez, 0);
    equal(satrec.d2201, 0);
    equal(satrec.d2211, 0);
    equal(satrec.d3210, 0);
    equal(satrec.d3222, 0);
    equal(satrec.d4410, 0);
    equal(satrec.d4422, 0);
    equal(satrec.d5220, 0);
    equal(satrec.d5232, 0);
    equal(satrec.d5421, 0);
    equal(satrec.d5433, 0);
    equal(satrec.dedt, 0);
    equal(satrec.del1, 0);
    equal(satrec.del2, 0);
    equal(satrec.del3, 0);
    equal(satrec.didt, 0);
    equal(satrec.dmdt, 0);
    equal(satrec.dnodt, 0);
    equal(satrec.domdt, 0);
    equal(satrec.e3, 0);
    equal(satrec.ee2, 0);
    equal(satrec.peo, 0);
    equal(satrec.pgho, 0);
    equal(satrec.pho, 0);
    equal(satrec.pinco, 0);
    equal(satrec.plo, 0);
    equal(satrec.se2, 0);
    equal(satrec.se3, 0);
    equal(satrec.sgh2, 0);
    equal(satrec.sgh3, 0);
    equal(satrec.sgh4, 0);
    equal(satrec.sh2, 0);
    equal(satrec.sh3, 0);
    equal(satrec.si2, 0);
    equal(satrec.si3, 0);
    equal(satrec.sl2, 0);
    equal(satrec.sl3, 0);
    equal(satrec.sl4, 0);
    ok(isequalRel(satrec.gsto, 3.469172342379e+00, TOL));
    equal(satrec.xfact, 0);
    equal(satrec.xgh2, 0);
    equal(satrec.xgh3, 0);
    equal(satrec.xgh4, 0);
    equal(satrec.xh2, 0);
    equal(satrec.xh3, 0);
    equal(satrec.xi2, 0);
    equal(satrec.xi3, 0);
    equal(satrec.xl2, 0);
    equal(satrec.xl3, 0);
    equal(satrec.xl4, 0);
    equal(satrec.xlamo, 0);
    equal(satrec.zmol, 0);
    equal(satrec.zmos, 0);
    equal(satrec.atime, 0);
    equal(satrec.xli, 0);
    equal(satrec.xni, 0);
    equal(satrec.init, "n");
    ok(isequalRel(startmfe, 0.000000000000e+00, TOL));
    ok(isequalRel(stopmfe, 4.320000000000e+03, TOL));
    ok(isequalRel(deltamin, 3.600000000000e+02, TOL));
});