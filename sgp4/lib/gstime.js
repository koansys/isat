"use strict";

define ([], function(){
    // gstime
    // ======
    // `gstime` finds the greenwich sidereal time (iau-82).
    //     gst = gstime(jdut1);
    return function(jdut1) {
        // inputs - description - range / units
        // ------------------------------------
        //     jdut1 - julian date of ut1 - days from 4713 bc
        var twopi      = 2.0 * Math.PI,
        deg2rad    = Math.PI / 180.0,
        tut1, temp;
        // locals
        // ------
        //     temp        - temporary variable for reals   rad
        //     tut1        - julian centuries from the jan 1, 2000 12 h epoch (ut1)

        // implementation
        // --------------
        tut1 = (jdut1 - 2451545.0) / 36525.0;

        temp = -6.2e-6 * tut1 * tut1 * tut1 + 0.093104 * tut1 * tut1 +
        (876600.0 * 3600.0 + 8640184.812866) * tut1 + 67310.54841;

        // 360/86400 = 1/240, to deg, to rad
        temp = (temp * deg2rad / 240.0) % twopi;

        // check quadrants
        // ---------------
        if (temp < 0.0) {
            temp = temp + twopi;
        }
        return temp;
        // outputs
        // -------
        //     gst - greenwich sidereal time - 0 to 2pi rad
    };
});
