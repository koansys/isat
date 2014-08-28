"use strict";

describe("days2mdh", function(){
    var fut,
        t;


    beforeEach(function(done){
        require(["../lib/days2mdh", "tests/testing"], function(days2mdh, testing){
            t = testing;
            fut = days2mdh;
            done();
        });
    });

    it("julian date 2001, 1", function () {
        var mdhms = fut(2000, 1);
        expect(mdhms.mon).toEqual(1);
        expect(mdhms.day).toEqual(1);
        expect(mdhms.hour).toEqual(0);
        expect(mdhms.minute).toEqual(0);
        expect(mdhms.sec).toEqual(0);
    });

    it("julian date 2012, 39", function () {
        var mdhms = fut(2012, 39);
        expect(mdhms.mon).toEqual(2);
        expect(mdhms.day).toEqual(8);
        expect(mdhms.hour).toEqual(0);
        expect(mdhms.minute).toEqual(0);
        expect(mdhms.sec).toEqual(0);
    });

    it("julian date 2012, 39.015625", function () {
        var mdhms = fut(2012, 39.015625);
        expect(mdhms.mon).toEqual(2);
        expect(mdhms.day).toEqual(8);
        expect(mdhms.hour).toEqual(0);
        expect(mdhms.minute).toEqual(22);
        expect(mdhms.sec).toEqual(30);
    });

    it("julian date 2100, 365", function () {
        var mdhms = fut(2100, 365);
        expect(mdhms.mon).toEqual(12);
        expect(mdhms.day).toEqual(30);
        expect(mdhms.hour).toEqual(0);
        expect(mdhms.minute).toEqual(0);
        expect(mdhms.sec).toEqual(0);
    });

    // From running octave testmat.m...
    var TOL = 0.00000001; //,


    it("2000, 179.784950620000", function () {
        var mdhms = fut(2000, 179.784950620000);

        expect(mdhms.mon).toEqual(6);
        expect(mdhms.day).toEqual(27);
        expect(mdhms.hour).toEqual(18);
        expect(mdhms.minute).toEqual(50);
        expect(t.isEqualRel(mdhms.sec, 19.733567999083, TOL));
        // 5
    });


    it("2004, 31.910709590000", function () {
        var mdhms = fut(2004, 31.910709590000);

        expect(mdhms.mon).toEqual(1);
        expect(mdhms.day).toEqual(31);
        expect(mdhms.hour).toEqual(21);
        expect(mdhms.minute).toEqual(51);
        expect(t.isEqualRel(mdhms.sec, 25.308575999977, TOL));
        // 4632
    });

    it("2006, 176.824120140000", function () {
        var mdhms = fut(2006, 176.824120140000);

        expect(mdhms.mon).toEqual(6);
        expect(mdhms.day).toEqual(25);
        expect(mdhms.hour).toEqual(19);
        expect(mdhms.minute).toEqual(46);
        expect(t.isEqualRel(mdhms.sec, 43.980095999214, TOL));
        // 6251
    });

    it("2006, 176.332154440000", function () {
        var mdhms = fut(2006, 176.332154440000);

        expect(mdhms.mon).toEqual(6);
        expect(mdhms.day).toEqual(25);
        expect(mdhms.hour).toEqual(7);
        expect(mdhms.minute).toEqual(58);
        expect(t.isEqualRel(mdhms.sec, 18.143616000925, TOL));
        // 8195
    });

    it("2006, 176.561574750000", function () {
        var mdhms = fut(2006, 176.561574750000);

        expect(mdhms.mon).toEqual(6);
        expect(mdhms.day).toEqual(25);
        expect(mdhms.hour).toEqual(13);
        expect(mdhms.minute).toEqual(28);
        expect(t.isEqualRel(mdhms.sec, 40.058400000471, TOL));
        // 9880
    });

    it("2005, 148.794179280000", function () {
        var mdhms = fut(2005, 148.794179280000);

        expect(mdhms.mon).toEqual(5);
        expect(mdhms.day).toEqual(28);
        expect(mdhms.hour).toEqual(19);
        expect(mdhms.minute).toEqual(3);
        expect(t.isEqualRel(mdhms.sec, 37.089792000752, TOL));
        // 9998
    });

    it("1980, 230.296297880000", function () {
        var mdhms = fut(1980, 230.296297880000);

        expect(mdhms.mon).toEqual(8);
        expect(mdhms.day).toEqual(17);
        expect(mdhms.hour).toEqual(7);
        expect(mdhms.minute).toEqual(6);
        expect(t.isEqualRel(mdhms.sec, 40.136831999771, TOL));
        // 11801
    });

    it("2006, 176.028448930000", function () {
        var mdhms = fut(2006, 176.028448930000);

        expect(mdhms.mon).toEqual(6);
        expect(mdhms.day).toEqual(25);
        expect(mdhms.hour).toEqual(0);
        expect(mdhms.minute).toEqual(40);
        expect(t.isEqualRel(mdhms.sec, 57.987551999668, TOL));
        // 14128
    });

    it("2006, 151.674157710000", function () {
        var mdhms = fut(2006, 151.674157710000);

        expect(mdhms.mon).toEqual(5);
        expect(mdhms.day).toEqual(31);
        expect(mdhms.hour).toEqual(16);
        expect(mdhms.minute).toEqual(10);
        expect(t.isEqualRel(mdhms.sec, 47.226144000251, TOL));
        // 16925
    });
    //dayofyr=363
    //mon=12 day=29
    //hr=19 minute=0 sec=0.000288

    it("2005, 363.791666670000", function () {
        var mdhms = fut(2005, 363.791666670000);

        expect(mdhms.mon).toEqual(12);
        expect(mdhms.day).toEqual(29);
        expect(mdhms.hour).toEqual(19);
        expect(mdhms.minute).toEqual(0);
        expect(t.isEqualRel(mdhms.sec, 0.000287998591, TOL));
        // 20413
    });

    it("2006, 176.023412440000", function () {
        var mdhms = fut(2006, 176.023412440000);

        expect(mdhms.mon).toEqual(6);
        expect(mdhms.day).toEqual(25);
        expect(mdhms.hour).toEqual(0);
        expect(mdhms.minute).toEqual(33);
        expect(t.isEqualRel(mdhms.sec, 42.834815998885, TOL));
        // 21897
    });

    it("2006, 94.462359120000", function () {
        var mdhms = fut(2006, 94.462359120000);

        expect(mdhms.mon).toEqual(4);
        expect(mdhms.day).toEqual(4);
        expect(mdhms.hour).toEqual(11);
        expect(mdhms.minute).toEqual(5);
        expect(t.isEqualRel(mdhms.sec, 47.827968000183, TOL));
        // 22312
    });
    // *** error: t:= 494.202867 *** code =   1

    it("2006, 176.559091070000", function () {
        var mdhms = fut(2006, 176.559091070000);

        expect(mdhms.mon).toEqual(6);
        expect(mdhms.day).toEqual(25);
        expect(mdhms.hour).toEqual(13);
        expect(mdhms.minute).toEqual(25);
        expect(t.isEqualRel(mdhms.sec, 5.468447999465, TOL));
        // 22674
    });

    it("2006, 175.457520520000", function () {
        var mdhms = fut(2006, 175.457520520000);

        expect(mdhms.mon).toEqual(6);
        expect(mdhms.day).toEqual(24);
        expect(mdhms.hour).toEqual(10);
        expect(mdhms.minute).toEqual(58);
        expect(t.isEqualRel(mdhms.sec, 49.772928000239, TOL));
        // 23177
    });

    it("1994, 305.499999990000", function () {
        var mdhms = fut(1994, 305.499999990000);

        expect(mdhms.mon).toEqual(11);
        expect(mdhms.day).toEqual(1);
        expect(mdhms.hour).toEqual(11);
        expect(mdhms.minute).toEqual(59);
        expect(t.isEqualRel(mdhms.sec, 59.999135999315, TOL));
        // 23333
    });

    it("2006, 171.765354630000", function () {
        var mdhms = fut(2006, 171.765354630000);

        expect(mdhms.mon).toEqual(6);
        expect(mdhms.day).toEqual(20);
        expect(mdhms.hour).toEqual(18);
        expect(mdhms.minute).toEqual(22);
        expect(t.isEqualRel(mdhms.sec, 6.640031999159, TOL));
        // 23599
    });

    it("2006, 177.040617400000", function () {
        var mdhms = fut(2006, 177.040617400000);

        expect(mdhms.mon).toEqual(6);
        expect(mdhms.day).toEqual(26);
        expect(mdhms.hour).toEqual(0);
        expect(mdhms.minute).toEqual(58);
        expect(t.isEqualRel(mdhms.sec, 29.343360000184, TOL));
        // 24208
    });

    it("2004, 39.680572850000", function () {
        var mdhms = fut(2004, 39.680572850000);

        expect(mdhms.mon).toEqual(2);
        expect(mdhms.day).toEqual(8);
        expect(mdhms.hour).toEqual(16);
        expect(mdhms.minute).toEqual(20);
        expect(t.isEqualRel(mdhms.sec, 1.494239999761, TOL));
        // 25954
    });

    it("2006, 106.745032470000", function () {
        var mdhms = fut(2006, 106.745032470000);

        expect(mdhms.mon).toEqual(4);
        expect(mdhms.day).toEqual(16);
        expect(mdhms.hour).toEqual(17);
        expect(mdhms.minute).toEqual(52);
        expect(t.isEqualRel(mdhms.sec, 50.805407999842, TOL));
        // 26900
    });

    it("2006, 174.858188710000", function () {
        var mdhms = fut(2006, 174.858188710000);

        expect(mdhms.mon).toEqual(6);
        expect(mdhms.day).toEqual(23);
        expect(mdhms.hour).toEqual(20);
        expect(mdhms.minute).toEqual(35);
        expect(t.isEqualRel(mdhms.sec, 47.504544000640, TOL));
        // 26975
    });

    it("2006, 177.786158330000", function () {
        var mdhms = fut(2006, 177.786158330000);

        expect(mdhms.mon).toEqual(6);
        expect(mdhms.day).toEqual(26);
        expect(mdhms.hour).toEqual(18);
        expect(mdhms.minute).toEqual(52);
        expect(t.isEqualRel(mdhms.sec, 4.079712000548, TOL));
        // 28057
    });

    it("2006, 175.570711360000", function () {
        var mdhms = fut(2006, 175.570711360000);

        expect(mdhms.mon).toEqual(6);
        expect(mdhms.day).toEqual(24);
        expect(mdhms.hour).toEqual(13);
        expect(mdhms.minute).toEqual(41);
        expect(t.isEqualRel(mdhms.sec, 49.461503999137, TOL));
        // 28129
    });

    it("2006, 167.217886660000", function () {
        var mdhms = fut(2006, 167.217886660000);

        expect(mdhms.mon).toEqual(6);
        expect(mdhms.day).toEqual(16);
        expect(mdhms.hour).toEqual(5);
        expect(mdhms.minute).toEqual(13);
        expect(t.isEqualRel(mdhms.sec, 45.407424000423, TOL));
        // 28350
    });
    // *** error: t:= 1560.000000 *** code =   1

    it("2006, 177.810791840000", function () {
        var mdhms = fut(2006, 177.810791840000);

        expect(mdhms.mon).toEqual(6);
        expect(mdhms.day).toEqual(26);
        expect(mdhms.hour).toEqual(19);
        expect(mdhms.minute).toEqual(27);
        expect(t.isEqualRel(mdhms.sec, 32.414976000637, TOL));
        // 28623
    });

    it("2006, 176.466833970000", function () {
        var mdhms = fut(2006, 176.466833970000);

        expect(mdhms.mon).toEqual(6);
        expect(mdhms.day).toEqual(25);
        expect(mdhms.hour).toEqual(11);
        expect(mdhms.minute).toEqual(12);
        expect(t.isEqualRel(mdhms.sec, 14.455008000896, TOL));
        // 28626
    });

    it("2005, 333.020126610000", function () {
        var mdhms = fut(2005, 333.020126610000);

        expect(mdhms.mon).toEqual(11);
        expect(mdhms.day).toEqual(29);
        expect(mdhms.hour).toEqual(0);
        expect(mdhms.minute).toEqual(28);
        expect(t.isEqualRel(mdhms.sec, 58.939103998018, TOL));
        // 28872
    });

    it("2006, 170.267838450000", function () {
        var mdhms = fut(2006, 170.267838450000);

        expect(mdhms.mon).toEqual(6);
        expect(mdhms.day).toEqual(19);
        expect(mdhms.hour).toEqual(6);
        expect(mdhms.minute).toEqual(25);
        expect(t.isEqualRel(mdhms.sec, 41.242079999938, TOL));
        // 29141
    });
    // *** error: t:= 440.000000 *** code =   6

    it("2006, 177.287320100000", function () {
        var mdhms = fut(2006, 177.287320100000);

        expect(mdhms.mon).toEqual(6);
        expect(mdhms.day).toEqual(26);
        expect(mdhms.hour).toEqual(6);
        expect(mdhms.minute).toEqual(53);
        expect(t.isEqualRel(mdhms.sec, 44.456639998971, TOL));
        // 29238
    });

    it("1980, 275.987084650000", function () {
        var mdhms = fut(1980, 275.987084650000);

        expect(mdhms.mon).toEqual(10);
        expect(mdhms.day).toEqual(1);
        expect(mdhms.hour).toEqual(23);
        expect(mdhms.minute).toEqual(41);
        expect(t.isEqualRel(mdhms.sec, 24.113759998763, TOL));
        // 88888
    });

});
