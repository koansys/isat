# Need to get globals, using same input constant 72

global tumin mu radiusearthkm xke j2 j3 j4 j3oj2  

[tumin, mu, radiusearthkm, xke, j2, j3, j4, j3oj2] = getgravc(72);

TOL = 0.0000001;

# 5

[em,     argpm,  inclm,  mm,     nm,     nodem, irez,...
 atime,  d2201,  d2211,  d3210,  d3222,  d4410,  d4422,...
 d5220,  d5232,  d5421,  d5433,  dedt,   didt,   dmdt,...
 dndt,   dnodt,  domdt,  del1,   del2,   del3,   xfact,...
 xlamo,  xli,    xni]...
= dsinit( ...
 9.800539401920e-01,  2.103967656036e-02,  3.623303527140e+00, -1.968466918871e-04, -4.620853989286e-05,  9.143969877776e-05,  9.047265431838e-05,...
 1.015004737244e-02,  1.987316640953e-01, -1.225562568207e-03, -2.876932107990e-04,  5.693012719481e-04,  5.632804773904e-04,  1.759082494140e-02,...
 1.313903514872e+01,  4.721576706992e+00,  2.389115076210e+00, -6.532930148080e-02, -2.576626675289e-01, -7.103439559619e-01,  7.986387467636e+00,...
-1.166475754387e+00,  0.000000000000e+00,  0.000000000000e+00,  1.716027084070e+00,  2.512139658858e+00,  5.246109831442e-03,  5.245868658927e-03,...
 4.766670465451e+00, -2.539711450894e-07,  2.387324687663e-07,  6.668001023728e+00,  9.879517039032e+00,  1.630805643792e+00,...
 9.259764788332e-01,  8.286842069497e-01, -2.050151056150e+00,  1.248944362820e+00,  4.701299585848e+00,  1.450506000000e-01,  0.000000000000e+00,...
 2.000636014976e-01,  0.000000000000e+00,  5.245868658927e-03,  0.000000000000e+00,  1.450506000000e-01,  2.103967656036e-02);
assert(isequalRel(em,            1.450506000000e-01, TOL));
assert(isequalRel(argpm,         0.000000000000e+00, TOL));
assert(isequalRel(inclm,         2.000636014976e-01, TOL));
assert(isequalRel(mm,            0.000000000000e+00, TOL));
assert(isequalRel(nm,            5.245868658927e-03, TOL));
assert(isequalRel(nodem,         0.000000000000e+00, TOL));
assert(isequalRel(irez,          0.000000000000e+00, TOL));
assert(isequalRel(atime,         0.000000000000e+00, TOL));
assert(isequalRel(d2201,         0.000000000000e+00, TOL));
assert(isequalRel(d2211,         0.000000000000e+00, TOL));
assert(isequalRel(d3210,         0.000000000000e+00, TOL));
assert(isequalRel(d3222,         0.000000000000e+00, TOL));
assert(isequalRel(d4410,         0.000000000000e+00, TOL));
assert(isequalRel(d4422,         0.000000000000e+00, TOL));
assert(isequalRel(d5220,         0.000000000000e+00, TOL));
assert(isequalRel(d5232,         0.000000000000e+00, TOL));
assert(isequalRel(d5421,         0.000000000000e+00, TOL));
assert(isequalRel(d5433,         0.000000000000e+00, TOL));
assert(isequalRel(dedt,         -5.739257257134e-10, TOL));
assert(isequalRel(didt,         -2.669482583786e-08, TOL));
assert(isequalRel(dmdt,         -6.045613838815e-08, TOL));
assert(isequalRel(dndt,          0.000000000000e+00, TOL));
assert(isequalRel(dnodt,        -6.171410259572e-08, TOL));
assert(isequalRel(domdt,         6.528741483006e-08, TOL));
assert(isequalRel(del1,          0.000000000000e+00, TOL));
assert(isequalRel(del2,          0.000000000000e+00, TOL));
assert(isequalRel(del3,          0.000000000000e+00, TOL));
assert(isequalRel(xfact,         0.000000000000e+00, TOL));
assert(isequalRel(xlamo,         0.000000000000e+00, TOL));
assert(isequalRel(xli,           0.000000000000e+00, TOL));
assert(isequalRel(xni,           0.000000000000e+00, TOL));
# 4632
# 6251

[em,     argpm,  inclm,  mm,     nm,     nodem, irez,...
 atime,  d2201,  d2211,  d3210,  d3222,  d4410,  d4422,...
 d5220,  d5232,  d5421,  d5433,  dedt,   didt,   dmdt,...
 dndt,   dnodt,  domdt,  del1,   del2,   del3,   xfact,...
 xlamo,  xli,    xni]...
= dsinit( ...
 4.358815257110e-01,  4.729513710532e-01,  4.621022739372e+00, -4.106209626082e-04, -3.776251664788e-05,  5.482975046298e-05,  3.980536524969e-05,...
 3.199828401516e-01,  9.000040530708e-01, -2.556515817813e-03, -2.351084818406e-04,  3.413686516514e-04,  2.478272060157e-04,  2.645498128236e-01,...
 2.823898158515e+00,  5.927750640042e+00,  5.580094190508e-01,  4.998289169492e-01,  9.668540331305e-01, -7.476532737815e+00, -1.967387569690e+00,...
 2.987165889194e+00,  0.000000000000e+00,  0.000000000000e+00,  5.741801269032e-01,  3.530050585206e-01,  8.748086886633e-03,  8.748547019630e-03,...
 4.870720014138e+00, -1.284567215801e-06, -1.358937308455e-06,  2.900052189777e+00,  7.057852947556e+00,  1.364174869534e+00,...
-2.248209584395e-01, -5.118745162783e+00, -1.041382803617e+00,  1.083975928476e+00,  7.743675261388e-01,  6.877146000000e-01,  0.000000000000e+00,...
 1.119778813470e+00,  0.000000000000e+00,  8.748547019630e-03,  0.000000000000e+00,  6.877146000000e-01,  4.729513710532e-01);
assert(isequalRel(em,            6.877146000000e-01, TOL));
assert(isequalRel(argpm,         0.000000000000e+00, TOL));
assert(isequalRel(inclm,         1.119778813470e+00, TOL));
assert(isequalRel(mm,            0.000000000000e+00, TOL));
assert(isequalRel(nm,            8.748547019630e-03, TOL));
assert(isequalRel(nodem,         0.000000000000e+00, TOL));
assert(isequalRel(irez,          2.000000000000e+00, TOL));
assert(isequalRel(atime,         0.000000000000e+00, TOL));
assert(isequalRel(d2201,        -1.197359551623e-11, TOL));
assert(isequalRel(d2211,         6.453213834121e-11, TOL));
assert(isequalRel(d3210,        -3.893722738131e-12, TOL));
assert(isequalRel(d3222,        -7.364857538023e-12, TOL));
assert(isequalRel(d4410,         2.576960140946e-12, TOL));
assert(isequalRel(d4422,         4.361455592714e-12, TOL));
assert(isequalRel(d5220,        -2.528789465953e-12, TOL));
assert(isequalRel(d5232,         6.767712568551e-13, TOL));
assert(isequalRel(d5421,        -2.280698046562e-12, TOL));
assert(isequalRel(d5433,        -1.659570821491e-12, TOL));
assert(isequalRel(dedt,         -2.888547623461e-08, TOL));
assert(isequalRel(didt,         -9.784108269214e-09, TOL));
assert(isequalRel(dmdt,          9.270786742527e-08, TOL));
assert(isequalRel(dndt,          0.000000000000e+00, TOL));
assert(isequalRel(dnodt,        -6.124323489695e-08, TOL));
assert(isequalRel(domdt,        -1.415521073384e-08, TOL));
assert(isequalRel(del1,          0.000000000000e+00, TOL));
assert(isequalRel(del2,          0.000000000000e+00, TOL));
assert(isequalRel(del3,          0.000000000000e+00, TOL));
assert(isequalRel(xfact,        -8.753597222054e-03, TOL));
assert(isequalRel(xlamo,         2.662899525810e+00, TOL));
assert(isequalRel(xli,           2.662899525810e+00, TOL));
assert(isequalRel(xni,           8.748547019630e-03, TOL));
# 8195

[em,     argpm,  inclm,  mm,     nm,     nodem, irez,...
 atime,  d2201,  d2211,  d3210,  d3222,  d4410,  d4422,...
 d5220,  d5232,  d5421,  d5433,  dedt,   didt,   dmdt,...
 dndt,   dnodt,  domdt,  del1,   del2,   del3,   xfact,...
 xlamo,  xli,    xni]...
= dsinit( ...
 4.289855844945e-01,  4.997148204060e-01,  4.712788660783e+00, -4.105604224204e-04, -3.869698011745e-05,  5.474139856001e-05,  3.871905129561e-05,...
 5.202004853494e-02,  9.033113351973e-01, -2.556138896122e-03, -2.409264279726e-04,  3.408185749187e-04,  2.410638425744e-04,  4.864426121357e-02,...
 1.251742101403e+01,  2.488450010326e+00, -6.448698696437e-01,  8.062989067707e-01, -7.726437183168e+00, -1.155188982526e+00,  5.782028627321e+00,...
-2.008243674800e+00,  0.000000000000e+00,  0.000000000000e+00,  2.019617116981e+00,  2.850471734357e-01,  8.762146865654e-03,  8.762667060363e-03,...
 6.097806906008e+00, -1.408338623247e-06, -1.540202957123e-06,  1.736414847372e+00,  1.535838635358e+01,  9.953838810723e-02,...
 1.087290794062e-01,  6.157731267206e-02, -8.590805802032e+00, -2.838481585876e+00,  7.665591155216e+00,  7.069051000000e-01,  0.000000000000e+00,...
 1.127426846252e+00,  0.000000000000e+00,  8.762667060363e-03,  0.000000000000e+00,  7.069051000000e-01,  4.997148204060e-01);
