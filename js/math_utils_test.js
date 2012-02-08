/*global
  module: true, test: true, equal: true, notEqual: true,
  sign: true, cross: true, dot: true
 */

module('math_utils');

test('sign', function () {
    equal(sign(-123.45), -1);
    equal(sign(-1),      -1);
    equal(sign(0),        0);
    equal(sign(+1),      +1);
    equal(sign(+123.45), +1);
});

test('cross', function () {
    var xyz;
    xyz = cross([1, 2, 3], [4, 5, 6]);
    equal(xyz[0], -3);
    equal(xyz[1],  6);
    equal(xyz[2], -3);
    xyz = cross([1, 1, 1], [4, 5, 6]);
    equal(xyz[0],  1);
    equal(xyz[1], -2);
    equal(xyz[2],  1);
    xyz = cross([0, 0, 0], [4, 5, 6]);
    equal(xyz[0],  0);
    equal(xyz[1],  0);
    equal(xyz[2],  0);
});

test('dot', function () {
    equal(dot([1, 2, 3], [4, 5, 6]), 32);
    equal(dot([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]), 130);
});




