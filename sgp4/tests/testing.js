"use strict";

define(function (){
    return {
        isEqualRel: function (x, y, tol) {
            var EPS = Math.pow(2, -52); // IEEE 754 double precision epsilon
            if (Math.abs(x - y) <= (tol * Math.max(Math.abs(x), Math.abs(y)) + EPS)) {
                return true;
            }
            // Too bad this stops QUnit test, but is handy for finding want/got values
            //throw Error("isEqualRel x=" + x + " y=" + y + "  tol=" + tol);
            return false;
        },
        // // assert looks like it can be replaced with toBeTruthy in jasmine.
        // assert: function (state, message) {
        //     return ok(state, message);
        // },

        // function isequal(actual, expected) {
        //     // Emulate MATLAB's (scalar) isequal() so we don't have to edit
        //     // generated tests
        //     //return equal(actual, expected); //, "got=" + actual + "expected=" + expected);
        //     if (actual === expected) {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // },

        input: function (html_id) {
            // emulate MATLAB's user-input: use the original (or hacked)
            // prompt as selection into DOM by id and return the content. We
            // could change this to a pop-up later.
            // WARN: We're ignoring the second element, which always seems to be a 's' for string.
            var elem = document.getElementById(html_id);
            if (elem.tagName === "INPUT") {
                return document.getElementById(html_id).value;
            } else {  // e.g., "TEXTAREA"
                return elem.textContent;
            }
        }
    };
});