assert(isequalRel(em,            7.069051000000e-01, TOL));
assert(isequalRel(argpm,         0.000000000000e+00, TOL));
assert(isequalRel(inclm,         1.127426846252e+00, TOL));
assert(isequalRel(mm,            0.000000000000e+00, TOL));
assert(isequalRel(nm,            8.762667060363e-03, TOL));
assert(isequalRel(nodem,         0.000000000000e+00, TOL));
assert(isequalRel(irez,          2.000000000000e+00, TOL));
assert(isequalRel(atime,         0.000000000000e+00, TOL));
assert(isequalRel(d2201,        -1.223066000340e-11, TOL));
assert(isequalRel(d2211,         7.174605316403e-11, TOL));
assert(isequalRel(d3210,        -4.151751044682e-12, TOL));
assert(isequalRel(d3222,        -8.877536621154e-12, TOL));
assert(isequalRel(d4410,         3.097256488149e-12, TOL));
assert(isequalRel(d4422,         5.507367501422e-12, TOL));
assert(isequalRel(d5220,        -3.254911516032e-12, TOL));
assert(isequalRel(d5232,         7.951364509680e-13, TOL));
assert(isequalRel(d5421,        -2.951741474264e-12, TOL));
assert(isequalRel(d5433,        -2.267801942329e-12, TOL));
assert(isequalRel(dedt,         -4.867357573014e-09, TOL));
assert(isequalRel(didt,         -1.740817385888e-09, TOL));
assert(isequalRel(dmdt,          7.275290629300e-09, TOL));
assert(isequalRel(dndt,          0.000000000000e+00, TOL));
assert(isequalRel(dnodt,        -8.615750092681e-08, TOL));
assert(isequalRel(domdt,         2.335815977949e-08, TOL));
assert(isequalRel(del1,          0.000000000000e+00, TOL));
assert(isequalRel(del2,          0.000000000000e+00, TOL));
assert(isequalRel(del3,          0.000000000000e+00, TOL));
assert(isequalRel(xfact,        -8.754040087689e-03, TOL));
assert(isequalRel(xlamo,         2.158241444311e+00, TOL));
assert(isequalRel(xli,           2.158241444311e+00, TOL));
assert(isequalRel(xni,           8.762667060363e-03, TOL));
# 9880

[em,     argpm,  inclm,  mm,     nm,     nodem, irez,...
 atime,  d2201,  d2211,  d3210,  d3222,  d4410,  d4422,...
 d5220,  d5232,  d5421,  d5433,  dedt,   didt,   dmdt,...
 dndt,   dnodt,  domdt,  del1,   del2,   del3,   xfact,...
 xlamo,  xli,    xni]...
= dsinit( ...
 9.862976975087e-01,  7.342528284100e-04,  5.716345999363e+00, -3.844603186866e-05, -4.732890446927e-05,  9.462305117515e-05,  9.458830617460e-05,...
-2.695688550324e-02,  1.649753069066e-01, -2.393640304675e-04, -2.946685725612e-04,  5.891207441590e-04,  5.889044226567e-04, -1.753069382440e-02,...
 1.630534276736e+01,  2.986878196174e+00,  1.457191263623e+00,  2.004645812038e-01,  9.813117642790e-01, -3.108145795094e-01,  1.086186823499e+01,...
-2.988008293373e+00,  0.000000000000e+00,  0.000000000000e+00,  3.007604046768e+00,  5.377307065517e-01,  5.069604859229e-03,  5.069384722250e-03,...
 5.465934884933e+00, -2.264779093452e-07,  2.171553869084e-07,  1.347308349031e+01,  4.769908021423e+00,  2.121080157488e+00,...
-9.649460768102e-02,  3.902915047865e-01,  4.483080689261e-01,  8.376216737664e+00, -1.193938800509e+00,  2.709710000000e-02,  0.000000000000e+00,...
 1.657329751109e-01,  0.000000000000e+00,  5.069384722250e-03,  0.000000000000e+00,  2.709710000000e-02,  7.342528284100e-04);
assert(isequalRel(em,            2.709710000000e-02, TOL));
assert(isequalRel(argpm,         0.000000000000e+00, TOL));
assert(isequalRel(inclm,         1.657329751109e-01, TOL));
assert(isequalRel(mm,            0.000000000000e+00, TOL));
assert(isequalRel(nm,            5.069384722250e-03, TOL));
assert(isequalRel(nodem,         0.000000000000e+00, TOL));
assert(isequalRel(irez,          1.000000000000e+00, TOL));
assert(isequalRel(atime,         0.000000000000e+00, TOL));
assert(isequalRel(d2201,         0.000000000000e+00, TOL));
assert(isequalRel(d2211,         0.000000000000e+00, TOL));
assert(isequalRel(d3210,         0.000000000000e+00, TOL));
assert(isequalRel(d3222,         0.000000000000e+00, TOL));
assert(isequalRel(d4410,         0.000000000000e+00, TOL));
assert(isequalRel(d4422,         0.000000000000e+00, TOL));
assert(isequalRel(d5220,         0.000000000000e+00, TOL));
assert(isequalRel(d5232,         0.000000000000e+00, TOL));
assert(isequalRel(d5421,         0.000000000000e+00, TOL));
assert(isequalRel(d5433,         0.000000000000e+00, TOL));
assert(isequalRel(dedt,          2.142414632713e-10, TOL));
assert(isequalRel(didt,         -2.100861346923e-08, TOL));
assert(isequalRel(dmdt,         -1.007233935453e-07, TOL));
assert(isequalRel(dndt,          0.000000000000e+00, TOL));
assert(isequalRel(dnodt,         5.240300896038e-08, TOL));
assert(isequalRel(domdt,        -2.079390322813e-08, TOL));
assert(isequalRel(del1,         -1.069242230635e-12, TOL));
assert(isequalRel(del2,          2.268988798894e-11, TOL));
assert(isequalRel(del3,          3.478296584410e-12, TOL));
assert(isequalRel(xfact,        -4.374900909933e-03, TOL));
assert(isequalRel(xlamo,         2.429222236900e+00, TOL));
assert(isequalRel(xli,           2.429222236900e+00, TOL));
assert(isequalRel(xni,           5.069384722250e-03, TOL));
# 9998

[em,     argpm,  inclm,  mm,     nm,     nodem, irez,...
 atime,  d2201,  d2211,  d3210,  d3222,  d4410,  d4422,...
 d5220,  d5232,  d5421,  d5433,  dedt,   didt,   dmdt,...
 dndt,   dnodt,  domdt,  del1,   del2,   del3,   xfact,...
 xlamo,  xli,    xni]...
= dsinit( ...
 6.846539709542e-01,  5.355365089730e-01,  8.285461931653e-01, -3.598896383932e-04, -3.529408803158e-05,  4.810694202241e-05,  3.278563067952e-05,...
-3.295141721071e-01,  7.288682597402e-01, -2.240663865223e-03, -2.197401071657e-04,  2.995126148595e-04,  2.041225145857e-04, -2.842063666668e-01,...
 7.241600464427e+00,  1.668607687869e+00,  5.923151674967e+00, -1.556942593186e+00, -5.548981285667e+00,  1.612144872051e-01,  3.273877043602e+00,...
-2.146959216736e+00,  0.000000000000e+00,  0.000000000000e+00,  1.265125075736e+00,  1.817184457299e-01,  9.971844927633e-03,  9.971131604593e-03,...
 4.021856443150e+00, -3.528457562328e-06, -6.780000141855e-08,  2.557388153538e+00,  8.004285429241e+00, -1.949045345611e+00,...
 6.119118527262e+00,  6.841370517902e-01, -6.022288391897e+00, -1.633514023053e+00,  3.788583001984e+00,  7.318036000000e-01,  0.000000000000e+00,...
 8.166674822762e-01,  0.000000000000e+00,  9.971131604593e-03,  0.000000000000e+00,  7.318036000000e-01,  5.355365089730e-01);
assert(isequalRel(em,            7.318036000000e-01, TOL));
assert(isequalRel(argpm,         0.000000000000e+00, TOL));
assert(isequalRel(inclm,         8.166674822762e-01, TOL));
assert(isequalRel(mm,            0.000000000000e+00, TOL));
assert(isequalRel(nm,            9.971131604593e-03, TOL));
assert(isequalRel(nodem,         0.000000000000e+00, TOL));
assert(isequalRel(irez,          0.000000000000e+00, TOL));
assert(isequalRel(atime,         0.000000000000e+00, TOL));
assert(isequalRel(d2201,         0.000000000000e+00, TOL));
assert(isequalRel(d2211,         0.000000000000e+00, TOL));
assert(isequalRel(d3210,         0.000000000000e+00, TOL));
assert(isequalRel(d3222,         0.000000000000e+00, TOL));
assert(isequalRel(d4410,         0.000000000000e+00, TOL));
assert(isequalRel(d4422,         0.000000000000e+00, TOL));
assert(isequalRel(d5220,         0.000000000000e+00, TOL));
assert(isequalRel(d5232,         0.000000000000e+00, TOL));
assert(isequalRel(d5421,         0.000000000000e+00, TOL));
assert(isequalRel(d5433,         0.000000000000e+00, TOL));
assert(isequalRel(dedt,          2.638606466889e-08, TOL));
assert(isequalRel(didt,         -3.476737419877e-08, TOL));
assert(isequalRel(dmdt,          8.037814258571e-08, TOL));
assert(isequalRel(dndt,          0.000000000000e+00, TOL));
assert(isequalRel(dnodt,        -6.033631306028e-08, TOL));
assert(isequalRel(domdt,         9.465204016205e-09, TOL));
assert(isequalRel(del1,          0.000000000000e+00, TOL));
assert(isequalRel(del2,          0.000000000000e+00, TOL));
assert(isequalRel(del3,          0.000000000000e+00, TOL));
assert(isequalRel(xfact,         0.000000000000e+00, TOL));
assert(isequalRel(xlamo,         0.000000000000e+00, TOL));
assert(isequalRel(xli,           0.000000000000e+00, TOL));
assert(isequalRel(xni,           0.000000000000e+00, TOL));
# 11801

