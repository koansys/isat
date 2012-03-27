/*global
  module: true, test: true, equal: true, notEqual: true, ok: true, isequalRel: true,
  days2mdh: true, jday: true
*/

module('days2mdh');

// Damn, I wish JavaScript had destructured assignment :-(

test('julian date 2001, 1', function () {
    var mdhms = days2mdh(2000, 1);
    equal(mdhms[0], 1);
    equal(mdhms[1], 1);
    equal(mdhms[2], 0);
    equal(mdhms[3], 0);
    equal(mdhms[4], 0);
});

test('julian date 2012, 39', function () {
    var mdhms = days2mdh(2012, 39);
    equal(mdhms[0], 2);
    equal(mdhms[1], 8);
    equal(mdhms[2], 0);
    equal(mdhms[3], 0);
    equal(mdhms[4], 0);
});

test('julian date 2012, 39.015625', function () {
    var mdhms = days2mdh(2012, 39.015625);
    equal(mdhms[0], 2);
    equal(mdhms[1], 8);
    equal(mdhms[2], 0);
    equal(mdhms[3], 22);
    equal(mdhms[4], 30);
});

test('julian date 2100, 365', function () {
    var mdhms = days2mdh(2100, 365);
    equal(mdhms[0], 12);
    equal(mdhms[1], 30);
    equal(mdhms[2], 0);
    equal(mdhms[3], 0);
    equal(mdhms[4], 0);
});

// From running octave testmat.m...
var TOL = 0.00000001,
mdhms, mon, day, hr, minute, sec;

test('2000, 179.784950620000', function () {
    var mdhms = days2mdh(2000, 179.784950620000),
    mon, day, hr, minute, sec;
    mon     = mdhms.shift();
    day     = mdhms.shift();
    hr      = mdhms.shift();
    minute  = mdhms.shift();
    sec     = mdhms.shift();
    equal(mon,    6);
    equal(day,    27);
    equal(hr,     18);
    equal(minute, 50);
    ok(isequalRel(sec, 19.733567999083, TOL));
    // 5
});


test('2004, 31.910709590000', function () {
    var mdhms = days2mdh(2004, 31.910709590000),
    mon, day, hr, minute, sec;
    mon     = mdhms.shift();
    day     = mdhms.shift();
    hr      = mdhms.shift();
    minute  = mdhms.shift();
    sec     = mdhms.shift();
    equal(mon,    1);
    equal(day,    31);
    equal(hr,     21);
    equal(minute, 51);
    ok(isequalRel(sec, 25.308575999977, TOL));
    // 4632
});

test('2006, 176.824120140000', function () {
    var mdhms = days2mdh(2006, 176.824120140000),
    mon, day, hr, minute, sec;
    mon     = mdhms.shift();
    day     = mdhms.shift();
    hr      = mdhms.shift();
    minute  = mdhms.shift();
    sec     = mdhms.shift();
    equal(mon,    6);
    equal(day,    25);
    equal(hr,     19);
    equal(minute, 46);
    ok(isequalRel(sec, 43.980095999214, TOL));
    // 6251
});

test('2006, 176.332154440000', function () {
    var mdhms = days2mdh(2006, 176.332154440000),
    mon, day, hr, minute, sec;
    mon     = mdhms.shift();
    day     = mdhms.shift();
    hr      = mdhms.shift();
    minute  = mdhms.shift();
    sec     = mdhms.shift();
    equal(mon,    6);
    equal(day,    25);
    equal(hr,     7);
    equal(minute, 58);
    ok(isequalRel(sec, 18.143616000925, TOL));
    // 8195
});

test('2006, 176.561574750000', function () {
    var mdhms = days2mdh(2006, 176.561574750000),
    mon, day, hr, minute, sec;
    mon     = mdhms.shift();
    day     = mdhms.shift();
    hr      = mdhms.shift();
    minute  = mdhms.shift();
    sec     = mdhms.shift();
    equal(mon,    6);
    equal(day,    25);
    equal(hr,     13);
    equal(minute, 28);
    ok(isequalRel(sec, 40.058400000471, TOL));
    // 9880
});

