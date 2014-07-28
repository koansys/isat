"use strict";

// constastro
// ----------

define([], function(){
    // We define some in this scope so that we can reference them in the returned
    // object without converting them to functions (otherwise there is no `this`.)
    var re = 6378.137,               //km
        flat = 1.0 / 298.257223563,
        omegaearth = 7.292115e-11,   //rad/s
        eccearth = Math.sqrt(2.0 * flat - flat * flat),
        mu = 398600.4418,
        tusec = Math.sqrt(Math.pow(re, 3) / mu),
        velkmps = Math.sqrt(mu / re),
        nm2m = 1852,
        ft2m = 0.3048;

    return {
        // Physical Constants
        // ==================
        // WGS-84/EGM-96 constants used here
        re: re,   // km
        flat: flat,
        omegaearth: omegaearth,     // rad/s
        mu: mu,      // km3/s2
        mum: 3.986004418e14,   // m3/s2

        // derived constants from the base values
        eccearth: eccearth,
        eccearthsqrd: eccearth * eccearth,

        renm: re / nm2m,
        reft: re * 1000.0 / ft2m,

        tusec: tusec,
        tumin: tusec / 60.0,
        tuday: tusec / 86400.0,

        omegaearthradptu : omegaearth * tusec,
        omegaearthradpmin: omegaearth * 60.0,

        velkmps: velkmps,
        velftps: velkmps * 1000.0 / ft2m,
        velradpmin: velkmps * 60.0 / re,
        //for afspc
        //velkmps1: velradpmin*6378.135/60.0   7.90537051051763
        //mu1: velkmps*velkmps*6378.135        3.986003602567418e+005
        degpsec: (180.0 / Math.PI) / tusec,
        radpday: 2.0 * Math.PI * 1.002737909350795,

        speedoflight: 2.99792458e8, // m/s
        au: 149597870.0,      // km
        earth2moon: 384400.0, // km
        moonradius:   1738.0, // km
        sunradius : 696000.0, // km

        masssun: 1.9891e30,
        massearth: 5.9742e24,
        massmoon: 7.3483e22,

        // From constmath
        small: 0.00000001,

        infinite   : 999999.9,
        UNDEFINED  : 999999.1,       // lowercase is JavaScript reserved word

        // Mathematical
        // ============
        rad        : 180.0 / Math.PI,
        twopi      : 2.0 * Math.PI,
        halfpi     : Math.PI * 0.5,

        // Conversions
        // ===========
        ft2m       : ft2m,
        mile2m     : 1609.344,
        nm2m       : nm2m,
        mile2ft    : 5280,
        mileph2kmph: 0.44704,
        nmph2kmph  : 0.5144444
    };
});

