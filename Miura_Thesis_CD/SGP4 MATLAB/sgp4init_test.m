TOL = 0.000001;

##JS##test('72, satin,  2.809800000000e-05,  1.859667000000e-01,  1.844178495062e+04,  5.790416027489e+00,  5.980929187319e-01,  3.373093125574e-01,  4.722944544078e-02,  6.086385471383e+00', function () {
##JS##var satin, rets, satrec, TOL = 0.000001;
##JS## // For JS change   'attr', -> 'attr':
##JS##satin = {
satin = struct(  ##NOTJS 
'error',            0.000000000000e+00,
'satnum',           5.000000000000e+00,
'epochyr',          0.000000000000e+00,
'epochdays',        1.797849506200e+02,
'ndot',             6.969196665950e-13,
'nddot',            0.000000000000e+00,
'bstar',            2.809800000000e-05,
'inclo',            5.980929187319e-01,
'nodeo',            6.086385471383e+00,
'ecco',             1.859667000000e-01,
'argpo',            5.790416027489e+00,
'mo',               3.373093125574e-01,
'no',               4.722944544078e-02,
'a',                1.353457482755e+00,
'alta',             6.051555044136e-01,
'altp',             1.017594610970e-01,
'jdsatepoch',       2.451723284951e+06 
);  ##NOTJS
##JS##};
[satrec] = sgp4init(72, satin,  2.809800000000e-05,  1.859667000000e-01,  1.844178495062e+04,  5.790416027489e+00,  5.980929187319e-01,  3.373093125574e-01,  4.722944544078e-02,  6.086385471383e+00);
assert(isequalRel(satrec.error,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.satnum,           5.000000000000e+00, TOL));
assert(isequalRel(satrec.epochyr,          0.000000000000e+00, TOL));
assert(isequalRel(satrec.epochdays,        1.797849506200e+02, TOL));
assert(isequalRel(satrec.ndot,             6.969196665950e-13, TOL));
assert(isequalRel(satrec.nddot,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.bstar,            2.809800000000e-05, TOL));
assert(isequalRel(satrec.inclo,            5.980929187319e-01, TOL));
assert(isequalRel(satrec.nodeo,            6.086385471383e+00, TOL));
assert(isequalRel(satrec.ecco,             1.859667000000e-01, TOL));
assert(isequalRel(satrec.argpo,            5.790416027489e+00, TOL));
assert(isequalRel(satrec.mo,               3.373093125574e-01, TOL));
assert(isequalRel(satrec.no,               4.720630155918e-02, TOL));
assert(isequalRel(satrec.a,                1.353457482755e+00, TOL));
assert(isequalRel(satrec.alta,             6.051555044136e-01, TOL));
assert(isequalRel(satrec.altp,             1.017594610970e-01, TOL));
assert(isequalRel(satrec.jdsatepoch,       2.451723284951e+06, TOL));
assert(isequalRel(satrec.isimp,            0.000000000000e+00, TOL));
assert(isequal(satrec.method,             'n')); ##NOTJS
assert(isequalRel(satrec.aycof,            6.602162317959e-04, TOL));
assert(isequalRel(satrec.con41,            1.048865087996e+00, TOL));
assert(isequalRel(satrec.cc1,              9.531093269423e-12, TOL));
assert(isequalRel(satrec.cc4,              5.259360731617e-07, TOL));
assert(isequalRel(satrec.cc5,              1.646515247679e-05, TOL));
assert(isequalRel(satrec.d2,               1.439873790292e-21, TOL));
assert(isequalRel(satrec.d3,               3.217106892468e-31, TOL));
assert(isequalRel(satrec.d4,               8.358359772163e-41, TOL));
assert(isequalRel(satrec.delmo,            4.873084659112e+00, TOL));
assert(isequalRel(satrec.eta,              7.369095429280e-01, TOL));
assert(isequalRel(satrec.argpdot,          5.429305256054e-05, TOL));
assert(isequalRel(satrec.omgcof,           6.701312384410e-15, TOL));
assert(isequalRel(satrec.sinmao,           3.309492298727e-01, TOL));
assert(isequalRel(satrec.t,                0.000000000000e+00, TOL));
assert(isequalRel(satrec.t2cof,            1.429663990413e-11, TOL));
assert(isequalRel(satrec.t3cof,            1.621557268113e-21, TOL));
assert(isequalRel(satrec.t4cof,            2.846182838253e-31, TOL));
assert(isequalRel(satrec.t5cof,            6.080661397341e-41, TOL));
assert(isequalRel(satrec.x1mth2,           3.170449706681e-01, TOL));
assert(isequalRel(satrec.x7thm1,           3.780685205323e+00, TOL));
assert(isequalRel(satrec.mdot,             4.722944338321e-02, TOL));
assert(isequalRel(satrec.nodedot,         -3.717135384537e-05, TOL));
assert(isequalRel(satrec.xlcof,            1.289057728039e-03, TOL));
assert(isequalRel(satrec.xmcof,           -1.885936118348e-11, TOL));
assert(isequalRel(satrec.nodecf,          -1.194221173313e-15, TOL));
assert(isequalRel(satrec.irez,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2201,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2211,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3210,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3222,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4410,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4422,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5220,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5232,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5421,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5433,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.dedt,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del1,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del2,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del3,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.didt,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.dmdt,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.dnodt,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.domdt,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.e3,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.ee2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.peo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pgho,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.pho,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pinco,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.plo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.se2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.se3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sgh2,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.sgh3,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.sgh4,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.sh2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sh3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.si2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.si3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sl2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sl3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sl4,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.gsto,             3.469172342379e+00, TOL));
assert(isequalRel(satrec.xfact,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xgh2,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.xgh3,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.xgh4,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.xh2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xh3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xi2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xi3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xl2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xl3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xl4,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xlamo,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.zmol,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.zmos,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.atime,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xli,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xni,              0.000000000000e+00, TOL));
assert(isequal(satrec.init,               'n')); ##NOTJS
##JS##equal(satrec.method,             'n');
##JS##equal(satrec.init,               'n');
##JS##});
## 5

##JS##test('72, satin,  1.000000000000e-04,  1.450506000000e-01,  1.975491070959e+04,  3.623303527140e+00,  2.000636014976e-01,  2.512139658858e+00,  5.246109836613e-03,  4.766670465451e+00', function () {
##JS##var satin, rets, satrec, TOL = 0.000001;
##JS## // For JS change   'attr', -> 'attr':
##JS##satin = {
satin = struct(  ##NOTJS 
'error',            0.000000000000e+00,
'satnum',           4.632000000000e+03,
'epochyr',          4.000000000000e+00,
'epochdays',        3.191070959000e+01,
'ndot',            -2.545271825825e-12,
'nddot',            0.000000000000e+00,
'bstar',            1.000000000000e-04,
'inclo',            2.000636014976e-01,
'nodeo',            4.766670465451e+00,
'ecco',             1.450506000000e-01,
'argpo',            3.623303527140e+00,
'mo',               2.512139658858e+00,
'no',               5.246109836613e-03,
'a',                5.857265750666e+00,
'alta',             5.706865662159e+00,
'altp',             4.007665839172e+00,
'jdsatepoch',       2.453036410710e+06 
);  ##NOTJS
##JS##};
[satrec] = sgp4init(72, satin,  1.000000000000e-04,  1.450506000000e-01,  1.975491070959e+04,  3.623303527140e+00,  2.000636014976e-01,  2.512139658858e+00,  5.246109836613e-03,  4.766670465451e+00);
assert(isequalRel(satrec.error,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.satnum,           4.632000000000e+03, TOL));
assert(isequalRel(satrec.epochyr,          4.000000000000e+00, TOL));
assert(isequalRel(satrec.epochdays,        3.191070959000e+01, TOL));
assert(isequalRel(satrec.ndot,            -2.545271825825e-12, TOL));
assert(isequalRel(satrec.nddot,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.bstar,            1.000000000000e-04, TOL));
assert(isequalRel(satrec.inclo,            2.000636014976e-01, TOL));
assert(isequalRel(satrec.nodeo,            4.766670465451e+00, TOL));
assert(isequalRel(satrec.ecco,             1.450506000000e-01, TOL));
assert(isequalRel(satrec.argpo,            3.623303527140e+00, TOL));
assert(isequalRel(satrec.mo,               2.512139658858e+00, TOL));
assert(isequalRel(satrec.no,               5.245868658927e-03, TOL));
assert(isequalRel(satrec.a,                5.857265750666e+00, TOL));
assert(isequalRel(satrec.alta,             5.706865662159e+00, TOL));
assert(isequalRel(satrec.altp,             4.007665839172e+00, TOL));
assert(isequalRel(satrec.jdsatepoch,       2.453036410710e+06, TOL));
assert(isequalRel(satrec.isimp,            1.000000000000e+00, TOL));
assert(isequal(satrec.method,             'd')); ##NOTJS
assert(isequalRel(satrec.aycof,            2.330198039387e-04, TOL));
assert(isequalRel(satrec.con41,            1.881517177058e+00, TOL));
assert(isequalRel(satrec.cc1,              1.343526634302e-17, TOL));
assert(isequalRel(satrec.cc4,              9.961442478352e-14, TOL));
assert(isequalRel(satrec.cc5,              5.042388615446e-11, TOL));
assert(isequalRel(satrec.d2,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.delmo,            6.321876200893e-01, TOL));
assert(isequalRel(satrec.eta,              1.753535760959e-01, TOL));
assert(isequalRel(satrec.argpdot,          4.927036138558e-07, TOL));
assert(isequalRel(satrec.omgcof,          -2.103491826186e-21, TOL));
assert(isequalRel(satrec.sinmao,           5.887026745200e-01, TOL));
assert(isequalRel(satrec.t,                0.000000000000e+00, TOL));
assert(isequalRel(satrec.t2cof,            2.015289951454e-17, TOL));
assert(isequalRel(satrec.t3cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t4cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t5cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.x1mth2,           3.949427431409e-02, TOL));
assert(isequalRel(satrec.x7thm1,           5.723540079801e+00, TOL));
assert(isequalRel(satrec.mdot,             5.246109831442e-03, TOL));
assert(isequalRel(satrec.nodedot,         -2.539711450894e-07, TOL));
assert(isequalRel(satrec.xlcof,            4.648659461777e-04, TOL));
assert(isequalRel(satrec.xmcof,           -8.942199364406e-15, TOL));
assert(isequalRel(satrec.nodecf,          -1.168869017451e-23, TOL));
assert(isequalRel(satrec.irez,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2201,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2211,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3210,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3222,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4410,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4422,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5220,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5232,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5421,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5433,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.dedt,            -5.739257257134e-10, TOL));
assert(isequalRel(satrec.del1,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del2,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del3,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.didt,            -2.669482583786e-08, TOL));
assert(isequalRel(satrec.dmdt,            -6.045613838815e-08, TOL));
assert(isequalRel(satrec.dnodt,           -6.171410259572e-08, TOL));
assert(isequalRel(satrec.domdt,            6.528741483006e-08, TOL));
assert(isequalRel(satrec.e3,              -3.259811599808e-04, TOL));
assert(isequalRel(satrec.ee2,              9.631690304302e-05, TOL));
assert(isequalRel(satrec.peo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pgho,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.pho,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pinco,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.plo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.se2,             -1.598763953845e-03, TOL));
assert(isequalRel(satrec.se3,             -1.532829312733e-03, TOL));
assert(isequalRel(satrec.sgh2,             1.009321688332e-02, TOL));
assert(isequalRel(satrec.sgh3,            -1.031125833038e-02, TOL));
assert(isequalRel(satrec.sgh4,            -1.698290639332e-04, TOL));
assert(isequalRel(satrec.sh2,             -1.436571665398e-03, TOL));
assert(isequalRel(satrec.sh3,             -2.604666666759e-04, TOL));
assert(isequalRel(satrec.si2,             -2.752019370380e-04, TOL));
assert(isequalRel(satrec.si3,              1.412253967491e-03, TOL));
assert(isequalRel(satrec.sl2,             -9.737328456846e-03, TOL));
assert(isequalRel(satrec.sl3,              9.584139594897e-03, TOL));
assert(isequalRel(satrec.sl4,              4.041147860756e-04, TOL));
assert(isequalRel(satrec.gsto,             1.716027084070e+00, TOL));
assert(isequalRel(satrec.xfact,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xgh2,             2.069563786522e-03, TOL));
assert(isequalRel(satrec.xgh3,             6.246874813546e-04, TOL));
assert(isequalRel(satrec.xgh4,            -8.940507699742e-05, TOL));
assert(isequalRel(satrec.xh2,             -5.956657020046e-05, TOL));
assert(isequalRel(satrec.xh3,             -2.660535481999e-04, TOL));
assert(isequalRel(satrec.xi2,             -2.550806983774e-04, TOL));
assert(isequalRel(satrec.xi3,              6.513825317331e-05, TOL));
assert(isequalRel(satrec.xl2,             -1.862212872508e-03, TOL));
assert(isequalRel(satrec.xl3,             -5.873201141188e-04, TOL));
assert(isequalRel(satrec.xl4,              2.127428175609e-04, TOL));
assert(isequalRel(satrec.xlamo,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.zmol,             3.145380241287e+00, TOL));
assert(isequalRel(satrec.zmos,             4.795490950675e-01, TOL));
assert(isequalRel(satrec.atime,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xli,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xni,              0.000000000000e+00, TOL));
assert(isequal(satrec.init,               'n')); ##NOTJS
##JS##equal(satrec.method,             'd');
##JS##equal(satrec.init,               'n');
##JS##});
## 4632

##JS##test('72, satin,  1.280800000000e-04,  3.003500000000e-03,  2.063082412014e+04,  2.428744336539e+00,  1.013301511794e+00,  3.860413487341e+00,  6.791020666036e-02,  9.432195610090e-01', function () {
##JS##var satin, rets, satrec, TOL = 0.000001;
##JS## // For JS change   'attr', -> 'attr':
##JS##satin = {
satin = struct(  ##NOTJS 
'error',            0.000000000000e+00,
'satnum',           6.251000000000e+03,
'epochyr',          6.000000000000e+00,
'epochdays',        1.768241201400e+02,
'ndot',             2.692230972911e-10,
'nddot',            0.000000000000e+00,
'bstar',            1.280800000000e-04,
'inclo',            1.013301511794e+00,
'nodeo',            9.432195610090e-01,
'ecco',             3.003500000000e-03,
'argpo',            2.428744336539e+00,
'mo',               3.860413487341e+00,
'no',               6.791020666036e-02,
'a',                1.062420593358e+00,
'alta',             6.561157360986e-02,
'altp',             5.922961310556e-02,
'jdsatepoch',       2.453912324120e+06 
);  ##NOTJS
##JS##};
[satrec] = sgp4init(72, satin,  1.280800000000e-04,  3.003500000000e-03,  2.063082412014e+04,  2.428744336539e+00,  1.013301511794e+00,  3.860413487341e+00,  6.791020666036e-02,  9.432195610090e-01);
assert(isequalRel(satrec.error,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.satnum,           6.251000000000e+03, TOL));
assert(isequalRel(satrec.epochyr,          6.000000000000e+00, TOL));
assert(isequalRel(satrec.epochdays,        1.768241201400e+02, TOL));
assert(isequalRel(satrec.ndot,             2.692230972911e-10, TOL));
assert(isequalRel(satrec.nddot,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.bstar,            1.280800000000e-04, TOL));
assert(isequalRel(satrec.inclo,            1.013301511794e+00, TOL));
assert(isequalRel(satrec.nodeo,            9.432195610090e-01, TOL));
assert(isequalRel(satrec.ecco,             3.003500000000e-03, TOL));
assert(isequalRel(satrec.argpo,            2.428744336539e+00, TOL));
assert(isequalRel(satrec.mo,               3.860413487341e+00, TOL));
assert(isequalRel(satrec.no,               6.791803699335e-02, TOL));
assert(isequalRel(satrec.a,                1.062420593358e+00, TOL));
assert(isequalRel(satrec.alta,             6.561157360986e-02, TOL));
assert(isequalRel(satrec.altp,             5.922961310556e-02, TOL));
assert(isequalRel(satrec.jdsatepoch,       2.453912324120e+06, TOL));
assert(isequalRel(satrec.isimp,            0.000000000000e+00, TOL));
assert(isequal(satrec.method,             'n')); ##NOTJS
assert(isequalRel(satrec.aycof,            9.949933492029e-04, TOL));
assert(isequalRel(satrec.con41,           -1.602801925378e-01, TOL));
assert(isequalRel(satrec.cc1,              2.786746389227e-09, TOL));
assert(isequalRel(satrec.cc4,              5.199527839737e-06, TOL));
assert(isequalRel(satrec.cc5,              6.501942743088e-04, TOL));
assert(isequalRel(satrec.d2,               6.585618757245e-16, TOL));
assert(isequalRel(satrec.d3,               2.328345454584e-22, TOL));
assert(isequalRel(satrec.d4,               9.598355084426e-29, TOL));
assert(isequalRel(satrec.delmo,            8.630169062242e-01, TOL));
assert(isequalRel(satrec.eta,              6.367505613325e-02, TOL));
assert(isequalRel(satrec.argpdot,          1.940705735802e-05, TOL));
assert(isequalRel(satrec.omgcof,          -5.189726839277e-08, TOL));
assert(isequalRel(satrec.sinmao,          -6.584977098201e-01, TOL));
assert(isequalRel(satrec.t,                0.000000000000e+00, TOL));
assert(isequalRel(satrec.t2cof,            4.180119583841e-09, TOL));
assert(isequalRel(satrec.t3cof,            6.740937866003e-16, TOL));
assert(isequalRel(satrec.t4cof,            1.801857482522e-22, TOL));
assert(isequalRel(satrec.t5cof,            5.969868409204e-29, TOL));
assert(isequalRel(satrec.x1mth2,           7.200933975126e-01, TOL));
assert(isequalRel(satrec.x7thm1,           9.593462174118e-01, TOL));
assert(isequalRel(satrec.mdot,             6.791021042403e-02, TOL));
assert(isequalRel(satrec.nodedot,         -5.167653849627e-05, TOL));
assert(isequalRel(satrec.xlcof,            1.836761984615e-03, TOL));
assert(isequalRel(satrec.xmcof,           -1.331465223622e-04, TOL));
assert(isequalRel(satrec.nodecf,          -5.043135183865e-13, TOL));
assert(isequalRel(satrec.irez,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2201,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2211,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3210,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3222,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4410,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4422,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5220,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5232,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5421,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5433,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.dedt,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del1,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del2,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del3,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.didt,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.dmdt,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.dnodt,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.domdt,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.e3,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.ee2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.peo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pgho,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.pho,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pinco,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.plo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.se2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.se3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sgh2,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.sgh3,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.sgh4,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.sh2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sh3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.si2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.si3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sl2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sl3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sl4,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.gsto,             3.673754967933e+00, TOL));
assert(isequalRel(satrec.xfact,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xgh2,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.xgh3,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.xgh4,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.xh2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xh3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xi2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xi3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xl2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xl3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xl4,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xlamo,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.zmol,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.zmos,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.atime,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xli,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xni,              0.000000000000e+00, TOL));
assert(isequal(satrec.init,               'n')); ##NOTJS
##JS##equal(satrec.method,             'n');
##JS##equal(satrec.init,               'n');
##JS##});
## 6251

##JS##test('72, satin,  1.187300000000e-04,  6.877146000000e-01,  2.063033215444e+04,  4.621022739372e+00,  1.119778813470e+00,  3.530050585206e-01,  8.748086888067e-03,  4.870720014138e+00', function () {
##JS##var satin, rets, satrec, TOL = 0.000001;
##JS## // For JS change   'attr', -> 'attr':
##JS##satin = {
satin = struct(  ##NOTJS 
'error',            0.000000000000e+00,
'satnum',           8.195000000000e+03,
'epochyr',          6.000000000000e+00,
'epochdays',        1.763321544400e+02,
'ndot',             2.999784651865e-12,
'nddot',            0.000000000000e+00,
'bstar',            1.187300000000e-04,
'inclo',            1.119778813470e+00,
'nodeo',            4.870720014138e+00,
'ecco',             6.877146000000e-01,
'argpo',            4.621022739372e+00,
'mo',               3.530050585206e-01,
'no',               8.748086888067e-03,
'a',                4.165282448733e+00,
'alta',             6.029808001850e+00,
'altp',             3.007568956154e-01,
'jdsatepoch',       2.453911832154e+06 
);  ##NOTJS
##JS##};
[satrec] = sgp4init(72, satin,  1.187300000000e-04,  6.877146000000e-01,  2.063033215444e+04,  4.621022739372e+00,  1.119778813470e+00,  3.530050585206e-01,  8.748086888067e-03,  4.870720014138e+00);
assert(isequalRel(satrec.error,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.satnum,           8.195000000000e+03, TOL));
assert(isequalRel(satrec.epochyr,          6.000000000000e+00, TOL));
assert(isequalRel(satrec.epochdays,        1.763321544400e+02, TOL));
assert(isequalRel(satrec.ndot,             2.999784651865e-12, TOL));
assert(isequalRel(satrec.nddot,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.bstar,            1.187300000000e-04, TOL));
assert(isequalRel(satrec.inclo,            1.119778813470e+00, TOL));
assert(isequalRel(satrec.nodeo,            4.870720014138e+00, TOL));
assert(isequalRel(satrec.ecco,             6.877146000000e-01, TOL));
assert(isequalRel(satrec.argpo,            4.621022739372e+00, TOL));
assert(isequalRel(satrec.mo,               3.530050585206e-01, TOL));
assert(isequalRel(satrec.no,               8.748547019630e-03, TOL));
assert(isequalRel(satrec.a,                4.165282448733e+00, TOL));
assert(isequalRel(satrec.alta,             6.029808001850e+00, TOL));
assert(isequalRel(satrec.altp,             3.007568956154e-01, TOL));
assert(isequalRel(satrec.jdsatepoch,       2.453911832154e+06, TOL));
assert(isequalRel(satrec.isimp,            1.000000000000e+00, TOL));
assert(isequal(satrec.method,             'd')); ##NOTJS
assert(isequalRel(satrec.aycof,            1.055286126372e-03, TOL));
assert(isequalRel(satrec.con41,           -4.300218866316e-01, TOL));
assert(isequalRel(satrec.cc1,              1.942515834721e-13, TOL));
assert(isequalRel(satrec.cc4,              1.205662340036e-09, TOL));
assert(isequalRel(satrec.cc5,              2.066270127143e-07, TOL));
assert(isequalRel(satrec.d2,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.delmo,            6.357151283114e+00, TOL));
assert(isequalRel(satrec.eta,              9.085028530233e-01, TOL));
assert(isequalRel(satrec.argpdot,         -7.437009265334e-08, TOL));
assert(isequalRel(satrec.omgcof,          -3.510477365587e-21, TOL));
assert(isequalRel(satrec.sinmao,           3.457191249346e-01, TOL));
assert(isequalRel(satrec.t,                0.000000000000e+00, TOL));
assert(isequalRel(satrec.t2cof,            2.913773752081e-13, TOL));
assert(isequalRel(satrec.t3cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t4cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t5cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.x1mth2,           8.100072955439e-01, TOL));
assert(isequalRel(satrec.x7thm1,           3.299489311928e-01, TOL));
assert(isequalRel(satrec.mdot,             8.748086886633e-03, TOL));
assert(isequalRel(satrec.nodedot,         -1.284567215801e-06, TOL));
assert(isequalRel(satrec.xlcof,            1.903275763135e-03, TOL));
assert(isequalRel(satrec.xmcof,           -2.410528625981e-15, TOL));
assert(isequalRel(satrec.nodecf,          -4.604617513548e-19, TOL));
assert(isequalRel(satrec.irez,             2.000000000000e+00, TOL));
assert(isequalRel(satrec.d2201,           -1.197359551623e-11, TOL));
assert(isequalRel(satrec.d2211,            6.453213834121e-11, TOL));
assert(isequalRel(satrec.d3210,           -3.893722738131e-12, TOL));
assert(isequalRel(satrec.d3222,           -7.364857538023e-12, TOL));
assert(isequalRel(satrec.d4410,            2.576960140946e-12, TOL));
assert(isequalRel(satrec.d4422,            4.361455592714e-12, TOL));
assert(isequalRel(satrec.d5220,           -2.528789465953e-12, TOL));
assert(isequalRel(satrec.d5232,            6.767712568551e-13, TOL));
assert(isequalRel(satrec.d5421,           -2.280698046562e-12, TOL));
assert(isequalRel(satrec.d5433,           -1.659570821491e-12, TOL));
assert(isequalRel(satrec.dedt,            -2.888547623461e-08, TOL));
assert(isequalRel(satrec.del1,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del2,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del3,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.didt,            -9.784108269214e-09, TOL));
assert(isequalRel(satrec.dmdt,             9.270786742527e-08, TOL));
assert(isequalRel(satrec.dnodt,           -6.124323489695e-08, TOL));
assert(isequalRel(satrec.domdt,           -1.415521073384e-08, TOL));
assert(isequalRel(satrec.e3,              -4.408046133189e-04, TOL));
assert(isequalRel(satrec.ee2,             -1.093428053938e-04, TOL));
assert(isequalRel(satrec.peo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pgho,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.pho,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pinco,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.plo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.se2,              2.501941522642e-03, TOL));
assert(isequalRel(satrec.se3,              1.007241988530e-03, TOL));
assert(isequalRel(satrec.sgh2,            -1.261915509701e-03, TOL));
assert(isequalRel(satrec.sgh3,             2.455746281541e-03, TOL));
assert(isequalRel(satrec.sgh4,            -7.471990261373e-05, TOL));
assert(isequalRel(satrec.sh2,              9.458037270825e-04, TOL));
assert(isequalRel(satrec.sh3,             -3.970223690620e-03, TOL));
assert(isequalRel(satrec.si2,             -1.110569917439e-03, TOL));
assert(isequalRel(satrec.si3,              2.735745904365e-05, TOL));
assert(isequalRel(satrec.sl2,              4.083492666433e-03, TOL));
assert(isequalRel(satrec.sl3,             -2.119115873088e-03, TOL));
assert(isequalRel(satrec.sl4,              2.888302541444e-04, TOL));
assert(isequalRel(satrec.gsto,             5.741801269032e-01, TOL));
assert(isequalRel(satrec.xfact,           -8.753597222054e-03, TOL));
assert(isequalRel(satrec.xgh2,             4.549202443830e-04, TOL));
assert(isequalRel(satrec.xgh3,            -2.464815107882e-05, TOL));
assert(isequalRel(satrec.xgh4,            -3.933566193975e-05, TOL));
assert(isequalRel(satrec.xh2,             -6.438340814882e-04, TOL));
assert(isequalRel(satrec.xh3,              3.079429279349e-04, TOL));
assert(isequalRel(satrec.xi2,              1.142408298542e-04, TOL));
assert(isequalRel(satrec.xi3,              1.200089628145e-04, TOL));
assert(isequalRel(satrec.xl2,             -7.862643771994e-04, TOL));
assert(isequalRel(satrec.xl3,             -4.559423560477e-04, TOL));
assert(isequalRel(satrec.xl4,              1.520522489668e-04, TOL));
assert(isequalRel(satrec.xlamo,            2.662899525810e+00, TOL));
assert(isequalRel(satrec.zmol,             1.703291771992e+00, TOL));
assert(isequalRel(satrec.zmos,             2.972158040326e+00, TOL));
assert(isequalRel(satrec.atime,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xli,              2.662899525810e+00, TOL));
assert(isequalRel(satrec.xni,              8.748547019630e-03, TOL));
assert(isequal(satrec.init,               'n')); ##NOTJS
##JS##equal(satrec.method,             'd');
##JS##equal(satrec.init,               'n');
##JS##});
## 8195