test('2005, 148.794179280000', function () {
    var mdhms = days2mdh(2005, 148.794179280000),
    mon, day, hr, minute, sec;
    mon     = mdhms.shift();
    day     = mdhms.shift();
    hr      = mdhms.shift();
    minute  = mdhms.shift();
    sec     = mdhms.shift();
    equal(mon,    5);
    equal(day,    28);
    equal(hr,     19);
    equal(minute, 3);
    ok(isequalRel(sec, 37.089792000752, TOL));
    // 9998
});

test('1980, 230.296297880000', function () {
    var mdhms = days2mdh(1980, 230.296297880000),
    mon, day, hr, minute, sec;
    mon     = mdhms.shift();
    day     = mdhms.shift();
    hr      = mdhms.shift();
    minute  = mdhms.shift();
    sec     = mdhms.shift();
    equal(mon,    8);
    equal(day,    17);
    equal(hr,     7);
    equal(minute, 6);
    ok(isequalRel(sec, 40.136831999771, TOL));
    // 11801
});

test('2006, 176.028448930000', function () {
    var mdhms = days2mdh(2006, 176.028448930000),
    mon, day, hr, minute, sec;
    mon     = mdhms.shift();
    day     = mdhms.shift();
    hr      = mdhms.shift();
    minute  = mdhms.shift();
    sec     = mdhms.shift();
    equal(mon,    6);
    equal(day,    25);
    equal(hr,     0);
    equal(minute, 40);
    ok(isequalRel(sec, 57.987551999668, TOL));
    // 14128
});

test('2006, 151.674157710000', function () {
    var mdhms = days2mdh(2006, 151.674157710000),
    mon, day, hr, minute, sec;
    mon     = mdhms.shift();
    day     = mdhms.shift();
    hr      = mdhms.shift();
    minute  = mdhms.shift();
    sec     = mdhms.shift();
    equal(mon,    5);
    equal(day,    31);
    equal(hr,     16);
    equal(minute, 10);
    ok(isequalRel(sec, 47.226144000251, TOL));
    // 16925
});
//dayofyr=363
//mon=12 day=29
//hr=19 minute=0 sec=0.000288

test('2005, 363.791666670000', function () {
    var mdhms = days2mdh(2005, 363.791666670000),
    mon, day, hr, minute, sec;
    mon     = mdhms.shift();
    day     = mdhms.shift();
    hr      = mdhms.shift();
    minute  = mdhms.shift();
    sec     = mdhms.shift();
    equal(mon,    12);
    equal(day,    29);
    equal(hr,     19);
    equal(minute, 0);
    ok(isequalRel(sec, 0.000287998591, TOL));
    // 20413
});

test('2006, 176.023412440000', function () {
    var mdhms = days2mdh(2006, 176.023412440000),
    mon, day, hr, minute, sec;
    mon     = mdhms.shift();
    day     = mdhms.shift();
    hr      = mdhms.shift();
    minute  = mdhms.shift();
    sec     = mdhms.shift();
    equal(mon,    6);
    equal(day,    25);
    equal(hr,     0);
    equal(minute, 33);
    ok(isequalRel(sec, 42.834815998885, TOL));
    // 21897
});

test('2006, 94.462359120000', function () {
    var mdhms = days2mdh(2006, 94.462359120000),
    mon, day, hr, minute, sec;
    mon     = mdhms.shift();
    day     = mdhms.shift();
    hr      = mdhms.shift();
    minute  = mdhms.shift();
    sec     = mdhms.shift();
    equal(mon,    4);
    equal(day,    4);
    equal(hr,     11);
    equal(minute, 5);
    ok(isequalRel(sec, 47.827968000183, TOL));
    // 22312
});
// *** error: t:= 494.202867 *** code =   1

test('2006, 176.559091070000', function () {
    var mdhms = days2mdh(2006, 176.559091070000),
    mon, day, hr, minute, sec;
    mon     = mdhms.shift();
    day     = mdhms.shift();
    hr      = mdhms.shift();
    minute  = mdhms.shift();
    sec     = mdhms.shift();
    equal(mon,    6);
    equal(day,    25);
    equal(hr,     13);
    equal(minute, 25);
    ok(isequalRel(sec, 5.468447999465, TOL));
    // 22674
});

