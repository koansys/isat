// Cheating here as I used Octave to generate these expected results

[m, d, hr, mm, ss] = days2mdh(2000, 1);
assert(isequal([m, d, hr, mm, ss], [1, 1, 0, 0, 0]));

[m, d, hr, mm, ss] = days2mdh(2012, 39);
assert(isequal([m, d, hr, mm, ss], [2, 8, 0, 0, 0]));

[m, d, hr, mm, ss] = days2mdh(2012, 39.015625);
assert(isequal([m, d, hr, mm, ss], [2, 8, 0, 22, 30]));

[m, d, hr, mm, ss] = days2mdh(2100, 365);
assert(isequal([m, d, hr, mm, ss], [12, 30, 0, 0, 0]));
