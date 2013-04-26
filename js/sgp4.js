/*jslint vars: true */
/*globals getgravc: true, dpper: true, dspace: true */
// -----------------------------------------------------------------------------
//
//                              procedure sgp4
//
//  this procedure is the sgp4 prediction model from space command. this is an
//    updated and combined version of sgp4 and sdp4, which were originally
//    published separately in spacetrack report #3. this version follows the
//    methodology from the aiaa paper (2006) describing the history and
//    development of the code.
//
// Author:
//   Jeff Beck
//   beckja@alumni.lehigh.edu
//    current :
//               7 may 08  david vallado
//                           update small eccentricity check
//    changes :
//              16 nov 07  david vallado
//                           misc fixes for better compliance
//   1.0 (aug 7, 2006) - update for paper dav
// original comments from Vallado C++ version:
//   author        : david vallado                  719-573-2600   28 jun 2005
//
//   inputs        :
//     satrec    - initialised structure from sgp4init() call.
//     tsince    - time eince epoch (minutes)
//
//   outputs       :
//     r           - position vector                     km
//     v           - velocity                            km/sec
//     return code - non-zero on error.
//                    1 - mean elements, ecc >= 1.0 or ecc < -0.001 or a < 0.95 er
//                    2 - mean motion less than 0.0
//                    3 - pert elements, ecc < 0.0  or  ecc > 1.0
//                    4 - semi-latus rectum < 0.0
//                    5 - epoch elements are sub-orbital
//                    6 - satellite has decayed
//
//   locals        :
//     am          -
//     axnl, aynl        -
//     betal       -
//     COSIM   , SINIM   , COSOMM  , SINOMM  , Cnod    , Snod    , Cos2u   ,
//     Sin2u   , Coseo1  , Sineo1  , Cosi    , Sini    , Cosip   , Sinip   ,
//     Cosisq  , Cossu   , Sinsu   , Cosu    , Sinu
//     Delm        -
//     Delomg      -
//     Dndt        -
//     Eccm        -
//     EMSQ        -
//     Ecose       -
//     El2         -
//     Eo1         -
//     Eccp        -
//     Esine       -
//     Argpm       -
//     Argpp       -
//     Omgadf      -
//     Pl          -
//     R           -
//     RTEMSQ      -
//     Rdotl       -
//     Rl          -
//     Rvdot       -
//     Rvdotl      -
//     Su          -
//     T2  , T3   , T4    , Tc
//     Tem5, Temp , Temp1 , Temp2  , Tempa  , Tempe  , Templ
//     U   , Ux   , Uy    , Uz     , Vx     , Vy     , Vz
//     inclm       - inclination
//     mm          - mean anomaly
//     nm          - mean motion
//     nodem      - longi of ascending node
//     xinc        -
//     xincp       -
//     xl          -
//     xlm         -
//     mp          -
//     xmdf        -
//     xmx         -
//     xmy         -
//     nodedf     -
//     xnode       -
//     nodep      -
//     np          -
//
//   coupling      :
//     getgravconst
//     dpper
//     dspace
//
//   references    :
//     hoots, roehrich, norad spacetrack report #3 1980
//     hoots, norad spacetrack report #6 1986
//     hoots, schumacher and glover 2004
//     vallado, crawford, hujsak, kelso  2006
//  ----------------------------------------------------------------------------*/

//function sgp4(satrec, tsince) {
function sgp4(satrec, time) {

    /**
    * Calculate time in minutes sice epoch
    * 
    * TODO: Is this accurate enough???????
    */
    tsince = (time - satrec.jdsatepoch) * 1440;

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
    
    var sat_geodetic = new geodetic_t();
    
    Calculate_LatLonAlt(time, r, sat_geodetic);
    
    satrec.lat = Degrees(sat_geodetic.lat);
    satrec.lon = Degrees(sat_geodetic.lon);
    satrec.alt = sat_geodetic.alt;
    
    return [satrec, r, v];
}