test('2006, 175.457520520000', function () {
    var mdhms = days2mdh(2006, 175.457520520000),
    mon, day, hr, minute, sec;
    mon     = mdhms.shift();
    day     = mdhms.shift();
    hr      = mdhms.shift();
    minute  = mdhms.shift();
    sec     = mdhms.shift();
    equal(mon,    6);
    equal(day,    24);
    equal(hr,     10);
    equal(minute, 58);
    ok(isequalRel(sec, 49.772928000239, TOL));
    // 23177
});

test('1994, 305.499999990000', function () {
    var mdhms = days2mdh(1994, 305.499999990000),
    mon, day, hr, minute, sec;
    mon     = mdhms.shift();
    day     = mdhms.shift();
    hr      = mdhms.shift();
    minute  = mdhms.shift();
    sec     = mdhms.shift();
    equal(mon,    11);
    equal(day,    1);
    equal(hr,     11);
    equal(minute, 59);
    ok(isequalRel(sec, 59.999135999315, TOL));
    // 23333
});

test('2006, 171.765354630000', function () {
    var mdhms = days2mdh(2006, 171.765354630000),
    mon, day, hr, minute, sec;
    mon     = mdhms.shift();
    day     = mdhms.shift();
    hr      = mdhms.shift();
    minute  = mdhms.shift();
    sec     = mdhms.shift();
    equal(mon,    6);
    equal(day,    20);
    equal(hr,     18);
    equal(minute, 22);
    ok(isequalRel(sec, 6.640031999159, TOL));
    // 23599
});

test('2006, 177.040617400000', function () {
    var mdhms = days2mdh(2006, 177.040617400000),
    mon, day, hr, minute, sec;
    mon     = mdhms.shift();
    day     = mdhms.shift();
    hr      = mdhms.shift();
    minute  = mdhms.shift();
    sec     = mdhms.shift();
    equal(mon,    6);
    equal(day,    26);
    equal(hr,     0);
    equal(minute, 58);
    ok(isequalRel(sec, 29.343360000184, TOL));
    // 24208
});

test('2004, 39.680572850000', function () {
    var mdhms = days2mdh(2004, 39.680572850000),
    mon, day, hr, minute, sec;
    mon     = mdhms.shift();
    day     = mdhms.shift();
    hr      = mdhms.shift();
    minute  = mdhms.shift();
    sec     = mdhms.shift();
    equal(mon,    2);
    equal(day,    8);
    equal(hr,     16);
    equal(minute, 20);
    ok(isequalRel(sec, 1.494239999761, TOL));
    // 25954
});

test('2006, 106.745032470000', function () {
    var mdhms = days2mdh(2006, 106.745032470000),
    mon, day, hr, minute, sec;
    mon     = mdhms.shift();
    day     = mdhms.shift();
    hr      = mdhms.shift();
    minute  = mdhms.shift();
    sec     = mdhms.shift();
    equal(mon,    4);
    equal(day,    16);
    equal(hr,     17);
    equal(minute, 52);
    ok(isequalRel(sec, 50.805407999842, TOL));
    // 26900
});

test('2006, 174.858188710000', function () {
    var mdhms = days2mdh(2006, 174.858188710000),
    mon, day, hr, minute, sec;
    mon     = mdhms.shift();
    day     = mdhms.shift();
    hr      = mdhms.shift();
    minute  = mdhms.shift();
    sec     = mdhms.shift();
    equal(mon,    6);
    equal(day,    23);
    equal(hr,     20);
    equal(minute, 35);
    ok(isequalRel(sec, 47.504544000640, TOL));
    // 26975
});

test('2006, 177.786158330000', function () {
    var mdhms = days2mdh(2006, 177.786158330000),
    mon, day, hr, minute, sec;
    mon     = mdhms.shift();
    day     = mdhms.shift();
    hr      = mdhms.shift();
    minute  = mdhms.shift();
    sec     = mdhms.shift();
    equal(mon,    6);
    equal(day,    26);
    equal(hr,     18);
    equal(minute, 52);
    ok(isequalRel(sec, 4.079712000548, TOL));
    // 28057
});