[em,     argpm,  inclm,  mm,     nm,     nodem, irez,...
 atime,  d2201,  d2211,  d3210,  d3222,  d4410,  d4422,...
 d5220,  d5232,  d5421,  d5433,  dedt,   didt,   dmdt,...
 dndt,   dnodt,  domdt,  del1,   del2,   del3,   xfact,...
 xlamo,  xli,    xni]...
= dsinit( ...
 9.801384832532e-01,  1.336798440000e-06,  4.617827041512e-01, -1.928451076707e-06, -5.559746452923e-05,  1.111948547358e-04,  1.111947804133e-04,...
-2.173422574442e-02,  1.983142799855e-01, -1.200648805206e-05, -3.461484201792e-04,  6.922963776275e-04,  6.922959148970e-04, -5.358747472118e-03,...
 1.078528759969e+01,  8.937335105200e+00, -4.630982613971e-01, -8.634002275673e-01,  1.168263836916e+00, -3.781220061153e-01,  5.061183248572e+00,...
 3.089249679430e+00,  0.000000000000e+00,  0.000000000000e+00,  4.943902851905e+00,  5.821811010073e+00,  4.314022550354e-03,  4.313874514604e-03,...
 6.145897708218e-01, -1.542095005540e-07,  1.449944717919e-07,  4.216765164053e+00,  1.468549811421e+01, -1.569394720994e-01,...
-1.398188689264e+00, -1.680069232651e-01,  1.343399415874e+00, -1.774410090226e+00,  9.396297462977e+00,  1.156200000000e-03,  0.000000000000e+00,...
 1.996377411601e-01,  0.000000000000e+00,  4.313874514604e-03,  0.000000000000e+00,  1.156200000000e-03,  1.336798440000e-06);
assert(isequalRel(em,            1.156200000000e-03, TOL));
assert(isequalRel(argpm,         0.000000000000e+00, TOL));
assert(isequalRel(inclm,         1.996377411601e-01, TOL));
assert(isequalRel(mm,            0.000000000000e+00, TOL));
assert(isequalRel(nm,            4.313874514604e-03, TOL));
assert(isequalRel(nodem,         0.000000000000e+00, TOL));
assert(isequalRel(irez,          1.000000000000e+00, TOL));
assert(isequalRel(atime,         0.000000000000e+00, TOL));
assert(isequalRel(d2201,         0.000000000000e+00, TOL));
assert(isequalRel(d2211,         0.000000000000e+00, TOL));
assert(isequalRel(d3210,         0.000000000000e+00, TOL));
assert(isequalRel(d3222,         0.000000000000e+00, TOL));
assert(isequalRel(d4410,         0.000000000000e+00, TOL));
assert(isequalRel(d4422,         0.000000000000e+00, TOL));
assert(isequalRel(d5220,         0.000000000000e+00, TOL));
assert(isequalRel(d5232,         0.000000000000e+00, TOL));
assert(isequalRel(d5421,         0.000000000000e+00, TOL));
assert(isequalRel(d5433,         0.000000000000e+00, TOL));
assert(isequalRel(dedt,          7.405672912273e-12, TOL));
assert(isequalRel(didt,          1.917646021027e-08, TOL));
assert(isequalRel(dmdt,         -1.336452685205e-07, TOL));
assert(isequalRel(dndt,          0.000000000000e+00, TOL));
assert(isequalRel(dnodt,         6.865572727316e-08, TOL));
assert(isequalRel(domdt,        -2.094974096530e-08, TOL));
assert(isequalRel(del1,         -5.401617059180e-13, TOL));
assert(isequalRel(del2,          1.319183725301e-11, TOL));
assert(isequalRel(del3,          1.815021571877e-12, TOL));
assert(isequalRel(xfact,        -4.375061997072e-03, TOL));
assert(isequalRel(xlamo,         1.954280633142e+00, TOL));
assert(isequalRel(xli,           1.954280633142e+00, TOL));
assert(isequalRel(xni,           4.313874514604e-03, TOL));
# 14128

[em,     argpm,  inclm,  mm,     nm,     nodem, irez,...
 atime,  d2201,  d2211,  d3210,  d3222,  d4410,  d4422,...
 d5220,  d5232,  d5421,  d5433,  dedt,   didt,   dmdt,...
 dndt,   dnodt,  domdt,  del1,   del2,   del3,   xfact,...
 xlamo,  xli,    xni]...
= dsinit( ...
 4.680747993911e-01,  3.131887589093e-01,  4.278836976885e+00, -1.565426252795e-04, -1.357597034132e-05,  2.250191985532e-05,  1.864825807826e-05,...
 8.624271127389e-02,  8.836888491856e-01, -9.746304600404e-04, -8.452365095850e-05,  1.400963888348e-04,  1.161035872326e-04,  1.603399424520e-02,...
 2.070490436592e+00,  7.270449727238e+00,  7.572811749063e-03,  2.712754928035e+00,  4.211910638255e-03, -5.769094474540e+00, -2.992321735369e+00,...
 4.009225233322e+00,  0.000000000000e+00,  0.000000000000e+00,  2.298863660699e+00,  8.372169888892e-01,  2.131535165822e-02,  2.131732105901e-02,...
 5.149138427074e+00, -6.488927718517e-06, -5.833365942055e-06,  5.540026309401e+00,  4.286859926875e+00,  3.326689201301e+00,...
-4.118802452673e-01, -3.822206433384e+00, -1.852783409566e+00,  2.175359468061e+00, -8.441236220770e-01,  5.596327000000e-01,  0.000000000000e+00,...
 1.083685404539e+00,  0.000000000000e+00,  2.131732105901e-02,  0.000000000000e+00,  5.596327000000e-01,  3.131887589093e-01);
assert(isequalRel(em,            5.596327000000e-01, TOL));
assert(isequalRel(argpm,         0.000000000000e+00, TOL));
assert(isequalRel(inclm,         1.083685404539e+00, TOL));
assert(isequalRel(mm,            0.000000000000e+00, TOL));
assert(isequalRel(nm,            2.131732105901e-02, TOL));
assert(isequalRel(nodem,         0.000000000000e+00, TOL));
assert(isequalRel(irez,          0.000000000000e+00, TOL));
assert(isequalRel(atime,         0.000000000000e+00, TOL));
assert(isequalRel(d2201,         0.000000000000e+00, TOL));
assert(isequalRel(d2211,         0.000000000000e+00, TOL));
assert(isequalRel(d3210,         0.000000000000e+00, TOL));
assert(isequalRel(d3222,         0.000000000000e+00, TOL));
assert(isequalRel(d4410,         0.000000000000e+00, TOL));
assert(isequalRel(d4422,         0.000000000000e+00, TOL));
assert(isequalRel(d5220,         0.000000000000e+00, TOL));
assert(isequalRel(d5232,         0.000000000000e+00, TOL));
assert(isequalRel(d5421,         0.000000000000e+00, TOL));
assert(isequalRel(d5433,         0.000000000000e+00, TOL));
assert(isequalRel(dedt,         -2.324540208861e-09, TOL));
assert(isequalRel(didt,         -9.012956177194e-09, TOL));
assert(isequalRel(dmdt,          3.250770527931e-08, TOL));
assert(isequalRel(dndt,          0.000000000000e+00, TOL));
assert(isequalRel(dnodt,        -2.039277854983e-08, TOL));
assert(isequalRel(domdt,        -1.115284366841e-08, TOL));
assert(isequalRel(del1,          0.000000000000e+00, TOL));
assert(isequalRel(del2,          0.000000000000e+00, TOL));
assert(isequalRel(del3,          0.000000000000e+00, TOL));
assert(isequalRel(xfact,         0.000000000000e+00, TOL));
assert(isequalRel(xlamo,         0.000000000000e+00, TOL));
assert(isequalRel(xli,           0.000000000000e+00, TOL));
assert(isequalRel(xni,           0.000000000000e+00, TOL));
# 16925

[em,     argpm,  inclm,  mm,     nm,     nodem, irez,...
 atime,  d2201,  d2211,  d3210,  d3222,  d4410,  d4422,...
 d5220,  d5232,  d5421,  d5433,  dedt,   didt,   dmdt,...
 dndt,   dnodt,  domdt,  del1,   del2,   del3,   xfact,...
 xlamo,  xli,    xni]...
= dsinit( ...
 9.768540719074e-01,  6.184952661581e-01,  3.426128445555e+00, -3.244378761083e-03, -3.604476295552e-04,  4.452686665858e-04,  2.750249539548e-04,...
-1.401774145800e-01,  2.139068072733e-01, -2.019942082109e-02, -2.244137904207e-03,  2.772231554066e-03,  1.712298467698e-03, -1.156263617362e-01,...
 1.342983301258e+00,  2.373573855782e+01,  1.488445240897e+00,  1.681085250112e+00, -1.539375336156e+00, -4.405223915392e-01, -1.641109798937e+00,...
 1.098582545735e+01,  0.000000000000e+00,  0.000000000000e+00,  4.071885638059e-01,  6.222933050742e+00,  1.077308058974e-03,  1.077283640185e-03,...
 3.271188586538e+00, -4.147025214065e-08,  3.858053576462e-08,  9.726328330151e+00,  1.507965982400e+01, -4.806687489380e+00,...
 7.971761783749e+00,  7.614242560927e-01, -2.792471768775e+00,  2.853856110337e+00,  6.643935146438e+00,  7.864447000000e-01,  0.000000000000e+00,...
 2.155725972308e-01,  0.000000000000e+00,  1.077283640185e-03,  0.000000000000e+00,  7.864447000000e-01,  6.184952661581e-01);
