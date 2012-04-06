TOL = 0.000001;

# Need to get globals, using same input constant 72
global tumin mu radiusearthkm xke j2 j3 j4 j3oj2  
[tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2] = getgravc(72);

# TEST satnum=5 tsince= 0.000000000000e+00
satin = struct(
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
'no',               4.720630155918e-02,
'a',                1.353457482755e+00,
'alta',             6.051555044136e-01,
'altp',             1.017594610970e-01,
'jdsatepoch',       2.451723284951e+06,
'isimp',            0.000000000000e+00,
'method',          'n',
'aycof',            6.602162317959e-04,
'con41',            1.048865087996e+00,
'cc1',              9.531093269423e-12,
'cc4',              5.259360731617e-07,
'cc5',              1.646515247679e-05,
'd2',               1.439873790292e-21,
'd3',               3.217106892468e-31,
'd4',               8.358359772163e-41,
'delmo',            4.873084659112e+00,
'eta',              7.369095429280e-01,
'argpdot',          5.429305256054e-05,
'omgcof',           6.701312384410e-15,
'sinmao',           3.309492298727e-01,
't',                0.000000000000e+00,
't2cof',            1.429663990413e-11,
't3cof',            1.621557268113e-21,
't4cof',            2.846182838253e-31,
't5cof',            6.080661397341e-41,
'x1mth2',           3.170449706681e-01,
'x7thm1',           3.780685205323e+00,
'mdot',             4.722944338321e-02,
'nodedot',         -3.717135384537e-05,
'xlcof',            1.289057728039e-03,
'xmcof',           -1.885936118348e-11,
'nodecf',          -1.194221173313e-15,
'irez',             0.000000000000e+00,
'd2201',            0.000000000000e+00,
'd2211',            0.000000000000e+00,
'd3210',            0.000000000000e+00,
'd3222',            0.000000000000e+00,
'd4410',            0.000000000000e+00,
'd4422',            0.000000000000e+00,
'd5220',            0.000000000000e+00,
'd5232',            0.000000000000e+00,
'd5421',            0.000000000000e+00,
'd5433',            0.000000000000e+00,
'dedt',             0.000000000000e+00,
'del1',             0.000000000000e+00,
'del2',             0.000000000000e+00,
'del3',             0.000000000000e+00,
'didt',             0.000000000000e+00,
'dmdt',             0.000000000000e+00,
'dnodt',            0.000000000000e+00,
'domdt',            0.000000000000e+00,
'e3',               0.000000000000e+00,
'ee2',              0.000000000000e+00,
'peo',              0.000000000000e+00,
'pgho',             0.000000000000e+00,
'pho',              0.000000000000e+00,
'pinco',            0.000000000000e+00,
'plo',              0.000000000000e+00,
'se2',              0.000000000000e+00,
'se3',              0.000000000000e+00,
'sgh2',             0.000000000000e+00,
'sgh3',             0.000000000000e+00,
'sgh4',             0.000000000000e+00,
'sh2',              0.000000000000e+00,
'sh3',              0.000000000000e+00,
'si2',              0.000000000000e+00,
'si3',              0.000000000000e+00,
'sl2',              0.000000000000e+00,
'sl3',              0.000000000000e+00,
'sl4',              0.000000000000e+00,
'gsto',             3.469172342379e+00,
'xfact',            0.000000000000e+00,
'xgh2',             0.000000000000e+00,
'xgh3',             0.000000000000e+00,
'xgh4',             0.000000000000e+00,
'xh2',              0.000000000000e+00,
'xh3',              0.000000000000e+00,
'xi2',              0.000000000000e+00,
'xi3',              0.000000000000e+00,
'xl2',              0.000000000000e+00,
'xl3',              0.000000000000e+00,
'xl4',              0.000000000000e+00,
'xlamo',            0.000000000000e+00,
'zmol',             0.000000000000e+00,
'zmos',             0.000000000000e+00,
'atime',            0.000000000000e+00,
'xli',              0.000000000000e+00,
'xni',              0.000000000000e+00,
'init',            'y'
);
[satrec, r, v] = sgp4(satin,  0.000000000000e+00)
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
assert(isequal(satrec.method,             'n'));
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
assert(isequal(satrec.init,               'y'));
 5

# TEST satnum=5 tsince= 0.000000000000e+00
satin = struct(
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
'no',               4.720630155918e-02,
'a',                1.353457482755e+00,
'alta',             6.051555044136e-01,
'altp',             1.017594610970e-01,
'jdsatepoch',       2.451723284951e+06,
'isimp',            0.000000000000e+00,
'method',          'n',
'aycof',            6.602162317959e-04,
'con41',            1.048865087996e+00,
'cc1',              9.531093269423e-12,
'cc4',              5.259360731617e-07,
'cc5',              1.646515247679e-05,
'd2',               1.439873790292e-21,
'd3',               3.217106892468e-31,
'd4',               8.358359772163e-41,
'delmo',            4.873084659112e+00,
'eta',              7.369095429280e-01,
'argpdot',          5.429305256054e-05,
'omgcof',           6.701312384410e-15,
'sinmao',           3.309492298727e-01,
't',                0.000000000000e+00,
't2cof',            1.429663990413e-11,
't3cof',            1.621557268113e-21,
't4cof',            2.846182838253e-31,
't5cof',            6.080661397341e-41,
'x1mth2',           3.170449706681e-01,
'x7thm1',           3.780685205323e+00,
'mdot',             4.722944338321e-02,
'nodedot',         -3.717135384537e-05,
'xlcof',            1.289057728039e-03,
'xmcof',           -1.885936118348e-11,
'nodecf',          -1.194221173313e-15,
'irez',             0.000000000000e+00,
'd2201',            0.000000000000e+00,
'd2211',            0.000000000000e+00,
'd3210',            0.000000000000e+00,
'd3222',            0.000000000000e+00,
'd4410',            0.000000000000e+00,
'd4422',            0.000000000000e+00,
'd5220',            0.000000000000e+00,
'd5232',            0.000000000000e+00,
'd5421',            0.000000000000e+00,
'd5433',            0.000000000000e+00,
'dedt',             0.000000000000e+00,
'del1',             0.000000000000e+00,
'del2',             0.000000000000e+00,
'del3',             0.000000000000e+00,
'didt',             0.000000000000e+00,
'dmdt',             0.000000000000e+00,
'dnodt',            0.000000000000e+00,
'domdt',            0.000000000000e+00,
'e3',               0.000000000000e+00,
'ee2',              0.000000000000e+00,
'peo',              0.000000000000e+00,
'pgho',             0.000000000000e+00,
'pho',              0.000000000000e+00,
'pinco',            0.000000000000e+00,
'plo',              0.000000000000e+00,
'se2',              0.000000000000e+00,
'se3',              0.000000000000e+00,
'sgh2',             0.000000000000e+00,
'sgh3',             0.000000000000e+00,
'sgh4',             0.000000000000e+00,
'sh2',              0.000000000000e+00,
'sh3',              0.000000000000e+00,
'si2',              0.000000000000e+00,
'si3',              0.000000000000e+00,
'sl2',              0.000000000000e+00,
'sl3',              0.000000000000e+00,
'sl4',              0.000000000000e+00,
'gsto',             3.469172342379e+00,
'xfact',            0.000000000000e+00,
'xgh2',             0.000000000000e+00,
'xgh3',             0.000000000000e+00,
'xgh4',             0.000000000000e+00,
'xh2',              0.000000000000e+00,
'xh3',              0.000000000000e+00,
'xi2',              0.000000000000e+00,
'xi3',              0.000000000000e+00,
'xl2',              0.000000000000e+00,
'xl3',              0.000000000000e+00,
'xl4',              0.000000000000e+00,
'xlamo',            0.000000000000e+00,
'zmol',             0.000000000000e+00,
'zmos',             0.000000000000e+00,
'atime',            0.000000000000e+00,
'xli',              0.000000000000e+00,
'xni',              0.000000000000e+00,
'init',            'n'
);
[satrec, r, v] = sgp4(satin,  0.000000000000e+00)
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
assert(isequal(satrec.method,             'n'));
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
assert(isequal(satrec.init,               'n'));

