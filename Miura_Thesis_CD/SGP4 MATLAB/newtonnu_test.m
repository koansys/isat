## I have no idea if these eccentricity and anomaly values are sane,
## just using ones from the stated range,
## though ecc seems to want to be < 1.0 ?

format long E

TOLERANCE     = 1e-14;
TOLERANCE_BIG = 1e-13;

TOL = 0.000001;


[e0, m] = newtonnu(0.0, -6.28);
assert(abs(e0 - -6.28000000000000E+00) < TOLERANCE);
assert(abs(m - 3.18530717958598E-03) < TOLERANCE);

[e0, m] = newtonnu(0.0, -3.14);
assert(abs(e0 - -3.14000000000000E+00) < TOLERANCE);
assert(abs(m - 3.14318530717959E+00) < TOLERANCE);

[e0, m] = newtonnu(0.0, 0.0);
assert(abs(e0 -  0.00000000000000E+00) < TOLERANCE);
assert(abs(m - 0.00000000000000E+00) < TOLERANCE);

[e0, m] = newtonnu(0.0, 3.14);
assert(abs(e0 -  3.14000000000000E+00) < TOLERANCE);
assert(abs(m - 3.14000000000000E+00) < TOLERANCE);

[e0, m] = newtonnu(0.0, 6.28);
assert(abs(e0 -  6.28000000000000E+00) < TOLERANCE);
assert(abs(m - 6.28000000000000E+00) < TOLERANCE);


[e0, m] = newtonnu(0.333, -6.28);
assert(abs(e0 -  2.25319794362693E-03) < TOLERANCE);
assert(abs(m - 1.50288366327809E-03) < TOLERANCE);

[e0, m] = newtonnu(0.333, -3.14);
assert(abs(e0 - -3.13934114612643E+00) < TOLERANCE);
assert(abs(m - 3.14459391240500E+00) < TOLERANCE);

[e0, m] = newtonnu(0.333, 0.0);
assert(abs(e0 -  0.00000000000000E+00) < TOLERANCE);
assert(abs(m - 0.00000000000000E+00) < TOLERANCE);

[e0, m] = newtonnu(0.333, 3.14);
assert(abs(e0 -  3.13934114612643E+00) < TOLERANCE_BIG);
assert(abs(m - 3.13859139477458E+00) < TOLERANCE_BIG);

[e0, m] = newtonnu(0.333, 6.28);
assert(abs(e0 - -2.25319794362693E-03) < TOLERANCE);
assert(abs(m - 6.28168242351631E+00) < TOLERANCE_BIG);


[e0, m] = newtonnu(.666, -6.28);
assert(abs(e0 -  1.42622271470173E-03) < TOLERANCE);
assert(abs(m - 4.76358708731962E-04) < TOLERANCE);

[e0, m] = newtonnu(.666, -3.14);
assert(abs(e0 - -3.13803564246188E+00) < TOLERANCE);
assert(abs(m - 3.14751862913340E+00) < TOLERANCE_BIG);

[e0, m] = newtonnu(.666, 0.0);
assert(abs(e0 -  0.00000000000000E+00) < TOLERANCE);
assert(abs(m - 0.00000000000000E+00) < TOLERANCE);

[e0, m] = newtonnu(.666, 3.14);
assert(abs(e0 -  3.13803564246188E+00) < TOLERANCE);
assert(abs(m - 3.13566667804618E+00) < TOLERANCE_BIG);

[e0, m] = newtonnu(.666, 6.28);
assert(abs(e0 - -1.42622271470173E-03) < TOLERANCE);
assert(abs(m - 6.28270894847085E+00) < TOLERANCE_BIG);


# 5

[e0, m] = newtonnu(1.856839661347e-01, 4.406401781136e+00);
assert(isequalRel(e0, -1.693500912993e+00, TOL));
assert(isequalRel(m,  4.773972245877e+00, TOL));

[e0, m] = newtonnu(1.851411170975e-01, 2.988460057544e+00);
assert(isequalRel(e0, 2.957079757746e+00, TOL));
assert(isequalRel(m,  2.923112339227e+00, TOL));

[e0, m] = newtonnu(1.856989869471e-01, 1.434828952104e+00);
assert(isequalRel(e0, 1.252067006852e+00, TOL));
assert(isequalRel(m,  1.075720867283e+00, TOL));

[e0, m] = newtonnu(1.858012633167e-01, 5.209551568087e+00);
assert(isequalRel(e0, -9.162653479718e-01, TOL));
assert(isequalRel(m,  5.514322334927e+00, TOL));

[e0, m] = newtonnu(1.850633960634e-01, 3.513807794463e+00);
assert(isequalRel(e0, -2.695056670829e+00, TOL));
assert(isequalRel(m,  3.668047110329e+00, TOL));

[e0, m] = newtonnu(1.856388540272e-01, 2.152516069731e+00);
assert(isequalRel(e0, 1.987937576469e+00, TOL));
assert(isequalRel(m,  1.818217088405e+00, TOL));

[e0, m] = newtonnu(1.863381127011e-01, 6.243079099420e+00);
assert(isequalRel(e0, -3.321602291535e-02, TOL));
assert(isequalRel(m,  6.256157557215e+00, TOL));

[e0, m] = newtonnu(1.855375875133e-01, 4.085982404991e+00);
assert(isequalRel(e0, -2.037116767007e+00, TOL));
assert(isequalRel(m,  4.411796032899e+00, TOL));

[e0, m] = newtonnu(1.853306179043e-01, 2.729639278624e+00);
assert(isequalRel(e0, 2.647817867576e+00, TOL));
assert(isequalRel(m,  2.559979838351e+00, TOL));

[e0, m] = newtonnu(1.859736824913e-01, 1.003249486494e+00);
assert(isequalRel(e0, 8.529304762464e-01, TOL));
assert(isequalRel(m,  7.128530079849e-01, TOL));

[e0, m] = newtonnu(1.858540672265e-01, 4.787559941164e+00);
assert(isequalRel(e0, -1.310504998910e+00, TOL));
assert(isequalRel(m,  5.152273889120e+00, TOL));

[e0, m] = newtonnu(1.850788067685e-01, 3.255632011792e+00);
assert(isequalRel(e0, -3.004138755279e+00, TOL));
assert(isequalRel(m,  3.304406322893e+00, TOL));
# 4632

[e0, m] = newtonnu(1.455338138953e-01, 5.998398344535e-01);
assert(isequalRel(e0, 5.219876549463e-01, TOL));
assert(isequalRel(m,  4.494239015219e-01, TOL));

[e0, m] = newtonnu(1.455107353728e-01, 1.355729535740e+00);
assert(isequalRel(e0, 1.215238700804e+00, TOL));
assert(isequalRel(m,  1.078829295587e+00, TOL));

[e0, m] = newtonnu(1.454826923634e-01, 1.985943404750e+00);
assert(isequalRel(e0, 1.848256889119e+00, TOL));
assert(isequalRel(m,  1.708338309375e+00, TOL));

[e0, m] = newtonnu(1.454720410785e-01, 2.209343273602e+00);
assert(isequalRel(e0, 2.086712434391e+00, TOL));
assert(isequalRel(m,  1.960174868014e+00, TOL));
# 6251

[e0, m] = newtonnu(2.843508525266e-03, 5.878252404382e+00);
assert(isequalRel(e0, -4.038141422773e-01, TOL));
assert(isequalRel(m,  5.880488460609e+00, TOL));

[e0, m] = newtonnu(3.376171121503e-03, 1.450679689026e+00);
assert(isequalRel(e0, 1.447328515807e+00, TOL));
assert(isequalRel(m,  1.443978045695e+00, TOL));

[e0, m] = newtonnu(3.544166013612e-03, 3.280757728716e+00);
assert(isequalRel(e0, -3.001935078983e+00, TOL));
assert(isequalRel(m,  3.281743590394e+00, TOL));

[e0, m] = newtonnu(3.600050068409e-03, 5.017749103053e+00);
assert(isequalRel(e0, -1.262004546185e+00, TOL));
assert(isequalRel(m,  5.024610533924e+00, TOL));

[e0, m] = newtonnu(4.248428830090e-03, 7.050316851707e-01);
assert(isequalRel(e0, 7.022828933235e-01, TOL));
assert(isequalRel(m,  6.995385694840e-01, TOL));

[e0, m] = newtonnu(4.550610606204e-03, 2.746082539211e+00);
assert(isequalRel(e0, 2.744325586999e+00, TOL));
assert(isequalRel(m,  2.742564957154e+00, TOL));

[e0, m] = newtonnu(3.929277166681e-03, 4.642871348913e+00);
assert(isequalRel(e0, -1.636393626680e+00, TOL));
assert(isequalRel(m,  4.650712506846e+00, TOL));

[e0, m] = newtonnu(3.678356420796e-03, 2.327986184503e-01);
assert(isequalRel(e0, 2.319515290377e-01, TOL));
assert(isequalRel(m,  2.311059586657e-01, TOL));

[e0, m] = newtonnu(3.768503158891e-03, 2.197801244803e+00);
assert(isequalRel(e0, 2.194746168633e+00, TOL));
assert(isequalRel(m,  2.191687737705e+00, TOL));

[e0, m] = newtonnu(3.094892579346e-03, 3.988588600513e+00);
assert(isequalRel(e0, -2.292275337606e+00, TOL));
assert(isequalRel(m,  3.993233706748e+00, TOL));

[e0, m] = newtonnu(2.843839523788e-03, 5.585413699649e+00);
assert(isequalRel(e0, -6.959463928446e-01, TOL));
assert(isequalRel(m,  5.589062134074e+00, TOL));

[e0, m] = newtonnu(3.546297390768e-03, 1.190045223729e+00);
assert(isequalRel(e0, 1.186755052311e+00, TOL));
assert(isequalRel(m,  1.183467074085e+00, TOL));

[e0, m] = newtonnu(3.871245429332e-03, 3.094940341490e+00);
assert(isequalRel(e0, 3.094759454018e+00, TOL));
assert(isequalRel(m,  3.094578217478e+00, TOL));

[e0, m] = newtonnu(3.830682076651e-03, 4.893163296023e+00);
assert(isequalRel(e0, -1.386255038754e+00, TOL));
assert(isequalRel(m,  4.900695907535e+00, TOL));

[e0, m] = newtonnu(4.291094373757e-03, 5.792132070155e-01);
assert(isequalRel(e0, 5.768686096083e-01, TOL));
assert(isequalRel(m,  5.745282383129e-01, TOL));

[e0, m] = newtonnu(4.500171741789e-03, 2.628295360431e+00);
assert(isequalRel(e0, 2.626081190485e+00, TOL));
assert(isequalRel(m,  2.623862696238e+00, TOL));

[e0, m] = newtonnu(3.728008119345e-03, 4.522332982372e+00);
assert(isequalRel(e0, -1.757190146260e+00, TOL));
assert(isequalRel(m,  4.529658595867e+00, TOL));

[e0, m] = newtonnu(3.314475452111e-03, 4.833955774302e-02);
assert(isequalRel(e0, 4.817966408982e-02, TOL));
assert(isequalRel(m,  4.802003554972e-02, TOL));

[e0, m] = newtonnu(3.476031515181e-03, 1.963288807041e+00);
assert(isequalRel(e0, 1.960074954471e+00, TOL));
assert(isequalRel(m,  1.956858988939e+00, TOL));

[e0, m] = newtonnu(3.061988804711e-03, 3.719587170064e+00);
assert(isequalRel(e0, -2.561923082393e+00, TOL));
assert(isequalRel(m,  3.722939421547e+00, TOL));

[e0, m] = newtonnu(3.018592697200e-03, 5.324365580014e+00);
assert(isequalRel(e0, -9.563511026201e-01, TOL));
assert(isequalRel(m,  5.329300676741e+00, TOL));

[e0, m] = newtonnu(3.799018634628e-03, 9.741987854508e-01);
assert(isequalRel(e0, 9.710593812987e-01, TOL));
assert(isequalRel(m,  9.679233517514e-01, TOL));

[e0, m] = newtonnu(4.171484128490e-03, 2.945319559456e+00);
assert(isequalRel(e0, 2.944504384945e+00, TOL));
assert(isequalRel(m,  2.943687546606e+00, TOL));

[e0, m] = newtonnu(3.961521766570e-03, 4.789304733122e+00);
assert(isequalRel(e0, -1.489931355478e+00, TOL));
assert(isequalRel(m,  4.797202528045e+00, TOL));
# 8195

[e0, m] = newtonnu(6.866679038576e-01, 2.613009397654e+00);
assert(isequalRel(e0, 2.020259327952e+00, TOL));
assert(isequalRel(m,  1.401790903669e+00, TOL));

[e0, m] = newtonnu(6.867283634668e-01, 2.961126539238e+00);
assert(isequalRel(e0, 2.727710756785e+00, TOL));
assert(isequalRel(m,  2.451531625324e+00, TOL));

[e0, m] = newtonnu(6.867381437714e-01, 3.234035448475e+00);
assert(isequalRel(e0, -2.927750569629e+00, TOL));
assert(isequalRel(m,  3.501171579310e+00, TOL));

[e0, m] = newtonnu(6.866895933949e-01, 3.541952899055e+00);
assert(isequalRel(e0, -2.261613026813e+00, TOL));
assert(isequalRel(m,  4.550821733826e+00, TOL));

[e0, m] = newtonnu(6.865986595814e-01, 4.127179172619e+00);
assert(isequalRel(e0, -1.352842161930e+00, TOL));
assert(isequalRel(m,  5.600698163503e+00, TOL));

[e0, m] = newtonnu(6.866592555576e-01, 1.695649454174e+00);
assert(isequalRel(e0, 9.088009790091e-01, TOL));
assert(isequalRel(m,  3.671866268738e-01, TOL));

[e0, m] = newtonnu(6.866249970949e-01, 2.619601954539e+00);
assert(isequalRel(e0, 2.032139114172e+00, TOL));
assert(isequalRel(m,  1.417296941539e+00, TOL));

