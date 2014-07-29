"use strict";

describe("jday", function(){
    var t,
        fut;

    beforeEach(function(done){
        require(["../lib/jday","tests/testing"], function(jday, testing){
            t = testing;
            fut = jday;
            done();
        });
    });

    it("sample dates", function () {
        expect(fut(2012,  2,  8,  0, 0,  0)).not.toEqual(42);       // bogus
        expect(fut(2012,  2,  8,  0, 0,  0)).toEqual(2455965.500000);       // aa.usno.navy.mil
        expect(fut(2000,  1,  1,  1, 0,  0)).toEqual(2451544.541666666511); // matlab
        expect(fut(2012,  2,  8, 12, 9, 55)).toEqual(2455966.006886573974); // matlab
        expect(fut(2100, 12, 31, 23, 5, 59)).toEqual(2488435.462488425896); // matlab
    });

    it("date from testmat.m run", function () {
        var TOL = 0.000001;

        expect(t.isEqualRel(fut(2000, 6, 27, 18, 50, 19.733567999083), 2451723.284950620029, TOL));
        // 5
        expect(t.isEqualRel(fut(2004, 1, 31, 21, 51, 25.308575999977), 2453036.410709590185, TOL));
        // 4632
        expect(t.isEqualRel(fut(2006, 6, 25, 19, 46, 43.980095999214), 2453912.324120140169, TOL));
        // 6251
        expect(t.isEqualRel(fut(2006, 6, 25, 7, 58, 18.143616000925), 2453911.832154440228, TOL));
        // 8195
        expect(t.isEqualRel(fut(2006, 6, 25, 13, 28, 40.058400000471), 2453912.061574750114, TOL));
        // 9880
        expect(t.isEqualRel(fut(2005, 5, 28, 19, 3, 37.089792000752), 2453519.294179279823, TOL));
        // 9998
        expect(t.isEqualRel(fut(1980, 8, 17, 7, 6, 40.136831999771), 2444468.796297879890, TOL));
        // 11801
        expect(t.isEqualRel(fut(2006, 6, 25, 0, 40, 57.987551999668), 2453911.528448930010, TOL));
        // 14128
        expect(t.isEqualRel(fut(2006, 5, 31, 16, 10, 47.226144000251), 2453887.174157709815, TOL));
        // 16925
        expect(t.isEqualRel(fut(2005, 12, 29, 19, 0, 0.000287998591), 2453734.291666669771, TOL));
        // 20413
        expect(t.isEqualRel(fut(2006, 6, 25, 0, 33, 42.834815998885), 2453911.523412439972, TOL));
        // 21897
        expect(t.isEqualRel(fut(2006, 4, 4, 11, 5, 47.827968000183), 2453829.962359120138, TOL));
        // 22312
        // *** error: t:= 494.202867 *** code =   1
        expect(t.isEqualRel(fut(2006, 6, 25, 13, 25, 5.468447999465), 2453912.059091070201, TOL));
        // 22674
        expect(t.isEqualRel(fut(2006, 6, 24, 10, 58, 49.772928000239), 2453910.957520519849, TOL));
        // 23177
        expect(t.isEqualRel(fut(1994, 11, 1, 11, 59, 59.999135999315), 2449657.999999990221, TOL));
        // 23333
        expect(t.isEqualRel(fut(2006, 6, 20, 18, 22, 6.640031999159), 2453907.265354630072, TOL));
        // 23599
        expect(t.isEqualRel(fut(2006, 6, 26, 0, 58, 29.343360000184), 2453912.540617399849, TOL));
        // 24208
        expect(t.isEqualRel(fut(2004, 2, 8, 16, 20, 1.494239999761), 2453044.180572850164, TOL));
        // 25954
        expect(t.isEqualRel(fut(2006, 4, 16, 17, 52, 50.805407999842), 2453842.245032470208, TOL));
        // 26900
        expect(t.isEqualRel(fut(2006, 6, 23, 20, 35, 47.504544000640), 2453910.358188710175, TOL));
        // 26975
        expect(t.isEqualRel(fut(2006, 6, 26, 18, 52, 4.079712000548), 2453913.286158329807, TOL));
        // 28057
        expect(t.isEqualRel(fut(2006, 6, 24, 13, 41, 49.461503999137), 2453911.070711359847, TOL));
        // 28129
        expect(t.isEqualRel(fut(2006, 6, 16, 5, 13, 45.407424000423), 2453902.717886659782, TOL));
        // 28350
        // *** error: t:= 1560.000000 *** code =   1
        expect(t.isEqualRel(fut(2006, 6, 26, 19, 27, 32.414976000637), 2453913.310791839845, TOL));
        // 28623
        expect(t.isEqualRel(fut(2006, 6, 25, 11, 12, 14.455008000896), 2453911.966833970044, TOL));
        // 28626
        expect(t.isEqualRel(fut(2005, 11, 29, 0, 28, 58.939103998018), 2453703.520126610063, TOL));
        // 28872
        expect(t.isEqualRel(fut(2006, 6, 19, 6, 25, 41.242079999938), 2453905.767838450149, TOL));
        // 29141
        // *** error: t:= 440.000000 *** code =   6
        expect(t.isEqualRel(fut(2006, 6, 26, 6, 53, 44.456639998971), 2453912.787320099771, TOL));
        // 29238
        expect(t.isEqualRel(fut(1980, 10, 1, 23, 41, 24.113759998763), 2444514.487084649969, TOL));
        // 88888
    });

});