##JS##test('72, satin,  1.000000000000e-04,  7.069051000000e-01,  2.063056157475e+04,  4.712788660783e+00,  1.127426846252e+00,  2.850471734357e-01,  8.762146867822e-03,  6.097806906008e+00', function () {
##JS##var satin, rets, satrec, TOL = 0.000001;
##JS## // For JS change   'attr', -> 'attr':
##JS##satin = {
satin = struct(  ##NOTJS 
'error',            0.000000000000e+00,
'satnum',           9.880000000000e+03,
'epochyr',          6.000000000000e+00,
'epochdays',        1.765615747500e+02,
'ndot',             1.275665998419e-11,
'nddot',            0.000000000000e+00,
'bstar',            1.000000000000e-04,
'inclo',            1.127426846252e+00,
'nodeo',            6.097806906008e+00,
'ecco',             7.069051000000e-01,
'argpo',            4.712788660783e+00,
'mo',               2.850471734357e-01,
'no',               8.762146867822e-03,
'a',                4.160825439041e+00,
'alta',             6.102134162109e+00,
'altp',             2.195167159733e-01,
'jdsatepoch',       2.453912061575e+06 
);  ##NOTJS
##JS##};
[satrec] = sgp4init(72, satin,  1.000000000000e-04,  7.069051000000e-01,  2.063056157475e+04,  4.712788660783e+00,  1.127426846252e+00,  2.850471734357e-01,  8.762146867822e-03,  6.097806906008e+00);
assert(isequalRel(satrec.error,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.satnum,           9.880000000000e+03, TOL));
assert(isequalRel(satrec.epochyr,          6.000000000000e+00, TOL));
assert(isequalRel(satrec.epochdays,        1.765615747500e+02, TOL));
assert(isequalRel(satrec.ndot,             1.275665998419e-11, TOL));
assert(isequalRel(satrec.nddot,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.bstar,            1.000000000000e-04, TOL));
assert(isequalRel(satrec.inclo,            1.127426846252e+00, TOL));
assert(isequalRel(satrec.nodeo,            6.097806906008e+00, TOL));
assert(isequalRel(satrec.ecco,             7.069051000000e-01, TOL));
assert(isequalRel(satrec.argpo,            4.712788660783e+00, TOL));
assert(isequalRel(satrec.mo,               2.850471734357e-01, TOL));
assert(isequalRel(satrec.no,               8.762667060363e-03, TOL));
assert(isequalRel(satrec.a,                4.160825439041e+00, TOL));
assert(isequalRel(satrec.alta,             6.102134162109e+00, TOL));
assert(isequalRel(satrec.altp,             2.195167159733e-01, TOL));
assert(isequalRel(satrec.jdsatepoch,       2.453912061575e+06, TOL));
assert(isequalRel(satrec.isimp,            1.000000000000e+00, TOL));
assert(isequal(satrec.method,             'd')); ##NOTJS
assert(isequalRel(satrec.aycof,            1.059164029957e-03, TOL));
assert(isequalRel(satrec.con41,           -4.479141048878e-01, TOL));
assert(isequalRel(satrec.cc1,              5.233520166060e-13, TOL));
assert(isequalRel(satrec.cc4,              3.662175839859e-09, TOL));
assert(isequalRel(satrec.cc5,              6.266742443382e-07, TOL));
assert(isequalRel(satrec.d2,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.delmo,            6.820964768241e+00, TOL));
assert(isequalRel(satrec.eta,              9.341770109733e-01, TOL));
assert(isequalRel(satrec.argpdot,         -1.318643338756e-07, TOL));
assert(isequalRel(satrec.omgcof,           1.275740509890e-23, TOL));
assert(isequalRel(satrec.sinmao,           2.812027215197e-01, TOL));
assert(isequalRel(satrec.t,                0.000000000000e+00, TOL));
assert(isequalRel(satrec.t2cof,            7.850280249091e-13, TOL));
assert(isequalRel(satrec.t3cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t4cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t5cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.x1mth2,           8.159713682959e-01, TOL));
assert(isequalRel(satrec.x7thm1,           2.882004219285e-01, TOL));
assert(isequalRel(satrec.mdot,             8.762146865654e-03, TOL));
assert(isequalRel(satrec.nodedot,         -1.408338623247e-06, TOL));
assert(isequalRel(satrec.xlcof,            1.906710134565e-03, TOL));
assert(isequalRel(satrec.xmcof,           -1.931807263939e-15, TOL));
assert(isequalRel(satrec.nodecf,          -1.291113443180e-18, TOL));
assert(isequalRel(satrec.irez,             2.000000000000e+00, TOL));
assert(isequalRel(satrec.d2201,           -1.223066000340e-11, TOL));
assert(isequalRel(satrec.d2211,            7.174605316403e-11, TOL));
assert(isequalRel(satrec.d3210,           -4.151751044682e-12, TOL));
assert(isequalRel(satrec.d3222,           -8.877536621154e-12, TOL));
assert(isequalRel(satrec.d4410,            3.097256488149e-12, TOL));
assert(isequalRel(satrec.d4422,            5.507367501422e-12, TOL));
assert(isequalRel(satrec.d5220,           -3.254911516032e-12, TOL));
assert(isequalRel(satrec.d5232,            7.951364509680e-13, TOL));
assert(isequalRel(satrec.d5421,           -2.951741474264e-12, TOL));
assert(isequalRel(satrec.d5433,           -2.267801942329e-12, TOL));
assert(isequalRel(satrec.dedt,            -4.867357573014e-09, TOL));
assert(isequalRel(satrec.del1,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del2,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del3,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.didt,            -1.740817385888e-09, TOL));
assert(isequalRel(satrec.dmdt,             7.275290629300e-09, TOL));
assert(isequalRel(satrec.dnodt,           -8.615750092681e-08, TOL));
assert(isequalRel(satrec.domdt,            2.335815977949e-08, TOL));
assert(isequalRel(satrec.e3,               1.249431839564e-04, TOL));
assert(isequalRel(satrec.ee2,              6.476652597055e-04, TOL));
assert(isequalRel(satrec.peo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pgho,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.pho,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pinco,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.plo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.se2,             -3.006446485103e-03, TOL));
assert(isequalRel(satrec.se3,              2.366248156382e-03, TOL));
assert(isequalRel(satrec.sgh2,            -2.805617954096e-03, TOL));
assert(isequalRel(satrec.sgh3,            -3.755905951700e-03, TOL));
assert(isequalRel(satrec.sgh4,            -7.268074853619e-05, TOL));
assert(isequalRel(satrec.sh2,              2.948902195180e-03, TOL));
assert(isequalRel(satrec.sh3,              3.166374712604e-03, TOL));
assert(isequalRel(satrec.si2,              6.569128551896e-04, TOL));
assert(isequalRel(satrec.si3,             -6.992498193738e-04, TOL));
assert(isequalRel(satrec.sl2,              4.534351771255e-03, TOL));
assert(isequalRel(satrec.sl3,              6.836119210765e-03, TOL));
assert(isequalRel(satrec.sl4,              2.911149634817e-04, TOL));
assert(isequalRel(satrec.gsto,             2.019617116981e+00, TOL));
assert(isequalRel(satrec.xfact,           -8.754040087689e-03, TOL));
assert(isequalRel(satrec.xgh2,            -1.815715485263e-04, TOL));
assert(isequalRel(satrec.xgh3,             8.134154625503e-04, TOL));
assert(isequalRel(satrec.xgh4,            -3.826216649032e-05, TOL));
assert(isequalRel(satrec.xh2,              4.816111792216e-05, TOL));
assert(isequalRel(satrec.xh3,             -6.696421947166e-04, TOL));
assert(isequalRel(satrec.xi2,             -1.383644676752e-04, TOL));
assert(isequalRel(satrec.xi3,             -7.113039969238e-07, TOL));
assert(isequalRel(satrec.xl2,              4.111399428162e-04, TOL));
assert(isequalRel(satrec.xl3,             -1.491371542789e-03, TOL));
assert(isequalRel(satrec.xl4,              1.532550149097e-04, TOL));
assert(isequalRel(satrec.xlamo,            2.158241444311e+00, TOL));
assert(isequalRel(satrec.zmol,             1.755605827278e+00, TOL));
assert(isequalRel(satrec.zmos,             2.976104523220e+00, TOL));
assert(isequalRel(satrec.atime,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xli,              2.158241444311e+00, TOL));
assert(isequalRel(satrec.xni,              8.762667060363e-03, TOL));
assert(isequal(satrec.init,               'n')); ##NOTJS
##JS##equal(satrec.method,             'd');
##JS##equal(satrec.init,               'n');
##JS##});
## 9880

##JS##test('72, satin,  0.000000000000e+00,  2.709710000000e-02,  2.023779417928e+04,  5.716345999363e+00,  1.657329751109e-01,  5.377307065517e-01,  5.069604863892e-03,  5.465934884933e+00', function () {
##JS##var satin, rets, satrec, TOL = 0.000001;
##JS## // For JS change   'attr', -> 'attr':
##JS##satin = {
satin = struct(  ##NOTJS 
'error',            0.000000000000e+00,
'satnum',           9.998000000000e+03,
'epochyr',          5.000000000000e+00,
'epochdays',        1.487941792800e+02,
'ndot',            -3.393695767767e-12,
'nddot',            0.000000000000e+00,
'bstar',            0.000000000000e+00,
'inclo',            1.657329751109e-01,
'nodeo',            5.465934884933e+00,
'ecco',             2.709710000000e-02,
'argpo',            5.716345999363e+00,
'mo',               5.377307065517e-01,
'no',               5.069604863892e-03,
'a',                5.992441105490e+00,
'alta',             5.154818881370e+00,
'altp',             4.830063329611e+00,
'jdsatepoch',       2.453519294179e+06 
);  ##NOTJS
##JS##};
[satrec] = sgp4init(72, satin,  0.000000000000e+00,  2.709710000000e-02,  2.023779417928e+04,  5.716345999363e+00,  1.657329751109e-01,  5.377307065517e-01,  5.069604863892e-03,  5.465934884933e+00);
assert(isequalRel(satrec.error,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.satnum,           9.998000000000e+03, TOL));
assert(isequalRel(satrec.epochyr,          5.000000000000e+00, TOL));
assert(isequalRel(satrec.epochdays,        1.487941792800e+02, TOL));
assert(isequalRel(satrec.ndot,            -3.393695767767e-12, TOL));
assert(isequalRel(satrec.nddot,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.bstar,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.inclo,            1.657329751109e-01, TOL));
assert(isequalRel(satrec.nodeo,            5.465934884933e+00, TOL));
assert(isequalRel(satrec.ecco,             2.709710000000e-02, TOL));
assert(isequalRel(satrec.argpo,            5.716345999363e+00, TOL));
assert(isequalRel(satrec.mo,               5.377307065517e-01, TOL));
assert(isequalRel(satrec.no,               5.069384722250e-03, TOL));
assert(isequalRel(satrec.a,                5.992441105490e+00, TOL));
assert(isequalRel(satrec.alta,             5.154818881370e+00, TOL));
assert(isequalRel(satrec.altp,             4.830063329611e+00, TOL));
assert(isequalRel(satrec.jdsatepoch,       2.453519294179e+06, TOL));
assert(isequalRel(satrec.isimp,            1.000000000000e+00, TOL));
assert(isequal(satrec.method,             'd')); ##NOTJS
assert(isequalRel(satrec.aycof,            1.934392983882e-04, TOL));
assert(isequalRel(satrec.con41,            1.918349444333e+00, TOL));
assert(isequalRel(satrec.cc1,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.cc4,              1.472053521037e-14, TOL));
assert(isequalRel(satrec.cc5,              3.693461648587e-11, TOL));
assert(isequalRel(satrec.d2,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.delmo,            1.086383607728e+00, TOL));
assert(isequalRel(satrec.eta,              3.260440040582e-02, TOL));
assert(isequalRel(satrec.argpdot,          4.436332962536e-07, TOL));
assert(isequalRel(satrec.omgcof,           0.000000000000e+00, TOL));
assert(isequalRel(satrec.sinmao,           5.121882768119e-01, TOL));
assert(isequalRel(satrec.t,                0.000000000000e+00, TOL));
assert(isequalRel(satrec.t2cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t3cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t4cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t5cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.x1mth2,           2.721685188894e-02, TOL));
assert(isequalRel(satrec.x7thm1,           5.809482036777e+00, TOL));
assert(isequalRel(satrec.mdot,             5.069604859229e-03, TOL));
assert(isequalRel(satrec.nodedot,         -2.264779093452e-07, TOL));
assert(isequalRel(satrec.xlcof,            3.862113846602e-04, TOL));
assert(isequalRel(satrec.xmcof,           -0.000000000000e+00, TOL));
assert(isequalRel(satrec.nodecf,          -0.000000000000e+00, TOL));
assert(isequalRel(satrec.irez,             1.000000000000e+00, TOL));
assert(isequalRel(satrec.d2201,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2211,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3210,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3222,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4410,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4422,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5220,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5232,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5421,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5433,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.dedt,             2.142414632713e-10, TOL));
assert(isequalRel(satrec.del1,            -1.069242230635e-12, TOL));
assert(isequalRel(satrec.del2,             2.268988798894e-11, TOL));
assert(isequalRel(satrec.del3,             3.478296584410e-12, TOL));
assert(isequalRel(satrec.didt,            -2.100861346923e-08, TOL));
assert(isequalRel(satrec.dmdt,            -1.007233935453e-07, TOL));
assert(isequalRel(satrec.dnodt,            5.240300896038e-08, TOL));
assert(isequalRel(satrec.domdt,           -2.079390322813e-08, TOL));
assert(isequalRel(satrec.e3,               4.759541749927e-05, TOL));
assert(isequalRel(satrec.ee2,             -5.215931631248e-05, TOL));
assert(isequalRel(satrec.peo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pgho,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.pho,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pinco,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.plo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.se2,             -4.545493382307e-04, TOL));
assert(isequalRel(satrec.se3,             -1.408307282420e-05, TOL));
assert(isequalRel(satrec.sgh2,             3.341762775910e-04, TOL));
assert(isequalRel(satrec.sgh3,            -1.631250708160e-02, TOL));
assert(isequalRel(satrec.sgh4,            -1.775546834310e-04, TOL));
assert(isequalRel(satrec.sh2,             -7.925299564105e-04, TOL));
assert(isequalRel(satrec.sh3,             -7.614980505856e-04, TOL));
assert(isequalRel(satrec.si2,             -7.593552438778e-04, TOL));
assert(isequalRel(satrec.si3,              7.406357152159e-04, TOL));
assert(isequalRel(satrec.sl2,             -6.650365679906e-05, TOL));
assert(isequalRel(satrec.sl3,              1.569236751846e-02, TOL));
assert(isequalRel(satrec.sl4,              4.145768614330e-04, TOL));
assert(isequalRel(satrec.gsto,             3.007604046768e+00, TOL));
assert(isequalRel(satrec.xfact,           -4.374900909933e-03, TOL));
assert(isequalRel(satrec.xgh2,            -1.706031133674e-03, TOL));
assert(isequalRel(satrec.xgh3,            -1.810449604366e-03, TOL));
assert(isequalRel(satrec.xgh4,            -9.347216416174e-05, TOL));
assert(isequalRel(satrec.xh2,             -2.227234299372e-04, TOL));
assert(isequalRel(satrec.xh3,              5.491720843604e-06, TOL));
assert(isequalRel(satrec.xi2,             -6.826729645968e-06, TOL));
assert(isequalRel(satrec.xi3,              2.099107684283e-04, TOL));
assert(isequalRel(satrec.xl2,              1.640123445179e-03, TOL));
assert(isequalRel(satrec.xl3,              1.647042035558e-03, TOL));
assert(isequalRel(satrec.xl4,              2.182504888112e-04, TOL));
assert(isequalRel(satrec.xlamo,            2.429222236900e+00, TOL));
assert(isequalRel(satrec.zmol,             1.585773955921e-01, TOL));
assert(isequalRel(satrec.zmos,             2.502914127169e+00, TOL));
assert(isequalRel(satrec.atime,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xli,              2.429222236900e+00, TOL));
assert(isequalRel(satrec.xni,              5.069384722250e-03, TOL));
assert(isequal(satrec.init,               'n')); ##NOTJS
##JS##equal(satrec.method,             'd');
##JS##equal(satrec.init,               'n');
##JS##});
## 9998

##JS##test('72, satin,  1.431100000000e-02,  7.318036000000e-01,  1.118729629788e+04,  8.285461931653e-01,  8.166674822762e-01,  1.817184457299e-01,  9.971844782556e-03,  4.021856443150e+00', function () {
##JS##var satin, rets, satrec, TOL = 0.000001;
##JS## // For JS change   'attr', -> 'attr':
##JS##satin = {
satin = struct(  ##NOTJS 
'error',            0.000000000000e+00,
'satnum',           1.180100000000e+04,
'epochyr',          8.000000000000e+01,
'epochdays',        2.302962978800e+02,
'ndot',             4.336364459231e-08,
'nddot',            0.000000000000e+00,
'bstar',            1.431100000000e-02,
'inclo',            8.166674822762e-01,
'nodeo',            4.021856443150e+00,
'ecco',             7.318036000000e-01,
'argpo',            8.285461931653e-01,
'mo',               1.817184457299e-01,
'no',               9.971844782556e-03,
'a',                3.817123180279e+00,
'alta',             5.610507665251e+00,
'altp',             2.373869530742e-02,
'jdsatepoch',       2.444468796298e+06 
);  ##NOTJS
##JS##};
[satrec] = sgp4init(72, satin,  1.431100000000e-02,  7.318036000000e-01,  1.118729629788e+04,  8.285461931653e-01,  8.166674822762e-01,  1.817184457299e-01,  9.971844782556e-03,  4.021856443150e+00);
assert(isequalRel(satrec.error,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.satnum,           1.180100000000e+04, TOL));
assert(isequalRel(satrec.epochyr,          8.000000000000e+01, TOL));
assert(isequalRel(satrec.epochdays,        2.302962978800e+02, TOL));
assert(isequalRel(satrec.ndot,             4.336364459231e-08, TOL));
assert(isequalRel(satrec.nddot,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.bstar,            1.431100000000e-02, TOL));
assert(isequalRel(satrec.inclo,            8.166674822762e-01, TOL));
assert(isequalRel(satrec.nodeo,            4.021856443150e+00, TOL));
assert(isequalRel(satrec.ecco,             7.318036000000e-01, TOL));
assert(isequalRel(satrec.argpo,            8.285461931653e-01, TOL));
assert(isequalRel(satrec.mo,               1.817184457299e-01, TOL));
assert(isequalRel(satrec.no,               9.971131604593e-03, TOL));
assert(isequalRel(satrec.a,                3.817123180279e+00, TOL));
assert(isequalRel(satrec.alta,             5.610507665251e+00, TOL));
assert(isequalRel(satrec.altp,             2.373869530742e-02, TOL));
assert(isequalRel(satrec.jdsatepoch,       2.444468796298e+06, TOL));
assert(isequalRel(satrec.isimp,            1.000000000000e+00, TOL));
assert(isequal(satrec.method,             'd')); ##NOTJS
assert(isequalRel(satrec.aycof,            8.546234428971e-04, TOL));
assert(isequalRel(satrec.con41,            4.062531798299e-01, TOL));
assert(isequalRel(satrec.cc1,              2.455322245841e-06, TOL));
assert(isequalRel(satrec.cc4,              1.110884261662e-04, TOL));
assert(isequalRel(satrec.cc5,              1.667324930436e-02, TOL));
assert(isequalRel(satrec.d2,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.delmo,            7.753547418864e+00, TOL));
assert(isequalRel(satrec.eta,              9.956413460076e-01, TOL));
assert(isequalRel(satrec.argpdot,          3.460657560909e-06, TOL));
assert(isequalRel(satrec.omgcof,           7.183331930496e-18, TOL));
assert(isequalRel(satrec.sinmao,           1.807199902444e-01, TOL));
assert(isequalRel(satrec.t,                0.000000000000e+00, TOL));
assert(isequalRel(satrec.t2cof,            3.682983368762e-06, TOL));
assert(isequalRel(satrec.t3cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t4cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t5cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.x1mth2,           5.312489400567e-01, TOL));
assert(isequalRel(satrec.x7thm1,           2.281257419603e+00, TOL));
assert(isequalRel(satrec.mdot,             9.971844927633e-03, TOL));
assert(isequalRel(satrec.nodedot,         -3.528457562328e-06, TOL));
assert(isequalRel(satrec.xlcof,            1.629259507468e-03, TOL));
assert(isequalRel(satrec.xmcof,           -5.857169839716e-13, TOL));
assert(isequalRel(satrec.nodecf,          -1.407642839643e-11, TOL));
assert(isequalRel(satrec.irez,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2201,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2211,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3210,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3222,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4410,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4422,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5220,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5232,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5421,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5433,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.dedt,             2.638606466889e-08, TOL));
assert(isequalRel(satrec.del1,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del2,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del3,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.didt,            -3.476737419877e-08, TOL));
assert(isequalRel(satrec.dmdt,             8.037814258571e-08, TOL));
assert(isequalRel(satrec.dnodt,           -6.033631306028e-08, TOL));
assert(isequalRel(satrec.domdt,            9.465204016205e-09, TOL));
assert(isequalRel(satrec.e3,              -7.499513315530e-05, TOL));
assert(isequalRel(satrec.ee2,              3.984687909508e-04, TOL));
assert(isequalRel(satrec.peo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pgho,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.pho,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pinco,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.plo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.se2,             -2.359225311260e-03, TOL));
assert(isequalRel(satrec.se3,             -7.047176327541e-05, TOL));
assert(isequalRel(satrec.sgh2,            -1.822566953373e-04, TOL));
assert(isequalRel(satrec.sgh3,            -2.213029457235e-03, TOL));
assert(isequalRel(satrec.sgh4,            -6.154293814758e-05, TOL));
assert(isequalRel(satrec.sh2,             -1.139407335123e-03, TOL));
assert(isequalRel(satrec.sh3,              2.509518062136e-03, TOL));
assert(isequalRel(satrec.si2,             -5.208303751558e-05, TOL));
assert(isequalRel(satrec.si3,              3.287353432187e-03, TOL));
assert(isequalRel(satrec.sl2,              2.781684009380e-03, TOL));
assert(isequalRel(satrec.sl3,              3.338363278200e-03, TOL));
assert(isequalRel(satrec.sl4,              2.590677065105e-04, TOL));
assert(isequalRel(satrec.gsto,             1.265125075736e+00, TOL));
assert(isequalRel(satrec.xfact,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xgh2,             1.510256022480e-04, TOL));
assert(isequalRel(satrec.xgh3,             3.555337411429e-04, TOL));
assert(isequalRel(satrec.xgh4,            -3.239876023751e-05, TOL));
assert(isequalRel(satrec.xh2,              1.128589566218e-04, TOL));
assert(isequalRel(satrec.xh3,             -4.733943399734e-04, TOL));
assert(isequalRel(satrec.xi2,             -6.414087511194e-05, TOL));
assert(isequalRel(satrec.xi3,             -5.695169719647e-04, TOL));
assert(isequalRel(satrec.xl2,             -7.034864700241e-04, TOL));
assert(isequalRel(satrec.xl3,             -5.240671428885e-04, TOL));
assert(isequalRel(satrec.xl4,              1.363840070226e-04, TOL));
assert(isequalRel(satrec.xlamo,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.zmol,             3.567468389971e+00, TOL));
assert(isequalRel(satrec.zmos,             3.896090412269e+00, TOL));
assert(isequalRel(satrec.atime,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xli,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xni,              0.000000000000e+00, TOL));
assert(isequal(satrec.init,               'n')); ##NOTJS
##JS##equal(satrec.method,             'd');
##JS##equal(satrec.init,               'n');
##JS##});
## 11801