[e0, m] = newtonnu(6.866856337694e-01, 2.965349613386e+00);
assert(isequalRel(e0, 2.737212459312e+00, TOL));
assert(isequalRel(m,  2.467036669796e+00, TOL));

[e0, m] = newtonnu(6.866954129400e-01, 3.238085269989e+00);
assert(isequalRel(e0, -2.918462081655e+00, TOL));
assert(isequalRel(m,  3.516677703844e+00, TOL));

[e0, m] = newtonnu(6.866467632282e-01, 3.547474198617e+00);
assert(isequalRel(e0, -2.250779727158e+00, TOL));
assert(isequalRel(m,  4.566330537490e+00, TOL));

[e0, m] = newtonnu(6.865576422170e-01, 4.143072416289e+00);
assert(isequalRel(e0, -1.334438323568e+00, TOL));
assert(isequalRel(m,  5.616216430647e+00, TOL));

[e0, m] = newtonnu(6.866127327248e-01, 1.728437343991e+00);
assert(isequalRel(e0, 9.352598690906e-01, TOL));
assert(isequalRel(m,  3.827059612942e-01, TOL));

[e0, m] = newtonnu(6.865870212103e-01, 2.626132585540e+00);
assert(isequalRel(e0, 2.043963913744e+00, TOL));
assert(isequalRel(m,  1.432812715882e+00, TOL));

[e0, m] = newtonnu(6.866479054501e-01, 2.969565037590e+00);
assert(isequalRel(e0, 2.746706788210e+00, TOL));
assert(isequalRel(m,  2.482551388602e+00, TOL));

[e0, m] = newtonnu(6.866577546707e-01, 3.242144019262e+00);
assert(isequalRel(e0, -2.909160234363e+00, TOL));
assert(isequalRel(m,  3.532193398632e+00, TOL));

[e0, m] = newtonnu(6.866090696296e-01, 3.553039212915e+00);
assert(isequalRel(e0, -2.239898258322e+00, TOL));
assert(isequalRel(m,  4.581848810139e+00, TOL));

[e0, m] = newtonnu(6.865219861167e-01, 4.159436417334e+00);
assert(isequalRel(e0, -1.315756242332e+00, TOL));
assert(isequalRel(m,  5.631744250455e+00, TOL));

[e0, m] = newtonnu(6.865718043358e-01, 1.759697486449e+00);
assert(isequalRel(e0, 9.611028295108e-01, TOL));
assert(isequalRel(m,  3.982350854065e-01, TOL));

[e0, m] = newtonnu(6.865543454928e-01, 2.632603055222e+00);
assert(isequalRel(e0, 2.055734571975e+00, TOL));
assert(isequalRel(m,  1.448337376153e+00, TOL));

[e0, m] = newtonnu(6.866155039773e-01, 2.973772889409e+00);
assert(isequalRel(e0, 2.756193543430e+00, TOL));
assert(isequalRel(m,  2.498074862607e+00, TOL));

[e0, m] = newtonnu(6.866254503966e-01, 3.246211532620e+00);
assert(isequalRel(e0, -2.899845383805e+00, TOL));
assert(isequalRel(m,  3.547717680073e+00, TOL));

[e0, m] = newtonnu(6.865767504906e-01, 3.558648318838e+00);
assert(isequalRel(e0, -2.228968584018e+00, TOL));
assert(isequalRel(m,  4.597375507549e+00, TOL));

[e0, m] = newtonnu(6.864919004431e-01, 4.176296398714e+00);
assert(isequalRel(e0, -1.296786064341e+00, TOL));
assert(isequalRel(m,  5.647280523859e+00, TOL));

[e0, m] = newtonnu(6.865366485917e-01, 1.789541978850e+00);
assert(isequalRel(e0, 9.863603307447e-01, TOL));
assert(isequalRel(m,  4.137727036757e-01, TOL));
# 9880

[e0, m] = newtonnu(7.074789674872e-01, 2.613353781448e+00);
assert(isequalRel(e0, 1.984097373815e+00, TOL));
assert(isequalRel(m,  1.336188135260e+00, TOL));

[e0, m] = newtonnu(7.075425806213e-01, 2.953696643023e+00);
assert(isequalRel(e0, 2.693867477717e+00, TOL));
assert(isequalRel(m,  2.387560937341e+00, TOL));

[e0, m] = newtonnu(7.075501192075e-01, 3.213941865671e+00);
assert(isequalRel(e0, -2.967138666750e+00, TOL));
assert(isequalRel(m,  3.438856424540e+00, TOL));

[e0, m] = newtonnu(7.075018577910e-01, 3.501203792419e+00);
assert(isequalRel(e0, -2.313960934883e+00, TOL));
assert(isequalRel(m,  4.490179928072e+00, TOL));

[e0, m] = newtonnu(7.074137034860e-01, 4.021124830156e+00);
assert(isequalRel(e0, -1.443127233313e+00, TOL));
assert(isequalRel(m,  5.541714395334e+00, TOL));

[e0, m] = newtonnu(7.074880079976e-01, 1.638267445445e+00);
assert(isequalRel(e0, 8.337176182159e-01, TOL));
assert(isequalRel(m,  3.098685960655e-01, TOL));

[e0, m] = newtonnu(7.074533218510e-01, 2.624123778438e+00);
assert(isequalRel(e0, 2.003809886512e+00, TOL));
assert(isequalRel(m,  1.361650714943e+00, TOL));

[e0, m] = newtonnu(7.075145068396e-01, 2.960372493246e+00);
assert(isequalRel(e0, 2.709385359246e+00, TOL));
assert(isequalRel(m,  2.413024413463e+00, TOL));

[e0, m] = newtonnu(7.075196023956e-01, 3.220205927721e+00);
assert(isequalRel(e0, -2.952117584532e+00, TOL));
assert(isequalRel(m,  3.464324359213e+00, TOL));

[e0, m] = newtonnu(7.074689009380e-01, 3.509519813311e+00);
assert(isequalRel(e0, -2.296663494009e+00, TOL));
assert(isequalRel(m,  4.515654848025e+00, TOL));

[e0, m] = newtonnu(7.073807397407e-01, 4.043449649444e+00);
assert(isequalRel(e0, -1.414767295713e+00, TOL));
assert(isequalRel(m,  5.567205593100e+00, TOL));

[e0, m] = newtonnu(7.074407245305e-01, 1.700573304283e+00);
assert(isequalRel(e0, 8.811291040794e-01, TOL));
assert(isequalRel(m,  3.353684409392e-01, TOL));

[e0, m] = newtonnu(7.074213601086e-01, 2.634691028511e+00);
assert(isequalRel(e0, 2.023350663209e+00, TOL));
assert(isequalRel(m,  1.387143205884e+00, TOL));

[e0, m] = newtonnu(7.074803209950e-01, 2.967017186326e+00);
assert(isequalRel(e0, 2.724877433271e+00, TOL));
assert(isequalRel(m,  2.438518432461e+00, TOL));

[e0, m] = newtonnu(7.074831964281e-01, 3.226494742039e+00);
assert(isequalRel(e0, -2.937059155838e+00, TOL));
assert(isequalRel(m,  3.489823348923e+00, TOL));

[e0, m] = newtonnu(7.074302810557e-01, 3.517957445017e+00);
assert(isequalRel(e0, -2.279232554485e+00, TOL));
assert(isequalRel(m,  4.541161349068e+00, TOL));

[e0, m] = newtonnu(7.073426782139e-01, 4.066845514948e+00);
assert(isequalRel(e0, -1.385718614044e+00, TOL));
assert(isequalRel(m,  5.592729339613e+00, TOL));

[e0, m] = newtonnu(7.073898343357e-01, 1.757450772531e+00);
assert(isequalRel(e0, 9.264595436735e-01, TOL));
assert(isequalRel(m,  3.609025622811e-01, TOL));

[e0, m] = newtonnu(7.073844594661e-01, 2.645067878270e+00);
assert(isequalRel(e0, 2.042729306308e+00, TOL));
assert(isequalRel(m,  1.412668190983e+00, TOL));

[e0, m] = newtonnu(7.074414286305e-01, 2.973633805192e+00);
assert(isequalRel(e0, 2.740347340465e+00, TOL));
assert(isequalRel(m,  2.464045443944e+00, TOL));

[e0, m] = newtonnu(7.074423311942e-01, 3.232810138934e+00);
assert(isequalRel(e0, -2.921960498350e+00, TOL));
assert(isequalRel(m,  3.515355714905e+00, TOL));

[e0, m] = newtonnu(7.073874505795e-01, 3.526521093421e+00);
assert(isequalRel(e0, -2.261662989335e+00, TOL));
assert(isequalRel(m,  4.566701625887e+00, TOL));

[e0, m] = newtonnu(7.073010396884e-01, 4.091409233514e+00);
assert(isequalRel(e0, -1.355934909694e+00, TOL));
assert(isequalRel(m,  5.618287722502e+00, TOL));

[e0, m] = newtonnu(7.073368998088e-01, 1.809626469631e+00);
assert(isequalRel(e0, 9.699069515904e-01, TOL));
assert(isequalRel(m,  3.864720570250e-01, TOL));
# 9998

[e0, m] = newtonnu(2.716148207783e-02, 5.781740115703e+00);
assert(isequalRel(e0, -4.885403307166e-01, TOL));
assert(isequalRel(m,  5.807392877827e+00, TOL));

[e0, m] = newtonnu(2.716659459679e-02, 6.101465692941e+00);
assert(isequalRel(e0, -1.768738888294e-01, TOL));
assert(isequalRel(m,  6.111091464856e+00, TOL));

[e0, m] = newtonnu(2.716755405657e-02, 1.389307149831e-01);
assert(isequalRel(e0, 1.352177074359e-01, TOL));
assert(isequalRel(m,  1.315553572091e-01, TOL));

[e0, m] = newtonnu(2.716378367535e-02, 4.588417955321e-01);
assert(isequalRel(e0, 4.469533982133e-01, TOL));
assert(isequalRel(m,  4.352126617664e-01, TOL));

[e0, m] = newtonnu(2.715556395731e-02, 7.764561441336e-01);
assert(isequalRel(e0, 7.576064037511e-01, TOL));
assert(isequalRel(m,  7.389455208803e-01, TOL));

[e0, m] = newtonnu(2.714407348493e-02, 1.090500167808e+00);
assert(isequalRel(e0, 1.066574003483e+00, TOL));
assert(isequalRel(m,  1.042807997579e+00, TOL));

[e0, m] = newtonnu(2.713093521576e-02, 1.400107160725e+00);
assert(isequalRel(e0, 1.373428643431e+00, TOL));
assert(isequalRel(m,  1.346824424330e+00, TOL));

[e0, m] = newtonnu(2.711763450764e-02, 1.704879207196e+00);
assert(isequalRel(e0, 1.677952837997e+00, TOL));
assert(isequalRel(m,  1.650990743932e+00, TOL));

[e0, m] = newtonnu(2.710521487919e-02, 2.004889883980e+00);
assert(isequalRel(e0, 1.980154348505e+00, TOL));
assert(isequalRel(m,  1.955288660470e+00, TOL));

[e0, m] = newtonnu(2.709435717698e-02, 2.300636343814e+00);
assert(isequalRel(e0, 2.280256305522e+00, TOL));
assert(isequalRel(m,  2.259699443657e+00, TOL));

[e0, m] = newtonnu(2.708564805003e-02, 2.592956156753e+00);
assert(isequalRel(e0, 2.578662787795e+00, TOL));
assert(isequalRel(m,  2.564208091348e+00, TOL));

[e0, m] = newtonnu(2.707976836312e-02, 2.882928008781e+00);
assert(isequalRel(e0, 2.875908133917e+00, TOL));
assert(isequalRel(m,  2.868797803699e+00, TOL));

[e0, m] = newtonnu(2.707745330068e-02, 3.171773308210e+00);
assert(isequalRel(e0, -3.110583544821e+00, TOL));
assert(isequalRel(m,  3.173441275497e+00, TOL));
# 11801

[e0, m] = newtonnu(7.316022415966e-01, 3.288549055618e+00);
assert(isequalRel(e0, -2.771917696774e+00, TOL));
assert(isequalRel(m,  3.775604547447e+00, TOL));

[e0, m] = newtonnu(7.309987995342e-01, 2.539391847291e+00);
assert(isequalRel(e0, 1.807131007853e+00, TOL));
assert(isequalRel(m,  1.096451998254e+00, TOL));

[e0, m] = newtonnu(7.305135354946e-01, 3.550285442989e+00);
assert(isequalRel(e0, -2.174449759259e+00, TOL));
assert(isequalRel(m,  4.710143401486e+00, TOL));

[e0, m] = newtonnu(7.298769657158e-01, 2.876960270493e+00);
assert(isequalRel(e0, 2.491840505066e+00, TOL));
assert(isequalRel(m,  2.050272913542e+00, TOL));
# 14128

[e0, m] = newtonnu(1.211244188429e-03, 2.423482789142e-02);
assert(isequalRel(e0, 2.420549421947e-02, TOL));
assert(isequalRel(m,  2.417617831819e-02, TOL));

[e0, m] = newtonnu(1.204966652741e-03, 5.289647058498e-01);
assert(isequalRel(e0, 5.283569476242e-01, TOL));
assert(isequalRel(m,  5.277495058332e-01, TOL));

[e0, m] = newtonnu(1.192304030227e-03, 1.037694577457e+00);
assert(isequalRel(e0, 1.036668034368e+00, TOL));
assert(isequalRel(m,  1.035641803106e+00, TOL));

[e0, m] = newtonnu(1.175943608200e-03, 1.551150302261e+00);
assert(isequalRel(e0, 1.549974598892e+00, TOL));
assert(isequalRel(m,  1.548798910187e+00, TOL));

[e0, m] = newtonnu(1.158121853711e-03, 2.070994646747e+00);
assert(isequalRel(e0, 2.069978126779e+00, TOL));
assert(isequalRel(m,  2.068961325284e+00, TOL));

