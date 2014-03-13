/*jslint plusplus: true */
/*globals getgravc: true, dpper: true, dspace: true
*/
/*global mag: true, dot: true, sign: true
 */
/*global document: true
 */
 /*global nm2m: true, ft2m: true, jday : true
*/
/*global opsmode: true
*/
/*global
  alert: true,
  debug: true,
  window: true
*/
/*global gstime: true, opsmode:true, xke:true, j2:true */
/*globals days2mdh: true */
/*global mag: true, small: true, infinite: true, twopi: true, angl: true,
  halfpi: true, newtonnu: true, cross: true, dot: true, sign: true,
  UNDEFINED: true,
*/
/*globals getgravc: true, dpper: true, dspace: true */
/*global getgravc: true, initl: true, dscom: true, dpper: true, dsinit: true,
 sgp4: true
 */
/*global twoline2rv: true, sgp4: true, invjday: true, rv2coe: true,
  tumin: true, mu: true, radiusearthkm: true, xke: true,
  j2: true, j3: true, j4: true, j3oj2: true, opsmode: true,
  input: true,
  document: true,
  getgravc: true,
  alert: true,
  outfile: true,
  fprintf1: true,
  sprintf: true,
  debug: true,
*/
/*global
  getgravc: true,
  debug: true,
  days2mdh: true,
  jday: true,
  input: true, // reads from HTML by id="prompt string"
  sgp4init: true,
  tumin: true, mu: true, radiusearthkm:true, xke: true, j2: true, j3: true, j4: true, j3oj2: true,
 */

// -----------------------------------------------------------------------------
//
//                              isat
//
//  This is the combined code of the translated Miura's MATLAB for minification.
//
// -----------------------------------------------------------------------------

// angl.js
function angl(vec1, vec2) {
    'use strict';
    var SMALL     = 0.00000001,
        UNDEFINED = 999999.1,
        magv1     = mag(vec1),
        magv2     = mag(vec2),
        temp,
        theta;

    if (magv1 * magv2 > SMALL * SMALL) {
        temp = dot(vec1, vec2) / (magv1 * magv2);
        if (Math.abs(temp) > 1.0) {
            temp = sign(temp) * 1.0;
        }
        theta = Math.acos(temp);
    }
    else {
        theta = UNDEFINED;
    }
    return theta;
}

// compat.js
if (typeof(String.prototype.trim) === 'undefined') {
    String.prototype.trim = function () {
        'use strict';
        return this.replace(/^\s+|\s+$/g, '');
    };
}

if (typeof(String.prototype.ltrim) === 'undefined') {
    String.prototype.ltrim = function () {
        'use strict';
        return this.replace(/^\s+/, '');
    };
}

if (typeof(String.prototype.rtrim) === 'undefined') {
    String.prototype.rtrim = function () {
        'use strict';
        return this.replace(/\s+$/, '');
    };
}

// MATLAB fake compatibility output functions
// These rather assume the output elements are <pre/>
// so the \n gives linebreaks (adding <br/> would make double breaks)
// TODO: if the element doesn't exist, add it to the DOM.

function writeId(id, str) {   // TODO: need varargs and sprintf() here
    'use strict';
    // TODO: isnt' there an append() method?
    document.getElementById(id).innerHTML += str + '<br/>\n';
}

function debug(str) {
    'use strict';
    document.getElementById('debug').innerHTML += str + '\n';
}

function outfile(str) {
    'use strict';
    // I'm using sprintf() so don't want "\n" from writeId()'s <br/>
    document.getElementById('outfile').innerHTML += str;
}

function fprintf1(str) {
    'use strict';
    // I'm using sprintf() so don't want "\n" from writeId()'s <br/>
    document.getElementById('fprintf1').innerHTML += str;
}

// constastro.js
// -----------------------  physical constants  ----------------
// WGS-84/EGM-96 constants used here
var re         = 6378.137,         // km
    flat       = 1.0 / 298.257223563,
    omegaearth = 7.292115e-11,     // rad/s
    mu         = 398600.4418,      // km3/s2
    mum        = 3.986004418e14,   // m3/s2

    // derived constants from the base values
    eccearth = Math.sqrt(2.0 * flat - flat * flat),
    eccearthsqrd = eccearth * eccearth,

    renm = re / nm2m,
    reft = re * 1000.0 / ft2m,

    tusec = Math.sqrt(Math.pow(re, 3) / mu),
    tumin = tusec / 60.0,
    tuday = tusec / 86400.0,

    omegaearthradptu  = omegaearth * tusec,
    omegaearthradpmin = omegaearth * 60.0,

    velkmps = Math.sqrt(mu / re),
    velftps = velkmps * 1000.0 / ft2m,
    velradpmin = velkmps * 60.0 / re,
    //for afspc
    //velkmps1 = velradpmin*6378.135/60.0   7.90537051051763
    //mu1 = velkmps*velkmps*6378.135        3.986003602567418e+005
    degpsec = (180.0 / Math.PI) / tusec,
    radpday = 2.0 * Math.PI * 1.002737909350795,

    speedoflight = 2.99792458e8, // m/s
    au = 149597870.0,      // km
    earth2moon = 384400.0, // km
    moonradius =   1738.0, // km
    sunradius  = 696000.0, // km

    masssun   = 1.9891e30,
    massearth = 5.9742e24,
    massmoon  = 7.3483e22;

// constmath.js
var small       = 0.00000001,

    infinite    = 999999.9,
    UNDEFINED   = 999999.1,       // lowercase is JavaScript reserved word

    // -------------------------  mathematical  --------------------
    rad         = 180.0 / Math.PI,
    twopi       = 2.0 * Math.PI,
    halfpi      = Math.PI * 0.5,

    // -------------------------  conversions  ---------------------
    ft2m        =    0.3048,
    mile2m      = 1609.344,
    nm2m        = 1852,
    mile2ft     = 5280,
    mileph2kmph = 0.44704,
    nmph2kmph   = 0.5144444;

// days2mdh.js
var i, lmonth = [], dayofyr, i, inttemp, mon, day, temp, hr, minute, sec, julianday;

function days2mdh(year, days) {
    'use strict';
    // --------------- set up array of days in month  --------------
    // This is crazy, why not just:
    // lmonth = [undefined, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for (i = 1; i <= 12; i += 1) {
        lmonth[i] = 31;
        if (i === 2) {
            lmonth[i] = 28;
        }
        if (i === 4 || i === 6 || i === 9 || i === 11) {
            lmonth[i] = 30;
        }
    }

    dayofyr = Math.floor(days);

    // ----------------- find month and day of month ---------------
    if ((year - 1900) % 4 === 0) {
        lmonth[2] = 29;
    }

    i = 1;
    inttemp = 0;
    while ((dayofyr > inttemp + lmonth[i]) && (i < 12)) {
        inttemp = inttemp + lmonth[i];
        i += 1;
    }

    mon = i;
    day = dayofyr - inttemp;

    // ----------------- find hours minutes and seconds ------------
    // MATLAB's fix() rounds toward zero which behaves differently for
    // negative numbers than JavaScript's Math.floor() which rounds down.
    // But it should be fine here, for positve numbers.

    temp   = (days - dayofyr) * 24.0;
    hr     = Math.floor(temp);
    temp   = (temp - hr) * 60.0;
    minute = Math.floor(temp);
    sec    = (temp - minute) * 60.0;

    julianday = jday(year, mon, day, hr, minute, sec);

    return [mon, day, hr, minute, sec];
}

// dpper.js

function dpper(e3,     ee2,    peo,    pgho,   pho,    pinco,  plo,    se2,
               se3,    sgh2,   sgh3,   sgh4,   sh2,    sh3,    si2,    si3,
               sl2,    sl3,    sl4,    t,      xgh2,   xgh3,   xgh4,   xh2,
               xh3,    xi2,    xi3,    xl2,    xl3,    xl4,    zmol,
               zmos,   inclo,  init,   ep,     inclp,  nodep, argpp,  mp) {
    'use strict';

    if (typeof(opsmode) === 'undefined') {
        throw new Error('Global opsmode is undefined, must be "a" or "i"');
    }
    if ((opsmode !== 'a') && (opsmode !== 'i')) {
        throw new Error('Global must be "a" or "i" but opsmode=' + opsmode);
    }

    var twopi = 2.0 * Math.PI,
    // /* ---------------------- constants ----------------------------- */
    zns   = 1.19459e-5,
    zes   = 0.01675,
    znl   = 1.5835218e-4,
    zel   = 0.05490,
    zm    = zmos + zns * t,
    zf, sinzf, f2, f3, ses, sis, sls, sghs, shs,
    sel, sil, sll, sghl, shll, pe, pinc, pl, pgh, ph,
    sinip, cosip,
    sinop, cosop, alfdp, betdb, dalf, dbet, betdp, xls, dls, xnoh;

    // /* --------------- calculate time varying periodics ----------- */
    // // be sure that the initial call has time set to zero
    if (init === 'y') {
        zm = zmos;
    }
    zf    = zm + 2.0 * zes * Math.sin(zm);
    sinzf = Math.sin(zf);
    f2    =  0.5 * sinzf * sinzf - 0.25;
    f3    = -0.5 * sinzf * Math.cos(zf);
    ses   = se2 * f2 + se3 * f3;
    sis   = si2 * f2 + si3 * f3;
    sls   = sl2 * f2 + sl3 * f3 + sl4 * sinzf;
    sghs  = sgh2 * f2 + sgh3 * f3 + sgh4 * sinzf;
    shs   = sh2 * f2 + sh3 * f3;
    zm    = zmol + znl * t;
    if (init === 'y') {
        zm = zmol;
    }
    zf    = zm + 2.0 * zel * Math.sin(zm);
    sinzf = Math.sin(zf);
    f2    =  0.5 * sinzf * sinzf - 0.25;
    f3    = -0.5 * sinzf * Math.cos(zf);
    sel   = ee2 * f2 + e3 * f3;
    sil   = xi2 * f2 + xi3 * f3;
    sll   = xl2 * f2 + xl3 * f3 + xl4 * sinzf;
    sghl  = xgh2 * f2 + xgh3 * f3 + xgh4 * sinzf;
    shll  = xh2 * f2 + xh3 * f3;
    pe    = ses + sel;
    pinc  = sis + sil;
    pl    = sls + sll;
    pgh   = sghs + sghl;
    ph    = shs + shll;

    if (init === 'n') {
        //  0.2 rad = 11.45916 deg
        pe    = pe - peo;
        pinc  = pinc - pinco;
        pl    = pl - plo;
        pgh   = pgh - pgho;
        ph    = ph - pho;
        inclp = inclp + pinc;
        ep    = ep + pe;
        sinip = Math.sin(inclp);
        cosip = Math.cos(inclp);

        // /* ----------------- apply periodics directly ------------ */
        //  sgp4fix for lyddane choice
        //  strn3 used original inclination - this is technically feasible
        //  gsfc used perturbed inclination - also technically feasible
        //  probably best to readjust the 0.2 limit value and limit discontinuity
        //  use next line for original strn3 approach and original inclination
        //  if (inclo >= 0.2)
        //  use next line for gsfc version and perturbed inclination
        if (inclp >= 0.2) {
            ph     = ph / sinip;
            pgh    = pgh - cosip * ph;
            argpp  = argpp + pgh;
            nodep  = nodep + ph;
            mp     = mp + pl;
        }
        else {
            // /* ---- apply periodics with lyddane modification ---- */
            sinop  = Math.sin(nodep);
            cosop  = Math.cos(nodep);
            alfdp  = sinip * sinop;
            betdp  = sinip * cosop;
            dalf   =  ph * cosop + pinc * cosip * sinop;
            dbet   = -ph * sinop + pinc * cosip * cosop;
            alfdp  = alfdp + dalf;
            betdp  = betdp + dbet;
            nodep  = nodep % twopi;
            // sgp4fix for afspc written intrinsic functions
            // nodep used without a trigonometric function ahead
            if ((nodep < 0.0) && (opsmode === 'a')) {
                nodep = nodep + twopi;
            }
            xls    = mp + argpp + cosip * nodep;
            dls    = pl + pgh - pinc * nodep * sinip;
            xls    = xls + dls;
            xnoh   = nodep;
            nodep  = Math.atan2(alfdp, betdp);
            // sgp4fix for afspc written intrinsic functions
            // nodep used without a trigonometric function ahead
            if ((nodep < 0.0) && (opsmode === 'a')) {
                nodep = nodep + twopi;
            }
            if (Math.abs(xnoh - nodep) > Math.PI) {
                if (nodep < xnoh) {
                    nodep = nodep + twopi;
                }
                else {
                    nodep = nodep - twopi;
                }
            }
            mp    = mp + pl;
            argpp = xls - mp - cosip * nodep;
        }
    } // if init == 'n'

    return [  ep,     inclp,  nodep, argpp,  mp];
}

// dscom.js

