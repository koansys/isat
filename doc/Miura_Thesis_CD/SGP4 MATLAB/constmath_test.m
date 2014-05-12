# This is a bit stupid, since it's just defining constants.
# But some are calculated and we want to be alerted if something changes.

constmath;

assert(small            == 0.00000001);

assert(infinite         == 999999.9);
assert(undefined        == 999999.1);

% -------------------------  mathematical  --------------------
assert(rad              == 180.0 / pi);
assert(twopi            == 2.0 * pi);
assert(halfpi           == pi * 0.5);

% -------------------------  conversions  ---------------------
assert(ft2m             == 0.3048);
assert(mile2m           == 1609.344);
assert(nm2m             == 1852);
assert(mile2ft          == 5280);
assert(mileph2kmph      == 0.44704);
assert(nmph2kmph        == 0.5144444);