assert(isequalRel(em,            7.864447000000e-01, TOL));
assert(isequalRel(argpm,         0.000000000000e+00, TOL));
assert(isequalRel(inclm,         2.155725972308e-01, TOL));
assert(isequalRel(mm,            0.000000000000e+00, TOL));
assert(isequalRel(nm,            1.077283640185e-03, TOL));
assert(isequalRel(nodem,         0.000000000000e+00, TOL));
assert(isequalRel(irez,          0.000000000000e+00, TOL));
assert(isequalRel(atime,         0.000000000000e+00, TOL));
assert(isequalRel(d2201,         0.000000000000e+00, TOL));
assert(isequalRel(d2211,         0.000000000000e+00, TOL));
assert(isequalRel(d3210,         0.000000000000e+00, TOL));
assert(isequalRel(d3222,         0.000000000000e+00, TOL));
assert(isequalRel(d4410,         0.000000000000e+00, TOL));
assert(isequalRel(d4422,         0.000000000000e+00, TOL));
assert(isequalRel(d5220,         0.000000000000e+00, TOL));
assert(isequalRel(d5232,         0.000000000000e+00, TOL));
assert(isequalRel(d5421,         0.000000000000e+00, TOL));
assert(isequalRel(d5433,         0.000000000000e+00, TOL));
assert(isequalRel(dedt,          9.991744175572e-08, TOL));
assert(isequalRel(didt,         -2.656246157481e-07, TOL));
assert(isequalRel(dmdt,         -7.442607144689e-07, TOL));
assert(isequalRel(dndt,          0.000000000000e+00, TOL));
assert(isequalRel(dnodt,        -7.900872576398e-07, TOL));
assert(isequalRel(domdt,         9.925475448625e-07, TOL));
assert(isequalRel(del1,          0.000000000000e+00, TOL));
assert(isequalRel(del2,          0.000000000000e+00, TOL));
assert(isequalRel(del3,          0.000000000000e+00, TOL));
assert(isequalRel(xfact,         0.000000000000e+00, TOL));
assert(isequalRel(xlamo,         0.000000000000e+00, TOL));
assert(isequalRel(xli,           0.000000000000e+00, TOL));
assert(isequalRel(xni,           0.000000000000e+00, TOL));
# 20413

[em,     argpm,  inclm,  mm,     nm,     nodem, irez,...
 atime,  d2201,  d2211,  d3210,  d3222,  d4410,  d4422,...
 d5220,  d5232,  d5421,  d5433,  dedt,   didt,   dmdt,...
 dndt,   dnodt,  domdt,  del1,   del2,   del3,   xfact,...
 xlamo,  xli,    xni]...
= dsinit( ...
 4.667741107229e-01,  5.508148245610e-01,  4.416489349660e+00, -4.075107416397e-04, -4.074643162103e-05,  5.461755872540e-05,  3.660538607241e-05,...
-1.448694740914e-01,  8.843765767810e-01, -2.537151660045e-03, -2.536862616486e-04,  3.400475512134e-04,  2.279042158902e-04, -1.671806012792e-01,...
 2.823148385069e-01,  1.956688264698e+00,  7.560455550249e-01, -2.824707906370e-01, -1.883155445920e+00,  1.821980115480e-01,  1.221664044049e-01,...
-2.581256708122e+00,  0.000000000000e+00,  0.000000000000e+00,  4.912171010008e+00,  3.517903093612e-01,  8.782060217382e-03,  8.782535528761e-03,...
 3.455919470557e+00, -1.910984836962e-06, -1.729308560804e-06,  1.395145995474e+00,  4.527362363151e-01, -1.416027632726e+00,...
 1.454841049240e+00,  7.775545601669e-01, -9.150438705484e-01, -2.067807705441e+00, -6.097888439984e-01,  7.421690000000e-01,  0.000000000000e+00,...
 1.085156717098e+00,  0.000000000000e+00,  8.782535528761e-03,  0.000000000000e+00,  7.421690000000e-01,  5.508148245610e-01);
assert(isequalRel(em,            7.421690000000e-01, TOL));
assert(isequalRel(argpm,         0.000000000000e+00, TOL));
assert(isequalRel(inclm,         1.085156717098e+00, TOL));
assert(isequalRel(mm,            0.000000000000e+00, TOL));
assert(isequalRel(nm,            8.782535528761e-03, TOL));
assert(isequalRel(nodem,         0.000000000000e+00, TOL));
assert(isequalRel(irez,          2.000000000000e+00, TOL));
assert(isequalRel(atime,         0.000000000000e+00, TOL));
assert(isequalRel(d2201,        -1.358430480330e-11, TOL));
assert(isequalRel(d2211,         8.393534226859e-11, TOL));
assert(isequalRel(d3210,        -7.731467500396e-12, TOL));
assert(isequalRel(d3222,        -1.225068944742e-11, TOL));
assert(isequalRel(d4410,         4.702956210526e-12, TOL));
assert(isequalRel(d4422,         8.003291640479e-12, TOL));
assert(isequalRel(d5220,        -6.224656265138e-12, TOL));
assert(isequalRel(d5232,         2.558930440722e-12, TOL));
assert(isequalRel(d5421,        -5.640794406041e-12, TOL));
assert(isequalRel(d5433,        -3.910753384831e-12, TOL));
assert(isequalRel(dedt,          1.441546149773e-08, TOL));
assert(isequalRel(didt,         -1.685608671533e-09, TOL));
assert(isequalRel(dmdt,          1.948849567720e-07, TOL));
assert(isequalRel(dndt,          0.000000000000e+00, TOL));
assert(isequalRel(dnodt,        -6.831807033508e-09, TOL));
assert(isequalRel(domdt,        -7.014119890435e-08, TOL));
assert(isequalRel(del1,          0.000000000000e+00, TOL));
assert(isequalRel(del2,          0.000000000000e+00, TOL));
assert(isequalRel(del3,          0.000000000000e+00, TOL));
assert(isequalRel(xfact,        -8.754654235733e-03, TOL));
assert(isequalRel(xlamo,        -2.560712769541e+00, TOL));
assert(isequalRel(xli,          -2.560712769541e+00, TOL));
assert(isequalRel(xni,           8.782535528761e-03, TOL));
# 21897
# 22312
# *** error: t:= 494.202867 *** code =   1

[em,     argpm,  inclm,  mm,     nm,     nodem, irez,...
 atime,  d2201,  d2211,  d3210,  d3222,  d4410,  d4422,...
 d5220,  d5232,  d5421,  d5433,  dedt,   didt,   dmdt,...
 dndt,   dnodt,  domdt,  del1,   del2,   del3,   xfact,...
 xlamo,  xli,    xni]...
= dsinit( ...
 4.461431438481e-01,  5.687741989094e-01,  4.421379762224e+00, -4.152029536535e-04, -4.255636236536e-05,  5.589164123999e-05,  3.670280290501e-05,...
-6.781121236965e-02,  8.949616166056e-01, -2.585043179178e-03, -2.649548450829e-04,  3.479799570045e-04,  2.285107306474e-04, -9.300055233772e-02,...
 1.011433491910e+01,  6.174055799605e+00,  1.436091100595e+00,  9.894345792869e-01, -7.445807450018e+00, -1.671723221244e+00,  4.048778658683e+00,...
 2.787486533023e-01,  0.000000000000e+00,  0.000000000000e+00,  2.003968969617e+00,  3.276925483789e-01,  8.581775564227e-03,  8.582332516240e-03,...
 6.186235757890e+00, -1.877848338725e-06, -1.889270581478e-06,  1.813115954744e+00,  1.643557313837e+01, -1.421821877921e-01,...
 2.491510678518e+00,  8.950346641696e-02, -8.822850177431e+00, -2.661737982326e+00,  7.910128348311e+00,  7.541712000000e-01,  0.000000000000e+00,...
 1.108345161540e+00,  0.000000000000e+00,  8.582332516240e-03,  0.000000000000e+00,  7.541712000000e-01,  5.687741989094e-01);
assert(isequalRel(em,            7.541712000000e-01, TOL));
assert(isequalRel(argpm,         0.000000000000e+00, TOL));
assert(isequalRel(inclm,         1.108345161540e+00, TOL));
assert(isequalRel(mm,            0.000000000000e+00, TOL));
assert(isequalRel(nm,            8.582332516240e-03, TOL));
assert(isequalRel(nodem,         0.000000000000e+00, TOL));
assert(isequalRel(irez,          2.000000000000e+00, TOL));
assert(isequalRel(atime,         0.000000000000e+00, TOL));
assert(isequalRel(d2201,        -1.241189028817e-11, TOL));
assert(isequalRel(d2211,         8.551864262335e-11, TOL));
assert(isequalRel(d3210,        -6.602089272382e-12, TOL));
assert(isequalRel(d3222,        -1.302466004394e-11, TOL));
assert(isequalRel(d4410,         4.891528985291e-12, TOL));
assert(isequalRel(d4422,         8.891260588609e-12, TOL));
assert(isequalRel(d5220,        -6.477888050339e-12, TOL));
assert(isequalRel(d5232,         2.138467008675e-12, TOL));
assert(isequalRel(d5421,        -5.750904185904e-12, TOL));
assert(isequalRel(d5433,        -4.510549332610e-12, TOL));
assert(isequalRel(dedt,          7.330390566401e-09, TOL));
assert(isequalRel(didt,         -2.350896248702e-08, TOL));
assert(isequalRel(dmdt,         -2.726008010046e-09, TOL));
assert(isequalRel(dndt,          0.000000000000e+00, TOL));
assert(isequalRel(dnodt,        -9.800554699737e-08, TOL));
assert(isequalRel(domdt,         3.479071142642e-08, TOL));
assert(isequalRel(del1,          0.000000000000e+00, TOL));
assert(isequalRel(del2,          0.000000000000e+00, TOL));
assert(isequalRel(del3,          0.000000000000e+00, TOL));
assert(isequalRel(xfact,        -8.755049561816e-03, TOL));
assert(isequalRel(xlamo,         2.409040817745e+00, TOL));
assert(isequalRel(xli,           2.409040817745e+00, TOL));
assert(isequalRel(xni,           8.582332516240e-03, TOL));
# 22674

