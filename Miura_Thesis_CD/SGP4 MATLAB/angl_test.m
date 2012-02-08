TOLERANCE = 1e-15

assert(angl([0, 0, 1], [0, 0, 1]) == 0.00000000000000e+00)
assert(abs(angl([0, 0, 1], [0, 1, 1]) - 7.85398163397448e-01) < TOLERANCE)
assert(abs(angl([0, 0, 1], [1, 1, 1]) - 9.55316618124509e-01) < TOLERANCE)
assert(abs(angl([1, 2, 3], [4, 5, 6]) - 2.25726128552734e-01) < TOLERANCE)