# TEST satnum=5 tsince= 3.600000000000e+02
satin = struct(
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
'no',               4.720630155918e-02,
'a',                1.353457482755e+00,
'alta',             6.051555044136e-01,
'altp',             1.017594610970e-01,
'jdsatepoch',       2.451723284951e+06,
'isimp',            0.000000000000e+00,
'method',          'n',
'aycof',            6.602162317959e-04,
'con41',            1.048865087996e+00,
'cc1',              9.531093269423e-12,
'cc4',              5.259360731617e-07,
'cc5',              1.646515247679e-05,
'd2',               1.439873790292e-21,
'd3',               3.217106892468e-31,
'd4',               8.358359772163e-41,
'delmo',            4.873084659112e+00,
'eta',              7.369095429280e-01,
'argpdot',          5.429305256054e-05,
'omgcof',           6.701312384410e-15,
'sinmao',           3.309492298727e-01,
't',                0.000000000000e+00,
't2cof',            1.429663990413e-11,
't3cof',            1.621557268113e-21,
't4cof',            2.846182838253e-31,
't5cof',            6.080661397341e-41,
'x1mth2',           3.170449706681e-01,
'x7thm1',           3.780685205323e+00,
'mdot',             4.722944338321e-02,
'nodedot',         -3.717135384537e-05,
'xlcof',            1.289057728039e-03,
'xmcof',           -1.885936118348e-11,
'nodecf',          -1.194221173313e-15,
'irez',             0.000000000000e+00,
'd2201',            0.000000000000e+00,
'd2211',            0.000000000000e+00,
'd3210',            0.000000000000e+00,
'd3222',            0.000000000000e+00,
'd4410',            0.000000000000e+00,
'd4422',            0.000000000000e+00,
'd5220',            0.000000000000e+00,
'd5232',            0.000000000000e+00,
'd5421',            0.000000000000e+00,
'd5433',            0.000000000000e+00,
'dedt',             0.000000000000e+00,
'del1',             0.000000000000e+00,
'del2',             0.000000000000e+00,
'del3',             0.000000000000e+00,
'didt',             0.000000000000e+00,
'dmdt',             0.000000000000e+00,
'dnodt',            0.000000000000e+00,
'domdt',            0.000000000000e+00,
'e3',               0.000000000000e+00,
'ee2',              0.000000000000e+00,
'peo',              0.000000000000e+00,
'pgho',             0.000000000000e+00,
'pho',              0.000000000000e+00,
'pinco',            0.000000000000e+00,
'plo',              0.000000000000e+00,
'se2',              0.000000000000e+00,
'se3',              0.000000000000e+00,
'sgh2',             0.000000000000e+00,
'sgh3',             0.000000000000e+00,
'sgh4',             0.000000000000e+00,
'sh2',              0.000000000000e+00,
'sh3',              0.000000000000e+00,
'si2',              0.000000000000e+00,
'si3',              0.000000000000e+00,
'sl2',              0.000000000000e+00,
'sl3',              0.000000000000e+00,
'sl4',              0.000000000000e+00,
'gsto',             3.469172342379e+00,
'xfact',            0.000000000000e+00,
'xgh2',             0.000000000000e+00,
'xgh3',             0.000000000000e+00,
'xgh4',             0.000000000000e+00,
'xh2',              0.000000000000e+00,
'xh3',              0.000000000000e+00,
'xi2',              0.000000000000e+00,
'xi3',              0.000000000000e+00,
'xl2',              0.000000000000e+00,
'xl3',              0.000000000000e+00,
'xl4',              0.000000000000e+00,
'xlamo',            0.000000000000e+00,
'zmol',             0.000000000000e+00,
'zmos',             0.000000000000e+00,
'atime',            0.000000000000e+00,
'xli',              0.000000000000e+00,
'xni',              0.000000000000e+00,
'init',            'n'
);
[satrec, r, v] = sgp4(satin,  3.600000000000e+02)
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
assert(isequal(satrec.method,             'n'));
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
assert(isequalRel(satrec.t,                3.600000000000e+02, TOL));
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
assert(isequal(satrec.init,               'n'));

