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

// script testmat.m
//
// This script tests the SGP4 propagator.

// Author: 
//   Jeff Beck 
//   beckja@alumni.lehigh.edu 

// Version Info: 
//   1.0 (051019) - Initial version from Vallado C++ version. 
//   1.0 (aug 14, 2006) - update for paper
//   2.0 (apr 2, 2007) - update for manual operations
//   3.0 (3 jul, 2008) - update for opsmode operation afspc or improved

// these are set in sgp4init
//global tumin mu radiusearthkm xke j2 j3 j4 j3oj2  
//global opsmode

// CSHENTON: for now, we'll do the testing here rather than testmat_test.{html,js}
// Our calling HTML will need <input> fields for:
// opsmode, typerun, typeinput, whichconst, infilename (or better, the data iself?).

// DANGER:
// dpper needs global 'opsmode' so define it here; should we move it closer to dpper?
var opsmode = "GLOBAL UNDEFINED";

// // ------------------------  implementation   --------------------------



// Users selects TLE file from disk
// Based on http://www.html5rocks.com/en/tutorials/file/dndfiles/
// TODO: get only one file, not a list, don't loop.

function handleFileSelect(evt) {
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

function get_tle_lines(html_id) {
    // use like: for (var i = 0; i < lines.length; i++) { alert(lines[i]); }
    var
    lines,
    tle_lines = document.getElementById(html_id).textContent;
    if (document.all) { // IE
        return tle_lines.split("\r\n");
    }
    else { //Mozilla
        return tle_lines.split("\n");
    }
}


// We should probably take some input and return output
// so that the QUnit test runner can validate results.

function testmat() {
    var 
    USE_GLOBAL_opsmode = 'NO opsmode',                  // from verify procedure: improved mode
    typerun = 'NO typerun',                  // from verify procedure: verify
    typeinput = 'NO typeinput',                // only if typerun is NOT 'm'
    whichconst = 'NO whichconst',              // from verify procedure: ???
    infilename = "OMFG WE DON'T HAVE AN infilename",
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
    tle_lines,
    start_time, sat_time, total_time;

    tle_lines = get_tle_lines('tle-lines');

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

    start_time = new Date();    // overall run time

    for (i = 0; i < tle_lines.length; i += 1) {
        sat_time = new Date();  // time for each satelite (depends of course on period requested)

        tle_lines[i] = tle_lines[i].trim();
        if (tle_lines[i] === '' || tle_lines[i][0] === '#') {
            continue;
        }
        else {                      // DANGER doesn't tolerate comments between TLE line 1 and 2
            longstr1 = tle_lines[i];
            i += 1;
            longstr2 = tle_lines[i];
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
        fprintf1(sprintf(" %d\n", satrec.satnum));

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
                fprintf1(sprintf("# *** error: tsince=%f *** code=%d   (satnum=%d)\n",
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
        debug("satnum=" + satrec.satnum +
              " time=" + (new Date() - sat_time) + "ms" +
              "  ellapsed time=" + (new Date() - start_time) + "ms");
    } // if not eof
    // window.onload = testmat();
    // TODO: return results of test? 
}