test('2006, 175.570711360000', function () {
    var mdhms = days2mdh(2006, 175.570711360000),
    mon, day, hr, minute, sec;
    mon     = mdhms.shift();
    day     = mdhms.shift();
    hr      = mdhms.shift();
    minute  = mdhms.shift();
    sec     = mdhms.shift();
    equal(mon,    6);
    equal(day,    24);
    equal(hr,     13);
    equal(minute, 41);
    ok(isequalRel(sec, 49.461503999137, TOL));
    // 28129
});

test('2006, 167.217886660000', function () {
    var mdhms = days2mdh(2006, 167.217886660000),
    mon, day, hr, minute, sec;
    mon     = mdhms.shift();
    day     = mdhms.shift();
    hr      = mdhms.shift();
    minute  = mdhms.shift();
    sec     = mdhms.shift();
    equal(mon,    6);
    equal(day,    16);
    equal(hr,     5);
    equal(minute, 13);
    ok(isequalRel(sec, 45.407424000423, TOL));
    // 28350
});
// *** error: t:= 1560.000000 *** code =   1

test('2006, 177.810791840000', function () {
    var mdhms = days2mdh(2006, 177.810791840000),
    mon, day, hr, minute, sec;
    mon     = mdhms.shift();
    day     = mdhms.shift();
    hr      = mdhms.shift();
    minute  = mdhms.shift();
    sec     = mdhms.shift();
    equal(mon,    6);
    equal(day,    26);
    equal(hr,     19);
    equal(minute, 27);
    ok(isequalRel(sec, 32.414976000637, TOL));
    // 28623
});

test('2006, 176.466833970000', function () {
    var mdhms = days2mdh(2006, 176.466833970000),
    mon, day, hr, minute, sec;
    mon     = mdhms.shift();
    day     = mdhms.shift();
    hr      = mdhms.shift();
    minute  = mdhms.shift();
    sec     = mdhms.shift();
    equal(mon,    6);
    equal(day,    25);
    equal(hr,     11);
    equal(minute, 12);
    ok(isequalRel(sec, 14.455008000896, TOL));
    // 28626
});

test('2005, 333.020126610000', function () {
    var mdhms = days2mdh(2005, 333.020126610000),
    mon, day, hr, minute, sec;
    mon     = mdhms.shift();
    day     = mdhms.shift();
    hr      = mdhms.shift();
    minute  = mdhms.shift();
    sec     = mdhms.shift();
    equal(mon,    11);
    equal(day,    29);
    equal(hr,     0);
    equal(minute, 28);
    ok(isequalRel(sec, 58.939103998018, TOL));
    // 28872
});

test('2006, 170.267838450000', function () {
    var mdhms = days2mdh(2006, 170.267838450000),
    mon, day, hr, minute, sec;
    mon     = mdhms.shift();
    day     = mdhms.shift();
    hr      = mdhms.shift();
    minute  = mdhms.shift();
    sec     = mdhms.shift();
    equal(mon,    6);
    equal(day,    19);
    equal(hr,     6);
    equal(minute, 25);
    ok(isequalRel(sec, 41.242079999938, TOL));
    // 29141
});
// *** error: t:= 440.000000 *** code =   6

test('2006, 177.287320100000', function () {
    var mdhms = days2mdh(2006, 177.287320100000),
    mon, day, hr, minute, sec;
    mon     = mdhms.shift();
    day     = mdhms.shift();
    hr      = mdhms.shift();
    minute  = mdhms.shift();
    sec     = mdhms.shift();
    equal(mon,    6);
    equal(day,    26);
    equal(hr,     6);
    equal(minute, 53);
    ok(isequalRel(sec, 44.456639998971, TOL));
    // 29238
});

test('1980, 275.987084650000', function () {
    var mdhms = days2mdh(1980, 275.987084650000),
    mon, day, hr, minute, sec;
    mon     = mdhms.shift();
    day     = mdhms.shift();
    hr      = mdhms.shift();
    minute  = mdhms.shift();
    sec     = mdhms.shift();
    equal(mon,    10);
    equal(day,    1);
    equal(hr,     23);
    equal(minute, 41);
    ok(isequalRel(sec, 24.113759998763, TOL));
    // 88888
});
