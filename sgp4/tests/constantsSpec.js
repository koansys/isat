"use strict";

describe("constants: This is a bit stupid, since it's just defining constants. But some are calculated and we want to be alerted if something changes.", function(){
    var o;

    beforeEach(function(done){
        require(["../lib/constants"], function(constants){
            o = constants;
            done();
        });
    });

    it("WGS-84/EGM-96 constants should not change", function () {
        expect(o.re).toEqual( 6378.137);
        expect(o.flat).toEqual(1.0/298.257223563);
        expect(o.omegaearth).toEqual(7.292115e-11);
        expect(o.mu).toEqual(398600.4418);
        expect(o.mum).toEqual(3.986004418e14);
    });

    it("derived values should be calculated correctly", function () {
        expect(o.eccearth).toEqual(Math.sqrt(2.0*o.flat - o.flat * o.flat));

        expect(o.eccearthsqrd).toEqual(o.eccearth * o.eccearth);

        expect(o.renm).toEqual(o.re / o.nm2m);
        expect(o.reft).toEqual(o.re * 1000.0 / o.ft2m);

        expect(o.tusec).toEqual(Math.sqrt(Math.pow(o.re, 3)/o.mu));
        expect(o.tumin).toEqual(o.tusec / 60.0);
        expect(o.tuday).toEqual(o.tusec / 86400.0);

        expect(o.omegaearthradptu).toEqual(  o.omegaearth * o.tusec);
        expect(o.omegaearthradpmin).toEqual( o.omegaearth * 60.0);

        expect(o.velkmps).toEqual(Math.sqrt(o.mu / o.re));
        expect(o.velftps).toEqual(o.velkmps * 1000.0/o.ft2m);
        expect(o.velradpmin).toEqual(o.velkmps * 60.0/o.re);

        expect(o.degpsec).toEqual((180.0 / Math.PI) / o.tusec);
        expect(o.radpday).toEqual(2.0 * Math.PI * 1.002737909350795);

        expect(o.speedoflight).toEqual(2.99792458e8);
        expect(o.au).toEqual(149597870.0);
        expect(o.earth2moon).toEqual(384400.0);
        expect(o.moonradius).toEqual(1738.0);
        expect(o.sunradius).toEqual(696000.0);

        expect(o.masssun).toEqual(1.9891e30);
        expect(o.massearth).toEqual(5.9742e24);
        expect(o.massmoon).toEqual(7.3483e22);
    });

    // from constmath
    // This is a bit stupid, since it's just defining o.
    // But some are calculated and we want to be alerted if something changes.

    it("small and infinite should stay so", function () {
        expect(o.small).toEqual(0.00000001);
        expect(o.infinite).toEqual(999999.9);
        expect(o.UNDEFINED).toEqual(999999.1);
    });

    it("mathematical constants shouldn't change", function () {
        expect(o.rad).toEqual(180.0 / Math.PI);
        expect(o.twopi).toEqual(2.0 * Math.PI);
        expect(o.halfpi).toEqual(Math.PI * 0.5);
    });

    it("conversions should convert", function () {
        expect(o.ft2m).toEqual(0.3048);
        expect(o.mile2m).toEqual(1609.344);
        expect(o.nm2m).toEqual(1852);
        expect(o.mile2ft).toEqual(5280);
        expect(o.mileph2kmph).toEqual(0.44704);
        expect(o.nmph2kmph).toEqual(0.5144444);
    });

});
