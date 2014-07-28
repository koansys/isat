/*global mag: true, small: true, infinite: true, twopi: true, angl: true,
  halfpi: true, newtonnu: true, cross: true, dot: true, sign: true,
  UNDEFINED: true,
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

//TODO: get contants from constmath, constastro
//constmath;
//constastro;
//mag in mag.js

function rv2coe(r, v, mu) {
    // -------------------------  implementation   -----------------
    var magr, magv,
        // ------------------  find h n and e vectors   ----------------
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
    // ------------------  find h n and e vectors   ----------------
    hbar = cross(r, v);         // hbar is a vector
    magh = mag(hbar);

    if (magh > small) {
        nbar[0] = - hbar[1];
        nbar[1] =   hbar[0];
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
            alert("ecc<small");
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
                alert("eliptical/para/hyper: type=ee");
                typeorbit = 'ee';
            }
        }

        // ----------  find longitude of ascending node ------------
        if (magn > small) {
            temp = nbar[0] / magn;
            if (Math.abs(temp) > 1.0) {
                temp = sign(temp);
            }
            omega = Math.acos(temp);
            if (nbar[1] < 0.0) {
                omega = twopi - omega;
            }
        }
        else {
            alert("omega=UNDEFINED");
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
            alert("argp=UNDEFINED");
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
            alert("nu=UNDEFINED");
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
            //alert("arglat=UNDEFINED");
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
            //alert("lonper=UNDEFINED");
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
            //alert("truelon=UNDEFINED");
            truelon = UNDEFINED;
        }

        // ------------ find mean anomaly for all orbits -----------
        if (typeorbit[0] === 'e') {
            //[e, m] = newtonnu(ecc,nu ); // e is undefined, but unused
            em = newtonnu(ecc, nu);
            m = em[1];
        }

    }
    else {                      // magh <= small
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