# Test the constants, some of which are based on constastro.
# Yes, it's a bit silly, but instills confidence.

constastro;

assert(re         == 6378.137);
assert(flat       == 1.0/298.257223563);
assert(omegaearth == 7.292115e-11);
assert(mu         == 398600.4418);
assert(mum        == 3.986004418e14);

assert(eccearth     == sqrt(2.0*flat - flat^2));
assert(eccearthsqrd == eccearth^2);

assert(renm == re / nm2m);
assert(reft == re * 1000.0 / ft2m);

assert(tusec == sqrt(re^3/mu));
assert(tumin == tusec / 60.0);
assert(tuday == tusec / 86400.0);

assert(omegaearthradptu  == omegaearth * tusec);
assert(omegaearthradpmin == omegaearth * 60.0);

assert(velkmps    == sqrt(mu / re));
assert(velftps    == velkmps * 1000.0/ft2m);
assert(velradpmin == velkmps * 60.0/re);

assert(degpsec == (180.0 / pi) / tusec);
assert(radpday == 2.0 * pi * 1.002737909350795);

assert(speedoflight == 2.99792458e8);
assert(au           == 149597870.0);
assert(earth2moon   == 384400.0);
assert(moonradius   ==   1738.0);
assert(sunradius    == 696000.0);

assert(masssun   == 1.9891e30);
assert(massearth == 5.9742e24);
assert(massmoon  == 7.3483e22);
