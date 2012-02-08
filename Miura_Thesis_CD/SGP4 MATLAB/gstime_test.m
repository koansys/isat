format long;
TOLERANCE = 1e-14;

epoch_recent = 22669;     # approx days since January 0, 1950
epoch_jd     = 2433281.5; # in initl.js, JD of Jan 0, 1950

assert(abs(gstime(epoch_recent + epoch_jd) - 2.14204426986544) < TOLERANCE);

assert(abs(gstime(2455966) - 5.55028019712699) < TOLERANCE);


gstime(epoch_recent + epoch_jd)
gstime(2455966)