##JS##test('72, satin,  1.000000000000e-04,  1.156200000000e-03,  2.063002844893e+04,  4.617827041512e-01,  1.996377411601e-01,  5.821811010073e+00,  4.314022552805e-03,  6.145897708218e-01', function () {
##JS##var satin, rets, satrec, TOL = 0.000001;
##JS## // For JS change   'attr', -> 'attr':
##JS##satin = {
satin = struct(  ##NOTJS 
'error',            0.000000000000e+00,
'satnum',           1.412800000000e+04,
'epochyr',          6.000000000000e+00,
'epochdays',        1.760284489300e+02,
'ndot',            -4.787535100957e-12,
'nddot',            0.000000000000e+00,
'bstar',            1.000000000000e-04,
'inclo',            1.996377411601e-01,
'nodeo',            6.145897708218e-01,
'ecco',             1.156200000000e-03,
'argpo',            4.617827041512e-01,
'mo',               5.821811010073e+00,
'no',               4.314022552805e-03,
'a',                6.673160557243e+00,
'alta',             5.680876065479e+00,
'altp',             5.665445049007e+00,
'jdsatepoch',       2.453911528449e+06 
);  ##NOTJS
##JS##};
[satrec] = sgp4init(72, satin,  1.000000000000e-04,  1.156200000000e-03,  2.063002844893e+04,  4.617827041512e-01,  1.996377411601e-01,  5.821811010073e+00,  4.314022552805e-03,  6.145897708218e-01);
assert(isequalRel(satrec.error,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.satnum,           1.412800000000e+04, TOL));
assert(isequalRel(satrec.epochyr,          6.000000000000e+00, TOL));
assert(isequalRel(satrec.epochdays,        1.760284489300e+02, TOL));
assert(isequalRel(satrec.ndot,            -4.787535100957e-12, TOL));
assert(isequalRel(satrec.nddot,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.bstar,            1.000000000000e-04, TOL));
assert(isequalRel(satrec.inclo,            1.996377411601e-01, TOL));
assert(isequalRel(satrec.nodeo,            6.145897708218e-01, TOL));
assert(isequalRel(satrec.ecco,             1.156200000000e-03, TOL));
assert(isequalRel(satrec.argpo,            4.617827041512e-01, TOL));
assert(isequalRel(satrec.mo,               5.821811010073e+00, TOL));
assert(isequalRel(satrec.no,               4.313874514604e-03, TOL));
assert(isequalRel(satrec.a,                6.673160557243e+00, TOL));
assert(isequalRel(satrec.alta,             5.680876065479e+00, TOL));
assert(isequalRel(satrec.altp,             5.665445049007e+00, TOL));
assert(isequalRel(satrec.jdsatepoch,       2.453911528449e+06, TOL));
assert(isequalRel(satrec.isimp,            1.000000000000e+00, TOL));
assert(isequal(satrec.method,             'd')); ##NOTJS
assert(isequalRel(satrec.aycof,            2.325304065199e-04, TOL));
assert(isequalRel(satrec.con41,            1.882014339061e+00, TOL));
assert(isequalRel(satrec.cc1,              5.271206196097e-18, TOL));
assert(isequalRel(satrec.cc4,              3.653132465373e-16, TOL));
assert(isequalRel(satrec.cc5,              2.443440693174e-11, TOL));
assert(isequalRel(satrec.d2,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.delmo,            1.003665753747e+00, TOL));
assert(isequalRel(satrec.eta,              1.362934170593e-03, TOL));
assert(isequalRel(satrec.argpdot,          2.992039723459e-07, TOL));
assert(isequalRel(satrec.omgcof,           1.004726027146e-19, TOL));
assert(isequalRel(satrec.sinmao,          -4.451791296916e-01, TOL));
assert(isequalRel(satrec.t,                0.000000000000e+00, TOL));
assert(isequalRel(satrec.t2cof,            7.906809294146e-18, TOL));
assert(isequalRel(satrec.t3cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t4cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t5cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.x1mth2,           3.932855364617e-02, TOL));
assert(isequalRel(satrec.x7thm1,           5.724700124477e+00, TOL));
assert(isequalRel(satrec.mdot,             4.314022550354e-03, TOL));
assert(isequalRel(satrec.nodedot,         -1.542095005540e-07, TOL));
assert(isequalRel(satrec.xlcof,            4.638946303203e-04, TOL));
assert(isequalRel(satrec.xmcof,           -7.745061119293e-11, TOL));
assert(isequalRel(satrec.nodecf,          -2.844567605756e-24, TOL));
assert(isequalRel(satrec.irez,             1.000000000000e+00, TOL));
assert(isequalRel(satrec.d2201,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2211,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3210,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3222,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4410,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4422,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5220,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5232,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5421,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5433,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.dedt,             7.405672912273e-12, TOL));
assert(isequalRel(satrec.del1,            -5.401617059180e-13, TOL));
assert(isequalRel(satrec.del2,             1.319183725301e-11, TOL));
assert(isequalRel(satrec.del3,             1.815021571877e-12, TOL));
assert(isequalRel(satrec.didt,             1.917646021027e-08, TOL));
assert(isequalRel(satrec.dmdt,            -1.336452685205e-07, TOL));
assert(isequalRel(satrec.dnodt,            6.865572727316e-08, TOL));
assert(isequalRel(satrec.domdt,           -2.094974096530e-08, TOL));
assert(isequalRel(satrec.e3,              -2.023952527045e-06, TOL));
assert(isequalRel(satrec.ee2,              3.000360099525e-06, TOL));
assert(isequalRel(satrec.peo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pgho,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.pho,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pinco,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.plo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.se2,             -3.298847558934e-06, TOL));
assert(isequalRel(satrec.se3,              2.290506347297e-05, TOL));
assert(isequalRel(satrec.sgh2,            -1.939779689075e-02, TOL));
assert(isequalRel(satrec.sgh3,            -2.730323108731e-03, TOL));
assert(isequalRel(satrec.sgh4,            -2.087272183414e-04, TOL));
assert(isequalRel(satrec.sh2,             -2.473782067380e-04, TOL));
assert(isequalRel(satrec.sh3,             -1.070558033105e-03, TOL));
assert(isequalRel(satrec.si2,             -1.043419845310e-03, TOL));
assert(isequalRel(satrec.si3,              2.771277863689e-04, TOL));
assert(isequalRel(satrec.sl2,              1.883089760893e-02, TOL));
assert(isequalRel(satrec.sl3,              2.558661635920e-03, TOL));
assert(isequalRel(satrec.sl4,              4.870307806874e-04, TOL));
assert(isequalRel(satrec.gsto,             4.943902851905e+00, TOL));
assert(isequalRel(satrec.xfact,           -4.375061997072e-03, TOL));
assert(isequalRel(satrec.xgh2,             1.723156593166e-03, TOL));
assert(isequalRel(satrec.xgh3,             2.484248746878e-03, TOL));
assert(isequalRel(satrec.xgh4,            -1.098826820044e-04, TOL));
assert(isequalRel(satrec.xh2,             -1.510439919480e-04, TOL));
assert(isequalRel(satrec.xh3,              1.680607206591e-04, TOL));
assert(isequalRel(satrec.xi2,              1.739604100604e-04, TOL));
assert(isequalRel(satrec.xi3,              1.380206186465e-04, TOL));
assert(isequalRel(satrec.xl2,             -1.687937988178e-03, TOL));
assert(isequalRel(satrec.xl3,             -2.328138479321e-03, TOL));
assert(isequalRel(satrec.xl4,              2.563932429410e-04, TOL));
assert(isequalRel(satrec.xlamo,            1.954280633142e+00, TOL));
assert(isequalRel(satrec.zmol,             1.634038675524e+00, TOL));
assert(isequalRel(satrec.zmos,             2.966933705124e+00, TOL));
assert(isequalRel(satrec.atime,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xli,              1.954280633142e+00, TOL));
assert(isequalRel(satrec.xni,              4.313874514604e-03, TOL));
assert(isequal(satrec.init,               'n')); ##NOTJS
##JS##equal(satrec.method,             'd');
##JS##equal(satrec.init,               'n');
##JS##});
## 14128

##JS##test('72, satin,  1.878400000000e-04,  5.596327000000e-01,  2.060567415771e+04,  4.278836976885e+00,  1.083685404539e+00,  8.372169888892e-01,  2.131535163460e-02,  5.149138427074e+00', function () {
##JS##var satin, rets, satrec, TOL = 0.000001;
##JS## // For JS change   'attr', -> 'attr':
##JS##satin = {
satin = struct(  ##NOTJS 
'error',            0.000000000000e+00,
'satnum',           1.692500000000e+04,
'epochyr',          6.000000000000e+00,
'epochdays',        1.516741577100e+02,
'ndot',             7.729123930576e-08,
'nddot',           -6.505214822700e-16,
'bstar',            1.878400000000e-04,
'inclo',            1.083685404539e+00,
'nodeo',            5.149138427074e+00,
'ecco',             5.596327000000e-01,
'argpo',            4.278836976885e+00,
'mo',               8.372169888892e-01,
'no',               2.131535163460e-02,
'a',                2.300337259586e+00,
'alta',             2.587681211079e+00,
'altp',             1.299330809330e-02,
'jdsatepoch',       2.453887174158e+06 
);  ##NOTJS
##JS##};
[satrec] = sgp4init(72, satin,  1.878400000000e-04,  5.596327000000e-01,  2.060567415771e+04,  4.278836976885e+00,  1.083685404539e+00,  8.372169888892e-01,  2.131535163460e-02,  5.149138427074e+00);
assert(isequalRel(satrec.error,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.satnum,           1.692500000000e+04, TOL));
assert(isequalRel(satrec.epochyr,          6.000000000000e+00, TOL));
assert(isequalRel(satrec.epochdays,        1.516741577100e+02, TOL));
assert(isequalRel(satrec.ndot,             7.729123930576e-08, TOL));
assert(isequalRel(satrec.nddot,           -6.505214822700e-16, TOL));
assert(isequalRel(satrec.bstar,            1.878400000000e-04, TOL));
assert(isequalRel(satrec.inclo,            1.083685404539e+00, TOL));
assert(isequalRel(satrec.nodeo,            5.149138427074e+00, TOL));
assert(isequalRel(satrec.ecco,             5.596327000000e-01, TOL));
assert(isequalRel(satrec.argpo,            4.278836976885e+00, TOL));
assert(isequalRel(satrec.mo,               8.372169888892e-01, TOL));
assert(isequalRel(satrec.no,               2.131732105901e-02, TOL));
assert(isequalRel(satrec.a,                2.300337259586e+00, TOL));
assert(isequalRel(satrec.alta,             2.587681211079e+00, TOL));
assert(isequalRel(satrec.altp,             1.299330809330e-02, TOL));
assert(isequalRel(satrec.jdsatepoch,       2.453887174158e+06, TOL));
assert(isequalRel(satrec.isimp,            1.000000000000e+00, TOL));
assert(isequal(satrec.method,             'd')); ##NOTJS
assert(isequalRel(satrec.aycof,            1.036155981069e-03, TOL));
assert(isequalRel(satrec.con41,           -3.427179465249e-01, TOL));
assert(isequalRel(satrec.cc1,              2.418296387339e-06, TOL));
assert(isequalRel(satrec.cc4,              1.320286569381e-02, TOL));
assert(isequalRel(satrec.cc5,              9.335374337378e-01, TOL));
assert(isequalRel(satrec.d2,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.delmo,            4.611401199408e+00, TOL));
assert(isequalRel(satrec.eta,              9.924481486794e-01, TOL));
assert(isequalRel(satrec.argpdot,          6.555617764618e-07, TOL));
assert(isequalRel(satrec.omgcof,          -2.050582310845e-16, TOL));
assert(isequalRel(satrec.sinmao,           7.427826822235e-01, TOL));
assert(isequalRel(satrec.t,                0.000000000000e+00, TOL));
assert(isequalRel(satrec.t2cof,            3.627444581008e-06, TOL));
assert(isequalRel(satrec.t3cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t4cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t5cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.x1mth2,           7.809059821750e-01, TOL));
assert(isequalRel(satrec.x7thm1,           5.336581247751e-01, TOL));
assert(isequalRel(satrec.mdot,             2.131535165822e-02, TOL));
assert(isequalRel(satrec.nodedot,         -6.488927718517e-06, TOL));
assert(isequalRel(satrec.xlcof,            1.884597590117e-03, TOL));
assert(isequalRel(satrec.xmcof,           -4.813611076178e-12, TOL));
assert(isequalRel(satrec.nodecf,          -3.774194128382e-11, TOL));
assert(isequalRel(satrec.irez,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2201,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2211,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3210,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3222,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4410,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4422,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5220,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5232,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5421,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5433,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.dedt,            -2.324540208861e-09, TOL));
assert(isequalRel(satrec.del1,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del2,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del3,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.didt,            -9.012956177194e-09, TOL));
assert(isequalRel(satrec.dmdt,             3.250770527931e-08, TOL));
assert(isequalRel(satrec.dnodt,           -2.039277854983e-08, TOL));
assert(isequalRel(satrec.domdt,           -1.115284366841e-08, TOL));
assert(isequalRel(satrec.e3,              -1.668567580056e-04, TOL));
assert(isequalRel(satrec.ee2,             -8.275330366745e-05, TOL));
assert(isequalRel(satrec.peo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pgho,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.pho,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pinco,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.plo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.se2,              1.125966825154e-03, TOL));
assert(isequalRel(satrec.se3,              5.685080602400e-05, TOL));
assert(isequalRel(satrec.sgh2,            -8.864271738038e-05, TOL));
assert(isequalRel(satrec.sgh3,             1.625809438486e-03, TOL));
assert(isequalRel(satrec.sgh4,            -3.500523155064e-05, TOL));
assert(isequalRel(satrec.sh2,              2.744561082561e-04, TOL));
assert(isequalRel(satrec.sh3,             -9.759618675546e-04, TOL));
assert(isequalRel(satrec.si2,             -4.991454790905e-04, TOL));
assert(isequalRel(satrec.si3,             -4.573037379522e-04, TOL));
assert(isequalRel(satrec.sl2,              1.462141038683e-04, TOL));
assert(isequalRel(satrec.sl3,             -1.456991037415e-03, TOL));
assert(isequalRel(satrec.sl4,              1.117866087106e-04, TOL));
assert(isequalRel(satrec.gsto,             2.298863660699e+00, TOL));
assert(isequalRel(satrec.xfact,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xgh2,             2.432700701456e-04, TOL));
assert(isequalRel(satrec.xgh3,            -1.126161998557e-04, TOL));
assert(isequalRel(satrec.xgh4,            -1.842820863294e-05, TOL));
assert(isequalRel(satrec.xh2,             -1.621327565099e-04, TOL));
assert(isequalRel(satrec.xh3,              5.347365712173e-05, TOL));
assert(isequalRel(satrec.xi2,             -1.237488399592e-05, TOL));
assert(isequalRel(satrec.xi3,              1.015094158511e-04, TOL));
assert(isequalRel(satrec.xl2,             -2.580143538619e-04, TOL));
assert(isequalRel(satrec.xl3,              5.639729900996e-05, TOL));
assert(isequalRel(satrec.xl4,              5.884911644441e-05, TOL));
assert(isequalRel(satrec.xlamo,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.zmol,             2.363784803869e+00, TOL));
assert(isequalRel(satrec.zmos,             2.547991747703e+00, TOL));
assert(isequalRel(satrec.atime,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xli,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xni,              0.000000000000e+00, TOL));
assert(isequal(satrec.init,               'n')); ##NOTJS
##JS##equal(satrec.method,             'd');
##JS##equal(satrec.init,               'n');
##JS##});
## 16925

##JS##test('72, satin,  0.000000000000e+00,  7.864447000000e-01,  2.045279166667e+04,  3.426128445555e+00,  2.155725972308e-01,  6.222933050742e+00,  1.077308058718e-03,  3.271188586538e+00', function () {
##JS##var satin, rets, satrec, TOL = 0.000001;
##JS## // For JS change   'attr', -> 'attr':
##JS##satin = {
satin = struct(  ##NOTJS 
'error',            0.000000000000e+00,
'satnum',           2.041300000000e+04,
'epochyr',          5.000000000000e+00,
'epochdays',        3.637916666700e+02,
'ndot',             0.000000000000e+00,
'nddot',            0.000000000000e+00,
'bstar',            0.000000000000e+00,
'inclo',            2.155725972308e-01,
'nodeo',            3.271188586538e+00,
'ecco',             7.864447000000e-01,
'argpo',            3.426128445555e+00,
'mo',               6.222933050742e+00,
'no',               1.077308058718e-03,
'a',                1.682777032576e+01,
'alta',             2.906188111126e+01,
'altp',             2.593659540248e+00,
'jdsatepoch',       2.453734291667e+06 
);  ##NOTJS
##JS##};
[satrec] = sgp4init(72, satin,  0.000000000000e+00,  7.864447000000e-01,  2.045279166667e+04,  3.426128445555e+00,  2.155725972308e-01,  6.222933050742e+00,  1.077308058718e-03,  3.271188586538e+00);
assert(isequalRel(satrec.error,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.satnum,           2.041300000000e+04, TOL));
assert(isequalRel(satrec.epochyr,          5.000000000000e+00, TOL));
assert(isequalRel(satrec.epochdays,        3.637916666700e+02, TOL));
assert(isequalRel(satrec.ndot,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.nddot,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.bstar,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.inclo,            2.155725972308e-01, TOL));
assert(isequalRel(satrec.nodeo,            3.271188586538e+00, TOL));
assert(isequalRel(satrec.ecco,             7.864447000000e-01, TOL));
assert(isequalRel(satrec.argpo,            3.426128445555e+00, TOL));
assert(isequalRel(satrec.mo,               6.222933050742e+00, TOL));
assert(isequalRel(satrec.no,               1.077283640185e-03, TOL));
assert(isequalRel(satrec.a,                1.682777032576e+01, TOL));
assert(isequalRel(satrec.alta,             2.906188111126e+01, TOL));
assert(isequalRel(satrec.altp,             2.593659540248e+00, TOL));
assert(isequalRel(satrec.jdsatepoch,       2.453734291667e+06, TOL));
assert(isequalRel(satrec.isimp,            1.000000000000e+00, TOL));
assert(isequal(satrec.method,             'd')); ##NOTJS
assert(isequalRel(satrec.aycof,            2.508131883204e-04, TOL));
assert(isequalRel(satrec.con41,            1.862731633406e+00, TOL));
assert(isequalRel(satrec.cc1,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.cc4,              9.750860292069e-14, TOL));
assert(isequalRel(satrec.cc5,              1.358849252297e-10, TOL));
assert(isequalRel(satrec.d2,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.delmo,            6.181481065556e+00, TOL));
assert(isequalRel(satrec.eta,              8.367780746978e-01, TOL));
assert(isequalRel(satrec.argpdot,          8.005078790527e-08, TOL));
assert(isequalRel(satrec.omgcof,          -0.000000000000e+00, TOL));
assert(isequalRel(satrec.sinmao,          -6.021580708088e-02, TOL));
assert(isequalRel(satrec.t,                0.000000000000e+00, TOL));
assert(isequalRel(satrec.t2cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t3cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t4cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t5cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.x1mth2,           4.575612219784e-02, TOL));
assert(isequalRel(satrec.x7thm1,           5.679707144615e+00, TOL));
assert(isequalRel(satrec.mdot,             1.077308058974e-03, TOL));
assert(isequalRel(satrec.nodedot,         -4.147025214065e-08, TOL));
assert(isequalRel(satrec.xlcof,            5.001580578347e-04, TOL));
assert(isequalRel(satrec.xmcof,           -0.000000000000e+00, TOL));
assert(isequalRel(satrec.nodecf,          -0.000000000000e+00, TOL));
assert(isequalRel(satrec.irez,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2201,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2211,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3210,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3222,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4410,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4422,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5220,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5232,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5421,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5433,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.dedt,             9.991744175572e-08, TOL));
assert(isequalRel(satrec.del1,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del2,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del3,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.didt,            -2.656246157481e-07, TOL));
assert(isequalRel(satrec.dmdt,            -7.442607144689e-07, TOL));
assert(isequalRel(satrec.dnodt,           -7.900872576398e-07, TOL));
assert(isequalRel(satrec.domdt,            9.925475448625e-07, TOL));
assert(isequalRel(satrec.e3,              -4.548826202443e-03, TOL));
assert(isequalRel(satrec.ee2,              2.057187923104e-03, TOL));
assert(isequalRel(satrec.peo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pgho,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.pho,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pinco,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.plo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.se2,              2.969569919355e-02, TOL));
assert(isequalRel(satrec.se3,              1.468368332662e-02, TOL));
assert(isequalRel(satrec.sgh2,            -1.634808994984e-02, TOL));
assert(isequalRel(satrec.sgh3,             4.324216378214e-02, TOL));
assert(isequalRel(satrec.sgh4,            -5.162579880111e-04, TOL));
assert(isequalRel(satrec.sh2,              1.425174198066e-02, TOL));
assert(isequalRel(satrec.sh3,              4.931955088329e-03, TOL));
assert(isequalRel(satrec.si2,              5.144176519066e-02, TOL));
assert(isequalRel(satrec.si3,             -8.646214930954e-04, TOL));
assert(isequalRel(satrec.sl2,              3.951910009817e-02, TOL));
assert(isequalRel(satrec.sl3,             -1.241558054094e-01, TOL));
assert(isequalRel(satrec.sl4,              2.467220444289e-03, TOL));
assert(isequalRel(satrec.gsto,             4.071885638059e-01, TOL));
assert(isequalRel(satrec.xfact,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xgh2,             6.919617584769e-03, TOL));
assert(isequalRel(satrec.xgh3,             2.084732624778e-03, TOL));
assert(isequalRel(satrec.xgh4,            -2.717796594982e-04, TOL));
assert(isequalRel(satrec.xh2,              7.186248636015e-04, TOL));
assert(isequalRel(satrec.xh3,             -2.561986795698e-03, TOL));
assert(isequalRel(satrec.xi2,             -5.475272881099e-04, TOL));
assert(isequalRel(satrec.xi3,             -9.211923499783e-03, TOL));
assert(isequalRel(satrec.xl2,             -2.030877598251e-02, TOL));
assert(isequalRel(satrec.xl3,             -4.767341552120e-03, TOL));
assert(isequalRel(satrec.xl4,              1.298847374429e-03, TOL));
assert(isequalRel(satrec.xlamo,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.zmol,             5.201540682068e+00, TOL));
assert(isequalRel(satrec.zmos,             6.201295960309e+00, TOL));
assert(isequalRel(satrec.atime,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xli,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xni,              0.000000000000e+00, TOL));
assert(isequal(satrec.init,               'n')); ##NOTJS
##JS##equal(satrec.method,             'd');
##JS##equal(satrec.init,               'n');
##JS##});
## 20413

