/*global
  getgravc: true,
  debug: true,
  days2mdh: true,
  jday: true,
  input: true, // reads from HTML by id="prompt string"
  sgp4init: true,
  tumin: true, mu: true, radiusearthkm:true, xke: true, j2: true, j3: true, j4: true, j3oj2: true,
 */


//  -----------------------------------------------------------------------------
//
//                            procedure twoline2rv
//
//  this function converts the two line element set character string data to
//    variables and initializes the sgp4 variables. several intermediate varaibles
//    and quantities are determined. note that the result is a structure so multiple
//    satellites can be processed simultaneously without having to reinitialize. the
//    verification mode is an important option that permits quick checks of any
//    changes to the underlying technical theory. this option works using a
//    modified tle file in which the start, stop, and delta time values are
//    included at the end of the second line of data. this only works with verification
//    the mode. the catalog mode simply propagates from -1440 to 1440 min
//    from epoch and is useful when performing entire catalog runs.
//
// Author:
//   Jeff Beck
//   beckja@alumni.lehigh.edu
//   1.0  aug  6, 2006 - update for paper dav
//   2.0  mar  8, 2007 - misc fixes and manual operation updates
//   2.01 may  9, 2007 - fix for correction to year of 57
//   2.02 oct  8, 2007 - fix for manual jdstart jdstop matlab formats
// original comments from Vallado C++ version:
//   author        : david vallado                  719-573-2600    1 mar 2001
//
//   inputs        :
//   longstr1      - TLE character string
//   longstr2      - TLE character string
//   typerun       - character for mode of SGP4 execution
//                   'c' = catalog mode (propagates at 20 min timesteps from
//                           one day before epoch to one day after)
//                   'v' = verification mode (propagates according to start,
//                           stop, and timestep specified in longstr2)
//                   'm' = manual mode (prompts user for start, stop, and
//                           timestep for propagation)
//   typeinput     - type of manual input           mfe 'm', epoch 'e', dayofyr 'd'
//
//   outputs       :
//     satrec      - structure containing all the sgp4 satellite information
//
//   coupling      :
//     getgravconst
//     days2mdhms  - conversion of days to month, day, hour, minute, second
//     jday        - convert day month year hour minute second into julian date
//     sgp4init    - initialize the sgp4 variables
//
//   references    :
//     norad spacetrack report #3
//     vallado, crawford, hujsak, kelso  2006
//
// [satrec, startmfe, stopmfe, deltamin] = twoline2rv(whichconst, longstr1, ...
//          longstr2, typerun,typeinput)
//  ----------------------------------------------------------------------------*/

var xke, j2;                 // HACK: GLOBALS to pass to initl()

function twoline2rv(whichconst, longstr1, longstr2, typerun, typeinput) {
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
        throw Error("Global 'tumin' is undefined");
    }
    if (typeof radiusearthkm === 'undefined') {
        throw Error("Global 'radiusearthkm' is undefined");
    }
    if (typeof xke === 'undefined') {
        throw Error("Global 'xke' is undefined");
    }
    if (typeof j2 === 'undefined') {
        throw Error("Global 'j2' is undefined");
    }
    if (typeof j3 === 'undefined') {
        throw Error("Global 'j3' is undefined");
    }
    if (typeof j4 === 'undefined') {
        throw Error("Global 'j4' is undefined");
    }
    if (typeof j3oj2 === 'undefined') {
        throw Error("Global 'j3oj2' is undefined");
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