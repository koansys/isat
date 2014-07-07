"use strict";

// angl
// ----
//     θ = angl(vec1,vec2);

// function angl calculates the angle between two vectors. The output is
// set to 999999.1 to indicate an undefined value. Be sure to check for
// this at the output phase.

// **TODO:** Can we just use an undefined value?

define (["mag", 'mutils'],
    function(mag, mutils) {
        return {
            angl: function (vec1, vec2) {
                var SMALL     = 0.00000001,
                    UNDEFINED = 999999.1,
                    magv1     = mag(vec1),
                    magv2     = mag(vec2),
                    temp,
                    theta;

                if (magv1 * magv2 > SMALL * SMALL) {
                    temp = mutils.dot(vec1, vec2) / (magv1 * magv2);
                    if (Math.abs(temp) > 1.0) {
                        temp = sign(temp) * 1.0;
                    }
                    theta = Math.acos(temp);
                }
                else {
                    theta = UNDEFINED;
                }
                return theta;
            }
        }
    }
);