##JS##test('72, satin, -1.352500000000e-04,  7.421690000000e-01,  2.063002341244e+04,  4.416489349660e+00,  1.085156717098e+00,  3.517903093612e-01,  8.782060201923e-03,  3.455919470557e+00', function () {
##JS##var satin, rets, satrec, TOL = 0.000001;
##JS## // For JS change   'attr', -> 'attr':
##JS##satin = {
satin = struct(  ##NOTJS 
'error',            0.000000000000e+00,
'satnum',           2.189700000000e+04,
'epochyr',          6.000000000000e+00,
'epochdays',        1.760234124400e+02,
'ndot',            -3.857298850328e-11,
'nddot',            0.000000000000e+00,
'bstar',           -1.352500000000e-04,
'inclo',            1.085156717098e+00,
'nodeo',            3.455919470557e+00,
'ecco',             7.421690000000e-01,
'argpo',            4.416489349660e+00,
'mo',               3.517903093612e-01,
'no',               8.782060201923e-03,
'a',                4.154533274527e+00,
'alta',             6.237899080349e+00,
'altp',             7.116746870457e-02,
'jdsatepoch',       2.453911523412e+06 
);  ##NOTJS
##JS##};
[satrec] = sgp4init(72, satin, -1.352500000000e-04,  7.421690000000e-01,  2.063002341244e+04,  4.416489349660e+00,  1.085156717098e+00,  3.517903093612e-01,  8.782060201923e-03,  3.455919470557e+00);
assert(isequalRel(satrec.error,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.satnum,           2.189700000000e+04, TOL));
assert(isequalRel(satrec.epochyr,          6.000000000000e+00, TOL));
assert(isequalRel(satrec.epochdays,        1.760234124400e+02, TOL));
assert(isequalRel(satrec.ndot,            -3.857298850328e-11, TOL));
assert(isequalRel(satrec.nddot,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.bstar,           -1.352500000000e-04, TOL));
assert(isequalRel(satrec.inclo,            1.085156717098e+00, TOL));
assert(isequalRel(satrec.nodeo,            3.455919470557e+00, TOL));
assert(isequalRel(satrec.ecco,             7.421690000000e-01, TOL));
assert(isequalRel(satrec.argpo,            4.416489349660e+00, TOL));
assert(isequalRel(satrec.mo,               3.517903093612e-01, TOL));
assert(isequalRel(satrec.no,               8.782535528761e-03, TOL));
assert(isequalRel(satrec.a,                4.154533274527e+00, TOL));
assert(isequalRel(satrec.alta,             6.237899080349e+00, TOL));
assert(isequalRel(satrec.altp,             7.116746870457e-02, TOL));
assert(isequalRel(satrec.jdsatepoch,       2.453911523412e+06, TOL));
assert(isequalRel(satrec.isimp,            1.000000000000e+00, TOL));
assert(isequal(satrec.method,             'd')); ##NOTJS
assert(isequalRel(satrec.aycof,            1.036962365648e-03, TOL));
assert(isequalRel(satrec.con41,           -3.463657886765e-01, TOL));
assert(isequalRel(satrec.cc1,             -5.832456330155e-11, TOL));
assert(isequalRel(satrec.cc4,              2.711979715083e-07, TOL));
assert(isequalRel(satrec.cc5,              4.632159335659e-05, TOL));
assert(isequalRel(satrec.d2,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.delmo,            7.090728303385e+00, TOL));
assert(isequalRel(satrec.eta,              9.812550443388e-01, TOL));
assert(isequalRel(satrec.argpdot,          1.816762761577e-07, TOL));
assert(isequalRel(satrec.omgcof,           1.188366956468e-20, TOL));
assert(isequalRel(satrec.sinmao,           3.445790247894e-01, TOL));
assert(isequalRel(satrec.t,                0.000000000000e+00, TOL));
assert(isequalRel(satrec.t2cof,           -8.748684495232e-11, TOL));
assert(isequalRel(satrec.t3cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t4cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t5cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.x1mth2,           7.821219295588e-01, TOL));
assert(isequalRel(satrec.x7thm1,           5.251464930881e-01, TOL));
assert(isequalRel(satrec.mdot,             8.782060217382e-03, TOL));
assert(isequalRel(satrec.nodedot,         -1.910984836962e-06, TOL));
assert(isequalRel(satrec.xlcof,            1.885437909935e-03, TOL));
assert(isequalRel(satrec.xmcof,            2.388216628336e-15, TOL));
assert(isequalRel(satrec.nodecf,           1.752965458283e-16, TOL));
assert(isequalRel(satrec.irez,             2.000000000000e+00, TOL));
assert(isequalRel(satrec.d2201,           -1.358430480330e-11, TOL));
assert(isequalRel(satrec.d2211,            8.393534226859e-11, TOL));
assert(isequalRel(satrec.d3210,           -7.731467500396e-12, TOL));
assert(isequalRel(satrec.d3222,           -1.225068944742e-11, TOL));
assert(isequalRel(satrec.d4410,            4.702956210526e-12, TOL));
assert(isequalRel(satrec.d4422,            8.003291640479e-12, TOL));
assert(isequalRel(satrec.d5220,           -6.224656265138e-12, TOL));
assert(isequalRel(satrec.d5232,            2.558930440722e-12, TOL));
assert(isequalRel(satrec.d5421,           -5.640794406041e-12, TOL));
assert(isequalRel(satrec.d5433,           -3.910753384831e-12, TOL));
assert(isequalRel(satrec.dedt,             1.441546149773e-08, TOL));
assert(isequalRel(satrec.del1,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del2,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del3,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.didt,            -1.685608671533e-09, TOL));
assert(isequalRel(satrec.dmdt,             1.948849567720e-07, TOL));
assert(isequalRel(satrec.dnodt,           -6.831807033508e-09, TOL));
assert(isequalRel(satrec.domdt,           -7.014119890435e-08, TOL));
assert(isequalRel(satrec.e3,              -5.809658803806e-05, TOL));
assert(isequalRel(satrec.ee2,              1.029719050358e-04, TOL));
assert(isequalRel(satrec.peo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pgho,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.pho,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pinco,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.plo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.se2,             -5.827763896555e-04, TOL));
assert(isequalRel(satrec.se3,              7.782941825865e-04, TOL));
assert(isequalRel(satrec.sgh2,            -1.403967386252e-05, TOL));
assert(isequalRel(satrec.sgh3,            -1.232243049360e-03, TOL));
assert(isequalRel(satrec.sgh4,            -6.871312109088e-05, TOL));
assert(isequalRel(satrec.sh2,              1.040864137284e-03, TOL));
assert(isequalRel(satrec.sh3,              1.047903595216e-03, TOL));
assert(isequalRel(satrec.si2,              1.704326979978e-03, TOL));
assert(isequalRel(satrec.si3,              5.269146587838e-04, TOL));
assert(isequalRel(satrec.sl2,              6.958156453603e-04, TOL));
assert(isequalRel(satrec.sl3,             -1.138733166786e-03, TOL));
assert(isequalRel(satrec.sl4,              2.956953768062e-04, TOL));
assert(isequalRel(satrec.gsto,             4.912171010008e+00, TOL));
assert(isequalRel(satrec.xfact,           -8.754654235733e-03, TOL));
assert(isequalRel(satrec.xgh2,            -1.645505874222e-04, TOL));
assert(isequalRel(satrec.xgh3,             1.067426866480e-04, TOL));
assert(isequalRel(satrec.xgh4,            -3.617344251676e-05, TOL));
assert(isequalRel(satrec.xh2,             -7.385557332388e-05, TOL));
assert(isequalRel(satrec.xh3,             -1.379346924380e-04, TOL));
assert(isequalRel(satrec.xi2,             -1.440041796867e-04, TOL));
assert(isequalRel(satrec.xi3,             -2.339553088854e-04, TOL));
assert(isequalRel(satrec.xl2,             -1.733725252342e-04, TOL));
assert(isequalRel(satrec.xl3,              1.029442407285e-04, TOL));
assert(isequalRel(satrec.xl4,              1.556663348362e-04, TOL));
assert(isequalRel(satrec.xlamo,           -2.560712769541e+00, TOL));
assert(isequalRel(satrec.zmol,             1.632890219145e+00, TOL));
assert(isequalRel(satrec.zmos,             2.966847067538e+00, TOL));
assert(isequalRel(satrec.atime,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xli,             -2.560712769541e+00, TOL));
assert(isequalRel(satrec.xni,              8.782535528761e-03, TOL));
assert(isequal(satrec.init,               'n')); ##NOTJS
##JS##equal(satrec.method,             'd');
##JS##equal(satrec.init,               'n');
##JS##});
## 21897

##JS##test('72, satin,  4.994900000000e-04,  3.087230000000e-02,  2.054846235912e+04,  4.676136746492e+00,  1.084697695505e+00,  1.548791215586e+00,  6.962749021661e-02,  1.352103080862e+00', function () {
##JS##var satin, rets, satrec, TOL = 0.000001;
##JS## // For JS change   'attr', -> 'attr':
##JS##satin = {
satin = struct(  ##NOTJS 
'error',            0.000000000000e+00,
'satnum',           2.231200000000e+04,
'epochyr',          6.000000000000e+00,
'epochdays',        9.446235912000e+01,
'ndot',             3.030085476634e-06,
'nddot',            1.723108624943e-14,
'bstar',            4.994900000000e-04,
'inclo',            1.084697695505e+00,
'nodeo',            1.352103080862e+00,
'ecco',             3.087230000000e-02,
'argpo',            4.676136746492e+00,
'mo',               1.548791215586e+00,
'no',               6.962749021661e-02,
'a',                1.044879048565e+00,
'alta',             7.713686801602e-02,
'altp',             1.262122911400e-02,
'jdsatepoch',       2.453829962359e+06 
);  ##NOTJS
##JS##};
[satrec] = sgp4init(72, satin,  4.994900000000e-04,  3.087230000000e-02,  2.054846235912e+04,  4.676136746492e+00,  1.084697695505e+00,  1.548791215586e+00,  6.962749021661e-02,  1.352103080862e+00);
assert(isequalRel(satrec.error,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.satnum,           2.231200000000e+04, TOL));
assert(isequalRel(satrec.epochyr,          6.000000000000e+00, TOL));
assert(isequalRel(satrec.epochdays,        9.446235912000e+01, TOL));
assert(isequalRel(satrec.ndot,             3.030085476634e-06, TOL));
assert(isequalRel(satrec.nddot,            1.723108624943e-14, TOL));
assert(isequalRel(satrec.bstar,            4.994900000000e-04, TOL));
assert(isequalRel(satrec.inclo,            1.084697695505e+00, TOL));
assert(isequalRel(satrec.nodeo,            1.352103080862e+00, TOL));
assert(isequalRel(satrec.ecco,             3.087230000000e-02, TOL));
assert(isequalRel(satrec.argpo,            4.676136746492e+00, TOL));
assert(isequalRel(satrec.mo,               1.548791215586e+00, TOL));
assert(isequalRel(satrec.no,               6.964539419426e-02, TOL));
assert(isequalRel(satrec.a,                1.044879048565e+00, TOL));
assert(isequalRel(satrec.alta,             7.713686801602e-02, TOL));
assert(isequalRel(satrec.altp,             1.262122911400e-02, TOL));
assert(isequalRel(satrec.jdsatepoch,       2.453829962359e+06, TOL));
assert(isequalRel(satrec.isimp,            1.000000000000e+00, TOL));
assert(isequal(satrec.method,             'n')); ##NOTJS
assert(isequalRel(satrec.aycof,            1.036711029802e-03, TOL));
assert(isequalRel(satrec.con41,           -3.452285162292e-01, TOL));
assert(isequalRel(satrec.cc1,              3.375003429857e-05, TOL));
assert(isequalRel(satrec.cc4,              1.304503580746e-01, TOL));
assert(isequalRel(satrec.cc5,              2.910356158160e+00, TOL));
assert(isequalRel(satrec.d2,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.delmo,            1.052100787201e+00, TOL));
assert(isequalRel(satrec.eta,              7.759622143528e-01, TOL));
assert(isequalRel(satrec.argpdot,          4.626953140656e-06, TOL));
assert(isequalRel(satrec.omgcof,          -8.249597709173e-08, TOL));
assert(isequalRel(satrec.sinmao,           9.997578973099e-01, TOL));
assert(isequalRel(satrec.t,                0.000000000000e+00, TOL));
assert(isequalRel(satrec.t2cof,            5.062505144786e-05, TOL));
assert(isequalRel(satrec.t3cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t4cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t5cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.x1mth2,           7.817428387431e-01, TOL));
assert(isequalRel(satrec.x7thm1,           5.278001287984e-01, TOL));
assert(isequalRel(satrec.mdot,             6.962748907452e-02, TOL));
assert(isequalRel(satrec.nodedot,         -4.844420412010e-05, TOL));
assert(isequalRel(satrec.xlcof,            1.885176460051e-03, TOL));
assert(isequalRel(satrec.xmcof,           -2.814305098253e-04, TOL));
assert(isequalRel(satrec.nodecf,          -5.724210237297e-09, TOL));
assert(isequalRel(satrec.irez,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2201,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2211,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3210,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3222,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4410,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4422,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5220,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5232,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5421,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5433,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.dedt,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del1,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del2,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del3,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.didt,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.dmdt,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.dnodt,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.domdt,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.e3,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.ee2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.peo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pgho,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.pho,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pinco,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.plo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.se2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.se3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sgh2,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.sgh3,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.sgh4,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.sh2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sh3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.si2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.si3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sl2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sl3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sl4,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.gsto,             6.267076519855e+00, TOL));
assert(isequalRel(satrec.xfact,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xgh2,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.xgh3,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.xgh4,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.xh2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xh3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xi2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xi3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xl2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xl3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xl4,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xlamo,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.zmol,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.zmos,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.atime,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xli,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xni,              0.000000000000e+00, TOL));
assert(isequal(satrec.init,               'n')); ##NOTJS
##JS##equal(satrec.method,             'n');
##JS##equal(satrec.init,               'n');
##JS##});
## 22312
# *** error: t:= 494.202867 *** code =   1

##JS##test('72, satin,  2.986800000000e-04,  7.541712000000e-01,  2.063055909107e+04,  4.421379762224e+00,  1.108345161540e+00,  3.276925483789e-01,  8.581775554476e-03,  6.186235757890e+00', function () {
##JS##var satin, rets, satrec, TOL = 0.000001;
##JS## // For JS change   'attr', -> 'attr':
##JS##satin = {
satin = struct(  ##NOTJS 
'error',            0.000000000000e+00,
'satnum',           2.267400000000e+04,
'epochyr',          6.000000000000e+00,
'epochdays',        1.765590910700e+02,
'ndot',             6.426811360208e-11,
'nddot',            0.000000000000e+00,
'bstar',            2.986800000000e-04,
'inclo',            1.108345161540e+00,
'nodeo',            6.186235757890e+00,
'ecco',             7.541712000000e-01,
'argpo',            4.421379762224e+00,
'mo',               3.276925483789e-01,
'no',               8.581775554476e-03,
'a',                4.218924436776e+00,
'alta',             6.400715741968e+00,
'altp',             3.713313158324e-02,
'jdsatepoch',       2.453912059091e+06 
);  ##NOTJS
##JS##};
[satrec] = sgp4init(72, satin,  2.986800000000e-04,  7.541712000000e-01,  2.063055909107e+04,  4.421379762224e+00,  1.108345161540e+00,  3.276925483789e-01,  8.581775554476e-03,  6.186235757890e+00);
assert(isequalRel(satrec.error,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.satnum,           2.267400000000e+04, TOL));
assert(isequalRel(satrec.epochyr,          6.000000000000e+00, TOL));
assert(isequalRel(satrec.epochdays,        1.765590910700e+02, TOL));
assert(isequalRel(satrec.ndot,             6.426811360208e-11, TOL));
assert(isequalRel(satrec.nddot,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.bstar,            2.986800000000e-04, TOL));
assert(isequalRel(satrec.inclo,            1.108345161540e+00, TOL));
assert(isequalRel(satrec.nodeo,            6.186235757890e+00, TOL));
assert(isequalRel(satrec.ecco,             7.541712000000e-01, TOL));
assert(isequalRel(satrec.argpo,            4.421379762224e+00, TOL));
assert(isequalRel(satrec.mo,               3.276925483789e-01, TOL));
assert(isequalRel(satrec.no,               8.582332516240e-03, TOL));
assert(isequalRel(satrec.a,                4.218924436776e+00, TOL));
assert(isequalRel(satrec.alta,             6.400715741968e+00, TOL));
assert(isequalRel(satrec.altp,             3.713313158324e-02, TOL));
assert(isequalRel(satrec.jdsatepoch,       2.453912059091e+06, TOL));
assert(isequalRel(satrec.isimp,            1.000000000000e+00, TOL));
assert(isequal(satrec.method,             'd')); ##NOTJS
assert(isequalRel(satrec.aycof,            1.049373693837e-03, TOL));
assert(isequalRel(satrec.con41,           -4.028688855919e-01, TOL));
assert(isequalRel(satrec.cc1,              2.595887844361e-09, TOL));
assert(isequalRel(satrec.cc4,              5.255038362816e-06, TOL));
assert(isequalRel(satrec.cc5,              9.189456533467e-04, TOL));
assert(isequalRel(satrec.d2,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.delmo,            7.295146735799e+00, TOL));
assert(isequalRel(satrec.eta,              9.922473468655e-01, TOL));
assert(isequalRel(satrec.argpdot,         -1.142224275335e-08, TOL));
assert(isequalRel(satrec.omgcof,          -2.270642728079e-20, TOL));
assert(isequalRel(satrec.sinmao,           3.218592207367e-01, TOL));
assert(isequalRel(satrec.t,                0.000000000000e+00, TOL));
assert(isequalRel(satrec.t2cof,            3.893831766541e-09, TOL));
assert(isequalRel(satrec.t3cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t4cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t5cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.x1mth2,           8.009562951973e-01, TOL));
assert(isequalRel(satrec.x7thm1,           3.933059336189e-01, TOL));
assert(isequalRel(satrec.mdot,             8.581775564227e-03, TOL));
assert(isequalRel(satrec.nodedot,         -1.877848338725e-06, TOL));
assert(isequalRel(satrec.xlcof,            1.897798118762e-03, TOL));
assert(isequalRel(satrec.xmcof,           -4.732771188141e-15, TOL));
assert(isequalRel(satrec.nodecf,          -7.360860344711e-15, TOL));
assert(isequalRel(satrec.irez,             2.000000000000e+00, TOL));
assert(isequalRel(satrec.d2201,           -1.241189028817e-11, TOL));
assert(isequalRel(satrec.d2211,            8.551864262335e-11, TOL));
assert(isequalRel(satrec.d3210,           -6.602089272382e-12, TOL));
assert(isequalRel(satrec.d3222,           -1.302466004394e-11, TOL));
assert(isequalRel(satrec.d4410,            4.891528985291e-12, TOL));
assert(isequalRel(satrec.d4422,            8.891260588609e-12, TOL));
assert(isequalRel(satrec.d5220,           -6.477888050339e-12, TOL));
assert(isequalRel(satrec.d5232,            2.138467008675e-12, TOL));
assert(isequalRel(satrec.d5421,           -5.750904185904e-12, TOL));
assert(isequalRel(satrec.d5433,           -4.510549332610e-12, TOL));
assert(isequalRel(satrec.dedt,             7.330390566401e-09, TOL));
assert(isequalRel(satrec.del1,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del2,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del3,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.didt,            -2.350896248702e-08, TOL));
assert(isequalRel(satrec.dmdt,            -2.726008010046e-09, TOL));
assert(isequalRel(satrec.dnodt,           -9.800554699737e-08, TOL));
assert(isequalRel(satrec.domdt,            3.479071142642e-08, TOL));
assert(isequalRel(satrec.e3,              -1.880237977527e-04, TOL));
assert(isequalRel(satrec.ee2,              6.551908742706e-04, TOL));
assert(isequalRel(satrec.peo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pgho,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.pho,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pinco,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.plo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.se2,             -1.668215845123e-03, TOL));
assert(isequalRel(satrec.se3,              3.610858069376e-03, TOL));
assert(isequalRel(satrec.sgh2,            -4.299448087716e-03, TOL));
assert(isequalRel(satrec.sgh3,            -1.722984622184e-03, TOL));
assert(isequalRel(satrec.sgh4,            -6.889598529018e-05, TOL));
assert(isequalRel(satrec.sh2,              3.935976325614e-03, TOL));
assert(isequalRel(satrec.sh3,              3.059743184660e-03, TOL));
assert(isequalRel(satrec.si2,              1.789568818084e-03, TOL));
assert(isequalRel(satrec.si3,              2.366876188168e-04, TOL));
assert(isequalRel(satrec.sl2,              9.202998763432e-03, TOL));
assert(isequalRel(satrec.sl3,              2.742276317175e-03, TOL));
assert(isequalRel(satrec.sl4,              3.044773891692e-04, TOL));
assert(isequalRel(satrec.gsto,             2.003968969617e+00, TOL));
assert(isequalRel(satrec.xfact,           -8.755049561816e-03, TOL));
assert(isequalRel(satrec.xgh2,             2.558144451794e-04, TOL));
assert(isequalRel(satrec.xgh3,             7.760342525429e-04, TOL));
assert(isequalRel(satrec.xgh4,            -3.626970983073e-05, TOL));
assert(isequalRel(satrec.xh2,             -4.442804590880e-05, TOL));
assert(isequalRel(satrec.xh3,             -7.585547023917e-04, TOL));
assert(isequalRel(satrec.xi2,             -1.445258766608e-04, TOL));
assert(isequalRel(satrec.xi3,             -2.241607759555e-04, TOL));
assert(isequalRel(satrec.xl2,             -6.443953743437e-04, TOL));
assert(isequalRel(satrec.xl3,             -1.634546261908e-03, TOL));
assert(isequalRel(satrec.xl4,              1.602895511062e-04, TOL));
assert(isequalRel(satrec.xlamo,            2.409040817745e+00, TOL));
assert(isequalRel(satrec.zmol,             1.755039480870e+00, TOL));
assert(isequalRel(satrec.zmos,             2.976061799015e+00, TOL));
assert(isequalRel(satrec.atime,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xli,              2.409040817745e+00, TOL));
assert(isequalRel(satrec.xni,              8.582332516240e-03, TOL));
assert(isequal(satrec.init,               'n')); ##NOTJS
##JS##equal(satrec.method,             'd');
##JS##equal(satrec.init,               'n');
##JS##});
## 22674

##JS##test('72, satin,  7.659000000000e-04,  7.258491000000e-01,  2.062945752052e+04,  5.167015834603e+00,  1.230387309486e-01,  1.449687929999e-01,  9.857037897024e-03,  3.138517383448e+00', function () {
##JS##var satin, rets, satrec, TOL = 0.000001;
##JS## // For JS change   'attr', -> 'attr':
##JS##satin = {
satin = struct(  ##NOTJS 
'error',            0.000000000000e+00,
'satnum',           2.317700000000e+04,
'epochyr',          6.000000000000e+00,
'epochdays',        1.754575205200e+02,
'ndot',             1.169613005677e-11,
'nddot',            0.000000000000e+00,
'bstar',            7.659000000000e-04,
'inclo',            1.230387309486e-01,
'nodeo',            3.138517383448e+00,
'ecco',             7.258491000000e-01,
'argpo',            5.167015834603e+00,
'mo',               1.449687929999e-01,
'no',               9.857037897024e-03,
'a',                3.846705136955e+00,
'alta',             5.638832598578e+00,
'altp',             5.457767533072e-02,
'jdsatepoch',       2.453910957521e+06 
);  ##NOTJS
##JS##};
[satrec] = sgp4init(72, satin,  7.659000000000e-04,  7.258491000000e-01,  2.062945752052e+04,  5.167015834603e+00,  1.230387309486e-01,  1.449687929999e-01,  9.857037897024e-03,  3.138517383448e+00);
assert(isequalRel(satrec.error,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.satnum,           2.317700000000e+04, TOL));
assert(isequalRel(satrec.epochyr,          6.000000000000e+00, TOL));
assert(isequalRel(satrec.epochdays,        1.754575205200e+02, TOL));
assert(isequalRel(satrec.ndot,             1.169613005677e-11, TOL));
assert(isequalRel(satrec.nddot,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.bstar,            7.659000000000e-04, TOL));
assert(isequalRel(satrec.inclo,            1.230387309486e-01, TOL));
assert(isequalRel(satrec.nodeo,            3.138517383448e+00, TOL));
assert(isequalRel(satrec.ecco,             7.258491000000e-01, TOL));
assert(isequalRel(satrec.argpo,            5.167015834603e+00, TOL));
assert(isequalRel(satrec.mo,               1.449687929999e-01, TOL));
assert(isequalRel(satrec.no,               9.853789469239e-03, TOL));
assert(isequalRel(satrec.a,                3.846705136955e+00, TOL));
assert(isequalRel(satrec.alta,             5.638832598578e+00, TOL));
assert(isequalRel(satrec.altp,             5.457767533072e-02, TOL));
assert(isequalRel(satrec.jdsatepoch,       2.453910957521e+06, TOL));
assert(isequalRel(satrec.isimp,            1.000000000000e+00, TOL));
assert(isequal(satrec.method,             'd')); ##NOTJS
assert(isequalRel(satrec.aycof,            1.439034777135e-04, TOL));
assert(isequalRel(satrec.con41,            1.954813125046e+00, TOL));
assert(isequalRel(satrec.cc1,              1.125288811171e-09, TOL));
assert(isequalRel(satrec.cc4,              9.659235530288e-07, TOL));
assert(isequalRel(satrec.cc5,              1.465564872513e-04, TOL));
assert(isequalRel(satrec.d2,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.delmo,            7.699641690923e+00, TOL));
assert(isequalRel(satrec.eta,              9.849822474735e-01, TOL));
assert(isequalRel(satrec.argpdot,          9.499446270781e-06, TOL));
assert(isequalRel(satrec.omgcof,           2.696879352118e-20, TOL));
assert(isequalRel(satrec.sinmao,           1.444615501293e-01, TOL));
assert(isequalRel(satrec.t,                0.000000000000e+00, TOL));
assert(isequalRel(satrec.t2cof,            1.687933216756e-09, TOL));
assert(isequalRel(satrec.t3cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t4cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t5cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.x1mth2,           1.506229165127e-02, TOL));
assert(isequalRel(satrec.x7thm1,           5.894563958441e+00, TOL));
assert(isequalRel(satrec.mdot,             9.857038097825e-03, TOL));
assert(isequalRel(satrec.nodedot,         -4.803174199882e-06, TOL));
assert(isequalRel(satrec.xlcof,            2.875339560094e-04, TOL));
assert(isequalRel(satrec.xmcof,           -2.077874548988e-14, TOL));
assert(isequalRel(satrec.nodecf,          -8.929851828102e-15, TOL));
assert(isequalRel(satrec.irez,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2201,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2211,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3210,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3222,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4410,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4422,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5220,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5232,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5421,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5433,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.dedt,            -1.045444380488e-08, TOL));
assert(isequalRel(satrec.del1,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del2,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del3,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.didt,             2.376724085775e-08, TOL));
assert(isequalRel(satrec.dmdt,            -2.642690499755e-08, TOL));
assert(isequalRel(satrec.dnodt,           -4.838389780477e-07, TOL));
assert(isequalRel(satrec.domdt,            4.812656940526e-07, TOL));
assert(isequalRel(satrec.e3,               5.883771878310e-04, TOL));
assert(isequalRel(satrec.ee2,              1.201802618946e-04, TOL));
assert(isequalRel(satrec.peo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pgho,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.pho,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pinco,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.plo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.se2,             -3.424600980580e-03, TOL));
assert(isequalRel(satrec.se3,             -1.945460736508e-03, TOL));
assert(isequalRel(satrec.sgh2,             2.807746435654e-03, TOL));
assert(isequalRel(satrec.sgh3,            -4.287929901990e-03, TOL));
assert(isequalRel(satrec.sgh4,            -6.285500316310e-05, TOL));
assert(isequalRel(satrec.sh2,             -1.277477731310e-04, TOL));
assert(isequalRel(satrec.sh3,              3.309216641173e-03, TOL));
assert(isequalRel(satrec.si2,              7.513453732828e-04, TOL));
assert(isequalRel(satrec.si3,             -1.615208443659e-03, TOL));
assert(isequalRel(satrec.sl2,             -6.591258953724e-03, TOL));
assert(isequalRel(satrec.sl3,              8.653034599493e-03, TOL));
assert(isequalRel(satrec.sl4,              2.613596417420e-04, TOL));
assert(isequalRel(satrec.gsto,             1.346832291139e+00, TOL));
assert(isequalRel(satrec.xfact,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xgh2,            -7.580873897080e-04, TOL));
assert(isequalRel(satrec.xgh3,             8.944532635768e-05, TOL));
assert(isequalRel(satrec.xgh4,            -3.308948578837e-05, TOL));
assert(isequalRel(satrec.xh2,              4.592174078680e-04, TOL));
assert(isequalRel(satrec.xh3,             -3.581021323765e-04, TOL));
assert(isequalRel(satrec.xi2,             -3.094906804917e-04, TOL));
assert(isequalRel(satrec.xi3,              8.206020674696e-05, TOL));
assert(isequalRel(satrec.xl2,              1.595875573261e-03, TOL));
assert(isequalRel(satrec.xl3,             -2.025915791658e-05, TOL));
assert(isequalRel(satrec.xl4,              1.375905769766e-04, TOL));
assert(isequalRel(satrec.xlamo,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.zmol,             1.503851507578e+00, TOL));
assert(isequalRel(satrec.zmos,             2.957112607744e+00, TOL));
assert(isequalRel(satrec.atime,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xli,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xni,              0.000000000000e+00, TOL));
assert(isequal(satrec.init,               'n')); ##NOTJS
##JS##equal(satrec.method,             'd');
##JS##equal(satrec.init,               'n');
##JS##});
## 23177