# TEST satnum=5 tsince= 7.200000000000e+02
satin = struct(
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
'no',               4.720630155918e-02,
'a',                1.353457482755e+00,
'alta',             6.051555044136e-01,
'altp',             1.017594610970e-01,
'jdsatepoch',       2.451723284951e+06,
'isimp',            0.000000000000e+00,
'method',          'n',
'aycof',            6.602162317959e-04,
'con41',            1.048865087996e+00,
'cc1',              9.531093269423e-12,
'cc4',              5.259360731617e-07,
'cc5',              1.646515247679e-05,
'd2',               1.439873790292e-21,
'd3',               3.217106892468e-31,
'd4',               8.358359772163e-41,
'delmo',            4.873084659112e+00,
'eta',              7.369095429280e-01,
'argpdot',          5.429305256054e-05,
'omgcof',           6.701312384410e-15,
'sinmao',           3.309492298727e-01,
't',                3.600000000000e+02,
't2cof',            1.429663990413e-11,
't3cof',            1.621557268113e-21,
't4cof',            2.846182838253e-31,
't5cof',            6.080661397341e-41,
'x1mth2',           3.170449706681e-01,
'x7thm1',           3.780685205323e+00,
'mdot',             4.722944338321e-02,
'nodedot',         -3.717135384537e-05,
'xlcof',            1.289057728039e-03,
'xmcof',           -1.885936118348e-11,
'nodecf',          -1.194221173313e-15,
'irez',             0.000000000000e+00,
'd2201',            0.000000000000e+00,
'd2211',            0.000000000000e+00,
'd3210',            0.000000000000e+00,
'd3222',            0.000000000000e+00,
'd4410',            0.000000000000e+00,
'd4422',            0.000000000000e+00,
'd5220',            0.000000000000e+00,
'd5232',            0.000000000000e+00,
'd5421',            0.000000000000e+00,
'd5433',            0.000000000000e+00,
'dedt',             0.000000000000e+00,
'del1',             0.000000000000e+00,
'del2',             0.000000000000e+00,
'del3',             0.000000000000e+00,
'didt',             0.000000000000e+00,
'dmdt',             0.000000000000e+00,
'dnodt',            0.000000000000e+00,
'domdt',            0.000000000000e+00,
'e3',               0.000000000000e+00,
'ee2',              0.000000000000e+00,
'peo',              0.000000000000e+00,
'pgho',             0.000000000000e+00,
'pho',              0.000000000000e+00,
'pinco',            0.000000000000e+00,
'plo',              0.000000000000e+00,
'se2',              0.000000000000e+00,
'se3',              0.000000000000e+00,
'sgh2',             0.000000000000e+00,
'sgh3',             0.000000000000e+00,
'sgh4',             0.000000000000e+00,
'sh2',              0.000000000000e+00,
'sh3',              0.000000000000e+00,
'si2',              0.000000000000e+00,
'si3',              0.000000000000e+00,
'sl2',              0.000000000000e+00,
'sl3',              0.000000000000e+00,
'sl4',              0.000000000000e+00,
'gsto',             3.469172342379e+00,
'xfact',            0.000000000000e+00,
'xgh2',             0.000000000000e+00,
'xgh3',             0.000000000000e+00,
'xgh4',             0.000000000000e+00,
'xh2',              0.000000000000e+00,
'xh3',              0.000000000000e+00,
'xi2',              0.000000000000e+00,
'xi3',              0.000000000000e+00,
'xl2',              0.000000000000e+00,
'xl3',              0.000000000000e+00,
'xl4',              0.000000000000e+00,
'xlamo',            0.000000000000e+00,
'zmol',             0.000000000000e+00,
'zmos',             0.000000000000e+00,
'atime',            0.000000000000e+00,
'xli',              0.000000000000e+00,
'xni',              0.000000000000e+00,
'init',            'n'
);
[satrec, r, v] = sgp4(satin,  7.200000000000e+02)
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
assert(isequal(satrec.method,             'n'));
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
assert(isequalRel(satrec.t,                7.200000000000e+02, TOL));
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
assert(isequal(satrec.init,               'n'));

# TEST satnum=5 tsince= 1.080000000000e+03
satin = struct(
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
'no',               4.720630155918e-02,
'a',                1.353457482755e+00,
'alta',             6.051555044136e-01,
'altp',             1.017594610970e-01,
'jdsatepoch',       2.451723284951e+06,
'isimp',            0.000000000000e+00,
'method',          'n',
'aycof',            6.602162317959e-04,
'con41',            1.048865087996e+00,
'cc1',              9.531093269423e-12,
'cc4',              5.259360731617e-07,
'cc5',              1.646515247679e-05,
'd2',               1.439873790292e-21,
'd3',               3.217106892468e-31,
'd4',               8.358359772163e-41,
'delmo',            4.873084659112e+00,
'eta',              7.369095429280e-01,
'argpdot',          5.429305256054e-05,
'omgcof',           6.701312384410e-15,
'sinmao',           3.309492298727e-01,
't',                7.200000000000e+02,
't2cof',            1.429663990413e-11,
't3cof',            1.621557268113e-21,
't4cof',            2.846182838253e-31,
't5cof',            6.080661397341e-41,
'x1mth2',           3.170449706681e-01,
'x7thm1',           3.780685205323e+00,
'mdot',             4.722944338321e-02,
'nodedot',         -3.717135384537e-05,
'xlcof',            1.289057728039e-03,
'xmcof',           -1.885936118348e-11,
'nodecf',          -1.194221173313e-15,
'irez',             0.000000000000e+00,
'd2201',            0.000000000000e+00,
'd2211',            0.000000000000e+00,
'd3210',            0.000000000000e+00,
'd3222',            0.000000000000e+00,
'd4410',            0.000000000000e+00,
'd4422',            0.000000000000e+00,
'd5220',            0.000000000000e+00,
'd5232',            0.000000000000e+00,
'd5421',            0.000000000000e+00,
'd5433',            0.000000000000e+00,
'dedt',             0.000000000000e+00,
'del1',             0.000000000000e+00,
'del2',             0.000000000000e+00,
'del3',             0.000000000000e+00,
'didt',             0.000000000000e+00,
'dmdt',             0.000000000000e+00,
'dnodt',            0.000000000000e+00,
'domdt',            0.000000000000e+00,
'e3',               0.000000000000e+00,
'ee2',              0.000000000000e+00,
'peo',              0.000000000000e+00,
'pgho',             0.000000000000e+00,
'pho',              0.000000000000e+00,
'pinco',            0.000000000000e+00,
'plo',              0.000000000000e+00,
'se2',              0.000000000000e+00,
'se3',              0.000000000000e+00,
'sgh2',             0.000000000000e+00,
'sgh3',             0.000000000000e+00,
'sgh4',             0.000000000000e+00,
'sh2',              0.000000000000e+00,
'sh3',              0.000000000000e+00,
'si2',              0.000000000000e+00,
'si3',              0.000000000000e+00,
'sl2',              0.000000000000e+00,
'sl3',              0.000000000000e+00,
'sl4',              0.000000000000e+00,
'gsto',             3.469172342379e+00,
'xfact',            0.000000000000e+00,
'xgh2',             0.000000000000e+00,
'xgh3',             0.000000000000e+00,
'xgh4',             0.000000000000e+00,
'xh2',              0.000000000000e+00,
'xh3',              0.000000000000e+00,
'xi2',              0.000000000000e+00,
'xi3',              0.000000000000e+00,
'xl2',              0.000000000000e+00,
'xl3',              0.000000000000e+00,
'xl4',              0.000000000000e+00,
'xlamo',            0.000000000000e+00,
'zmol',             0.000000000000e+00,
'zmos',             0.000000000000e+00,
'atime',            0.000000000000e+00,
'xli',              0.000000000000e+00,
'xni',              0.000000000000e+00,
'init',            'n'
);
[satrec, r, v] = sgp4(satin,  1.080000000000e+03)
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
assert(isequal(satrec.method,             'n'));
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
assert(isequalRel(satrec.t,                1.080000000000e+03, TOL));
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
assert(isequal(satrec.init,               'n'));