[e0, m] = newtonnu(1.143952893278e-03, 2.598631981531e+00);
assert(isequalRel(e0, 2.598040642045e+00, TOL));
assert(isequalRel(m,  2.597449013251e+00, TOL));

[e0, m] = newtonnu(1.139311322585e-03, 3.131180299349e+00);
assert(isequalRel(e0, 3.131168429885e+00, TOL));
assert(isequalRel(m,  3.131156553664e+00, TOL));

[e0, m] = newtonnu(1.145149449569e-03, 3.662685446796e+00);
assert(isequalRel(e0, -2.619929489302e+00, TOL));
assert(isequalRel(m,  3.663826471930e+00, TOL));

[e0, m] = newtonnu(1.157830776929e-03, 4.189544099786e+00);
assert(isequalRel(e0, -2.092637770046e+00, TOL));
assert(isequalRel(m,  4.191551263798e+00, TOL));

[e0, m] = newtonnu(1.174172010601e-03, 4.711085143769e+00);
assert(isequalRel(e0, -1.570925991230e+00, TOL));
assert(isequalRel(m,  4.713433487951e+00, TOL));

[e0, m] = newtonnu(1.191780771710e-03, 5.226262443973e+00);
assert(isequalRel(e0, -1.055885308100e+00, TOL));
assert(isequalRel(m,  5.228337249439e+00, TOL));

[e0, m] = newtonnu(1.205845104887e-03, 5.734321009877e+00);
assert(isequalRel(e0, -5.482355086072e-01, TOL));
assert(isequalRel(m,  5.735578263509e+00, TOL));

[e0, m] = newtonnu(1.210865633436e-03, 6.237991092039e+00);
assert(isequalRel(e0, -4.513954269262e-02, TOL));
assert(isequalRel(m,  6.238100403848e+00, TOL));

[e0, m] = newtonnu(1.205766439863e-03, 4.591253600639e-01);
assert(isequalRel(e0, 4.585912959803e-01, TOL));
assert(isequalRel(m,  4.580575207886e-01, TOL));

[e0, m] = newtonnu(1.193775211743e-03, 9.672534794013e-01);
assert(isequalRel(e0, 9.662709410443e-01, TOL));
assert(isequalRel(m,  9.652887362883e-01, TOL));

[e0, m] = newtonnu(1.177820064704e-03, 1.480000229664e+00);
assert(isequalRel(e0, 1.478827323557e+00, TOL));
assert(isequalRel(m,  1.477654481158e+00, TOL));

[e0, m] = newtonnu(1.159970274751e-03, 1.998835589395e+00);
assert(isequalRel(e0, 1.997780015661e+00, TOL));
assert(isequalRel(m,  1.996724188649e+00, TOL));

[e0, m] = newtonnu(1.144897789529e-03, 2.525463771786e+00);
assert(isequalRel(e0, 2.524801848593e+00, TOL));
assert(isequalRel(m,  2.524139616495e+00, TOL));

[e0, m] = newtonnu(1.138736282854e-03, 3.057695076183e+00);
assert(isequalRel(e0, 3.057599596803e+00, TOL));
assert(isequalRel(m,  3.057504063283e+00, TOL));

[e0, m] = newtonnu(1.143295172548e-03, 3.589668189295e+00);
assert(isequalRel(e0, -2.693021550525e+00, TOL));
assert(isequalRel(m,  3.590659579127e+00, TOL));

[e0, m] = newtonnu(1.155268452626e-03, 4.117250443365e+00);
assert(isequalRel(e0, -2.164977909555e+00, TOL));
assert(isequalRel(m,  4.119164661096e+00, TOL));

[e0, m] = newtonnu(1.171225937288e-03, 4.639569211560e+00);
assert(isequalRel(e0, -1.642447923612e+00, TOL));
assert(isequalRel(m,  4.641905604283e+00, TOL));

[e0, m] = newtonnu(1.188876403708e-03, 5.155722578143e+00);
assert(isequalRel(e0, -1.126389058700e+00, TOL));
assert(isequalRel(m,  5.157869644151e+00, TOL));

[e0, m] = newtonnu(1.203799374030e-03, 5.664696981605e+00);
assert(isequalRel(e0, -6.177906995606e-01, TOL));
assert(isequalRel(m,  5.666091891122e+00, TOL));
# 16925

[e0, m] = newtonnu(5.588503598295e-01, 3.228842773114e+00);
assert(isequalRel(e0, -2.977843536462e+00, TOL));
assert(isequalRel(m,  3.396444611351e+00, TOL));

[e0, m] = newtonnu(5.585233356674e-01, 5.118810788625e+00);
assert(isequalRel(e0, -6.739995370803e-01, TOL));
assert(isequalRel(m,  5.957769084386e+00, TOL));

[e0, m] = newtonnu(5.580621374190e-01, 2.819537459986e+00);
assert(isequalRel(e0, 2.549531730254e+00, TOL));
assert(isequalRel(m,  2.238092684462e+00, TOL));

[e0, m] = newtonnu(5.578477826700e-01, 3.807540447635e+00);
assert(isequalRel(e0, -1.989994285351e+00, TOL));
assert(isequalRel(m,  4.802737937689e+00, TOL));

[e0, m] = newtonnu(5.573540142195e-01, 2.221250150424e+00);
assert(isequalRel(e0, 1.643606196665e+00, TOL));
assert(isequalRel(m,  1.087728873960e+00, TOL));

[e0, m] = newtonnu(5.573812749174e-01, 3.320785430055e+00);
assert(isequalRel(e0, -2.807700525931e+00, TOL));
assert(isequalRel(m,  3.658151267708e+00, TOL));

[e0, m] = newtonnu(5.567523549887e-01, 6.060784968882e+00);
assert(isequalRel(e0, -1.190230401788e-01, TOL));
assert(isequalRel(m,  6.230272275488e+00, TOL));

[e0, m] = newtonnu(5.566328651392e-01, 2.925115255302e+00);
assert(isequalRel(e0, 2.739868148757e+00, TOL));
assert(isequalRel(m,  2.522221282650e+00, TOL));

[e0, m] = newtonnu(5.562657187843e-01, 3.992590610128e+00);
assert(isequalRel(e0, -1.734112192280e+00, TOL));
assert(isequalRel(m,  5.097936928032e+00, TOL));

[e0, m] = newtonnu(5.558490397474e-01, 2.423750578165e+00);
assert(isequalRel(e0, 1.917217901990e+00, TOL));
assert(isequalRel(m,  1.394389780453e+00, TOL));

[e0, m] = newtonnu(5.558964845678e-01, 3.438269293796e+00);
assert(isequalRel(e0, -2.596118489327e+00, TOL));
assert(isequalRel(m,  3.975478979288e+00, TOL));

[e0, m] = newtonnu(5.553207140524e-01, 1.018738373234e+00);
assert(isequalRel(e0, 5.804332042561e-01, TOL));
assert(isequalRel(m,  2.759029633628e-01, TOL));
# 20413

[e0, m] = newtonnu(7.787670244171e-01, 2.756537247626e+00);
assert(isequalRel(e0, 2.131665152184e+00, TOL));
assert(isequalRel(m,  1.472210466701e+00, TOL));

[e0, m] = newtonnu(7.787318278023e-01, 2.795498343882e+00);
assert(isequalRel(e0, 2.221359885948e+00, TOL));
assert(isequalRel(m,  1.601689785835e+00, TOL));

[e0, m] = newtonnu(7.786982908955e-01, 2.831678475947e+00);
assert(isequalRel(e0, 2.307792741023e+00, TOL));
assert(isequalRel(m,  1.731174049415e+00, TOL));

[e0, m] = newtonnu(7.786664754119e-01, 2.865606725861e+00);
assert(isequalRel(e0, 2.391490433266e+00, TOL));
assert(isequalRel(m,  1.860662946097e+00, TOL));

[e0, m] = newtonnu(7.786360598891e-01, 2.897697282650e+00);
assert(isequalRel(e0, 2.472887575894e+00, TOL));
assert(isequalRel(m,  1.990156205250e+00, TOL));

[e0, m] = newtonnu(7.786078600369e-01, 2.928282952468e+00);
assert(isequalRel(e0, 2.552350213864e+00, TOL));
assert(isequalRel(m,  2.119653396692e+00, TOL));

[e0, m] = newtonnu(7.785815482761e-01, 2.957635499184e+00);
assert(isequalRel(e0, 2.630191644530e+00, TOL));
assert(isequalRel(m,  2.249154231614e+00, TOL));

[e0, m] = newtonnu(7.785571740818e-01, 2.985982433197e+00);
assert(isequalRel(e0, 2.706685147711e+00, TOL));
assert(isequalRel(m,  2.378658363389e+00, TOL));

[e0, m] = newtonnu(7.785347838381e-01, 3.013517951608e+00);
assert(isequalRel(e0, 2.782073090457e+00, TOL));
assert(isequalRel(m,  2.508165437906e+00, TOL));

[e0, m] = newtonnu(7.785144207609e-01, 3.040411304260e+00);
assert(isequalRel(e0, 2.856574092018e+00, TOL));
assert(isequalRel(m,  2.637675094174e+00, TOL));

[e0, m] = newtonnu(7.784961248099e-01, 3.066813191577e+00);
assert(isequalRel(e0, 2.930388730377e+00, TOL));
assert(isequalRel(m,  2.767186964960e+00, TOL));

[e0, m] = newtonnu(7.784799325977e-01, 3.092860814165e+00);
assert(isequalRel(e0, 3.003704221097e+00, TOL));
assert(isequalRel(m,  2.896700677442e+00, TOL));

[e0, m] = newtonnu(7.784658772980e-01, 3.118682005899e+00);
assert(isequalRel(e0, 3.076698380864e+00, TOL));
assert(isequalRel(m,  3.026215853894e+00, TOL));

[e0, m] = newtonnu(7.784539885554e-01, 3.144398764351e+00);
assert(isequalRel(e0, -3.133642195446e+00, TOL));
assert(isequalRel(m,  3.155732112386e+00, TOL));

[e0, m] = newtonnu(7.784442923988e-01, 3.170130419862e+00);
assert(isequalRel(e0, -3.060777713141e+00, TOL));
assert(isequalRel(m,  3.285249067500e+00, TOL));

[e0, m] = newtonnu(7.784368111594e-01, 3.195996643139e+00);
assert(isequalRel(e0, -2.987723959261e+00, TOL));
assert(isequalRel(m,  3.414766331066e+00, TOL));

[e0, m] = newtonnu(7.784315633925e-01, 3.222120473262e+00);
assert(isequalRel(e0, -2.914307995972e+00, TOL));
assert(isequalRel(m,  3.544283512910e+00, TOL));

[e0, m] = newtonnu(7.784285638045e-01, 3.248631550250e+00);
assert(isequalRel(e0, -2.840350224300e+00, TOL));
assert(isequalRel(m,  3.673800221610e+00, TOL));

[e0, m] = newtonnu(7.784278231833e-01, 3.275669759147e+00);
assert(isequalRel(e0, -2.765660810361e+00, TOL));
assert(isequalRel(m,  3.803316065264e+00, TOL));

[e0, m] = newtonnu(7.784293483318e-01, 3.303389540241e+00);
assert(isequalRel(e0, -2.690035584593e+00, TOL));
assert(isequalRel(m,  3.932830652264e+00, TOL));

[e0, m] = newtonnu(7.784331420011e-01, 3.331965201172e+00);
assert(isequalRel(e0, -2.613251163757e+00, TOL));
assert(isequalRel(m,  4.062343592070e+00, TOL));

[e0, m] = newtonnu(7.784392028199e-01, 3.361597697789e+00);
assert(isequalRel(e0, -2.535058961257e+00, TOL));
assert(isequalRel(m,  4.191854495991e+00, TOL));

[e0, m] = newtonnu(7.784475252140e-01, 3.392523559727e+00);
assert(isequalRel(e0, -2.455177620809e+00, TOL));
assert(isequalRel(m,  4.321362977954e+00, TOL));

[e0, m] = newtonnu(7.784580993053e-01, 3.425026973822e+00);
assert(isequalRel(e0, -2.373283205275e+00, TOL));
assert(isequalRel(m,  4.450868655273e+00, TOL));

[e0, m] = newtonnu(7.784709107731e-01, 3.459456592715e+00);
assert(isequalRel(e0, -2.288996151076e+00, TOL));
assert(isequalRel(m,  4.580371149403e+00, TOL));
# 21897

[e0, m] = newtonnu(7.418713178843e-01, 2.687451322260e+00);
assert(isequalRel(e0, 2.060438630814e+00, TOL));
assert(isequalRel(m,  1.405736344711e+00, TOL));

[e0, m] = newtonnu(7.419337660802e-01, 2.987505710749e+00);
assert(isequalRel(e0, 2.745722754815e+00, TOL));
assert(isequalRel(m,  2.459624965475e+00, TOL));

[e0, m] = newtonnu(7.419644108308e-01, 3.224276172793e+00);
assert(isequalRel(e0, -2.927460249785e+00, TOL));
assert(isequalRel(m,  3.513392292221e+00, TOL));

[e0, m] = newtonnu(7.419481115307e-01, 3.492015957339e+00);
assert(isequalRel(e0, -2.279410450834e+00, TOL));
assert(isequalRel(m,  4.567109724343e+00, TOL));

[e0, m] = newtonnu(7.418581430988e-01, 4.004886348835e+00);
assert(isequalRel(e0, -1.392342932897e+00, TOL));
assert(isequalRel(m,  5.620919368097e+00, TOL));

[e0, m] = newtonnu(7.418951234893e-01, 1.942770864677e+00);
assert(isequalRel(e0, 1.026099336304e+00, TOL));
assert(isequalRel(m,  3.915680573883e-01, TOL));

[e0, m] = newtonnu(7.418764474845e-01, 2.701998565017e+00);
assert(isequalRel(e0, 2.089900680155e+00, TOL));
assert(isequalRel(m,  1.445756171797e+00, TOL));

[e0, m] = newtonnu(7.419379802954e-01, 2.996922400116e+00);
assert(isequalRel(e0, 2.769425329935e+00, TOL));
assert(isequalRel(m,  2.499630537234e+00, TOL));