[em,     argpm,  inclm,  mm,     nm,     nodem, irez,...
 atime,  d2201,  d2211,  d3210,  d3222,  d4410,  d4422,...
 d5220,  d5232,  d5421,  d5433,  dedt,   didt,   dmdt,...
 dndt,   dnodt,  domdt,  del1,   del2,   del3,   xfact,...
 xlamo,  xli,    xni]...
= dsinit( ...
 9.924402794872e-01,  5.268569159708e-01,  5.167015834603e+00, -3.645715464322e-04, -3.538528327605e-05,  4.867981516121e-05,  3.348460411695e-05,...
 1.335551822618e-01,  1.227285282698e-01, -2.269813307285e-03, -2.203078864713e-04,  3.030793086581e-04,  2.084743056819e-04,  1.012064733473e-01,...
 1.743998961512e+01,  3.164791090678e+00, -3.199300228592e+00,  4.664978268716e-01, -7.168375325603e+00,  3.420608511894e-01,  8.465783464086e+00,...
-1.818289405144e+00,  0.000000000000e+00,  0.000000000000e+00,  1.346832291139e+00,  1.449687929999e-01,  9.857038097825e-03,  9.853789469239e-03,...
 3.138517383448e+00, -4.803174199882e-06,  4.696272070899e-06,  9.381951731311e+00,  9.590037545210e+00, -8.992776337465e-01,...
-2.058802147183e+00, -1.165590178778e+00, -6.225633496546e+00,  2.282389782041e+00,  3.618008474818e+00,  7.258491000000e-01,  0.000000000000e+00,...
 1.230387309486e-01,  0.000000000000e+00,  9.853789469239e-03,  0.000000000000e+00,  7.258491000000e-01,  5.268569159708e-01);
assert(isequalRel(em,            7.258491000000e-01, TOL));
assert(isequalRel(argpm,         0.000000000000e+00, TOL));
assert(isequalRel(inclm,         1.230387309486e-01, TOL));
assert(isequalRel(mm,            0.000000000000e+00, TOL));
assert(isequalRel(nm,            9.853789469239e-03, TOL));
assert(isequalRel(nodem,         0.000000000000e+00, TOL));
assert(isequalRel(irez,          0.000000000000e+00, TOL));
assert(isequalRel(atime,         0.000000000000e+00, TOL));
assert(isequalRel(d2201,         0.000000000000e+00, TOL));
assert(isequalRel(d2211,         0.000000000000e+00, TOL));
assert(isequalRel(d3210,         0.000000000000e+00, TOL));
assert(isequalRel(d3222,         0.000000000000e+00, TOL));
assert(isequalRel(d4410,         0.000000000000e+00, TOL));
assert(isequalRel(d4422,         0.000000000000e+00, TOL));
assert(isequalRel(d5220,         0.000000000000e+00, TOL));
assert(isequalRel(d5232,         0.000000000000e+00, TOL));
assert(isequalRel(d5421,         0.000000000000e+00, TOL));
assert(isequalRel(d5433,         0.000000000000e+00, TOL));
assert(isequalRel(dedt,         -1.045444380488e-08, TOL));
assert(isequalRel(didt,          2.376724085775e-08, TOL));
assert(isequalRel(dmdt,         -2.642690499755e-08, TOL));
assert(isequalRel(dndt,          0.000000000000e+00, TOL));
assert(isequalRel(dnodt,        -4.838389780477e-07, TOL));
assert(isequalRel(domdt,         4.812656940526e-07, TOL));
assert(isequalRel(del1,          0.000000000000e+00, TOL));
assert(isequalRel(del2,          0.000000000000e+00, TOL));
assert(isequalRel(del3,          0.000000000000e+00, TOL));
assert(isequalRel(xfact,         0.000000000000e+00, TOL));
assert(isequalRel(xlamo,         0.000000000000e+00, TOL));
assert(isequalRel(xli,           0.000000000000e+00, TOL));
assert(isequalRel(xni,           0.000000000000e+00, TOL));
# 23177

[em,     argpm,  inclm,  mm,     nm,     nodem, irez,...
 atime,  d2201,  d2211,  d3210,  d3222,  d4410,  d4422,...
 d5220,  d5232,  d5421,  d5433,  dedt,   didt,   dmdt,...
 dndt,   dnodt,  domdt,  del1,   del2,   del3,   xfact,...
 xlamo,  xli,    xni]...
= dsinit( ...
 8.767351504117e-01,  9.463978197680e-01,  5.312084111370e-01, -5.081511320759e-03, -3.248271505978e-03,  1.504089035974e-03,  3.482288694116e-04,...
-2.328528826856e-03,  4.809734670776e-01, -3.163736207572e-02, -2.022365695321e-02,  9.364420626367e-03,  2.168064209911e-03, -2.895833784881e-03,...
 3.995477449554e+00,  2.548928504566e+01,  8.310226113488e-01, -3.718033631310e-02, -5.208379182207e-01,  2.162664475876e-02, -1.002513894286e+00,...
 1.001300979507e+01,  0.000000000000e+00,  0.000000000000e+00,  3.849219568564e+00,  2.356194490192e-02,  3.189367173340e-04,  3.189177226396e-04,...
 4.139920985731e-02, -1.102439219498e-07,  6.851791339748e-08,  2.567833618728e+01,  3.829122677668e+00,  1.717602413072e+00,...
-1.421861902345e+00, -1.018792332212e+00,  7.806838841821e-01,  1.012719038286e+01, -1.037186103277e+00,  9.728298000000e-01,  0.000000000000e+00,...
 5.017647066558e-01,  0.000000000000e+00,  3.189177226396e-04,  0.000000000000e+00,  9.728298000000e-01,  9.463978197680e-01);
assert(isequalRel(em,            9.728298000000e-01, TOL));
assert(isequalRel(argpm,         0.000000000000e+00, TOL));
assert(isequalRel(inclm,         5.017647066558e-01, TOL));
assert(isequalRel(mm,            0.000000000000e+00, TOL));
assert(isequalRel(nm,            3.189177226396e-04, TOL));
assert(isequalRel(nodem,         0.000000000000e+00, TOL));
assert(isequalRel(irez,          0.000000000000e+00, TOL));
assert(isequalRel(atime,         0.000000000000e+00, TOL));
assert(isequalRel(d2201,         0.000000000000e+00, TOL));
assert(isequalRel(d2211,         0.000000000000e+00, TOL));
assert(isequalRel(d3210,         0.000000000000e+00, TOL));
assert(isequalRel(d3222,         0.000000000000e+00, TOL));
assert(isequalRel(d4410,         0.000000000000e+00, TOL));
assert(isequalRel(d4422,         0.000000000000e+00, TOL));
assert(isequalRel(d5220,         0.000000000000e+00, TOL));
assert(isequalRel(d5232,         0.000000000000e+00, TOL));
assert(isequalRel(d5421,         0.000000000000e+00, TOL));
assert(isequalRel(d5433,         0.000000000000e+00, TOL));
assert(isequalRel(dedt,          2.968135603242e-09, TOL));
assert(isequalRel(didt,         -3.439044884764e-07, TOL));
assert(isequalRel(dmdt,         -3.438051105625e-06, TOL));
assert(isequalRel(dndt,          0.000000000000e+00, TOL));
assert(isequalRel(dnodt,        -5.053925231474e-07, TOL));
assert(isequalRel(domdt,         6.914571527623e-07, TOL));
assert(isequalRel(del1,          0.000000000000e+00, TOL));
assert(isequalRel(del2,          0.000000000000e+00, TOL));
assert(isequalRel(del3,          0.000000000000e+00, TOL));
assert(isequalRel(xfact,         0.000000000000e+00, TOL));
assert(isequalRel(xlamo,         0.000000000000e+00, TOL));
assert(isequalRel(xli,           0.000000000000e+00, TOL));
assert(isequalRel(xni,           0.000000000000e+00, TOL));
# 23333

[em,     argpm,  inclm,  mm,     nm,     nodem, irez,...
 atime,  d2201,  d2211,  d3210,  d3222,  d4410,  d4422,...
 d5220,  d5232,  d5421,  d5433,  dedt,   didt,   dmdt,...
 dndt,   dnodt,  domdt,  del1,   del2,   del3,   xfact,...
 xlamo,  xli,    xni]...
= dsinit( ...
 9.926886154337e-01,  3.343177840848e-01,  4.789944431026e+00, -1.738090138239e-04, -1.505235132354e-05,  2.456223144115e-05,  2.004016516758e-05,...
 1.141559521691e-02,  1.207034083544e-01, -1.082130562202e-03, -9.371556193695e-05,  1.529238371106e-04,  1.247695658719e-04,  6.794274893840e-03,...
 2.003045339565e+01,  2.211939691926e+00,  4.180135541233e-01, -2.146039037850e-01,  3.703990857776e+00,  9.931402744621e-02,  1.086424461544e+01,...
-2.824901577941e+00,  0.000000000000e+00,  0.000000000000e+00,  3.217495488339e+00,  4.405647364347e-01,  1.953881035267e-02,  1.952919673236e-02,...
 4.972443038932e-03, -1.198223317894e-05,  1.172590697508e-05,  3.735227503813e+00,  1.729498918205e+01,  3.506359240961e-01,...
-9.417227746221e-02,  3.278561983564e-01,  4.459680168698e+00, -1.664599028406e+00,  9.044696472935e+00,  5.782022000000e-01,  0.000000000000e+00,...
 1.209984410530e-01,  0.000000000000e+00,  1.952919673236e-02,  0.000000000000e+00,  5.782022000000e-01,  3.343177840848e-01);
