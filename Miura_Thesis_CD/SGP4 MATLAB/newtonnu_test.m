## I have no idea if these eccentricity and anomaly values are sane,
## just using ones from the stated range,
## though ecc seems to want to be < 1.0 ?

format long E

TOLERANCE     = 1e-14;
TOLERANCE_BIG = 1e-13;

[e0, m] = newtonnu(0.0, -6.28)
assert(abs(e0 - -6.28000000000000E+00) < TOLERANCE)
assert(abs(m - 3.18530717958598E-03) < TOLERANCE)

[e0, m] = newtonnu(0.0, -3.14)
assert(abs(e0 - -3.14000000000000E+00) < TOLERANCE)
assert(abs(m - 3.14318530717959E+00) < TOLERANCE)

[e0, m] = newtonnu(0.0, 0.0)
assert(abs(e0 -  0.00000000000000E+00) < TOLERANCE)
assert(abs(m - 0.00000000000000E+00) < TOLERANCE)

[e0, m] = newtonnu(0.0, 3.14)
assert(abs(e0 -  3.14000000000000E+00) < TOLERANCE)
assert(abs(m - 3.14000000000000E+00) < TOLERANCE)

[e0, m] = newtonnu(0.0, 6.28)
assert(abs(e0 -  6.28000000000000E+00) < TOLERANCE)
assert(abs(m - 6.28000000000000E+00) < TOLERANCE)


[e0, m] = newtonnu(0.333, -6.28)
assert(abs(e0 -  2.25319794362693E-03) < TOLERANCE)
assert(abs(m - 1.50288366327809E-03) < TOLERANCE)

[e0, m] = newtonnu(0.333, -3.14)
assert(abs(e0 - -3.13934114612643E+00) < TOLERANCE)
assert(abs(m - 3.14459391240500E+00) < TOLERANCE)

[e0, m] = newtonnu(0.333, 0.0)
assert(abs(e0 -  0.00000000000000E+00) < TOLERANCE)
assert(abs(m - 0.00000000000000E+00) < TOLERANCE)

[e0, m] = newtonnu(0.333, 3.14)
assert(abs(e0 -  3.13934114612643E+00) < TOLERANCE_BIG)
assert(abs(m - 3.13859139477458E+00) < TOLERANCE_BIG)

[e0, m] = newtonnu(0.333, 6.28)
assert(abs(e0 - -2.25319794362693E-03) < TOLERANCE)
assert(abs(m - 6.28168242351631E+00) < TOLERANCE_BIG)


[e0, m] = newtonnu(.666, -6.28)
assert(abs(e0 -  1.42622271470173E-03) < TOLERANCE)
assert(abs(m - 4.76358708731962E-04) < TOLERANCE)

[e0, m] = newtonnu(.666, -3.14)
assert(abs(e0 - -3.13803564246188E+00) < TOLERANCE)
assert(abs(m - 3.14751862913340E+00) < TOLERANCE_BIG)

[e0, m] = newtonnu(.666, 0.0)
assert(abs(e0 -  0.00000000000000E+00) < TOLERANCE)
assert(abs(m - 0.00000000000000E+00) < TOLERANCE)

[e0, m] = newtonnu(.666, 3.14)
assert(abs(e0 -  3.13803564246188E+00) < TOLERANCE)
assert(abs(m - 3.13566667804618E+00) < TOLERANCE_BIG)

[e0, m] = newtonnu(.666, 6.28)
assert(abs(e0 - -1.42622271470173E-03) < TOLERANCE)
assert(abs(m - 6.28270894847085E+00) < TOLERANCE_BIG)
