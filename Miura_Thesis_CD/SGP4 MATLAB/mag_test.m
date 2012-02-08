TOLERANCE = 1e-14;

assert(mag([0,0,0], [1,1,1]) == 0);
assert(mag([0,0,1], [1,1,1]) == 1);
assert(abs(mag([0,1,1], [1,1,1]) - 1.41421356237310) < TOLERANCE);
assert(abs(mag([1,1,1], [1,1,1]) - 1.73205080756888) < TOLERANCE);