assert(isequalRel(em,            5.782022000000e-01, TOL));
assert(isequalRel(argpm,         0.000000000000e+00, TOL));
assert(isequalRel(inclm,         1.209984410530e-01, TOL));
assert(isequalRel(mm,            0.000000000000e+00, TOL));
assert(isequalRel(nm,            1.952919673236e-02, TOL));
assert(isequalRel(nodem,         0.000000000000e+00, TOL));
assert(isequalRel(irez,          0.000000000000e+00, TOL));
assert(isequalRel(atime,         0.000000000000e+00, TOL));
assert(isequalRel(d2201,         0.000000000000e+00, TOL));
assert(isequalRel(d2211,         0.000000000000e+00, TOL));
assert(isequalRel(d3210,         0.000000000000e+00, TOL));
assert(isequalRel(d3222,         0.000000000000e+00, TOL));
assert(isequalRel(d4410,         0.000000000000e+00, TOL));
assert(isequalRel(d4422,         0.000000000000e+00, TOL));
assert(isequalRel(d5220,         0.000000000000e+00, TOL));
assert(isequalRel(d5232,         0.000000000000e+00, TOL));
assert(isequalRel(d5421,         0.000000000000e+00, TOL));
assert(isequalRel(d5433,         0.000000000000e+00, TOL));
assert(isequalRel(dedt,         -4.020215919893e-10, TOL));
assert(isequalRel(didt,         -8.390202397339e-10, TOL));
assert(isequalRel(dmdt,         -3.093486129009e-08, TOL));
assert(isequalRel(dndt,          0.000000000000e+00, TOL));
assert(isequalRel(dnodt,         1.298165842561e-07, TOL));
assert(isequalRel(domdt,        -1.214482290414e-07, TOL));
assert(isequalRel(del1,          0.000000000000e+00, TOL));
assert(isequalRel(del2,          0.000000000000e+00, TOL));
assert(isequalRel(del3,          0.000000000000e+00, TOL));
assert(isequalRel(xfact,         0.000000000000e+00, TOL));
assert(isequalRel(xlamo,         0.000000000000e+00, TOL));
assert(isequalRel(xli,           0.000000000000e+00, TOL));
assert(isequalRel(xni,           0.000000000000e+00, TOL));
# 23599

[em,     argpm,  inclm,  mm,     nm,     nodem, irez,...
 atime,  d2201,  d2211,  d3210,  d3222,  d4410,  d4422,...
 d5220,  d5232,  d5421,  d5433,  dedt,   didt,   dmdt,...
 dndt,   dnodt,  domdt,  del1,   del2,   del3,   xfact,...
 xlamo,  xli,    xni]...
= dsinit( ...
 9.977390326858e-01,  7.096896000000e-06,  5.429679160382e+00, -4.359221435156e-06, -5.454519985382e-05,  1.090900126053e-04,  1.090896255044e-04,...
-1.083047439793e-01,  6.720731102433e-02, -2.714040335773e-05, -3.395970466932e-04,  6.791916832972e-04,  6.791892732165e-04, -7.564404853169e-02,...
 3.767328239899e+00,  1.581833001499e+01, -1.872126641261e+00, -2.907894586864e-01,  8.194386720961e-01, -7.797944210889e-01, -1.428938019349e+00,...
 9.936004110508e+00,  0.000000000000e+00,  0.000000000000e+00,  5.037771726289e+00,  8.429940287133e-01,  4.397272137107e-03,  4.397108759492e-03,...
 1.396474586435e+00, -1.641412021814e-07,  1.630334252187e-07,  1.114414424666e+01,  7.906140931350e+00, -5.626930686788e-03,...
-2.487816486377e+00,  2.349040036708e-01, -1.117504942767e-01,  5.153323530243e+00,  3.233275263102e+00,  2.664000000000e-03,  0.000000000000e+00,...
 6.725800805485e-02,  0.000000000000e+00,  4.397108759492e-03,  0.000000000000e+00,  2.664000000000e-03,  7.096896000000e-06);
assert(isequalRel(em,            2.664000000000e-03, TOL));
assert(isequalRel(argpm,         0.000000000000e+00, TOL));
assert(isequalRel(inclm,         6.725800805485e-02, TOL));
assert(isequalRel(mm,            0.000000000000e+00, TOL));
assert(isequalRel(nm,            4.397108759492e-03, TOL));
assert(isequalRel(nodem,         0.000000000000e+00, TOL));
assert(isequalRel(irez,          1.000000000000e+00, TOL));
assert(isequalRel(atime,         0.000000000000e+00, TOL));
assert(isequalRel(d2201,         0.000000000000e+00, TOL));
assert(isequalRel(d2211,         0.000000000000e+00, TOL));
assert(isequalRel(d3210,         0.000000000000e+00, TOL));
assert(isequalRel(d3222,         0.000000000000e+00, TOL));
assert(isequalRel(d4410,         0.000000000000e+00, TOL));
assert(isequalRel(d4422,         0.000000000000e+00, TOL));
assert(isequalRel(d5220,         0.000000000000e+00, TOL));
assert(isequalRel(d5232,         0.000000000000e+00, TOL));
assert(isequalRel(d5421,         0.000000000000e+00, TOL));
assert(isequalRel(d5433,         0.000000000000e+00, TOL));
assert(isequalRel(dedt,          9.928697389680e-11, TOL));
assert(isequalRel(didt,          3.031124826307e-08, TOL));
assert(isequalRel(dmdt,         -1.325603345647e-07, TOL));
assert(isequalRel(dndt,          0.000000000000e+00, TOL));
assert(isequalRel(dnodt,         1.822046740261e-08, TOL));
assert(isequalRel(domdt,         4.338936906528e-08, TOL));
assert(isequalRel(del1,         -6.446921893630e-13, TOL));
assert(isequalRel(del2,          1.431037712307e-11, TOL));
assert(isequalRel(del3,          2.011847944584e-12, TOL));
assert(isequalRel(xfact,        -4.375013627469e-03, TOL));
assert(isequalRel(xlamo,         2.631376049241e+00, TOL));
assert(isequalRel(xli,           2.631376049241e+00, TOL));
assert(isequalRel(xni,           4.397108759492e-03, TOL));
# 24208

[em,     argpm,  inclm,  mm,     nm,     nodem, irez,...
 atime,  d2201,  d2211,  d3210,  d3222,  d4410,  d4422,...
 d5220,  d5232,  d5421,  d5433,  dedt,   didt,   dmdt,...
 dndt,   dnodt,  domdt,  del1,   del2,   del3,   xfact,...
 xlamo,  xli,    xni]...
= dsinit( ...
 9.999999999756e-01,  3.115225000000e-08,  2.710391608592e-01, -2.902754621049e-07, -5.482067443771e-05,  1.096413471676e-04,  1.096413454598e-04,...
-6.378753298339e-02,  6.981317007921e-06, -1.807247749069e-06, -3.413121445456e-04,  6.826242784585e-04,  6.826242678259e-04, -2.876970046754e-02,...
 1.333992996164e+01,  4.892059732956e+00,  1.689817110256e+00,  2.754638380722e-01, -1.338739623226e+00,  3.722456902921e-01,  8.253714037282e+00,...
-1.071983687153e+00,  0.000000000000e+00,  0.000000000000e+00,  4.036986406591e-01,  3.964236143225e-01,  4.375160342650e-03,  4.374997775854e-03,...
 4.255350081140e+00, -1.625870617371e-07,  1.625931017325e-07,  1.453742738580e+01,  3.006154336733e+00,  2.231085072369e+00,...
-2.105266627735e-01, -1.762284682913e-01, -1.198590634013e+00,  9.539627269283e+00, -2.735935826075e+00,  1.765000000000e-04,  0.000000000000e+00,...
 6.981317007977e-06,  0.000000000000e+00,  4.374997775854e-03,  0.000000000000e+00,  1.765000000000e-04,  3.115225000000e-08);
assert(isequalRel(em,            1.765000000000e-04, TOL));
assert(isequalRel(argpm,         0.000000000000e+00, TOL));
assert(isequalRel(inclm,         6.981317007977e-06, TOL));
assert(isequalRel(mm,            0.000000000000e+00, TOL));
assert(isequalRel(nm,            4.374997775854e-03, TOL));
assert(isequalRel(nodem,         0.000000000000e+00, TOL));
assert(isequalRel(irez,          1.000000000000e+00, TOL));
assert(isequalRel(atime,         0.000000000000e+00, TOL));
assert(isequalRel(d2201,         0.000000000000e+00, TOL));
assert(isequalRel(d2211,         0.000000000000e+00, TOL));
assert(isequalRel(d3210,         0.000000000000e+00, TOL));
assert(isequalRel(d3222,         0.000000000000e+00, TOL));
assert(isequalRel(d4410,         0.000000000000e+00, TOL));
assert(isequalRel(d4422,         0.000000000000e+00, TOL));
assert(isequalRel(d5220,         0.000000000000e+00, TOL));
assert(isequalRel(d5232,         0.000000000000e+00, TOL));
assert(isequalRel(d5421,         0.000000000000e+00, TOL));
assert(isequalRel(d5433,         0.000000000000e+00, TOL));
assert(isequalRel(dedt,          3.553156778959e-12, TOL));
assert(isequalRel(didt,         -2.555341579158e-08, TOL));
assert(isequalRel(dmdt,         -9.603349062976e-08, TOL));
assert(isequalRel(dndt,          0.000000000000e+00, TOL));
assert(isequalRel(dnodt,         0.000000000000e+00, TOL));
assert(isequalRel(domdt,         2.359014000576e-08, TOL));
assert(isequalRel(del1,         -6.397483834459e-13, TOL));
assert(isequalRel(del2,          1.410403339869e-11, TOL));
assert(isequalRel(del3,          1.978471517958e-12, TOL));
assert(isequalRel(xfact,        -4.375016371464e-03, TOL));
assert(isequalRel(xlamo,         4.519114215663e+00, TOL));
assert(isequalRel(xli,           4.519114215663e+00, TOL));
assert(isequalRel(xni,           4.374997775854e-03, TOL));
# 25954

