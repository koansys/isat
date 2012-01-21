/*global mag: true, small: true, infinite: true, twopi: true, angl: true,
  UNDEFINED: true, halfpi: true, newtonnu
*/
// ------------------------------------------------------------------------------
//
//                           function rv2coe
//
//  this function finds the classical orbital elements given the geocentric
//    equatorial position and velocity vectors.
//
//  author        : david vallado                  719-573-2600   21 jun 2002
//
//  revisions
//    vallado     - fix special cases                              5 sep 2002
//    vallado     - delete extra check in inclination code        16 oct 2002
//    vallado     - add constant file use                         29 jun 2003
//    vallado     - add mu                                         2 apr 2007
//
//  inputs          description                    range / units
//    r           - ijk position vector            km
//    v           - ijk velocity vector            km / s
//    mu          - gravitational parameter        km3 / s2
//
//  outputs       :
//    p           - semilatus rectum               km
//    a           - semimajor axis                 km
//    ecc         - eccentricity
//    incl        - inclination                    0.0  to pi rad
//    omega       - longitude of ascending node    0.0  to 2pi rad
//    argp        - argument of perigee            0.0  to 2pi rad
//    nu          - true anomaly                   0.0  to 2pi rad
//    m           - mean anomaly                   0.0  to 2pi rad
//    arglat      - argument of latitude      (ci) 0.0  to 2pi rad
//    truelon     - true longitude            (ce) 0.0  to 2pi rad
//    lonper      - longitude of periapsis    (ee) 0.0  to 2pi rad
//
//  locals        :
//    hbar        - angular momentum h vector      km2 / s
//    ebar        - eccentricity     e vector
//    nbar        - line of nodes    n vector
//    c1          - v**2 - u/r
//    rdotv       - r dot v
//    hk          - hk unit vector
//    sme         - specfic mechanical energy      km2 / s2
//    i           - index
//    e           - eccentric, parabolic,
//                  hyperbolic anomaly             rad
//    temp        - temporary variable
//    typeorbit   - type of orbit                  ee, ei, ce, ci
//
//  coupling      :
//    mag         - magnitude of a vector
//    angl        - find the angl between two vectors
//    newtonnu    - find the mean anomaly
//
//  references    :
//    vallado       2007, 121, alg 9, ex 2-5
//
// [p,a,ecc,incl,omega,argp,nu,m,arglat,truelon,lonper ] = rv2coe (r,v,mu);
// ------------------------------------------------------------------------------

function sign(val) {
    if (val < 0) {
        return -1;
    }
    if (val > 0) {
        return 1;
    }
    return 0;
}

function cross(v1, v2) {
    // Return 3d cross product vector from two 3d vectors.
    // http://knol.google.com/k/dot-product-cross-product-in-3d
    // http://rosettacode.org/wiki/Vector_products
    // Our vectors are represented as lists, for historical compatibility.
    var x1 = v1[0],
        y1 = v1[1],
        z1 = v1[2],
        x2 = v2[0],
        y2 = v2[1],
        z2 = v2[2];
    return [y1 * z2 - y2 * z1, z1 * x2 - z2 * x1, x1 * y2 - x2 * y1];
}

function dot(a, b) {
    // From: http://c2.com/cgi/wiki?DotProductInManyProgrammingLanguages
    var n = 0,
    lim = Math.min(a.length, b.length),
    i;

    for (i = 0; i < lim; i += 1) {
        n += a[i] * b[i];
    }
    return n;
}
//assert(dot([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]) == 130)


