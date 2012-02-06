/*global document: true,
  twoline2rv: true,
  sgp4: true,
  invjday: true,
  rv2coe: true,
  mu: true,                     // from getgravc()
 */
var
rad = 180.0 / Math.PI,
opsmode = 'i',                  // from verify procedure: improved mode
typerun = 'v',                  // from verify procedure: verify
typeinput = 'e',                // only if typerun is NOT 'm'
whichconst = '72',              // from verify procedure: ???
infilename = "OMFG WE DON'T HAVE AN infilename",
infile,
input, fopen, fprintf, feof,         // TODO matlab line reader
idebug = true,                       // enable debug output
longstr1, longstr2, fgets,           // TODO matlab TLE file reader
catno,
strtrim,                        // TODO matlab func
rets,                           // destructured returns
satrec, startmfe, stopmfe, deltamin,
ro, vo,
tsince,
jd, year, mon, day, hr, minute, sec,
p, a, ecc, incl, node, argp, nu, m, arglat, truelon, lonper,
PLACEHOLDER;

// Define compatibility functions

function debug(str) {
    document.write(str);        // TODO: to #debug div
}

function outfile(str) {
    document.write(str);        // TODO: to #output div
}

function fprintf1(str) {
    document.write(str);        // TODO: did this go to STDOUT?
}


// // script testmat.m
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

//TODO:
//global tumin mu radiusearthkm xke j2 j3 j4 j3oj2  
//global opsmode



// // ------------------------  implementation   --------------------------

//   add operation smode for afspc (a) or improved (i)
// TODO read opsmode, typerun, whichconst, infile from HTML form fields
//opsmode= input('input opsmode afspc a, improved i ','s');

//         //typerun = 'c' compare 1 year of full satcat data
//         //typerun = 'v' verification run, requires modified elm file with
//         //typerun = 'm' maunual operation- either mfe, epoch, or dayof yr
//         //              start stop and delta times
//TODO: get from HTML form, type and optional typeinput
//typerun = input('input type of run c, v, m: ','s');
// if (typerun === 'm') {
//     typeinput = input('input mfe, epoch (YMDHMS), or dayofyr approach, m,e,d: ','s');
// }
// else {
//     typeinput = 'e';
// }

//TODO: get from Form
//whichconst = input('input constants 721, 72, 84 ');
//rad = 180.0 / pi;

// TESTING -------------------------
//    [tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2] = getgravc(whichconst);
//    printf('tumin=//f mu=//f radiusearthkm=//f xke=//f j2=//f j3=//f j4=//f j3oj2', tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2)

//         // ---------------- setup files for operation ------------------
//         // input 2-line element set file
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

// TODO:    global idebug dbgfile

// TLE file format repeats 3-line sets like:
//#                       # TEME example
//1 00005U 58002B   00179.78495062  .00000023  00000-0  28098-4 0  4753
//2 00005  34.2682 348.7242 1859667 331.7664  19.3264 10.82419157413667     0.00      4320.0        360.00

// ----------------- test simple propagation -------------------

// TODO: use HTML5 File objects: http://www.html5rocks.com/en/tutorials/file/dndfiles/

while (! feof(infile)) {
    longstr1 = fgets(infile, 130);
    while ((longstr1(1) === '#') && (feof(infile) === 0)) {
        longstr1 = fgets(infile, 130);
    }

    if (feof(infile) === 0) {
        longstr2 = fgets(infile, 130);
    }

    if (idebug) {
        //catno = strtrim(longstr1(3:7));
        catno = strtrim(longstr1.substring(2, 6));
        //dbgfile = fopen(strcat('sgp4test.dbg.',catno), 'wt');
        debug('this is the debug output\n\n');
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

    outfile('\n //d xx\n', satrec.satnum);
    fprintf1(' //d\n', satrec.satnum);

    // call the propagator to get the initial state vector value
    //[satrec, ro ,vo] = sgp4 (satrec,  0.0);
    rets = sgp4(satrec, 0.0);
    satrec      = rets.shift();
    ro          = rets.shift();
    vo          = rets.shift();

    outfile(' //16.8f //16.8f //16.8f //16.8f //12.9f //12.9f //12.9f\n',
            satrec.t, ro[0], ro[1], ro[2], vo[0], vo[1], vo[2]); // MIG offsets shifted
    // Why don't we print ymdhms or a,ecc,*rad as we do during the time intervals below?

    //fprintf1(' //16.8f //16.8f //16.8f //16.8f //12.9f //12.9f //12.9f\n',...
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
            fprintf1('# *** error: t:= //f *** code = //3i\n', tsince, satrec.error);
        }

        if (satrec.error === 0) {
            if ((typerun !== 'v') && (typerun !== 'c')) {
                jd = satrec.jdsatepoch + tsince / 1440;
                //[year,mon,day,hr,minute,sec] = invjday(jd);
                rets = invjday(jd);
                year    = rets.shift();
                mon     = rets.shift();
                day     = rets.shift();
                hr      = rets.shift();
                minute  = rets.shift();
                sec     = rets.shift();

                fprintf(outfile,
                        ' //16.8f //16.8f //16.8f //16.8f //12.9f //12.9f //12.9f //5i//3i//3i //2i://2i://9.6f //16.8f//16.8f//16.8//12.9f//12.9f//12.9f\n',
                        tsince, ro[0], ro[1], ro[2], vo[0], vo[1], vo[2],
                        year, mon, day, hr, minute, sec);
            }
            else {
                outfile(' //16.8f //16.8f //16.8f //16.8f //12.9f //12.9f //12.9f',
                        tsince, ro[0], ro[1], ro[2], vo[0], vo[1], vo[2]);
                // fprintf1(' //16.8f //16.8f //16.8f //16.8f //12.9f //12.9f //12.9f',
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

                outfile(' //14.6f //8.6f //10.5f //10.5f //10.5f //10.5f //10.5f\n',
                        a, ecc, incl * rad, node * rad, argp * rad, nu * rad, m * rad);
            }
        } // if satrec.error == 0

    } // while propagating the orbit

    // if (idebug && (dbgfile ~= -1)) {
    //     fclose(dbgfile);
    // }


} //// if not eof

} //// while through the input file

// fclose(infile);
// fclose(outfile);