[em,     argpm,  inclm,  mm,     nm,     nodem, irez,...
 atime,  d2201,  d2211,  d3210,  d3222,  d4410,  d4422,...
 d5220,  d5232,  d5421,  d5433,  dedt,   didt,   dmdt,...
 dndt,   dnodt,  domdt,  del1,   del2,   del3,   xfact,...
 xlamo,  xli,    xni]...
= dsinit( ...
 9.999999590350e-01,  1.101576100000e-07,  1.504114277393e+00, -5.458354928034e-07, -5.481927818934e-05,  1.096385503399e-04,  1.096385443012e-04,...
 3.134894679716e-02,  2.862339934185e-04, -3.398358092612e-06, -3.413034515383e-04,  6.826068654794e-04,  6.826068278822e-04,  2.000630099778e-02,...
 3.956575789077e+00,  1.652997143817e+01,  2.076153554075e+00,  1.098972257350e-01, -5.818957556802e-01,  4.481930162117e-01, -1.129325285006e+00,...
 1.056567498445e+01,  0.000000000000e+00,  0.000000000000e+00,  1.971276525301e+00,  3.181019641392e+00,  4.375271956456e-03,  4.375109379983e-03,...
 4.651962191022e+00, -1.625967594802e-07,  1.626027800693e-07,  1.692870278037e+01,  3.318943922456e+00,  2.623614504262e-01,...
 2.251844529048e+00, -9.937247788382e-01,  8.122714145074e-01,  1.111024835979e+01, -1.489207064283e+00,  3.319000000000e-04,  0.000000000000e+00,...
 2.862339973271e-04,  0.000000000000e+00,  4.375109379983e-03,  0.000000000000e+00,  3.319000000000e-04,  1.101576100000e-07);
assert(isequalRel(em,            3.319000000000e-04, TOL));
assert(isequalRel(argpm,         0.000000000000e+00, TOL));
assert(isequalRel(inclm,         2.862339973271e-04, TOL));
assert(isequalRel(mm,            0.000000000000e+00, TOL));
assert(isequalRel(nm,            4.375109379983e-03, TOL));
assert(isequalRel(nodem,         0.000000000000e+00, TOL));
assert(isequalRel(irez,          1.000000000000e+00, TOL));
assert(isequalRel(atime,         0.000000000000e+00, TOL));
assert(isequalRel(d2201,         0.000000000000e+00, TOL));
assert(isequalRel(d2211,         0.000000000000e+00, TOL));
assert(isequalRel(d3210,         0.000000000000e+00, TOL));
assert(isequalRel(d3222,         0.000000000000e+00, TOL));
assert(isequalRel(d4410,         0.000000000000e+00, TOL));
assert(isequalRel(d4422,         0.000000000000e+00, TOL));
assert(isequalRel(d5220,         0.000000000000e+00, TOL));
assert(isequalRel(d5232,         0.000000000000e+00, TOL));
assert(isequalRel(d5421,         0.000000000000e+00, TOL));
assert(isequalRel(d5433,         0.000000000000e+00, TOL));
assert(isequalRel(dedt,         -3.521807114582e-12, TOL));
assert(isequalRel(didt,         -3.073811485140e-08, TOL));
assert(isequalRel(dmdt,         -1.613621211138e-07, TOL));
assert(isequalRel(dndt,          0.000000000000e+00, TOL));
assert(isequalRel(dnodt,         0.000000000000e+00, TOL));
assert(isequalRel(domdt,         9.088792566710e-08, TOL));
assert(isequalRel(del1,         -6.398136216901e-13, TOL));
assert(isequalRel(del2,          1.410522936173e-11, TOL));
assert(isequalRel(del3,          1.978672345716e-12, TOL));
assert(isequalRel(xfact,        -4.375014382954e-03, TOL));
assert(isequalRel(xlamo,         1.082634277327e+00, TOL));
assert(isequalRel(xli,           1.082634277327e+00, TOL));
assert(isequalRel(xni,           4.375109379983e-03, TOL));
# 26900

[em,     argpm,  inclm,  mm,     nm,     nodem, irez,...
 atime,  d2201,  d2211,  d3210,  d3222,  d4410,  d4422,...
 d5220,  d5232,  d5421,  d5433,  dedt,   didt,   dmdt,...
 dndt,   dnodt,  domdt,  del1,   del2,   del3,   xfact,...
 xlamo,  xli,    xni]...
= dsinit( ...
 3.669656121548e-01,  3.139223067713e-01,  2.159817024075e+00, -3.720978016674e-04, -3.226647047178e-05,  5.345251045300e-05,  4.427461125982e-05,...
 4.525325835392e-01,  9.302345077967e-01, -2.316671583676e-03, -2.008902361490e-04,  3.327939898804e-04,  2.756526196186e-04,  4.714471153965e-01,...
 4.938361689104e+00,  9.915361480964e+00,  3.805314774695e+00, -4.033107780993e+00,  3.078769405047e+00, -4.186982926525e+00,  1.829903197356e+00,...
 4.830822077162e+00,  0.000000000000e+00,  0.000000000000e+00,  3.853994597295e+00,  5.280959654819e+00,  8.973503564981e-03,  8.973959238486e-03,...
 4.121251198722e+00, -6.772847467554e-07, -9.789586434359e-07,  3.661706391172e+00,  1.237778093895e+01, -3.293349160083e+00,...
 3.205045658268e+00, -3.721535433952e+00,  3.127067944841e+00,  1.881696181512e+00,  5.733881237525e+00,  5.602877000000e-01,  0.000000000000e+00,...
 1.195051373450e+00,  0.000000000000e+00,  8.973959238486e-03,  0.000000000000e+00,  5.602877000000e-01,  3.139223067713e-01);
assert(isequalRel(em,            5.602877000000e-01, TOL));
assert(isequalRel(argpm,         0.000000000000e+00, TOL));
assert(isequalRel(inclm,         1.195051373450e+00, TOL));
assert(isequalRel(mm,            0.000000000000e+00, TOL));
assert(isequalRel(nm,            8.973959238486e-03, TOL));
assert(isequalRel(nodem,         0.000000000000e+00, TOL));
assert(isequalRel(irez,          2.000000000000e+00, TOL));
assert(isequalRel(atime,         0.000000000000e+00, TOL));
assert(isequalRel(d2201,        -9.786807233862e-12, TOL));
assert(isequalRel(d2211,         4.375070167297e-11, TOL));
assert(isequalRel(d3210,        -7.299736059955e-13, TOL));
assert(isequalRel(d3222,        -3.088972920727e-12, TOL));
assert(isequalRel(d4410,         1.175930799908e-12, TOL));
assert(isequalRel(d4422,         1.666014658389e-12, TOL));
assert(isequalRel(d5220,        -5.223073387126e-13, TOL));
assert(isequalRel(d5232,        -4.239623278319e-14, TOL));
assert(isequalRel(d5421,        -5.046358599919e-13, TOL));
assert(isequalRel(d5433,        -3.893572552863e-13, TOL));
assert(isequalRel(dedt,         -3.971152052616e-08, TOL));
assert(isequalRel(didt,          9.978447336132e-10, TOL));
assert(isequalRel(dmdt,          2.773996268752e-09, TOL));
assert(isequalRel(dndt,          0.000000000000e+00, TOL));
assert(isequalRel(dnodt,        -6.124174505388e-09, TOL));
assert(isequalRel(domdt,         1.574985894206e-08, TOL));
assert(isequalRel(del1,          0.000000000000e+00, TOL));
assert(isequalRel(del2,          0.000000000000e+00, TOL));
assert(isequalRel(del3,          0.000000000000e+00, TOL));
assert(isequalRel(xfact,        -8.752357893374e-03, TOL));
assert(isequalRel(xlamo,         5.815472857673e+00, TOL));
assert(isequalRel(xli,           5.815472857673e+00, TOL));
assert(isequalRel(xni,           8.973959238486e-03, TOL));
# 26975
# 28057

[em,     argpm,  inclm,  mm,     nm,     nodem, irez,...
 atime,  d2201,  d2211,  d3210,  d3222,  d4410,  d4422,...
 d5220,  d5232,  d5421,  d5433,  dedt,   didt,   dmdt,...
 dndt,   dnodt,  domdt,  del1,   del2,   del3,   xfact,...
 xlamo,  xli,    xni]...
= dsinit( ...
 5.774330664585e-01,  2.352832036000e-05,  4.647183479530e+00, -3.988100801283e-06, -2.740688187581e-05,  5.481311890993e-05,  5.481247407583e-05,...
 1.233438061238e-01,  8.164380281199e-01, -2.482981559624e-05, -1.706345593936e-04,  3.412651040191e-04,  3.412610892981e-04,  1.105337187989e-01,...
 8.767976650646e+00,  6.169258803781e+00, -1.152824021952e+00,  2.246796171257e+00, -1.154475187594e+00, -1.523900599171e+00,  3.250295769937e+00,...
 1.892522670385e+00,  0.000000000000e+00,  0.000000000000e+00,  2.059978512381e+00,  1.626058686901e+00,  8.751201649839e-03,  8.751201528747e-03,...
 5.669000452744e+00, -4.732303306962e-07, -1.999135774132e-07,  3.157998007190e+00,  1.302286796280e+01,  2.120494801971e+00,...
-7.545400183037e-01, -3.322838238711e-01, -2.102528269689e+00, -1.937886829300e+00,  8.019981829044e+00,  4.850600000000e-03,  0.000000000000e+00,...
 9.552152089580e-01,  0.000000000000e+00,  8.751201528747e-03,  0.000000000000e+00,  4.850600000000e-03,  2.352832036000e-05);
