/*global ok: true, document: true,
 */

function isequalRel(x, y, tol) {
    var EPS = Math.pow(2, -52); // IEEE 754 double precision epsilon
    if (Math.abs(x - y) <= (tol * Math.max(Math.abs(x), Math.abs(y)) + EPS)) {
        return true;
    }
    // Too bad this stops QUnit test, but is handy for finding want/got values
    //throw new Error("isEqualRel x=" + x + " y=" + y + "  tol=" + tol);
    return false;
}

function assert(state, message) {
    return ok(state, message);
}

function isequal(actual, expected) {
    // Emulate MATLAB's (scalar) isequal() so we don't have to edit
    // generated tests
    return equal(actual, expected); //, "got=" + actual + "expected=" + expected);
}

function input(prompt) {
    // emulate MATLAB's user-input: use prompt as selection into DOM
    // by id and return the content. We could change this to a pop-up
    // later.
    return document.getElementById(prompt).textContent;
}