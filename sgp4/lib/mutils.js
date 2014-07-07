"use strict";
// Math Utilities to replicate functions used by MATLAB/Octave.

define(function(){
    return {
        sign: function (val) {
            // sign does something. Looks like boolish vals
            // based on the sign of the number.
            if (val < 0) {
                return -1;
            }
            if (val > 0) {
                return 1;
            }
            return 0;
        },

        cross: function (v1, v2) {
            // Return 3d cross product vector from two 3d vectors.
            // http://knol.google.com/k/dot-product-cross-product-in-3d
            // http://rosettacode.org/wiki/Vector_products
            // Our vectors are represented as lists, for historical compatibility.
            var x1 = v1[0],
                y1 = v1[1],
                z1 = v1[2],
                x2 = v2[0],
                y2 = v2[1],
                z2 = v2[2];
            return [y1 * z2 - y2 * z1, z1 * x2 - z2 * x1, x1 * y2 - x2 * y1];
        },

        dot: function (a, b) {
            // Return a scalar dot product of two multidimensional vectors.
            // http://c2.com/cgi/wiki?DotProductInManyProgrammingLanguages
            var n = 0,
                lim = Math.min(a.length, b.length),
                i;
            for (i = 0; i < lim; i += 1) {
                n += a[i] * b[i];
            }
            return n;
        }

    }
});