assert(isequalRel(em,            4.850600000000e-03, TOL));
assert(isequalRel(argpm,         0.000000000000e+00, TOL));
assert(isequalRel(inclm,         9.552152089580e-01, TOL));
assert(isequalRel(mm,            0.000000000000e+00, TOL));
assert(isequalRel(nm,            8.751201528747e-03, TOL));
assert(isequalRel(nodem,         0.000000000000e+00, TOL));
assert(isequalRel(irez,          0.000000000000e+00, TOL));
assert(isequalRel(atime,         0.000000000000e+00, TOL));
assert(isequalRel(d2201,         0.000000000000e+00, TOL));
assert(isequalRel(d2211,         0.000000000000e+00, TOL));
assert(isequalRel(d3210,         0.000000000000e+00, TOL));
assert(isequalRel(d3222,         0.000000000000e+00, TOL));
assert(isequalRel(d4410,         0.000000000000e+00, TOL));
assert(isequalRel(d4422,         0.000000000000e+00, TOL));
assert(isequalRel(d5220,         0.000000000000e+00, TOL));
assert(isequalRel(d5232,         0.000000000000e+00, TOL));
assert(isequalRel(d5421,         0.000000000000e+00, TOL));
assert(isequalRel(d5433,         0.000000000000e+00, TOL));
assert(isequalRel(dedt,         -1.106805331423e-10, TOL));
assert(isequalRel(didt,         -8.158095760647e-09, TOL));
assert(isequalRel(dmdt,         -2.274847457650e-08, TOL));
assert(isequalRel(dndt,          0.000000000000e+00, TOL));
assert(isequalRel(dnodt,        -1.962977385408e-08, TOL));
assert(isequalRel(domdt,         8.552991333113e-09, TOL));
assert(isequalRel(del1,          0.000000000000e+00, TOL));
assert(isequalRel(del2,          0.000000000000e+00, TOL));
assert(isequalRel(del3,          0.000000000000e+00, TOL));
assert(isequalRel(xfact,         0.000000000000e+00, TOL));
assert(isequalRel(xlamo,         0.000000000000e+00, TOL));
assert(isequalRel(xli,           0.000000000000e+00, TOL));
assert(isequalRel(xni,           0.000000000000e+00, TOL));
# 28129
# 28350
# *** error: t:= 1560.000000 *** code =   1

[em,     argpm,  inclm,  mm,     nm,     nodem, irez,...
 atime,  d2201,  d2211,  d3210,  d3222,  d4410,  d4422,...
 d5220,  d5232,  d5421,  d5433,  dedt,   didt,   dmdt,...
 dndt,   dnodt,  domdt,  del1,   del2,   del3,   xfact,...
 xlamo,  xli,    xni]...
= dsinit( ...
 8.786504992963e-01,  3.905066339681e-01,  2.971510317983e+00, -2.120658619569e-04, -1.855950189595e-05,  2.897882708615e-05,  2.262378656488e-05,...
 2.722596005818e-01,  4.774654962260e-01, -1.320316739475e-03, -1.155509934670e-04,  1.804214508603e-04,  1.408551279130e-04,  2.346453190940e-01,...
 1.776222957970e+01,  1.577591992681e+00, -5.936254038933e+00,  1.169202637163e+00, -7.594596902903e-01, -1.449580783613e+00,  9.294909311397e+00,...
-1.975013243152e+00,  0.000000000000e+00,  0.000000000000e+00,  3.606984295022e+00,  3.715744890972e+00,  1.655781496506e-02,  1.655279727416e-02,...
 2.006838915138e+00, -8.592532289781e-06,  5.392137164581e-06,  5.938562976121e+00,  1.175748702715e+01,  2.138574136804e+00,...
-7.324682871238e+00, -5.405862432734e-01, -1.640247637107e+00,  3.189234780521e-01,  6.127782826163e+00,  6.249053000000e-01,  0.000000000000e+00,...
 4.977679026688e-01,  0.000000000000e+00,  1.655279727416e-02,  0.000000000000e+00,  6.249053000000e-01,  3.905066339681e-01);
assert(isequalRel(em,            6.249053000000e-01, TOL));
assert(isequalRel(argpm,         0.000000000000e+00, TOL));
assert(isequalRel(inclm,         4.977679026688e-01, TOL));
assert(isequalRel(mm,            0.000000000000e+00, TOL));
assert(isequalRel(nm,            1.655279727416e-02, TOL));
assert(isequalRel(nodem,         0.000000000000e+00, TOL));
assert(isequalRel(irez,          0.000000000000e+00, TOL));
assert(isequalRel(atime,         0.000000000000e+00, TOL));
assert(isequalRel(d2201,         0.000000000000e+00, TOL));
assert(isequalRel(d2211,         0.000000000000e+00, TOL));
assert(isequalRel(d3210,         0.000000000000e+00, TOL));
assert(isequalRel(d3222,         0.000000000000e+00, TOL));
assert(isequalRel(d4410,         0.000000000000e+00, TOL));
assert(isequalRel(d4422,         0.000000000000e+00, TOL));
assert(isequalRel(d5220,         0.000000000000e+00, TOL));
assert(isequalRel(d5232,         0.000000000000e+00, TOL));
assert(isequalRel(d5421,         0.000000000000e+00, TOL));
assert(isequalRel(d5433,         0.000000000000e+00, TOL));
assert(isequalRel(dedt,         -1.284368777035e-08, TOL));
assert(isequalRel(didt,          2.182189987367e-08, TOL));
assert(isequalRel(dmdt,         -1.266772856942e-08, TOL));
assert(isequalRel(dndt,          0.000000000000e+00, TOL));
assert(isequalRel(dnodt,        -1.981003275567e-08, TOL));
assert(isequalRel(domdt,         2.122734368629e-08, TOL));
assert(isequalRel(del1,          0.000000000000e+00, TOL));
assert(isequalRel(del2,          0.000000000000e+00, TOL));
assert(isequalRel(del3,          0.000000000000e+00, TOL));
assert(isequalRel(xfact,         0.000000000000e+00, TOL));
assert(isequalRel(xlamo,         0.000000000000e+00, TOL));
assert(isequalRel(xli,           0.000000000000e+00, TOL));
assert(isequalRel(xni,           0.000000000000e+00, TOL));
# 28623

[em,     argpm,  inclm,  mm,     nm,     nodem, irez,...
 atime,  d2201,  d2211,  d3210,  d3222,  d4410,  d4422,...
 d5220,  d5232,  d5421,  d5433,  dedt,   didt,   dmdt,...
 dndt,   dnodt,  domdt,  del1,   del2,   del3,   xfact,...
 xlamo,  xli,    xni]...
= dsinit( ...
 9.999999994502e-01,  1.122250000000e-09,  2.407123197766e-01, -5.509538844302e-08, -5.482128209438e-05,  1.096425641272e-04,  1.096425640657e-04,...
 1.006889932162e-01,  3.316125578181e-05, -3.430225070548e-07, -3.413159278008e-04,  6.826318552185e-04,  6.826318548355e-04,  6.952479533275e-02,...
 1.397388821705e+01,  4.797029487281e+00,  2.148442577894e+00, -5.343190451679e-02,  1.782467849547e-01,  4.598284476190e-01,  8.887642026753e+00,...
-1.167039270606e+00,  0.000000000000e+00,  0.000000000000e+00,  1.422713433736e+00,  9.712827100519e-01,  4.375111778864e-03,  4.374949216286e-03,...
 5.008105351538e+00, -1.625828407295e-07,  1.625888802220e-07,  9.646010296956e+00,  8.132201558755e+00,  3.027985928786e-01,...
 2.108163619135e+00, -5.607883259758e-01,  1.297708424089e+00,  3.714486889036e+00,  3.437622249834e+00,  3.350000000000e-05,  0.000000000000e+00,...
 3.316125578789e-05,  0.000000000000e+00,  4.374949216286e-03,  0.000000000000e+00,  3.350000000000e-05,  1.122250000000e-09);
assert(isequalRel(em,            3.350000000000e-05, TOL));
assert(isequalRel(argpm,         0.000000000000e+00, TOL));
assert(isequalRel(inclm,         3.316125578789e-05, TOL));
assert(isequalRel(mm,            0.000000000000e+00, TOL));
assert(isequalRel(nm,            4.374949216286e-03, TOL));
assert(isequalRel(nodem,         0.000000000000e+00, TOL));
assert(isequalRel(irez,          1.000000000000e+00, TOL));
assert(isequalRel(atime,         0.000000000000e+00, TOL));
assert(isequalRel(d2201,         0.000000000000e+00, TOL));
assert(isequalRel(d2211,         0.000000000000e+00, TOL));
assert(isequalRel(d3210,         0.000000000000e+00, TOL));
assert(isequalRel(d3222,         0.000000000000e+00, TOL));
assert(isequalRel(d4410,         0.000000000000e+00, TOL));
assert(isequalRel(d4422,         0.000000000000e+00, TOL));
assert(isequalRel(d5220,         0.000000000000e+00, TOL));
assert(isequalRel(d5232,         0.000000000000e+00, TOL));
assert(isequalRel(d5421,         0.000000000000e+00, TOL));
assert(isequalRel(d5433,         0.000000000000e+00, TOL));
assert(isequalRel(dedt,         -1.163351218344e-12, TOL));
assert(isequalRel(didt,         -2.947177196394e-08, TOL));
assert(isequalRel(dmdt,         -1.045030124521e-07, TOL));
assert(isequalRel(dndt,          0.000000000000e+00, TOL));
assert(isequalRel(dnodt,         0.000000000000e+00, TOL));
assert(isequalRel(domdt,         3.403399555001e-08, TOL));
assert(isequalRel(del1,         -6.397199405204e-13, TOL));
assert(isequalRel(del2,          1.410351263886e-11, TOL));
assert(isequalRel(del3,          1.978384035449e-12, TOL));
assert(isequalRel(xfact,        -4.375014405570e-03, TOL));
assert(isequalRel(xlamo,         4.797386947630e+00, TOL));
assert(isequalRel(xli,           4.797386947630e+00, TOL));
assert(isequalRel(xni,           4.374949216286e-03, TOL));
# 28626
# 28872
# 29141
# *** error: t:= 440.000000 *** code =   6
# 29238
# 88888

