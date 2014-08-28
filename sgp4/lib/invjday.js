"use strict";
//  coupling      :
//    days2mdhms  - finds month, day, hour, minute and second given days and year
//

define(["days2mdh"], function(days2mdh){
    // invjday
    // =======
    // `invjday` finds the year, month, day, hour, minute and second
    //  given the julian date. tu can be ut1, tdt, tdb, etc.
    //
    //      {year,mon,day,hr,min,sec} = invjday ( jd );
    return function(jd) {
        // inputs
        // ------
        //     name        description                    range / units
        //     jd          - julian date                    days from 4713 bc
        //
        // find year and days of the year
        // ------------------------------

        // locals
        // ------
        //     days        - day of year plus fractional portion of a day - days
        //     tu          - julian centuries from 0 h - jan 0, 1900
        //     temp        - temporary real values
        //     leapyrs     - number of leap years from 1900
        var temp   = jd - 2415019.5,
            tu      = temp / 365.25,
            year    = 1900 + Math.floor(tu),
            leapyrs = Math.floor((year - 1901) * 0.25),
            //     days   = temp - ((year-1900)*365.0 + leapyrs ) + 0.00000000001; // nudge by 8.64x10-7 sec to get even outputs
            days    = temp - ((year - 1900) * 365.0 + leapyrs),
            d;

        // check for case of beginning of a year
        // -------------------------------------
        if (days < 1.0) {
            year    = year - 1;
            leapyrs = Math.floor((year - 1901) * 0.25);
            days    = temp - ((year - 1900) * 365.0 + leapyrs);
        }
        // find remaining data
        // -------------------
        d = days2mdh(year, days);
        // TODO: Decide what to do with this old comment (// sec=...) in code.
        //
        //     // sec= sec - 0.00000086400;
        //
        // outputs
        // -------
        // `invjday` returns an object with the following properties.
        //
        //     year        - year                           1900 .. 2100
        //     mon         - month                          1 .. 12
        //     day         - day                            1 .. 28,29,30,31
        //     hour        - hour                           0 .. 23
        //     minute      - minute                         0 .. 59
        //     sec         - second                         0.0 .. 59.999
        return d;
    };
});