# TEST satnum=5 tsince= 1.440000000000e+03
satin = struct(
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
'no',               4.720630155918e-02,
'a',                1.353457482755e+00,
'alta',             6.051555044136e-01,
'altp',             1.017594610970e-01,
'jdsatepoch',       2.451723284951e+06,
'isimp',            0.000000000000e+00,
'method',          'n',
'aycof',            6.602162317959e-04,
'con41',            1.048865087996e+00,
'cc1',              9.531093269423e-12,
'cc4',              5.259360731617e-07,
'cc5',              1.646515247679e-05,
'd2',               1.439873790292e-21,
'd3',               3.217106892468e-31,
'd4',               8.358359772163e-41,
'delmo',            4.873084659112e+00,
'eta',              7.369095429280e-01,
'argpdot',          5.429305256054e-05,
'omgcof',           6.701312384410e-15,
'sinmao',           3.309492298727e-01,
't',                1.080000000000e+03,
't2cof',            1.429663990413e-11,
't3cof',            1.621557268113e-21,
't4cof',            2.846182838253e-31,
't5cof',            6.080661397341e-41,
'x1mth2',           3.170449706681e-01,
'x7thm1',           3.780685205323e+00,
'mdot',             4.722944338321e-02,
'nodedot',         -3.717135384537e-05,
'xlcof',            1.289057728039e-03,
'xmcof',           -1.885936118348e-11,
'nodecf',          -1.194221173313e-15,
'irez',             0.000000000000e+00,
'd2201',            0.000000000000e+00,
'd2211',            0.000000000000e+00,
'd3210',            0.000000000000e+00,
'd3222',            0.000000000000e+00,
'd4410',            0.000000000000e+00,
'd4422',            0.000000000000e+00,
'd5220',            0.000000000000e+00,
'd5232',            0.000000000000e+00,
'd5421',            0.000000000000e+00,
'd5433',            0.000000000000e+00,
'dedt',             0.000000000000e+00,
'del1',             0.000000000000e+00,
'del2',             0.000000000000e+00,
'del3',             0.000000000000e+00,
'didt',             0.000000000000e+00,
'dmdt',             0.000000000000e+00,
'dnodt',            0.000000000000e+00,
'domdt',            0.000000000000e+00,
'e3',               0.000000000000e+00,
'ee2',              0.000000000000e+00,
'peo',              0.000000000000e+00,
'pgho',             0.000000000000e+00,
'pho',              0.000000000000e+00,
'pinco',            0.000000000000e+00,
'plo',              0.000000000000e+00,
'se2',              0.000000000000e+00,
'se3',              0.000000000000e+00,
'sgh2',             0.000000000000e+00,
'sgh3',             0.000000000000e+00,
'sgh4',             0.000000000000e+00,
'sh2',              0.000000000000e+00,
'sh3',              0.000000000000e+00,
'si2',              0.000000000000e+00,
'si3',              0.000000000000e+00,
'sl2',              0.000000000000e+00,
'sl3',              0.000000000000e+00,
'sl4',              0.000000000000e+00,
'gsto',             3.469172342379e+00,
'xfact',            0.000000000000e+00,
'xgh2',             0.000000000000e+00,
'xgh3',             0.000000000000e+00,
'xgh4',             0.000000000000e+00,
'xh2',              0.000000000000e+00,
'xh3',              0.000000000000e+00,
'xi2',              0.000000000000e+00,
'xi3',              0.000000000000e+00,
'xl2',              0.000000000000e+00,
'xl3',              0.000000000000e+00,
'xl4',              0.000000000000e+00,
'xlamo',            0.000000000000e+00,
'zmol',             0.000000000000e+00,
'zmos',             0.000000000000e+00,
'atime',            0.000000000000e+00,
'xli',              0.000000000000e+00,
'xni',              0.000000000000e+00,
'init',            'n'
);
[satrec, r, v] = sgp4(satin,  1.440000000000e+03)
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
assert(isequal(satrec.method,             'n'));
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
assert(isequalRel(satrec.t,                1.440000000000e+03, TOL));
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
assert(isequal(satrec.init,               'n'));

# TEST satnum=5 tsince= 1.800000000000e+03
satin = struct(
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
'no',               4.720630155918e-02,
'a',                1.353457482755e+00,
'alta',             6.051555044136e-01,
'altp',             1.017594610970e-01,
'jdsatepoch',       2.451723284951e+06,
'isimp',            0.000000000000e+00,
'method',          'n',
'aycof',            6.602162317959e-04,
'con41',            1.048865087996e+00,
'cc1',              9.531093269423e-12,
'cc4',              5.259360731617e-07,
'cc5',              1.646515247679e-05,
'd2',               1.439873790292e-21,
'd3',               3.217106892468e-31,
'd4',               8.358359772163e-41,
'delmo',            4.873084659112e+00,
'eta',              7.369095429280e-01,
'argpdot',          5.429305256054e-05,
'omgcof',           6.701312384410e-15,
'sinmao',           3.309492298727e-01,
't',                1.440000000000e+03,
't2cof',            1.429663990413e-11,
't3cof',            1.621557268113e-21,
't4cof',            2.846182838253e-31,
't5cof',            6.080661397341e-41,
'x1mth2',           3.170449706681e-01,
'x7thm1',           3.780685205323e+00,
'mdot',             4.722944338321e-02,
'nodedot',         -3.717135384537e-05,
'xlcof',            1.289057728039e-03,
'xmcof',           -1.885936118348e-11,
'nodecf',          -1.194221173313e-15,
'irez',             0.000000000000e+00,
'd2201',            0.000000000000e+00,
'd2211',            0.000000000000e+00,
'd3210',            0.000000000000e+00,
'd3222',            0.000000000000e+00,
'd4410',            0.000000000000e+00,
'd4422',            0.000000000000e+00,
'd5220',            0.000000000000e+00,
'd5232',            0.000000000000e+00,
'd5421',            0.000000000000e+00,
'd5433',            0.000000000000e+00,
'dedt',             0.000000000000e+00,
'del1',             0.000000000000e+00,
'del2',             0.000000000000e+00,
'del3',             0.000000000000e+00,
'didt',             0.000000000000e+00,
'dmdt',             0.000000000000e+00,
'dnodt',            0.000000000000e+00,
'domdt',            0.000000000000e+00,
'e3',               0.000000000000e+00,
'ee2',              0.000000000000e+00,
'peo',              0.000000000000e+00,
'pgho',             0.000000000000e+00,
'pho',              0.000000000000e+00,
'pinco',            0.000000000000e+00,
'plo',              0.000000000000e+00,
'se2',              0.000000000000e+00,
'se3',              0.000000000000e+00,
'sgh2',             0.000000000000e+00,
'sgh3',             0.000000000000e+00,
'sgh4',             0.000000000000e+00,
'sh2',              0.000000000000e+00,
'sh3',              0.000000000000e+00,
'si2',              0.000000000000e+00,
'si3',              0.000000000000e+00,
'sl2',              0.000000000000e+00,
'sl3',              0.000000000000e+00,
'sl4',              0.000000000000e+00,
'gsto',             3.469172342379e+00,
'xfact',            0.000000000000e+00,
'xgh2',             0.000000000000e+00,
'xgh3',             0.000000000000e+00,
'xgh4',             0.000000000000e+00,
'xh2',              0.000000000000e+00,
'xh3',              0.000000000000e+00,
'xi2',              0.000000000000e+00,
'xi3',              0.000000000000e+00,
'xl2',              0.000000000000e+00,
'xl3',              0.000000000000e+00,
'xl4',              0.000000000000e+00,
'xlamo',            0.000000000000e+00,
'zmol',             0.000000000000e+00,
'zmos',             0.000000000000e+00,
'atime',            0.000000000000e+00,
'xli',              0.000000000000e+00,
'xni',              0.000000000000e+00,
'init',            'n'
);
[satrec, r, v] = sgp4(satin,  1.800000000000e+03)
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
assert(isequal(satrec.method,             'n'));
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
assert(isequalRel(satrec.t,                1.800000000000e+03, TOL));
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
assert(isequal(satrec.init,               'n'));