##JS##test('72, satin,  1.000000000000e-04,  9.728298000000e-01,  1.637649999999e+04,  5.312084111370e-01,  5.017647066558e-01,  2.356194490192e-02,  3.189367114872e-04,  4.139920985731e-02', function () {
##JS##var satin, rets, satrec, TOL = 0.000001;
##JS## // For JS change   'attr', -> 'attr':
##JS##satin = {
satin = struct(  ##NOTJS 
'error',            0.000000000000e+00,
'satnum',           2.333300000000e+04,
'epochyr',          9.400000000000e+01,
'epochdays',        3.054999999900e+02,
'ndot',            -5.240714689374e-09,
'nddot',            5.674466379549e-13,
'bstar',            1.000000000000e-04,
'inclo',            5.017647066558e-01,
'nodeo',            4.139920985731e-02,
'ecco',             9.728298000000e-01,
'argpo',            5.312084111370e-01,
'mo',               2.356194490192e-02,
'no',               3.189367114872e-04,
'a',                3.788350677218e+01,
'alta',             7.373771108867e+01,
'altp',             2.930245570162e-02,
'jdsatepoch',       2.449658000000e+06 
);  ##NOTJS
##JS##};
[satrec] = sgp4init(72, satin,  1.000000000000e-04,  9.728298000000e-01,  1.637649999999e+04,  5.312084111370e-01,  5.017647066558e-01,  2.356194490192e-02,  3.189367114872e-04,  4.139920985731e-02);
assert(isequalRel(satrec.error,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.satnum,           2.333300000000e+04, TOL));
assert(isequalRel(satrec.epochyr,          9.400000000000e+01, TOL));
assert(isequalRel(satrec.epochdays,        3.054999999900e+02, TOL));
assert(isequalRel(satrec.ndot,            -5.240714689374e-09, TOL));
assert(isequalRel(satrec.nddot,            5.674466379549e-13, TOL));
assert(isequalRel(satrec.bstar,            1.000000000000e-04, TOL));
assert(isequalRel(satrec.inclo,            5.017647066558e-01, TOL));
assert(isequalRel(satrec.nodeo,            4.139920985731e-02, TOL));
assert(isequalRel(satrec.ecco,             9.728298000000e-01, TOL));
assert(isequalRel(satrec.argpo,            5.312084111370e-01, TOL));
assert(isequalRel(satrec.mo,               2.356194490192e-02, TOL));
assert(isequalRel(satrec.no,               3.189177226396e-04, TOL));
assert(isequalRel(satrec.a,                3.788350677218e+01, TOL));
assert(isequalRel(satrec.alta,             7.373771108867e+01, TOL));
assert(isequalRel(satrec.altp,             2.930245570162e-02, TOL));
assert(isequalRel(satrec.jdsatepoch,       2.449658000000e+06, TOL));
assert(isequalRel(satrec.isimp,            1.000000000000e+00, TOL));
assert(isequal(satrec.method,             'd')); ##NOTJS
assert(isequalRel(satrec.aycof,            5.639581568863e-04, TOL));
assert(isequalRel(satrec.con41,            1.305993571902e+00, TOL));
assert(isequalRel(satrec.cc1,              3.721578957178e-10, TOL));
assert(isequalRel(satrec.cc4,              2.666792794038e-07, TOL));
assert(isequalRel(satrec.cc5,              1.254245061371e-03, TOL));
assert(isequalRel(satrec.d2,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.delmo,            7.991104360376e+00, TOL));
assert(isequalRel(satrec.eta,              9.995358627143e-01, TOL));
assert(isequalRel(satrec.argpdot,          1.787618353473e-07, TOL));
assert(isequalRel(satrec.omgcof,           1.758924860415e-27, TOL));
assert(isequalRel(satrec.sinmao,           2.355976483361e-02, TOL));
assert(isequalRel(satrec.t,                0.000000000000e+00, TOL));
assert(isequalRel(satrec.t2cof,            5.582368435766e-10, TOL));
assert(isequalRel(satrec.t3cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t4cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t5cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.x1mth2,           2.313354760326e-01, TOL));
assert(isequalRel(satrec.x7thm1,           4.380651667771e+00, TOL));
assert(isequalRel(satrec.mdot,             3.189367173340e-04, TOL));
assert(isequalRel(satrec.nodedot,         -1.102439219498e-07, TOL));
assert(isequalRel(satrec.xlcof,            1.109395794943e-03, TOL));
assert(isequalRel(satrec.xmcof,           -6.973844182638e-20, TOL));
assert(isequalRel(satrec.nodecf,          -7.687599963907e-18, TOL));
assert(isequalRel(satrec.irez,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2201,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2211,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3210,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3222,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4410,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4422,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5220,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5232,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5421,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5433,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.dedt,             2.968135603242e-09, TOL));
assert(isequalRel(satrec.del1,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del2,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del3,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.didt,            -3.439044884764e-07, TOL));
assert(isequalRel(satrec.dmdt,            -3.438051105625e-06, TOL));
assert(isequalRel(satrec.dnodt,           -5.053925231474e-07, TOL));
assert(isequalRel(satrec.domdt,            6.914571527623e-07, TOL));
assert(isequalRel(satrec.e3,               6.618130467595e-03, TOL));
assert(isequalRel(satrec.ee2,             -7.503198877723e-03, TOL));
assert(isequalRel(satrec.peo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pgho,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.pho,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pinco,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.plo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.se2,              4.629809809051e-02, TOL));
assert(isequalRel(satrec.se3,              4.271626851497e-02, TOL));
assert(isequalRel(satrec.sgh2,            -4.391480163694e-02, TOL));
assert(isequalRel(satrec.sgh3,             4.776472532865e-02, TOL));
assert(isequalRel(satrec.sgh4,            -6.536713592881e-04, TOL));
assert(isequalRel(satrec.sh2,              5.087055669958e-02, TOL));
assert(isequalRel(satrec.sh3,              2.194123446194e-02, TOL));
assert(isequalRel(satrec.si2,              8.750068533754e-02, TOL));
assert(isequalRel(satrec.si3,              3.511647715856e-02, TOL));
assert(isequalRel(satrec.sl2,              3.692252174204e-01, TOL));
assert(isequalRel(satrec.sl3,             -4.025541103842e-01, TOL));
assert(isequalRel(satrec.sl4,              9.259903790801e-03, TOL));
assert(isequalRel(satrec.gsto,             3.849219568564e+00, TOL));
assert(isequalRel(satrec.xfact,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xgh2,            -6.878292929739e-03, TOL));
assert(isequalRel(satrec.xgh3,            -7.775516402908e-03, TOL));
assert(isequalRel(satrec.xgh4,            -3.441197687525e-04, TOL));
assert(isequalRel(satrec.xh2,             -1.179576494215e-02, TOL));
assert(isequalRel(satrec.xh3,              1.169037463880e-02, TOL));
assert(isequalRel(satrec.xi2,             -1.956589871380e-02, TOL));
assert(isequalRel(satrec.xi3,              2.039566495961e-02, TOL));
assert(isequalRel(satrec.xl2,              5.825328423320e-02, TOL));
assert(isequalRel(satrec.xl3,              6.572632496892e-02, TOL));
assert(isequalRel(satrec.xl4,              4.874798177836e-03, TOL));
assert(isequalRel(satrec.xlamo,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.zmol,             5.607868196210e+00, TOL));
assert(isequalRel(satrec.zmos,             5.196058843771e+00, TOL));
assert(isequalRel(satrec.atime,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xli,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xni,              0.000000000000e+00, TOL));
assert(isequal(satrec.init,               'n')); ##NOTJS
##JS##equal(satrec.method,             'd');
##JS##equal(satrec.init,               'n');
##JS##});
## 23333

##JS##test('72, satin,  1.295600000000e-03,  5.782022000000e-01,  2.062576535463e+04,  4.789944431026e+00,  1.209984410530e-01,  4.405647364347e-01,  1.953881109593e-02,  4.972443038932e-03', function () {
##JS##var satin, rets, satrec, TOL = 0.000001;
##JS## // For JS change   'attr', -> 'attr':
##JS##satin = {
satin = struct(  ##NOTJS 
'error',            0.000000000000e+00,
'satnum',           2.359900000000e+04,
'epochyr',          6.000000000000e+00,
'epochdays',        1.717653546300e+02,
'ndot',             2.593328981965e-09,
'nddot',            2.712557796520e-16,
'bstar',            1.295600000000e-03,
'inclo',            1.209984410530e-01,
'nodeo',            4.972443038932e-03,
'ecco',             5.782022000000e-01,
'argpo',            4.789944431026e+00,
'mo',               4.405647364347e-01,
'no',               1.953881109593e-02,
'a',                2.437742106707e+00,
'alta',             2.847249955837e+00,
'altp',             2.823425757631e-02,
'jdsatepoch',       2.453907265355e+06 
);  ##NOTJS
##JS##};
[satrec] = sgp4init(72, satin,  1.295600000000e-03,  5.782022000000e-01,  2.062576535463e+04,  4.789944431026e+00,  1.209984410530e-01,  4.405647364347e-01,  1.953881109593e-02,  4.972443038932e-03);
assert(isequalRel(satrec.error,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.satnum,           2.359900000000e+04, TOL));
assert(isequalRel(satrec.epochyr,          6.000000000000e+00, TOL));
assert(isequalRel(satrec.epochdays,        1.717653546300e+02, TOL));
assert(isequalRel(satrec.ndot,             2.593328981965e-09, TOL));
assert(isequalRel(satrec.nddot,            2.712557796520e-16, TOL));
assert(isequalRel(satrec.bstar,            1.295600000000e-03, TOL));
assert(isequalRel(satrec.inclo,            1.209984410530e-01, TOL));
assert(isequalRel(satrec.nodeo,            4.972443038932e-03, TOL));
assert(isequalRel(satrec.ecco,             5.782022000000e-01, TOL));
assert(isequalRel(satrec.argpo,            4.789944431026e+00, TOL));
assert(isequalRel(satrec.mo,               4.405647364347e-01, TOL));
assert(isequalRel(satrec.no,               1.952919673236e-02, TOL));
assert(isequalRel(satrec.a,                2.437742106707e+00, TOL));
assert(isequalRel(satrec.alta,             2.847249955837e+00, TOL));
assert(isequalRel(satrec.altp,             2.823425757631e-02, TOL));
assert(isequalRel(satrec.jdsatepoch,       2.453907265355e+06, TOL));
assert(isequalRel(satrec.isimp,            1.000000000000e+00, TOL));
assert(isequal(satrec.method,             'd')); ##NOTJS
assert(isequalRel(satrec.aycof,            1.415289540171e-04, TOL));
assert(isequalRel(satrec.con41,            1.956292061635e+00, TOL));
assert(isequalRel(satrec.cc1,              8.878203501276e-08, TOL));
assert(isequalRel(satrec.cc4,              6.394027779674e-05, TOL));
assert(isequalRel(satrec.cc5,              4.806366086277e-03, TOL));
assert(isequalRel(satrec.d2,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.delmo,            6.795809884804e+00, TOL));
assert(isequalRel(satrec.eta,              9.885421902905e-01, TOL));
assert(isequalRel(satrec.argpdot,          2.370814015402e-05, TOL));
assert(isequalRel(satrec.omgcof,           6.113727976134e-19, TOL));
assert(isequalRel(satrec.sinmao,           4.264503433455e-01, TOL));
assert(isequalRel(satrec.t,                0.000000000000e+00, TOL));
assert(isequalRel(satrec.t2cof,            1.331730525191e-07, TOL));
assert(isequalRel(satrec.t3cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t4cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t5cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.x1mth2,           1.456931278838e-02, TOL));
assert(isequalRel(satrec.x7thm1,           5.898014810481e+00, TOL));
assert(isequalRel(satrec.mdot,             1.953881035267e-02, TOL));
assert(isequalRel(satrec.nodedot,         -1.198223317894e-05, TOL));
assert(isequalRel(satrec.xlcof,            2.827982657092e-04, TOL));
assert(isequalRel(satrec.xmcof,           -6.865432422290e-13, TOL));
assert(isequalRel(satrec.nodecf,          -2.471318865063e-12, TOL));
assert(isequalRel(satrec.irez,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2201,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2211,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3210,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3222,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4410,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4422,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5220,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5232,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5421,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5433,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.dedt,            -4.020215919893e-10, TOL));
assert(isequalRel(satrec.del1,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del2,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del3,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.didt,            -8.390202397339e-10, TOL));
assert(isequalRel(satrec.dmdt,            -3.093486129009e-08, TOL));
assert(isequalRel(satrec.dnodt,            1.298165842561e-07, TOL));
assert(isequalRel(satrec.domdt,           -1.214482290414e-07, TOL));
assert(isequalRel(satrec.e3,               1.917688589693e-04, TOL));
assert(isequalRel(satrec.ee2,              2.600403830731e-04, TOL));
assert(isequalRel(satrec.peo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pgho,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.pho,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pinco,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.plo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.se2,             -2.021959812118e-03, TOL));
assert(isequalRel(satrec.se3,              4.664465684109e-04, TOL));
assert(isequalRel(satrec.sgh2,            -7.734435306744e-04, TOL));
assert(isequalRel(satrec.sgh3,            -3.415977655410e-03, TOL));
assert(isequalRel(satrec.sgh4,            -3.761802411036e-05, TOL));
assert(isequalRel(satrec.sh2,             -2.320545150812e-04, TOL));
assert(isequalRel(satrec.sh3,             -6.756286295110e-04, TOL));
assert(isequalRel(satrec.si2,             -1.848221304876e-04, TOL));
assert(isequalRel(satrec.si3,              1.185722011180e-04, TOL));
assert(isequalRel(satrec.sl2,              1.207731977398e-03, TOL));
assert(isequalRel(satrec.sl3,              5.449750974362e-03, TOL));
assert(isequalRel(satrec.sl4,              1.229961546518e-04, TOL));
assert(isequalRel(satrec.gsto,             3.217495488339e+00, TOL));
assert(isequalRel(satrec.xfact,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xgh2,            -3.210545596328e-04, TOL));
assert(isequalRel(satrec.xgh3,             4.292321013506e-04, TOL));
assert(isequalRel(satrec.xgh4,            -1.980369121860e-05, TOL));
assert(isequalRel(satrec.xh2,             -7.343991154683e-05, TOL));
assert(isequalRel(satrec.xh3,              1.243873320172e-04, TOL));
assert(isequalRel(satrec.xi2,              4.375268409065e-05, TOL));
assert(isequalRel(satrec.xi3,              1.339081864290e-05, TOL));
assert(isequalRel(satrec.xl2,              5.069978526244e-04, TOL));
assert(isequalRel(satrec.xl3,             -6.661160092554e-04, TOL));
assert(isequalRel(satrec.xl4,              6.475028727329e-05, TOL));
assert(isequalRel(satrec.xlamo,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.zmol,             6.619375088630e-01, TOL));
assert(isequalRel(satrec.zmos,             2.893600055028e+00, TOL));
assert(isequalRel(satrec.atime,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xli,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xni,              0.000000000000e+00, TOL));
assert(isequal(satrec.init,               'n')); ##NOTJS
##JS##equal(satrec.method,             'd');
##JS##equal(satrec.init,               'n');
##JS##});
## 23599

##JS##test('72, satin,  1.000000000000e-04,  2.664000000000e-03,  2.063104061740e+04,  5.429679160382e+00,  6.725800805485e-02,  8.429940287133e-01,  4.397272140132e-03,  1.396474586435e+00', function () {
##JS##var satin, rets, satrec, TOL = 0.000001;
##JS## // For JS change   'attr', -> 'attr':
##JS##satin = {
satin = struct(  ##NOTJS 
'error',            0.000000000000e+00,
'satnum',           2.420800000000e+04,
'epochyr',          6.000000000000e+00,
'epochdays',        1.770406174000e+02,
'ndot',            -2.848280376519e-12,
'nddot',            0.000000000000e+00,
'bstar',            1.000000000000e-04,
'inclo',            6.725800805485e-02,
'nodeo',            1.396474586435e+00,
'ecco',             2.664000000000e-03,
'argpo',            5.429679160382e+00,
'mo',               8.429940287133e-01,
'no',               4.397272140132e-03,
'a',                6.588667917946e+00,
'alta',             5.606220129279e+00,
'altp',             5.571115706612e+00,
'jdsatepoch',       2.453912540617e+06 
);  ##NOTJS
##JS##};
[satrec] = sgp4init(72, satin,  1.000000000000e-04,  2.664000000000e-03,  2.063104061740e+04,  5.429679160382e+00,  6.725800805485e-02,  8.429940287133e-01,  4.397272140132e-03,  1.396474586435e+00);
assert(isequalRel(satrec.error,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.satnum,           2.420800000000e+04, TOL));
assert(isequalRel(satrec.epochyr,          6.000000000000e+00, TOL));
assert(isequalRel(satrec.epochdays,        1.770406174000e+02, TOL));
assert(isequalRel(satrec.ndot,            -2.848280376519e-12, TOL));
assert(isequalRel(satrec.nddot,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.bstar,            1.000000000000e-04, TOL));
assert(isequalRel(satrec.inclo,            6.725800805485e-02, TOL));
assert(isequalRel(satrec.nodeo,            1.396474586435e+00, TOL));
assert(isequalRel(satrec.ecco,             2.664000000000e-03, TOL));
assert(isequalRel(satrec.argpo,            5.429679160382e+00, TOL));
assert(isequalRel(satrec.mo,               8.429940287133e-01, TOL));
assert(isequalRel(satrec.no,               4.397108759492e-03, TOL));
assert(isequalRel(satrec.a,                6.588667917946e+00, TOL));
assert(isequalRel(satrec.alta,             5.606220129279e+00, TOL));
assert(isequalRel(satrec.altp,             5.571115706612e+00, TOL));
assert(isequalRel(satrec.jdsatepoch,       2.453912540617e+06, TOL));
assert(isequalRel(satrec.isimp,            1.000000000000e+00, TOL));
assert(isequal(satrec.method,             'd')); ##NOTJS
assert(isequalRel(satrec.aycof,            7.880291502327e-05, TOL));
assert(isequalRel(satrec.con41,            1.986449532035e+00, TOL));
assert(isequalRel(satrec.cc1,              5.634192653482e-18, TOL));
assert(isequalRel(satrec.cc4,              8.790422114838e-16, TOL));
assert(isequalRel(satrec.cc5,              2.562217395482e-11, TOL));
assert(isequalRel(satrec.d2,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.delmo,            1.006294703824e+00, TOL));
assert(isequalRel(satrec.eta,              3.147552327709e-03, TOL));
assert(isequalRel(satrec.argpdot,          3.271746274001e-07, TOL));
assert(isequalRel(satrec.omgcof,           1.192347277720e-20, TOL));
assert(isequalRel(satrec.sinmao,           7.466381822854e-01, TOL));
assert(isequalRel(satrec.t,                0.000000000000e+00, TOL));
assert(isequalRel(satrec.t2cof,            8.451288980223e-18, TOL));
assert(isequalRel(satrec.t3cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t4cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t5cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.x1mth2,           4.516822655120e-03, TOL));
assert(isequalRel(satrec.x7thm1,           5.968382241414e+00, TOL));
assert(isequalRel(satrec.mdot,             4.397272137107e-03, TOL));
assert(isequalRel(satrec.nodedot,         -1.641412021814e-07, TOL));
assert(isequalRel(satrec.xlcof,            1.575612369310e-04, TOL));
assert(isequalRel(satrec.xmcof,           -1.545771663735e-11, TOL));
assert(isequalRel(satrec.nodecf,          -3.236204349649e-24, TOL));
assert(isequalRel(satrec.irez,             1.000000000000e+00, TOL));
assert(isequalRel(satrec.d2201,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2211,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3210,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3222,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4410,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4422,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5220,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5232,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5421,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5433,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.dedt,             9.928697389680e-11, TOL));
assert(isequalRel(satrec.del1,            -6.446921893630e-13, TOL));
assert(isequalRel(satrec.del2,             1.431037712307e-11, TOL));
assert(isequalRel(satrec.del3,             2.011847944584e-12, TOL));
assert(isequalRel(satrec.didt,             3.031124826307e-08, TOL));
assert(isequalRel(satrec.dmdt,            -1.325603345647e-07, TOL));
assert(isequalRel(satrec.dnodt,            1.822046740261e-08, TOL));
assert(isequalRel(satrec.domdt,            4.338936906528e-08, TOL));
assert(isequalRel(satrec.e3,              -7.726902954388e-06, TOL));
assert(isequalRel(satrec.ee2,             -5.176143424006e-07, TOL));
assert(isequalRel(satrec.peo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pgho,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.pho,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pinco,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.plo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.se2,              3.935674677679e-05, TOL));
assert(isequalRel(satrec.se3,              3.101303936462e-05, TOL));
assert(isequalRel(satrec.sgh2,            -1.095943198289e-02, TOL));
assert(isequalRel(satrec.sgh3,             1.543789357065e-02, TOL));
assert(isequalRel(satrec.sgh4,            -2.047755658748e-04, TOL));
assert(isequalRel(satrec.sh2,              1.170723269672e-03, TOL));
assert(isequalRel(satrec.sh3,             -1.086189670839e-03, TOL));
assert(isequalRel(satrec.si2,             -1.002689875952e-03, TOL));
assert(isequalRel(satrec.si3,             -1.074034874057e-03, TOL));
assert(isequalRel(satrec.sl2,              1.012379841762e-02, TOL));
assert(isequalRel(satrec.sl3,             -1.636988036209e-02, TOL));
assert(isequalRel(satrec.sl4,              4.778128024756e-04, TOL));
assert(isequalRel(satrec.gsto,             5.037771726289e+00, TOL));
assert(isequalRel(satrec.xfact,           -4.375013627469e-03, TOL));
assert(isequalRel(satrec.xgh2,             2.915576106025e-03, TOL));
assert(isequalRel(satrec.xgh3,            -4.189146928255e-04, TOL));
assert(isequalRel(satrec.xgh4,            -1.078023679235e-04, TOL));
assert(isequalRel(satrec.xh2,             -3.065019513911e-04, TOL));
assert(isequalRel(satrec.xh3,             -3.781667774154e-05, TOL));
assert(isequalRel(satrec.xi2,             -2.998211222471e-05, TOL));
assert(isequalRel(satrec.xi3,              2.707830507804e-04, TOL));
assert(isequalRel(satrec.xl2,             -2.963865666279e-03, TOL));
assert(isequalRel(satrec.xl3,              7.064676449674e-04, TOL));
assert(isequalRel(satrec.xl4,              2.515405161303e-04, TOL));
assert(isequalRel(satrec.xlamo,            2.631376049241e+00, TOL));
assert(isequalRel(satrec.zmol,             1.864840548802e+00, TOL));
assert(isequalRel(satrec.zmos,             2.984345003862e+00, TOL));
assert(isequalRel(satrec.atime,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xli,              2.631376049241e+00, TOL));
assert(isequalRel(satrec.xni,              4.397108759492e-03, TOL));
assert(isequal(satrec.init,               'n')); ##NOTJS
##JS##equal(satrec.method,             'd');
##JS##equal(satrec.init,               'n');
##JS##});
## 24208