function dscom(epoch, ep, argpp, tc, inclp, nodep, np) {
    'use strict';
    // /* -------------------------- constants ------------------------- */
    var zes     =  0.01675,
        zel     =  0.05490,
        c1ss    =  2.9864797e-6,
        c1l     =  4.7968065e-7,
        zsinis  =  0.39785416,
        zcosis  =  0.91744867,
        zcosgs  =  0.1945905,
        zsings  = -0.98088458,
        twopi   =  2.0 * Math.PI,
        // /* --------------------- local variables ------------------------ */
        nm     = np,
        em     = ep,
        snodm  = Math.sin(nodep),
        cnodm  = Math.cos(nodep),
        sinomm = Math.sin(argpp),
        cosomm = Math.cos(argpp),
        sinim  = Math.sin(inclp),
        cosim  = Math.cos(inclp),
        emsq   = em * em,
        betasq = 1.0 - emsq,
        rtemsq = Math.sqrt(betasq),
        // /* ----------------- initialize lunar solar terms --------------- */
        peo    = 0.0,
        pinco  = 0.0,
        plo    = 0.0,
        pgho   = 0.0,
        pho    = 0.0,
        day    = epoch + 18261.5 + tc / 1440.0,
        xnodce = (4.5236020 - 9.2422029e-4 * day) % twopi,
        stem   = Math.sin(xnodce),
        ctem   = Math.cos(xnodce),
        zcosil = 0.91375164 - 0.03568096 * ctem,
        zsinil = Math.sqrt(1.0 - zcosil * zcosil),
        zsinhl = 0.089683511 * stem / zsinil,
        zcoshl = Math.sqrt(1.0 - zsinhl * zsinhl),
        gam    = 5.8351514 + 0.0019443680 * day,
        zx     = 0.39785416 * stem / zsinil,
        zy     = zcoshl * ctem + 0.91744867 * zsinhl * stem,
        //
        zcosgl, zsingl, zcosg, zsing, zcosi, zsini, zcosh, zsinh,
        cc, xnoi,
        lsflg,
        a1, a3, a7, a8, a9, a10, a2, a4, a5, a6,
        x1, x2, x3, x4, x5, x6, x7, x8,
        z31, z32, z33, z1, z2, z3, z11, z12, z13, z21, z22, z23,
        s3, s2, s4, s1, s5, s6, s7,
        ss1, ss2, ss3, ss4, ss5, ss6, ss7,
        sz1, sz2, sz3, sz11, sz12, sz13, sz21, sz22, sz23, sz31, sz32, sz33,
        zmol, zmos,
        se2, se3, si2, si3, sl2, sl3, sl4, sgh2, sgh3, sgh4, sh2, sh3,
        ee2, e3, xi2, xi3, xl2, xl3, xl4, xgh2, xgh3, xgh4, xh2, xh3;

    zx     = Math.atan2(zx, zy);
    zx     = gam + zx - xnodce;
    zcosgl = Math.cos(zx);
    zsingl = Math.sin(zx);

    // /* ------------------------- do solar terms --------------------- */
    zcosg = zcosgs;
    zsing = zsings;
    zcosi = zcosis;
    zsini = zsinis;
    zcosh = cnodm;
    zsinh = snodm;
    cc    = c1ss;
    xnoi  = 1.0 / nm;

    for (lsflg = 1; lsflg <= 2; lsflg += 1) { // =1:2
        a1  =   zcosg * zcosh + zsing * zcosi * zsinh;
        a3  =  -zsing * zcosh + zcosg * zcosi * zsinh;
        a7  =  -zcosg * zsinh + zsing * zcosi * zcosh;
        a8  =   zsing * zsini;
        a9  =   zsing * zsinh + zcosg * zcosi * zcosh;
        a10 =   zcosg * zsini;
        a2  =   cosim * a7 + sinim * a8;
        a4  =   cosim * a9 + sinim * a10;
        a5  =  -sinim * a7 + cosim * a8;
        a6  =  -sinim * a9 + cosim * a10;

        x1  =  a1 * cosomm + a2 * sinomm;
        x2  =  a3 * cosomm + a4 * sinomm;
        x3  = -a1 * sinomm + a2 * cosomm;
        x4  = -a3 * sinomm + a4 * cosomm;
        x5  =  a5 * sinomm;
        x6  =  a6 * sinomm;
        x7  =  a5 * cosomm;
        x8  =  a6 * cosomm;

        z31 = 12.0 * x1 * x1 - 3.0 * x3 * x3;
        z32 = 24.0 * x1 * x2 - 6.0 * x3 * x4;
        z33 = 12.0 * x2 * x2 - 3.0 * x4 * x4;
        z1  =  3.0 *  (a1 * a1 + a2 * a2) + z31 * emsq;
        z2  =  6.0 *  (a1 * a3 + a2 * a4) + z32 * emsq;
        z3  =  3.0 *  (a3 * a3 + a4 * a4) + z33 * emsq;
        z11 = -6.0 * a1 * a5 + emsq *  (-24.0 * x1 * x7 - 6.0 * x3 * x5);
        z12 = -6.0 *  (a1 * a6 + a3 * a5) + emsq * (-24.0 * (x2 * x7 + x1 * x8) - 6.0 * (x3 * x6 + x4 * x5));
        z13 = -6.0 * a3 * a6 + emsq * (-24.0 * x2 * x8 - 6.0 * x4 * x6);
        z21 =  6.0 * a2 * a5 + emsq * (24.0 * x1 * x5 - 6.0 * x3 * x7);
        z22 =  6.0 *  (a4 * a5 + a2 * a6) + emsq * (24.0 * (x2 * x5 + x1 * x6) - 6.0 * (x4 * x7 + x3 * x8));
        z23 =  6.0 * a4 * a6 + emsq * (24.0 * x2 * x6 - 6.0 * x4 * x8);
        z1  = z1 + z1 + betasq * z31;
        z2  = z2 + z2 + betasq * z32;
        z3  = z3 + z3 + betasq * z33;
        s3  = cc * xnoi;
        s2  = -0.5 * s3 / rtemsq;
        s4  = s3 * rtemsq;
        s1  = -15.0 * em * s4;
        s5  = x1 * x3 + x2 * x4;
        s6  = x2 * x3 + x1 * x4;
        s7  = x2 * x4 - x1 * x3;

        // /* ----------------------- do lunar terms ------------------- */
        if (lsflg === 1) {
            ss1   = s1;
            ss2   = s2;
            ss3   = s3;
            ss4   = s4;
            ss5   = s5;
            ss6   = s6;
            ss7   = s7;
            sz1   = z1;
            sz2   = z2;
            sz3   = z3;
            sz11  = z11;
            sz12  = z12;
            sz13  = z13;
            sz21  = z21;
            sz22  = z22;
            sz23  = z23;
            sz31  = z31;
            sz32  = z32;
            sz33  = z33;
            zcosg = zcosgl;
            zsing = zsingl;
            zcosi = zcosil;
            zsini = zsinil;
            zcosh = zcoshl * cnodm + zsinhl * snodm;
            zsinh = snodm * zcoshl - cnodm * zsinhl;
            cc    = c1l;
        }
    }

    zmol = (4.7199672 + 0.22997150  * day - gam) % twopi;
    zmos = (6.2565837 + 0.017201977 * day) % twopi;

    // /* ------------------------ do solar terms ---------------------- */
    se2  =   2.0 * ss1 * ss6;
    se3  =   2.0 * ss1 * ss7;
    si2  =   2.0 * ss2 * sz12;
    si3  =   2.0 * ss2 * (sz13 - sz11);
    sl2  =  -2.0 * ss3 * sz2;
    sl3  =  -2.0 * ss3 * (sz3 - sz1);
    sl4  =  -2.0 * ss3 * (-21.0 - 9.0 * emsq) * zes;
    sgh2 =   2.0 * ss4 * sz32;
    sgh3 =   2.0 * ss4 * (sz33 - sz31);
    sgh4 = -18.0 * ss4 * zes;
    sh2  =  -2.0 * ss2 * sz22;
    sh3  =  -2.0 * ss2 * (sz23 - sz21);

    // /* ------------------------ do lunar terms ---------------------- */
    ee2  =   2.0 * s1 * s6;
    e3   =   2.0 * s1 * s7;
    xi2  =   2.0 * s2 * z12;
    xi3  =   2.0 * s2 * (z13 - z11);
    xl2  =  -2.0 * s3 * z2;
    xl3  =  -2.0 * s3 * (z3 - z1);
    xl4  =  -2.0 * s3 * (-21.0 - 9.0 * emsq) * zel;
    xgh2 =   2.0 * s4 * z32;
    xgh3 =   2.0 * s4 * (z33 - z31);
    xgh4 = -18.0 * s4 * zel;
    xh2  =  -2.0 * s2 * z22;
    xh3  =  -2.0 * s2 * (z23 - z21);

    return [sinim, cosim, sinomm, cosomm, snodm, cnodm, day, e3, ee2, em, emsq, gam,
            peo, pgho, pho, pinco, plo, rtemsq, se2, se3, sgh2, sgh3, sgh4, sh2, sh3, si2,
            si3, sl2, sl3, sl4, s1, s2, s3, s4, s5, s6, s7, ss1, ss2, ss3, ss4, ss5, ss6, ss7,
            sz1, sz2, sz3, sz11, sz12, sz13, sz21, sz22, sz23, sz31, sz32, sz33, xgh2, xgh3,
            xgh4, xh2, xh3, xi2, xi3, xl2, xl3, xl4, nm, z1, z2, z3, z11, z12, z13, z21, z22,
            z23, z31, z32, z33, zmol, zmos];
}

// dsinit.js
function dsinit(
    cosim,  emsq,   argpo,  s1,     s2,     s3,     s4,
    s5,     sinim,  ss1,    ss2,    ss3,    ss4,    ss5,
    sz1,    sz3,    sz11,   sz13,   sz21,   sz23,   sz31,
    sz33,   t,      tc,     gsto,   mo,     mdot,   no,
    nodeo, nodedot,       xpidot, z1,     z3,     z11,
    z13,    z21,    z23,    z31,    z33,    em,     argpm,
    inclm,  mm,     nm,     nodem, ecco,   eccsq) {
    'use strict';

    // /* --------------------- local variables ------------------------ */
    var twopi = 2.0 * Math.PI,
    aonv  = 0.0,
    q22    = 1.7891679e-6,
    q31    = 2.1460748e-6,
    q33    = 2.2123015e-7,
    root22 = 1.7891679e-6,
    root44 = 7.3636953e-9,
    root54 = 2.1765803e-9,
    rptim  = 4.37526908801129966e-3,
    root32 = 3.7393792e-7,
    root52 = 1.1428639e-7,
    x2o3   = 2.0 / 3.0,
    znl    = 1.5835218e-4,
    zns    = 1.19459e-5,
    // sgp4fix identify constants and allow alternate values
    irez = 0,
    // TODO: FIGURE OUT HOW TO GET GLOBALS
    //global tumin mu radiusearthkm xke j2 j3 j4 j3oj2
    //tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2,
    // /* -------------------- deep space initialization ------------ */
    d2201 = 0,
    d2211 = 0,
    d3210 = 0,
    d3222 = 0,
    d4410 = 0,
    d4422 = 0,
    d5220 = 0,
    d5232 = 0,
    d5421 = 0,
    d5433 = 0,
    del1  = 0,
    del2  = 0,
    del3  = 0,
    atime = 0,
    xfact = 0,
    xlamo = 0,
    xli   = 0,
    xni   = 0,
    // variable defined later
    ses, sis, sls, sghs, shs, sgs, sghl,
    dedt, didt, dmdt, sdhl, shll, domdt, dnodt, dndt, theta,
    cosisq, emo, emsqo, eoc,
    g201, g211, g310, g322, g410, g422, g520, g533, g521, g532,
    sini2, f220, f221, f321, f322, f441, f442, f522, f523, f542, f543,
    xno2, ainv2, temp1, temp,
    g200, g300, f311, f330;

    if ((nm < 0.0052359877) && (nm > 0.0034906585)) {
        irez = 1;
    }
    if ((nm >= 8.26e-3) && (nm <= 9.24e-3) && (em >= 0.5)) {
        irez = 2;
    }

    // /* ------------------------ do solar terms ------------------- */
    ses  =  ss1 * zns * ss5;
    sis  =  ss2 * zns * (sz11 + sz13);
    sls  = -zns * ss3 * (sz1 + sz3 - 14.0 - 6.0 * emsq);
    sghs =  ss4 * zns * (sz31 + sz33 - 6.0);
    shs  = -zns * ss2 * (sz21 + sz23);
    //   // sgp4fix for 180 deg incl
    if ((inclm < 5.2359877e-2) || (inclm > Math.PI - 5.2359877e-2)) {
        shs = 0.0;
    }
    if (sinim !== 0.0) {         // WARN unreliable floating point comparison
        shs = shs / sinim;
    }
    sgs  = sghs - cosim * shs;

    // /* ------------------------- do lunar terms ------------------ */
    dedt = ses + s1 * znl * s5;
    didt = sis + s2 * znl * (z11 + z13);
    dmdt = sls - znl * s3 * (z1 + z3 - 14.0 - 6.0 * emsq);
    sghl = s4 * znl * (z31 + z33 - 6.0);
    shll = -znl * s2 * (z21 + z23);
    //   // sgp4fix for 180 deg incl
    if ((inclm < 5.2359877e-2) || (inclm > Math.PI - 5.2359877e-2)) {
        shll = 0.0;
    }
    domdt = sgs + sghl;
    dnodt = shs;
    if (sinim !== 0.0) {        // WARN unrealiable
        domdt = domdt - cosim / sinim * shll;
        dnodt = dnodt + shll / sinim;
    }

    // /* ----------- calculate deep space resonance effects -------- */
    dndt   = 0.0;
    theta  = (gsto + tc * rptim) % twopi;
    em     = em + dedt * t;
    inclm  = inclm + didt * t;
    argpm  = argpm + domdt * t;
    nodem  = nodem + dnodt * t;
    mm     = mm + dmdt * t;
    // //   sgp4fix for negative inclinations
    // //   the following if statement should be commented out
    // //if (inclm < 0.0)
    // //  {
    // //    inclm  = -inclm;
    // //    argpm  = argpm - pi;
    // //    nodem = nodem + pi;
    // //  }

    //  /* - update resonances : numerical (euler-maclaurin) integration - */
    //  /* ------------------------- epoch restart ----------------------  */
    //  //   sgp4fix for propagator problems
    //  //   the following integration works for negative time steps and periods
    //  //   the specific changes are unknown because the original code was so convoluted

    // /* -------------- initialize the resonance terms ------------- */
    if (irez !== 0) {
        aonv = Math.pow(nm / xke, x2o3); // TODO GLOBAL xke

        // /* ---------- geopotential resonance for 12 hour orbits ------ */
        if (irez === 2) {
            cosisq = cosim * cosim;
            emo    = em;
            em     = ecco;
            emsqo  = emsq;
            emsq   = eccsq;
            eoc    = em * emsq;
            g201   = -0.306 - (em - 0.64) * 0.440;

            if (em <= 0.65) {
                g211 =    3.616  -  13.2470 * em +  16.2900 * emsq;
                g310 =  -19.302  + 117.3900 * em - 228.4190 * emsq +  156.5910 * eoc;
                g322 =  -18.9068 + 109.7927 * em - 214.6334 * emsq +  146.5816 * eoc;
                g410 =  -41.122  + 242.6940 * em - 471.0940 * emsq +  313.9530 * eoc;
                g422 = -146.407  + 841.8800 * em - 1629.014 * emsq + 1083.4350 * eoc;
                g520 = -532.114  + 3017.977 * em - 5740.032 * emsq + 3708.2760 * eoc;
            }
            else {
                g211 =   -72.099 +   331.819 * em -   508.738 * emsq +   266.724 * eoc;
                g310 =  -346.844 +  1582.851 * em -  2415.925 * emsq +  1246.113 * eoc;
                g322 =  -342.585 +  1554.908 * em -  2366.899 * emsq +  1215.972 * eoc;
                g410 = -1052.797 +  4758.686 * em -  7193.992 * emsq +  3651.957 * eoc;
                g422 = -3581.690 + 16178.110 * em - 24462.770 * emsq + 12422.520 * eoc;
                if (em > 0.715) {
                    g520 = -5149.66 + 29936.92 * em - 54087.36 * emsq + 31324.56 * eoc;
                }
                else {
                    g520 =  1464.74 -  4664.75 * em +  3763.64 * emsq;
                }
            }
            if (em < 0.7) {
                g533 = -919.22770 + 4988.6100 * em - 9064.7700 * emsq + 5542.21  * eoc;
                g521 = -822.71072 + 4568.6173 * em - 8491.4146 * emsq + 5337.524 * eoc;
                g532 = -853.66600 + 4690.2500 * em - 8624.7700 * emsq + 5341.4  * eoc;
            }
            else {
                g533 = -37995.780 + 161616.52 * em - 229838.20 * emsq + 109377.94 * eoc;
                g521 = -51752.104 + 218913.95 * em - 309468.16 * emsq + 146349.42 * eoc;
                g532 = -40023.880 + 170470.89 * em - 242699.48 * emsq + 115605.82 * eoc;
            }
////
            sini2 =  sinim * sinim;
            f220 =  0.75 * (1.0 + 2.0 * cosim + cosisq);
            f221 =  1.5 * sini2;
            f321 =  1.875 * sinim  *  (1.0 - 2.0 * cosim - 3.0 * cosisq);
            f322 = -1.875 * sinim  *  (1.0 + 2.0 * cosim - 3.0 * cosisq);
            f441 = 35.0 * sini2 * f220;
            f442 = 39.3750 * sini2 * sini2;
            f522 =  9.84375 * sinim * (sini2 * (1.0 - 2.0 * cosim - 5.0 * cosisq) +
                                       0.33333333 * (-2.0 + 4.0 * cosim + 6.0 * cosisq));
            f523 = sinim * (4.92187512 * sini2 * (-2.0 - 4.0 * cosim +
                                                  10.0 * cosisq) + 6.56250012 * (1.0 + 2.0 * cosim - 3.0 * cosisq));
            f542 = 29.53125 * sinim * (2.0 - 8.0 * cosim + cosisq *
                                       (-12.0 + 8.0 * cosim + 10.0 * cosisq));
            f543 = 29.53125 * sinim * (-2.0 - 8.0 * cosim + cosisq *
                                       (12.0 + 8.0 * cosim - 10.0 * cosisq));
            xno2  =  nm * nm;
            ainv2 =  aonv * aonv;
            temp1 =  3.0 * xno2 * ainv2;
            temp  =  temp1 * root22;
            d2201 =  temp * f220 * g201;
            d2211 =  temp * f221 * g211;
            temp1 =  temp1 * aonv;
            temp  =  temp1 * root32;
            d3210 =  temp * f321 * g310;
            d3222 =  temp * f322 * g322;
            temp1 =  temp1 * aonv;
            temp  =  2.0 * temp1 * root44;
            d4410 =  temp * f441 * g410;
            d4422 =  temp * f442 * g422;
            temp1 =  temp1 * aonv;
            temp  =  temp1 * root52;
            d5220 =  temp * f522 * g520;
            d5232 =  temp * f523 * g532;
            temp  =  2.0 * temp1 * root54;
            d5421 =  temp * f542 * g521;
            d5433 =  temp * f543 * g533;
            xlamo =  (mo + nodeo + nodeo - theta - theta) % twopi;
            xfact =  mdot + dmdt + 2.0 * (nodedot + dnodt - rptim) - no;
            em    = emo;
            emsq  = emsqo;
        }

        // /* ---------------- synchronous resonance terms -------------- */
        if (irez === 1) {
            g200  = 1.0 + emsq * (-2.5 + 0.8125 * emsq);
            g310  = 1.0 + 2.0 * emsq;
            g300  = 1.0 + emsq * (-6.0 + 6.60937 * emsq);
            f220  = 0.75 * (1.0 + cosim) * (1.0 + cosim);
            f311  = 0.9375 * sinim * sinim * (1.0 + 3.0 * cosim) - 0.75 * (1.0 + cosim);
            f330  = 1.0 + cosim;
            f330  = 1.875 * f330 * f330 * f330;
            del1  = 3.0 * nm * nm * aonv * aonv;
            del2  = 2.0 * del1 * f220 * g200 * q22;
            del3  = 3.0 * del1 * f330 * g300 * q33 * aonv;
            del1  = del1 * f311 * g310 * q31 * aonv;
            xlamo = (mo + nodeo + argpo - theta) % twopi;
            xfact = mdot + xpidot - rptim + dmdt + domdt + dnodt - no;
        }

        // /* ------------ for sgp4, initialize the integrator ---------- */
        xli   = xlamo;
        xni   = no;
        atime = 0.0;
        nm    = no + dndt;
    }

    return [em,     argpm,  inclm,  mm,     nm,     nodem, irez,
            atime,  d2201,  d2211,  d3210,  d3222,  d4410,  d4422,
            d5220,  d5232,  d5421,  d5433,  dedt,   didt,   dmdt,
            dndt,   dnodt,  domdt,  del1,   del2,   del3,   xfact,
            xlamo,  xli,    xni];
}