# TEST satnum=5 tsince= 2.160000000000e+03
satin = struct(
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
'no',               4.720630155918e-02,
'a',                1.353457482755e+00,
'alta',             6.051555044136e-01,
'altp',             1.017594610970e-01,
'jdsatepoch',       2.451723284951e+06,
'isimp',            0.000000000000e+00,
'method',          'n',
'aycof',            6.602162317959e-04,
'con41',            1.048865087996e+00,
'cc1',              9.531093269423e-12,
'cc4',              5.259360731617e-07,
'cc5',              1.646515247679e-05,
'd2',               1.439873790292e-21,
'd3',               3.217106892468e-31,
'd4',               8.358359772163e-41,
'delmo',            4.873084659112e+00,
'eta',              7.369095429280e-01,
'argpdot',          5.429305256054e-05,
'omgcof',           6.701312384410e-15,
'sinmao',           3.309492298727e-01,
't',                1.800000000000e+03,
't2cof',            1.429663990413e-11,
't3cof',            1.621557268113e-21,
't4cof',            2.846182838253e-31,
't5cof',            6.080661397341e-41,
'x1mth2',           3.170449706681e-01,
'x7thm1',           3.780685205323e+00,
'mdot',             4.722944338321e-02,
'nodedot',         -3.717135384537e-05,
'xlcof',            1.289057728039e-03,
'xmcof',           -1.885936118348e-11,
'nodecf',          -1.194221173313e-15,
'irez',             0.000000000000e+00,
'd2201',            0.000000000000e+00,
'd2211',            0.000000000000e+00,
'd3210',            0.000000000000e+00,
'd3222',            0.000000000000e+00,
'd4410',            0.000000000000e+00,
'd4422',            0.000000000000e+00,
'd5220',            0.000000000000e+00,
'd5232',            0.000000000000e+00,
'd5421',            0.000000000000e+00,
'd5433',            0.000000000000e+00,
'dedt',             0.000000000000e+00,
'del1',             0.000000000000e+00,
'del2',             0.000000000000e+00,
'del3',             0.000000000000e+00,
'didt',             0.000000000000e+00,
'dmdt',             0.000000000000e+00,
'dnodt',            0.000000000000e+00,
'domdt',            0.000000000000e+00,
'e3',               0.000000000000e+00,
'ee2',              0.000000000000e+00,
'peo',              0.000000000000e+00,
'pgho',             0.000000000000e+00,
'pho',              0.000000000000e+00,
'pinco',            0.000000000000e+00,
'plo',              0.000000000000e+00,
'se2',              0.000000000000e+00,
'se3',              0.000000000000e+00,
'sgh2',             0.000000000000e+00,
'sgh3',             0.000000000000e+00,
'sgh4',             0.000000000000e+00,
'sh2',              0.000000000000e+00,
'sh3',              0.000000000000e+00,
'si2',              0.000000000000e+00,
'si3',              0.000000000000e+00,
'sl2',              0.000000000000e+00,
'sl3',              0.000000000000e+00,
'sl4',              0.000000000000e+00,
'gsto',             3.469172342379e+00,
'xfact',            0.000000000000e+00,
'xgh2',             0.000000000000e+00,
'xgh3',             0.000000000000e+00,
'xgh4',             0.000000000000e+00,
'xh2',              0.000000000000e+00,
'xh3',              0.000000000000e+00,
'xi2',              0.000000000000e+00,
'xi3',              0.000000000000e+00,
'xl2',              0.000000000000e+00,
'xl3',              0.000000000000e+00,
'xl4',              0.000000000000e+00,
'xlamo',            0.000000000000e+00,
'zmol',             0.000000000000e+00,
'zmos',             0.000000000000e+00,
'atime',            0.000000000000e+00,
'xli',              0.000000000000e+00,
'xni',              0.000000000000e+00,
'init',            'n'
);
[satrec, r, v] = sgp4(satin,  2.160000000000e+03)
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
assert(isequal(satrec.method,             'n'));
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
assert(isequalRel(satrec.t,                2.160000000000e+03, TOL));
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
assert(isequal(satrec.init,               'n'));

# TEST satnum=5 tsince= 2.520000000000e+03
satin = struct(
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
'no',               4.720630155918e-02,
'a',                1.353457482755e+00,
'alta',             6.051555044136e-01,
'altp',             1.017594610970e-01,
'jdsatepoch',       2.451723284951e+06,
'isimp',            0.000000000000e+00,
'method',          'n',
'aycof',            6.602162317959e-04,
'con41',            1.048865087996e+00,
'cc1',              9.531093269423e-12,
'cc4',              5.259360731617e-07,
'cc5',              1.646515247679e-05,
'd2',               1.439873790292e-21,
'd3',               3.217106892468e-31,
'd4',               8.358359772163e-41,
'delmo',            4.873084659112e+00,
'eta',              7.369095429280e-01,
'argpdot',          5.429305256054e-05,
'omgcof',           6.701312384410e-15,
'sinmao',           3.309492298727e-01,
't',                2.160000000000e+03,
't2cof',            1.429663990413e-11,
't3cof',            1.621557268113e-21,
't4cof',            2.846182838253e-31,
't5cof',            6.080661397341e-41,
'x1mth2',           3.170449706681e-01,
'x7thm1',           3.780685205323e+00,
'mdot',             4.722944338321e-02,
'nodedot',         -3.717135384537e-05,
'xlcof',            1.289057728039e-03,
'xmcof',           -1.885936118348e-11,
'nodecf',          -1.194221173313e-15,
'irez',             0.000000000000e+00,
'd2201',            0.000000000000e+00,
'd2211',            0.000000000000e+00,
'd3210',            0.000000000000e+00,
'd3222',            0.000000000000e+00,
'd4410',            0.000000000000e+00,
'd4422',            0.000000000000e+00,
'd5220',            0.000000000000e+00,
'd5232',            0.000000000000e+00,
'd5421',            0.000000000000e+00,
'd5433',            0.000000000000e+00,
'dedt',             0.000000000000e+00,
'del1',             0.000000000000e+00,
'del2',             0.000000000000e+00,
'del3',             0.000000000000e+00,
'didt',             0.000000000000e+00,
'dmdt',             0.000000000000e+00,
'dnodt',            0.000000000000e+00,
'domdt',            0.000000000000e+00,
'e3',               0.000000000000e+00,
'ee2',              0.000000000000e+00,
'peo',              0.000000000000e+00,
'pgho',             0.000000000000e+00,
'pho',              0.000000000000e+00,
'pinco',            0.000000000000e+00,
'plo',              0.000000000000e+00,
'se2',              0.000000000000e+00,
'se3',              0.000000000000e+00,
'sgh2',             0.000000000000e+00,
'sgh3',             0.000000000000e+00,
'sgh4',             0.000000000000e+00,
'sh2',              0.000000000000e+00,
'sh3',              0.000000000000e+00,
'si2',              0.000000000000e+00,
'si3',              0.000000000000e+00,
'sl2',              0.000000000000e+00,
'sl3',              0.000000000000e+00,
'sl4',              0.000000000000e+00,
'gsto',             3.469172342379e+00,
'xfact',            0.000000000000e+00,
'xgh2',             0.000000000000e+00,
'xgh3',             0.000000000000e+00,
'xgh4',             0.000000000000e+00,
'xh2',              0.000000000000e+00,
'xh3',              0.000000000000e+00,
'xi2',              0.000000000000e+00,
'xi3',              0.000000000000e+00,
'xl2',              0.000000000000e+00,
'xl3',              0.000000000000e+00,
'xl4',              0.000000000000e+00,
'xlamo',            0.000000000000e+00,
'zmol',             0.000000000000e+00,
'zmos',             0.000000000000e+00,
'atime',            0.000000000000e+00,
'xli',              0.000000000000e+00,
'xni',              0.000000000000e+00,
'init',            'n'
);
[satrec, r, v] = sgp4(satin,  2.520000000000e+03)
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
assert(isequal(satrec.method,             'n'));
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
assert(isequalRel(satrec.t,                2.520000000000e+03, TOL));
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
assert(isequal(satrec.init,               'n'));

