/*global ok: true
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