"use strict";

define(function(){
// mag
// ---
//     mag = (vec);

//  this function finds the magnitude of a vector.  the tolerance is set to
//    0.000001, thus the 1.0e-12 for the squared test of underflows.

	return function (vec) {
	    var temp = vec[0] * vec[0] + vec[1] * vec[1] + vec[2] * vec[2],
	        mymag = 0.0;

	    if (Math.abs(temp) >= 1.0e-16) {
	        mymag = Math.sqrt(temp);
	    }
	    return mymag;
	}

});