// dspace.js
function dspace(d2201,  d2211,  d3210,  d3222,  d4410,  d4422,  d5220,
                d5232,  d5421,  d5433,  dedt,   del1,   del2,   del3,
                didt,   dmdt,   dnodt,  domdt,  irez,   argpo,  argpdot,
                t,      tc,     gsto,   xfact,  xlamo,  no,     atime,
                em,     argpm,  inclm,  xli,    mm,     xni,    nodem,
                nm) {
    'use strict';

    var twopi = 2.0 * Math.PI,
        fasx2 = 0.13130908,
        fasx4 = 2.8843198,
        fasx6 = 0.37448087,
        g22   = 5.7686396,
        g32   = 0.95240898,
        g44   = 1.8014998,
        g52   = 1.0508330,
        g54   = 4.4108898,
        rptim = 4.37526908801129966e-3,
        stepp =    720.0,
        stepn =   -720.0,
        step2 = 259200.0,

    // /* ----------- calculate deep space resonance effects ----------- */
    dndt   = 0.0,
    theta  = (gsto + tc * rptim) % twopi,
    // defined elsewhere
    ft,
    delt,
    iretn, iret,
    xndt, xldot, xnddt,
    xomi, x2omi, x2li,
    xl;

    em     = em + dedt * t;
    inclm  = inclm + didt * t;
    argpm  = argpm + domdt * t;
    nodem  = nodem + dnodt * t;
    mm     = mm + dmdt * t;

    // //   sgp4fix for negative inclinations
    // //   the following if statement should be commented out
    // //  if (inclm < 0.0)
    // // {
    // //    inclm  = -inclm;
    // //    argpm  = argpm - pi;
    // //    nodem = nodem + pi;
    // //  }

    // /* - update resonances : numerical (euler-maclaurin) integration - */
    // /* ------------------------- epoch restart ----------------------  */

    // //   sgp4fix for propagator problems
    // //   the following integration works for negative time steps and periods
    // //   the specific changes are unknown because the original code was so convoluted

    // // sgp4fix take out atime = 0.0 and fix for faster operation
    ft    = 0.0;

    if (irez !== 0) {
        // sgp4fix streamline check
        if ((atime === 0.0) || (t * atime <= 0.0) || (Math.abs(t) < Math.abs(atime))) {
            atime  = 0.0;
            xni    = no;
            xli    = xlamo;
        }
        // sgp4fix move check outside loop
        if (t >= 0.0) {
            delt = stepp;
        }
        else {
            delt = stepn;
        }

        iretn = 381; //// added for do loop
        iret  =   0; //// added for loop
        while (iretn === 381) {
            // /* ------------------- dot terms calculated ------------- */
            // /* ----------- near - synchronous resonance terms ------- */
            if (irez !== 2) {
                xndt  = del1 * Math.sin(xli - fasx2) + del2 * Math.sin(2.0 * (xli - fasx4)) +
                    del3 * Math.sin(3.0 * (xli - fasx6));
                xldot = xni + xfact;
                xnddt = del1 * Math.cos(xli - fasx2) +
                    2.0 * del2 * Math.cos(2.0 * (xli - fasx4)) +
                    3.0 * del3 * Math.cos(3.0 * (xli - fasx6));
                xnddt = xnddt * xldot;
            }
            else {
                // /* --------- near - half-day resonance terms -------- */
                xomi  = argpo + argpdot * atime;
                x2omi = xomi + xomi;
                x2li  = xli + xli;
                xndt  =
                    d2201 * Math.sin(x2omi + xli - g22)  + d2211 * Math.sin(xli - g22) +
                    d3210 * Math.sin(xomi + xli - g32)   + d3222 * Math.sin(-xomi + xli - g32) +
                    d4410 * Math.sin(x2omi + x2li - g44) + d4422 * Math.sin(x2li - g44) +
                    d5220 * Math.sin(xomi + xli - g52)   + d5232 * Math.sin(-xomi + xli - g52) +
                    d5421 * Math.sin(xomi + x2li - g54)  + d5433 * Math.sin(-xomi + x2li - g54);
                xldot = xni + xfact;
                xnddt =
                    d2201 * Math.cos(x2omi + xli - g22) + d2211 * Math.cos(xli - g22) +
                    d3210 * Math.cos(xomi + xli - g32)  + d3222 * Math.cos(-xomi + xli - g32) +
                    d5220 * Math.cos(xomi + xli - g52)  + d5232 * Math.cos(-xomi + xli - g52) +
                    2.0 * (d4410 * Math.cos(x2omi + x2li - g44) +
                           d4422 * Math.cos(x2li - g44) + d5421 * Math.cos(xomi + x2li - g54) +
                           d5433 * Math.cos(-xomi + x2li - g54));
                xnddt = xnddt * xldot;
            }

           // /* ----------------------- integrator ------------------- */
           // sgp4fix move end checks to end of routine
            if (Math.abs(t - atime) >= stepp) {
                iret  = 0;
                iretn = 381;
            }
            else {
                ft    = t - atime;
                iretn = 0;
            }

            if (iretn === 381) {
                xli   = xli + xldot * delt + xndt * step2;
                xni   = xni + xndt * delt + xnddt * step2;
                atime = atime + delt;
            }
        } // while iretn = 381

        nm = xni + xndt * ft + xnddt * ft * ft * 0.5;
        xl = xli + xldot * ft + xndt * ft * ft * 0.5;
        if (irez !== 1) {
            mm   = xl - 2.0 * nodem + 2.0 * theta;
            dndt = nm - no;
        }
        else {
            mm   = xl - nodem - argpm + theta;
            dndt = nm - no;
        }
        nm = no + dndt;
    }

    return [atime, em, argpm, inclm, xli, mm, xni, nodem, dndt, nm];
}

// getgravc.js
function getgravc(whichconst) {
    'use strict';
    var mu, radiusearthkm, xke, tumin, j2, j3, j4, j3oj2;

    switch (whichconst) {
    case 721:
        // -- wgs-72 low precision str#3 constants --
        mu     = 398600.79964;        // in km3 / s2
        radiusearthkm = 6378.135;     // km
        xke    = 0.0743669161;
        tumin  = 1.0 / xke;
        j2     =   0.001082616;
        j3     =  -0.00000253881;
        j4     =  -0.00000165597;
        j3oj2  =  j3 / j2;
        break;
    case 72:
        // ------------ wgs-72 constants ------------
        mu     = 398600.8;            // in km3 / s2
        radiusearthkm = 6378.135;     // km
        xke    = 60.0 / Math.sqrt(radiusearthkm * radiusearthkm * radiusearthkm / mu);
        tumin  = 1.0 / xke;
        j2     =   0.001082616;
        j3     =  -0.00000253881;
        j4     =  -0.00000165597;
        j3oj2  =  j3 / j2;
        break;
    case 84:
        // ------------ wgs-84 constants ------------
        mu     = 398600.5;            // in km3 / s2
        radiusearthkm = 6378.137;     // km
        xke    = 60.0 / Math.sqrt(radiusearthkm * radiusearthkm * radiusearthkm / mu);
        tumin  = 1.0 / xke;
        j2     =   0.00108262998905;
        j3     =  -0.00000253215306;
        j4     =  -0.00000161098761;
        j3oj2  =  j3 / j2;
        break;
    default:
        alert('getgravc: unknown gravity option: ' + whichconst);
        throw new Error('getgravc: unknown gravity option: ' + whichconst);
    }
    return [tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2];
}

// gstime.js
function gstime(jdut1) {
    'use strict';
    var twopi      = 2.0 * Math.PI,
        deg2rad    = Math.PI / 180.0,
        tut1, temp;

    // ------------------------  implementation   ------------------
    tut1 = (jdut1 - 2451545.0) / 36525.0;

    temp = -6.2e-6 * tut1 * tut1 * tut1 + 0.093104 * tut1 * tut1 +
        (876600.0 * 3600.0 + 8640184.812866) * tut1 + 67310.54841;

    // 360/86400 = 1/240, to deg, to rad
    temp = (temp * deg2rad / 240.0) % twopi;

    // ------------------------ check quadrants --------------------
    if (temp < 0.0) {
        temp = temp + twopi;
    }
    return temp;
}