[e0, m] = newtonnu(7.419670075317e-01, 3.233306439119e+00);
assert(isequalRel(e0, -2.904249834460e+00, TOL));
assert(isequalRel(m,  3.553387326560e+00, TOL));

[e0, m] = newtonnu(7.419483855201e-01, 3.504335932164e+00);
assert(isequalRel(e0, -2.252303581800e+00, TOL));
assert(isequalRel(m,  4.607096710975e+00, TOL));

[e0, m] = newtonnu(7.418560262900e-01, 4.041909597073e+00);
assert(isequalRel(e0, -1.345356100353e+00, TOL));
assert(isequalRel(m,  5.660913156366e+00, TOL));

[e0, m] = newtonnu(7.418842753170e-01, 2.009102882130e+00);
assert(isequalRel(e0, 1.088994490396e+00, TOL));
assert(isequalRel(m,  4.315652579809e-01, TOL));

[e0, m] = newtonnu(7.418809620621e-01, 2.716133347635e+00);
assert(isequalRel(e0, 2.118925849628e+00, TOL));
assert(isequalRel(m,  1.485729925734e+00, TOL));

[e0, m] = newtonnu(7.419415750629e-01, 3.006257125092e+00);
assert(isequalRel(e0, 2.793011280787e+00, TOL));
assert(isequalRel(m,  2.539590123051e+00, TOL));

[e0, m] = newtonnu(7.419690216489e-01, 3.242368909528e+00);
assert(isequalRel(e0, -2.881011487452e+00, TOL));
assert(isequalRel(m,  3.593336307449e+00, TOL));

[e0, m] = newtonnu(7.419480886518e-01, 3.516908405580e+00);
assert(isequalRel(e0, -2.224936476777e+00, TOL));
assert(isequalRel(m,  4.647037629019e+00, TOL));

[e0, m] = newtonnu(7.418539473630e-01, 4.082099274567e+00);
assert(isequalRel(e0, -1.296428685507e+00, TOL));
assert(isequalRel(m,  5.700862798318e+00, TOL));

[e0, m] = newtonnu(7.418755898522e-01, 2.067738535875e+00);
assert(isequalRel(e0, 1.148095891832e+00, TOL));
assert(isequalRel(m,  4.715168664700e-01, TOL));

[e0, m] = newtonnu(7.418851730991e-01, 2.729884161534e+00);
assert(isequalRel(e0, 2.147537543031e+00, TOL));
assert(isequalRel(m,  1.525656676188e+00, TOL));

[e0, m] = newtonnu(7.419448675302e-01, 3.015515314817e+00);
assert(isequalRel(e0, 2.816486755941e+00, TOL));
assert(isequalRel(m,  2.579502785323e+00, TOL));

[e0, m] = newtonnu(7.419707694028e-01, 3.251467701041e+00);
assert(isequalRel(e0, -2.857740303804e+00, TOL));
assert(isequalRel(m,  3.633238302750e+00, TOL));

[e0, m] = newtonnu(7.419475344599e-01, 3.529749790986e+00);
assert(isequalRel(e0, -2.197294697318e+00, TOL));
assert(isequalRel(m,  4.686931561882e+00, TOL));

[e0, m] = newtonnu(7.418524611590e-01, 4.125998165449e+00);
assert(isequalRel(e0, -1.245322222785e+00, TOL));
assert(isequalRel(m,  5.740767723337e+00, TOL));

[e0, m] = newtonnu(7.418690431082e-01, 2.120113766971e+00);
assert(isequalRel(e0, 1.203920733653e+00, TOL));
assert(isequalRel(m,  5.114211265811e-01, TOL));
# 22312

[e0, m] = newtonnu(2.675181425237e-02, 5.290184034854e+00);
assert(isequalRel(e0, -9.707515982488e-01, TOL));
assert(isequalRel(m,  5.334512258340e+00, TOL));

[e0, m] = newtonnu(2.439822350749e-02, 5.029815553106e-01);
assert(isequalRel(e0, 4.913434281590e-01, TOL));
assert(isequalRel(m,  4.798320824675e-01, TOL));

[e0, m] = newtonnu(2.336377341457e-02, 1.883160080065e+00);
assert(isequalRel(e0, 1.860844649395e+00, TOL));
assert(isequalRel(m,  1.838456779477e+00, TOL));

[e0, m] = newtonnu(2.364469118874e-02, 3.250644890537e+00);
assert(isequalRel(e0, -3.029936048462e+00, TOL));
assert(isequalRel(m,  3.255883862338e+00, TOL));

[e0, m] = newtonnu(2.100327812399e-02, 4.665716463652e+00);
assert(isequalRel(e0, -1.596476606959e+00, TOL));
assert(isequalRel(m,  4.707705053138e+00, TOL));

[e0, m] = newtonnu(1.874584407606e-02, 6.058390627524e+00);
assert(isequalRel(e0, -2.206535941986e-01, TOL));
assert(isequalRel(m,  6.066634567460e+00, TOL));

[e0, m] = newtonnu(1.892815082464e-02, 1.235065384670e+00);
assert(isequalRel(e0, 1.217248427872e+00, TOL));
assert(isequalRel(m,  1.199490978700e+00, TOL));

[e0, m] = newtonnu(1.773690758731e-02, 2.692951932245e+00);
assert(isequalRel(e0, 2.685196158742e+00, TOL));
assert(isequalRel(m,  2.677379214425e+00, TOL));

[e0, m] = newtonnu(1.568324749544e-02, 4.013896696360e+00);
assert(isequalRel(e0, -2.257216711005e+00, TOL));
assert(isequalRel(m,  4.038099895934e+00, TOL));

[e0, m] = newtonnu(1.481759681755e-02, 5.439861002541e+00);
assert(isequalRel(e0, -8.323114308968e-01, TOL));
assert(isequalRel(m,  5.461831330983e+00, TOL));

[e0, m] = newtonnu(1.305180624613e-02, 6.963097470980e-01);
assert(isequalRel(e0, 6.879798375972e-01, TOL));
assert(isequalRel(m,  6.796922298301e-01, TOL));

[e0, m] = newtonnu(1.155741395162e-02, 2.069636245312e+00);
assert(isequalRel(e0, 2.059458850841e+00, TOL));
assert(isequalRel(m,  2.049254099050e+00, TOL));

[e0, m] = newtonnu(1.165528802335e-02, 3.434663530073e+00);
assert(isequalRel(e0, -2.845135636307e+00, TOL));
assert(isequalRel(m,  3.441454572335e+00, TOL));

[e0, m] = newtonnu(9.673995701750e-03, 4.977688537268e+00);
assert(isequalRel(e0, -1.296172903117e+00, TOL));
assert(isequalRel(m,  4.996323889873e+00, TOL));

[e0, m] = newtonnu(6.812314294138e-03, 1.066893958335e-01);
assert(isequalRel(e0, 1.059664124081e-01, TOL));
assert(isequalRel(m,  1.052458861213e-01, TOL));

[e0, m] = newtonnu(6.901471261849e-03, 1.432509797150e+00);
assert(isequalRel(e0, 1.425677404982e+00, TOL));
assert(isequalRel(m,  1.418848477048e+00, TOL));

[e0, m] = newtonnu(6.637568551695e-03, 3.027959831728e+00);
assert(isequalRel(e0, 3.027204710020e+00, TOL));
assert(isequalRel(m,  3.026447106884e+00, TOL));

[e0, m] = newtonnu(3.791297143854e-03, 4.522842999589e+00);
assert(isequalRel(e0, -1.756617573611e+00, TOL));
assert(isequalRel(m,  4.530293762977e+00, TOL));

[e0, m] = newtonnu(2.272010245208e-03, 5.577829006748e+00);
assert(isequalRel(e0, -7.038846157609e-01, TOL));
assert(isequalRel(m,  5.580771099954e+00, TOL));

[e0, m] = newtonnu(1.961854943427e-03, 1.081212776615e+00);
assert(isequalRel(e0, 1.079482180249e+00, TOL));
assert(isequalRel(m,  1.077752386014e+00, TOL));

[e0, m] = newtonnu(7.438880868106e-04, 3.524034448127e+00);
assert(isequalRel(e0, -2.758873153847e+00, TOL));
assert(isequalRel(m,  3.524589954320e+00, TOL));

[e0, m] = newtonnu(1.204363911379e-03, 1.206589309560e+00);
assert(isequalRel(e0, 1.205464185119e+00, TOL));
assert(isequalRel(m,  1.204339303021e+00, TOL));
# *** error: t:= 494.202867 *** code =   1
# 22674

[e0, m] = newtonnu(7.544172890840e-01, 2.685592796046e+00);
assert(isequalRel(e0, 2.031335824792e+00, TOL));
assert(isequalRel(m,  1.355519116917e+00, TOL));

[e0, m] = newtonnu(7.544731574519e-01, 2.975858362533e+00);
assert(isequalRel(e0, 2.704630595709e+00, TOL));
assert(isequalRel(m,  2.385345914590e+00, TOL));

[e0, m] = newtonnu(7.544983721924e-01, 3.200101244478e+00);
assert(isequalRel(e0, -2.985454411948e+00, TOL));
assert(isequalRel(m,  3.415058858959e+00, TOL));

[e0, m] = newtonnu(7.544806038316e-01, 3.444664010443e+00);
assert(isequalRel(e0, -2.366457169440e+00, TOL));
assert(isequalRel(m,  4.444723368166e+00, TOL));

[e0, m] = newtonnu(7.543954150750e-01, 3.862708265350e+00);
assert(isequalRel(e0, -1.563122514175e+00, TOL));
assert(isequalRel(m,  5.474435995996e+00, TOL));

[e0, m] = newtonnu(7.544818233776e-01, 1.571691104696e+00);
assert(isequalRel(e0, 7.165195428979e-01, TOL));
assert(isequalRel(m,  2.210030004631e-01, TOL));

[e0, m] = newtonnu(7.543704233005e-01, 2.645476966811e+00);
assert(isequalRel(e0, 1.951513514987e+00, TOL));
assert(isequalRel(m,  1.251157238350e+00, TOL));

[e0, m] = newtonnu(7.544273950354e-01, 2.951373432026e+00);
assert(isequalRel(e0, 2.642263076950e+00, TOL));
assert(isequalRel(m,  2.281015266753e+00, TOL));

[e0, m] = newtonnu(7.544556439375e-01, 3.177710326905e+00);
assert(isequalRel(e0, -3.045112911187e+00, TOL));
assert(isequalRel(m,  3.310749209521e+00, TOL));

[e0, m] = newtonnu(7.544423660167e-01, 3.416429814041e+00);
assert(isequalRel(e0, -2.433458465877e+00, TOL));
assert(isequalRel(m,  4.340429491937e+00, TOL));

[e0, m] = newtonnu(7.543649856597e-01, 3.798493751187e+00);
assert(isequalRel(e0, -1.664128273727e+00, TOL));
assert(isequalRel(m,  5.370138822445e+00, TOL));

[e0, m] = newtonnu(7.543973649324e-01, 1.065570636840e+00);
assert(isequalRel(e0, 4.342955564040e-01, TOL));
assert(isequalRel(m,  1.168666772008e-01, TOL));

[e0, m] = newtonnu(7.543205050293e-01, 2.601631683239e+00);
assert(isequalRel(e0, 1.868099933621e+00, TOL));
assert(isequalRel(m,  1.146871579335e+00, TOL));

[e0, m] = newtonnu(7.543782726170e-01, 2.926221972581e+00);
assert(isequalRel(e0, 2.579082513888e+00, TOL));
assert(isequalRel(m,  2.176764093643e+00, TOL));

[e0, m] = newtonnu(7.544097492072e-01, 3.155441928149e+00);
assert(isequalRel(e0, -3.104580501402e+00, TOL));
assert(isequalRel(m,  3.206520759535e+00, TOL));

[e0, m] = newtonnu(7.544010397628e-01, 3.389359534002e+00);
assert(isequalRel(e0, -2.499036758909e+00, TOL));
assert(isequalRel(m,  4.236218513604e+00, TOL));

[e0, m] = newtonnu(7.543315566779e-01, 3.742567954597e+00);
assert(isequalRel(e0, -1.758357028408e+00, TOL));
assert(isequalRel(m,  5.265930365825e+00, TOL));

[e0, m] = newtonnu(7.540773149328e-01, 1.379633086621e-01);
assert(isequalRel(e0, 5.172866833145e-02, TOL));
assert(isequalRel(m,  1.273864704904e-02, TOL));

[e0, m] = newtonnu(7.542695512343e-01, 2.553148562530e+00);
assert(isequalRel(e0, 1.780425168220e+00, TOL));
assert(isequalRel(m,  1.042667920789e+00, TOL));

[e0, m] = newtonnu(7.543275574825e-01, 2.900284963886e+00);
assert(isequalRel(e0, 2.514954715674e+00, TOL));
assert(isequalRel(m,  2.072598332621e+00, TOL));

[e0, m] = newtonnu(7.543624491072e-01, 3.133228268447e+00);
assert(isequalRel(e0, 3.119239914294e+00, TOL));
assert(isequalRel(m,  3.102379251274e+00, TOL));

[e0, m] = newtonnu(7.543584025770e-01, 3.363281180717e+00);
assert(isequalRel(e0, -2.563372295632e+00, TOL));
assert(isequalRel(m,  4.132095878009e+00, TOL));

[e0, m] = newtonnu(7.542967241330e-01, 3.692964050534e+00);
assert(isequalRel(e0, -1.847064592697e+00, TOL));
assert(isequalRel(m,  5.161814529443e+00, TOL));

[e0, m] = newtonnu(7.544385527024e-01, 5.400593266884e+00);
assert(isequalRel(e0, -3.498303424809e-01, TOL));
assert(isequalRel(m,  6.191930050445e+00, TOL));
# 23177

[e0, m] = newtonnu(7.263087733555e-01, 2.637418480129e+00);
assert(isequalRel(e0, 1.993247562015e+00, TOL));
assert(isequalRel(m,  1.330791003283e+00, TOL));

