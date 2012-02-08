/*global
  module: true, test: true, equal: true, notEqual: true,
  jday: true
 */

module('days2mdh');

// Damn, I wish JavaScript had destructured assignment :-(

test('julian date 2001, 1', function () {
    mdhms = days2mdh(2000, 1);
    equal(mdhms[0], 1);
    equal(mdhms[1], 1);
    equal(mdhms[2], 0);
    equal(mdhms[3], 0);
    equal(mdhms[4], 0);
});

test('julian date 2012, 39', function () {
    mdhms = days2mdh(2012, 39);
    equal(mdhms[0], 2);
    equal(mdhms[1], 8);
    equal(mdhms[2], 0);
    equal(mdhms[3], 0);
    equal(mdhms[4], 0);
});

test('julian date 2012, 39.015625', function () {
    mdhms = days2mdh(2012, 39.015625);
    equal(mdhms[0], 2);
    equal(mdhms[1], 8);
    equal(mdhms[2], 0);
    equal(mdhms[3], 22);
    equal(mdhms[4], 30);
});

test('julian date 2100, 365', function () {
    mdhms = days2mdh(2100, 365);
    equal(mdhms[0], 12);
    equal(mdhms[1], 30);
    equal(mdhms[2], 0);
    equal(mdhms[3], 0);
    equal(mdhms[4], 0);
});
