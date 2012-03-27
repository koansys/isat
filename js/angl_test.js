/*global
  module: true, test: true, equal: true, notEqual: true,
  jday: true
 */

module('angl');

test('angl samples', function () {
    var TOLERANCE = 1e-15;

    equal(angl([0, 0, 1], [0, 0, 1]), 0.00000000000000e+00, "same vectors");
    ok(Math.abs(angl([0, 0, 1], [0, 1, 1]) - 7.85398163397448e-01) < TOLERANCE, "two dimensions");
    ok(Math.abs(angl([0, 0, 1], [1, 1, 1]) - 9.55316618124509e-01) < TOLERANCE, "three dimensions");
    ok(Math.abs(angl([1, 2, 3], [4, 5, 6]) - 2.25726128552734e-01) < TOLERANCE, "different sizes");
});