[e0, m] = newtonnu(7.262533237763e-01, 2.993942370793e+00);
assert(isequalRel(e0, 2.774325838562e+00, TOL));
assert(isequalRel(m,  2.513553063295e+00, TOL));

[e0, m] = newtonnu(7.262566786379e-01, 3.271456185468e+00);
assert(isequalRel(e0, -2.817877380632e+00, TOL));
assert(isequalRel(m,  3.696323676145e+00, TOL));

[e0, m] = newtonnu(7.263198311914e-01, 3.616660347911e+00);
assert(isequalRel(e0, -2.048952515975e+00, TOL));
assert(isequalRel(m,  4.879092111333e+00, TOL));

[e0, m] = newtonnu(7.263454271303e-01, 4.837457714387e+00);
assert(isequalRel(e0, -6.755217307564e-01, TOL));
assert(isequalRel(m,  6.061850677234e+00, TOL));

[e0, m] = newtonnu(7.263670854616e-01, 2.458314087655e+00);
assert(isequalRel(e0, 1.683561447863e+00, TOL));
assert(isequalRel(m,  9.618077026516e-01, TOL));

[e0, m] = newtonnu(7.262956957566e-01, 2.899985976628e+00);
assert(isequalRel(e0, 2.549754191281e+00, TOL));
assert(isequalRel(m,  2.144562730680e+00, TOL));

[e0, m] = newtonnu(7.262798501064e-01, 3.184506271738e+00);
assert(isequalRel(e0, -3.033910417165e+00, TOL));
assert(isequalRel(m,  3.327331274225e+00, TOL));

[e0, m] = newtonnu(7.263238070861e-01, 3.489692093179e+00);
assert(isequalRel(e0, -2.309893474338e+00, TOL));
assert(isequalRel(m,  4.510101082385e+00, TOL));

[e0, m] = newtonnu(7.264120176083e-01, 4.116789489670e+00);
assert(isequalRel(e0, -1.287858790195e+00, TOL));
assert(isequalRel(m,  5.692856020935e+00, TOL));

[e0, m] = newtonnu(7.264167991962e-01, 2.169100857506e+00);
assert(isequalRel(e0, 1.290991144736e+00, TOL));
assert(isequalRel(m,  5.928252330550e-01, TOL));

[e0, m] = newtonnu(7.263406648409e-01, 2.794279417344e+00);
assert(isequalRel(e0, 2.311571109619e+00, TOL));
assert(isequalRel(m,  1.775570986411e+00, TOL));
# 23333

[e0, m] = newtonnu(9.906044031463e-01, 2.710920576748e+00);
assert(isequalRel(e0, 6.086820953334e-01, TOL));
assert(isequalRel(m,  4.226762810877e-02, TOL));

[e0, m] = newtonnu(9.906744583785e-01, 2.804969305754e+00);
assert(isequalRel(e0, 7.658434418298e-01, TOL));
assert(isequalRel(m,  7.916219999337e-02, TOL));

[e0, m] = newtonnu(9.907363097222e-01, 2.853418125097e+00);
assert(isequalRel(e0, 8.789727658895e-01, TOL));
assert(isequalRel(m,  1.160226162864e-01, TOL));

[e0, m] = newtonnu(9.907930387002e-01, 2.885019187817e+00);
assert(isequalRel(e0, 9.703331378680e-01, TOL));
assert(isequalRel(m,  1.528555719233e-01, TOL));

[e0, m] = newtonnu(9.908453428193e-01, 2.908057142832e+00);
assert(isequalRel(e0, 1.048314299258e+00, TOL));
assert(isequalRel(m,  1.896643340401e-01, TOL));

[e0, m] = newtonnu(9.908934162100e-01, 2.925984490012e+00);
assert(isequalRel(e0, 1.117098298413e+00, TOL));
assert(isequalRel(m,  2.264511571453e-01, TOL));

[e0, m] = newtonnu(9.909372927325e-01, 2.940546063766e+00);
assert(isequalRel(e0, 1.179107046850e+00, TOL));
assert(isequalRel(m,  2.632178986692e-01, TOL));

[e0, m] = newtonnu(9.909769444104e-01, 2.952737452853e+00);
assert(isequalRel(e0, 1.235883470382e+00, TOL));
assert(isequalRel(m,  2.999662394134e-01, TOL));

[e0, m] = newtonnu(9.910123176508e-01, 2.963176615147e+00);
assert(isequalRel(e0, 1.288478100658e+00, TOL));
assert(isequalRel(m,  3.366977788907e-01, TOL));

[e0, m] = newtonnu(9.910433489629e-01, 2.972271689837e+00);
assert(isequalRel(e0, 1.337642275600e+00, TOL));
assert(isequalRel(m,  3.734140816695e-01, TOL));

[e0, m] = newtonnu(9.910699726623e-01, 2.980305455016e+00);
assert(isequalRel(e0, 1.383934130026e+00, TOL));
assert(isequalRel(m,  4.101167015781e-01, TOL));

[e0, m] = newtonnu(9.910921250270e-01, 2.987481446559e+00);
assert(isequalRel(e0, 1.427780988229e+00, TOL));
assert(isequalRel(m,  4.468071947966e-01, TOL));

[e0, m] = newtonnu(9.911097467267e-01, 2.993950801145e+00);
assert(isequalRel(e0, 1.469518180325e+00, TOL));
assert(isequalRel(m,  4.834871268905e-01, TOL));

[e0, m] = newtonnu(9.911146043875e-01, 2.995970942154e+00);
assert(isequalRel(e0, 1.483009748697e+00, TOL));
assert(isequalRel(m,  4.957116964193e-01, TOL));
# 23599

[e0, m] = newtonnu(5.784051420876e-01, 2.042734029820e+00);
assert(isequalRel(e0, 1.402040163613e+00, TOL));
assert(isequalRel(m,  8.318515906631e-01, TOL));

[e0, m] = newtonnu(5.783202612333e-01, 2.353987642725e+00);
assert(isequalRel(e0, 1.787403278048e+00, TOL));
assert(isequalRel(m,  1.222597034643e+00, TOL));

[e0, m] = newtonnu(5.782452116786e-01, 2.571151958504e+00);
assert(isequalRel(e0, 2.109673564379e+00, TOL));
assert(isequalRel(m,  1.613374145509e+00, TOL));

[e0, m] = newtonnu(5.781858818730e-01, 2.742767240296e+00);
assert(isequalRel(e0, 2.396293113376e+00, TOL));
assert(isequalRel(m,  2.004172092034e+00, TOL));

[e0, m] = newtonnu(5.781435183037e-01, 2.890012644494e+00);
assert(isequalRel(e0, 2.661834460677e+00, TOL));
assert(isequalRel(m,  2.394983832435e+00, TOL));

[e0, m] = newtonnu(5.781182295785e-01, 3.024294654572e+00);
assert(isequalRel(e0, 2.915437361688e+00, TOL));
assert(isequalRel(m,  2.785804532415e+00, TOL));

[e0, m] = newtonnu(5.781099191721e-01, 3.153073057420e+00);
assert(isequalRel(e0, -3.119389581938e+00, TOL));
assert(isequalRel(m,  3.176630486600e+00, TOL));

[e0, m] = newtonnu(5.781185602132e-01, 3.282377737929e+00);
assert(isequalRel(e0, -2.870524379645e+00, TOL));
assert(isequalRel(m,  3.567458447874e+00, TOL));

[e0, m] = newtonnu(5.781442547519e-01, 3.418369059747e+00);
assert(isequalRel(e0, -2.615313371561e+00, TOL));
assert(isequalRel(m,  3.958285119243e+00, TOL));

[e0, m] = newtonnu(5.781871583535e-01, 3.568979715947e+00);
assert(isequalRel(e0, -2.346758356903e+00, TOL));
assert(isequalRel(m,  4.349106621248e+00, TOL));

[e0, m] = newtonnu(5.782471511503e-01, 3.746777622450e+00);
assert(isequalRel(e0, -2.055033771840e+00, TOL));
assert(isequalRel(m,  4.739917727954e+00, TOL));

[e0, m] = newtonnu(5.783226767564e-01, 3.975937404662e+00);
assert(isequalRel(e0, -1.724021766408e+00, TOL));
assert(isequalRel(m,  5.130710549596e+00, TOL));

[e0, m] = newtonnu(5.784060990336e-01, 4.314306727539e+00);
assert(isequalRel(e0, -1.322360872112e+00, TOL));
assert(isequalRel(m,  5.521472489589e+00, TOL));

[e0, m] = newtonnu(5.784609433935e-01, 4.944459382375e+00);
assert(isequalRel(e0, -7.762795773556e-01, TOL));
assert(isequalRel(m,  5.912192623481e+00, TOL));

[e0, m] = newtonnu(5.784178049311e-01, 9.098140980551e-02);
assert(isequalRel(e0, 4.704380301857e-02, TOL));
assert(isequalRel(m,  1.984286548586e-02, TOL));

[e0, m] = newtonnu(5.784567893684e-01, 1.428319169135e+00);
assert(isequalRel(e0, 8.422745412591e-01, TOL));
assert(isequalRel(m,  4.106535910989e-01, TOL));

[e0, m] = newtonnu(5.783928239487e-01, 2.011549338173e+00);
assert(isequalRel(e0, 1.367916471514e+00, TOL));
assert(isequalRel(m,  8.013862671461e-01, TOL));

[e0, m] = newtonnu(5.783078403339e-01, 2.334050515830e+00);
assert(isequalRel(e0, 1.760134801544e+00, TOL));
assert(isequalRel(m,  1.192161926553e+00, TOL));

[e0, m] = newtonnu(5.782317383207e-01, 2.556248718242e+00);
assert(isequalRel(e0, 2.086111386365e+00, TOL));
assert(isequalRel(m,  1.582970266417e+00, TOL));

[e0, m] = newtonnu(5.781711345647e-01, 2.730476349827e+00);
assert(isequalRel(e0, 2.374907377344e+00, TOL));
assert(isequalRel(m,  1.973800144940e+00, TOL));

[e0, m] = newtonnu(5.781274575091e-01, 2.879148887278e+00);
assert(isequalRel(e0, 2.641739070668e+00, TOL));
assert(isequalRel(m,  2.364644291315e+00, TOL));

[e0, m] = newtonnu(5.781008606368e-01, 3.014155823370e+00);
assert(isequalRel(e0, 2.896033395820e+00, TOL));
assert(isequalRel(m,  2.755497745077e+00, TOL));

[e0, m] = newtonnu(5.780912522479e-01, 3.143153611159e+00);
assert(isequalRel(e0, -3.138573761097e+00, TOL));
assert(isequalRel(m,  3.146356738774e+00, TOL));

[e0, m] = newtonnu(5.780985986352e-01, 3.272224256700e+00);
assert(isequalRel(e0, -2.889925052126e+00, TOL));
assert(isequalRel(m,  3.537218006355e+00, TOL));

[e0, m] = newtonnu(5.781229951224e-01, 3.407467729449e+00);
assert(isequalRel(e0, -2.635406959541e+00, TOL));
assert(isequalRel(m,  3.928078269318e+00, TOL));

[e0, m] = newtonnu(5.781646028457e-01, 3.556605575105e+00);
assert(isequalRel(e0, -2.368156299530e+00, TOL));
assert(isequalRel(m,  4.318933711585e+00, TOL));

[e0, m] = newtonnu(5.782233506636e-01, 3.731687084934e+00);
assert(isequalRel(e0, -2.078651571054e+00, TOL));
assert(isequalRel(m,  4.709779240440e+00, TOL));

[e0, m] = newtonnu(5.782978841206e-01, 3.955539621498e+00);
assert(isequalRel(e0, -1.751463602273e+00, TOL));
assert(isequalRel(m,  5.100607219443e+00, TOL));

[e0, m] = newtonnu(5.783814148451e-01, 4.281774322930e+00);
assert(isequalRel(e0, -1.356992012291e+00, TOL));
assert(isequalRel(m,  5.491405423111e+00, TOL));

[e0, m] = newtonnu(5.784415819901e-01, 4.875919714831e+00);
assert(isequalRel(e0, -8.265088773899e-01, TOL));
assert(isequalRel(m,  5.882161169868e+00, TOL));

[e0, m] = newtonnu(5.783988140863e-01, 6.236497677359e+00);
assert(isequalRel(e0, -2.413249280196e-02, TOL));
assert(isequalRel(m,  6.273009664811e+00, TOL));

[e0, m] = newtonnu(5.784399994085e-01, 1.361334154581e+00);
assert(isequalRel(e0, 7.926705899408e-01, TOL));
assert(isequalRel(m,  3.806880266413e-01, TOL));

[e0, m] = newtonnu(5.783808309591e-01, 1.979534666510e+00);
assert(isequalRel(e0, 1.333644047704e+00, TOL));
assert(isequalRel(m,  7.714515489745e-01, TOL));

[e0, m] = newtonnu(5.782958886741e-01, 2.313907266475e+00);
assert(isequalRel(e0, 1.732965656025e+00, TOL));
assert(isequalRel(m,  1.162257387001e+00, TOL));

[e0, m] = newtonnu(5.782187822181e-01, 2.541333908517e+00);
assert(isequalRel(e0, 2.062746643187e+00, TOL));
assert(isequalRel(m,  1.553096911448e+00, TOL));

[e0, m] = newtonnu(5.781569290539e-01, 2.718253536163e+00);
assert(isequalRel(e0, 2.353768115677e+00, TOL));
assert(isequalRel(m,  1.943958687704e+00, TOL));
# 24208

[e0, m] = newtonnu(2.654297752769e-03, 1.355056725607e+00);
assert(isequalRel(e0, 1.352464692186e+00, TOL));
assert(isequalRel(m,  1.349873406990e+00, TOL));

[e0, m] = newtonnu(2.634424546089e-03, 1.882982264873e+00);
assert(isequalRel(e0, 1.880474158934e+00, TOL));
assert(isequalRel(m,  1.877965049220e+00, TOL));