// initl.js
function initl(ecco, epoch, inclo, no, satn) {
    'use strict';
    // /* -------------------- wgs-72 earth constants ----------------- */
    // sgp4fix identify constants and allow alternate values

    // MATLAB:
    //global tumin mu radiusearthkm xke j2 j3 j4 j3oj2
    // not used: tumin, mu, radiusearth, j3, j4, j3oj2
    //global opsmode

    if (typeof opsmode === 'undefined') {
        throw new Error('opsmode undefined');
    }
    if (typeof xke     === 'undefined') {
        throw new Error('xke undefined');
    }
    if (typeof j2      === 'undefined') {
        throw new Error('j2 undefined');
    }

    var x2o3   = 2.0 / 3.0,
        // /* ------------- calculate auxillary epoch quantities ---------- */
        eccsq  = ecco * ecco,
        omeosq = 1.0 - eccsq,
        rteosq = Math.sqrt(omeosq),
        cosio  = Math.cos(inclo),
        cosio2 = cosio * cosio,
        // /* ------------------ un-kozai the mean motion ----------------- */
        ak    = Math.pow(xke / no, x2o3),
        d1    = 0.75 * j2 * (3.0 * cosio2 - 1.0) / (rteosq * omeosq),
        del   = d1 / (ak * ak),
        adel  = ak * (1.0 - del * del - del *
                   (1.0 / 3.0 + 134.0 * del * del / 81.0)),
        // defined elsewhere
        ao, sinio, po, con42, con41, ainv, einv, posq, rp, method,
        gsto, ts70, ids70, tfrac, c1, thgr70, fk5r, twopi, c1p2p;

    del   = d1 / (adel * adel);
    no    = no / (1.0 + del);

    ao    = Math.pow(xke / no, x2o3);
    sinio = Math.sin(inclo);
    po    = ao * omeosq;
    con42 = 1.0 - 5.0 * cosio2;
    con41 = -con42 - cosio2 - cosio2;
    ainv  = 1.0 / ao;
    einv  = 1.0 / ecco;
    posq  = po * po;
    rp    = ao * (1.0 - ecco);
    method = 'n';

    // sgp4fix modern approach to finding sidereal time
    if  (opsmode !== 'a') {
        gsto = gstime(epoch + 2433281.5); // EXTERNAL gstime()
    }
    else {
        // sgp4fix use old way of finding gst
        // count integer number of days from 0 jan 1970
        ts70   = epoch - 7305.0;
        ids70  = Math.floor(ts70 + 1.0e-8);
        tfrac  = ts70 - ids70;
        // find greenwich location at epoch
        c1     = 1.72027916940703639e-2;
        thgr70 = 1.7321343856509374;
        fk5r   = 5.07551419432269442e-15;
        twopi  = 6.283185307179586;
        c1p2p  = c1 + twopi;
        gsto   = (thgr70 + c1 * ids70 + c1p2p * tfrac + ts70 * ts70 * fk5r) % twopi;
    }

    if (gsto < 0.0) {
        gsto = gsto + twopi;
    }

    return [ainv, ao, con41, con42, cosio, cosio2, einv,
            eccsq, method, omeosq, posq, rp, rteosq, sinio,
            gsto, no];
}

// invjday.js
function invjday(jd) {
    'use strict';
    // ----------------- find year and days of the year ---------------
    var temp   = jd - 2415019.5,
        tu      = temp / 365.25,
        year    = 1900 + Math.floor(tu),
        leapyrs = Math.floor((year - 1901) * 0.25),
        //     days   = temp - ((year-1900)*365.0 + leapyrs ) + 0.00000000001; // nudge by 8.64x10-7 sec to get even outputs
        days    = temp - ((year - 1900) * 365.0 + leapyrs),
        mon, day, hr, min, sec,
        rets;

    // ------------ check for case of beginning of a year -------------
    if (days < 1.0) {
        year    = year - 1;
        leapyrs = Math.floor((year - 1901) * 0.25);
        days    = temp - ((year - 1900) * 365.0 + leapyrs);
    }
    // ------------------- find remaining data  -----------------------
    rets = days2mdh(year, days);
    mon = rets.shift();
    day = rets.shift();
    hr  = rets.shift();
    min = rets.shift();
    sec = rets.shift();
    //     sec= sec - 0.00000086400;
    return [year, mon, day, hr, min, sec];
}

// jday.js
function jday(yr, mon, day, hr, min, sec) {
    'use strict';
    return 367.0 * yr -
        Math.floor((7 * (yr + Math.floor((mon + 9) / 12.0))) * 0.25) +
        Math.floor(275 * mon / 9.0) +
        day + 1721013.5 +
        ((sec / 60.0 + min) / 60.0 + hr) / 24.0;
        //  - 0.5 * sign(100.0 * yr + mon - 190002.5) + 0.5;
}

// mag.js
function mag(vec) {
    'use strict';
    var temp = vec[0] * vec[0] + vec[1] * vec[1] + vec[2] * vec[2],
        mymag = 0.0;

    if (Math.abs(temp) >= 1.0e-16) {
        mymag = Math.sqrt(temp);
    }
    return mymag;
}

// math_utils.js
function sign(val) {
    'use strict';
    if (val < 0) {
        return -1;
    }
    if (val > 0) {
        return 1;
    }
    return 0;
}

function cross(v1, v2) {
    'use strict';
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
    'use strict';
    // Return a scalar dot product of two multidimensional vectors.
    // http://c2.com/cgi/wiki?DotProductInManyProgrammingLanguages
    var n = 0,
        lim = Math.min(a.length, b.length),
        i;
    for (i = 0; i < lim; i += 1) {
        n += a[i] * b[i];
    }
    return n;
}

// newtonu.js
function sinh(val) {
    'use strict';
    return (Math.pow(Math.E, val) - Math.pow(Math.E, -val)) / 2;
}

function asinh(val) {
    'use strict';
    return Math.log(val + Math.sqrt(val * val + 1));
}


function newtonnu(ecc, nu) {
    'use strict';
    var e0 = 999999.9,
        m = 999999.9,
        small = 0.00000001,
        sine, cose;

    // --------------------------- circular ------------------------
    if (Math.abs(ecc) < small) {
        m  = nu;
        e0 = nu;
    }
    else {
        // ---------------------- elliptical -----------------------
        if (ecc < 1.0 - small) {
            sine = (Math.sqrt(1.0 - ecc * ecc) * Math.sin(nu)) / (1.0 + ecc * Math.cos(nu));
            cose = (ecc + Math.cos(nu)) / (1.0 + ecc * Math.cos(nu));
            e0  = Math.atan2(sine, cose);
            m   = e0 - ecc * Math.sin(e0);
        }
        else {
            // -------------------- hyperbolic  --------------------
            if (ecc > 1.0 + small) {
                if ((ecc > 1.0) &&
                    (Math.abs(nu) + 0.00001 < Math.PI - Math.acos(1.0 / ecc))) {
                    sine = (Math.sqrt(ecc * ecc - 1.0) * Math.sin(nu)) / (1.0 + ecc * Math.cos(nu));
                    e0   = asinh(sine);
                    m    = ecc * sinh(e0) - e0;
                }
                else {
                    // ----------------- parabolic ---------------------
                    if (Math.abs(nu) < 168.0 * Math.PI / 180.0) {
                        e0 = Math.tan(nu * 0.5);
                        m  = e0 + (e0 * e0 * e0) / 3.0;
                    }
                }
            }
        }
    }


    if (ecc < 1.0) {
        m = m % (2.0 * Math.PI);
        if (m < 0.0) {
            m = m + 2.0 * Math.PI;
        }
        e0 = e0 % (2.0 * Math.PI);
    }

    return [e0, m];
}