function rv2coe(r, v, mu) {
    //TODO: get contants from constmath, constastro
    //constmath;
    //constastro;
    // mag in mag.js

    // -------------------------  implementation   -----------------
    var magr = mag(r),          // TODO: mag() undefined
        magv = mag(v),
        // ------------------  find h n and e vectors   ----------------
        hbar = cross(r, v),         // hbar is a list, TODO: cross() undefine
        magh = mag(hbar),
    nbar = [],
    magn, c1, rdotv,
    i, ebar, ecc, sme, a, p, hk, incl,
    typeorbit,
    temp, omega, argp,
    nu, arglat, m, lonper,
    truelon, em;

    if (magh > small) {
        nbar[0] = - hbar[1];
        nbar[1] =   hbar(0);
        nbar[2] =   0.0;
        magn = mag(nbar);
        c1 = magv * magv - mu / magr;
        rdotv = dot(r, v);
        for (i in [0, 1, 2]) {
            ebar[i] = (c1 * r[i] - rdotv * v[i]) / mu;
        }
        ecc = mag(ebar);

        // ------------  find a e and semi-latus rectum   ----------
        sme = (magv * magv * 0.5) - (mu / magr);
        if (Math.abs(sme) > small) {
            a = -mu  / (2.0 * sme);
        }
        else {
            a = infinite;
        }
        p = magh * magh / mu;

        // -----------------  find inclination   -------------------
        hk = hbar[2] / magh;
        incl = Math.acos(hk);

        // --------  determine type of orbit for later use  --------
        // ------ elliptical, parabolic, hyperbolic inclined -------
        typeorbit = 'ei';
        if (ecc < small) {
            // ----------------  circular equatorial ---------------
            if ((incl < small) || (Math.abs(incl - Math.PI) < small)) {
                typeorbit = 'ce';
            }
            else {
                // --------------  circular inclined ---------------
                typeorbit = 'ci';
            }
        }
        else {
            // - elliptical, parabolic, hyperbolic equatorial --
            if ((incl < small) || (Math.abs(incl - Math.PI) < small)) {
                typeorbit = 'ee';
            }
        }

        // ----------  find longitude of ascending node ------------
        if (magn > small) {
            temp = nbar[0] / magn;
            if (Math.abs(temp) > 1.0) {
                temp = sign(temp);  // TODO: sign()?
            }
            omega = Math.acos(temp);
            if (nbar[1] < 0.0) {
                omega = twopi - omega;
            }
        }
        else {
            omega = UNDEFINED;
        }

        // ---------------- find argument of perigee ---------------
        if (typeorbit === 'ei') {
            argp = angl(nbar, ebar);
            if (ebar[2] < 0.0) {
                argp = twopi - argp;
            }
        }
        else {
            argp = UNDEFINED;
        }

        // ------------  find true anomaly at epoch    -------------
        if (typeorbit[0] === 'e') {
            nu =  angl(ebar, r);
            if (rdotv < 0.0) {
                nu = twopi - nu;
            }
        }
        else {
            nu = UNDEFINED;
        }

        // ----  find argument of latitude - circular inclined -----
        if (typeorbit === 'ci') {
            arglat = angl(nbar, r);
            if (r[2] < 0.0) {
                arglat = twopi - arglat;
            }
            m = arglat;
        }
        else {
            arglat = UNDEFINED;
        }

        // -- find longitude of perigee - elliptical equatorial ----
        if ((ecc > small) && (typeorbit === 'ee')) {
            temp = ebar[0] / ecc;
            if (Math.abs(temp) > 1.0) {
                temp = sign(temp);
            }
            lonper = Math.acos(temp);
            if (ebar[1] < 0.0) {
                lonper = twopi - lonper;
            }
            if (incl > halfpi) {
                lonper = twopi - lonper;
            }
        }
        else {
            lonper = UNDEFINED;
        }

        // -------- find true longitude - circular equatorial ------
        if  ((magr > small) && (typeorbit === 'ce')) {
            temp = r[0] / magr;
            if (Math.abs(temp) > 1.0) {
                temp = sign(temp);
            }
            truelon = Math.acos(temp);
            if (r[1] < 0.0) {
                truelon = twopi - truelon;
            }
            if (incl > halfpi) {
                truelon = twopi - truelon;
            }
            m = truelon;
        }
        else {
            truelon = UNDEFINED;
        }

        // ------------ find mean anomaly for all orbits -----------
        if (typeorbit[0] === 'e') {
            //[e, m] = newtonnu(ecc,nu ); // e is undefined, but unused
            em = newtonnu(ecc, nu);
            m = em[1];
        }

    }
    else {
        p       = UNDEFINED;
        a       = UNDEFINED;
        ecc     = UNDEFINED;
        incl    = UNDEFINED;
        omega   = UNDEFINED;
        argp    = UNDEFINED;
        nu      = UNDEFINED;
        m       = UNDEFINED;
        arglat  = UNDEFINED;
        truelon = UNDEFINED;
        lonper  = UNDEFINED;
    }

    return [p, a, ecc, incl, omega, argp, nu, m, arglat, truelon, lonper];
}