[e0, m] = newtonnu(2.617868391905e-03, 2.413251211721e+00);
assert(isequalRel(e0, 2.411506966265e+00, TOL));
assert(isequalRel(m,  2.409761022177e+00, TOL));

[e0, m] = newtonnu(2.608930185835e-03, 2.945196393376e+00);
assert(isequalRel(e0, 2.944686643777e+00, TOL));
assert(isequalRel(m,  2.944176242933e+00, TOL));

[e0, m] = newtonnu(2.610099643301e-03, 3.477711644804e+00);
assert(isequalRel(e0, -2.804611720956e+00, TOL));
assert(isequalRel(m,  3.479436587838e+00, TOL));

[e0, m] = newtonnu(2.621280442174e-03, 4.009403899752e+00);
assert(isequalRel(e0, -2.271779892611e+00, TOL));
assert(isequalRel(m,  4.013408618543e+00, TOL));

[e0, m] = newtonnu(2.639328633586e-03, 4.539064512266e+00);
assert(isequalRel(e0, -1.741520416782e+00, TOL));
assert(isequalRel(m,  4.544265848486e+00, TOL));

[e0, m] = newtonnu(2.659026281401e-03, 5.066214260860e+00);
assert(isequalRel(e0, -1.214477881036e+00, TOL));
assert(isequalRel(m,  5.071199432057e+00, TOL));

[e0, m] = newtonnu(2.675047219934e-03, 5.591159816614e+00);
assert(isequalRel(e0, -6.903203016360e-01, TOL));
assert(isequalRel(m,  5.594568433296e+00, TOL));

[e0, m] = newtonnu(2.683325530177e-03, 6.114655177180e+00);
assert(isequalRel(e0, -1.680806401740e-01, TOL));
assert(isequalRel(m,  6.115553561464e+00, TOL));

[e0, m] = newtonnu(2.681605396723e-03, 3.545203619987e-01);
assert(isequalRel(e0, 3.535906353620e-01, TOL));
assert(isequalRel(m,  3.526620797908e-01, TOL));

[e0, m] = newtonnu(2.670087967001e-03, 8.783370687673e-01);
assert(isequalRel(e0, 8.762837072798e-01, TOL));
assert(isequalRel(m,  8.742321032115e-01, TOL));
# 25954

[e0, m] = newtonnu(2.118980881091e-04, 3.094712057265e-01);
assert(isequalRel(e0, 3.094066776144e-01, TOL));
assert(isequalRel(m,  3.093421560150e-01, TOL));

[e0, m] = newtonnu(2.018857414327e-04, 7.522873900398e-01);
assert(isequalRel(e0, 7.521494495312e-01, TOL));
assert(isequalRel(m,  7.520115191915e-01, TOL));

[e0, m] = newtonnu(1.853991043408e-04, 1.221123179806e+00);
assert(isequalRel(e0, 1.220949005707e+00, TOL));
assert(isequalRel(m,  1.220774837144e+00, TOL));

[e0, m] = newtonnu(1.657288742284e-04, 1.735739082203e+00);
assert(isequalRel(e0, 1.735575600417e+00, TOL));
assert(isequalRel(m,  1.735412116409e+00, TOL));

[e0, m] = newtonnu(1.479780786326e-04, 2.315992652649e+00);
assert(isequalRel(e0, 2.315883889995e+00, TOL));
assert(isequalRel(m,  2.315775121884e+00, TOL));

[e0, m] = newtonnu(1.384411464309e-04, 2.961761549236e+00);
assert(isequalRel(e0, 2.961736785495e+00, TOL));
assert(isequalRel(m,  2.961712020067e+00, TOL));

[e0, m] = newtonnu(1.414428690715e-04, 3.626207835025e+00);
assert(isequalRel(e0, -2.656911574341e+00, TOL));
assert(isequalRel(m,  3.626339634777e+00, TOL));

[e0, m] = newtonnu(1.555355900366e-04, 4.244384461393e+00);
assert(isequalRel(e0, -2.038662030031e+00, TOL));
assert(isequalRel(m,  4.244662097773e+00, TOL));

[e0, m] = newtonnu(1.749131783852e-04, 4.792383442720e+00);
assert(isequalRel(e0, -1.490627511845e+00, TOL));
assert(isequalRel(m,  4.792732146727e+00, TOL));

[e0, m] = newtonnu(1.936266716627e-04, 5.283165782504e+00);
assert(isequalRel(e0, -9.998565999283e-01, TOL));
assert(isequalRel(m,  5.283491623474e+00, TOL));

[e0, m] = newtonnu(2.074197220398e-04, 5.737762198434e+00);
assert(isequalRel(e0, -5.453155131111e-01, TOL));
assert(isequalRel(m,  5.737977380162e+00, TOL));

[e0, m] = newtonnu(2.137717161693e-04, 6.174117635266e+00);
assert(isequalRel(e0, -1.090444050002e-01, TOL));
assert(isequalRel(m,  6.174164166620e+00, TOL));

[e0, m] = newtonnu(2.116506173217e-04, 3.237859936919e-01);
assert(isequalRel(e0, 3.237186620887e-01, TOL));
assert(isequalRel(m,  3.236513372416e-01, TOL));

[e0, m] = newtonnu(2.013927155994e-04, 7.671738094483e-01);
assert(isequalRel(e0, 7.670340321889e-01, TOL));
assert(isequalRel(m,  7.668942650642e-01, TOL));

[e0, m] = newtonnu(1.847419205128e-04, 1.237171927001e+00);
assert(isequalRel(e0, 1.236997376721e+00, TOL));
assert(isequalRel(m,  1.236822831723e+00, TOL));

[e0, m] = newtonnu(1.650458110166e-04, 1.753662603595e+00);
assert(isequalRel(e0, 1.753500307239e+00, TOL));
assert(isequalRel(m,  1.753338008449e+00, TOL));

[e0, m] = newtonnu(1.474658285037e-04, 2.336291941255e+00);
assert(isequalRel(e0, 2.336185607203e+00, TOL));
assert(isequalRel(m,  2.336079267720e+00, TOL));

[e0, m] = newtonnu(1.382992296552e-04, 2.983724275840e+00);
assert(isequalRel(e0, 2.983702531855e+00, TOL));
assert(isequalRel(m,  2.983680786387e+00, TOL));

[e0, m] = newtonnu(1.417267990267e-04, 3.647603983939e+00);
assert(isequalRel(e0, -2.635512625096e+00, TOL));
assert(isequalRel(m,  3.647741384485e+00, TOL));

[e0, m] = newtonnu(1.560996564057e-04, 4.263576124747e+00);
assert(isequalRel(e0, -2.019468537680e+00, TOL));
assert(isequalRel(m,  4.263857419013e+00, TOL));

[e0, m] = newtonnu(1.755451493936e-04, 4.809374887000e+00);
assert(isequalRel(e0, -1.473635701480e+00, TOL));
assert(isequalRel(m,  4.809724322911e+00, TOL));

[e0, m] = newtonnu(1.941563959538e-04, 5.298627489863e+00);
assert(isequalRel(e0, -9.843960883758e-01, TOL));
assert(isequalRel(m,  5.298950939055e+00, TOL));

[e0, m] = newtonnu(2.077379521664e-04, 5.752349988353e+00);
assert(isequalRel(e0, -5.307301601004e-01, TOL));
assert(isequalRel(m,  5.752560296384e+00, TOL));

[e0, m] = newtonnu(2.138219808942e-04, 6.188357826844e+00);
assert(isequalRel(e0, -9.480723666420e-02, TOL));
assert(isequalRel(m,  6.188398312032e+00, TOL));

[e0, m] = newtonnu(2.114225876523e-04, 3.381384865579e-01);
assert(isequalRel(e0, 3.380683580049e-01, TOL));
assert(isequalRel(m,  3.379982364464e-01, TOL));
# 26900

[e0, m] = newtonnu(3.702590174409e-04, 6.178606008330e+00);
assert(isequalRel(e0, -1.045406550777e-01, TOL));
assert(isequalRel(m,  6.178683288757e+00, TOL));

[e0, m] = newtonnu(3.701274097376e-04, 1.311787735524e-01);
assert(isequalRel(e0, 1.311303687009e-01, TOL));
assert(isequalRel(m,  1.310819727321e-01, TOL));

[e0, m] = newtonnu(3.687418981571e-04, 2.886761651077e-01);
assert(isequalRel(e0, 2.885712089504e-01, TOL));
assert(isequalRel(m,  2.884662713473e-01, TOL));
# 26975

[e0, m] = newtonnu(5.600550020529e-01, 3.055085867742e-01);
assert(isequalRel(e0, 1.631489467787e-01, TOL));
assert(isequalRel(m,  7.218137586086e-02, TOL));

[e0, m] = newtonnu(5.600301892854e-01, 2.271836458316e+00);
assert(isequalRel(e0, 1.704232394083e+00, TOL));
assert(isequalRel(m,  1.149180531845e+00, TOL));

[e0, m] = newtonnu(5.600934955264e-01, 2.816149153755e+00);
assert(isequalRel(e0, 2.541895638297e+00, TOL));
assert(isequalRel(m,  2.225783135424e+00, TOL));

[e0, m] = newtonnu(5.600478225224e-01, 3.196415647512e+00);
assert(isequalRel(e0, -3.038422921054e+00, TOL));
assert(isequalRel(m,  3.302439923089e+00, TOL));

[e0, m] = newtonnu(5.599706577269e-01, 3.598925992357e+00);
assert(isequalRel(e0, -2.315578114506e+00, TOL));
assert(isequalRel(m,  4.379317682113e+00, TOL));

[e0, m] = newtonnu(5.599893485981e-01, 4.288678697633e+00);
assert(isequalRel(e0, -1.376207344610e+00, TOL));
assert(isequalRel(m,  5.456398759969e+00, TOL));

[e0, m] = newtonnu(5.600638670535e-01, 9.537448265413e-01);
assert(isequalRel(e0, 5.355334773051e-01, TOL));
assert(isequalRel(m,  2.497329415917e-01, TOL));

[e0, m] = newtonnu(5.600082181346e-01, 2.389582311632e+00);
assert(isequalRel(e0, 1.863103837074e+00, TOL));
assert(isequalRel(m,  1.326850334671e+00, TOL));

[e0, m] = newtonnu(5.600491118493e-01, 2.883301197419e+00);
assert(isequalRel(e0, 2.661903692274e+00, TOL));
assert(isequalRel(m,  2.403439199449e+00, TOL));

[e0, m] = newtonnu(5.599936084298e-01, 3.257500895422e+00);
assert(isequalRel(e0, -2.923965037926e+00, TOL));
assert(isequalRel(m,  3.480130621318e+00, TOL));

[e0, m] = newtonnu(5.599206562963e-01, 3.679624684616e+00);
assert(isequalRel(e0, -2.184027891888e+00, TOL));
assert(isequalRel(m,  4.557056318968e+00, TOL));

[e0, m] = newtonnu(5.599717319624e-01, 4.500602674831e+00);
assert(isequalRel(e0, -1.163172871369e+00, TOL));
assert(isequalRel(m,  5.634103189003e+00, TOL));

[e0, m] = newtonnu(5.599370292825e-01, 1.407630631290e+00);
assert(isequalRel(e0, 8.471095774090e-01, TOL));
assert(isequalRel(m,  4.275097677437e-01, TOL));

[e0, m] = newtonnu(5.599861031042e-01, 2.491749272943e+00);
assert(isequalRel(e0, 2.011110812908e+00, TOL));
assert(isequalRel(m,  1.504537491082e+00, TOL));

[e0, m] = newtonnu(5.600061902363e-01, 2.947772957086e+00);
assert(isequalRel(e0, 2.779500877230e+00, TOL));
assert(isequalRel(m,  2.581129241572e+00, TOL));

[e0, m] = newtonnu(5.599428934279e-01, 3.319721883918e+00);
assert(isequalRel(e0, -2.808440659401e+00, TOL));
assert(isequalRel(m,  3.657859039487e+00, TOL));

[e0, m] = newtonnu(5.598778587657e-01, 3.768254456239e+00);
assert(isequalRel(e0, -2.046154814096e+00, TOL));
assert(isequalRel(m,  4.734833973902e+00, TOL));

[e0, m] = newtonnu(5.599408868531e-01, 4.787768395720e+00);
assert(isequalRel(e0, -9.153090753996e-01, TOL));
assert(isequalRel(m,  5.811769941130e+00, TOL));

[e0, m] = newtonnu(5.598628789548e-01, 1.720153608349e+00);
assert(isequalRel(e0, 1.105802238942e+00, TOL));
assert(isequalRel(m,  6.053832396828e-01, TOL));

[e0, m] = newtonnu(5.599638794879e-01, 2.582573301986e+00);
assert(isequalRel(e0, 2.150677425754e+00, TOL));
assert(isequalRel(m,  1.682252070980e+00, TOL));

[e0, m] = newtonnu(5.599653791676e-01, 3.010336368451e+00);
assert(isequalRel(e0, 2.895354066762e+00, TOL));
assert(isequalRel(m,  2.758858172723e+00, TOL));

[e0, m] = newtonnu(5.598962994359e-01, 3.383730187939e+00);
assert(isequalRel(e0, -2.691259411846e+00, TOL));
assert(isequalRel(m,  3.835629480898e+00, TOL));

[e0, m] = newtonnu(5.598436970652e-01, 3.867476885835e+00);
assert(isequalRel(e0, -1.900264427413e+00, TOL));
assert(isequalRel(m,  4.912653141722e+00, TOL));

[e0, m] = newtonnu(5.598443873674e-01, 5.200514292271e+00);
assert(isequalRel(e0, -6.182906073510e-01, TOL));
assert(isequalRel(m,  5.989404621744e+00, TOL));
# 28057

[e0, m] = newtonnu(7.333961569790e-04, 4.195374323083e+00);
assert(isequalRel(e0, -2.087173328153e+00, TOL));
assert(isequalRel(m,  4.196649750355e+00, TOL));