# TEST satnum=5 tsince= 2.880000000000e+03
satin = struct(
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
'no',               4.720630155918e-02,
'a',                1.353457482755e+00,
'alta',             6.051555044136e-01,
'altp',             1.017594610970e-01,
'jdsatepoch',       2.451723284951e+06,
'isimp',            0.000000000000e+00,
'method',          'n',
'aycof',            6.602162317959e-04,
'con41',            1.048865087996e+00,
'cc1',              9.531093269423e-12,
'cc4',              5.259360731617e-07,
'cc5',              1.646515247679e-05,
'd2',               1.439873790292e-21,
'd3',               3.217106892468e-31,
'd4',               8.358359772163e-41,
'delmo',            4.873084659112e+00,
'eta',              7.369095429280e-01,
'argpdot',          5.429305256054e-05,
'omgcof',           6.701312384410e-15,
'sinmao',           3.309492298727e-01,
't',                2.520000000000e+03,
't2cof',            1.429663990413e-11,
't3cof',            1.621557268113e-21,
't4cof',            2.846182838253e-31,
't5cof',            6.080661397341e-41,
'x1mth2',           3.170449706681e-01,
'x7thm1',           3.780685205323e+00,
'mdot',             4.722944338321e-02,
'nodedot',         -3.717135384537e-05,
'xlcof',            1.289057728039e-03,
'xmcof',           -1.885936118348e-11,
'nodecf',          -1.194221173313e-15,
'irez',             0.000000000000e+00,
'd2201',            0.000000000000e+00,
'd2211',            0.000000000000e+00,
'd3210',            0.000000000000e+00,
'd3222',            0.000000000000e+00,
'd4410',            0.000000000000e+00,
'd4422',            0.000000000000e+00,
'd5220',            0.000000000000e+00,
'd5232',            0.000000000000e+00,
'd5421',            0.000000000000e+00,
'd5433',            0.000000000000e+00,
'dedt',             0.000000000000e+00,
'del1',             0.000000000000e+00,
'del2',             0.000000000000e+00,
'del3',             0.000000000000e+00,
'didt',             0.000000000000e+00,
'dmdt',             0.000000000000e+00,
'dnodt',            0.000000000000e+00,
'domdt',            0.000000000000e+00,
'e3',               0.000000000000e+00,
'ee2',              0.000000000000e+00,
'peo',              0.000000000000e+00,
'pgho',             0.000000000000e+00,
'pho',              0.000000000000e+00,
'pinco',            0.000000000000e+00,
'plo',              0.000000000000e+00,
'se2',              0.000000000000e+00,
'se3',              0.000000000000e+00,
'sgh2',             0.000000000000e+00,
'sgh3',             0.000000000000e+00,
'sgh4',             0.000000000000e+00,
'sh2',              0.000000000000e+00,
'sh3',              0.000000000000e+00,
'si2',              0.000000000000e+00,
'si3',              0.000000000000e+00,
'sl2',              0.000000000000e+00,
'sl3',              0.000000000000e+00,
'sl4',              0.000000000000e+00,
'gsto',             3.469172342379e+00,
'xfact',            0.000000000000e+00,
'xgh2',             0.000000000000e+00,
'xgh3',             0.000000000000e+00,
'xgh4',             0.000000000000e+00,
'xh2',              0.000000000000e+00,
'xh3',              0.000000000000e+00,
'xi2',              0.000000000000e+00,
'xi3',              0.000000000000e+00,
'xl2',              0.000000000000e+00,
'xl3',              0.000000000000e+00,
'xl4',              0.000000000000e+00,
'xlamo',            0.000000000000e+00,
'zmol',             0.000000000000e+00,
'zmos',             0.000000000000e+00,
'atime',            0.000000000000e+00,
'xli',              0.000000000000e+00,
'xni',              0.000000000000e+00,
'init',            'n'
);
[satrec, r, v] = sgp4(satin,  2.880000000000e+03)
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
assert(isequal(satrec.method,             'n'));
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
assert(isequalRel(satrec.t,                2.880000000000e+03, TOL));
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
assert(isequal(satrec.init,               'n'));

