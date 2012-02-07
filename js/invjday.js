/*globals days2mdh: true */
// ------------------------------------------------------------------------------
//
//                           function invjday
//
//  this function finds the year, month, day, hour, minute and second
//    given the julian date. tu can be ut1, tdt, tdb, etc.
//
//  author        : david vallado                  719-573-2600   27 may 2002
//
//  revisions
//                -
//
//  inputs          description                    range / units
//    jd          - julian date                    days from 4713 bc
//
//  outputs       :
//    year        - year                           1900 .. 2100
//    mon         - month                          1 .. 12
//    day         - day                            1 .. 28,29,30,31
//    hr          - hour                           0 .. 23
//    min         - minute                         0 .. 59
//    sec         - second                         0.0 .. 59.999
//
//  locals        :
//    days        - day of year plus fractional
//                  portion of a day               days
//    tu          - julian centuries from 0 h
//                  jan 0, 1900
//    temp        - temporary real values
//    leapyrs     - number of leap years from 1900
//
//  coupling      :
//    days2mdhms  - finds month, day, hour, minute and second given days and year
//
//  references    :
//    vallado       2007, 208, alg 22, ex 3-13
//
// [year,mon,day,hr,min,sec] = invjday ( jd );
// -----------------------------------------------------------------------------

function invjday(jd) {
    // ----------------- find year and days of the year ---------------
    var temp   = jd - 2415019.5,
        tu      = temp / 365.25,
        year    = 1900 + Math.floor(tu),
        leapyrs = Math.floor((year - 1901) * 0.25),
        //     days   = temp - ((year-1900)*365.0 + leapyrs ) + 0.00000000001; // nudge by 8.64x10-7 sec to get even outputs
        days    = temp - ((year - 1900) * 365.0 + leapyrs),
        mon, day, hr, min, sec,
        mdhms;

    // ------------ check for case of beginning of a year -------------
    if (days < 1.0) {
        year    = year - 1;
        leapyrs = Math.floor((year - 1901) * 0.25);
        days    = temp - ((year - 1900) * 365.0 + leapyrs);
    }
    // ------------------- find remaining data  -----------------------
    // This sucks, JS<1.7 doesn't have destructured assignment like Python/Perl,
    // do it manually.
    //[mon, day, hr, min, sec] = days2mdh(year, days); // TODO: JSLINT: Bad Assignment
    mdhms = days2mdh(year, days);
    mon = mdhms[0];
    day = mdhms[1];
    hr  = mdhms[2];
    min = mdhms[3];
    sec = mdhms[4];
    //     sec= sec - 0.00000086400;
    return [year, mon, day, hr, min, sec];
}
