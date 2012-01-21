
// from constmath.m
small = 0.00000001;

infinite  = 999999.9;
UNDEFINED = 999999.1;           // lowercase is reserved word

//% -------------------------  mathematical  --------------------
rad    = 180.0 / pi;
twopi  = 2.0 * pi;
halfpi = pi * 0.5;

//% -------------------------  conversions  ---------------------
ft2m    =    0.3048;
mile2m  = 1609.344;
nm2m    = 1852;
mile2ft = 5280;
mileph2kmph = 0.44704;
nmph2kmph   = 0.5144444;


// from constastro.m
// -----------------------  physical constants  ----------------
//% WGS-84/EGM-96 constants used here
re         = 6378.137;         // km
flat       = 1.0/298.257223563;
omegaearth = 7.292115e-11;     // rad/s
mu         = 398600.4418;      // km3/s2
mum        = 3.986004418e14;   // m3/s2

//% derived constants from the base values
eccearth = Math.sqrt(2.0*flat - flat^2);
eccearthsqrd = eccearth^2;

renm = re / nm2m;
reft = re * 1000.0 / ft2m;

tusec = Math.sqrt(re^3/mu);
tumin = tusec / 60.0;
tuday = tusec / 86400.0;

omegaearthradptu  = omegaearth * tusec;
omegaearthradpmin = omegaearth * 60.0;

velkmps = sqrt(mu / re);
velftps = velkmps * 1000.0/ft2m;
velradpmin = velkmps * 60.0/re;

//%for afspc
//%velkmps1 = velradpmin*6378.135/60.0   7.90537051051763
//%mu1 = velkmps*velkmps*6378.135        3.986003602567418e+005        
degpsec = (180.0 / Math.PI) / tusec;
radpday = 2.0 * Math.PI * 1.002737909350795;

speedoflight = 2.99792458e8; // m/s
au = 149597870.0;      // km
earth2moon = 384400.0; // km
moonradius =   1738.0; // km
sunradius  = 696000.0; // km

masssun   = 1.9891e30;
massearth = 5.9742e24;
massmoon  = 7.3483e22;




// ------------------------------------------------------------------------------
//
//                           function days2mdh
//
//  this function converts the day of the year, days, to the equivalent month
//    day, hour, minute and second.
//
//  author        : david vallado                  719-573-2600   22 jun 2002
//
//  revisions
//                -
//
//  inputs          description                    range / units
//    year        - year                           1900 .. 2100
//    days        - julian day of the year         0.0  .. 366.0
//
//  outputs       :
//    mon         - month                          1 .. 12
//    day         - day                            1 .. 28,29,30,31
//    hr          - hour                           0 .. 23
//    minute      - minute                         0 .. 59
//    sec         - second                         0.0 .. 59.999
//
//  locals        :
//    dayofyr     - day of year
//    temp        - temporary extended values
//    inttemp     - temporary integer value
//    i           - index
//    lmonth(12)  - integer array containing the number of days per month
//
//  coupling      :
//    none.
//
// [mon,day,hr,minute,sec] = days2mdh ( year,days);
// -----------------------------------------------------------------------------

function days2mdh(year, days) {
    // --------------- set up array of days in month  --------------
    var i,
    inttemp = 0,
    mon, day,
    temp,
    hr, minute, sec;

    for (i=1, i<=12, i++) {
        lmonth[i] = 31;
        if (i == 2) {
            lmonth[i]= 28;
        }
        if (i == 4 | i == 6 | i == 9 | i == 11) {
            lmonth[i]= 30;
        }
    }
    dayofyr= Math.floor(days);

    // ----------------- find month and day of month ---------------
    if ((year - 1900) / 4 == 0) {
        lmonth[2] = 29;
    }
    i = 1;
    while (( dayofyr > inttemp + lmonth[i] ) & ( i < 12 )) {
            inttemp= inttemp + lmonth(i);
            i= i+1;
    }
    mon= i;
    day = dayofyr - inttemp;

    // ----------------- find hours minutes and seconds ------------
    temp= (days - dayofyr )*24.0;
    hr  = fix( temp );
    temp= (temp-hr) * 60.0;
    minute = fix( temp );
    sec = (temp-minute) * 60.0;

    //UNUSED: julianday = jday(year, mon, day, hr, minute, sec);

    return [mon,day,hr,minute,sec];
}


// From: http://c2.com/cgi/wiki?DotProductInManyProgrammingLanguages
function dot(a,b) {
    var n = 0, lim = Math.min(a.length,b.length);
    for (var i = 0; i < lim; i++) n += a[i] * b[i];
    return n;
}
assert( dot([1,2,3,4,5], [6,7,8,9,10]) == 130 )




// % ------------------------------------------------------------------------------
// %
// %                            function mag
// %
// %  this function finds the magnitude of a vector.  the tolerance is set to
// %    0.000001, thus the 1.0e-12 for the squared test of underflows.
// %
// %  author        : david vallado                  719-573-2600   30 may 2002
// %
// %  revisions
// %    vallado     - fix tolerance to match coe, eq, etc            3 sep 2002
// %
// %  inputs          description                    range / units
// %    vec         - vector
// %
// %  outputs       :
// %    mag         - magnitude
// %
// %  locals        :
// %    none.
// %
// %  coupling      :
// %    none.
// %
// % mag = ( vec );
// % ----------------------------------------------------------------------------- }

function mag(vec) {
    var temp = vec(0)*vec(0) + vec(1)*vec(1) + vec(2)*vec(2); // JS 0-based, MATLAB 1-based?
    var mag = 0.0;

    if (Math.abs(temp) >= 1.0e-16) {
        mag = Math.sqrt(temp);
    }
    return mag;
}