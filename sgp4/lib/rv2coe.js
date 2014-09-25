"use strict";


define(["angl", "constants", "mag", "mutils", "newtonnu"], function(angl, constants, mag, mutils, newtonnu){
    // Function rv2coe
    // ===============
    //
    // rv2coe finds the classical orbital elements given the geocentric equatorial
    // position and velocity vectors.
    // implementation
    return function(r, v, mu) {
    // Inputs
    // ------
    //     value         description                    range / units
    //       r           - ijk position vector            km
    //       v           - ijk velocity vector            km / s
    //       mu          - gravitational parameter        km3 / s2

    // locals
    // ------
    //       hbar        - angular momentum h vector      km2 / s
    //       ebar        - eccentricity     e vector
    //       nbar        - line of nodes    n vector
    //       c1          - v**2 - u/r
    //       rdotv       - r mutils.dot v
    //       hk          - hk unit vector
    //       sme         - specfic mechanical energy      km2 / s2
    //       i           - index
    //       e           - eccentric, parabolic,
    //                     hyperbolic anomaly             rad
    //       temp        - temporary variable
    //       typeorbit   - type of orbit                  ee, ei, ce, ci

    var magr, magv,
        // find h n and e vectors
        hbar,                       // hbar is a vector
        magh,
        nbar = [],
        magn, c1, rdotv,
        ebar = [],
        i, ecc, sme, a, p, hk, incl,
        typeorbit,
        temp, omega, argp,
        nu, arglat, m, lonper,
        truelon, em;

        magr = mag(r);
        magv = mag(v);
    // find h n and e vectors
    hbar = mutils.cross(r, v);         // hbar is a vector
    magh = mag(hbar);

    if (magh > constants.small) {
        nbar[0] = - hbar[1];
        nbar[1] =   hbar[0];
        nbar[2] =   0.0;
        magn = mag(nbar);
        c1 = magv * magv - mu / magr;
        rdotv = mutils.dot(r, v);
        for (i in [0, 1, 2]) {
            ebar[i] = (c1 * r[i] - rdotv * v[i]) / mu;
        }
        ecc = mag(ebar);

        // find a e and semi-latus rectum
        sme = (magv * magv * 0.5) - (mu / magr);
        if (Math.abs(sme) > constants.small) {
            a = -mu  / (2.0 * sme);
        }
        else {
            a = constants.infinite;
        }
        p = magh * magh / mu;

        // find inclination
        hk = hbar[2] / magh;
        incl = Math.acos(hk);

        // determine type of orbit for later use
        // elliptical, parabolic, hyperbolic inclined
        typeorbit = "ei";
        if (ecc < constants.small) {
            alert("ecc<small");
            // circular equatorial
            if ((incl < constants.small) || (Math.abs(incl - Math.PI) < constants.small)) {
                typeorbit = "ce";
            }
            else {
                // circular inclined
                typeorbit = "ci";
            }
        }
        else {
            // - elliptical, parabolic, hyperbolic equatorial
            if ((incl < constants.small) || (Math.abs(incl - Math.PI) < constants.small)) {
                alert("eliptical/para/hyper: type=ee");
                typeorbit = "ee";
            }
        }

        // find longitude of ascending node
        if (magn > constants.small) {
            temp = nbar[0] / magn;
            if (Math.abs(temp) > 1.0) {
                temp = sign(temp);
            }
            omega = Math.acos(temp);
            if (nbar[1] < 0.0) {
                omega = constants.twopi - omega;
            }
        }
        else {
            alert("omega=UNDEFINED");
            omega = constants.UNDEFINED;
        }

        // find argument of perigee
        if (typeorbit === "ei") {
            argp = angl.angl(nbar, ebar);
            if (ebar[2] < 0.0) {
                argp = constants.twopi - argp;
            }
        }
        else {
            alert("argp=UNDEFINED");
            argp = constants.UNDEFINED;
        }

        // find true anomaly at epoch
        if (typeorbit[0] === "e") {
            nu =  angl.angl(ebar, r);
            if (rdotv < 0.0) {
                nu = constants.twopi - nu;
            }
        }
        else {
            alert("nu=UNDEFINED");
            nu = constants.UNDEFINED;
        }

        // find argument of latitude - circular inclined
        if (typeorbit === "ci") {
            arglat = angl.angl(nbar, r);
            if (r[2] < 0.0) {
                arglat = constants.twopi - arglat;
            }
            m = arglat;
        }
        else {
            arglat = constants.UNDEFINED;
        }

        // find longitude of perigee - elliptical equatorial
        if ((ecc > constants.small) && (typeorbit === "ee")) {
            temp = ebar[0] / ecc;
            if (Math.abs(temp) > 1.0) {
                temp = sign(temp);
            }
            lonper = Math.acos(temp);
            if (ebar[1] < 0.0) {
                lonper = constants.twopi - lonper;
            }
            if (incl > constants.halfpi) {
                lonper = constants.twopi - lonper;
            }
        }
        else {
            //alert("lonper=UNDEFINED");
            lonper = constants.UNDEFINED;
        }

        // find true longitude - circular equatorial
        if  ((magr > constants.small) && (typeorbit === "ce")) {
            temp = r[0] / magr;
            if (Math.abs(temp) > 1.0) {
                temp = sign(temp);
            }
            truelon = Math.acos(temp);
            if (r[1] < 0.0) {
                truelon = constants.twopi - truelon;
            }
            if (incl > constants.halfpi) {
                truelon = constants.twopi - truelon;
            }
            m = truelon;
        }
        else {
            //alert("truelon=UNDEFINED");
            truelon = constants.UNDEFINED;
        }

        // find mean anomaly for all orbits
        if (typeorbit[0] === "e") {
            em = newtonnu.newtonnu(ecc, nu);
            m = em[1];
        }

    }
    else {
        p       = constants.UNDEFINED;
        a       = constants.UNDEFINED;
        ecc     = constants.UNDEFINED;
        incl    = constants.UNDEFINED;
        omega   = constants.UNDEFINED;
        argp    = constants.UNDEFINED;
        nu      = constants.UNDEFINED;
        m       = constants.UNDEFINED;
        arglat  = constants.UNDEFINED;
        truelon = constants.UNDEFINED;
        lonper  = constants.UNDEFINED;
    }

    return {
        // Outputs
        // -------
        // Function rv2coe outputs an object with the following attributes
        //
        //     p           - semilatus rectum               km
        //     a           - semimajor axis                 km
        //     ecc         - eccentricity
        //     incl        - inclination                    0.0  to pi rad
        //     omega       - longitude of ascending node    0.0  to 2pi rad
        //     argp        - argument of perigee            0.0  to 2pi rad
        //     nu          - true anomaly                   0.0  to 2pi rad
        //     m           - mean anomaly                   0.0  to 2pi rad
        //     arglat      - argument of latitude      (ci) 0.0  to 2pi rad
        //     truelon     - true longitude            (ce) 0.0  to 2pi rad
        //     lonper      - longitude of periapsis    (ee) 0.0  to 2pi rad        p: p,
        a: a,
        ecc: ecc,
        incl: incl,
        omega: omega,
        argp: argp,
        nu: nu,
        m: m,
        arglat: arglat,
        truelon: truelon,
        lonper: lonper
        };
    };
});
