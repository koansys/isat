"use strict";

// twoline2rv
// ==========
//     {satrec, startmfe, stopmfe, deltamin} = twoline2rv(
//             whichconst, longstr1, longstr2, typerun,typeinput)

// `twoline2rv` converts the two line element set character string data to
// variables and initializes the sgp4 variables. Several intermediate variables
// and quantities are determined. note that the result is a structure so multiple
// satellites can be processed simultaneously without having to reinitialize.

// TODO: delete? ~~The
// verification mode is an important option that permits quick checks of any
// changes to the underlying technical theory. this option works using a
// modified tle file in which the start, stop, and delta time values are
// included at the end of the second line of data. this only works with verification
// the mode. the catalog mode simply propagates from -1440 to 1440 min
// from epoch and is useful when performing entire catalog runs.~~

define(["getgravc", "days2mdh", "jday", "sgp4init"], function (getgravc, days2mdh, jday, sgp4init){

    // inputs
    // ------
    //     longstr1      - TLE character string
    //     longstr2      - TLE character string
    //     TODO: we ignore typerun now right?
    //     typerun       - character for mode of SGP4 execution
    //                     "c" = catalog mode (propagates at 20 min timesteps from
    //                            one day before epoch to one day after)
    //                     "v" = verification mode (propagates according to start,
    //                             stop, and timestep specified in longstr2)
    //                     "m" = manual mode (prompts user for start, stop, and
    //                             timestep for propagation)
    return function (constDef, longstr1, longstr2, typerun){ //, typeinput) {
        var gc = getgravc(constDef),
        deg2rad         = Math.PI / 180.0, // 0.01745329251994330  [deg/rad]
        xpdotp          = 1440.0 / (2.0 * Math.PI), // 229.1831180523293  [rev/day]/[rad/min]
        satrec          = {},
        revnum          = 0,
        elnum           = 0,
        year            = 0,
        j,
        mdh, // days2mdh return
        carnumb,
        classification,
        deltamin,
        intldesg,
        nexp,
        ibexp,
        numb,
        cardnumb,
        sgp4epoch,
        startmfe,
        stopmfe;

        satrec.error = 0;

        // JavaScript's strings are immutable strings, so convert to
        // mutable array, munge, then convert back to strings.
        //
        // TODO: This should be a setter I think. It is hard to tell because the
        // TODO: logic makes no sense at a glance. Let"s just port to AMD and
        // TODO: jasmine first.
        longstr1 = longstr1.split("");
        longstr2 = longstr2.split("");

        // Set the implied decimal points since doing a formated read
        // fixes for bad input data values (missing, ...).
        for (j = 10; j <= 15; j += 1) { //"8002B " -> "8002B_"
            if (longstr1[j] === " ") {
                longstr1[j] = "_";
            }
        }
        if (longstr1[44] !== " ") {
            longstr1[43] = longstr1[44];
        }
        longstr1[44] = ".";
        if (longstr1[7] === " ") {
            longstr1[7] = "U";
        }
        if (longstr1[9] === " ") {
            longstr1[9] = ".";
        }
        for (j = 45; j <= 49; j += 1) {
            if (longstr1[j] === " ") {
                longstr1[j] = "0";
            }
        }
        if (longstr1[51] === " ") {
            longstr1[51] = "0";
        }
        if (longstr1[53] !== " ") {
            longstr1[52] = longstr1[53];
        }
        longstr1[53] = ".";
        if (longstr1[62] === " ") {
            longstr1[62] = "0";

        }
        if ((longstr1.length < 68) || (longstr1[67] === " ")) {
            longstr1[67] = "0";
        }

        longstr2[25] = ".";
        for (j = 26; j <= 32; j += 1) {
            if (longstr2[j] === " ") {
                longstr2[j] = "0";
            }
        }

        longstr1 = longstr1.join("");
        longstr2 = longstr2.join("");

        // TLE?
        // ----
        //     00000000001111111111222222222233333333334444444444555555555566666666667777777777888888888899999999990000000000
        //     01234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789
        //     1 00005U 58002B   00179.78495062  .00000023  00000-0  28098-4 0  4753
        //     2 00005  34.2682 348.7242 1859667 331.7664  19.3264 10.82419157413667     0.00      4320.0        360.00

        // Parse the first line.
        carnumb             = parseFloat(longstr1[0]); // caution: "cardnum" in second line
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

        // Parse the second line.
        if (typerun === "v") {
            cardnumb        = parseFloat(longstr2.slice(0, 1));
            satrec.satnum   = parseFloat(longstr2.slice(2, 7));
            satrec.inclo    = parseFloat(longstr2.slice(7, 16));
            satrec.nodeo    = parseFloat(longstr2.slice(16, 25));
            satrec.ecco     = parseFloat(longstr2.slice(25, 33));
            satrec.argpo    = parseFloat(longstr2.slice(33, 42));
            satrec.mo       = parseFloat(longstr2.slice(42, 51));
            satrec.no       = parseFloat(longstr2.slice(51, 63));
            revnum          = parseFloat(longstr2.slice(63, 68));
            startmfe        = parseFloat(longstr2.slice(69, 81)); // only for "v"
            stopmfe         = parseFloat(longstr2.slice(82, 96)); // only for "v"
            deltamin        = parseFloat(longstr2.slice(96, 105)); // only for "v"
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

        // Find `no`, `ndot`, and `nddot`.
        satrec.no    = satrec.no / xpdotp;                      // rad/min
        satrec.nddot = satrec.nddot * Math.pow(10.0, nexp);
        satrec.bstar = satrec.bstar * Math.pow(10.0, ibexp);

        // Convert to `sgp4` units.
        satrec.a     = Math.pow(satrec.no * gc.tumin, -2 / 3);  // [er]
        satrec.ndot  = satrec.ndot  / (xpdotp * 1440.0);        // [rad/min^2]
        satrec.nddot = satrec.nddot / (xpdotp * 1440.0 * 1440); // [rad/min^3]

        // Find standard orbital elements.
        satrec.inclo = satrec.inclo * deg2rad;
        satrec.nodeo = satrec.nodeo * deg2rad;
        satrec.argpo = satrec.argpo * deg2rad;
        satrec.mo    = satrec.mo    * deg2rad;

        satrec.alta = satrec.a * (1.0 + satrec.ecco) - 1.0;
        satrec.altp = satrec.a * (1.0 - satrec.ecco) - 1.0;


        // Find `sgp4epoch` time of element set.
        //
        // *Remember that `sgp4` uses units of days from 0 jan 1950 (`sgp4epoch`)
        // and minutes from the epoch (time)*.

        // `temp` fix for years from 1957-2056
        //  **Correct fix will occur when year is 4-digit in 2le**
        // TODO: Fix year when it is 4 digit in TLE.
        if (satrec.epochyr < 57) {
            year = satrec.epochyr + 2000;
        } else {
            year = satrec.epochyr + 1900;
        }

        // ``days2mdh`` call.
        mdh = days2mdh(year, satrec.epochdays);
        satrec.jdsatepoch = jday(mdh.year, mdh.mon, mdh.day, mdh.hr, mdh.minute, mdh.sec);

        // Initialize the orbit at `sgp4epoch`.
        sgp4epoch = satrec.jdsatepoch - 2433281.5; // days since 0 Jan 1950

        // `sgp4init` invocation.
        satrec = sgp4init(constDef, satrec, satrec.bstar, satrec.ecco, sgp4epoch,
          satrec.argpo, satrec.inclo, satrec.mo, satrec.no, satrec.nodeo);

        // outputs
        // -------
        //     satrec      - structure containing all the sgp4 satellite information
        //
        // **TODO:** Why are there more than the documented satrec? Do we need
        // these? Can we remove the extra properties?
        return {
            satrec: satrec,
            startmfe: startmfe,
            stopmfe: stopmfe,
            deltamin: deltamin
        };
    };
});