// rv2coe.js
function rv2coe(r, v, mu) {
    'use strict';
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
            alert('ecc<small');
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
                alert('eliptical/para/hyper: type=ee');
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
            alert('omega=UNDEFINED');
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
            alert('argp=UNDEFINED');
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
            alert('nu=UNDEFINED');
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

// sgp4.js
function sgp4(satrec, tsince) {
    'use strict';

    // /* ------------------ set mathematical constants --------------- */
    var twopi = 2.0 * Math.PI,
        x2o3  = 2.0 / 3.0,
        // sgp4fix divisor for divide by zero check on inclination
        // the old check used 1.0 + Math.cos(pi-1.0e-9), but then compared it to
        // 1.5 e-12, so the threshold was changed to 1.5e-12 for consistancy
        temp4    =   1.5e-12,

    // sgp4fix identify constants and allow alternate values
    // TODO: global tumin mu radiusearthkm xke j2 j3 j4 j3oj2
    rets, tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2,
    vkmpersec,
    xmdf, argpdf, nodedf, argpm, mm, t2, nodem, tempa, tempe, templ,
    delomg, delm, temp, t3, t4, temp3,
    nm, em, inclm, tc, dndt, am,
    xm, emsq, sl,
    xlm, sinim, cosim, ep, xincp, argpp, nodep, mp, sinip, cosip,
    axnl, aynl, xl, u, eo1, tem5, ktr, sineo1, coseo1,
    ecose, esine, el2, pl,
    r = [],
    v = [],
    rl, rdotl, rvdotl, betal, sinu, cosu, su, sin2u, cos2u, temp1, temp2,
    cosisq, mrt, xnode, xinc, mvt, rvdot,
    sinsu, cossu, snod, cnod, sini, cosi, xmx, xmy, ux, uy, uz, vx, vy, vz;

    // TODO: how do we get `whichconst` from the caller? or (shudder) globals?
    rets = getgravc(72); // TODO: sucks to have to call this all the time
    tumin               = rets.shift();
    mu                  = rets.shift();
    radiusearthkm       = rets.shift();
    xke                 = rets.shift();
    j2                  = rets.shift();
    j3                  = rets.shift();
    j4                  = rets.shift();
    j3oj2               = rets.shift();

    vkmpersec     = radiusearthkm * xke / 60.0;

    // /* --------------------- clear sgp4 error flag ----------------- */
    //satrec.t     = tsince/1440;
    satrec.t     = tsince;
    satrec.error = 0;

    // /* ------- update for secular gravity and atmospheric drag ----- */
    xmdf    = satrec.mo + satrec.mdot * satrec.t;
    argpdf  = satrec.argpo + satrec.argpdot * satrec.t;
    nodedf  = satrec.nodeo + satrec.nodedot * satrec.t;
    argpm   = argpdf;
    mm      = xmdf;
    t2      = satrec.t * satrec.t;
    nodem   = nodedf + satrec.nodecf * t2;
    tempa   = 1.0 - satrec.cc1 * satrec.t;
    tempe   = satrec.bstar * satrec.cc4 * satrec.t;
    templ   = satrec.t2cof * t2;

    if (satrec.isimp !== 1) {
        delomg = satrec.omgcof * satrec.t;
        delm   = satrec.xmcof *
            (Math.pow(1.0 + satrec.eta * Math.cos(xmdf), 3) -
             satrec.delmo);
        temp   = delomg + delm;
        mm     = xmdf + temp;
        argpm  = argpdf - temp;
        t3     = t2 * satrec.t;
        t4     = t3 * satrec.t;
        tempa  = tempa - satrec.d2 * t2 - satrec.d3 * t3 - satrec.d4 * t4;
        tempe  = tempe + satrec.bstar * satrec.cc5 * (Math.sin(mm) - satrec.sinmao);
        templ  = templ + satrec.t3cof * t3 + t4 * (satrec.t4cof +
                                                   satrec.t * satrec.t5cof);
    }

    nm    = satrec.no;
    em    = satrec.ecco;
    inclm = satrec.inclo;
    if (satrec.method === 'd') {
        tc = satrec.t;
        rets = dspace(satrec.d2201, satrec.d2211, satrec.d3210,
                      satrec.d3222, satrec.d4410, satrec.d4422,
                      satrec.d5220, satrec.d5232, satrec.d5421,
                      satrec.d5433, satrec.dedt, satrec.del1,
                      satrec.del2, satrec.del3, satrec.didt,
                      satrec.dmdt, satrec.dnodt, satrec.domdt,
                      satrec.irez, satrec.argpo, satrec.argpdot, satrec.t,
                      tc, satrec.gsto, satrec.xfact, satrec.xlamo, satrec.no,
                      satrec.atime, em, argpm, inclm, satrec.xli, mm,
                      satrec.xni, nodem, nm);
        satrec.atime    = rets.shift();
        em              = rets.shift();
        argpm           = rets.shift();
        inclm           = rets.shift();
        satrec.xli      = rets.shift();
        mm              = rets.shift();
        satrec.xni      = rets.shift();
        nodem           = rets.shift();
        dndt            = rets.shift();
        nm              = rets.shift();
    }                           // if method = d

    if (nm <= 0.0) {
        //       fprintf(1,'# error nm //f\n', nm);
        satrec.error = 2;
    }
    am = Math.pow(xke / nm, x2o3) * tempa * tempa;
    nm = xke / Math.pow(am, 1.5);
    em = em - tempe;

    // fix tolerance for error recognition
    if ((em >= 1.0) || (em < -0.001) || (am < 0.95)) {
        //fprintf(1,'# error em //f\n', em);
        satrec.error = 1;
    }
    //   sgp4fix change test condition for eccentricity
    if (em < 1.0e-6) {
        em  = 1.0e-6;
    }
    mm     = mm + satrec.no * templ;
    xlm    = mm + argpm + nodem;
    emsq   = em * em;
    temp   = 1.0 - emsq;
    nodem  = nodem % twopi;
    argpm  = argpm % twopi;
    xlm    = xlm % twopi;
    mm     = (xlm - argpm - nodem) % twopi;

    // /* ----------------- compute extra mean quantities ------------- */
    sinim = Math.sin(inclm);
    cosim = Math.cos(inclm);

    // /* -------------------- add lunar-solar periodics -------------- */
    ep     = em;
    xincp  = inclm;
    argpp  = argpm;
    nodep  = nodem;
    mp     = mm;
    sinip  = sinim;
    cosip  = cosim;
    if (satrec.method === 'd') {
        rets = dpper(satrec.e3, satrec.ee2, satrec.peo,
                     satrec.pgho, satrec.pho, satrec.pinco,
                     satrec.plo, satrec.se2, satrec.se3,
                     satrec.sgh2, satrec.sgh3, satrec.sgh4,
                     satrec.sh2, satrec.sh3, satrec.si2,
                     satrec.si3, satrec.sl2, satrec.sl3,
                     satrec.sl4, satrec.t, satrec.xgh2,
                     satrec.xgh3, satrec.xgh4, satrec.xh2,
                     satrec.xh3, satrec.xi2, satrec.xi3,
                     satrec.xl2, satrec.xl3, satrec.xl4,
                     satrec.zmol, satrec.zmos, satrec.inclo,
                     satrec.init, ep, xincp, nodep, argpp, mp);
        ep      = rets.shift();
        xincp   = rets.shift();
        nodep   = rets.shift();
        argpp   = rets.shift();
        mp      = rets.shift();

        if (xincp < 0.0) {
            xincp  = -xincp;
            nodep = nodep + Math.PI;
            argpp  = argpp - Math.PI;
        }
        if ((ep < 0.0) || (ep > 1.0)) {
            //fprintf(1,'# error ep //f\n', ep);
            satrec.error = 3;
        }
    }                           // if method = d

    // /* -------------------- long period periodics ------------------ */
    if (satrec.method === 'd') {
        sinip =  Math.sin(xincp);
        cosip =  Math.cos(xincp);
        satrec.aycof = -0.5 * j3oj2 * sinip;
        // sgp4fix for divide by zero with xinco = 180 deg
        if (Math.abs(cosip + 1.0) > 1.5e-12) {
            satrec.xlcof = -0.25 * j3oj2 * sinip * (3.0 + 5.0 * cosip) / (1.0 + cosip);
        }
        else {
            satrec.xlcof = -0.25 * j3oj2 * sinip * (3.0 + 5.0 * cosip) / temp4;
        }
    }
    axnl = ep * Math.cos(argpp);
    temp = 1.0 / (am * (1.0 - ep * ep));
    aynl = ep * Math.sin(argpp) + temp * satrec.aycof;
    xl   = mp + argpp + nodep + temp * satrec.xlcof * axnl;

    // /* --------------------- solve kepler's equation --------------- */
    u    = (xl - nodep) % twopi;
    eo1  = u;
    tem5 = 9999.9;
    ktr = 1;
    //   sgp4fix for kepler iteration
    //   the following iteration needs better limits on corrections
    while ((Math.abs(tem5) >= 1.0e-12) && (ktr <= 10)) {
        sineo1 = Math.sin(eo1);
        coseo1 = Math.cos(eo1);
        tem5   = 1.0 - coseo1 * axnl - sineo1 * aynl;
        tem5   = (u - aynl * coseo1 + axnl * sineo1 - eo1) / tem5;
        if (Math.abs(tem5) >= 0.95) {
            if (tem5 > 0.0) {
                tem5 = 0.95;
            }
            else {
                tem5 = -0.95;
            }
        }
        eo1    = eo1 + tem5;
        ktr = ktr + 1;
    }

    // /* ------------- short period preliminary quantities ----------- */
    ecose = axnl * coseo1 + aynl * sineo1;
    esine = axnl * sineo1 - aynl * coseo1;
    el2   = axnl * axnl + aynl * aynl;
    pl    = am * (1.0 - el2);
    if (pl < 0.0) {
        //fprintf(1,'# error pl //f\n', pl);
        satrec.error = 4;
        // WTF is this in MATLAB? ';' makes it columnar array
        // r = [0;0;0];
        // v = [0;0;0];
        r = [0, 0, 0];
        v = [0, 0, 0];
    }
    else {
        rl     = am * (1.0 - ecose);
        rdotl  = Math.sqrt(am) * esine / rl;
        rvdotl = Math.sqrt(pl) / rl;
        betal  = Math.sqrt(1.0 - el2);
        temp   = esine / (1.0 + betal);
        sinu   = am / rl * (sineo1 - aynl - axnl * temp);
        cosu   = am / rl * (coseo1 - axnl + aynl * temp);
        su     = Math.atan2(sinu, cosu);
        sin2u  = (cosu + cosu) * sinu;
        cos2u  = 1.0 - 2.0 * sinu * sinu;
        temp   = 1.0 / pl;
        temp1  = 0.5 * j2 * temp;
        temp2  = temp1 * temp;

        // /* -------------- update for short period periodics ------------ */
        if (satrec.method === 'd') {
            cosisq = cosip * cosip;
            satrec.con41  = 3.0 * cosisq - 1.0;
            satrec.x1mth2 = 1.0 - cosisq;
            satrec.x7thm1 = 7.0 * cosisq - 1.0;
        }
        mrt   = rl * (1.0 - 1.5 * temp2 * betal * satrec.con41) +
            0.5 * temp1 * satrec.x1mth2 * cos2u;
        su    = su - 0.25 * temp2 * satrec.x7thm1 * sin2u;
        xnode = nodep + 1.5 * temp2 * cosip * sin2u;
        xinc  = xincp + 1.5 * temp2 * cosip * sinip * cos2u;
        mvt   = rdotl - nm * temp1 * satrec.x1mth2 * sin2u / xke;
        rvdot = rvdotl + nm * temp1 * (satrec.x1mth2 * cos2u +
                                       1.5 * satrec.con41) / xke;

        // /* --------------------- orientation vectors ------------------- */
        sinsu =  Math.sin(su);
        cossu =  Math.cos(su);
        snod  =  Math.sin(xnode);
        cnod  =  Math.cos(xnode);
        sini  =  Math.sin(xinc);
        cosi  =  Math.cos(xinc);
        xmx   = -snod * cosi;
        xmy   =  cnod * cosi;
        ux    =  xmx * sinsu + cnod * cossu;
        uy    =  xmy * sinsu + snod * cossu;
        uz    =  sini * sinsu;
        vx    =  xmx * cossu - cnod * sinsu;
        vy    =  xmy * cossu - snod * sinsu;
        vz    =  sini * cossu;

        // /* --------- position and velocity (in km and km/sec) ---------- */
        r[0] = (mrt * ux) * radiusearthkm;
        r[1] = (mrt * uy) * radiusearthkm;
        r[2] = (mrt * uz) * radiusearthkm;
        v[0] = (mvt * ux + rvdot * vx) * vkmpersec;
        v[1] = (mvt * uy + rvdot * vy) * vkmpersec;
        v[2] = (mvt * uz + rvdot * vz) * vkmpersec;
    }// if pl > 0

    // sgp4fix for decaying satellites
    if (mrt < 1.0) {
        // printf("# decay condition //11.6f \n",mrt);
        satrec.error = 6;
    }

    return [satrec, r, v];
}

// sgp4init.js
function sgp4init(whichconst, satrec, xbstar, xecco, epoch,
                  xargpo, xinclo, xmo, xno, xnodeo) {
    'use strict';
    var gravc, tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2,
        ss, qzms2t, x2o3, temp4, foo,
        ainv, ao, con42, cosio, cosio2, einv, eccsq, omeosq, posq, rp, rteosq, sinio,
        sfour, qzms24, perige, pinvsq, tsi, etasq, eeta, psisq, coef, coef1, cc2, cc3,
        cosio4, temp1, temp2, temp3, xhdot1, xpidot,
        tc, inclm,
        dscomvars, sinim, cosim, sinomm, cosomm, snodm, cnodm, day, em, emsq, gam, rtemsq,
        s1, s2, s3, s4, s5, s6, s7, ss1, ss2, ss3, ss4, ss5, ss6, ss7,
        sz1, sz2, sz3, sz11, sz12, sz13, sz21, sz22, sz23, sz31, sz32, sz33,
        nm, z1, z2, z3, z11, z12, z13, z21, z22, z23, z31, z32, z33,
        rets,
        argpm, nodem, mm,
        dndt,
    cc1sq, temp,
    r, v;

    // /* ------------------------ initialization --------------------- */
    // /* ----------- set all near earth variables to zero ------------ */
    satrec.isimp   = 0;
    satrec.method = 'n';
    satrec.aycof    = 0.0;
    satrec.con41   = 0.0;
    satrec.cc1    = 0.0;
    satrec.cc4      = 0.0;
    satrec.cc5     = 0.0;
    satrec.d2     = 0.0;
    satrec.d3       = 0.0;
    satrec.d4      = 0.0;
    satrec.delmo  = 0.0;
    satrec.eta      = 0.0;
    satrec.argpdot = 0.0;
    satrec.omgcof = 0.0;
    satrec.sinmao   = 0.0;
    satrec.t       = 0.0;
    satrec.t2cof  = 0.0;
    satrec.t3cof    = 0.0;
    satrec.t4cof   = 0.0;
    satrec.t5cof  = 0.0;
    satrec.x1mth2   = 0.0;
    satrec.x7thm1  = 0.0;
    satrec.mdot   = 0.0;
    satrec.nodedot = 0.0;
    satrec.xlcof   = 0.0;
    satrec.xmcof  = 0.0;
    satrec.nodecf  = 0.0;
    // /* ----------- set all deep space variables to zero ------------ */
    satrec.irez  = 0;
    satrec.d2201 = 0.0;
    satrec.d2211 = 0.0;
    satrec.d3210 = 0.0;
    satrec.d3222 = 0.0;
    satrec.d4410 = 0.0;
    satrec.d4422 = 0.0;
    satrec.d5220 = 0.0;
    satrec.d5232 = 0.0;
    satrec.d5421 = 0.0;
    satrec.d5433 = 0.0;
    satrec.dedt  = 0.0;
    satrec.del1  = 0.0;
    satrec.del2  = 0.0;
    satrec.del3  = 0.0;
    satrec.didt  = 0.0;
    satrec.dmdt  = 0.0;
    satrec.dnodt = 0.0;
    satrec.domdt = 0.0;
    satrec.e3    = 0.0;
    satrec.ee2   = 0.0;
    satrec.peo   = 0.0;
    satrec.pgho  = 0.0;
    satrec.pho   = 0.0;
    satrec.pinco = 0.0;
    satrec.plo   = 0.0;
    satrec.se2   = 0.0;
    satrec.se3   = 0.0;
    satrec.sgh2  = 0.0;
    satrec.sgh3  = 0.0;
    satrec.sgh4  = 0.0;
    satrec.sh2   = 0.0;
    satrec.sh3   = 0.0;
    satrec.si2   = 0.0;
    satrec.si3   = 0.0;
    satrec.sl2   = 0.0;
    satrec.sl3   = 0.0;
    satrec.sl4   = 0.0;
    satrec.gsto  = 0.0;
    satrec.xfact = 0.0;
    satrec.xgh2  = 0.0;
    satrec.xgh3  = 0.0;
    satrec.xgh4  = 0.0;
    satrec.xh2   = 0.0;
    satrec.xh3   = 0.0;
    satrec.xi2   = 0.0;
    satrec.xi3   = 0.0;
    satrec.xl2   = 0.0;
    satrec.xl3   = 0.0;
    satrec.xl4   = 0.0;
    satrec.xlamo = 0.0;
    satrec.zmol  = 0.0;
    satrec.zmos  = 0.0;
    satrec.atime = 0.0;
    satrec.xli   = 0.0;
    satrec.xni   = 0.0;

    // sgp4fix - note the following variables are also passed directly via satrec.
    // it is possible to streamline the sgp4init call by deleting the "x"
    // variables, but the user would need to set the satrec.* values first. we
    // include the additional assignment in case twoline2rv is not used.
    satrec.bstar      = xbstar;
    satrec.ecco       = xecco;
    satrec.argpo      = xargpo;
    satrec.inclo      = xinclo;
    satrec.mo         = xmo;
    satrec.no         = xno;
    satrec.nodeo      = xnodeo;

    //     /* -------------------- wgs-72 earth constants ----------------- */
    //     // sgp4fix identify constants and allow alternate values

    // [tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2] = getgravc( whichconst );
    rets = getgravc(whichconst);
    tumin               = rets.shift();
    mu                  = rets.shift();
    radiusearthkm       = rets.shift();
    xke                 = rets.shift();
    j2                  = rets.shift();
    j3                  = rets.shift();
    j4                  = rets.shift();
    j3oj2               = rets.shift();

    ss     = 78.0 / radiusearthkm + 1.0;
    qzms2t = Math.pow((120.0 - 78.0) / radiusearthkm, 4);
    x2o3   =  2.0 / 3.0;
    // sgp4fix divisor for divide by zero check on inclination
    // the old check used 1.0 + cos(pi-1.0e-9), but then compared it to
    // 1.5 e-12, so the threshold was changed to 1.5e-12 for consistancy
    temp4    =   1.5e-12;

    satrec.init = 'y';
    satrec.t    = 0.0;

    // [ainv,  ao,     satrec.con41,   con42,  cosio,  cosio2, einv,   eccsq,
    //        satrec.method,  omeosq, posq,   rp,     rteosq, sinio,
    //        satrec.gsto,    satrec.no]
    rets = initl(satrec.ecco, epoch, satrec.inclo, satrec.no, satrec.satnum);
    ainv          = rets.shift();
    ao            = rets.shift();
    satrec.con41  = rets.shift();
    con42         = rets.shift();
    cosio         = rets.shift();
    cosio2        = rets.shift();
    einv          = rets.shift();
    eccsq         = rets.shift();
    satrec.method = rets.shift();
    omeosq        = rets.shift();
    posq          = rets.shift();
    rp            = rets.shift();
    rteosq        = rets.shift();
    sinio         = rets.shift();
    satrec.gsto   = rets.shift();
    satrec.no     = rets.shift();

    satrec.error = 0;

    if (rp < 1.0) {
        //   printf("# *** satn//d epoch elts sub-orbital ***\n" = rets[]; satn);
        satrec.error = 5;
    }

    if ((omeosq >= 0.0) || (satrec.no >= 0.0)) {
        satrec.isimp = 0;

        if (rp < (220.0 / radiusearthkm + 1.0)) {
            satrec.isimp = 1;
        }
        sfour  = ss;
        qzms24 = qzms2t;
        perige = (rp - 1.0) * radiusearthkm;

        // /* - for perigees below 156 km, s and qoms2t are altered - */
        if (perige < 156.0) {
            sfour = perige - 78.0;
            if (perige < 98.0) {
                sfour = 20.0;
            }
            qzms24 = Math.pow((120.0 - sfour) / radiusearthkm, 4.0);
            sfour  = sfour / radiusearthkm + 1.0;
        }
        pinvsq = 1.0 / posq;

        tsi  = 1.0 / (ao - sfour);
        satrec.eta  = ao * satrec.ecco * tsi;
        etasq = satrec.eta * satrec.eta;
        eeta  = satrec.ecco * satrec.eta;
        psisq = Math.abs(1.0 - etasq);
        coef  = qzms24 * Math.pow(tsi, 4.0);
        coef1 = coef / Math.pow(psisq, 3.5);
        cc2   = coef1 * satrec.no * (ao * (1.0 + 1.5 * etasq + eeta *
                                           (4.0 + etasq)) + 0.375 * j2 * tsi / psisq * satrec.con41 *
                                     (8.0 + 3.0 * etasq * (8.0 + etasq)));
        satrec.cc1   = satrec.bstar * cc2;
        cc3   = 0.0;
        if (satrec.ecco > 1.0e-4) {
            cc3 = -2.0 * coef * tsi * j3oj2 * satrec.no * sinio / satrec.ecco;
        }
        satrec.x1mth2 = 1.0 - cosio2;
        satrec.cc4    = 2.0 * satrec.no * coef1 * ao * omeosq *
            (satrec.eta * (2.0 + 0.5 * etasq) + satrec.ecco *
             (0.5 + 2.0 * etasq) - j2 * tsi / (ao * psisq) *
             (-3.0 * satrec.con41 * (1.0 - 2.0 * eeta + etasq *
                                     (1.5 - 0.5 * eeta)) + 0.75 * satrec.x1mth2 *
              (2.0 * etasq - eeta * (1.0 + etasq)) * Math.cos(2.0 * satrec.argpo)));
        satrec.cc5 = 2.0 * coef1 * ao * omeosq * (1.0 + 2.75 *
                                                  (etasq + eeta) + eeta * etasq);
        cosio4         = cosio2 * cosio2;
        temp1          = 1.5 * j2 * pinvsq * satrec.no;
        temp2          = 0.5 * temp1 * j2 * pinvsq;
        temp3          = -0.46875 * j4 * pinvsq * pinvsq * satrec.no;
        satrec.mdot    = satrec.no + 0.5 * temp1 * rteosq * satrec.con41 +
            0.0625 * temp2 * rteosq * (13.0 - 78.0 * cosio2 + 137.0 * cosio4);
        satrec.argpdot = -0.5 * temp1 * con42 + 0.0625 * temp2 *
            (7.0 - 114.0 * cosio2 + 395.0 * cosio4) +
            temp3 * (3.0 - 36.0 * cosio2 + 49.0 * cosio4);
        xhdot1         = -temp1 * cosio;
        satrec.nodedot = xhdot1 + (0.5 * temp2 * (4.0 - 19.0 * cosio2) +
                                   2.0 * temp3 * (3.0 - 7.0 * cosio2)) * cosio;
        xpidot         =  satrec.argpdot + satrec.nodedot;
        satrec.omgcof  = satrec.bstar * cc3 * Math.cos(satrec.argpo);
        satrec.xmcof   = 0.0;
        if (satrec.ecco > 1.0e-4) {
            satrec.xmcof = -x2o3 * coef * satrec.bstar / eeta;
        }
        satrec.nodecf  = 3.5 * omeosq * xhdot1 * satrec.cc1;
        satrec.t2cof   = 1.5 * satrec.cc1;

        // sgp4fix for divide by zero with xinco = 180 deg
        if (Math.abs(cosio + 1.0) > 1.5e-12) {
            satrec.xlcof = -0.25 * j3oj2 * sinio *
                (3.0 + 5.0 * cosio) / (1.0 + cosio);
        }
        else {
            satrec.xlcof   = -0.25 * j3oj2 * sinio *
                (3.0 + 5.0 * cosio) / temp4;
        }
        satrec.aycof   = -0.5 * j3oj2 * sinio;
        satrec.delmo   = Math.pow(1.0 + satrec.eta * Math.cos(satrec.mo), 3);
        satrec.sinmao  = Math.sin(satrec.mo);
        satrec.x7thm1  = 7.0 * cosio2 - 1.0;

        // /* --------------- deep space initialization ------------- */
        if ((2 * Math.PI / satrec.no) >= 225.0) {
            satrec.method = 'd';
            satrec.isimp  = 1;
            tc    =  0.0;
            inclm = satrec.inclo;

            // [sinim,cosim,sinomm,cosomm,snodm,cnodm,day,satrec.e3,satrec.ee2,
            // em,emsq,gam,satrec.peo,satrec.pgho,satrec.pho,satrec.pinco,
            // satrec.plo,rtemsq,satrec.se2,satrec.se3,satrec.sgh2,
            // satrec.sgh3,satrec.sgh4,satrec.sh2,satrec.sh3,satrec.si2,
            // satrec.si3,satrec.sl2,satrec.sl3,satrec.sl4,s1,s2,s3,s4,s5,
            // s6,s7,ss1,ss2,ss3,ss4,ss5,ss6,ss7,sz1,sz2,sz3,sz11,sz12,
            // sz13,sz21,sz22,sz23,sz31,sz32,sz33,satrec.xgh2,satrec.xgh3,
            // satrec.xgh4,satrec.xh2,satrec.xh3,satrec.xi2,satrec.xi3,
            // satrec.xl2,satrec.xl3,satrec.xl4,nm,z1,z2,z3,z11,z12,z13,
            // z21,z22,z23,z31,z32,z33,satrec.zmol,satrec.zmos] =
            rets = dscom(epoch, satrec.ecco, satrec.argpo, tc, satrec.inclo,
                              satrec.nodeo, satrec.no);
            sinim           = rets.shift();
            cosim           = rets.shift();
            sinomm          = rets.shift();
            cosomm          = rets.shift();
            snodm           = rets.shift();
            cnodm           = rets.shift();
            day             = rets.shift();
            satrec.e3       = rets.shift();
            satrec.ee2      = rets.shift();
            em              = rets.shift();
            emsq            = rets.shift();
            gam             = rets.shift();
            satrec.peo      = rets.shift();
            satrec.pgho     = rets.shift();
            satrec.pho      = rets.shift();
            satrec.pinco    = rets.shift();
            satrec.plo      = rets.shift();
            rtemsq          = rets.shift();
            satrec.se2      = rets.shift();
            satrec.se3      = rets.shift();
            satrec.sgh2     = rets.shift();
            satrec.sgh3     = rets.shift();
            satrec.sgh4     = rets.shift();
            satrec.sh2      = rets.shift();
            satrec.sh3      = rets.shift();
            satrec.si2      = rets.shift();
            satrec.si3      = rets.shift();
            satrec.sl2      = rets.shift();
            satrec.sl3      = rets.shift();
            satrec.sl4      = rets.shift();
            s1              = rets.shift();
            s2              = rets.shift();
            s3              = rets.shift();
            s4              = rets.shift();
            s5              = rets.shift();
            s6              = rets.shift();
            s7              = rets.shift();
            ss1             = rets.shift();
            ss2             = rets.shift();
            ss3             = rets.shift();
            ss4             = rets.shift();
            ss5             = rets.shift();
            ss6             = rets.shift();
            ss7             = rets.shift();
            sz1             = rets.shift();
            sz2             = rets.shift();
            sz3             = rets.shift();
            sz11            = rets.shift();
            sz12            = rets.shift();
            sz13            = rets.shift();
            sz21            = rets.shift();
            sz22            = rets.shift();
            sz23            = rets.shift();
            sz31            = rets.shift();
            sz32            = rets.shift();
            sz33            = rets.shift();
            satrec.xgh2     = rets.shift();
            satrec.xgh3     = rets.shift();
            satrec.xgh4     = rets.shift();
            satrec.xh2      = rets.shift();
            satrec.xh3      = rets.shift();
            satrec.xi2      = rets.shift();
            satrec.xi3      = rets.shift();
            satrec.xl2      = rets.shift();
            satrec.xl3      = rets.shift();
            satrec.xl4      = rets.shift();
            nm              = rets.shift();
            z1              = rets.shift();
            z2              = rets.shift();
            z3              = rets.shift();
            z11             = rets.shift();
            z12             = rets.shift();
            z13             = rets.shift();
            z21             = rets.shift();
            z22             = rets.shift();
            z23             = rets.shift();
            z31             = rets.shift();
            z32             = rets.shift();
            z33             = rets.shift();
            satrec.zmol     = rets.shift();
            satrec.zmos     = rets.shift();



            //[satrec.ecco,satrec.inclo,satrec.nodeo,satrec.argpo,satrec.mo]
            rets = dpper(satrec.e3, satrec.ee2, satrec.peo, satrec.pgho,
                         satrec.pho, satrec.pinco, satrec.plo, satrec.se2, satrec.se3,
                         satrec.sgh2, satrec.sgh3, satrec.sgh4, satrec.sh2, satrec.sh3,
                         satrec.si2, satrec.si3, satrec.sl2, satrec.sl3, satrec.sl4,
                         satrec.t, satrec.xgh2, satrec.xgh3, satrec.xgh4, satrec.xh2,
                         satrec.xh3, satrec.xi2, satrec.xi3, satrec.xl2, satrec.xl3,
                         satrec.xl4, satrec.zmol, satrec.zmos, inclm, satrec.init,
                         satrec.ecco, satrec.inclo, satrec.nodeo, satrec.argpo, satrec.mo);

            satrec.ecco  = rets.shift();
            satrec.inclo = rets.shift();
            satrec.nodeo = rets.shift();
            satrec.argpo = rets.shift();
            satrec.mo    = rets.shift();

            argpm  = 0.0;
            nodem  = 0.0;
            mm     = 0.0;

            // [em,argpm,inclm,mm,nm,nodem,satrec.irez,satrec.atime,
            // satrec.d2201,satrec.d2211,satrec.d3210,satrec.d3222,
            // satrec.d4410,satrec.d4422,satrec.d5220,satrec.d5232,
            // satrec.d5421,satrec.d5433,satrec.dedt,satrec.didt,
            // satrec.dmdt,dndt,satrec.dnodt,satrec.domdt,satrec.del1,
            // satrec.del2,satrec.del3,
            // //ses,sghl,sghs,sgs,shl,shs,sis,sls,theta,
            // satrec.xfact,satrec.xlamo,satrec.xli,satrec.xni]

            rets = dsinit(cosim, emsq, satrec.argpo, s1, s2, s3, s4, s5, sinim, ss1, ss2, ss3,
                          ss4, ss5, sz1, sz3, sz11, sz13, sz21, sz23, sz31, sz33, satrec.t, tc,
                          satrec.gsto, satrec.mo, satrec.mdot, satrec.no, satrec.nodeo,
                          satrec.nodedot, xpidot, z1, z3, z11, z13, z21, z23, z31, z33, em,
                          argpm, inclm, mm, nm, nodem, satrec.ecco, eccsq);
            em                  = rets.shift();
            argpm       = rets.shift();
            inclm       = rets.shift();
            mm                  = rets.shift();
            nm                  = rets.shift();
            nodem       = rets.shift();
            satrec.irez         = rets.shift();
            satrec.atime    = rets.shift();
            satrec.d2201    = rets.shift();
            satrec.d2211    = rets.shift();
            satrec.d3210    = rets.shift();
            satrec.d3222    = rets.shift();
            satrec.d4410    = rets.shift();
            satrec.d4422    = rets.shift();
            satrec.d5220    = rets.shift();
            satrec.d5232    = rets.shift();
            satrec.d5421    = rets.shift();
            satrec.d5433    = rets.shift();
            satrec.dedt         = rets.shift();
            satrec.didt         = rets.shift();
            satrec.dmdt         = rets.shift();
            dndt        = rets.shift();
            satrec.dnodt    = rets.shift();
            satrec.domdt    = rets.shift();
            satrec.del1         = rets.shift();
            satrec.del2         = rets.shift();
            satrec.del3         = rets.shift();
            //ses,sghl,sghs,sgs,shl,shs,sis,sls,theta,
            satrec.xfact    = rets.shift();
            satrec.xlamo    = rets.shift();
            satrec.xli          = rets.shift();
            satrec.xni          = rets.shift();
        }

        // /* ----------- set variables if not deep space ----------- */
        if (satrec.isimp !== 1) {
            cc1sq          = satrec.cc1 * satrec.cc1;
            satrec.d2    = 4.0 * ao * tsi * cc1sq;
            temp           = satrec.d2 * tsi * satrec.cc1 / 3.0;
            satrec.d3    = (17.0 * ao + sfour) * temp;
            satrec.d4    = 0.5 * temp * ao * tsi *
                               (221.0 * ao + 31.0 * sfour) * satrec.cc1;
            satrec.t3cof = satrec.d2 + 2.0 * cc1sq;
            satrec.t4cof = 0.25 * (3.0 * satrec.d3 + satrec.cc1 *
                                   (12.0 * satrec.d2 + 10.0 * cc1sq));
            satrec.t5cof = 0.2 * (3.0 * satrec.d4 +
                                  12.0 * satrec.cc1 * satrec.d3 +
                                  6.0 * satrec.d2 * satrec.d2 +
                                  15.0 * cc1sq * (2.0 * satrec.d2 + cc1sq));
        }
    } // if omeosq = 0

    // /* finally propogate to zero epoch to initialise all others. */
    if (satrec.error === 0) {
        rets = sgp4(satrec, 0.0);
        satrec  = rets.shift();
        r       = rets.shift();
        v       = rets.shift();
    }

    satrec.init = 'n';
    return satrec; // MATLAB returns an unnecessary list "[satrec]", don't do it here
}

// sprintf.js
/**
sprintf() for JavaScript 0.7-beta1
http://www.diveintojavascript.com/projects/javascript-sprintf

Copyright (c) Alexandru Marasteanu <alexaholic [at) gmail (dot] com>
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.
    * Neither the name of sprintf() for JavaScript nor the
      names of its contributors may be used to endorse or promote products
      derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL Alexandru Marasteanu BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


Changelog:
2010.09.06 - 0.7-beta1
  - features: vsprintf, support for named placeholders
  - enhancements: format cache, reduced global namespace pollution

2010.05.22 - 0.6:
 - reverted to 0.4 and fixed the bug regarding the sign of the number 0
 Note:
 Thanks to Raphael Pigulla <raph (at] n3rd [dot) org> (http://www.n3rd.org/)
 who warned me about a bug in 0.5, I discovered that the last update was
 a regress. I appologize for that.

2010.05.09 - 0.5:
 - bug fix: 0 is now preceeded with a + sign
 - bug fix: the sign was not at the right position on padded results (Kamal Abdali)
 - switched from GPL to BSD license

2007.10.21 - 0.4:
 - unit test and patch (David Baird)

2007.09.17 - 0.3:
 - bug fix: no longer throws exception on empty paramenters (Hans Pufal)

2007.09.11 - 0.2:
 - feature: added argument swapping

2007.04.03 - 0.1:
 - initial release
**/

var sprintf = (function () {
    'use strict';
    function getType(variable) {
        return Object.prototype.toString.call(variable).slice(8, -1).toLowerCase();
    }
    function strRepeat(input, multiplier) {
        for (var output = []; multiplier > 0; output[--multiplier] = input) {/* do nothing */}
        return output.join('');
    }

    var strFormat = function () {
        if (!strFormat.cache.hasOwnProperty(arguments[0])) {
            strFormat.cache[arguments[0]] = strFormat.parse(arguments[0]);
        }
        return strFormat.format.call(null, strFormat.cache[arguments[0]], arguments);
    };

    strFormat.format = function (parseTree, argv) {
        var cursor = 1, treeLength = parseTree.length,
                                     nodeType = '',
                                     arg,
                                     output = [],
                                     i,
                                     k,
                                     match,
                                     pad,
                                     padCharacter,
                                     padLength;
        for (i = 0; i < treeLength; i++) {
            nodeType = getType(parseTree[i]);
            if (nodeType === 'string') {
                output.push(parseTree[i]);
            }
            else if (nodeType === 'array') {
                match = parseTree[i]; // convenience purposes only
                if (match[2]) { // keyword argument
                    arg = argv[cursor];
                    for (k = 0; k < match[2].length; k++) {
                        if (!arg.hasOwnProperty(match[2][k])) {
                            throw (sprintf('[sprintf] property "%s" does not exist', match[2][k]));
                        }
                        arg = arg[match[2][k]];
                    }
                }
                else if (match[1]) { // positional argument (explicit)
                    arg = argv[match[1]];
                }
                else { // positional argument (implicit)
                    arg = argv[cursor++];
                }

                if (/[^s]/.test(match[8]) && (getType(arg) !== 'number')) {
                    throw (sprintf('[sprintf] expecting number but found %s', getType(arg)));
                }
                switch (match[8]) {
                case 'b':
                    arg = arg.toString(2);
                    break;
                case 'c':
                    arg = String.fromCharCode(arg);
                    break;
                case 'd':
                    arg = parseInt(arg, 10);
                    break;
                case 'e':
                    arg = match[7] ? arg.toExponential(match[7]) : arg.toExponential();
                    break;
                case 'f':
                    arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg);
                    break;
                case 'o':
                    arg = arg.toString(8);
                    break;
                case 's':
                    arg = ((arg = String(arg)) && match[7] ? arg.substring(0, match[7]) : arg);
                    break;
                case 'u':
                    arg = Math.abs(arg);
                    break;
                case 'x':
                    arg = arg.toString(16);
                    break;
                case 'X':
                    arg = arg.toString(16).toUpperCase();
                    break;
                }
                arg = (/[def]/.test(match[8]) && match[3] && arg >= 0 ? '+' + arg : arg);
                padCharacter = match[4] ? match[4] === '0' ? '0' : match[4].charAt(1) : ' ';
                padLength = match[6] - String(arg).length;
                pad = match[6] ? strRepeat(padCharacter, padLength) : '';
                output.push(match[5] ? arg + pad : pad + arg);
            }
        }
        return output.join('');
    };

    strFormat.cache = {};

    strFormat.parse = function (fmt) {
        var _fmt = fmt, match = [], parseTree = [], argNames = 0;
        while (_fmt) {
            if ((match = /^[^\x25]+/.exec(_fmt)) !== null) {
                parseTree.push(match[0]);
            }
            else if ((match = /^\x25{2}/.exec(_fmt)) !== null) {
                parseTree.push('%');
            }
            else if ((match = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(_fmt)) !== null) {
                if (match[2]) {
                    argNames |= 1;
                    var fieldList = [], replacementField = match[2], fieldMatch = [];
                    if ((fieldMatch = /^([a-z_][a-z_\d]*)/i.exec(replacementField)) !== null) {
                        fieldList.push(fieldMatch[1]);
                        while ((replacementField = replacementField.substring(fieldMatch[0].length)) !== '') {
                            if ((fieldMatch = /^\.([a-z_][a-z_\d]*)/i.exec(replacementField)) !== null) {
                                fieldList.push(fieldMatch[1]);
                            }
                            else if ((fieldMatch = /^\[(\d+)\]/.exec(replacementField)) !== null) {
                                fieldList.push(fieldMatch[1]);
                            }
                            else {
                                throw ('[sprintf] huh?');
                            }
                        }
                    }
                    else {
                        throw ('[sprintf] huh?');
                    }
                    match[2] = fieldList;
                }
                else {
                    argNames |= 2;
                }
                if (argNames === 3) {
                    throw ('[sprintf] mixing positional and named placeholders is not (yet) supported');
                }
                parseTree.push(match);
            }
            else {
                throw ('[sprintf] huh?');
            }
            _fmt = _fmt.substring(match[0].length);
        }
        return parseTree;
    };

    return strFormat;
})();

