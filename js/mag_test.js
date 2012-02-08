/*global
  module: true, test: true, equal: true, ok: true,
  mag: true
 */

module('mag');

TOLERANCE = 1e-14;

test('mag', function () {
    equal(mag([0,0,0], [1,1,1]), 0);
    equal(mag([0,0,1], [1,1,1]), 1);
    ok(Math.abs(mag([0,1,1], [1,1,1]) - 1.41421356237310) < TOLERANCE);
    ok(Math.abs(mag([1,1,1], [1,1,1]) - 1.73205080756888) < TOLERANCE);
});