##JS##test('72, satin,  0.000000000000e+00,  1.765000000000e-04,  1.976268057285e+04,  2.710391608592e-01,  6.981317007977e-06,  3.964236143225e-01,  4.375160345672e-03,  4.255350081140e+00', function () {
##JS##var satin, rets, satrec, TOL = 0.000001;
##JS## // For JS change   'attr', -> 'attr':
##JS##satin = {
satin = struct(  ##NOTJS 
'error',            0.000000000000e+00,
'satnum',           2.595400000000e+04,
'epochyr',          4.000000000000e+00,
'epochdays',        3.968057285000e+01,
'ndot',            -3.272492347489e-12,
'nddot',            0.000000000000e+00,
'bstar',            0.000000000000e+00,
'inclo',            6.981317007977e-06,
'nodeo',            4.255350081140e+00,
'ecco',             1.765000000000e-04,
'argpo',            2.710391608592e-01,
'mo',               3.964236143225e-01,
'no',               4.375160345672e-03,
'a',                6.610848412423e+00,
'alta',             5.612015227168e+00,
'altp',             5.609681597679e+00,
'jdsatepoch',       2.453044180573e+06 
);  ##NOTJS
##JS##};
[satrec] = sgp4init(72, satin,  0.000000000000e+00,  1.765000000000e-04,  1.976268057285e+04,  2.710391608592e-01,  6.981317007977e-06,  3.964236143225e-01,  4.375160345672e-03,  4.255350081140e+00);
assert(isequalRel(satrec.error,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.satnum,           2.595400000000e+04, TOL));
assert(isequalRel(satrec.epochyr,          4.000000000000e+00, TOL));
assert(isequalRel(satrec.epochdays,        3.968057285000e+01, TOL));
assert(isequalRel(satrec.ndot,            -3.272492347489e-12, TOL));
assert(isequalRel(satrec.nddot,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.bstar,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.inclo,            6.981317007977e-06, TOL));
assert(isequalRel(satrec.nodeo,            4.255350081140e+00, TOL));
assert(isequalRel(satrec.ecco,             1.765000000000e-04, TOL));
assert(isequalRel(satrec.argpo,            2.710391608592e-01, TOL));
assert(isequalRel(satrec.mo,               3.964236143225e-01, TOL));
assert(isequalRel(satrec.no,               4.374997775854e-03, TOL));
assert(isequalRel(satrec.a,                6.610848412423e+00, TOL));
assert(isequalRel(satrec.alta,             5.612015227168e+00, TOL));
assert(isequalRel(satrec.altp,             5.609681597679e+00, TOL));
assert(isequalRel(satrec.jdsatepoch,       2.453044180573e+06, TOL));
assert(isequalRel(satrec.isimp,            1.000000000000e+00, TOL));
assert(isequal(satrec.method,             'd')); ##NOTJS
assert(isequalRel(satrec.aycof,            8.185837560538e-09, TOL));
assert(isequalRel(satrec.con41,            1.999999999854e+00, TOL));
assert(isequalRel(satrec.cc1,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.cc4,              7.533441570767e-17, TOL));
assert(isequalRel(satrec.cc5,              2.530147989142e-11, TOL));
assert(isequalRel(satrec.d2,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.delmo,            1.000576853575e+00, TOL));
assert(isequalRel(satrec.eta,              2.084102332028e-04, TOL));
assert(isequalRel(satrec.argpdot,          3.251801634695e-07, TOL));
assert(isequalRel(satrec.omgcof,           0.000000000000e+00, TOL));
assert(isequalRel(satrec.sinmao,           3.861217895520e-01, TOL));
assert(isequalRel(satrec.t,                0.000000000000e+00, TOL));
assert(isequalRel(satrec.t2cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t3cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t4cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t5cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.x1mth2,           4.873879078104e-11, TOL));
assert(isequalRel(satrec.x7thm1,           5.999999999659e+00, TOL));
assert(isequalRel(satrec.mdot,             4.375160342650e-03, TOL));
assert(isequalRel(satrec.nodedot,         -1.625870617371e-07, TOL));
assert(isequalRel(satrec.xlcof,            1.637167512103e-08, TOL));
assert(isequalRel(satrec.xmcof,           -0.000000000000e+00, TOL));
assert(isequalRel(satrec.nodecf,          -0.000000000000e+00, TOL));
assert(isequalRel(satrec.irez,             1.000000000000e+00, TOL));
assert(isequalRel(satrec.d2201,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2211,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3210,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3222,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4410,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4422,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5220,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5232,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5421,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5433,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.dedt,             3.553156778959e-12, TOL));
assert(isequalRel(satrec.del1,            -6.397483834459e-13, TOL));
assert(isequalRel(satrec.del2,             1.410403339869e-11, TOL));
assert(isequalRel(satrec.del3,             1.978471517958e-12, TOL));
assert(isequalRel(satrec.didt,            -2.555341579158e-08, TOL));
assert(isequalRel(satrec.dmdt,            -9.603349062976e-08, TOL));
assert(isequalRel(satrec.dnodt,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.domdt,            2.359014000576e-08, TOL));
assert(isequalRel(satrec.e3,              -1.443253711966e-07, TOL));
assert(isequalRel(satrec.ee2,             -4.967861523155e-07, TOL));
assert(isequalRel(satrec.peo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pgho,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.pho,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pinco,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.plo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.se2,             -2.393510838524e-06, TOL));
assert(isequalRel(satrec.se3,              2.297499314735e-06, TOL));
assert(isequalRel(satrec.sgh2,            -1.264715658450e-02, TOL));
assert(isequalRel(satrec.sgh3,            -1.273189516222e-02, TOL));
assert(isequalRel(satrec.sgh4,            -2.058112167495e-04, TOL));
assert(isequalRel(satrec.sh2,             -1.099705176855e-03, TOL));
assert(isequalRel(satrec.sh3,              1.167960133285e-03, TOL));
assert(isequalRel(satrec.si2,              1.176752281702e-03, TOL));
assert(isequalRel(satrec.si3,              9.654718969481e-04, TOL));
assert(isequalRel(satrec.sl2,              1.215221622343e-02, TOL));
assert(isequalRel(satrec.sl3,              1.153344263874e-02, TOL));
assert(isequalRel(satrec.sl4,              4.802261863070e-04, TOL));
assert(isequalRel(satrec.gsto,             4.036986406591e-01, TOL));
assert(isequalRel(satrec.xfact,           -4.375016371464e-03, TOL));
assert(isequalRel(satrec.xgh2,             6.708089970693e-04, TOL));
assert(isequalRel(satrec.xgh3,            -2.691818508104e-03, TOL));
assert(isequalRel(satrec.xgh4,            -1.083475775834e-04, TOL));
assert(isequalRel(satrec.xh2,             -2.688548161140e-04, TOL));
assert(isequalRel(satrec.xh3,             -1.120931668890e-04, TOL));
assert(isequalRel(satrec.xi2,             -7.859155231505e-05, TOL));
assert(isequalRel(satrec.xi3,              2.677016040710e-04, TOL));
assert(isequalRel(satrec.xl2,             -4.478395208697e-04, TOL));
assert(isequalRel(satrec.xl3,              2.528608623316e-03, TOL));
assert(isequalRel(satrec.xl4,              2.528110216744e-04, TOL));
assert(isequalRel(satrec.xlamo,            4.519114215663e+00, TOL));
assert(isequalRel(satrec.zmol,             4.917119876491e+00, TOL));
assert(isequalRel(satrec.zmos,             6.132061041587e-01, TOL));
assert(isequalRel(satrec.atime,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xli,              4.519114215663e+00, TOL));
assert(isequalRel(satrec.xni,              4.374997775854e-03, TOL));
assert(isequal(satrec.init,               'n')); ##NOTJS
##JS##equal(satrec.method,             'd');
##JS##equal(satrec.init,               'n');
##JS##});
## 25954

##JS##test('72, satin,  1.000000000000e-04,  3.319000000000e-04,  2.056074503247e+04,  1.504114277393e+00,  2.862339973271e-04,  3.181019641392e+00,  4.375271959478e-03,  4.651962191022e+00', function () {
##JS##var satin, rets, satrec, TOL = 0.000001;
##JS## // For JS change   'attr', -> 'attr':
##JS##satin = {
satin = struct(  ##NOTJS 
'error',            0.000000000000e+00,
'satnum',           2.690000000000e+04,
'epochyr',          6.000000000000e+00,
'epochdays',        1.067450324700e+02,
'ndot',             1.363538478121e-12,
'nddot',            0.000000000000e+00,
'bstar',            1.000000000000e-04,
'inclo',            2.862339973271e-04,
'nodeo',            4.651962191022e+00,
'ecco',             3.319000000000e-04,
'argpo',            1.504114277393e+00,
'mo',               3.181019641392e+00,
'no',               4.375271959478e-03,
'a',                6.610735982828e+00,
'alta',             5.612930086100e+00,
'altp',             5.608541879555e+00,
'jdsatepoch',       2.453842245032e+06 
);  ##NOTJS
##JS##};
[satrec] = sgp4init(72, satin,  1.000000000000e-04,  3.319000000000e-04,  2.056074503247e+04,  1.504114277393e+00,  2.862339973271e-04,  3.181019641392e+00,  4.375271959478e-03,  4.651962191022e+00);
assert(isequalRel(satrec.error,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.satnum,           2.690000000000e+04, TOL));
assert(isequalRel(satrec.epochyr,          6.000000000000e+00, TOL));
assert(isequalRel(satrec.epochdays,        1.067450324700e+02, TOL));
assert(isequalRel(satrec.ndot,             1.363538478121e-12, TOL));
assert(isequalRel(satrec.nddot,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.bstar,            1.000000000000e-04, TOL));
assert(isequalRel(satrec.inclo,            2.862339973271e-04, TOL));
assert(isequalRel(satrec.nodeo,            4.651962191022e+00, TOL));
assert(isequalRel(satrec.ecco,             3.319000000000e-04, TOL));
assert(isequalRel(satrec.argpo,            1.504114277393e+00, TOL));
assert(isequalRel(satrec.mo,               3.181019641392e+00, TOL));
assert(isequalRel(satrec.no,               4.375109379983e-03, TOL));
assert(isequalRel(satrec.a,                6.610735982828e+00, TOL));
assert(isequalRel(satrec.alta,             5.612930086100e+00, TOL));
assert(isequalRel(satrec.altp,             5.608541879555e+00, TOL));
assert(isequalRel(satrec.jdsatepoch,       2.453842245032e+06, TOL));
assert(isequalRel(satrec.isimp,            1.000000000000e+00, TOL));
assert(isequal(satrec.method,             'd')); ##NOTJS
assert(isequalRel(satrec.aycof,            3.356193354019e-07, TOL));
assert(isequalRel(satrec.con41,            1.999999754210e+00, TOL));
assert(isequalRel(satrec.cc1,              5.536164233960e-18, TOL));
assert(isequalRel(satrec.cc4,              1.245710890009e-16, TOL));
assert(isequalRel(satrec.cc5,              2.530310386868e-11, TOL));
assert(isequalRel(satrec.d2,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.delmo,            9.988256529794e-01, TOL));
assert(isequalRel(satrec.eta,              3.919069069565e-04, TOL));
assert(isequalRel(satrec.argpdot,          3.251995395495e-07, TOL));
assert(isequalRel(satrec.omgcof,           4.030634987259e-23, TOL));
assert(isequalRel(satrec.sinmao,          -3.941677380405e-02, TOL));
assert(isequalRel(satrec.t,                0.000000000000e+00, TOL));
assert(isequalRel(satrec.t2cof,            8.304246350939e-18, TOL));
assert(isequalRel(satrec.t3cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t4cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t5cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.x1mth2,           8.192989897626e-08, TOL));
assert(isequalRel(satrec.x7thm1,           5.999999426491e+00, TOL));
assert(isequalRel(satrec.mdot,             4.375271956456e-03, TOL));
assert(isequalRel(satrec.nodedot,         -1.625967594802e-07, TOL));
assert(isequalRel(satrec.xlcof,            6.712386673667e-07, TOL));
assert(isequalRel(satrec.xmcof,           -9.808470215307e-10, TOL));
assert(isequalRel(satrec.nodecf,          -3.149999696385e-24, TOL));
assert(isequalRel(satrec.irez,             1.000000000000e+00, TOL));
assert(isequalRel(satrec.d2201,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2211,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3210,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3222,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4410,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4422,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5220,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5232,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5421,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5433,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.dedt,            -3.521807114582e-12, TOL));
assert(isequalRel(satrec.del1,            -6.398136216901e-13, TOL));
assert(isequalRel(satrec.del2,             1.410522936173e-11, TOL));
assert(isequalRel(satrec.del3,             1.978672345716e-12, TOL));
assert(isequalRel(satrec.didt,            -3.073811485140e-08, TOL));
assert(isequalRel(satrec.dmdt,            -1.613621211138e-07, TOL));
assert(isequalRel(satrec.dnodt,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.domdt,            9.088792566710e-08, TOL));
assert(isequalRel(satrec.e3,              -4.297357109584e-07, TOL));
assert(isequalRel(satrec.ee2,             -8.575863014313e-07, TOL));
assert(isequalRel(satrec.peo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pgho,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.pho,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pinco,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.plo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.se2,              4.977710503291e-06, TOL));
assert(isequalRel(satrec.se3,             -3.758122880832e-06, TOL));
assert(isequalRel(satrec.sgh2,             1.170238813200e-02, TOL));
assert(isequalRel(satrec.sgh3,             1.596617407202e-02, TOL));
assert(isequalRel(satrec.sgh4,            -2.058059586065e-04, TOL));
assert(isequalRel(satrec.sh2,             -1.469489949578e-03, TOL));
assert(isequalRel(satrec.sh3,              7.031457064751e-04, TOL));
assert(isequalRel(satrec.si2,              6.596584265507e-04, TOL));
assert(isequalRel(satrec.si3,              1.342180142943e-03, TOL));
assert(isequalRel(satrec.sl2,             -1.219566699304e-02, TOL));
assert(isequalRel(satrec.sl3,             -1.716537238492e-02, TOL));
assert(isequalRel(satrec.sl4,              4.802139525359e-04, TOL));
assert(isequalRel(satrec.gsto,             1.971276525301e+00, TOL));
assert(isequalRel(satrec.xfact,           -4.375014382954e-03, TOL));
assert(isequalRel(satrec.xgh2,             1.468610866371e-03, TOL));
assert(isequalRel(satrec.xgh3,            -2.762771903365e-03, TOL));
assert(isequalRel(satrec.xgh4,            -1.083448094784e-04, TOL));
assert(isequalRel(satrec.xh2,              2.443977229280e-04, TOL));
assert(isequalRel(satrec.xh3,              1.980068154638e-04, TOL));
assert(isequalRel(satrec.xi2,              1.700595365594e-04, TOL));
assert(isequalRel(satrec.xi3,             -2.181240526799e-04, TOL));
assert(isequalRel(satrec.xl2,             -1.672610170679e-03, TOL));
assert(isequalRel(satrec.xl3,              2.984308463316e-03, TOL));
assert(isequalRel(satrec.xl4,              2.528045813088e-04, TOL));
assert(isequalRel(satrec.xlamo,            1.082634277327e+00, TOL));
assert(isequalRel(satrec.zmol,             4.685095846573e+00, TOL));
assert(isequalRel(satrec.zmos,             1.775121968701e+00, TOL));
assert(isequalRel(satrec.atime,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xli,              1.082634277327e+00, TOL));
assert(isequalRel(satrec.xni,              4.375109379983e-03, TOL));
assert(isequal(satrec.init,               'n')); ##NOTJS
##JS##equal(satrec.method,             'd');
##JS##equal(satrec.init,               'n');
##JS##});
## 26900

##JS##test('72, satin,  1.000000000000e-04,  5.602877000000e-01,  2.062885818871e+04,  2.159817024075e+00,  1.195051373450e+00,  5.280959654819e+00,  8.973503578612e-03,  4.121251198722e+00', function () {
##JS##var satin, rets, satrec, TOL = 0.000001;
##JS## // For JS change   'attr', -> 'attr':
##JS##satin = {
satin = struct(  ##NOTJS 
'error',            0.000000000000e+00,
'satnum',           2.697500000000e+04,
'epochyr',          6.000000000000e+00,
'epochdays',        1.748581887100e+02,
'ndot',             1.878653014299e-11,
'nddot',            0.000000000000e+00,
'bstar',            1.000000000000e-04,
'inclo',            1.195051373450e+00,
'nodeo',            4.121251198722e+00,
'ecco',             5.602877000000e-01,
'argpo',            2.159817024075e+00,
'mo',               5.280959654819e+00,
'no',               8.973503578612e-03,
'a',                4.095231791940e+00,
'alta',             5.389739793613e+00,
'altp',             8.007237902671e-01,
'jdsatepoch',       2.453910358189e+06 
);  ##NOTJS
##JS##};
[satrec] = sgp4init(72, satin,  1.000000000000e-04,  5.602877000000e-01,  2.062885818871e+04,  2.159817024075e+00,  1.195051373450e+00,  5.280959654819e+00,  8.973503578612e-03,  4.121251198722e+00);
assert(isequalRel(satrec.error,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.satnum,           2.697500000000e+04, TOL));
assert(isequalRel(satrec.epochyr,          6.000000000000e+00, TOL));
assert(isequalRel(satrec.epochdays,        1.748581887100e+02, TOL));
assert(isequalRel(satrec.ndot,             1.878653014299e-11, TOL));
assert(isequalRel(satrec.nddot,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.bstar,            1.000000000000e-04, TOL));
assert(isequalRel(satrec.inclo,            1.195051373450e+00, TOL));
assert(isequalRel(satrec.nodeo,            4.121251198722e+00, TOL));
assert(isequalRel(satrec.ecco,             5.602877000000e-01, TOL));
assert(isequalRel(satrec.argpo,            2.159817024075e+00, TOL));
assert(isequalRel(satrec.mo,               5.280959654819e+00, TOL));
assert(isequalRel(satrec.no,               8.973959238486e-03, TOL));
assert(isequalRel(satrec.a,                4.095231791940e+00, TOL));
assert(isequalRel(satrec.alta,             5.389739793613e+00, TOL));
assert(isequalRel(satrec.altp,             8.007237902671e-01, TOL));
assert(isequalRel(satrec.jdsatepoch,       2.453910358189e+06, TOL));
assert(isequalRel(satrec.isimp,            1.000000000000e+00, TOL));
assert(isequal(satrec.method,             'd')); ##NOTJS
assert(isequalRel(satrec.aycof,            1.090732388372e-03, TOL));
assert(isequalRel(satrec.con41,           -5.960087184875e-01, TOL));
assert(isequalRel(satrec.cc1,              4.811273805740e-15, TOL));
assert(isequalRel(satrec.cc4,              4.594680777195e-11, TOL));
assert(isequalRel(satrec.cc5,              7.696169715955e-09, TOL));
assert(isequalRel(satrec.d2,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.delmo,            2.748275216336e+00, TOL));
assert(isequalRel(satrec.eta,              7.442528818758e-01, TOL));
assert(isequalRel(satrec.argpdot,         -3.016738966805e-07, TOL));
assert(isequalRel(satrec.omgcof,          -2.621335469760e-20, TOL));
assert(isequalRel(satrec.sinmao,          -8.426714247932e-01, TOL));
assert(isequalRel(satrec.t,                0.000000000000e+00, TOL));
assert(isequalRel(satrec.t2cof,            7.216910708610e-15, TOL));
assert(isequalRel(satrec.t3cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t4cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t5cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.x1mth2,           8.653362394958e-01, TOL));
assert(isequalRel(satrec.x7thm1,          -5.735367647089e-02, TOL));
assert(isequalRel(satrec.mdot,             8.973503564981e-03, TOL));
assert(isequalRel(satrec.nodedot,         -6.772847467554e-07, TOL));
assert(isequalRel(satrec.xlcof,            1.928908639400e-03, TOL));
assert(isequalRel(satrec.xmcof,           -3.327990358418e-15, TOL));
assert(isequalRel(satrec.nodecf,          -7.827127474091e-21, TOL));
assert(isequalRel(satrec.irez,             2.000000000000e+00, TOL));
assert(isequalRel(satrec.d2201,           -9.786807233862e-12, TOL));
assert(isequalRel(satrec.d2211,            4.375070167297e-11, TOL));
assert(isequalRel(satrec.d3210,           -7.299736059955e-13, TOL));
assert(isequalRel(satrec.d3222,           -3.088972920727e-12, TOL));
assert(isequalRel(satrec.d4410,            1.175930799908e-12, TOL));
assert(isequalRel(satrec.d4422,            1.666014658389e-12, TOL));
assert(isequalRel(satrec.d5220,           -5.223073387126e-13, TOL));
assert(isequalRel(satrec.d5232,           -4.239623278319e-14, TOL));
assert(isequalRel(satrec.d5421,           -5.046358599919e-13, TOL));
assert(isequalRel(satrec.d5433,           -3.893572552863e-13, TOL));
assert(isequalRel(satrec.dedt,            -3.971152052616e-08, TOL));
assert(isequalRel(satrec.del1,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del2,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del3,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.didt,             9.978447336132e-10, TOL));
assert(isequalRel(satrec.dmdt,             2.773996268752e-09, TOL));
assert(isequalRel(satrec.dnodt,           -6.124174505388e-09, TOL));
assert(isequalRel(satrec.domdt,            1.574985894206e-08, TOL));
assert(isequalRel(satrec.e3,              -2.267021997425e-04, TOL));
assert(isequalRel(satrec.ee2,             -2.551224465045e-04, TOL));
assert(isequalRel(satrec.peo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pgho,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.pho,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pinco,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.plo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.se2,              2.254910627255e-03, TOL));
assert(isequalRel(satrec.se3,             -2.280386619192e-04, TOL));
assert(isequalRel(satrec.sgh2,            -3.389917058225e-03, TOL));
assert(isequalRel(satrec.sgh3,             1.654422300963e-03, TOL));
assert(isequalRel(satrec.sgh4,            -8.310926481500e-05, TOL));
assert(isequalRel(satrec.sh2,             -9.721139826925e-04, TOL));
assert(isequalRel(satrec.sh3,             -2.919237403379e-03, TOL));
assert(isequalRel(satrec.si2,              6.537866741737e-04, TOL));
assert(isequalRel(satrec.si3,              3.149325116495e-03, TOL));
assert(isequalRel(satrec.sl2,              9.242202107515e-03, TOL));
assert(isequalRel(satrec.sl3,             -3.312631236734e-03, TOL));
assert(isequalRel(satrec.sl4,              2.656187161612e-04, TOL));
assert(isequalRel(satrec.gsto,             3.853994597295e+00, TOL));
assert(isequalRel(satrec.xfact,           -8.752357893374e-03, TOL));
assert(isequalRel(satrec.xgh2,             5.870668970928e-04, TOL));
assert(isequalRel(satrec.xgh3,             3.411079917117e-04, TOL));
assert(isequalRel(satrec.xgh4,            -4.375217084695e-05, TOL));
assert(isequalRel(satrec.xh2,             -2.939157970135e-04, TOL));
assert(isequalRel(satrec.xh3,              4.419605173894e-04, TOL));
assert(isequalRel(satrec.xi2,              3.177266725877e-04, TOL));
assert(isequalRel(satrec.xi3,             -4.193605290405e-04, TOL));
assert(isequalRel(satrec.xl2,             -1.435489158349e-03, TOL));
assert(isequalRel(satrec.xl3,             -9.317921317489e-04, TOL));
assert(isequalRel(satrec.xl4,              1.398327307491e-04, TOL));
assert(isequalRel(satrec.xlamo,            5.815472857673e+00, TOL));
assert(isequalRel(satrec.zmol,             1.367187593900e+00, TOL));
assert(isequalRel(satrec.zmos,             2.946802915738e+00, TOL));
assert(isequalRel(satrec.atime,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xli,              5.815472857673e+00, TOL));
assert(isequalRel(satrec.xni,              8.973959238486e-03, TOL));
assert(isequal(satrec.init,               'n')); ##NOTJS
##JS##equal(satrec.method,             'd');
##JS##equal(satrec.init,               'n');
##JS##});
## 26975

##JS##test('72, satin,  3.594000000000e-05,  8.840000000000e-05,  2.063178615833e+04,  1.539317568406e+00,  1.717897912141e+00,  4.746112232192e+00,  6.263454709052e-02,  4.323112489349e+00', function () {
##JS##var satin, rets, satrec, TOL = 0.000001;
##JS## // For JS change   'attr', -> 'attr':
##JS##satin = {
satin = struct(  ##NOTJS 
'error',            0.000000000000e+00,
'satnum',           2.805700000000e+04,
'epochyr',          6.000000000000e+00,
'epochdays',        1.777861583300e+02,
'ndot',             1.818051304161e-12,
'nddot',            0.000000000000e+00,
'bstar',            3.594000000000e-05,
'inclo',            1.717897912141e+00,
'nodeo',            4.323112489349e+00,
'ecco',             8.840000000000e-05,
'argpo',            1.539317568406e+00,
'mo',               4.746112232192e+00,
'no',               6.263454709052e-02,
'a',                1.121270907313e+00,
'alta',             1.213700276612e-01,
'altp',             1.211717869648e-01,
'jdsatepoch',       2.453913286158e+06 
);  ##NOTJS
##JS##};
[satrec] = sgp4init(72, satin,  3.594000000000e-05,  8.840000000000e-05,  2.063178615833e+04,  1.539317568406e+00,  1.717897912141e+00,  4.746112232192e+00,  6.263454709052e-02,  4.323112489349e+00);
assert(isequalRel(satrec.error,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.satnum,           2.805700000000e+04, TOL));
assert(isequalRel(satrec.epochyr,          6.000000000000e+00, TOL));
assert(isequalRel(satrec.epochdays,        1.777861583300e+02, TOL));
assert(isequalRel(satrec.ndot,             1.818051304161e-12, TOL));
assert(isequalRel(satrec.nddot,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.bstar,            3.594000000000e-05, TOL));
assert(isequalRel(satrec.inclo,            1.717897912141e+00, TOL));
assert(isequalRel(satrec.nodeo,            4.323112489349e+00, TOL));
assert(isequalRel(satrec.ecco,             8.840000000000e-05, TOL));
assert(isequalRel(satrec.argpo,            1.539317568406e+00, TOL));
assert(isequalRel(satrec.mo,               4.746112232192e+00, TOL));
assert(isequalRel(satrec.no,               6.267239862091e-02, TOL));
assert(isequalRel(satrec.a,                1.121270907313e+00, TOL));
assert(isequalRel(satrec.alta,             1.213700276612e-01, TOL));
assert(isequalRel(satrec.altp,             1.211717869648e-01, TOL));
assert(isequalRel(satrec.jdsatepoch,       2.453913286158e+06, TOL));
assert(isequalRel(satrec.isimp,            0.000000000000e+00, TOL));
assert(isequal(satrec.method,             'n')); ##NOTJS
assert(isequalRel(satrec.aycof,            1.159871551252e-03, TOL));
assert(isequalRel(satrec.con41,           -9.355502628635e-01, TOL));
assert(isequalRel(satrec.cc1,              3.328688812461e-11, TOL));
assert(isequalRel(satrec.cc4,             -4.387798057377e-08, TOL));
assert(isequalRel(satrec.cc5,              3.031301664072e-05, TOL));
assert(isequalRel(satrec.d2,               4.574585313329e-20, TOL));
assert(isequalRel(satrec.d3,               9.379455598865e-29, TOL));
assert(isequalRel(satrec.d4,               2.240943706149e-37, TOL));
assert(isequalRel(satrec.delmo,            1.000092295250e+00, TOL));
assert(isequalRel(satrec.eta,              9.124259161262e-04, TOL));
assert(isequalRel(satrec.argpdot,         -3.607711622942e-05, TOL));
assert(isequalRel(satrec.omgcof,           0.000000000000e+00, TOL));
assert(isequalRel(satrec.sinmao,          -9.994314250315e-01, TOL));
assert(isequalRel(satrec.t,                0.000000000000e+00, TOL));
assert(isequalRel(satrec.t2cof,            4.993033218692e-11, TOL));
assert(isequalRel(satrec.t3cof,            4.796188697533e-20, TOL));
assert(isequalRel(satrec.t4cof,            7.500633436595e-29, TOL));
assert(isequalRel(satrec.t5cof,            1.447687575846e-37, TOL));
assert(isequalRel(satrec.x1mth2,           9.785167542878e-01, TOL));
assert(isequalRel(satrec.x7thm1,          -8.496172800149e-01, TOL));
assert(isequalRel(satrec.mdot,             6.263452620104e-02, TOL));
assert(isequalRel(satrec.nodedot,          1.183970648571e-05, TOL));
assert(isequalRel(satrec.xlcof,            1.540605749216e-03, TOL));
assert(isequalRel(satrec.xmcof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.nodecf,           1.383445114983e-15, TOL));
assert(isequalRel(satrec.irez,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2201,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2211,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3210,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3222,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4410,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4422,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5220,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5232,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5421,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5433,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.dedt,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del1,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del2,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del3,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.didt,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.dmdt,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.dnodt,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.domdt,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.e3,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.ee2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.peo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pgho,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.pho,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pinco,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.plo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.se2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.se3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sgh2,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.sgh3,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.sgh4,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.sh2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sh3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.si2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.si3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sl2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sl3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sl4,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.gsto,             3.451783621544e+00, TOL));
assert(isequalRel(satrec.xfact,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xgh2,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.xgh3,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.xgh4,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.xh2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xh3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xi2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xi3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xl2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xl3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xl4,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xlamo,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.zmol,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.zmos,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.atime,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xli,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xni,              0.000000000000e+00, TOL));
assert(isequal(satrec.init,               'n')); ##NOTJS
##JS##equal(satrec.method,             'n');
##JS##equal(satrec.init,               'n');
##JS##});
## 28057