[e0, m] = newtonnu(1.327018230815e-03, 1.327306440310e+00);
assert(isequalRel(e0, 1.326018771385e+00, TOL));
assert(isequalRel(m,  1.324731309901e+00, TOL));

[e0, m] = newtonnu(9.196305043762e-04, 2.457233819566e+00);
assert(isequalRel(e0, 2.456652243602e+00, TOL));
assert(isequalRel(m,  2.456070460641e+00, TOL));

[e0, m] = newtonnu(2.671287814371e-03, 3.165700582569e+00);
assert(isequalRel(e0, -3.117420245421e+00, TOL));
assert(isequalRel(m,  3.165829626930e+00, TOL));

[e0, m] = newtonnu(1.029370833968e-03, 4.964434733801e+00);
assert(isequalRel(e0, -1.317753854023e+00, TOL));
assert(isequalRel(m,  4.966428043901e+00, TOL));

[e0, m] = newtonnu(8.855437590308e-04, 4.474886889950e+00);
assert(isequalRel(e0, -1.807437642047e+00, TOL));
assert(isequalRel(m,  4.476608529551e+00, TOL));

[e0, m] = newtonnu(1.198447314706e-03, 1.453658925869e+00);
assert(isequalRel(e0, 1.452468774268e+00, TOL));
assert(isequalRel(m,  1.451278707145e+00, TOL));

[e0, m] = newtonnu(7.950634398042e-04, 2.005371775591e+00);
assert(isequalRel(e0, 2.004650493391e+00, TOL));
assert(isequalRel(m,  2.003929090740e+00, TOL));

[e0, m] = newtonnu(2.769612384846e-03, 3.150346841263e+00);
assert(isequalRel(e0, -3.132814186852e+00, TOL));
assert(isequalRel(m,  3.150395432965e+00, TOL));

[e0, m] = newtonnu(8.577165476244e-04, 4.694534930147e+00);
assert(isequalRel(e0, -1.587792790516e+00, TOL));
assert(isequalRel(m,  4.696250109326e+00, TOL));

[e0, m] = newtonnu(1.047239373767e-03, 4.687360971920e+00);
assert(isequalRel(e0, -1.594777409954e+00, TOL));
assert(isequalRel(m,  4.689454835484e+00, TOL));

[e0, m] = newtonnu(1.046159866680e-03, 1.618368989317e+00);
assert(isequalRel(e0, 1.617323986854e+00, TOL));
assert(isequalRel(m,  1.616278959159e+00, TOL));

[e0, m] = newtonnu(8.652745849065e-04, 1.575763395697e+00);
assert(isequalRel(e0, 1.574898129818e+00, TOL));
assert(isequalRel(m,  1.574032862513e+00, TOL));

[e0, m] = newtonnu(2.766168153711e-03, 3.136831201507e+00);
assert(isequalRel(e0, 3.136818012312e+00, TOL));
assert(isequalRel(m,  3.136804804902e+00, TOL));

[e0, m] = newtonnu(7.965670845200e-04, 4.256230709275e+00);
assert(isequalRel(e0, -2.026239353112e+00, TOL));
assert(isequalRel(m,  4.257661324079e+00, TOL));

[e0, m] = newtonnu(1.200865835031e-03, 4.850134276420e+00);
assert(isequalRel(e0, -1.431861637168e+00, TOL));
assert(isequalRel(m,  4.852512964413e+00, TOL));

[e0, m] = newtonnu(8.864163207241e-04, 1.831932871163e+00);
assert(isequalRel(e0, 1.831076408746e+00, TOL));
assert(isequalRel(m,  1.830219848756e+00, TOL));

[e0, m] = newtonnu(1.038983051778e-03, 1.316307731762e+00);
assert(isequalRel(e0, 1.315302343401e+00, TOL));
assert(isequalRel(m,  1.314297087223e+00, TOL));

[e0, m] = newtonnu(2.661219266844e-03, 3.121295808750e+00);
assert(isequalRel(e0, 3.121241726060e+00, TOL));
assert(isequalRel(m,  3.121187571518e+00, TOL));

[e0, m] = newtonnu(9.326937609175e-04, 3.809280071246e+00);
assert(isequalRel(e0, -2.473327526707e+00, TOL));
assert(isequalRel(m,  3.810435701051e+00, TOL));

[e0, m] = newtonnu(1.329698702340e-03, 4.974229143065e+00);
assert(isequalRel(e0, -1.307672008445e+00, TOL));
assert(isequalRel(m,  4.976797231949e+00, TOL));

[e0, m] = newtonnu(7.360717491391e-04, 2.110838769814e+00);
assert(isequalRel(e0, 2.110207331193e+00, TOL));
assert(isequalRel(m,  2.109575773273e+00, TOL));

[e0, m] = newtonnu(1.219309889156e-03, 1.191933899729e+00);
assert(isequalRel(e0, 1.190801311088e+00, TOL));
assert(isequalRel(m,  1.189668978860e+00, TOL));

[e0, m] = newtonnu(2.462219959731e-03, 3.099310142526e+00);
assert(isequalRel(e0, 3.099205936369e+00, TOL));
assert(isequalRel(m,  3.099101602196e+00, TOL));
# 28129

[e0, m] = newtonnu(4.640666248398e-03, 2.688053122763e+00);
assert(isequalRel(e0, 2.686015554890e+00, TOL));
assert(isequalRel(m,  2.683973751649e+00, TOL));

[e0, m] = newtonnu(4.638074038857e-03, 3.716820103224e+00);
assert(isequalRel(e0, -2.563837041079e+00, TOL));
assert(isequalRel(m,  3.721881328029e+00, TOL));

[e0, m] = newtonnu(4.629207297044e-03, 4.780504691011e+00);
assert(isequalRel(e0, -1.498062854847e+00, TOL));
assert(isequalRel(m,  4.789739420407e+00, TOL));

[e0, m] = newtonnu(4.611707205141e-03, 5.818459689103e+00);
assert(isequalRel(e0, -4.626629959640e-01, TOL));
assert(isequalRel(m,  5.822580667009e+00, TOL));

[e0, m] = newtonnu(4.616435403522e-03, 6.068134805952e-01);
assert(isequalRel(e0, 6.041859154156e-01, TOL));
assert(isequalRel(m,  6.015633540021e-01, TOL));

[e0, m] = newtonnu(4.621156197662e-03, 1.643346322335e+00);
assert(isequalRel(e0, 1.638736534015e+00, TOL));
assert(isequalRel(m,  1.634126039048e+00, TOL));

[e0, m] = newtonnu(4.642194405799e-03, 2.705502836523e+00);
assert(isequalRel(e0, 2.703537836641e+00, TOL));
assert(isequalRel(m,  2.701568716408e+00, TOL));

[e0, m] = newtonnu(4.635494796957e-03, 3.734349294046e+00);
assert(isequalRel(e0, -2.546241395989e+00, TOL));
assert(isequalRel(m,  3.739543494880e+00, TOL));

[e0, m] = newtonnu(4.630325740817e-03, 4.798073754256e+00);
assert(isequalRel(e0, -1.480499111761e+00, TOL));
assert(isequalRel(m,  4.807297657100e+00, TOL));

[e0, m] = newtonnu(4.609045984338e-03, 5.836171484637e+00);
assert(isequalRel(e0, -4.450255704088e-01, TOL));
assert(isequalRel(m,  5.840143843312e+00, TOL));

[e0, m] = newtonnu(4.617930660554e-03, 6.244211807145e-01);
assert(isequalRel(e0, 6.217264454195e-01, TOL));
assert(isequalRel(m,  6.190367806071e-01, TOL));

[e0, m] = newtonnu(4.618929629951e-03, 1.660972656137e+00);
assert(isequalRel(e0, 1.656371520467e+00, TOL));
assert(isequalRel(m,  1.651769492992e+00, TOL));
# 28350

[e0, m] = newtonnu(1.092900560486e-03, 3.755536003947e+00);
assert(isequalRel(e0, -2.527019406997e+00, TOL));
assert(isequalRel(m,  3.756796077475e+00, TOL));

[e0, m] = newtonnu(6.742081783819e-04, 2.612214602642e+00);
assert(isequalRel(e0, 2.611874030661e+00, TOL));
assert(isequalRel(m,  2.611533359642e+00, TOL));

[e0, m] = newtonnu(1.074437396221e-03, 3.363041521853e+00);
assert(isequalRel(e0, -2.919907668492e+00, TOL));
assert(isequalRel(m,  3.363513879197e+00, TOL));

[e0, m] = newtonnu(9.979499333660e-04, 5.939466001665e+00);
assert(isequalRel(e0, -3.433831630345e-01, TOL));
assert(isequalRel(m,  5.940138128610e+00, TOL));

[e0, m] = newtonnu(5.727401464106e-04, 1.971189384963e+00);
assert(isequalRel(e0, 1.970661885150e+00, TOL));
assert(isequalRel(m,  1.970134326561e+00, TOL));

[e0, m] = newtonnu(1.069219642677e-03, 3.056861482628e+00);
assert(isequalRel(e0, 3.056770946507e+00, TOL));
assert(isequalRel(m,  3.056680362185e+00, TOL));

[e0, m] = newtonnu(1.376351918738e-03, 3.159198185783e+00);
assert(isequalRel(e0, -3.123962874545e+00, TOL));
assert(isequalRel(m,  3.159246696158e+00, TOL));

[e0, m] = newtonnu(1.294617565144e-03, 5.288416964379e+00);
assert(isequalRel(e0, -9.936830163633e-01, TOL));
assert(isequalRel(m,  5.290587233593e+00, TOL));

[e0, m] = newtonnu(1.504204024512e-03, 9.807516430894e-01);
assert(isequalRel(e0, 9.795022984388e-01, TOL));
assert(isequalRel(m,  9.782534781184e-01, TOL));

[e0, m] = newtonnu(1.644044584100e-03, 3.255122645661e+00);
assert(isequalRel(e0, -3.027876261481e+00, TOL));
assert(isequalRel(m,  3.255495597846e+00, TOL));

[e0, m] = newtonnu(4.134101163345e-04, 3.376722047172e+00);
assert(isequalRel(e0, -2.906366928972e+00, TOL));
assert(isequalRel(m,  3.376914728603e+00, TOL));

[e0, m] = newtonnu(1.425465157565e-03, 2.974557517523e+00);
assert(isequalRel(e0, 2.974320353619e+00, TOL));
assert(isequalRel(m,  2.974083023159e+00, TOL));
# *** error: t:= 1560.000000 *** code =   1
# 28623

[e0, m] = newtonnu(6.253749953957e-01, 4.416709793252e+00);
assert(isequalRel(e0, -1.150086158832e+00, TOL));
assert(isequalRel(m,  5.703940901115e+00, TOL));

[e0, m] = newtonnu(6.252060714442e-01, 2.531984598019e+00);
assert(isequalRel(e0, 1.981646449199e+00, TOL));
assert(isequalRel(m,  1.408469011228e+00, TOL));

[e0, m] = newtonnu(6.249787437426e-01, 3.217306037618e+00);
assert(isequalRel(e0, -2.984238326928e+00, TOL));
assert(isequalRel(m,  3.396884756261e+00, TOL));

[e0, m] = newtonnu(6.251022227779e-01, 4.076040856151e+00);
assert(isequalRel(e0, -1.521709521421e+00, TOL));
assert(isequalRel(m,  5.385825063318e+00, TOL));

[e0, m] = newtonnu(6.250011839676e-01, 2.350737456572e+00);
assert(isequalRel(e0, 1.710842920648e+00, TOL));
assert(isequalRel(m,  1.091960814968e+00, TOL));

[e0, m] = newtonnu(6.247306804556e-01, 3.123949627337e+00);
assert(isequalRel(e0, 3.104885159496e+00, TOL));
assert(isequalRel(m,  3.081958011370e+00, TOL));

[e0, m] = newtonnu(6.248041257720e-01, 3.858943902046e+00);
assert(isequalRel(e0, -1.816555642639e+00, TOL));
assert(isequalRel(m,  5.072660218557e+00, TOL));

[e0, m] = newtonnu(6.247830071695e-01, 2.100922125379e+00);
assert(isequalRel(e0, 1.395741968258e+00, TOL));
assert(isequalRel(m,  7.805074740614e-01, TOL));

[e0, m] = newtonnu(6.244905477618e-01, 3.031490045493e+00);
assert(isequalRel(e0, 2.913351627055e+00, TOL));
assert(isequalRel(m,  2.772051574029e+00, TOL));

[e0, m] = newtonnu(6.245071111651e-01, 3.699088170812e+00);
assert(isequalRel(e0, -2.067695498498e+00, TOL));
assert(isequalRel(m,  4.764472125349e+00, TOL));

[e0, m] = newtonnu(6.245202261218e-01, 1.697545348109e+00);
assert(isequalRel(e0, 9.994031863580e-01, TOL));
assert(isequalRel(m,  4.740890128887e-01, TOL));

[e0, m] = newtonnu(6.242578356432e-01, 2.937315397418e+00);
assert(isequalRel(e0, 2.721671031936e+00, TOL));
assert(isequalRel(m,  2.467168050717e+00, TOL));
# 28626

[e0, m] = newtonnu(5.248254601406e-05, 6.922562299435e-01);
assert(isequalRel(e0, 6.922227322880e-01, TOL));
assert(isequalRel(m,  6.921892353092e-01, TOL));

[e0, m] = newtonnu(3.811314442850e-05, 9.132128511527e-01);
assert(isequalRel(e0, 9.131826860351e-01, TOL));
assert(isequalRel(m,  9.131525212689e-01, TOL));

[e0, m] = newtonnu(2.128915564641e-05, 1.073151733387e+00);
assert(isequalRel(e0, 1.073133026501e+00, TOL));
assert(isequalRel(m,  1.073114319711e+00, TOL));

[e0, m] = newtonnu(5.049959995073e-06, 4.527199825854e-01);
assert(isequalRel(e0, 4.527177736717e-01, TOL));
assert(isequalRel(m,  4.527155647630e-01, TOL));

