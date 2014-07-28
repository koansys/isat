/*global
  jday : true
*/
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

var i, lmonth = [], dayofyr, i, inttemp, mon, day, temp, hr, minute, sec, julianday;

function days2mdh(year, days) {
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