##JS##test('72, satin,  1.000000000000e-04,  4.850600000000e-03,  2.062957071136e+04,  4.647183479530e+00,  9.552152089580e-01,  1.626058686901e+00,  8.751201646284e-03,  5.669000452744e+00', function () {
##JS##var satin, rets, satrec, TOL = 0.000001;
##JS## // For JS change   'attr', -> 'attr':
##JS##satin = {
satin = struct(  ##NOTJS 
'error',            0.000000000000e+00,
'satnum',           2.812900000000e+04,
'epochyr',          6.000000000000e+00,
'epochdays',        1.755707113600e+02,
'ndot',            -3.151288927212e-12,
'nddot',            0.000000000000e+00,
'bstar',            1.000000000000e-04,
'inclo',            9.552152089580e-01,
'nodeo',            5.669000452744e+00,
'ecco',             4.850600000000e-03,
'argpo',            4.647183479530e+00,
'mo',               1.626058686901e+00,
'no',               8.751201646284e-03,
'a',                4.164294042188e+00,
'alta',             3.184493366869e+00,
'altp',             3.144094717507e+00,
'jdsatepoch',       2.453911070711e+06 
);  ##NOTJS
##JS##};
[satrec] = sgp4init(72, satin,  1.000000000000e-04,  4.850600000000e-03,  2.062957071136e+04,  4.647183479530e+00,  9.552152089580e-01,  1.626058686901e+00,  8.751201646284e-03,  5.669000452744e+00);
assert(isequalRel(satrec.error,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.satnum,           2.812900000000e+04, TOL));
assert(isequalRel(satrec.epochyr,          6.000000000000e+00, TOL));
assert(isequalRel(satrec.epochdays,        1.755707113600e+02, TOL));
assert(isequalRel(satrec.ndot,            -3.151288927212e-12, TOL));
assert(isequalRel(satrec.nddot,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.bstar,            1.000000000000e-04, TOL));
assert(isequalRel(satrec.inclo,            9.552152089580e-01, TOL));
assert(isequalRel(satrec.nodeo,            5.669000452744e+00, TOL));
assert(isequalRel(satrec.ecco,             4.850600000000e-03, TOL));
assert(isequalRel(satrec.argpo,            4.647183479530e+00, TOL));
assert(isequalRel(satrec.mo,               1.626058686901e+00, TOL));
assert(isequalRel(satrec.no,               8.751201528747e-03, TOL));
assert(isequalRel(satrec.a,                4.164294042188e+00, TOL));
assert(isequalRel(satrec.alta,             3.184493366869e+00, TOL));
assert(isequalRel(satrec.altp,             3.144094717507e+00, TOL));
assert(isequalRel(satrec.jdsatepoch,       2.453911070711e+06, TOL));
assert(isequalRel(satrec.isimp,            1.000000000000e+00, TOL));
assert(isequal(satrec.method,             'd')); ##NOTJS
assert(isequalRel(satrec.aycof,            9.573020490049e-04, TOL));
assert(isequalRel(satrec.con41,            2.868387191268e-04, TOL));
assert(isequalRel(satrec.cc1,              6.943749715587e-17, TOL));
assert(isequalRel(satrec.cc4,              2.116354478564e-14, TOL));
assert(isequalRel(satrec.cc5,              1.586907226023e-10, TOL));
assert(isequalRel(satrec.d2,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.delmo,            9.989385058711e-01, TOL));
assert(isequalRel(satrec.eta,              6.408283505618e-03, TOL));
assert(isequalRel(satrec.argpdot,          2.733167532830e-07, TOL));
assert(isequalRel(satrec.omgcof,          -2.720221625576e-19, TOL));
assert(isequalRel(satrec.sinmao,           9.984734243415e-01, TOL));
assert(isequalRel(satrec.t,                0.000000000000e+00, TOL));
assert(isequalRel(satrec.t2cof,            1.041562457338e-16, TOL));
assert(isequalRel(satrec.t3cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t4cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t5cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.x1mth2,           6.665710537603e-01, TOL));
assert(isequalRel(satrec.x7thm1,           1.334002623678e+00, TOL));
assert(isequalRel(satrec.mdot,             8.751201649839e-03, TOL));
assert(isequalRel(satrec.nodedot,         -4.732303306962e-07, TOL));
assert(isequalRel(satrec.xlcof,            1.786381798147e-03, TOL));
assert(isequalRel(satrec.xmcof,           -4.085200213224e-11, TOL));
assert(isequalRel(satrec.nodecf,          -1.150070791226e-22, TOL));
assert(isequalRel(satrec.irez,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2201,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2211,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3210,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3222,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4410,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4422,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5220,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5232,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5421,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5433,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.dedt,            -1.106805331423e-10, TOL));
assert(isequalRel(satrec.del1,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del2,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del3,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.didt,            -8.158095760647e-09, TOL));
assert(isequalRel(satrec.dmdt,            -2.274847457650e-08, TOL));
assert(isequalRel(satrec.dnodt,           -1.962977385408e-08, TOL));
assert(isequalRel(satrec.domdt,            8.552991333113e-09, TOL));
assert(isequalRel(satrec.e3,              -3.876849228949e-06, TOL));
assert(isequalRel(satrec.ee2,              5.421891510864e-06, TOL));
assert(isequalRel(satrec.peo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pgho,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.pho,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pinco,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.plo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.se2,             -2.399586065802e-06, TOL));
assert(isequalRel(satrec.se3,              3.979795711446e-05, TOL));
assert(isequalRel(satrec.sgh2,            -7.340466124056e-03, TOL));
assert(isequalRel(satrec.sgh3,            -9.267102539452e-04, TOL));
assert(isequalRel(satrec.sgh4,            -1.028902184234e-04, TOL));
assert(isequalRel(satrec.sh2,              1.019818515817e-03, TOL));
assert(isequalRel(satrec.sh3,             -1.260734846663e-04, TOL));
assert(isequalRel(satrec.si2,             -3.379233009896e-04, TOL));
assert(isequalRel(satrec.si3,             -1.160185387548e-03, TOL));
assert(isequalRel(satrec.sl2,              6.096109975713e-03, TOL));
assert(isequalRel(satrec.sl3,              1.773703432654e-03, TOL));
assert(isequalRel(satrec.sl4,              2.400824215399e-04, TOL));
assert(isequalRel(satrec.gsto,             2.059978512381e+00, TOL));
assert(isequalRel(satrec.xfact,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xgh2,             6.595724207569e-04, TOL));
assert(isequalRel(satrec.xgh3,             1.091630835372e-03, TOL));
assert(isequalRel(satrec.xgh4,            -5.416568688173e-05, TOL));
assert(isequalRel(satrec.xh2,             -1.288582105817e-04, TOL));
assert(isequalRel(satrec.xh3,             -9.703376083569e-05, TOL));
assert(isequalRel(satrec.xi2,             -8.270003713552e-05, TOL));
assert(isequalRel(satrec.xi3,              1.575914794162e-04, TOL));
assert(isequalRel(satrec.xl2,             -4.514061623044e-04, TOL));
assert(isequalRel(satrec.xl3,             -1.081448579815e-03, TOL));
assert(isequalRel(satrec.xl4,              1.263893640252e-04, TOL));
assert(isequalRel(satrec.xlamo,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.zmol,             1.529662090192e+00, TOL));
assert(isequalRel(satrec.zmos,             2.959059713970e+00, TOL));
assert(isequalRel(satrec.atime,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xli,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xni,              0.000000000000e+00, TOL));
assert(isequal(satrec.init,               'n')); ##NOTJS
##JS##equal(satrec.method,             'd');
##JS##equal(satrec.init,               'n');
##JS##});
## 28129

##JS##test('72, satin,  1.867800000000e-04,  2.487000000000e-03,  2.062121788666e+04,  4.551082160257e+00,  1.134423871224e+00,  1.744613667001e+00,  7.190131350005e-02,  6.032084787695e+00', function () {
##JS##var satin, rets, satrec, TOL = 0.000001;
##JS## // For JS change   'attr', -> 'attr':
##JS##satin = {
satin = struct(  ##NOTJS 
'error',            0.000000000000e+00,
'satnum',           2.835000000000e+04,
'epochyr',          6.000000000000e+00,
'epochdays',        1.672178866600e+02,
'ndot',             4.894949208109e-07,
'nddot',            1.604830078871e-14,
'bstar',            1.867800000000e-04,
'inclo',            1.134423871224e+00,
'nodeo',            6.032084787695e+00,
'ecco',             2.487000000000e-03,
'argpo',            4.551082160257e+00,
'mo',               1.744613667001e+00,
'no',               7.190131350005e-02,
'a',                1.022732284475e+00,
'alta',             2.527581966614e-02,
'altp',             2.018874928316e-02,
'jdsatepoch',       2.453902717887e+06 
);  ##NOTJS
##JS##};
[satrec] = sgp4init(72, satin,  1.867800000000e-04,  2.487000000000e-03,  2.062121788666e+04,  4.551082160257e+00,  1.134423871224e+00,  1.744613667001e+00,  7.190131350005e-02,  6.032084787695e+00);
assert(isequalRel(satrec.error,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.satnum,           2.835000000000e+04, TOL));
assert(isequalRel(satrec.epochyr,          6.000000000000e+00, TOL));
assert(isequalRel(satrec.epochdays,        1.672178866600e+02, TOL));
assert(isequalRel(satrec.ndot,             4.894949208109e-07, TOL));
assert(isequalRel(satrec.nddot,            1.604830078871e-14, TOL));
assert(isequalRel(satrec.bstar,            1.867800000000e-04, TOL));
assert(isequalRel(satrec.inclo,            1.134423871224e+00, TOL));
assert(isequalRel(satrec.nodeo,            6.032084787695e+00, TOL));
assert(isequalRel(satrec.ecco,             2.487000000000e-03, TOL));
assert(isequalRel(satrec.argpo,            4.551082160257e+00, TOL));
assert(isequalRel(satrec.mo,               1.744613667001e+00, TOL));
assert(isequalRel(satrec.no,               7.192721985507e-02, TOL));
assert(isequalRel(satrec.a,                1.022732284475e+00, TOL));
assert(isequalRel(satrec.alta,             2.527581966614e-02, TOL));
assert(isequalRel(satrec.altp,             2.018874928316e-02, TOL));
assert(isequalRel(satrec.jdsatepoch,       2.453902717887e+06, TOL));
assert(isequalRel(satrec.isimp,            1.000000000000e+00, TOL));
assert(isequal(satrec.method,             'n')); ##NOTJS
assert(isequalRel(satrec.aycof,            1.062657581303e-03, TOL));
assert(isequalRel(satrec.con41,           -4.640891584380e-01, TOL));
assert(isequalRel(satrec.cc1,              4.544683509554e-06, TOL));
assert(isequalRel(satrec.cc4,              1.268170994709e-02, TOL));
assert(isequalRel(satrec.cc5,              7.841276141148e-01, TOL));
assert(isequalRel(satrec.d2,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.delmo,            9.133197917493e-01, TOL));
assert(isequalRel(satrec.eta,              1.721425121901e-01, TOL));
assert(isequalRel(satrec.argpdot,         -6.065080248370e-06, TOL));
assert(isequalRel(satrec.omgcof,          -7.957944273337e-05, TOL));
assert(isequalRel(satrec.sinmao,           9.849317608904e-01, TOL));
assert(isequalRel(satrec.t,                0.000000000000e+00, TOL));
assert(isequalRel(satrec.t2cof,            6.817025264331e-06, TOL));
assert(isequalRel(satrec.t3cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t4cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t5cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.x1mth2,           8.213630528127e-01, TOL));
assert(isequalRel(satrec.x7thm1,           2.504586303113e-01, TOL));
assert(isequalRel(satrec.mdot,             7.190130726551e-02, TOL));
assert(isequalRel(satrec.nodedot,         -4.713799132252e-05, TOL));
assert(isequalRel(satrec.xlcof,            1.909689949638e-03, TOL));
assert(isequalRel(satrec.xmcof,           -9.271553108060e-02, TOL));
assert(isequalRel(satrec.nodecf,          -7.511102051252e-10, TOL));
assert(isequalRel(satrec.irez,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2201,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2211,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3210,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3222,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4410,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4422,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5220,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5232,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5421,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5433,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.dedt,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del1,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del2,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del3,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.didt,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.dmdt,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.dnodt,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.domdt,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.e3,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.ee2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.peo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pgho,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.pho,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pinco,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.plo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.se2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.se3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sgh2,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.sgh3,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.sgh4,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.sh2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sh3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.si2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.si3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sl2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sl3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sl4,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.gsto,             5.982608943601e+00, TOL));
assert(isequalRel(satrec.xfact,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xgh2,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.xgh3,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.xgh4,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.xh2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xh3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xi2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xi3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xl2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xl3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xl4,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xlamo,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.zmol,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.zmos,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.atime,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xli,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xni,              0.000000000000e+00, TOL));
assert(isequal(satrec.init,               'n')); ##NOTJS
##JS##equal(satrec.method,             'n');
##JS##equal(satrec.init,               'n');
##JS##});
## 28350
# *** error: t:= 1560.000000 *** code =   1

##JS##test('72, satin,  9.639000000000e-04,  6.249053000000e-01,  2.063181079184e+04,  2.971510317983e+00,  4.977679026688e-01,  3.715744890972e+00,  1.655781478256e-02,  2.006838915138e+00', function () {
##JS##var satin, rets, satrec, TOL = 0.000001;
##JS## // For JS change   'attr', -> 'attr':
##JS##satin = {
satin = struct(  ##NOTJS 
'error',            0.000000000000e+00,
'satnum',           2.862300000000e+04,
'epochyr',          6.000000000000e+00,
'epochdays',        1.778107918400e+02,
'ndot',             1.932115842984e-08,
'nddot',            1.453052254138e-15,
'bstar',            9.639000000000e-04,
'inclo',            4.977679026688e-01,
'nodeo',            2.006838915138e+00,
'ecco',             6.249053000000e-01,
'argpo',            2.971510317983e+00,
'mo',               3.715744890972e+00,
'no',               1.655781478256e-02,
'a',                2.722186242514e+00,
'alta',             3.423294853048e+00,
'altp',             2.107763197986e-02,
'jdsatepoch',       2.453913310792e+06 
);  ##NOTJS
##JS##};
[satrec] = sgp4init(72, satin,  9.639000000000e-04,  6.249053000000e-01,  2.063181079184e+04,  2.971510317983e+00,  4.977679026688e-01,  3.715744890972e+00,  1.655781478256e-02,  2.006838915138e+00);
assert(isequalRel(satrec.error,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.satnum,           2.862300000000e+04, TOL));
assert(isequalRel(satrec.epochyr,          6.000000000000e+00, TOL));
assert(isequalRel(satrec.epochdays,        1.778107918400e+02, TOL));
assert(isequalRel(satrec.ndot,             1.932115842984e-08, TOL));
assert(isequalRel(satrec.nddot,            1.453052254138e-15, TOL));
assert(isequalRel(satrec.bstar,            9.639000000000e-04, TOL));
assert(isequalRel(satrec.inclo,            4.977679026688e-01, TOL));
assert(isequalRel(satrec.nodeo,            2.006838915138e+00, TOL));
assert(isequalRel(satrec.ecco,             6.249053000000e-01, TOL));
assert(isequalRel(satrec.argpo,            2.971510317983e+00, TOL));
assert(isequalRel(satrec.mo,               3.715744890972e+00, TOL));
assert(isequalRel(satrec.no,               1.655279727416e-02, TOL));
assert(isequalRel(satrec.a,                2.722186242514e+00, TOL));
assert(isequalRel(satrec.alta,             3.423294853048e+00, TOL));
assert(isequalRel(satrec.altp,             2.107763197986e-02, TOL));
assert(isequalRel(satrec.jdsatepoch,       2.453913310792e+06, TOL));
assert(isequalRel(satrec.isimp,            1.000000000000e+00, TOL));
assert(isequal(satrec.method,             'd')); ##NOTJS
assert(isequalRel(satrec.aycof,            5.598449387749e-04, TOL));
assert(isequalRel(satrec.con41,            1.316080099741e+00, TOL));
assert(isequalRel(satrec.cc1,              7.794470372523e-07, TOL));
assert(isequalRel(satrec.cc4,              6.870308409853e-04, TOL));
assert(isequalRel(satrec.cc5,              6.136467900309e-02, TOL));
assert(isequalRel(satrec.d2,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.delmo,            4.602372744525e-03, TOL));
assert(isequalRel(satrec.eta,              9.928637385504e-01, TOL));
assert(isequalRel(satrec.argpdot,          1.398466945436e-05, TOL));
assert(isequalRel(satrec.omgcof,          -3.459244932824e-17, TOL));
assert(isequalRel(satrec.sinmao,          -5.431231594784e-01, TOL));
assert(isequalRel(satrec.t,                0.000000000000e+00, TOL));
assert(isequalRel(satrec.t2cof,            1.169170555878e-06, TOL));
assert(isequalRel(satrec.t3cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t4cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t5cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.x1mth2,           2.279733000863e-01, TOL));
assert(isequalRel(satrec.x7thm1,           4.404186899396e+00, TOL));
assert(isequalRel(satrec.mdot,             1.655781496506e-02, TOL));
assert(isequalRel(satrec.nodedot,         -8.592532289781e-06, TOL));
assert(isequalRel(satrec.xlcof,            1.101608572960e-03, TOL));
assert(isequalRel(satrec.xmcof,           -1.089540957252e-12, TOL));
assert(isequalRel(satrec.nodecf,          -1.426027039134e-11, TOL));
assert(isequalRel(satrec.irez,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2201,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2211,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3210,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3222,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4410,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4422,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5220,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5232,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5421,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5433,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.dedt,            -1.284368777035e-08, TOL));
assert(isequalRel(satrec.del1,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del2,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del3,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.didt,             2.182189987367e-08, TOL));
assert(isequalRel(satrec.dmdt,            -1.266772856942e-08, TOL));
assert(isequalRel(satrec.dnodt,           -1.981003275567e-08, TOL));
assert(isequalRel(satrec.domdt,            2.122734368629e-08, TOL));
assert(isequalRel(satrec.e3,               2.080207273239e-04, TOL));
assert(isequalRel(satrec.ee2,              2.279612848318e-04, TOL));
assert(isequalRel(satrec.peo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pgho,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.pho,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pinco,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.plo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.se2,             -2.010666927152e-03, TOL));
assert(isequalRel(satrec.se3,              1.234888459603e-04, TOL));
assert(isequalRel(satrec.sgh2,             4.404694052449e-04, TOL));
assert(isequalRel(satrec.sgh3,            -3.174852765982e-03, TOL));
assert(isequalRel(satrec.sgh4,            -4.246782106577e-05, TOL));
assert(isequalRel(satrec.sh2,              4.897361699131e-04, TOL));
assert(isequalRel(satrec.sh3,             -1.594883558919e-04, TOL));
assert(isequalRel(satrec.si2,             -1.422358125944e-03, TOL));
assert(isequalRel(satrec.si3,             -1.642085155919e-03, TOL));
assert(isequalRel(satrec.sl2,             -1.791873501287e-03, TOL));
assert(isequalRel(satrec.sl3,              5.840111590196e-03, TOL));
assert(isequalRel(satrec.sl4,              1.481689063817e-04, TOL));
assert(isequalRel(satrec.gsto,             3.606984295022e+00, TOL));
assert(isequalRel(satrec.xfact,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xgh2,            -3.876052640328e-04, TOL));
assert(isequalRel(satrec.xgh3,             2.628367881541e-04, TOL));
assert(isequalRel(satrec.xgh4,            -2.235682588341e-05, TOL));
assert(isequalRel(satrec.xh2,             -7.296812344377e-05, TOL));
assert(isequalRel(satrec.xh3,             -4.081833544751e-05, TOL));
assert(isequalRel(satrec.xi2,             -6.948628061380e-05, TOL));
assert(isequalRel(satrec.xi3,              3.512666727653e-04, TOL));
assert(isequalRel(satrec.xl2,              8.272799129225e-04, TOL));
assert(isequalRel(satrec.xl3,             -3.372511878045e-04, TOL));
assert(isequalRel(satrec.xl4,              7.800226991119e-05, TOL));
assert(isequalRel(satrec.xlamo,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.zmol,             2.040461217495e+00, TOL));
assert(isequalRel(satrec.zmos,             2.997593526865e+00, TOL));
assert(isequalRel(satrec.atime,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xli,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xni,              0.000000000000e+00, TOL));
assert(isequal(satrec.init,               'n')); ##NOTJS
##JS##equal(satrec.method,             'd');
##JS##equal(satrec.init,               'n');
##JS##});
## 28623

##JS##test('72, satin,  1.000000000000e-04,  3.350000000000e-05,  2.063046683397e+04,  2.407123197766e-01,  3.316125578789e-05,  9.712827100519e-01,  4.375111781885e-03,  5.008105351538e+00', function () {
##JS##var satin, rets, satrec, TOL = 0.000001;
##JS## // For JS change   'attr', -> 'attr':
##JS##satin = {
satin = struct(  ##NOTJS 
'error',            0.000000000000e+00,
'satnum',           2.862600000000e+04,
'epochyr',          6.000000000000e+00,
'epochdays',        1.764668339700e+02,
'ndot',            -6.211675289216e-12,
'nddot',            0.000000000000e+00,
'bstar',            1.000000000000e-04,
'inclo',            3.316125578789e-05,
'nodeo',            5.008105351538e+00,
'ecco',             3.350000000000e-05,
'argpo',            2.407123197766e-01,
'mo',               9.712827100519e-01,
'no',               4.375111781885e-03,
'a',                6.610897332657e+00,
'alta',             5.611118797718e+00,
'altp',             5.610675867596e+00,
'jdsatepoch',       2.453911966834e+06 
);  ##NOTJS
##JS##};
[satrec] = sgp4init(72, satin,  1.000000000000e-04,  3.350000000000e-05,  2.063046683397e+04,  2.407123197766e-01,  3.316125578789e-05,  9.712827100519e-01,  4.375111781885e-03,  5.008105351538e+00);
assert(isequalRel(satrec.error,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.satnum,           2.862600000000e+04, TOL));
assert(isequalRel(satrec.epochyr,          6.000000000000e+00, TOL));
assert(isequalRel(satrec.epochdays,        1.764668339700e+02, TOL));
assert(isequalRel(satrec.ndot,            -6.211675289216e-12, TOL));
assert(isequalRel(satrec.nddot,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.bstar,            1.000000000000e-04, TOL));
assert(isequalRel(satrec.inclo,            3.316125578789e-05, TOL));
assert(isequalRel(satrec.nodeo,            5.008105351538e+00, TOL));
assert(isequalRel(satrec.ecco,             3.350000000000e-05, TOL));
assert(isequalRel(satrec.argpo,            2.407123197766e-01, TOL));
assert(isequalRel(satrec.mo,               9.712827100519e-01, TOL));
assert(isequalRel(satrec.no,               4.374949216286e-03, TOL));
assert(isequalRel(satrec.a,                6.610897332657e+00, TOL));
assert(isequalRel(satrec.alta,             5.611118797718e+00, TOL));
assert(isequalRel(satrec.altp,             5.610675867596e+00, TOL));
assert(isequalRel(satrec.jdsatepoch,       2.453911966834e+06, TOL));
assert(isequalRel(satrec.isimp,            1.000000000000e+00, TOL));
assert(isequal(satrec.method,             'd')); ##NOTJS
assert(isequalRel(satrec.aycof,            3.888272840575e-08, TOL));
assert(isequalRel(satrec.con41,            1.999999996701e+00, TOL));
assert(isequalRel(satrec.cc1,              5.535451443276e-18, TOL));
assert(isequalRel(satrec.cc4,              3.003618119250e-17, TOL));
assert(isequalRel(satrec.cc5,              2.530077451701e-11, TOL));
assert(isequalRel(satrec.d2,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.delmo,            1.000066959797e+00, TOL));
assert(isequalRel(satrec.eta,              3.955656358140e-05, TOL));
assert(isequalRel(satrec.argpdot,          3.251717209515e-07, TOL));
assert(isequalRel(satrec.omgcof,           0.000000000000e+00, TOL));
assert(isequalRel(satrec.sinmao,           8.256101499198e-01, TOL));
assert(isequalRel(satrec.t,                0.000000000000e+00, TOL));
assert(isequalRel(satrec.t2cof,            8.303177164914e-18, TOL));
assert(isequalRel(satrec.t3cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t4cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t5cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.x1mth2,           1.099668800464e-09, TOL));
assert(isequalRel(satrec.x7thm1,           5.999999992302e+00, TOL));
assert(isequalRel(satrec.mdot,             4.375111778864e-03, TOL));
assert(isequalRel(satrec.nodedot,         -1.625828407295e-07, TOL));
assert(isequalRel(satrec.xlcof,            7.776545680615e-08, TOL));
assert(isequalRel(satrec.xmcof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.nodecf,          -3.149324885339e-24, TOL));
assert(isequalRel(satrec.irez,             1.000000000000e+00, TOL));
assert(isequalRel(satrec.d2201,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2211,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3210,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3222,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4410,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4422,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5220,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5232,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5421,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5433,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.dedt,            -1.163351218344e-12, TOL));
assert(isequalRel(satrec.del1,            -6.397199405204e-13, TOL));
assert(isequalRel(satrec.del2,             1.410351263886e-11, TOL));
assert(isequalRel(satrec.del3,             1.978384035449e-12, TOL));
assert(isequalRel(satrec.didt,            -2.947177196394e-08, TOL));
assert(isequalRel(satrec.dmdt,            -1.045030124521e-07, TOL));
assert(isequalRel(satrec.dnodt,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.domdt,            3.403399555001e-08, TOL));
assert(isequalRel(satrec.e3,               9.730286584479e-08, TOL));
assert(isequalRel(satrec.ee2,              4.116645807083e-09, TOL));
assert(isequalRel(satrec.peo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pgho,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.pho,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pinco,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.plo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.se2,             -4.897269431303e-07, TOL));
assert(isequalRel(satrec.se3,             -3.982514162897e-07, TOL));
assert(isequalRel(satrec.sgh2,             1.218979806720e-02, TOL));
assert(isequalRel(satrec.sgh3,            -1.372729148759e-02, TOL));
assert(isequalRel(satrec.sgh4,            -2.058135042329e-04, TOL));
assert(isequalRel(satrec.sh2,             -1.607052704128e-03, TOL));
assert(isequalRel(satrec.sh3,              1.922166128879e-04, TOL));
assert(isequalRel(satrec.si2,              1.068903225853e-04, TOL));
assert(isequalRel(satrec.si3,              1.503069663730e-03, TOL));
assert(isequalRel(satrec.sl2,             -1.268456207451e-02, TOL));
assert(isequalRel(satrec.sl3,              1.252883219957e-02, TOL));
assert(isequalRel(satrec.sl4,              4.802315103772e-04, TOL));
assert(isequalRel(satrec.gsto,             1.422713433736e+00, TOL));
assert(isequalRel(satrec.xfact,           -4.375014405570e-03, TOL));
assert(isequalRel(satrec.xgh2,            -2.791926643954e-03, TOL));
assert(isequalRel(satrec.xgh3,            -6.071229788246e-05, TOL));
assert(isequalRel(satrec.xgh4,            -1.083487818097e-04, TOL));
assert(isequalRel(satrec.xh2,              2.358741028641e-04, TOL));
assert(isequalRel(satrec.xh3,              2.037703492136e-04, TOL));
assert(isequalRel(satrec.xi2,              1.978957741048e-04, TOL));
assert(isequalRel(satrec.xi3,             -1.979448507755e-04, TOL));
assert(isequalRel(satrec.xl2,              2.660801647839e-03, TOL));
assert(isequalRel(satrec.xl3,              3.319557433091e-04, TOL));
assert(isequalRel(satrec.xl4,              2.528138244862e-04, TOL));
assert(isequalRel(satrec.xlamo,            4.797386947630e+00, TOL));
assert(isequalRel(satrec.zmol,             1.734002358913e+00, TOL));
assert(isequalRel(satrec.zmos,             2.974474794500e+00, TOL));
assert(isequalRel(satrec.atime,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xli,              4.797386947630e+00, TOL));
assert(isequalRel(satrec.xni,              4.374949216286e-03, TOL));
assert(isequal(satrec.init,               'n')); ##NOTJS
##JS##equal(satrec.method,             'd');
##JS##equal(satrec.init,               'n');
##JS##});
## 28626