[e0, m] = newtonnu(1.687344340959e-05, 5.202684757930e+00);
assert(isequalRel(e0, -1.080485663665e+00, TOL));
assert(isequalRel(m,  5.202714529040e+00, TOL));

[e0, m] = newtonnu(3.407549879677e-05, 5.320193939209e+00);
assert(isequalRel(e0, -9.629633955461e-01, TOL));
assert(isequalRel(m,  5.320249883786e+00, TOL));

[e0, m] = newtonnu(4.918143532648e-05, 5.533109643824e+00);
assert(isequalRel(e0, -7.500421372633e-01, TOL));
assert(isequalRel(m,  5.533176695405e+00, TOL));

[e0, m] = newtonnu(6.098391755986e-05, 5.767930670346e+00);
assert(isequalRel(e0, -5.152245874123e-01, TOL));
assert(isequalRel(m,  5.767990768391e+00, TOL));

[e0, m] = newtonnu(6.864105801929e-05, 6.010623465194e+00);
assert(isequalRel(e0, -2.725433644520e-01, TOL));
assert(isequalRel(m,  6.010660419651e+00, TOL));

[e0, m] = newtonnu(7.161768038708e-05, 6.256278308620e+00);
assert(isequalRel(e0, -2.690507184454e-02, TOL));
assert(isequalRel(m,  6.256282161981e+00, TOL));

[e0, m] = newtonnu(6.970674633954e-05, 2.190182011693e-01);
assert(isequalRel(e0, 2.190030564033e-01, TOL));
assert(isequalRel(m,  2.189879121526e-01, TOL));

[e0, m] = newtonnu(6.304075253192e-05, 4.626913229175e-01);
assert(isequalRel(e0, 4.626631849629e-01, TOL));
assert(isequalRel(m,  4.626350478021e-01, TOL));
# 28872

[e0, m] = newtonnu(2.889098117477e-02, 2.349904176644e+00);
assert(isequalRel(e0, 2.329132639724e+00, TOL));
assert(isequalRel(m,  2.308158331790e+00, TOL));

[e0, m] = newtonnu(2.937401546552e-02, 2.713880114471e+00);
assert(isequalRel(e0, 2.701528475405e+00, TOL));
assert(isequalRel(m,  2.689015217385e+00, TOL));

[e0, m] = newtonnu(3.032088778104e-02, 3.052341460815e+00);
assert(isequalRel(e0, 3.049596802890e+00, TOL));
assert(isequalRel(m,  3.046811339913e+00, TOL));

[e0, m] = newtonnu(3.090121129435e-02, 3.365074515700e+00);
assert(isequalRel(e0, -2.911155853618e+00, TOL));
assert(isequalRel(m,  3.379087376721e+00, TOL));

[e0, m] = newtonnu(3.056806871265e-02, 3.674123865722e+00);
assert(isequalRel(e0, -2.593331067741e+00, TOL));
assert(isequalRel(m,  3.705786451326e+00, TOL));

[e0, m] = newtonnu(2.949282059374e-02, 4.007195184999e+00);
assert(isequalRel(e0, -2.253311008563e+00, TOL));
assert(isequalRel(m,  4.052760404378e+00, TOL));

[e0, m] = newtonnu(2.848177036626e-02, 4.378339757688e+00);
assert(isequalRel(e0, -1.877808093262e+00, TOL));
assert(isequalRel(m,  4.432527202422e+00, TOL));

[e0, m] = newtonnu(2.828803260517e-02, 4.770266516375e+00);
assert(isequalRel(e0, -1.484697441886e+00, TOL));
assert(isequalRel(m,  4.826671112807e+00, TOL));

[e0, m] = newtonnu(2.874720882759e-02, 5.148257147930e+00);
assert(isequalRel(e0, -1.109022019444e+00, TOL));
assert(isequalRel(m,  5.199899611280e+00, TOL));

[e0, m] = newtonnu(2.890618727506e-02, 5.502142827149e+00);
assert(isequalRel(e0, -7.608952181292e-01, TOL));
assert(isequalRel(m,  5.542222930208e+00, TOL));
# 29141

[e0, m] = newtonnu(2.790767404911e-03, 3.251142425279e+00);
assert(isequalRel(e0, -3.031737340732e+00, TOL));
assert(isequalRel(m,  3.251753930800e+00, TOL));

[e0, m] = newtonnu(9.673528490398e-04, 4.561928014795e+00);
assert(isequalRel(e0, -1.720300799107e+00, TOL));
assert(isequalRel(m,  4.563841070107e+00, TOL));

[e0, m] = newtonnu(1.730502113280e-03, 4.292054198164e+00);
assert(isequalRel(e0, -1.989550684125e+00, TOL));
assert(isequalRel(m,  4.295215603132e+00, TOL));

[e0, m] = newtonnu(6.565785196579e-04, 1.174505520790e+00);
assert(isequalRel(e0, 1.173899904405e+00, TOL));
assert(isequalRel(m,  1.173294364920e+00, TOL));

[e0, m] = newtonnu(9.422310831730e-04, 3.281054437973e+00);
assert(isequalRel(e0, -3.001999828363e+00, TOL));
assert(isequalRel(m,  3.281316580767e+00, TOL));

[e0, m] = newtonnu(2.144810920918e-03, 3.350101125732e+00);
assert(isequalRel(e0, -2.932639736833e+00, TOL));
assert(isequalRel(m,  3.350990480714e+00, TOL));

[e0, m] = newtonnu(1.665931398776e-03, 4.948578992540e+00);
assert(isequalRel(e0, -1.332986950083e+00, TOL));
assert(isequalRel(m,  4.951817403123e+00, TOL));

[e0, m] = newtonnu(9.875766192070e-04, 3.497936105017e+00);
assert(isequalRel(e0, -2.784904526737e+00, TOL));
assert(isequalRel(m,  3.498625615272e+00, TOL));

[e0, m] = newtonnu(7.652547772083e-04, 5.136350963792e-01);
assert(isequalRel(e0, 5.132592163169e-01, TOL));
assert(isequalRel(m,  5.128834615956e-01, TOL));

[e0, m] = newtonnu(2.756546056247e-03, 3.277422958907e+00);
assert(isequalRel(e0, -3.005388564923e+00, TOL));
assert(isequalRel(m,  3.278171035304e+00, TOL));

[e0, m] = newtonnu(9.564899889534e-04, 4.818615885002e+00);
assert(isequalRel(e0, -1.463618371786e+00, TOL));
assert(isequalRel(m,  4.820517936984e+00, TOL));

[e0, m] = newtonnu(1.591625695760e-03, 4.204475559285e+00);
assert(isequalRel(e0, -2.077318507940e+00, TOL));
assert(isequalRel(m,  4.207258575667e+00, TOL));

[e0, m] = newtonnu(7.411286038596e-04, 1.071156580722e+00);
assert(isequalRel(e0, 1.070506166630e+00, TOL));
assert(isequalRel(m,  1.069855868217e+00, TOL));

[e0, m] = newtonnu(1.256333636802e-03, 3.375274995895e+00);
assert(isequalRel(e0, -2.907619214981e+00, TOL));
assert(isequalRel(m,  3.375857366264e+00, TOL));

[e0, m] = newtonnu(1.617052197068e-03, 3.441373946322e+00);
assert(isequalRel(e0, -2.841333457667e+00, TOL));
assert(isequalRel(m,  3.442330121509e+00, TOL));

[e0, m] = newtonnu(1.608021315605e-03, 4.932554834367e+00);
assert(isequalRel(e0, -1.349061541930e+00, TOL));
assert(isequalRel(m,  4.935692418022e+00, TOL));

[e0, m] = newtonnu(6.936464890584e-04, 2.967513492439e+00);
assert(isequalRel(e0, 2.967393310906e+00, TOL));
assert(isequalRel(m,  2.967273088337e+00, TOL));

[e0, m] = newtonnu(3.737073375169e-04, 1.528744208093e-01);
assert(isequalRel(e0, 1.528175232903e-01, TOL));
assert(isequalRel(m,  1.527606362809e-01, TOL));

[e0, m] = newtonnu(2.600353921139e-03, 3.269362202321e+00);
assert(isequalRel(e0, -3.013491333661e+00, TOL));
assert(isequalRel(m,  3.270026171986e+00, TOL));

[e0, m] = newtonnu(1.475769388942e-03, 5.364426811137e+00);
assert(isequalRel(e0, -9.175860068807e-01, TOL));
assert(isequalRel(m,  5.366771263164e+00, TOL));

[e0, m] = newtonnu(1.228058368261e-03, 3.595052659694e+00);
assert(isequalRel(e0, -2.687594364238e+00, TOL));
assert(isequalRel(m,  3.596129523039e+00, TOL));
# *** error: t:= 440.000000 *** code =   6
# 29238

[e0, m] = newtonnu(2.085614589579e-02, 3.856684162202e-01);
assert(isequalRel(e0, 3.778970636090e-01, TOL));
assert(isequalRel(m,  3.702018396986e-01, TOL));

[e0, m] = newtonnu(2.083554807806e-02, 2.353467440563e+00);
assert(isequalRel(e0, 2.338583676235e+00, TOL));
assert(isequalRel(m,  2.323593557526e+00, TOL));

[e0, m] = newtonnu(2.052397602446e-02, 4.258859852930e+00);
assert(isequalRel(e0, -2.005791564012e+00, TOL));
assert(isequalRel(m,  4.296006363366e+00, TOL));

[e0, m] = newtonnu(2.032137735504e-02, 6.229835386726e+00);
assert(isequalRel(e0, -5.227706556589e-02, TOL));
assert(isequalRel(m,  6.231970099779e+00, TOL));

[e0, m] = newtonnu(2.049475083034e-02, 1.928906360214e+00);
assert(isequalRel(e0, 1.909641151699e+00, TOL));
assert(isequalRel(m,  1.890311747313e+00, TOL));

[e0, m] = newtonnu(2.054653257801e-02, 3.837856027087e+00);
assert(isequalRel(e0, -2.432045742682e+00, TOL));
assert(isequalRel(m,  3.864525427033e+00, TOL));

[e0, m] = newtonnu(2.049969994571e-02, 5.795730699433e+00);
assert(isequalRel(e0, -4.779382424385e-01, TOL));
assert(isequalRel(m,  5.814675889982e+00, TOL));

[e0, m] = newtonnu(2.075906782496e-02, 1.512897595518e+00);
assert(isequalRel(e0, 1.492184263057e+00, TOL));
assert(isequalRel(m,  1.471489306236e+00, TOL));

[e0, m] = newtonnu(2.098690457849e-02, 3.446394713721e+00);
assert(isequalRel(e0, -2.830427963887e+00, TOL));
assert(isequalRel(m,  3.459182853549e+00, TOL));

[e0, m] = newtonnu(2.095331036873e-02, 5.400295422210e+00);
assert(isequalRel(e0, -8.668074020880e-01, TOL));
assert(isequalRel(m,  5.432349908996e+00, TOL));

[e0, m] = newtonnu(2.111864606986e-02, 1.128396722726e+00);
assert(isequalRel(e0, 1.109395583500e+00, TOL));
assert(isequalRel(m,  1.090485319290e+00, TOL));

[e0, m] = newtonnu(2.122432630575e-02, 3.087220305974e+00);
assert(isequalRel(e0, 3.086054372070e+00, TOL));
assert(isequalRel(m,  3.084876215350e+00, TOL));
# 88888

[e0, m] = newtonnu(1.052092807260e-02, 3.847874084449e+00);
assert(isequalRel(e0, -2.428455442886e+00, TOL));
assert(isequalRel(m,  3.861612757496e+00, TOL));

[e0, m] = newtonnu(9.052250412713e-03, 6.046148101654e+00);
assert(isequalRel(e0, -2.349207912162e-01, TOL));
assert(isequalRel(m,  6.050371571658e+00, TOL));

[e0, m] = newtonnu(9.521189153082e-03, 1.914091192733e+00);
assert(isequalRel(e0, 1.905111024903e+00, TOL));
assert(isequalRel(m,  1.896116972636e+00, TOL));

[e0, m] = newtonnu(1.028277032065e-02, 3.931537311526e+00);
assert(isequalRel(e0, -2.344317306241e+00, TOL));
assert(isequalRel(m,  3.946224861887e+00, TOL));

[e0, m] = newtonnu(8.796150676142e-03, 6.142192224381e+00);
assert(isequalRel(e0, -1.397623268963e-01, TOL));
assert(isequalRel(m,  6.144648352357e+00, TOL));

[e0, m] = newtonnu(9.370681122593e-03, 2.002708132273e+00);
assert(isequalRel(e0, 1.994181128036e+00, TOL));
assert(isequalRel(m,  1.985637845032e+00, TOL));

[e0, m] = newtonnu(1.003138852591e-02, 4.020955344172e+00);
assert(isequalRel(e0, -2.254477506419e+00, TOL));
assert(isequalRel(m,  4.036484662356e+00, TOL));

[e0, m] = newtonnu(8.547559047484e-03, 6.245283000327e+00);
assert(isequalRel(e0, -3.757978372458e-02, TOL));
assert(isequalRel(m,  6.245926663275e+00, TOL));

[e0, m] = newtonnu(9.228920995253e-03, 2.096871623755e+00);
assert(isequalRel(e0, 2.088871932006e+00, TOL));
assert(isequalRel(m,  2.080854087559e+00, TOL));

[e0, m] = newtonnu(9.779525182704e-03, 4.116685011800e+00);
assert(isequalRel(e0, -2.158382836358e+00, TOL));
assert(isequalRel(m,  4.132941784111e+00, TOL));

[e0, m] = newtonnu(8.322461617424e-03, 7.247449604514e-02);
assert(isequalRel(e0, 7.187433818701e-02, TOL));
assert(isequalRel(m,  7.127668165083e-02, TOL));

[e0, m] = newtonnu(9.108405326374e-03, 2.196448877477e+00);
assert(isequalRel(e0, 2.189045911904e+00, TOL));
assert(isequalRel(m,  2.181623524669e+00, TOL));

