/*global getgravc: true, initl: true, dscom: true, dpper: true, dsinit: true,
 sgp4: true
 */
// -----------------------------------------------------------------------------
//
//                              procedure sgp4init
//
//   this procedure initializes variables for sgp4.
//
// Author:
//   Jeff Beck
//   beckja@alumni.lehigh.edu
//   1.0 (aug 7, 2006) - update for paper dav
// original comments from Vallado C++ version:
//   author        : david vallado                  719-573-2600   28 jun 2005
//
//   inputs        :
//     satn        - satellite number
//     bstar       - sgp4 type drag coefficient              kg/m2er
//     ecco        - eccentricity
//     epoch       - epoch time in days from jan 0, 1950. 0 hr
//     argpo       - argument of perigee (output if ds)
//     inclo       - inclination
//     mo          - mean anomaly (output if ds)
//     no          - mean motion
//     nodeo      - right ascension of ascending node
//
//   outputs       :
//     satrec      - common values for subsequent calls
//     return code - non-zero on error.
//                    1 - mean elements, ecc >= 1.0 or ecc < -0.001 or a < 0.95 er
//                    2 - mean motion less than 0.0
//                    3 - pert elements, ecc < 0.0  or  ecc > 1.0
//                    4 - semi-latus rectum < 0.0
//                    5 - epoch elements are sub-orbital
//                    6 - satellite has decayed
//
//   locals        :
//     CNODM  , SNODM  , COSIM  , SINIM  , COSOMM , SINOMM
//     Cc1sq  , Cc2    , Cc3
//     Coef   , Coef1
//     cosio4      -
//     day         -
//     dndt        -
//     em          - eccentricity
//     emsq        - eccentricity squared
//     eeta        -
//     etasq       -
//     gam         -
//     argpm       - argument of perigee
//     ndem        -
//     inclm       - inclination
//     mm          - mean anomaly
//     nm          - mean motion
//     perige      - perigee
//     pinvsq      -
//     psisq       -
//     qzms24      -
//     rtemsq      -
//     s1, s2, s3, s4, s5, s6, s7          -
//     sfour       -
//     ss1, ss2, ss3, ss4, ss5, ss6, ss7         -
//     sz1, sz2, sz3
//     sz11, sz12, sz13, sz21, sz22, sz23, sz31, sz32, sz33        -
//     tc          -
//     temp        -
//     temp1, temp2, temp3       -
//     tsi         -
//     xpidot      -
//     xhdot1      -
//     z1, z2, z3          -
//     z11, z12, z13, z21, z22, z23, z31, z32, z33         -
//
//   coupling      :
//     getgravconst
//     initl       -
//     dscom       -
//     dpper       -
//     dsinit      -
//     sgp4        -
//
//   references    :
//     hoots, roehrich, norad spacetrack report #3 1980
//     hoots, norad spacetrack report #6 1986
//     hoots, schumacher and glover 2004
//     vallado, crawford, hujsak, kelso  2006
//  ----------------------------------------------------------------------------*/


function sgp4init(whichconst, satrec, xbstar, xecco, epoch,
                  xargpo, xinclo, xmo, xno, xnodeo) {
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
            argpm		= rets.shift();
            inclm		= rets.shift();
            mm                  = rets.shift();
            nm                  = rets.shift();
            nodem		= rets.shift();
            satrec.irez         = rets.shift();
            satrec.atime	= rets.shift();
            satrec.d2201	= rets.shift();
            satrec.d2211	= rets.shift();
            satrec.d3210	= rets.shift();
            satrec.d3222	= rets.shift();
            satrec.d4410	= rets.shift();
            satrec.d4422	= rets.shift();
            satrec.d5220	= rets.shift();
            satrec.d5232	= rets.shift();
            satrec.d5421	= rets.shift();
            satrec.d5433	= rets.shift();
            satrec.dedt         = rets.shift();
            satrec.didt         = rets.shift();
            satrec.dmdt         = rets.shift();
            dndt		= rets.shift();
            satrec.dnodt	= rets.shift();
            satrec.domdt	= rets.shift();
            satrec.del1         = rets.shift();
            satrec.del2         = rets.shift();
            satrec.del3         = rets.shift();
            //ses,sghl,sghs,sgs,shl,shs,sis,sls,theta,
            satrec.xfact	= rets.shift();
            satrec.xlamo	= rets.shift();
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