##JS##test('72, satin,  2.447600000000e-04,  3.039550000000e-02,  2.042202012661e+04,  4.259462076858e+00,  1.683781961252e+00,  1.931246959905e+00,  7.182099414601e-02,  2.757595783542e+00', function () {
##JS##var satin, rets, satrec, TOL = 0.000001;
##JS## // For JS change   'attr', -> 'attr':
##JS##satin = {
satin = struct(  ##NOTJS 
'error',            0.000000000000e+00,
'satnum',           2.887200000000e+04,
'epochyr',          5.000000000000e+00,
'epochdays',        3.330201266100e+02,
'ndot',             7.876004598447e-07,
'nddot',            0.000000000000e+00,
'bstar',            2.447600000000e-04,
'inclo',            1.683781961252e+00,
'nodeo',            2.757595783542e+00,
'ecco',             3.039550000000e-02,
'argpo',            4.259462076858e+00,
'mo',               1.931246959905e+00,
'no',               7.182099414601e-02,
'a',                1.023494641816e+00,
'alta',             5.460427320098e-02,
'altp',            -7.614989569634e-03,
'jdsatepoch',       2.453703520127e+06 
);  ##NOTJS
##JS##};
[satrec] = sgp4init(72, satin,  2.447600000000e-04,  3.039550000000e-02,  2.042202012661e+04,  4.259462076858e+00,  1.683781961252e+00,  1.931246959905e+00,  7.182099414601e-02,  2.757595783542e+00);
assert(isequalRel(satrec.error,            5.000000000000e+00, TOL));
assert(isequalRel(satrec.satnum,           2.887200000000e+04, TOL));
assert(isequalRel(satrec.epochyr,          5.000000000000e+00, TOL));
assert(isequalRel(satrec.epochdays,        3.330201266100e+02, TOL));
assert(isequalRel(satrec.ndot,             7.876004598447e-07, TOL));
assert(isequalRel(satrec.nddot,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.bstar,            2.447600000000e-04, TOL));
assert(isequalRel(satrec.inclo,            1.683781961252e+00, TOL));
assert(isequalRel(satrec.nodeo,            2.757595783542e+00, TOL));
assert(isequalRel(satrec.ecco,             3.039550000000e-02, TOL));
assert(isequalRel(satrec.argpo,            4.259462076858e+00, TOL));
assert(isequalRel(satrec.mo,               1.931246959905e+00, TOL));
assert(isequalRel(satrec.no,               7.187462824278e-02, TOL));
assert(isequalRel(satrec.a,                1.023494641816e+00, TOL));
assert(isequalRel(satrec.alta,             5.460427320098e-02, TOL));
assert(isequalRel(satrec.altp,            -7.614989569634e-03, TOL));
assert(isequalRel(satrec.jdsatepoch,       2.453703520127e+06, TOL));
assert(isequalRel(satrec.isimp,            1.000000000000e+00, TOL));
assert(isequal(satrec.method,             'n')); ##NOTJS
assert(isequalRel(satrec.aycof,            1.165058672797e-03, TOL));
assert(isequalRel(satrec.con41,           -9.618654265547e-01, TOL));
assert(isequalRel(satrec.cc1,              7.305340120570e-06, TOL));
assert(isequalRel(satrec.cc4,              7.438327469896e-02, TOL));
assert(isequalRel(satrec.cc5,              1.716904676665e+00, TOL));
assert(isequalRel(satrec.d2,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.delmo,            8.962003458657e-02, TOL));
assert(isequalRel(satrec.eta,              1.566479807341e+00, TOL));
assert(isequalRel(satrec.argpdot,         -5.216790415232e-05, TOL));
assert(isequalRel(satrec.omgcof,          -2.314443451479e-05, TOL));
assert(isequalRel(satrec.sinmao,           9.357379822238e-01, TOL));
assert(isequalRel(satrec.t,                0.000000000000e+00, TOL));
assert(isequalRel(satrec.t2cof,            1.095801018086e-05, TOL));
assert(isequalRel(satrec.t3cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t4cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t5cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.x1mth2,           9.872884755182e-01, TOL));
assert(isequalRel(satrec.x7thm1,          -9.110193286276e-01, TOL));
assert(isequalRel(satrec.mdot,             7.182095759003e-02, TOL));
assert(isequalRel(satrec.nodedot,          1.255223994192e-05, TOL));
assert(isequalRel(satrec.xlcof,            1.599541437465e-03, TOL));
assert(isequalRel(satrec.xmcof,           -1.333903884591e-03, TOL));
assert(isequalRel(satrec.nodecf,           3.218186128767e-10, TOL));
assert(isequalRel(satrec.irez,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2201,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2211,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3210,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3222,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4410,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4422,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5220,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5232,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5421,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5433,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.dedt,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del1,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del2,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del3,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.didt,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.dmdt,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.dnodt,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.domdt,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.e3,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.ee2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.peo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pgho,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.pho,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pinco,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.plo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.se2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.se3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sgh2,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.sgh3,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.sgh4,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.sh2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sh3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.si2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.si3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sl2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sl3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sl4,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.gsto,             1.313288306073e+00, TOL));
assert(isequalRel(satrec.xfact,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xgh2,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.xgh3,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.xgh4,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.xh2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xh3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xi2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xi3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xl2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xl3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xl4,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xlamo,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.zmol,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.zmos,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.atime,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xli,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xni,              0.000000000000e+00, TOL));
assert(isequal(satrec.init,               'n')); ##NOTJS
##JS##equal(satrec.method,             'n');
##JS##equal(satrec.init,               'n');
##JS##});
## 28872

##JS##test('72, satin,  1.351900000000e-01,  1.584800000000e-03,  2.062426783845e+04,  4.838269107356e+00,  1.438653958468e+00,  1.464563371214e+00,  6.952270688787e-02,  4.773269555353e+00', function () {
##JS##var satin, rets, satrec, TOL = 0.000001;
##JS## // For JS change   'attr', -> 'attr':
##JS##satin = {
satin = struct(  ##NOTJS 
'error',            0.000000000000e+00,
'satnum',           2.914100000000e+04,
'epochyr',          6.000000000000e+00,
'epochdays',        1.702678384500e+02,
'ndot',             3.030085476634e-06,
'nddot',            0.000000000000e+00,
'bstar',            1.351900000000e-01,
'inclo',            1.438653958468e+00,
'nodeo',            4.773269555353e+00,
'ecco',             1.584800000000e-03,
'argpo',            4.838269107356e+00,
'mo',               1.464563371214e+00,
'no',               6.952270688787e-02,
'a',                1.045928666506e+00,
'alta',             4.758625425707e-02,
'altp',             4.427107875571e-02,
'jdsatepoch',       2.453905767838e+06 
);  ##NOTJS
##JS##};
[satrec] = sgp4init(72, satin,  1.351900000000e-01,  1.584800000000e-03,  2.062426783845e+04,  4.838269107356e+00,  1.438653958468e+00,  1.464563371214e+00,  6.952270688787e-02,  4.773269555353e+00);
assert(isequalRel(satrec.error,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.satnum,           2.914100000000e+04, TOL));
assert(isequalRel(satrec.epochyr,          6.000000000000e+00, TOL));
assert(isequalRel(satrec.epochdays,        1.702678384500e+02, TOL));
assert(isequalRel(satrec.ndot,             3.030085476634e-06, TOL));
assert(isequalRel(satrec.nddot,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.bstar,            1.351900000000e-01, TOL));
assert(isequalRel(satrec.inclo,            1.438653958468e+00, TOL));
assert(isequalRel(satrec.nodeo,            4.773269555353e+00, TOL));
assert(isequalRel(satrec.ecco,             1.584800000000e-03, TOL));
assert(isequalRel(satrec.argpo,            4.838269107356e+00, TOL));
assert(isequalRel(satrec.mo,               1.464563371214e+00, TOL));
assert(isequalRel(satrec.no,               6.957163219428e-02, TOL));
assert(isequalRel(satrec.a,                1.045928666506e+00, TOL));
assert(isequalRel(satrec.alta,             4.758625425707e-02, TOL));
assert(isequalRel(satrec.altp,             4.427107875571e-02, TOL));
assert(isequalRel(satrec.jdsatepoch,       2.453905767838e+06, TOL));
assert(isequalRel(satrec.isimp,            0.000000000000e+00, TOL));
assert(isequal(satrec.method,             'n')); ##NOTJS
assert(isequalRel(satrec.aycof,            1.162312577206e-03, TOL));
assert(isequalRel(satrec.con41,           -9.479193821401e-01, TOL));
assert(isequalRel(satrec.cc1,              1.402302071488e-05, TOL));
assert(isequalRel(satrec.cc4,              2.616998163647e-06, TOL));
assert(isequalRel(satrec.cc5,              3.283768193269e-03, TOL));
assert(isequalRel(satrec.d2,               2.476202150265e-08, TOL));
assert(isequalRel(satrec.d3,               6.547187456016e-11, TOL));
assert(isequalRel(satrec.d4,               2.018849945761e-13, TOL));
assert(isequalRel(satrec.delmo,            1.015954241921e+00, TOL));
assert(isequalRel(satrec.eta,              4.989044945409e-02, TOL));
assert(isequalRel(satrec.argpdot,         -4.707515274342e-05, TOL));
assert(isequalRel(satrec.omgcof,           1.612649561091e-04, TOL));
assert(isequalRel(satrec.sinmao,           9.943625842940e-01, TOL));
assert(isequalRel(satrec.t,                0.000000000000e+00, TOL));
assert(isequalRel(satrec.t2cof,            2.103453107232e-05, TOL));
assert(isequalRel(satrec.t3cof,            2.515531172259e-08, TOL));
assert(isequalRel(satrec.t4cof,            5.015251483767e-11, TOL));
assert(isequalRel(satrec.t5cof,            1.240995902746e-13, TOL));
assert(isequalRel(satrec.x1mth2,           9.826397940467e-01, TOL));
assert(isequalRel(satrec.x7thm1,          -8.784785583269e-01, TOL));
assert(isequalRel(satrec.mdot,             6.952267544908e-02, TOL));
assert(isequalRel(satrec.nodedot,         -1.357344170800e-05, TOL));
assert(isequalRel(satrec.xlcof,            1.878784117365e-03, TOL));
assert(isequalRel(satrec.xmcof,           -1.762227730388e+00, TOL));
assert(isequalRel(satrec.nodecf,          -6.684813053795e-10, TOL));
assert(isequalRel(satrec.irez,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2201,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2211,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3210,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3222,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4410,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4422,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5220,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5232,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5421,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5433,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.dedt,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del1,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del2,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del3,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.didt,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.dmdt,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.dnodt,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.domdt,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.e3,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.ee2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.peo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pgho,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.pho,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pinco,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.plo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.se2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.se3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sgh2,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.sgh3,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.sgh4,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.sh2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sh3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.si2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.si3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sl2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sl3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sl4,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.gsto,             6.574767745587e-02, TOL));
assert(isequalRel(satrec.xfact,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xgh2,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.xgh3,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.xgh4,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.xh2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xh3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xi2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xi3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xl2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xl3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xl4,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xlamo,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.zmol,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.zmos,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.atime,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xli,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xni,              0.000000000000e+00, TOL));
assert(isequal(satrec.init,               'n')); ##NOTJS
##JS##equal(satrec.method,             'n');
##JS##equal(satrec.init,               'n');
##JS##});
## 29141
# *** error: t:= 440.000000 *** code =   6

##JS##test('72, satin,  1.333400000000e-03,  2.025790000000e-02,  2.063128732010e+04,  1.662431348512e+00,  8.998830356820e-01,  4.675754519385e+00,  6.867101959232e-02,  3.731344643826e+00', function () {
##JS##var satin, rets, satrec, TOL = 0.000001;
##JS## // For JS change   'attr', -> 'attr':
##JS##satin = {
satin = struct(  ##NOTJS 
'error',            0.000000000000e+00,
'satnum',           2.923800000000e+04,
'epochyr',          6.000000000000e+00,
'epochdays',        1.772873201000e+02,
'ndot',             2.321912102767e-08,
'nddot',            2.277403850108e-14,
'bstar',            1.333400000000e-03,
'inclo',            8.998830356820e-01,
'nodeo',            3.731344643826e+00,
'ecco',             2.025790000000e-02,
'argpo',            1.662431348512e+00,
'mo',               4.675754519385e+00,
'no',               6.867101959232e-02,
'a',                1.054558924065e+00,
'alta',             7.592207329265e-02,
'altp',             3.319577483702e-02,
'jdsatepoch',       2.453912787320e+06 
);  ##NOTJS
##JS##};
[satrec] = sgp4init(72, satin,  1.333400000000e-03,  2.025790000000e-02,  2.063128732010e+04,  1.662431348512e+00,  8.998830356820e-01,  4.675754519385e+00,  6.867101959232e-02,  3.731344643826e+00);
assert(isequalRel(satrec.error,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.satnum,           2.923800000000e+04, TOL));
assert(isequalRel(satrec.epochyr,          6.000000000000e+00, TOL));
assert(isequalRel(satrec.epochdays,        1.772873201000e+02, TOL));
assert(isequalRel(satrec.ndot,             2.321912102767e-08, TOL));
assert(isequalRel(satrec.nddot,            2.277403850108e-14, TOL));
assert(isequalRel(satrec.bstar,            1.333400000000e-03, TOL));
assert(isequalRel(satrec.inclo,            8.998830356820e-01, TOL));
assert(isequalRel(satrec.nodeo,            3.731344643826e+00, TOL));
assert(isequalRel(satrec.ecco,             2.025790000000e-02, TOL));
assert(isequalRel(satrec.argpo,            1.662431348512e+00, TOL));
assert(isequalRel(satrec.mo,               4.675754519385e+00, TOL));
assert(isequalRel(satrec.no,               6.866301602203e-02, TOL));
assert(isequalRel(satrec.a,                1.054558924065e+00, TOL));
assert(isequalRel(satrec.alta,             7.592207329265e-02, TOL));
assert(isequalRel(satrec.altp,             3.319577483702e-02, TOL));
assert(isequalRel(satrec.jdsatepoch,       2.453912787320e+06, TOL));
assert(isequalRel(satrec.isimp,            1.000000000000e+00, TOL));
assert(isequal(satrec.method,             'n')); ##NOTJS
assert(isequalRel(satrec.aycof,            9.183928514987e-04, TOL));
assert(isequalRel(satrec.con41,            1.595385835540e-01, TOL));
assert(isequalRel(satrec.cc1,              2.269353322605e-07, TOL));
assert(isequalRel(satrec.cc4,              2.625327421249e-04, TOL));
assert(isequalRel(satrec.cc5,              5.899869491082e-03, TOL));
assert(isequalRel(satrec.d2,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.delmo,            9.456636074024e-01, TOL));
assert(isequalRel(satrec.eta,              5.037493042251e-01, TOL));
assert(isequalRel(satrec.argpdot,          4.669456818517e-05, TOL));
assert(isequalRel(satrec.omgcof,          -2.081758941314e-08, TOL));
assert(isequalRel(satrec.sinmao,          -9.993290331798e-01, TOL));
assert(isequalRel(satrec.t,                0.000000000000e+00, TOL));
assert(isequalRel(satrec.t2cof,            3.404029983907e-07, TOL));
assert(isequalRel(satrec.t3cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t4cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t5cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.x1mth2,           6.134871388153e-01, TOL));
assert(isequalRel(satrec.x7thm1,           1.705590028293e+00, TOL));
assert(isequalRel(satrec.mdot,             6.867102786080e-02, TOL));
assert(isequalRel(satrec.nodedot,         -6.241104888509e-05, TOL));
assert(isequalRel(satrec.xlcof,            1.729667795817e-03, TOL));
assert(isequalRel(satrec.xmcof,           -5.062259410359e-05, TOL));
assert(isequalRel(satrec.nodecf,          -4.952332336293e-11, TOL));
assert(isequalRel(satrec.irez,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2201,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2211,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3210,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3222,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4410,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4422,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5220,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5232,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5421,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5433,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.dedt,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del1,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del2,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del3,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.didt,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.dmdt,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.dnodt,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.domdt,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.e3,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.ee2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.peo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pgho,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.pho,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pinco,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.plo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.se2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.se3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sgh2,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.sgh3,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.sgh4,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.sh2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sh3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.si2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.si3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sl2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sl3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sl4,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.gsto,             3.089091736929e-01, TOL));
assert(isequalRel(satrec.xfact,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xgh2,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.xgh3,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.xgh4,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.xh2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xh3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xi2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xi3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xl2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xl3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xl4,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xlamo,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.zmol,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.zmos,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.atime,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xli,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xni,              0.000000000000e+00, TOL));
assert(isequal(satrec.init,               'n')); ##NOTJS
##JS##equal(satrec.method,             'n');
##JS##equal(satrec.init,               'n');
##JS##});
## 29238

##JS##test('72, satin,  6.681600000000e-05,  8.673100000000e-03,  1.123298708465e+04,  9.197675718500e-01,  1.271358913676e+00,  1.929834988540e+00,  7.006731262088e-02,  2.024039134916e+00', function () {
##JS##var satin, rets, satrec, TOL = 0.000001;
##JS## // For JS change   'attr', -> 'attr':
##JS##satin = {
satin = struct(  ##NOTJS 
'error',            0.000000000000e+00,
'satnum',           8.888800000000e+04,
'epochyr',          8.000000000000e+01,
'epochdays',        2.759870846500e+02,
'ndot',             2.214810700439e-09,
'nddot',            2.913090538750e-13,
'bstar',            6.681600000000e-05,
'inclo',            1.271358913676e+00,
'nodeo',            2.024039134916e+00,
'ecco',             8.673100000000e-03,
'argpo',            9.197675718500e-01,
'mo',               1.929834988540e+00,
'no',               7.006731262088e-02,
'a',                1.040501892439e+00,
'alta',             4.952626940243e-02,
'altp',             3.147751547580e-02,
'jdsatepoch',       2.444514487085e+06 
);  ##NOTJS
##JS##};
[satrec] = sgp4init(72, satin,  6.681600000000e-05,  8.673100000000e-03,  1.123298708465e+04,  9.197675718500e-01,  1.271358913676e+00,  1.929834988540e+00,  7.006731262088e-02,  2.024039134916e+00);
assert(isequalRel(satrec.error,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.satnum,           8.888800000000e+04, TOL));
assert(isequalRel(satrec.epochyr,          8.000000000000e+01, TOL));
assert(isequalRel(satrec.epochdays,        2.759870846500e+02, TOL));
assert(isequalRel(satrec.ndot,             2.214810700439e-09, TOL));
assert(isequalRel(satrec.nddot,            2.913090538750e-13, TOL));
assert(isequalRel(satrec.bstar,            6.681600000000e-05, TOL));
assert(isequalRel(satrec.inclo,            1.271358913676e+00, TOL));
assert(isequalRel(satrec.nodeo,            2.024039134916e+00, TOL));
assert(isequalRel(satrec.ecco,             8.673100000000e-03, TOL));
assert(isequalRel(satrec.argpo,            9.197675718500e-01, TOL));
assert(isequalRel(satrec.mo,               1.929834988540e+00, TOL));
assert(isequalRel(satrec.no,               7.010615566653e-02, TOL));
assert(isequalRel(satrec.a,                1.040501892439e+00, TOL));
assert(isequalRel(satrec.alta,             4.952626940243e-02, TOL));
assert(isequalRel(satrec.altp,             3.147751547580e-02, TOL));
assert(isequalRel(satrec.jdsatepoch,       2.444514487085e+06, TOL));
assert(isequalRel(satrec.isimp,            1.000000000000e+00, TOL));
assert(isequal(satrec.method,             'n')); ##NOTJS
assert(isequalRel(satrec.aycof,            1.120360099968e-03, TOL));
assert(isequalRel(satrec.con41,           -7.389556198424e-01, TOL));
assert(isequalRel(satrec.cc1,              2.333804402169e-08, TOL));
assert(isequalRel(satrec.cc4,              3.772011178428e-04, TOL));
assert(isequalRel(satrec.cc5,              1.233491918541e-02, TOL));
assert(isequalRel(satrec.d2,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.delmo,            6.963086753786e-01, TOL));
assert(isequalRel(satrec.eta,              3.234711971626e-01, TOL));
assert(isequalRel(satrec.argpdot,         -2.971792488745e-05, TOL));
assert(isequalRel(satrec.omgcof,           1.634830475080e-07, TOL));
assert(isequalRel(satrec.sinmao,           9.362350458581e-01, TOL));
assert(isequalRel(satrec.t,                0.000000000000e+00, TOL));
assert(isequalRel(satrec.t2cof,            3.500706603253e-08, TOL));
assert(isequalRel(satrec.t3cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t4cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.t5cof,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.x1mth2,           9.129852066141e-01, TOL));
assert(isequalRel(satrec.x7thm1,          -3.908964462990e-01, TOL));
assert(isequalRel(satrec.mdot,             7.006729343208e-02, TOL));
assert(isequalRel(satrec.nodedot,         -3.096311241687e-05, TOL));
assert(isequalRel(satrec.xlcof,            1.935745758017e-03, TOL));
assert(isequalRel(satrec.xmcof,           -4.935338810866e-05, TOL));
assert(isequalRel(satrec.nodecf,          -2.535821868201e-12, TOL));
assert(isequalRel(satrec.irez,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2201,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d2211,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3210,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d3222,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4410,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d4422,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5220,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5232,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5421,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.d5433,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.dedt,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del1,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del2,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.del3,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.didt,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.dmdt,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.dnodt,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.domdt,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.e3,               0.000000000000e+00, TOL));
assert(isequalRel(satrec.ee2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.peo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pgho,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.pho,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.pinco,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.plo,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.se2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.se3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sgh2,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.sgh3,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.sgh4,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.sh2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sh3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.si2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.si3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sl2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sl3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.sl4,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.gsto,             1.082901416696e-01, TOL));
assert(isequalRel(satrec.xfact,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xgh2,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.xgh3,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.xgh4,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.xh2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xh3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xi2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xi3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xl2,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xl3,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xl4,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xlamo,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.zmol,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.zmos,             0.000000000000e+00, TOL));
assert(isequalRel(satrec.atime,            0.000000000000e+00, TOL));
assert(isequalRel(satrec.xli,              0.000000000000e+00, TOL));
assert(isequalRel(satrec.xni,              0.000000000000e+00, TOL));
assert(isequal(satrec.init,               'n')); ##NOTJS
##JS##equal(satrec.method,             'n');
##JS##equal(satrec.init,               'n');
##JS##});
## 88888

