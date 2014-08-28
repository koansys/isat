"use strict";

describe("invjday", function(){
    var TOL = 0.000001,
        fut,
        o,
        t;


    beforeEach(function(done){
        require(["../lib/invjday", "tests/testing"], function(invjday, testing){
            t = testing;
            fut = invjday;
            o = null;
            done();
        });
    });

    it("2456026.500000000000", function () {
        o = fut(2456026.500000000000);

        expect(o.year).toEqual(2012);
        expect(o.mon).toEqual(4);
        expect(o.day).toEqual(9);
        expect(o.hour).toEqual(0);
        expect(o.minute).toEqual(0);
        expect(t.isEqualRel(o.sec, 0.000000000000, TOL));
    });

    it("2456026.552083333489", function () {
        o = fut(2456026.552083333489);

        expect(o.year).toEqual(2012);
        expect(o.mon).toEqual(4);
        expect(o.day).toEqual(9);
        expect(o.hour).toEqual(1);
        expect(o.minute).toEqual(15);
        expect(t.isEqualRel(o.sec, 0.000013411045, TOL));
    });

    it("2456026.604166666511", function () {
        o = fut(2456026.604166666511);

        expect(o.year).toEqual(2012);
        expect(o.mon).toEqual(4);
        expect(o.day).toEqual(9);
        expect(o.hour).toEqual(2);
        expect(o.minute).toEqual(29);
        expect(t.isEqualRel(o.sec, 59.999986588955, TOL));
    });

    it("2456026.656250000000", function () {
        o = fut(2456026.656250000000);

        expect(o.year).toEqual(2012);
        expect(o.mon).toEqual(4);
        expect(o.day).toEqual(9);
        expect(o.hour).toEqual(3);
        expect(o.minute).toEqual(45);
        expect(t.isEqualRel(o.sec, 0.000000000000, TOL));
    });

    it("2456026.708333333489", function () {
        o = fut(2456026.708333333489);

        expect(o.year).toEqual(2012);
        expect(o.mon).toEqual(4);
        expect(o.day).toEqual(9);
        expect(o.hour).toEqual(5);
        expect(o.minute).toEqual(0);
        expect(t.isEqualRel(o.sec, 0.000013411045, TOL));
    });

    it("2456026.760416666511", function () {
        o = fut(2456026.760416666511);

        expect(o.year).toEqual(2012);
        expect(o.mon).toEqual(4);
        expect(o.day).toEqual(9);
        expect(o.hour).toEqual(6);
        expect(o.minute).toEqual(14);
        expect(t.isEqualRel(o.sec, 59.999986588955, TOL));
    });

    it("2456026.812500000000", function () {
        o = fut(2456026.812500000000);

        expect(o.year).toEqual(2012);
        expect(o.mon).toEqual(4);
        expect(o.day).toEqual(9);
        expect(o.hour).toEqual(7);
        expect(o.minute).toEqual(30);
        expect(t.isEqualRel(o.sec, 0.000000000000, TOL));
    });

    it("2456026.864583333489", function () {
        o = fut(2456026.864583333489);

        expect(o.year).toEqual(2012);
        expect(o.mon).toEqual(4);
        expect(o.day).toEqual(9);
        expect(o.hour).toEqual(8);
        expect(o.minute).toEqual(45);
        expect(t.isEqualRel(o.sec, 0.000013411045, TOL));
    });

    it("2456026.916666666511", function () {
        o = fut(2456026.916666666511);

        expect(o.year).toEqual(2012);
        expect(o.mon).toEqual(4);
        expect(o.day).toEqual(9);
        expect(o.hour).toEqual(9);
        expect(o.minute).toEqual(59);
        expect(t.isEqualRel(o.sec, 59.999986588955, TOL));
    });

    it("2456026.968750000000", function () {
        o = fut(2456026.968750000000);

        expect(o.year).toEqual(2012);
        expect(o.mon).toEqual(4);
        expect(o.day).toEqual(9);
        expect(o.hour).toEqual(11);
        expect(o.minute).toEqual(15);
        expect(t.isEqualRel(o.sec, 0.000000000000, TOL));
    });

    it("2456027.020833333489", function () {
        o = fut(2456027.020833333489);

        expect(o.year).toEqual(2012);
        expect(o.mon).toEqual(4);
        expect(o.day).toEqual(9);
        expect(o.hour).toEqual(12);
        expect(o.minute).toEqual(30);
        expect(t.isEqualRel(o.sec, 0.000013411045, TOL));
    });

    it("2456027.072916666511", function () {
        o = fut(2456027.072916666511);

        expect(o.year).toEqual(2012);
        expect(o.mon).toEqual(4);
        expect(o.day).toEqual(9);
        expect(o.hour).toEqual(13);
        expect(o.minute).toEqual(44);
        expect(t.isEqualRel(o.sec, 59.999986588955, TOL));
    });

    it("2456027.125000000000", function () {
        o = fut(2456027.125000000000);

        expect(o.year).toEqual(2012);
        expect(o.mon).toEqual(4);
        expect(o.day).toEqual(9);
        expect(o.hour).toEqual(15);
        expect(o.minute).toEqual(0);
        expect(t.isEqualRel(o.sec, 0.000000000000, TOL));
    });

    it("2456027.177083333489", function () {
        o = fut(2456027.177083333489);

        expect(o.year).toEqual(2012);
        expect(o.mon).toEqual(4);
        expect(o.day).toEqual(9);
        expect(o.hour).toEqual(16);
        expect(o.minute).toEqual(15);
        expect(t.isEqualRel(o.sec, 0.000013411045, TOL));
    });

    it("2456027.229166666511", function () {
        o = fut(2456027.229166666511);

        expect(o.year).toEqual(2012);
        expect(o.mon).toEqual(4);
        expect(o.day).toEqual(9);
        expect(o.hour).toEqual(17);
        expect(o.minute).toEqual(29);
        expect(t.isEqualRel(o.sec, 59.999986588955, TOL));
    });

    it("2456027.281250000000", function () {
        o = fut(2456027.281250000000);

        expect(o.year).toEqual(2012);
        expect(o.mon).toEqual(4);
        expect(o.day).toEqual(9);
        expect(o.hour).toEqual(18);
        expect(o.minute).toEqual(45);
        expect(t.isEqualRel(o.sec, 0.000000000000, TOL));
    });

    it("2456027.333333333489", function () {
        o = fut(2456027.333333333489);

        expect(o.year).toEqual(2012);
        expect(o.mon).toEqual(4);
        expect(o.day).toEqual(9);
        expect(o.hour).toEqual(20);
        expect(o.minute).toEqual(0);
        expect(t.isEqualRel(o.sec, 0.000013411045, TOL));
    });

    it("2456027.385416666511", function () {
        o = fut(2456027.385416666511);

        expect(o.year).toEqual(2012);
        expect(o.mon).toEqual(4);
        expect(o.day).toEqual(9);
        expect(o.hour).toEqual(21);
        expect(o.minute).toEqual(14);
        expect(t.isEqualRel(o.sec, 59.999986588955, TOL));
    });

    it("2456027.437500000000", function () {
        o = fut(2456027.437500000000);

        expect(o.year).toEqual(2012);
        expect(o.mon).toEqual(4);
        expect(o.day).toEqual(9);
        expect(o.hour).toEqual(22);
        expect(o.minute).toEqual(30);
        expect(t.isEqualRel(o.sec, 0.000000000000, TOL));
    });

    it("2456027.489583333489", function () {
        o = fut(2456027.489583333489);

        expect(o.year).toEqual(2012);
        expect(o.mon).toEqual(4);
        expect(o.day).toEqual(9);
        expect(o.hour).toEqual(23);
        expect(o.minute).toEqual(45);
        expect(t.isEqualRel(o.sec, 0.000013411045, TOL));
    });

    it("2456027.541666666511", function () {
        o = fut(2456027.541666666511);

        expect(o.year).toEqual(2012);
        expect(o.mon).toEqual(4);
        expect(o.day).toEqual(10);
        expect(o.hour).toEqual(0);
        expect(o.minute).toEqual(59);
        expect(t.isEqualRel(o.sec, 59.999986588955, TOL));
    });

    it("2456027.593750000000", function () {
        o = fut(2456027.593750000000);

        expect(o.year).toEqual(2012);
        expect(o.mon).toEqual(4);
        expect(o.day).toEqual(10);
        expect(o.hour).toEqual(2);
        expect(o.minute).toEqual(15);
        expect(t.isEqualRel(o.sec, 0.000000000000, TOL));
    });

    it("2456027.645833333489", function () {
        o = fut(2456027.645833333489);

        expect(o.year).toEqual(2012);
        expect(o.mon).toEqual(4);
        expect(o.day).toEqual(10);
        expect(o.hour).toEqual(3);
        expect(o.minute).toEqual(30);
        expect(t.isEqualRel(o.sec, 0.000013411045, TOL));
    });

    it("2456027.697916666511", function () {
        o = fut(2456027.697916666511);

        expect(o.year).toEqual(2012);
        expect(o.mon).toEqual(4);
        expect(o.day).toEqual(10);
        expect(o.hour).toEqual(4);
        expect(o.minute).toEqual(44);
        expect(t.isEqualRel(o.sec, 59.999986588955, TOL));
    });

    it("2456027.750000000000", function () {
        o = fut(2456027.750000000000);

        expect(o.year).toEqual(2012);
        expect(o.mon).toEqual(4);
        expect(o.day).toEqual(10);
        expect(o.hour).toEqual(6);
        expect(o.minute).toEqual(0);
        expect(t.isEqualRel(o.sec, 0.000000000000, TOL));
    });

    it("2456027.802083333489", function () {
        o = fut(2456027.802083333489);

        expect(o.year).toEqual(2012);
        expect(o.mon).toEqual(4);
        expect(o.day).toEqual(10);
        expect(o.hour).toEqual(7);
        expect(o.minute).toEqual(15);
        expect(t.isEqualRel(o.sec, 0.000013411045, TOL));
    });

    it("2456027.854166666511", function () {
        o = fut(2456027.854166666511);

        expect(o.year).toEqual(2012);
        expect(o.mon).toEqual(4);
        expect(o.day).toEqual(10);
        expect(o.hour).toEqual(8);
        expect(o.minute).toEqual(29);
        expect(t.isEqualRel(o.sec, 59.999986588955, TOL));
    });

    it("2456027.906250000000", function () {
        o = fut(2456027.906250000000);

        expect(o.year).toEqual(2012);
        expect(o.mon).toEqual(4);
        expect(o.day).toEqual(10);
        expect(o.hour).toEqual(9);
        expect(o.minute).toEqual(45);
        expect(t.isEqualRel(o.sec, 0.000000000000, TOL));
    });

    it("2456027.958333333489", function () {
        o = fut(2456027.958333333489);

        expect(o.year).toEqual(2012);
        expect(o.mon).toEqual(4);
        expect(o.day).toEqual(10);
        expect(o.hour).toEqual(11);
        expect(o.minute).toEqual(0);
        expect(t.isEqualRel(o.sec, 0.000013411045, TOL));
    });

    it("2456028.010416666511", function () {
        o = fut(2456028.010416666511);

        expect(o.year).toEqual(2012);
        expect(o.mon).toEqual(4);
        expect(o.day).toEqual(10);
        expect(o.hour).toEqual(12);
        expect(o.minute).toEqual(14);
        expect(t.isEqualRel(o.sec, 59.999986588955, TOL));
    });

    it("2456028.062500000000", function () {
        o = fut(2456028.062500000000);

        expect(o.year).toEqual(2012);
        expect(o.mon).toEqual(4);
        expect(o.day).toEqual(10);
        expect(o.hour).toEqual(13);
        expect(o.minute).toEqual(30);
        expect(t.isEqualRel(o.sec, 0.000000000000, TOL));
    });

    it("2456028.114583333489", function () {
        o = fut(2456028.114583333489);

        expect(o.year).toEqual(2012);
        expect(o.mon).toEqual(4);
        expect(o.day).toEqual(10);
        expect(o.hour).toEqual(14);
        expect(o.minute).toEqual(45);
        expect(t.isEqualRel(o.sec, 0.000013411045, TOL));
    });

    it("2456028.166666666511", function () {
        o = fut(2456028.166666666511);

        expect(o.year).toEqual(2012);
        expect(o.mon).toEqual(4);
        expect(o.day).toEqual(10);
        expect(o.hour).toEqual(15);
        expect(o.minute).toEqual(59);
        expect(t.isEqualRel(o.sec, 59.999986588955, TOL));
    });

    it("2456028.218750000000", function () {
        o = fut(2456028.218750000000);

        expect(o.year).toEqual(2012);
        expect(o.mon).toEqual(4);
        expect(o.day).toEqual(10);
        expect(o.hour).toEqual(17);
        expect(o.minute).toEqual(15);
        expect(t.isEqualRel(o.sec, 0.000000000000, TOL));
    });

    it("2456028.270833333489", function () {
        o = fut(2456028.270833333489);

        expect(o.year).toEqual(2012);
        expect(o.mon).toEqual(4);
        expect(o.day).toEqual(10);
        expect(o.hour).toEqual(18);
        expect(o.minute).toEqual(30);
        expect(t.isEqualRel(o.sec, 0.000013411045, TOL));
    });

    it("2456028.322916666511", function () {
        o = fut(2456028.322916666511);

        expect(o.year).toEqual(2012);
        expect(o.mon).toEqual(4);
        expect(o.day).toEqual(10);
        expect(o.hour).toEqual(19);
        expect(o.minute).toEqual(44);
        expect(t.isEqualRel(o.sec, 59.999986588955, TOL));
    });

    it("2456028.375000000000", function () {
        o = fut(2456028.375000000000);

        expect(o.year).toEqual(2012);
        expect(o.mon).toEqual(4);
        expect(o.day).toEqual(10);
        expect(o.hour).toEqual(21);
        expect(o.minute).toEqual(0);
        expect(t.isEqualRel(o.sec, 0.000000000000, TOL));
    });

    it("2456028.427083333489", function () {
        o = fut(2456028.427083333489);

        expect(o.year).toEqual(2012);
        expect(o.mon).toEqual(4);
        expect(o.day).toEqual(10);
        expect(o.hour).toEqual(22);
        expect(o.minute).toEqual(15);
        expect(t.isEqualRel(o.sec, 0.000013411045, TOL));
    });

    it("2456028.479166666511", function () {
        o = fut(2456028.479166666511);

        expect(o.year).toEqual(2012);
        expect(o.mon).toEqual(4);
        expect(o.day).toEqual(10);
        expect(o.hour).toEqual(23);
        expect(o.minute).toEqual(29);
        expect(t.isEqualRel(o.sec, 59.999986588955, TOL));
    });

    it("2456028.500000000000", function () {
        o = fut(2456028.500000000000);

        expect(o.year).toEqual(2012);
        expect(o.mon).toEqual(4);
        expect(o.day).toEqual(11);
        expect(o.hour).toEqual(0);
        expect(o.minute).toEqual(0);
        expect(t.isEqualRel(o.sec, 0.000000000000, TOL));
    });
});
