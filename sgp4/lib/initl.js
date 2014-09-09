"use strict";


define (["gstime", "getgravc"], function(gstime, getgravc){
    // initl
    // =====
    //
    // `initl` initializes the spg4 propagator. all the initialization is
    //  consolidated here instead of having multiple loops inside other routines.
    return function(ecco, epoch, inclo, no, satn, constDef) {
        // inputs
        // ======
        //     ecco        - eccentricity                    0.0 - 1.0
        //     epoch       - epoch time in days from jan 0, 1950. 0 hr
        //     inclo       - inclination of satellite
        //     no          - mean motion of satellite
        //     satn        - satellite number
        //     constDef    - getgravc constant definition

        // wgs-72 earth constants
        // -----------------------
        // sgp4fix identify constants and allow alternate values

        // *MATLAB*:
        //
        //global tumin mu radiusearthkm xke j2 j3 j4 j3oj2
        // *not used*: tumin, mu, radiusearth, j3, j4, j3oj2
        //global opsmode

        if (typeof opsmode === "undefined") {
            // TODO: Is it OK to do this instead of throwing an error?
            // This change also set an undefined var `opsmode` below.
            opsmode = "i"; // Just assume improved mode if not set.
            // throw Error("opsmode undefined");
        }


        var x2o3   = 2.0 / 3.0,
            // locals
            // ------
            //     ak          -
            //     d1          -
            //     del         -
            //     adel        -
            //     po          -
            //     c
            //     opsmode
            //
            // calculate auxillary epoch quantities
            // ------------------------------------
            c = getgravc(constDef),
            opsmode,
            eccsq  = ecco * ecco,
            omeosq = 1.0 - eccsq,
            rteosq = Math.sqrt(omeosq),
            cosio  = Math.cos(inclo),
            cosio2 = cosio * cosio,
            // un-kozai the mean motion
            // ------------------------
            ak    = Math.pow(c.xke / no, x2o3),
            d1    = 0.75 * c.j2 * (3.0 * cosio2 - 1.0) / (rteosq * omeosq),
            del   = d1 / (ak * ak),
            adel  = ak * (1.0 - del * del - del *
             (1.0 / 3.0 + 134.0 * del * del / 81.0)),
            // **defined elsewhere** *TODO: but where?*
            ao, sinio, po, con42, con41, ainv, einv, posq, rp, method,
            gsto, ts70, ids70, tfrac, c1, thgr70, fk5r, twopi, c1p2p;

            del   = d1 / (adel * adel);
            no    = no / (1.0 + del);

            ao    = Math.pow(c.xke / no, x2o3);
            sinio = Math.sin(inclo);
            po    = ao * omeosq;
            con42 = 1.0 - 5.0 * cosio2;
            con41 = -con42 - cosio2 - cosio2;
            ainv  = 1.0 / ao;
            einv  = 1.0 / ecco;
            posq  = po * po;
            rp    = ao * (1.0 - ecco);
            method = "n";

        // sgp4fix modern approach to finding sidereal time
        if  (opsmode !== "a") {
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

        return {
            // outputs
            // -------
            // `initl` returns an object with the following attributes.
            //
            //     ainv        - 1.0 / a
            //     ao          - semi major axis
            //     con41       -
            //     con42       - 1.0 - 5.0 cos(i)
            //     cosio       - cosine of inclination
            //     cosio2      - cosio squared
            //     einv        - 1.0 / e
            //     eccsq       - eccentricity squared
            //     method      - flag for deep space                    'd', 'n'
            //     omeosq      - 1.0 - ecco * ecco
            //     posq        - semi-parameter squared
            //     rp          - radius of perigee
            //     rteosq      - square root of (1.0 - ecco*ecco)
            //     sinio       - sine of inclination
            //     gsto        - gst at time of observation               rad
            //     no          - mean motion of satellite
            //
            ainv: ainv,
            ao: ao,
            con41: con41,
            con42: con42,
            cosio: cosio,
            cosio2: cosio2,
            einv: einv,
            eccsq: eccsq,
            method: method,
            omeosq: omeosq,
            posq: posq,
            rp: rp,
            rteosq: rteosq,
            sinio: sinio,
            gsto: gsto,
            no: no
        };
    };
});
