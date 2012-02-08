/*global
  module: true, test: true, expect: true, equal: true, ok: true,
  mag: true
 */

module('mag');

TOLERANCE = 1e-14;

test('mag', function () {
    expect(4);
    equal(mag([0,0,0], [1,1,1]), 0, "orthoganal");
    equal(mag([0,0,1], [1,1,1]), 1, "one dimension");
    ok(Math.abs(mag([0,1,1], [1,1,1]) - 1.41421356237310) < TOLERANCE, "two dimensions");
    ok(Math.abs(mag([1,1,1], [1,1,1]) - 1.73205080756888) < TOLERANCE, "three dimensions");
});