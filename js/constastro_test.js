module('constastro');

test('WGS-84/EGM-96 constants', function () {
    equal(re,            6378.137);
    equal(flat,          1.0/298.257223563);
    equal(omegaearth,    7.292115e-11);
    equal(mu,            398600.4418);
    equal(mum,           3.986004418e14);
});

test('derived values', function () {
    equal(eccearth,             Math.sqrt(2.0*flat - flat * flat));
    equal(eccearthsqrd,         eccearth * eccearth);

    equal(renm,                 re / nm2m);
    equal(reft,                 re * 1000.0 / ft2m);

    equal(tusec,                 Math.sqrt(Math.pow(re, 3)/mu));
    equal(tumin,                 tusec / 60.0);
    equal(tuday,                 tusec / 86400.0);

    equal(omegaearthradptu,      omegaearth * tusec);
    equal(omegaearthradpmin,     omegaearth * 60.0);

    equal(velkmps,               Math.sqrt(mu / re));
    equal(velftps,               velkmps * 1000.0/ft2m);
    equal(velradpmin,            velkmps * 60.0/re);

    equal(degpsec,               (180.0 / Math.PI) / tusec);
    equal(radpday,               2.0 * Math.PI * 1.002737909350795);

    equal(speedoflight,          2.99792458e8);
    equal(au,                    149597870.0);
    equal(earth2moon,            384400.0);
    equal(moonradius,              1738.0);
    equal(sunradius,             696000.0);

    equal(masssun,               1.9891e30);
    equal(massearth,             5.9742e24);
    equal(massmoon,              7.3483e22);
});