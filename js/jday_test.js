/*global
  module: true, test: true, equal: true, notEqual: true,
  jday: true
 */

module('jday');

// I'm surprised these floating numbers match exactly;
// I expected to have to duplicate close() from getgravc_test.js.

test('sample dates', function () {
    notEqual(jday(2012,  2,  8,  0, 0,  0), 42);                // bogus
    equal(jday(2012,  2,  8,  0, 0,  0), 2455965.500000);       // aa.usno.navy.mil
    equal(jday(2000,  1,  1,  1, 0,  0), 2451544.541666666511); // matlab
    equal(jday(2012,  2,  8, 12, 9, 55), 2455966.006886573974); // matlab
    equal(jday(2100, 12, 31, 23, 5, 59), 2488435.462488425896); // matlab
});