# TEST satnum=5 tsince= 3.240000000000e+03
satin = struct(
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
'no',               4.720630155918e-02,
'a',                1.353457482755e+00,
'alta',             6.051555044136e-01,
'altp',             1.017594610970e-01,
'jdsatepoch',       2.451723284951e+06,
'isimp',            0.000000000000e+00,
'method',          'n',
'aycof',            6.602162317959e-04,
'con41',            1.048865087996e+00,
'cc1',              9.531093269423e-12,
'cc4',              5.259360731617e-07,
'cc5',              1.646515247679e-05,
'd2',               1.439873790292e-21,
'd3',               3.217106892468e-31,
'd4',               8.358359772163e-41,
'delmo',            4.873084659112e+00,
'eta',              7.369095429280e-01,
'argpdot',          5.429305256054e-05,
'omgcof',           6.701312384410e-15,
'sinmao',           3.309492298727e-01,
't',                2.880000000000e+03,
't2cof',            1.429663990413e-11,
't3cof',            1.621557268113e-21,
't4cof',            2.846182838253e-31,
't5cof',            6.080661397341e-41,
'x1mth2',           3.170449706681e-01,
'x7thm1',           3.780685205323e+00,
'mdot',             4.722944338321e-02,
'nodedot',         -3.717135384537e-05,
'xlcof',            1.289057728039e-03,
'xmcof',           -1.885936118348e-11,
'nodecf',          -1.194221173313e-15,
'irez',             0.000000000000e+00,
'd2201',            0.000000000000e+00,
'd2211',            0.000000000000e+00,
'd3210',            0.000000000000e+00,
'd3222',            0.000000000000e+00,
'd4410',            0.000000000000e+00,
'd4422',            0.000000000000e+00,
'd5220',            0.000000000000e+00,
'd5232',            0.000000000000e+00,
'd5421',            0.000000000000e+00,
'd5433',            0.000000000000e+00,
'dedt',             0.000000000000e+00,
'del1',             0.000000000000e+00,
'del2',             0.000000000000e+00,
'del3',             0.000000000000e+00,
'didt',             0.000000000000e+00,
'dmdt',             0.000000000000e+00,
'dnodt',            0.000000000000e+00,
'domdt',            0.000000000000e+00,
'e3',               0.000000000000e+00,
'ee2',              0.000000000000e+00,
'peo',              0.000000000000e+00,
'pgho',             0.000000000000e+00,
'pho',              0.000000000000e+00,
'pinco',            0.000000000000e+00,
'plo',              0.000000000000e+00,
'se2',              0.000000000000e+00,
'se3',              0.000000000000e+00,
'sgh2',             0.000000000000e+00,
'sgh3',             0.000000000000e+00,
'sgh4',             0.000000000000e+00,
'sh2',              0.000000000000e+00,
'sh3',              0.000000000000e+00,
'si2',              0.000000000000e+00,
'si3',              0.000000000000e+00,
'sl2',              0.000000000000e+00,
'sl3',              0.000000000000e+00,
'sl4',              0.000000000000e+00,
'gsto',             3.469172342379e+00,
'xfact',            0.000000000000e+00,
'xgh2',             0.000000000000e+00,
'xgh3',             0.000000000000e+00,
'xgh4',             0.000000000000e+00,
'xh2',              0.000000000000e+00,
'xh3',              0.000000000000e+00,
'xi2',              0.000000000000e+00,
'xi3',              0.000000000000e+00,
'xl2',              0.000000000000e+00,
'xl3',              0.000000000000e+00,
'xl4',              0.000000000000e+00,
'xlamo',            0.000000000000e+00,
'zmol',             0.000000000000e+00,
'zmos',             0.000000000000e+00,
'atime',            0.000000000000e+00,
'xli',              0.000000000000e+00,
'xni',              0.000000000000e+00,
'init',            'n'
);
[satrec, r, v] = sgp4(satin,  3.240000000000e+03)
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
assert(isequal(satrec.method,             'n'));
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
assert(isequalRel(satrec.t,                3.240000000000e+03, TOL));
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
assert(isequal(satrec.init,               'n'));

# TEST satnum=5 tsince= 3.600000000000e+03
satin = struct(
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
'no',               4.720630155918e-02,
'a',                1.353457482755e+00,
'alta',             6.051555044136e-01,
'altp',             1.017594610970e-01,
'jdsatepoch',       2.451723284951e+06,
'isimp',            0.000000000000e+00,
'method',          'n',
'aycof',            6.602162317959e-04,
'con41',            1.048865087996e+00,
'cc1',              9.531093269423e-12,
'cc4',              5.259360731617e-07,
'cc5',              1.646515247679e-05,
'd2',               1.439873790292e-21,
'd3',               3.217106892468e-31,
'd4',               8.358359772163e-41,
'delmo',            4.873084659112e+00,
'eta',              7.369095429280e-01,
'argpdot',          5.429305256054e-05,
'omgcof',           6.701312384410e-15,
'sinmao',           3.309492298727e-01,
't',                3.240000000000e+03,
't2cof',            1.429663990413e-11,
't3cof',            1.621557268113e-21,
't4cof',            2.846182838253e-31,
't5cof',            6.080661397341e-41,
'x1mth2',           3.170449706681e-01,
'x7thm1',           3.780685205323e+00,
'mdot',             4.722944338321e-02,
'nodedot',         -3.717135384537e-05,
'xlcof',            1.289057728039e-03,
'xmcof',           -1.885936118348e-11,
'nodecf',          -1.194221173313e-15,
'irez',             0.000000000000e+00,
'd2201',            0.000000000000e+00,
'd2211',            0.000000000000e+00,
'd3210',            0.000000000000e+00,
'd3222',            0.000000000000e+00,
'd4410',            0.000000000000e+00,
'd4422',            0.000000000000e+00,
'd5220',            0.000000000000e+00,
'd5232',            0.000000000000e+00,
'd5421',            0.000000000000e+00,
'd5433',            0.000000000000e+00,
'dedt',             0.000000000000e+00,
'del1',             0.000000000000e+00,
'del2',             0.000000000000e+00,
'del3',             0.000000000000e+00,
'didt',             0.000000000000e+00,
'dmdt',             0.000000000000e+00,
'dnodt',            0.000000000000e+00,
'domdt',            0.000000000000e+00,
'e3',               0.000000000000e+00,
'ee2',              0.000000000000e+00,
'peo',              0.000000000000e+00,
'pgho',             0.000000000000e+00,
'pho',              0.000000000000e+00,
'pinco',            0.000000000000e+00,
'plo',              0.000000000000e+00,
'se2',              0.000000000000e+00,
'se3',              0.000000000000e+00,
'sgh2',             0.000000000000e+00,
'sgh3',             0.000000000000e+00,
'sgh4',             0.000000000000e+00,
'sh2',              0.000000000000e+00,
'sh3',              0.000000000000e+00,
'si2',              0.000000000000e+00,
'si3',              0.000000000000e+00,
'sl2',              0.000000000000e+00,
'sl3',              0.000000000000e+00,
'sl4',              0.000000000000e+00,
'gsto',             3.469172342379e+00,
'xfact',            0.000000000000e+00,
'xgh2',             0.000000000000e+00,
'xgh3',             0.000000000000e+00,
'xgh4',             0.000000000000e+00,
'xh2',              0.000000000000e+00,
'xh3',              0.000000000000e+00,
'xi2',              0.000000000000e+00,
'xi3',              0.000000000000e+00,
'xl2',              0.000000000000e+00,
'xl3',              0.000000000000e+00,
'xl4',              0.000000000000e+00,
'xlamo',            0.000000000000e+00,
'zmol',             0.000000000000e+00,
'zmos',             0.000000000000e+00,
'atime',            0.000000000000e+00,
'xli',              0.000000000000e+00,
'xni',              0.000000000000e+00,
'init',            'n'
);
[satrec, r, v] = sgp4(satin,  3.600000000000e+03)
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
assert(isequal(satrec.method,             'n'));
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
assert(isequalRel(satrec.t,                3.600000000000e+03, TOL));
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
assert(isequal(satrec.init,               'n'));

