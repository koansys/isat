module('gstime');

// We fail for TOLERANCE < 1e-11, but it seems Octave has less
// precision than Javascript. Octave vs. JavaScript results:
//      octave> gstime(epoch_recent + epoch_jd)
//      ans =  2.14204426986544
// JavaScript: 2.1420442698672133
//      octave> gstime(2455966)
//      ans =  5.55028019712699
// JavaScript: 5.550280197127769


test('sample date near now', function () {
    var TOLERANCE = 1e-11,        // TODO: is this enough? fails on 1e-12
        epoch_recent = 22669,     // approx days since January 0, 1950
        epoch_jd     = 2433281.5, // in initl.js, JD of Jan 0, 1950
        a_date       = epoch_recent + epoch_jd;
    ok(Math.abs(gstime(a_date)  - 2.14204426986544) < TOLERANCE,
       "result=" + gstime(a_date) + " expected=2.14204426986544");
    ok(Math.abs(gstime(2455966) - 5.55028019712699) < TOLERANCE,
       "result=" + gstime(2455966) + " expected=5.55028019712699");
});



