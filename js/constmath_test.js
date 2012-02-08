// This is a bit stupid, since it's just defining constants.
// But some are calculated and we want to be alerted if something changes.

module('constmath');

test('small and infinite', function () {
    equal(small,        0.00000001);
    equal(infinite,     999999.9);
    equal(UNDEFINED,    999999.1);
});

test('mathematical', function () {
    equal(rad,          180.0 / Math.PI);
    equal(twopi,        2.0 * Math.PI);
    equal(halfpi,       Math.PI * 0.5);
});

test('conversions', function () {
    equal(ft2m,         0.3048);
    equal(mile2m,       1609.344);
    equal(nm2m,         1852);
    equal(mile2ft,      5280);
    equal(mileph2kmph,  0.44704);
    equal(nmph2kmph,    0.5144444);
});