var vsprintf = function (fmt, argv) {
    'use strict';
    argv.unshift(fmt);
    return sprintf.apply(null, argv);
};

// testmat.js
function handleFileSelect(evt) {
    'use strict';
    var files = evt.target.files, // FileList object
    i, reader;

    for (var i = 0, f; f = files[i]; i++) {
        var reader = new FileReader();
        // Closure to capture the file info
        reader.onload = (function (theFile) { // theFile is unused(?)
            return function (e) {
                document.getElementById('tle-lines').value = e.target.result;
            };
        })(f);
        reader.readAsText(f);   // Read in the file as text
    }                           // for file...
}                               // function

function getTLELines(htmlId) {
    'use strict';
    // use like: for (var i = 0; i < lines.length; i++) { alert(lines[i]); }
    var
    lines,
    TLELines = document.getElementById(htmlId).textContent;
    if (document.all) { // IE
        return TLELines.split('\r\n');
    }
    else { //Mozilla
        return TLELines.split('\n');
    }
}


// We should probably take some input and return output
// so that the QUnit test runner can validate results.

function testmat() {
    'use strict';
    var USE_GLOBAL_opsmode = 'NO opsmode',                  // from verify procedure: improved mode
        typerun = 'NO typerun',                  // from verify procedure: verify
        typeinput = 'NO typeinput',                // only if typerun is NOT 'm'
        whichconst = 'NO whichconst',              // from verify procedure: ???
        infilename = 'OMFG WE DON\'T HAVE AN infilename',
        rets, tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2,
        rad = 180.0 / Math.PI,
        infile,
        idebug = true,                       // enable debug output
        longstr1, longstr2, fgets,           // TODO matlab TLE file reader
        catno,
        satrec, startmfe, stopmfe, deltamin,
        ro, vo,
        tsince,
        jd, year, mon, day, hr, minute, sec,
        p, a, ecc, incl, node, argp, nu, m, arglat, truelon, lonper,
        i,
        TLELines,
        startTime, satTime, totalTime;

    TLELines = getTLELines('tle-lines');

    //   add operation smode for afspc (a) or improved (i)
    opsmode = input('opsmode'); //'input opsmode afspc a, improved i ', 's');

    //typerun = 'c' compare 1 year of full satcat data
    //typerun = 'v' verification run, requires modified elm file with
    //typerun = 'm' maunual operation- either mfe, epoch, or dayof yr
    //              start stop and delta times
    typerun = input('typerun'); //'input type of run c, v, m: ', 's');

    if (typerun === 'm') {
        typeinput = input('typeinput'); //'input mfe, epoch (YMDHMS), or dayofyr approach, m,e,d: ', 's');
    }
    else {
        typeinput = 'e';
    }

    whichconst = parseInt(input('whichconst'), 10); //'input constants 721, 72, 84 ');

    //alert("testmat.js opsmode=" + opsmode + " typerun=" + typerun + " typeinput=" + typeinput + " whichconst=" + whichconst + "infile=" + infile);

    // CSHENTON: I don't see how this function can operate without
    // instantiating from getgravc(whichconst) we need mu and others below
    rets = getgravc(whichconst);
    tumin               = rets.shift();
    mu                  = rets.shift();
    radiusearthkm       = rets.shift();
    xke                 = rets.shift();
    j2                  = rets.shift();
    j3                  = rets.shift();
    j4                  = rets.shift();
    j3oj2               = rets.shift();

    // ---------------- setup files for operation ------------------
    // input 2-line element set file
    // infilename = input('input elset filename: ', 's');
    // infile = fopen(infilename, 'r');
    // if (infile === -1) {
    //     fprintf(1, 'Failed to open file: //s\n', infilename);
    //     return;
    // }

    // if (typerun === 'c') {
    //         outfile = fopen('tmatall.out', 'wt');
    // }
    // else {
    //     if (typerun === 'v') {
    //         outfile = fopen('tmatver.out', 'wt');
    //     }
    //     else {
    //         outfile = fopen('tmat.out', 'wt');
    //     }
    // }

    // TLE file format repeats 3-line sets like:
    //#                       # TEME example
    //1 00005U 58002B   00179.78495062  .00000023  00000-0  28098-4 0  4753
    //2 00005  34.2682 348.7242 1859667 331.7664  19.3264 10.82419157413667     0.00      4320.0        360.00

    // ----------------- test simple propagation -------------------

    startTime = new Date();    // overall run time

    for (i = 0; i < TLELines.length; i += 1) {
        satTime = new Date();  // time for each satelite (depends of course on period requested)

        TLELines[i] = TLELines[i].trim();
        if (TLELines[i] === '' || TLELines[i][0] === '#') {
            continue;
        }
        else {                      // DANGER doesn't tolerate comments between TLE line 1 and 2
            longstr1 = TLELines[i];
            i += 1;
            longstr2 = TLELines[i];
            i += 1;             // BUG I think this should not be here
        }

        // convert the char string to sgp4 elements
        // includes initialization of sgp4
        //[satrec, startmfe, stopmfe, deltamin] = twoline2rv(whichconst,
        //                                                   longstr1, longstr2, typerun, typeinput);
        rets = twoline2rv(whichconst, longstr1, longstr2, typerun, typeinput);
        satrec      = rets.shift();
        startmfe    = rets.shift();
        stopmfe     = rets.shift();
        deltamin    = rets.shift();

        outfile(sprintf('\n %d xx\n', satrec.satnum));
        fprintf1(sprintf(' %d\n', satrec.satnum));

        // call the propagator to get the initial state vector value
        //[satrec, ro ,vo] = sgp4 (satrec,  0.0);
        rets = sgp4(satrec, 0.0);
        satrec      = rets.shift();
        ro          = rets.shift();
        vo          = rets.shift();

        outfile(sprintf(' %16.8f %16.8f %16.8f %16.8f %12.9f %12.9f %12.9f\n',
                        satrec.t, ro[0], ro[1], ro[2], vo[0], vo[1], vo[2])); // MIG offsets shifted
        // Why don't we print ymdhms or a,ecc,*rad as we do during the time intervals below?

        //fprintf1(' %16.8f %16.8f %16.8f %16.8f %12.9f %12.9f %12.9f\n',...
        //         satrec.t,ro(1),ro(2),ro(3),vo(1),vo(2),vo(3));

        tsince = startmfe;

        // check so the first value isn't written twice
        if (Math.abs(tsince) > 1.0e-8) {
            tsince = tsince - deltamin;
        }

        // loop to perform the propagation
        while ((tsince < stopmfe) && (satrec.error === 0)) {

            tsince = tsince + deltamin;

            if (tsince > stopmfe) {
                tsince = stopmfe;
            }

            //[satrec, ro, vo] = sgp4(satrec,  tsince);
            rets = sgp4(satrec, tsince);
            satrec      = rets.shift();
            ro          = rets.shift();
            vo          = rets.shift();

            if (satrec.error > 0) {
                fprintf1(sprintf('# *** error: tsince=%f *** code=%d   (satnum=%d)\n',
                                 tsince, satrec.error, satrec.satnum));
            }

            if (satrec.error === 0) {
                if ((typerun !== 'v') && (typerun !== 'c')) {
                    jd = satrec.jdsatepoch + tsince / 1440; // 24 hours/day * 60 minutes/hour = 1440 minutes/day
                    //[year,mon,day,hr,minute,sec] = invjday(jd);
                    rets = invjday(jd);
                    year    = rets.shift();
                    mon     = rets.shift();
                    day     = rets.shift();
                    hr      = rets.shift();
                    minute  = rets.shift();
                    sec     = rets.shift();

                    outfile(sprintf(' %16.8f %16.8f %16.8f %16.8f %12.9f %12.9f %12.9f %5i%3i%3i %2i:%2i:%9.6f %16.8f%16.8f%16.8%12.9f%12.9f%12.9f\n',
                                    tsince, ro[0], ro[1], ro[2], vo[0], vo[1], vo[2],
                                    year, mon, day, hr, minute, sec));
                }
                else {
                    outfile(sprintf(' %16.8f %16.8f %16.8f %16.8f %12.9f %12.9f %12.9f',
                                    tsince, ro[0], ro[1], ro[2], vo[0], vo[1], vo[2]));
                    // fprintf1(' %16.8f %16.8f %16.8f %16.8f %12.9f %12.9f %12.9f',
                    //         tsince, ro[0], ro[1], ro[2], vo[0], vo[1], vo[2]);

                    //[p,a,ecc,incl,node,argp,nu,m,arglat,truelon,lonper ] = rv2coe(ro, vo, mu);
                    rets = rv2coe(ro, vo, mu);
                    p       = rets.shift();
                    a       = rets.shift();
                    ecc     = rets.shift();
                    incl    = rets.shift();
                    node    = rets.shift();
                    argp    = rets.shift();
                    nu      = rets.shift();
                    m       = rets.shift();
                    arglat  = rets.shift();
                    truelon = rets.shift();
                    lonper  = rets.shift();

                    outfile(sprintf(' %14.6f %8.6f %10.5f %10.5f %10.5f %10.5f %10.5f\n',
                                    a, ecc, incl * rad, node * rad, argp * rad, nu * rad, m * rad));
                }
            } // if satrec.error == 0
        } // while propagating the orbit
        debug('satnum=' + satrec.satnum +
              ' time=' + (new Date() - satTime) + 'ms' +
              '  ellapsed time=' + (new Date() - startTime) + 'ms');
    } // if not eof
    // window.onload = testmat();
    // TODO: return results of test?
}

