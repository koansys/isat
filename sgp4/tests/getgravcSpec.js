        "use strict";

describe("getgravc", function(){

    var TOL = 0.000001,
        t,
        fut,
        o;

    beforeEach(function(done){
        require(["../lib/getgravc", "tests/testing"], function(getgravc, testing){
            t = testing;
            fut = getgravc;
            done();
        });
    });

    it("721", function () {
        o = fut(721);
        expect(t.isEqualRel(o.tumin,         13.446839702958, TOL));
        expect(t.isEqualRel(o.mu,            398600.799639999983, TOL));
        expect(t.isEqualRel(o.radiusearthkm, 6378.135000000000, TOL));
        expect(t.isEqualRel(o.xke,           0.074366916100, TOL));
        expect(t.isEqualRel(o.j2,            0.001082616000, TOL));
        expect(t.isEqualRel(o.j3,            -0.000002538810, TOL));
        expect(t.isEqualRel(o.j4,            -0.000001655970, TOL));
        expect(t.isEqualRel(o.j3oj2,         -0.002345069720, TOL));
    });


    it("72", function () {
         o = fut(72);

        expect(t.isEqualRel(o.tumin,         13.446839696959, TOL));
        expect(t.isEqualRel(o.mu,            398600.799999999988, TOL));
        expect(t.isEqualRel(o.radiusearthkm, 6378.135000000000, TOL));
        expect(t.isEqualRel(o.xke,           0.074366916133, TOL));
        expect(t.isEqualRel(o.j2,            0.001082616000, TOL));
        expect(t.isEqualRel(o.j3,            -0.000002538810, TOL));
        expect(t.isEqualRel(o.j4,            -0.000001655970, TOL));
        expect(t.isEqualRel(o.j3oj2,         -0.002345069720, TOL));
    });

    it("84", function () {
        o = fut(84);
        expect(t.isEqualRel(o.tumin,         13.446851082045, TOL));
        expect(t.isEqualRel(o.mu,            398600.500000000000, TOL));
        expect(t.isEqualRel(o.radiusearthkm, 6378.137000000000, TOL));
        expect(t.isEqualRel(o.xke,           0.074366853169, TOL));
        expect(t.isEqualRel(o.j2,            0.001082629989, TOL));
        expect(t.isEqualRel(o.j3,            -0.000002532153, TOL));
        expect(t.isEqualRel(o.j4,            -0.000001610988, TOL));
        expect(t.isEqualRel(o.j3oj2,         -0.002338890559, TOL));
    });

});