# TEST satnum=5 tsince= 3.960000000000e+03
satin = struct(
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
'no',               4.720630155918e-02,
'a',                1.353457482755e+00,
'alta',             6.051555044136e-01,
'altp',             1.017594610970e-01,
'jdsatepoch',       2.451723284951e+06,
'isimp',            0.000000000000e+00,
'method',          'n',
'aycof',            6.602162317959e-04,
'con41',            1.048865087996e+00,
'cc1',              9.531093269423e-12,
'cc4',              5.259360731617e-07,
'cc5',              1.646515247679e-05,
'd2',               1.439873790292e-21,
'd3',               3.217106892468e-31,
'd4',               8.358359772163e-41,
'delmo',            4.873084659112e+00,
'eta',              7.369095429280e-01,
'argpdot',          5.429305256054e-05,
'omgcof',           6.701312384410e-15,
'sinmao',           3.309492298727e-01,
't',                3.600000000000e+03,
't2cof',            1.429663990413e-11,
't3cof',            1.621557268113e-21,
't4cof',            2.846182838253e-31,
't5cof',            6.080661397341e-41,
'x1mth2',           3.170449706681e-01,
'x7thm1',           3.780685205323e+00,
'mdot',             4.722944338321e-02,
'nodedot',         -3.717135384537e-05,
'xlcof',            1.289057728039e-03,
'xmcof',           -1.885936118348e-11,
'nodecf',          -1.194221173313e-15,
'irez',             0.000000000000e+00,
'd2201',            0.000000000000e+00,
'd2211',            0.000000000000e+00,
'd3210',            0.000000000000e+00,
'd3222',            0.000000000000e+00,
'd4410',            0.000000000000e+00,
'd4422',            0.000000000000e+00,
'd5220',            0.000000000000e+00,
'd5232',            0.000000000000e+00,
'd5421',            0.000000000000e+00,
'd5433',            0.000000000000e+00,
'dedt',             0.000000000000e+00,
'del1',             0.000000000000e+00,
'del2',             0.000000000000e+00,
'del3',             0.000000000000e+00,
'didt',             0.000000000000e+00,
'dmdt',             0.000000000000e+00,
'dnodt',            0.000000000000e+00,
'domdt',            0.000000000000e+00,
'e3',               0.000000000000e+00,
'ee2',              0.000000000000e+00,
'peo',              0.000000000000e+00,
'pgho',             0.000000000000e+00,
'pho',              0.000000000000e+00,
'pinco',            0.000000000000e+00,
'plo',              0.000000000000e+00,
'se2',              0.000000000000e+00,
'se3',              0.000000000000e+00,
'sgh2',             0.000000000000e+00,
'sgh3',             0.000000000000e+00,
'sgh4',             0.000000000000e+00,
'sh2',              0.000000000000e+00,
'sh3',              0.000000000000e+00,
'si2',              0.000000000000e+00,
'si3',              0.000000000000e+00,
'sl2',              0.000000000000e+00,
'sl3',              0.000000000000e+00,
'sl4',              0.000000000000e+00,
'gsto',             3.469172342379e+00,
'xfact',            0.000000000000e+00,
'xgh2',             0.000000000000e+00,
'xgh3',             0.000000000000e+00,
'xgh4',             0.000000000000e+00,
'xh2',              0.000000000000e+00,
'xh3',              0.000000000000e+00,
'xi2',              0.000000000000e+00,
'xi3',              0.000000000000e+00,
'xl2',              0.000000000000e+00,
'xl3',              0.000000000000e+00,
'xl4',              0.000000000000e+00,
'xlamo',            0.000000000000e+00,
'zmol',             0.000000000000e+00,
'zmos',             0.000000000000e+00,
'atime',            0.000000000000e+00,
'xli',              0.000000000000e+00,
'xni',              0.000000000000e+00,
'init',            'n'
);
[satrec, r, v] = sgp4(satin,  3.960000000000e+03)
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
assert(isequal(satrec.method,             'n'));
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
assert(isequalRel(satrec.t,                3.960000000000e+03, TOL));
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
assert(isequal(satrec.init,               'n'));

# TEST satnum=5 tsince= 4.320000000000e+03
satin = struct(
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
'no',               4.720630155918e-02,
'a',                1.353457482755e+00,
'alta',             6.051555044136e-01,
'altp',             1.017594610970e-01,
'jdsatepoch',       2.451723284951e+06,
'isimp',            0.000000000000e+00,
'method',          'n',
'aycof',            6.602162317959e-04,
'con41',            1.048865087996e+00,
'cc1',              9.531093269423e-12,
'cc4',              5.259360731617e-07,
'cc5',              1.646515247679e-05,
'd2',               1.439873790292e-21,
'd3',               3.217106892468e-31,
'd4',               8.358359772163e-41,
'delmo',            4.873084659112e+00,
'eta',              7.369095429280e-01,
'argpdot',          5.429305256054e-05,
'omgcof',           6.701312384410e-15,
'sinmao',           3.309492298727e-01,
't',                3.960000000000e+03,
't2cof',            1.429663990413e-11,
't3cof',            1.621557268113e-21,
't4cof',            2.846182838253e-31,
't5cof',            6.080661397341e-41,
'x1mth2',           3.170449706681e-01,
'x7thm1',           3.780685205323e+00,
'mdot',             4.722944338321e-02,
'nodedot',         -3.717135384537e-05,
'xlcof',            1.289057728039e-03,
'xmcof',           -1.885936118348e-11,
'nodecf',          -1.194221173313e-15,
'irez',             0.000000000000e+00,
'd2201',            0.000000000000e+00,
'd2211',            0.000000000000e+00,
'd3210',            0.000000000000e+00,
'd3222',            0.000000000000e+00,
'd4410',            0.000000000000e+00,
'd4422',            0.000000000000e+00,
'd5220',            0.000000000000e+00,
'd5232',            0.000000000000e+00,
'd5421',            0.000000000000e+00,
'd5433',            0.000000000000e+00,
'dedt',             0.000000000000e+00,
'del1',             0.000000000000e+00,
'del2',             0.000000000000e+00,
'del3',             0.000000000000e+00,
'didt',             0.000000000000e+00,
'dmdt',             0.000000000000e+00,
'dnodt',            0.000000000000e+00,
'domdt',            0.000000000000e+00,
'e3',               0.000000000000e+00,
'ee2',              0.000000000000e+00,
'peo',              0.000000000000e+00,
'pgho',             0.000000000000e+00,
'pho',              0.000000000000e+00,
'pinco',            0.000000000000e+00,
'plo',              0.000000000000e+00,
'se2',              0.000000000000e+00,
'se3',              0.000000000000e+00,
'sgh2',             0.000000000000e+00,
'sgh3',             0.000000000000e+00,
'sgh4',             0.000000000000e+00,
'sh2',              0.000000000000e+00,
'sh3',              0.000000000000e+00,
'si2',              0.000000000000e+00,
'si3',              0.000000000000e+00,
'sl2',              0.000000000000e+00,
'sl3',              0.000000000000e+00,
'sl4',              0.000000000000e+00,
'gsto',             3.469172342379e+00,
'xfact',            0.000000000000e+00,
'xgh2',             0.000000000000e+00,
'xgh3',             0.000000000000e+00,
'xgh4',             0.000000000000e+00,
'xh2',              0.000000000000e+00,
'xh3',              0.000000000000e+00,
'xi2',              0.000000000000e+00,
'xi3',              0.000000000000e+00,
'xl2',              0.000000000000e+00,
'xl3',              0.000000000000e+00,
'xl4',              0.000000000000e+00,
'xlamo',            0.000000000000e+00,
'zmol',             0.000000000000e+00,
'zmos',             0.000000000000e+00,
'atime',            0.000000000000e+00,
'xli',              0.000000000000e+00,
'xni',              0.000000000000e+00,
'init',            'n'
);
[satrec, r, v] = sgp4(satin,  4.320000000000e+03)
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
assert(isequal(satrec.method,             'n'));
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
assert(isequalRel(satrec.t,                4.320000000000e+03, TOL));
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
assert(isequal(satrec.init,               'n'));