// twoline2rv.js
var xke, j2;                 // HACK: GLOBALS to pass to initl()

function twoline2rv(whichconst, longstr1, longstr2, typerun, typeinput) {
    'use strict';
    var rets = getgravc(whichconst),
        tumin           = rets.shift(),
        mu              = rets.shift(),
        radiusearthkm   = rets.shift(),
        LOCAL_xke       = rets.shift(),
        LOCAL_j2        = rets.shift(),
        j3              = rets.shift(),
        j4              = rets.shift(),
        j3oj2           = rets.shift(),
        deg2rad         = Math.PI / 180.0, // 0.01745329251994330  [deg/rad]
        xpdotp          = 1440.0 / (2.0 * Math.PI), // 229.1831180523293  [rev/day]/[rad/min]
        satrec          = {},
        revnum          = 0,
        elnum           = 0,
        year            = 0,
        j,
        carnumb, classification, intldesg, nexp, ibexp, numb,
        cardnumb, startmfe, stopmfe, deltamin,
        mon, day, hr, minute, sec,
        startyear, startmon, startday, starthr, startmin, startsec, jdstart,
        stopyear, stopmon, stopday, stophr, stopmin, stopsec, jdstop,
        startdayofyr, stopdayofyr,
        sgp4epoch;

    // Set globals to pass to initl() [vomit]
    xke = LOCAL_xke;
    j2 = LOCAL_j2;

    // global tumin radiusearthkm xke j2 j3 j4 j3oj2
    // Get these via getgravc() OR from caller's globals.
    // [tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2] = getgravc(whichconst);

    if (typeof tumin === 'undefined') {
        throw new Error('Global "tumin" is undefined');
    }
    if (typeof radiusearthkm === 'undefined') {
        throw new Error('Global "radiusearthkm" is undefined');
    }
    if (typeof xke === 'undefined') {
        throw new Error('Global "xke" is undefined');
    }
    if (typeof j2 === 'undefined') {
        throw new Error('Global "j2" is undefined');
    }
    if (typeof j3 === 'undefined') {
        throw new Error('Global "j3" is undefined');
    }
    if (typeof j4 === 'undefined') {
        throw new Error('Global "j4" is undefined');
    }
    if (typeof j3oj2 === 'undefined') {
        throw new Error('Global "j3oj2" is undefined');
    }

    satrec.error = 0;

    // JavaScript's strings are immutable strings, so convert to
    // mutable array, munge, then convert back to strings.

    longstr1 = longstr1.split('');
    longstr2 = longstr2.split('');

    // set the implied decimal points since doing a formated read
    // fixes for bad input data values (missing, ...)
    for (j = 10; j <= 15; j += 1) { //"8002B " -> "8002B_"
        if (longstr1[j] === ' ') {
            longstr1[j] = '_';
        }
    }
    if (longstr1[44] !== ' ') {
        longstr1[43] = longstr1[44];
    }
    longstr1[44] = '.';
    if (longstr1[7] === ' ') {
        longstr1[7] = 'U';
    }
    if (longstr1[9] === ' ') {
        longstr1[9] = '.';
    }
    for (j = 45; j <= 49; j += 1) {
        if (longstr1[j] === ' ') {
            longstr1[j] = '0';
        }
    }
    if (longstr1[51] === ' ') {
        longstr1[51] = '0';
    }
    if (longstr1[53] !== ' ') {
        longstr1[52] = longstr1[53];
    }
    longstr1[53] = '.';
    if (longstr1[62] === ' ') {
        longstr1[62] = '0';

    }
    if ((longstr1.length < 68) || (longstr1[67] === ' ')) {
        longstr1[67] = '0';
    }

    longstr2[25] = '.';
    for (j = 26; j <= 32; j += 1) {
        if (longstr2[j] === ' ') {
            longstr2[j] = '0';
        }
    }

    longstr1 = longstr1.join('');
    longstr2 = longstr2.join('');

    //00000000001111111111222222222233333333334444444444555555555566666666667777777777888888888899999999990000000000
    //01234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789
    //1 00005U 58002B   00179.78495062  .00000023  00000-0  28098-4 0  4753
    //2 00005  34.2682 348.7242 1859667 331.7664  19.3264 10.82419157413667     0.00      4320.0        360.00


    // parse first line
    carnumb             = parseFloat(longstr1[0]); // caution: 'cardnum' in second line
    satrec.satnum       = parseFloat(longstr1.slice(2, 7));
    classification      =            longstr1[7]; // "U"
    intldesg            =            longstr1.slice(9, 17);
    satrec.epochyr      = parseFloat(longstr1.slice(18, 20)); // ??
    satrec.epochdays    = parseFloat(longstr1.slice(20, 32));
    satrec.ndot         = parseFloat(longstr1.slice(33, 43));
    satrec.nddot        = parseFloat(longstr1.slice(43, 50));
    nexp                = parseFloat(longstr1.slice(50, 52));
    satrec.bstar        = parseFloat(longstr1.slice(52, 59));
    ibexp               = parseFloat(longstr1.slice(59, 61));
    numb                = parseFloat(longstr1.slice(62, 63));
    elnum               = parseFloat(longstr1.slice(64, 68));

    // parse second line
    if (typerun === 'v') {
        cardnumb        = parseFloat(longstr2.slice(0, 1));
        satrec.satnum   = parseFloat(longstr2.slice(2, 7));
        satrec.inclo    = parseFloat(longstr2.slice(7, 16));
        satrec.nodeo    = parseFloat(longstr2.slice(16, 25));
        satrec.ecco     = parseFloat(longstr2.slice(25, 33));
        satrec.argpo    = parseFloat(longstr2.slice(33, 42));
        satrec.mo       = parseFloat(longstr2.slice(42, 51));
        satrec.no       = parseFloat(longstr2.slice(51, 63));
        revnum          = parseFloat(longstr2.slice(63, 68));
        startmfe        = parseFloat(longstr2.slice(69, 81)); // only for 'v'
        stopmfe         = parseFloat(longstr2.slice(82, 96)); // only for 'v'
        deltamin        = parseFloat(longstr2.slice(96, 105)); // only for 'v'
    } else {
        cardnumb        = parseFloat(longstr2.slice(0, 1));
        satrec.satnum   = parseFloat(longstr2.slice(2, 7));
        satrec.inclo    = parseFloat(longstr2.slice(7, 16));
        satrec.nodeo    = parseFloat(longstr2.slice(16, 25));
        satrec.ecco     = parseFloat(longstr2.slice(25, 33));
        satrec.argpo    = parseFloat(longstr2.slice(33, 42));
        satrec.mo       = parseFloat(longstr2.slice(42, 51));
        satrec.no       = parseFloat(longstr2.slice(51, 63));
        revnum          = parseFloat(longstr2.slice(63, 68));
    }

    // ---- find no, ndot, nddot ----
    satrec.no    = satrec.no / xpdotp; ////* rad/min
    satrec.nddot = satrec.nddot * Math.pow(10.0, nexp);
    satrec.bstar = satrec.bstar * Math.pow(10.0, ibexp);

    // ---- convert to sgp4 units ----
    satrec.a     = Math.pow(satrec.no * tumin, -2 / 3);     // [er]
    satrec.ndot  = satrec.ndot  / (xpdotp * 1440.0);        // [rad/min^2]
    satrec.nddot = satrec.nddot / (xpdotp * 1440.0 * 1440); // [rad/min^3]

    // ---- find standard orbital elements ----
    satrec.inclo = satrec.inclo * deg2rad;
    satrec.nodeo = satrec.nodeo * deg2rad;
    satrec.argpo = satrec.argpo * deg2rad;
    satrec.mo    = satrec.mo    * deg2rad;

    satrec.alta = satrec.a * (1.0 + satrec.ecco) - 1.0;
    satrec.altp = satrec.a * (1.0 - satrec.ecco) - 1.0;


    // ----------------------------------------------------------------
    // find sgp4epoch time of element set
    // remember that sgp4 uses units of days from 0 jan 1950 (sgp4epoch)
    // and minutes from the epoch (time)
    // --------------------------------------------------------------

    // ------------- temp fix for years from 1957-2056 ----------------
    // ------ correct fix will occur when year is 4-digit in 2le ------
    if (satrec.epochyr < 57) {
        year = satrec.epochyr + 2000;
    } else {
        year = satrec.epochyr + 1900;
    }

    //[mon,day,hr,minute,sec] = days2mdh(year, satrec.epochdays);
    rets = days2mdh(year, satrec.epochdays);
    mon         = rets.shift();
    day         = rets.shift();
    hr          = rets.shift();
    minute      = rets.shift();
    sec         = rets.shift();
    satrec.jdsatepoch = jday(year, mon, day, hr, minute, sec);

    // input start stop times manually
    if ((typerun !== 'v') && (typerun !== 'c')) {
        // ------------- enter start/stop ymd hms values --------------------
        if (typeinput === 'e') {
            startyear = input('input start year');
            startmon  = input('input start mon');
            startday  = input('input start day');
            starthr   = input('input start hr');
            startmin  = input('input start min');
            startsec  = input('input start sec');
            jdstart = jday(startyear, startmon, startday, starthr, startmin, startsec);

            stopyear = input('input stop year');
            stopmon  = input('input stop mon');
            stopday  = input('input stop day');
            stophr   = input('input stop hr');
            stopmin  = input('input stop min');
            stopsec  = input('input stop sec');
            jdstop = jday(stopyear, stopmon, stopday, stophr, stopmin, stopsec);

            startmfe = (jdstart - satrec.jdsatepoch) * 1440.0;
            stopmfe  = (jdstop - satrec.jdsatepoch) * 1440.0;
            deltamin = input('input time step in minutes ');
        }
        // -------- enter start/stop year and days of year values -----------
        if (typeinput === 'd') {
            startyear    = input('input start year');
            startdayofyr = input('input start dayofyr');
            stopyear     = input('input stop year');
            stopdayofyr  = input('input stop dayofyr');

            //[mon, day, hr, minute, sec] = days2mdh ( startyear, startdayofyr);
            rets = days2mdh(startyear, startdayofyr);
            mon         = rets.shift();
            day         = rets.shift();
            hr          = rets.shift();
            minute      = rets.shift();
            sec         = rets.shift();
            jdstart = jday(startyear, mon, day, hr, minute, sec);
            //[mon, day, hr, minute, sec] = days2mdh ( stopyear, stopdayofyr);
            rets = days2mdh(stopyear, stopdayofyr);
            mon         = rets.shift();
            day         = rets.shift();
            hr          = rets.shift();
            minute      = rets.shift();
            sec         = rets.shift();
            jdstop = jday(stopyear, mon, day, hr, minute, sec);

            startmfe = (jdstart - satrec.jdsatepoch) * 1440.0;
            stopmfe  = (jdstop - satrec.jdsatepoch) * 1440.0;
            deltamin = input('input time step in minutes ');
        }
        // ------------------ enter start/stop mfe values -------------------
        if (typeinput === 'm') {
            startmfe = input('input start mfe: ');
            stopmfe  = input('input stop mfe: ');
            deltamin = input('input time step in minutes: ');
        }
        if (typeinput === 'n') { // HACK: 'now', from cesiumtry
            var now = new Date();
            jdstart = jday(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDay(),
                           now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
            jdstop =  jday(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDay(),
                           now.getUTCHours(), now.getUTCMinutes(), (now.getUTCSeconds() + 1) % 60); // more than jdstart
            startmfe = (jdstart - satrec.jdsatepoch) * 1440.0;
            stopmfe  = (jdstop  - satrec.jdsatepoch) * 1440.0;
            deltamin = 60; // minutes, we shouldn't need this
            // Why is startmfe negative??
            // satrec.jdsatepoch=2456195.79713419
            // jdstart          =2456156.1898611113
            // Perhaps based on typerun==c use delta of ... 1?
            startmfe = 0.0;
            stopmfe  = 1.0;
        }
    }
    //     // perform complete catalog evaluation
    if (typerun === 'c') {
        startmfe = -1440.0;
        stopmfe  = 1440.0;
        deltamin = 20.0;
    }

    // ------------- initialize the orbit at sgp4epoch --------------
    sgp4epoch = satrec.jdsatepoch - 2433281.5; // days since 0 Jan 1950

    satrec = sgp4init(whichconst, satrec, satrec.bstar, satrec.ecco, sgp4epoch,
                      satrec.argpo, satrec.inclo, satrec.mo, satrec.no, satrec.nodeo);

    return [satrec, startmfe, stopmfe, deltamin];
}

// tle.js
// Get, parse, and return TLE structures

var tle = {
    // I need to get a grip on proper OO patterns :-(
    content : null,
    lines : null,
    tles : null,
    readFile : function (fileName) {
        // https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest
        var request = new XMLHttpRequest();
        var ASYNC = false;      // TODO do async callback properly
        request.open('GET', fileName, ASYNC);
        request.send();                 // blocks until returned due to ASYNC=false
        if (request.status !== 200) {
            return null;            // TODO throw an error
        }
        this.content = request.responseText;
        return this.content;
    },
    readFileLines : function (fileName) {
        this.readFile(fileName);
        this.lines = this.content.split('\n');
        return this.lines;
    },
    parseFile : function (fileName) {
        // Read file: if line starts with '1' or '2' assume TLE line 1, 2, otherwise store as comment/name
        var lines = this.readFileLines(fileName);
        var line;
        var tle = [];
        var tles = [];
        for (linenum = 0; linenum < lines.length; linenum++) {
            if (lines[linenum].substring(0, 2) === '1 ') {
                tle[1] = lines[linenum];
            }
            else if (lines[linenum].substring(0, 2) === '2 ') {
                tle[2] = lines[linenum];
                tles.push(tle);
                tle = [];
            }
            else {
                tle[0] = lines[linenum]; // TODO: trim whitespace
            }
        }
        this.tles = tles;
        return tles;
    }
};


