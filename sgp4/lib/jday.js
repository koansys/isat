"use strict";
// jday
// ----
//  this function finds the julian date given the year, month, day, and time.
//
//      jd = jday(yr, mon, day, hr, min, sec)

define(function(){
	return function(yr, mon, day, hr, min, sec) {
	// Inputs
	// ======
	//     inputs          description                    range / units
	//     year        - year                           1900 .. 2100
	//     mon         - month                          1 .. 12
	//     day         - day                            1 .. 28,29,30,31
	//     hr          - universal time hour            0 .. 23
	//     min         - universal time min             0 .. 59
	//     sec         - universal time sec             0.0 .. 59.999
	//     whichtype   - julian .or. gregorian calender   'j' .or. 'g'

	    return 367.0 * yr -
	    // outputs
	    // =======
		//     jd          - julian date                    days from 4713 bc
	        Math.floor((7 * (yr + Math.floor((mon + 9) / 12.0))) * 0.25) +
	        Math.floor(275 * mon / 9.0) +
	        day + 1721013.5 +
	        ((sec / 60.0 + min) / 60.0 + hr) / 24.0;
	        // TODO: (CS) Can we delete the following line?
	        //  - 0.5 * sign(100.0 * yr + mon - 190002.5) + 0.5;

	};
});
