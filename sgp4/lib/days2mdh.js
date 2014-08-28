"use strict";

// days2mdh
// --------
// Converts the day of the year, days, to the equivalent month
// day, hour, minute and second.
//
//     {year, mon, day, hour, minute,sec} = days2mdh ( year,days);
//

//

//
//
// -----------------------------------------------------------------------------

define(["jday"], function(jday){
    return  function(year, days) {
        // Inputs
        // ======
        //
        //     inputs          description                    range / units
        //     year            - year                           1900 .. 2100
        //     days            - julian day of the year         0.0  .. 366.0
        var i, lmonth = [], dayofyr, inttemp, mon, day, temp, hr, minute, sec, julianday;
        // locals
        // ======
        //
        //     dayofyr     - day of year
        //     temp        - temporary extended values
        //     inttemp     - temporary integer value
        //     i           - index
        //     lmonth(12)  - integer array containing the number of days per month
        for (i = 1; i <= 12; i += 1) {
            //  set up array of days in month
            //
            // This is crazy, why not just:
            //
            // TODO:(CS) lmonth = [undefined, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            lmonth[i] = 31;
            if (i === 2) {
                lmonth[i] = 28;
            }
            if (i === 4 || i === 6 || i === 9 || i === 11) {
                lmonth[i] = 30;
            }
        }

        dayofyr = Math.floor(days);

        // find month and day of month
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

        // find hours minutes and seconds
        //
        // MATLAB's fix() rounds toward zero which behaves differently for
        // negative numbers than JavaScript's Math.floor() which rounds down.
        // But it should be fine here, for positve numbers.

        temp   = (days - dayofyr) * 24.0;
        hr     = Math.floor(temp);
        temp   = (temp - hr) * 60.0;
        minute = Math.floor(temp);
        sec    = (temp - minute) * 60.0;

        // TODO: What is this?
        julianday = jday(year, mon, day, hr, minute, sec);

        return {
            year: year,
            mon: mon,
            day: day,
            hour: hr,
            minute: minute,
            sec: sec
        };
    };
});
