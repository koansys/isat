/*global
  module: true, test: true, equal: true, notEqual: true, ok: true,
  rv2coe: true
 */

module('rv2coe');

test('isEqualRel', function () {
    expect(4);
    ok(isequalRel(1, 1, 0.1));
    ok(isequalRel(10, 10, 0.1));
    ok(isequalRel(10, 11, 0.1));
    ok(! isequalRel(10, 12, 0.1));
});

test('[-7.154031202016e+03, -3.783176825037e+03, -3.536194122942e+03], [4.741887408996e+00, -4.151817765374e+00, -2.093935424907e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-7.154031202016e+03, -3.783176825037e+03, -3.536194122942e+03], [4.741887408996e+00, -4.151817765374e+00, -2.093935424907e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       8.337614659522e+03, TOL));
         ok(isequalRel(a,       8.635348839123e+03, TOL));
         ok(isequalRel(ecc,     1.856839661347e-01, TOL));
         ok(isequalRel(incl,    5.980902747186e-01, TOL));
         ok(isequalRel(omega,   6.073396448233e+00, TOL));
         ok(isequalRel(argp,    5.809453981565e+00, TOL));
         ok(isequalRel(nu,      4.406401781136e+00, TOL));
         ok(isequalRel(m,       4.773972245877e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });


test('[-7.134593401193e+03, 6.531686413336e+03, 3.260271864826e+03], [-4.113793027161e+00, -2.911922038623e+00, -2.557327850931e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-7.134593401193e+03, 6.531686413336e+03, 3.260271864826e+03], [-4.113793027161e+00, -2.911922038623e+00, -2.557327850931e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       8.339853334747e+03, TOL));
         ok(isequalRel(a,       8.635866960793e+03, TOL));
         ok(isequalRel(ecc,     1.851411170975e-01, TOL));
         ok(isequalRel(incl,    5.981716557276e-01, TOL));
         ok(isequalRel(omega,   6.059255141749e+00, TOL));
         ok(isequalRel(argp,    5.833241026263e+00, TOL));
         ok(isequalRel(nu,      2.988460057544e+00, TOL));
         ok(isequalRel(m,       2.923112339227e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[5.568539011812e+03, 4.492069925906e+03, 3.863876419829e+03], [-4.209106475593e+00, 5.159719888480e+00, 2.744852979555e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([5.568539011812e+03, 4.492069925906e+03, 3.863876419829e+03], [-4.209106475593e+00, 5.159719888480e+00, 2.744852979555e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       8.335900847914e+03, TOL));
         ok(isequalRel(a,       8.633623710033e+03, TOL));
         ok(isequalRel(ecc,     1.856989869471e-01, TOL));
         ok(isequalRel(incl,    5.979988736559e-01, TOL));
         ok(isequalRel(omega,   6.046595816048e+00, TOL));
         ok(isequalRel(argp,    5.853141953317e+00, TOL));
         ok(isequalRel(nu,      1.434828952104e+00, TOL));
         ok(isequalRel(m,       1.075720867283e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-9.385592394293e+02, -6.268187488314e+03, -4.294029247512e+03], [7.536105209256e+00, -4.271277071235e-01, 9.898780795592e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-9.385592394293e+02, -6.268187488314e+03, -4.294029247512e+03], [7.536105209256e+00, -4.271277071235e-01, 9.898780795592e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       8.334109642124e+03, TOL));
         ok(isequalRel(a,       8.632108227126e+03, TOL));
         ok(isequalRel(ecc,     1.858012633167e-01, TOL));
         ok(isequalRel(incl,    5.978749261546e-01, TOL));
         ok(isequalRel(omega,   6.032792937708e+00, TOL));
         ok(isequalRel(argp,    5.870225097414e+00, TOL));
         ok(isequalRel(nu,      5.209551568087e+00, TOL));
         ok(isequalRel(m,       5.514322334927e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-9.680561217281e+03, 2.802477713539e+03, 1.241068803824e+02], [-9.058741021590e-01, -4.659467969920e+00, -3.227347516713e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-9.680561217281e+03, 2.802477713539e+03, 1.241068803824e+02], [-9.058741021590e-01, -4.659467969920e+00, -3.227347516713e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       8.341319539571e+03, TOL));
         ok(isequalRel(a,       8.637127872899e+03, TOL));
         ok(isequalRel(ecc,     1.850633960634e-01, TOL));
         ok(isequalRel(incl,    5.983138255788e-01, TOL));
         ok(isequalRel(omega,   6.019459854049e+00, TOL));
         ok(isequalRel(argp,    5.889106665837e+00, TOL));
         ok(isequalRel(nu,      3.513807794463e+00, TOL));
         ok(isequalRel(m,       3.668047110329e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.901979698785e+02, 7.746966536135e+03, 5.110006754119e+03], [-6.112325142014e+00, 1.527008183520e+00, -1.391523578826e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.901979698785e+02, 7.746966536135e+03, 5.110006754119e+03], [-6.112325142014e+00, 1.527008183520e+00, -1.391523578826e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       8.335624767687e+03, TOL));
         ok(isequalRel(a,       8.633138109535e+03, TOL));
         ok(isequalRel(ecc,     1.856388540272e-01, TOL));
         ok(isequalRel(incl,    5.978910438079e-01, TOL));
         ok(isequalRel(omega,   6.005935102877e+00, TOL));
         ok(isequalRel(argp,    5.911739205734e+00, TOL));
         ok(isequalRel(nu,      2.152516069731e+00, TOL));
         ok(isequalRel(m,       1.818217088405e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[5.579556401157e+03, -3.995613967894e+03, -1.518821089660e+03], [4.767927482844e+00, 5.123185300954e+00, 4.276837354502e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([5.579556401157e+03, -3.995613967894e+03, -1.518821089660e+03], [4.767927482844e+00, 5.123185300954e+00, 4.276837354502e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       8.337409961697e+03, TOL));
         ok(isequalRel(a,       8.637313842212e+03, TOL));
         ok(isequalRel(ecc,     1.863381127011e-01, TOL));
         ok(isequalRel(incl,    5.982488709865e-01, TOL));
         ok(isequalRel(omega,   5.992435248773e+00, TOL));
         ok(isequalRel(argp,    5.929513417044e+00, TOL));
         ok(isequalRel(nu,      6.243079099420e+00, TOL));
         ok(isequalRel(m,       6.256157557215e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-8.650730822189e+03, -1.914938115252e+03, -3.007036034428e+03], [3.067165126543e+00, -4.828384068444e+00, -2.515322835722e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-8.650730822189e+03, -1.914938115252e+03, -3.007036034428e+03], [3.067165126543e+00, -4.828384068444e+00, -2.515322835722e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       8.338816749353e+03, TOL));
         ok(isequalRel(a,       8.636107820942e+03, TOL));
         ok(isequalRel(ecc,     1.855375875133e-01, TOL));
         ok(isequalRel(incl,    5.981698818663e-01, TOL));
         ok(isequalRel(omega,   5.979700119383e+00, TOL));
         ok(isequalRel(argp,    5.946164964733e+00, TOL));
         ok(isequalRel(nu,      4.085982404991e+00, TOL));
         ok(isequalRel(m,       4.411796032899e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-5.429792041645e+03, 7.574364937924e+03, 3.747393052359e+03], [-4.999442109604e+00, -1.800561422305e+00, -2.229392830241e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-5.429792041645e+03, 7.574364937924e+03, 3.747393052359e+03], [-4.999442109604e+00, -1.800561422305e+00, -2.229392830241e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       8.338874275371e+03, TOL));
         ok(isequalRel(a,       8.635480920301e+03, TOL));
         ok(isequalRel(ecc,     1.853306179043e-01, TOL));
         ok(isequalRel(incl,    5.981197823301e-01, TOL));
         ok(isequalRel(omega,   5.965560466646e+00, TOL));
         ok(isequalRel(argp,    5.970931228559e+00, TOL));
         ok(isequalRel(nu,      2.729639278624e+00, TOL));
         ok(isequalRel(m,       2.559979838351e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[6.759045837218e+03, 2.001581982197e+03, 2.783551925329e+03], [-2.180993947177e+00, 6.402085603047e+00, 3.644723951605e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([6.759045837218e+03, 2.001581982197e+03, 2.783551925329e+03], [-2.180993947177e+00, 6.402085603047e+00, 3.644723951605e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       8.336546422834e+03, TOL));
         ok(isequalRel(a,       8.635205457172e+03, TOL));
         ok(isequalRel(ecc,     1.859736824913e-01, TOL));
         ok(isequalRel(incl,    5.981257682503e-01, TOL));
         ok(isequalRel(omega,   5.952956941884e+00, TOL));
         ok(isequalRel(argp,    5.990484218242e+00, TOL));
         ok(isequalRel(nu,      1.003249486494e+00, TOL));
         ok(isequalRel(m,       7.128530079849e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-3.791445315589e+03, -5.712956178939e+03, -4.533486307144e+03], [6.668817492548e+00, -2.516382326527e+00, -8.238435374721e-02], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-3.791445315589e+03, -5.712956178939e+03, -4.533486307144e+03], [6.668817492548e+00, -2.516382326527e+00, -8.238435374721e-02], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       8.334548537428e+03, TOL));
         ok(isequalRel(a,       8.632738289754e+03, TOL));
         ok(isequalRel(ecc,     1.858540672265e-01, TOL));
         ok(isequalRel(incl,    5.978894533793e-01, TOL));
         ok(isequalRel(omega,   5.939340690599e+00, TOL));
         ok(isequalRel(argp,    6.006698438145e+00, TOL));
         ok(isequalRel(nu,      4.787559941164e+00, TOL));
         ok(isequalRel(m,       5.152273889120e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-9.060473735694e+03, 4.658709525023e+03, 8.136867315342e+02], [-2.232832782743e+00, -4.110453489937e+00, -3.157345433457e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-9.060473735694e+03, 4.658709525023e+03, 8.136867315342e+02], [-2.232832782743e+00, -4.110453489937e+00, -3.157345433457e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       8.341157864704e+03, TOL));
         ok(isequalRel(a,       8.637011478534e+03, TOL));
         ok(isequalRel(ecc,     1.850788067685e-01, TOL));
         ok(isequalRel(incl,    5.983052019050e-01, TOL));
         ok(isequalRel(omega,   5.925695230329e+00, TOL));
         ok(isequalRel(argp,    6.027322560784e+00, TOL));
         ok(isequalRel(nu,      3.255632011792e+00, TOL));
         ok(isequalRel(m,       3.304406322893e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
         // 4632
     });

test('[-2.902002587128e+04, 1.381984419063e+04, -5.713336791827e+03], [-1.768068389990e+00, -3.235371192013e+00, -3.952061354973e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.902002587128e+04, 1.381984419063e+04, -5.713336791827e+03], [-1.768068389990e+00, -3.235371192013e+00, -3.952061354973e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       3.656820913603e+04, TOL));
         ok(isequalRel(a,       3.735948645844e+04, TOL));
         ok(isequalRel(ecc,     1.455338138953e-01, TOL));
         ok(isequalRel(incl,    1.999983374611e-01, TOL));
         ok(isequalRel(omega,   4.769426198266e+00, TOL));
         ok(isequalRel(argp,    3.619511818339e+00, TOL));
         ok(isequalRel(nu,      5.998398344535e-01, TOL));
         ok(isequalRel(m,       4.494239015219e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-3.298256870101e+04, -1.112554996609e+04, -6.803284727715e+03], [6.174469956131e-01, -3.379240040601e+00, 8.595470665877e-02], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-3.298256870101e+04, -1.112554996609e+04, -6.803284727715e+03], [6.174469956131e-01, -3.379240040601e+00, 8.595470665877e-02], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       3.656844882590e+04, TOL));
         ok(isequalRel(a,       3.735947496585e+04, TOL));
         ok(isequalRel(ecc,     1.455107353728e-01, TOL));
         ok(isequalRel(incl,    1.999949583820e-01, TOL));
         ok(isequalRel(omega,   4.769357582559e+00, TOL));
         ok(isequalRel(argp,    3.619918488383e+00, TOL));
         ok(isequalRel(nu,      1.355729535740e+00, TOL));
         ok(isequalRel(m,       1.078829295587e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.209768730513e+04, -3.158313829284e+04, -4.836343293282e+03], [2.230597499085e+00, -2.166594666868e+00, 4.264430696850e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.209768730513e+04, -3.158313829284e+04, -4.836343293282e+03], [2.230597499085e+00, -2.166594666868e+00, 4.264430696850e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       3.656883532036e+04, TOL));
         ok(isequalRel(a,       3.735955835966e+04, TOL));
         ok(isequalRel(ecc,     1.454826923634e-01, TOL));
         ok(isequalRel(incl,    1.999982410405e-01, TOL));
         ok(isequalRel(omega,   4.769309125784e+00, TOL));
         ok(isequalRel(argp,    3.620008440095e+00, TOL));
         ok(isequalRel(nu,      1.985943404750e+00, TOL));
         ok(isequalRel(m,       1.708338309375e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.512994694545e+04, -3.690774526221e+04, -3.487562567009e+03], [2.581167186918e+00, -1.524204736894e+00, 5.048057626261e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.512994694545e+04, -3.690774526221e+04, -3.487562567009e+03], [2.581167186918e+00, -1.524204736894e+00, 5.048057626261e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       3.656897426183e+04, TOL));
         ok(isequalRel(a,       3.735958202308e+04, TOL));
         ok(isequalRel(ecc,     1.454720410785e-01, TOL));
         ok(isequalRel(incl,    1.999993969000e-01, TOL));
         ok(isequalRel(omega,   4.769299004837e+00, TOL));
         ok(isequalRel(argp,    3.620001929448e+00, TOL));
         ok(isequalRel(nu,      2.209343273602e+00, TOL));
         ok(isequalRel(m,       1.960174868014e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
         // 6251
     });

test('[-3.935698000834e+03, 4.091098083655e+02, 5.471335773274e+03], [-3.374784182643e+00, -6.635211043490e+00, -1.942056221260e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-3.935698000834e+03, 4.091098083655e+02, 5.471335773274e+03], [-3.374784182643e+00, -6.635211043490e+00, -1.942056221260e+00], 3.986004418000e+05);
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();

         ok(isequalRel(p,       6.769876906222e+03, TOL));
         ok(isequalRel(a,       6.769931644780e+03, TOL));
         ok(isequalRel(ecc,     2.843508525266e-03, TOL));
         ok(isequalRel(incl,    1.013035251741e+00, TOL));
         ok(isequalRel(omega,   9.368028593385e-01, TOL));
         ok(isequalRel(argp,    2.276713783656e+00, TOL));
         ok(isequalRel(nu,      5.878252404382e+00, TOL));
         ok(isequalRel(m,       5.880488460609e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.675127669149e+03, -5.683304323518e+03, -3.286215109367e+03], [5.282496924661e+00, 1.508674258574e+00, -5.354872977678e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.675127669149e+03, -5.683304323518e+03, -3.286215109367e+03], [5.282496924661e+00, 1.508674258574e+00, -5.354872977678e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.778079433750e+03, TOL));
         ok(isequalRel(a,       6.778156694783e+03, TOL));
         ok(isequalRel(ecc,     3.376171121503e-03, TOL));
         ok(isequalRel(incl,    1.013413436913e+00, TOL));
         ok(isequalRel(omega,   9.311742339588e-01, TOL));
         ok(isequalRel(argp,    2.299284146150e+00, TOL));
         ok(isequalRel(nu,      1.450679689026e+00, TOL));
         ok(isequalRel(m,       1.443978045695e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[4.993626428356e+03, 2.890549699000e+03, -3.600401456269e+03], [3.473334286680e-01, 5.707031557193e+00, 5.070699637640e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([4.993626428356e+03, 2.890549699000e+03, -3.600401456269e+03], [3.473334286680e-01, 5.707031557193e+00, 5.070699637640e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.777193050658e+03, TOL));
         ok(isequalRel(a,       6.777278180813e+03, TOL));
         ok(isequalRel(ecc,     3.544166013612e-03, TOL));
         ok(isequalRel(incl,    1.013373051728e+00, TOL));
         ok(isequalRel(omega,   9.242447416178e-01, TOL));
         ok(isequalRel(argp,    2.328804938236e+00, TOL));
         ok(isequalRel(nu,      3.280757728716e+00, TOL));
         ok(isequalRel(m,       3.281743590394e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.115079595139e+03, 4.015116914910e+03, 5.326997277178e+03], [-5.524279443196e+00, -4.765738774072e+00, 2.402255961201e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.115079595139e+03, 4.015116914910e+03, 5.326997277178e+03], [-5.524279443196e+00, -4.765738774072e+00, 2.402255961201e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.770563679355e+03, TOL));
         ok(isequalRel(a,       6.770651429439e+03, TOL));
         ok(isequalRel(ecc,     3.600050068409e-03, TOL));
         ok(isequalRel(incl,    1.013067759456e+00, TOL));
         ok(isequalRel(omega,   9.186774191992e-01, TOL));
         ok(isequalRel(argp,    2.455296543895e+00, TOL));
         ok(isequalRel(nu,      5.017749103053e+00, TOL));
         ok(isequalRel(m,       5.024610533924e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-4.329100081975e+03, -5.176702879352e+03, 4.096531385745e+02], [2.858408303241e+00, -2.933091792054e+00, -6.509690396536e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-4.329100081975e+03, -5.176702879352e+03, 4.096531385745e+02], [2.858408303241e+00, -2.933091792054e+00, -6.509690396536e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.782582953194e+03, TOL));
         ok(isequalRel(a,       6.782705375244e+03, TOL));
         ok(isequalRel(ecc,     4.248428830090e-03, TOL));
         ok(isequalRel(incl,    1.013621234494e+00, TOL));
         ok(isequalRel(omega,   9.121592321497e-01, TOL));
         ok(isequalRel(argp,    2.365109240047e+00, TOL));
         ok(isequalRel(nu,      7.050316851707e-01, TOL));
         ok(isequalRel(m,       6.995385694840e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[3.692600300280e+03, -9.762426525530e+02, -5.623364474929e+03], [3.897257243214e+00, 6.415554948136e+00, 1.429112189770e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([3.692600300280e+03, -9.762426525530e+02, -5.623364474929e+03], [3.897257243214e+00, 6.415554948136e+00, 1.429112189770e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.769289850576e+03, TOL));
         ok(isequalRel(a,       6.769430032318e+03, TOL));
         ok(isequalRel(ecc,     4.550610606204e-03, TOL));
         ok(isequalRel(incl,    1.013010363345e+00, TOL));
         ok(isequalRel(omega,   9.058473258015e-01, TOL));
         ok(isequalRel(argp,    2.190327393900e+00, TOL));
         ok(isequalRel(nu,      2.746082539211e+00, TOL));
         ok(isequalRel(m,       2.742564957154e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.301835100373e+03, 5.723923945532e+03, 2.814615145803e+03], [-5.110924966238e+00, -7.645105585249e-01, 5.662120144737e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.301835100373e+03, 5.723923945532e+03, 2.814615145803e+03], [-5.110924966238e+00, -7.645105585249e-01, 5.662120144737e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.779285427736e+03, TOL));
         ok(isequalRel(a,       6.779390096225e+03, TOL));
         ok(isequalRel(ecc,     3.929277166681e-03, TOL));
         ok(isequalRel(incl,    1.013469946587e+00, TOL));
         ok(isequalRel(omega,   9.001357210780e-01, TOL));
         ok(isequalRel(argp,    2.151344297421e+00, TOL));
         ok(isequalRel(nu,      4.642871348913e+00, TOL));
         ok(isequalRel(m,       4.650712506846e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-4.990916379503e+03, -2.303425478800e+03, 3.920863355985e+03], [-9.934393720412e-01, -5.967458359673e+00, -4.759110855938e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-4.990916379503e+03, -2.303425478800e+03, 3.920863355985e+03], [-9.934393720412e-01, -5.967458359673e+00, -4.759110855938e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.776068246094e+03, TOL));
         ok(isequalRel(a,       6.776159929611e+03, TOL));
         ok(isequalRel(ecc,     3.678356420796e-03, TOL));
         ok(isequalRel(incl,    1.013321926123e+00, TOL));
         ok(isequalRel(omega,   8.932297244256e-01, TOL));
         ok(isequalRel(argp,    2.155131113255e+00, TOL));
         ok(isequalRel(nu,      2.327986184503e-01, TOL));
         ok(isequalRel(m,       2.311059586657e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[6.422776997684e+02, -4.332898219009e+03, -5.183315239096e+03], [5.720542578711e+00, 4.216573837773e+00, -2.846576139177e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([6.422776997684e+02, -4.332898219009e+03, -5.183315239096e+03], [5.720542578711e+00, 4.216573837773e+00, -2.846576139177e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.771252183858e+03, TOL));
         ok(isequalRel(a,       6.771348347948e+03, TOL));
         ok(isequalRel(ecc,     3.768503158891e-03, TOL));
         ok(isequalRel(incl,    1.013100966350e+00, TOL));
         ok(isequalRel(omega,   8.877067194273e-01, TOL));
         ok(isequalRel(argp,    2.064011444385e+00, TOL));
         ok(isequalRel(nu,      2.197801244803e+00, TOL));
         ok(isequalRel(m,       2.191687737705e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[4.719783357520e+03, 4.798069389959e+03, -9.435885106242e+02], [-2.294860662107e+00, 3.492499388528e+00, 6.408334723214e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([4.719783357520e+03, 4.798069389959e+03, -9.435885106242e+02], [-2.294860662107e+00, 3.492499388528e+00, 6.408334723214e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.782259792414e+03, TOL));
         ok(isequalRel(a,       6.782324755962e+03, TOL));
         ok(isequalRel(ecc,     3.094892579346e-03, TOL));
         ok(isequalRel(incl,    1.013607235269e+00, TOL));
         ok(isequalRel(omega,   8.810841009451e-01, TOL));
         ok(isequalRel(argp,    2.130274502983e+00, TOL));
         ok(isequalRel(nu,      3.988588600513e+00, TOL));
         ok(isequalRel(m,       3.993233706748e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-3.299169936023e+03, 1.576831683195e+03, 5.678678406385e+03], [-4.460347074024e+00, -6.202025195790e+00, -8.858745862876e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-3.299169936023e+03, 1.576831683195e+03, 5.678678406385e+03], [-4.460347074024e+00, -6.202025195790e+00, -8.858745862876e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.768851098485e+03, TOL));
         ok(isequalRel(a,       6.768905841491e+03, TOL));
         ok(isequalRel(ecc,     2.843839523788e-03, TOL));
         ok(isequalRel(incl,    1.012990081165e+00, TOL));
         ok(isequalRel(omega,   8.749046046695e-01, TOL));
         ok(isequalRel(argp,    2.402935600108e+00, TOL));
         ok(isequalRel(nu,      5.585413699649e+00, TOL));
         ok(isequalRel(m,       5.589062134074e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.777146823355e+03, -5.663160317077e+03, -2.462548891232e+03], [4.915493146039e+00, 1.233289920905e-01, -5.896495090701e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.777146823355e+03, -5.663160317077e+03, -2.462548891232e+03], [4.915493146039e+00, 1.233289920905e-01, -5.896495090701e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.780044196640e+03, TOL));
         ok(isequalRel(a,       6.780129465075e+03, TOL));
         ok(isequalRel(ecc,     3.546297390768e-03, TOL));
         ok(isequalRel(incl,    1.013505853264e+00, TOL));
         ok(isequalRel(omega,   8.690991120111e-01, TOL));
         ok(isequalRel(argp,    2.394405349129e+00, TOL));
         ok(isequalRel(nu,      1.190045223729e+00, TOL));
         ok(isequalRel(m,       1.183467074085e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[4.992315738931e+03, 1.716623567695e+03, -4.287860655812e+03], [1.640717188721e+00, 6.071570433629e+00, 4.338797930854e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([4.992315738931e+03, 1.716623567695e+03, -4.287860655812e+03], [1.640717188721e+00, 6.071570433629e+00, 4.338797930854e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.774858556821e+03, TOL));
         ok(isequalRel(a,       6.774960090039e+03, TOL));
         ok(isequalRel(ecc,     3.871245429332e-03, TOL));
         ok(isequalRel(incl,    1.013267839399e+00, TOL));
         ok(isequalRel(omega,   8.622243492097e-01, TOL));
         ok(isequalRel(argp,    2.350745170702e+00, TOL));
         ok(isequalRel(nu,      3.094940341490e+00, TOL));
         ok(isequalRel(m,       3.094578217478e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-8.223847547370e+00, 4.662215216680e+03, 4.905664118573e+03], [-5.891011273529e+00, -3.593173871921e+00, 3.365100460432e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-8.223847547370e+00, 4.662215216680e+03, 4.905664118573e+03], [-5.891011273529e+00, -3.593173871921e+00, 3.365100460432e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.772368134760e+03, TOL));
         ok(isequalRel(a,       6.772467514796e+03, TOL));
         ok(isequalRel(ecc,     3.830682076651e-03, TOL));
         ok(isequalRel(incl,    1.013152992595e+00, TOL));
         ok(isequalRel(omega,   8.567395900218e-01, TOL));
         ok(isequalRel(argp,    2.414193063760e+00, TOL));
         ok(isequalRel(nu,      4.893163296023e+00, TOL));
         ok(isequalRel(m,       4.900695907535e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-4.966201379626e+03, -4.379591550374e+03, 1.349333475022e+03], [1.763172580572e+00, -3.981456386823e+00, -6.343279442947e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-4.966201379626e+03, -4.379591550374e+03, 1.349333475022e+03], [1.763172580572e+00, -3.981456386823e+00, -6.343279442947e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.781832278443e+03, TOL));
         ok(isequalRel(a,       6.781957157950e+03, TOL));
         ok(isequalRel(ecc,     4.291094373757e-03, TOL));
         ok(isequalRel(incl,    1.013588759203e+00, TOL));
         ok(isequalRel(omega,   8.500260380786e-01, TOL));
         ok(isequalRel(argp,    2.324888457348e+00, TOL));
         ok(isequalRel(nu,      5.792132070155e-01, TOL));
         ok(isequalRel(m,       5.745282383129e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.954493903314e+03, -2.080659846504e+03, -5.754750380565e+03], [4.895893305769e+00, 5.858184321869e+00, 3.754748252299e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.954493903314e+03, -2.080659846504e+03, -5.754750380565e+03], [4.895893305769e+00, 5.858184321869e+00, 3.754748252299e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.768604353143e+03, TOL));
         ok(isequalRel(a,       6.768741430620e+03, TOL));
         ok(isequalRel(ecc,     4.500171741789e-03, TOL));
         ok(isequalRel(incl,    1.012980823664e+00, TOL));
         ok(isequalRel(omega,   8.439530767354e-01, TOL));
         ok(isequalRel(argp,    2.144241888415e+00, TOL));
         ok(isequalRel(nu,      2.628295360431e+00, TOL));
         ok(isequalRel(m,       2.623862696238e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[3.363287943208e+03, 5.559558411795e+03, 1.956055422663e+03], [-4.587378862766e+00, 5.919434032977e-01, 6.107838604574e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([3.363287943208e+03, 5.559558411795e+03, 1.956055422663e+03], [-4.587378862766e+00, 5.919434032977e-01, 6.107838604574e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.780981679930e+03, TOL));
         ok(isequalRel(a,       6.781075923625e+03, TOL));
         ok(isequalRel(ecc,     3.728008119345e-03, TOL));
         ok(isequalRel(incl,    1.013549978053e+00, TOL));
         ok(isequalRel(omega,   8.380405718860e-01, TOL));
         ok(isequalRel(argp,    2.107388198411e+00, TOL));
         ok(isequalRel(nu,      4.522332982372e+00, TOL));
         ok(isequalRel(m,       4.529658595867e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-4.856667800700e+03, -1.107034501919e+03, 4.557212582406e+03], [-2.304158557386e+00, -6.186437069611e+00, -3.956549542014e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-4.856667800700e+03, -1.107034501919e+03, 4.557212582406e+03], [-2.304158557386e+00, -6.186437069611e+00, -3.956549542014e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.773716441276e+03, TOL));
         ok(isequalRel(a,       6.773790856432e+03, TOL));
         ok(isequalRel(ecc,     3.314475452111e-03, TOL));
         ok(isequalRel(incl,    1.013215641806e+00, TOL));
         ok(isequalRel(omega,   8.312289206369e-01, TOL));
         ok(isequalRel(argp,    2.173431904186e+00, TOL));
         ok(isequalRel(nu,      4.833955774302e-02, TOL));
         ok(isequalRel(m,       4.802003554972e-02, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-4.978448007121e+02, -4.863460053117e+03, -4.700812112174e+03], [5.960065406702e+00, 2.996683369168e+00, -3.767123328697e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-4.978448007121e+02, -4.863460053117e+03, -4.700812112174e+03], [5.960065406702e+00, 2.996683369168e+00, -3.767123328697e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.773218819561e+03, TOL));
         ok(isequalRel(a,       6.773300659965e+03, TOL));
         ok(isequalRel(ecc,     3.476031515181e-03, TOL));
         ok(isequalRel(incl,    1.013193413429e+00, TOL));
         ok(isequalRel(omega,   8.257531454501e-01, TOL));
         ok(isequalRel(argp,    2.134208509929e+00, TOL));
         ok(isequalRel(nu,      1.963288807041e+00, TOL));
         ok(isequalRel(m,       1.956858988939e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[5.241619360959e+03, 3.910759606834e+03, -1.857934739522e+03], [-1.124834805582e+00, 4.406213160311e+00, 6.148161298549e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([5.241619360959e+03, 3.910759606834e+03, -1.857934739522e+03], [-1.124834805582e+00, 4.406213160311e+00, 6.148161298549e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.781133047469e+03, TOL));
         ok(isequalRel(a,       6.781196626445e+03, TOL));
         ok(isequalRel(ecc,     3.061988804711e-03, TOL));
         ok(isequalRel(incl,    1.013557524732e+00, TOL));
         ok(isequalRel(omega,   8.189608349284e-01, TOL));
         ok(isequalRel(argp,    2.235762076747e+00, TOL));
         ok(isequalRel(nu,      3.719587170064e+00, TOL));
         ok(isequalRel(m,       3.722939421547e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.451380459530e+03, 2.610604632610e+03, 5.729790220688e+03], [-5.366560525018e+00, -5.500855666468e+00, 1.879587163462e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.451380459530e+03, 2.610604632610e+03, 5.729790220688e+03], [-5.366560525018e+00, -5.500855666468e+00, 1.879587163462e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.768567087565e+03, TOL));
         ok(isequalRel(a,       6.768628762646e+03, TOL));
         ok(isequalRel(ecc,     3.018592697200e-03, TOL));
         ok(isequalRel(incl,    1.012979120168e+00, TOL));
         ok(isequalRel(omega,   8.130152819479e-01, TOL));
         ok(isequalRel(argp,    2.498326441594e+00, TOL));
         ok(isequalRel(nu,      5.324365580014e+00, TOL));
         ok(isequalRel(m,       5.329300676741e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-3.791875206380e+03, -5.378828513819e+03, -1.575827379301e+03], [4.266273591571e+00, -1.199162550968e+00, -6.276154079876e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-3.791875206380e+03, -5.378828513819e+03, -1.575827379301e+03], [4.266273591571e+00, -1.199162550968e+00, -6.276154079876e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.781521772382e+03, TOL));
         ok(isequalRel(a,       6.781619648396e+03, TOL));
         ok(isequalRel(ecc,     3.799018634628e-03, TOL));
         ok(isequalRel(incl,    1.013575880880e+00, TOL));
         ok(isequalRel(omega,   8.069908934815e-01, TOL));
         ok(isequalRel(argp,    2.445329779743e+00, TOL));
         ok(isequalRel(nu,      9.741987854508e-01, TOL));
         ok(isequalRel(m,       9.679233517514e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[4.730539583565e+03, 5.240500643313e+02, -4.857293697253e+03], [2.918056288012e+00, 6.135412849160e+00, 3.495115635633e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([4.730539583565e+03, 5.240500643313e+02, -4.857293697253e+03], [2.918056288012e+00, 6.135412849160e+00, 3.495115635633e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.772613149823e+03, TOL));
         ok(isequalRel(a,       6.772731004010e+03, TOL));
         ok(isequalRel(ecc,     4.171484128490e-03, TOL));
         ok(isequalRel(incl,    1.013166686490e+00, TOL));
         ok(isequalRel(omega,   8.002425528718e-01, TOL));
         ok(isequalRel(argp,    2.337289703773e+00, TOL));
         ok(isequalRel(nu,      2.945319559456e+00, TOL));
         ok(isequalRel(m,       2.943687546606e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.159278028972e+03, 5.056601754954e+03, 4.353494185789e+03], [-5.968060340911e+00, -2.314790405868e+00, 4.230722669090e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.159278028972e+03, 5.056601754954e+03, 4.353494185789e+03], [-5.968060340911e+00, -2.314790405868e+00, 4.230722669090e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.774510039194e+03, TOL));
         ok(isequalRel(a,       6.774616357684e+03, TOL));
         ok(isequalRel(ecc,     3.961521766570e-03, TOL));
         ok(isequalRel(incl,    1.013253708520e+00, TOL));
         ok(isequalRel(omega,   7.947634196466e-01, TOL));
         ok(isequalRel(argp,    2.353430901559e+00, TOL));
         ok(isequalRel(nu,      4.789304733122e+00, TOL));
         ok(isequalRel(m,       4.797202528045e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
         // 8195
     });

test('[1.522391713658e+04, -1.785295881713e+04, 2.528039558224e+04], [1.079041732290e+00, 8.751873723850e-01, 2.485682812742e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.522391713658e+04, -1.785295881713e+04, 2.528039558224e+04], [1.079041732290e+00, 8.751873723850e-01, 2.485682812742e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.403924781984e+04, TOL));
         ok(isequalRel(a,       2.656497279496e+04, TOL));
         ok(isequalRel(ecc,     6.866679038576e-01, TOL));
         ok(isequalRel(incl,    1.120061213114e+00, TOL));
         ok(isequalRel(omega,   4.869914010457e+00, TOL));
         ok(isequalRel(argp,    4.621685740971e+00, TOL));
         ok(isequalRel(nu,      2.613009397654e+00, TOL));
         ok(isequalRel(m,       1.401790903669e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.975278050009e+04, -8.600071309618e+03, 3.752272921090e+04], [2.381052785247e-01, 1.546110924145e+00, 9.864104468114e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.975278050009e+04, -8.600071309618e+03, 3.752272921090e+04], [2.381052785247e-01, 1.546110924145e+00, 9.864104468114e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.403706167481e+04, TOL));
         ok(isequalRel(a,       2.656501003451e+04, TOL));
         ok(isequalRel(ecc,     6.867283634668e-01, TOL));
         ok(isequalRel(incl,    1.120025838281e+00, TOL));
         ok(isequalRel(omega,   4.869730017780e+00, TOL));
         ok(isequalRel(argp,    4.621701110723e+00, TOL));
         ok(isequalRel(nu,      2.961126539238e+00, TOL));
         ok(isequalRel(m,       2.451531625324e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.908929762968e+04, 3.107894950177e+03, 3.995814661370e+04], [-4.103080340832e-01, 1.640332277113e+00, -3.068738176578e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.908929762968e+04, 3.107894950177e+03, 3.995814661370e+04], [-4.103080340832e-01, 1.640332277113e+00, -3.068738176578e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.403671619383e+04, TOL));
         ok(isequalRel(a,       2.656503154264e+04, TOL));
         ok(isequalRel(ecc,     6.867381437714e-01, TOL));
         ok(isequalRel(incl,    1.120015823809e+00, TOL));
         ok(isequalRel(omega,   4.869539555485e+00, TOL));
         ok(isequalRel(argp,    4.621794135502e+00, TOL));
         ok(isequalRel(nu,      3.234035448475e+00, TOL));
         ok(isequalRel(m,       3.501171579310e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.382966070574e+04, 1.397739999817e+04, 3.273632082508e+04], [-1.065096849045e+00, 1.279983299493e+00, -1.760166074619e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.382966070574e+04, 1.397739999817e+04, 3.273632082508e+04], [-1.065096849045e+00, 1.279983299493e+00, -1.760166074619e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.403827796061e+04, TOL));
         ok(isequalRel(a,       2.656463491455e+04, TOL));
         ok(isequalRel(ecc,     6.866895933949e-01, TOL));
         ok(isequalRel(incl,    1.120027389597e+00, TOL));
         ok(isequalRel(omega,   4.869345046058e+00, TOL));
         ok(isequalRel(argp,    4.621874085476e+00, TOL));
         ok(isequalRel(nu,      3.541952899055e+00, TOL));
         ok(isequalRel(m,       4.550821733826e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[3.333058385247e+03, 1.839531728674e+04, 1.273825031238e+04], [-1.882432221379e+00, -6.116233333449e-01, -4.039586549263e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([3.333058385247e+03, 1.839531728674e+04, 1.273825031238e+04], [-1.882432221379e+00, -6.116233333449e-01, -4.039586549263e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.404246294980e+04, TOL));
         ok(isequalRel(a,       2.656627636522e+04, TOL));
         ok(isequalRel(ecc,     6.865986595814e-01, TOL));
         ok(isequalRel(incl,    1.120094433729e+00, TOL));
         ok(isequalRel(omega,   4.869163924052e+00, TOL));
         ok(isequalRel(argp,    4.621755553333e+00, TOL));
         ok(isequalRel(nu,      4.127179172619e+00, TOL));
         ok(isequalRel(m,       5.600698163503e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.622132222073e+03, -1.512515464924e+04, 4.745104839822e+02], [2.688287198777e+00, -3.078426664127e+00, 4.494979530449e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.622132222073e+03, -1.512515464924e+04, 4.745104839822e+02], [2.688287198777e+00, -3.078426664127e+00, 4.494979530449e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.404483851604e+04, TOL));
         ok(isequalRel(a,       2.657495424205e+04, TOL));
         ok(isequalRel(ecc,     6.866592555576e-01, TOL));
         ok(isequalRel(incl,    1.120144919875e+00, TOL));
         ok(isequalRel(omega,   4.869087998176e+00, TOL));
         ok(isequalRel(argp,    4.621865740164e+00, TOL));
         ok(isequalRel(nu,      1.695649454174e+00, TOL));
         ok(isequalRel(m,       3.671866268738e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.532056770017e+04, -1.777732564586e+04, 2.553953198382e+04], [1.064346229230e+00, 8.921847706661e-01, 2.459822414230e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.532056770017e+04, -1.777732564586e+04, 2.553953198382e+04], [1.064346229230e+00, 8.921847706661e-01, 2.459822414230e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.404080789378e+04, TOL));
         ok(isequalRel(a,       2.656496290248e+04, TOL));
         ok(isequalRel(ecc,     6.866249970949e-01, TOL));
         ok(isequalRel(incl,    1.120056335086e+00, TOL));
         ok(isequalRel(omega,   4.868999594604e+00, TOL));
         ok(isequalRel(argp,    4.621575085858e+00, TOL));
         ok(isequalRel(nu,      2.619601954539e+00, TOL));
         ok(isequalRel(m,       1.417296941539e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.976970267785e+04, -8.458651044544e+03, 3.762420130236e+04], [2.293043961527e-01, 1.550363884063e+00, 9.669930561197e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.976970267785e+04, -8.458651044544e+03, 3.762420130236e+04], [2.293043961527e-01, 1.550363884063e+00, 9.669930561197e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.403862150982e+04, TOL));
         ok(isequalRel(a,       2.656501164749e+04, TOL));
         ok(isequalRel(ecc,     6.866856337694e-01, TOL));
         ok(isequalRel(incl,    1.120021141512e+00, TOL));
         ok(isequalRel(omega,   4.868816100244e+00, TOL));
         ok(isequalRel(argp,    4.621591662497e+00, TOL));
         ok(isequalRel(nu,      2.965349613386e+00, TOL));
         ok(isequalRel(m,       2.467036669796e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.904856201523e+04, 3.260432231191e+03, 3.992339143967e+04], [-4.180155357909e-01, 1.639346952779e+00, -3.260948400927e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.904856201523e+04, 3.260432231191e+03, 3.992339143967e+04], [-4.180155357909e-01, 1.639346952779e+00, -3.260948400927e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.403827307016e+04, TOL));
         ok(isequalRel(a,       2.656502743417e+04, TOL));
         ok(isequalRel(ecc,     6.866954129400e-01, TOL));
         ok(isequalRel(incl,    1.120011057659e+00, TOL));
         ok(isequalRel(omega,   4.868626220537e+00, TOL));
         ok(isequalRel(argp,    4.621684207571e+00, TOL));
         ok(isequalRel(nu,      3.238085269989e+00, TOL));
         ok(isequalRel(m,       3.516677703844e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.372919205837e+04, 1.409770014810e+04, 3.254752799890e+04], [-1.074511042879e+00, 1.270505211312e+00, -1.785099926781e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.372919205837e+04, 1.409770014810e+04, 3.254752799890e+04], [-1.074511042879e+00, 1.270505211312e+00, -1.785099926781e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.403983571137e+04, TOL));
         ok(isequalRel(a,       2.656462585705e+04, TOL));
         ok(isequalRel(ecc,     6.866467632282e-01, TOL));
         ok(isequalRel(incl,    1.120022681160e+00, TOL));
         ok(isequalRel(omega,   4.868432229772e+00, TOL));
         ok(isequalRel(argp,    4.621762400774e+00, TOL));
         ok(isequalRel(nu,      3.547474198617e+00, TOL));
         ok(isequalRel(m,       4.566330537490e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[3.148861656431e+03, 1.832319841703e+04, 1.230575195578e+04], [-1.895271701496e+00, -6.783438468467e-01, -4.086577951103e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([3.148861656431e+03, 1.832319841703e+04, 1.230575195578e+04], [-1.895271701496e+00, -6.783438468467e-01, -4.086577951103e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.404404253872e+04, TOL));
         ok(isequalRel(a,       2.656643392055e+04, TOL));
         ok(isequalRel(ecc,     6.865576422170e-01, TOL));
         ok(isequalRel(incl,    1.120090960335e+00, TOL));
         ok(isequalRel(omega,   4.868252805496e+00, TOL));
         ok(isequalRel(argp,    4.621636126504e+00, TOL));
         ok(isequalRel(nu,      4.143072416289e+00, TOL));
         ok(isequalRel(m,       5.616216430647e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.890806382677e+03, -1.544643952300e+04, 9.487701017643e+02], [2.654407489593e+00, -2.909344894829e+00, 4.486437361921e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.890806382677e+03, -1.544643952300e+04, 9.487701017643e+02], [2.654407489593e+00, -2.909344894829e+00, 4.486437361921e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.404626166603e+04, TOL));
         ok(isequalRel(a,       2.657443456118e+04, TOL));
         ok(isequalRel(ecc,     6.866127327248e-01, TOL));
         ok(isequalRel(incl,    1.120138639092e+00, TOL));
         ok(isequalRel(omega,   4.868181528137e+00, TOL));
         ok(isequalRel(argp,    4.621747514129e+00, TOL));
         ok(isequalRel(nu,      1.728437343991e+00, TOL));
         ok(isequalRel(m,       3.827059612942e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.541598410712e+04, -1.769990714437e+04, 2.579619644689e+04], [1.049818334076e+00, 9.088223320280e-01, 2.434107329013e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.541598410712e+04, -1.769990714437e+04, 2.579619644689e+04], [1.049818334076e+00, 9.088223320280e-01, 2.434107329013e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.404218814791e+04, TOL));
         ok(isequalRel(a,       2.656495329111e+04, TOL));
         ok(isequalRel(ecc,     6.865870212103e-01, TOL));
         ok(isequalRel(incl,    1.120049368413e+00, TOL));
         ok(isequalRel(omega,   4.868088446936e+00, TOL));
         ok(isequalRel(argp,    4.621459685825e+00, TOL));
         ok(isequalRel(nu,      2.626132585540e+00, TOL));
         ok(isequalRel(m,       1.432812715882e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.978600618538e+04, -8.316745705810e+03, 3.772374539119e+04], [2.205398128165e-01, 1.554518899694e+00, 9.476010474766e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.978600618538e+04, -8.316745705810e+03, 3.772374539119e+04], [2.205398128165e-01, 1.554518899694e+00, 9.476010474766e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.403999854558e+04, TOL));
         ok(isequalRel(a,       2.656501279744e+04, TOL));
         ok(isequalRel(ecc,     6.866479054501e-01, TOL));
         ok(isequalRel(incl,    1.120014356274e+00, TOL));
         ok(isequalRel(omega,   4.867905104982e+00, TOL));
         ok(isequalRel(argp,    4.621477745764e+00, TOL));
         ok(isequalRel(nu,      2.969565037590e+00, TOL));
         ok(isequalRel(m,       2.482551388602e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.900728688729e+04, 3.412859487148e+03, 3.988666579255e+04], [-4.257335675621e-01, 1.638276809037e+00, -3.453538069438e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.900728688729e+04, 3.412859487148e+03, 3.988666579255e+04], [-4.257335675621e-01, 1.638276809037e+00, -3.453538069438e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.403964451879e+04, TOL));
         ok(isequalRel(a,       2.656502280938e+04, TOL));
         ok(isequalRel(ecc,     6.866577546707e-01, TOL));
         ok(isequalRel(incl,    1.120004213475e+00, TOL));
         ok(isequalRel(omega,   4.867715454922e+00, TOL));
         ok(isequalRel(argp,    4.621570116380e+00, TOL));
         ok(isequalRel(nu,      3.242144019262e+00, TOL));
         ok(isequalRel(m,       3.532193398632e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.362793015254e+04, 1.421695401307e+04, 3.235613706868e+04], [-1.083991975816e+00, 1.260802347232e+00, -1.810193902806e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.362793015254e+04, 1.421695401307e+04, 3.235613706868e+04], [-1.083991975816e+00, 1.260802347232e+00, -1.810193902806e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.404120578725e+04, TOL));
         ok(isequalRel(a,       2.656461642092e+04, TOL));
         ok(isequalRel(ecc,     6.866090696296e-01, TOL));
         ok(isequalRel(incl,    1.120015914101e+00, TOL));
         ok(isequalRel(omega,   4.867521630942e+00, TOL));
         ok(isequalRel(argp,    4.621646847188e+00, TOL));
         ok(isequalRel(nu,      3.553039212915e+00, TOL));
         ok(isequalRel(m,       4.581848810139e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.963264865596e+03, 1.824385063641e+04, 1.186825797486e+04], [-1.908015446842e+00, -7.478703418835e-01, -4.134004491720e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.963264865596e+03, 1.824385063641e+04, 1.186825797486e+04], [-1.908015446842e+00, -7.478703418835e-01, -4.134004491720e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.404543293096e+04, TOL));
         ok(isequalRel(a,       2.656660365238e+04, TOL));
         ok(isequalRel(ecc,     6.865219861167e-01, TOL));
         ok(isequalRel(incl,    1.120085479645e+00, TOL));
         ok(isequalRel(omega,   4.867343641451e+00, TOL));
         ok(isequalRel(argp,    4.621512946396e+00, TOL));
         ok(isequalRel(nu,      4.159436417334e+00, TOL));
         ok(isequalRel(m,       5.631744250455e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[3.155851260364e+03, -1.575070393364e+04, 1.422324969530e+03], [2.620085624431e+00, -2.748990395562e+00, 4.473527039077e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([3.155851260364e+03, -1.575070393364e+04, 1.422324969530e+03], [2.620085624431e+00, -2.748990395562e+00, 4.473527039077e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.404748607384e+04, TOL));
         ok(isequalRel(a,       2.657392543341e+04, TOL));
         ok(isequalRel(ecc,     6.865718043358e-01, TOL));
         ok(isequalRel(incl,    1.120130091483e+00, TOL));
         ok(isequalRel(omega,   4.867276314489e+00, TOL));
         ok(isequalRel(argp,    4.621625359798e+00, TOL));
         ok(isequalRel(nu,      1.759697486449e+00, TOL));
         ok(isequalRel(m,       3.982350854065e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.551015191770e+04, -1.762071002219e+04, 2.605043525345e+04], [1.035454678000e+00, 9.251110062354e-01, 2.408534464786e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.551015191770e+04, -1.762071002219e+04, 2.605043525345e+04], [1.035454678000e+00, 9.251110062354e-01, 2.408534464786e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.404337512033e+04, TOL));
         ok(isequalRel(a,       2.656494391998e+04, TOL));
         ok(isequalRel(ecc,     6.865543454928e-01, TOL));
         ok(isequalRel(incl,    1.120040403343e+00, TOL));
         ok(isequalRel(omega,   4.867178464958e+00, TOL));
         ok(isequalRel(argp,    4.621341486917e+00, TOL));
         ok(isequalRel(nu,      2.632603055222e+00, TOL));
         ok(isequalRel(m,       1.448337376153e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.980167198812e+04, -8.174333371671e+03, 3.782138577439e+04], [2.118126998987e-01, 1.558576937066e+00, 9.282318796566e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.980167198812e+04, -8.174333371671e+03, 3.782138577439e+04], [2.118126998987e-01, 1.558576937066e+00, 9.282318796566e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.404118093781e+04, TOL));
         ok(isequalRel(a,       2.656501348208e+04, TOL));
         ok(isequalRel(ecc,     6.866155039773e-01, TOL));
         ok(isequalRel(incl,    1.120005588024e+00, TOL));
         ok(isequalRel(omega,   4.866994936388e+00, TOL));
         ok(isequalRel(argp,    4.621361317300e+00, TOL));
         ok(isequalRel(nu,      2.973772889409e+00, TOL));
         ok(isequalRel(m,       2.498074862607e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.896546529379e+04, 3.565196662420e+03, 3.984797510998e+04], [-4.334599445964e-01, 1.637120585289e+00, -3.646532131940e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.896546529379e+04, 3.565196662420e+03, 3.984797510998e+04], [-4.334599445964e-01, 1.637120585289e+00, -3.646532131940e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.404082030356e+04, TOL));
         ok(isequalRel(a,       2.656501766861e+04, TOL));
         ok(isequalRel(ecc,     6.866254503966e-01, TOL));
         ok(isequalRel(incl,    1.119995411416e+00, TOL));
         ok(isequalRel(omega,   4.866805173054e+00, TOL));
         ok(isequalRel(argp,    4.621453825445e+00, TOL));
         ok(isequalRel(nu,      3.246211532620e+00, TOL));
         ok(isequalRel(m,       3.547717680073e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.352588227400e+04, 1.433515978787e+04, 3.216213236536e+04], [-1.093537944678e+00, 1.250868255565e+00, -1.835451681217e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.352588227400e+04, 1.433515978787e+04, 3.216213236536e+04], [-1.093537944678e+00, 1.250868255565e+00, -1.835451681217e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.404237954766e+04, TOL));
         ok(isequalRel(a,       2.656460661764e+04, TOL));
         ok(isequalRel(ecc,     6.865767504906e-01, TOL));
         ok(isequalRel(incl,    1.120007222990e+00, TOL));
         ok(isequalRel(omega,   4.866611176822e+00, TOL));
         ok(isequalRel(argp,    4.621529391337e+00, TOL));
         ok(isequalRel(nu,      3.558648318838e+00, TOL));
         ok(isequalRel(m,       4.597375507549e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.776305742600e+03, 1.815698538451e+04, 1.142573046481e+04], [-1.920632199311e+00, -8.203707332442e-01, -4.181839231838e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.776305742600e+03, 1.815698538451e+04, 1.142573046481e+04], [-1.920632199311e+00, -8.203707332442e-01, -4.181839231838e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.404662704961e+04, TOL));
         ok(isequalRel(a,       2.656678655164e+04, TOL));
         ok(isequalRel(ecc,     6.864919004431e-01, TOL));
         ok(isequalRel(incl,    1.120078139473e+00, TOL));
         ok(isequalRel(omega,   4.866434381578e+00, TOL));
         ok(isequalRel(argp,    4.621387977725e+00, TOL));
         ok(isequalRel(nu,      4.176296398714e+00, TOL));
         ok(isequalRel(m,       5.647280523859e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[3.417209315865e+03, -1.603879510665e+04, 1.894749340578e+03], [2.585515864060e+00, -2.596818145615e+00, 4.456882556195e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([3.417209315865e+03, -1.603879510665e+04, 1.894749340578e+03], [2.585515864060e+00, -2.596818145615e+00, 4.456882556195e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.404850730735e+04, TOL));
         ok(isequalRel(a,       2.657343067951e+04, TOL));
         ok(isequalRel(ecc,     6.865366485917e-01, TOL));
         ok(isequalRel(incl,    1.120119474201e+00, TOL));
         ok(isequalRel(omega,   4.866370323789e+00, TOL));
         ok(isequalRel(argp,    4.621501389097e+00, TOL));
         ok(isequalRel(nu,      1.789541978850e+00, TOL));
         ok(isequalRel(m,       4.137727036757e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
         // 9880
     });

test('[1.919032482476e+04, 9.249012669022e+03, 2.659671345328e+04], [-6.249601929992e-01, 1.324550561620e+00, 2.495697636508e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.919032482476e+04, 9.249012669022e+03, 2.659671345328e+04], [-6.249601929992e-01, 1.324550561620e+00, 2.495697636508e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.325410788567e+04, TOL));
         ok(isequalRel(a,       2.653615778488e+04, TOL));
         ok(isequalRel(ecc,     7.074789674872e-01, TOL));
         ok(isequalRel(incl,    1.127151912442e+00, TOL));
         ok(isequalRel(omega,   6.097098280631e+00, TOL));
         ok(isequalRel(argp,    4.713310021374e+00, TOL));
         ok(isequalRel(nu,      2.613353781448e+00, TOL));
         ok(isequalRel(m,       1.336188135260e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.133267806218e+04, 1.651799124008e+04, 3.856978482991e+04], [-1.400974746985e+00, 7.109470057890e-01, 9.239356355514e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.133267806218e+04, 1.651799124008e+04, 3.856978482991e+04], [-1.400974746985e+00, 7.109470057890e-01, 9.239356355514e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.325187099764e+04, TOL));
         ok(isequalRel(a,       2.653646163250e+04, TOL));
         ok(isequalRel(ecc,     7.075425806213e-01, TOL));
         ok(isequalRel(incl,    1.127120916030e+00, TOL));
         ok(isequalRel(omega,   6.096869415144e+00, TOL));
         ok(isequalRel(argp,    4.713361286651e+00, TOL));
         ok(isequalRel(nu,      2.953696643023e+00, TOL));
         ok(isequalRel(m,       2.387560937341e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[3.287421739786e+02, 1.955492047380e+04, 4.055826246145e+04], [-1.593281066367e+00, 1.267729129517e-01, -3.596273072116e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([3.287421739786e+02, 1.955492047380e+04, 4.055826246145e+04], [-1.593281066367e+00, 1.267729129517e-01, -3.596273072116e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.325163233012e+04, TOL));
         ok(isequalRel(a,       2.653655058028e+04, TOL));
         ok(isequalRel(ecc,     7.075501192075e-01, TOL));
         ok(isequalRel(incl,    1.127117580376e+00, TOL));
         ok(isequalRel(omega,   6.096640143058e+00, TOL));
         ok(isequalRel(argp,    4.713476849653e+00, TOL));
         ok(isequalRel(nu,      3.213941865671e+00, TOL));
         ok(isequalRel(m,       3.438856424540e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.068490590680e+04, 1.805715728839e+04, 3.315875253886e+04], [-1.383205997294e+00, -5.823289989404e-01, -1.744412556059e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.068490590680e+04, 1.805715728839e+04, 3.315875253886e+04], [-1.383205997294e+00, -5.823289989404e-01, -1.744412556059e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.325328180408e+04, TOL));
         ok(isequalRel(a,       2.653622467379e+04, TOL));
         ok(isequalRel(ecc,     7.075018577910e-01, TOL));
         ok(isequalRel(incl,    1.127135905122e+00, TOL));
         ok(isequalRel(omega,   6.096410821054e+00, TOL));
         ok(isequalRel(argp,    4.713570002589e+00, TOL));
         ok(isequalRel(nu,      3.501203792419e+00, TOL));
         ok(isequalRel(m,       4.490179928072e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.706978000550e+04, 9.944867978974e+03, 1.388591649059e+04], [4.413335410518e-02, -1.853448464029e+00, -3.815303116950e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.706978000550e+04, 9.944867978974e+03, 1.388591649059e+04], [4.413335410518e-02, -1.853448464029e+00, -3.815303116950e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.325729228596e+04, TOL));
         ok(isequalRel(a,       2.653762708099e+04, TOL));
         ok(isequalRel(ecc,     7.074137034860e-01, TOL));
         ok(isequalRel(incl,    1.127205383575e+00, TOL));
         ok(isequalRel(omega,   6.096197230944e+00, TOL));
         ok(isequalRel(argp,    4.713484351831e+00, TOL));
         ok(isequalRel(nu,      4.021124830156e+00, TOL));
         ok(isequalRel(m,       5.541714395334e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.372509398980e+04, -2.180708770897e+03, 8.632968452340e+02], [3.878478111152e+00, 1.656846496247e+00, 4.944867241096e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.372509398980e+04, -2.180708770897e+03, 8.632968452340e+02], [3.878478111152e+00, 1.656846496247e+00, 4.944867241096e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.325988301638e+04, TOL));
         ok(isequalRel(a,       2.654840015277e+04, TOL));
         ok(isequalRel(ecc,     7.074880079976e-01, TOL));
         ok(isequalRel(incl,    1.127264780599e+00, TOL));
         ok(isequalRel(omega,   6.096100000263e+00, TOL));
         ok(isequalRel(argp,    4.713614012745e+00, TOL));
         ok(isequalRel(nu,      1.638267445445e+00, TOL));
         ok(isequalRel(m,       3.098685960655e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.908963879226e+04, 9.456296702471e+03, 2.702679562883e+04], [-6.566142985021e-01, 1.309112636489e+00, 2.449371940510e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.908963879226e+04, 9.456296702471e+03, 2.702679562883e+04], [-6.566142985021e-01, 1.309112636489e+00, 2.449371940510e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.325504026395e+04, TOL));
         ok(isequalRel(a,       2.653609665494e+04, TOL));
         ok(isequalRel(ecc,     7.074533218510e-01, TOL));
         ok(isequalRel(incl,    1.127156339112e+00, TOL));
         ok(isequalRel(omega,   6.095970925646e+00, TOL));
         ok(isequalRel(argp,    4.713313396847e+00, TOL));
         ok(isequalRel(nu,      2.624123778438e+00, TOL));
         ok(isequalRel(m,       1.361650714943e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.110641248373e+04, 1.662760874079e+04, 3.872735140296e+04], [-1.409722679524e+00, 6.985825258442e-01, 8.913835346016e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.110641248373e+04, 1.662760874079e+04, 3.872735140296e+04], [-1.409722679524e+00, 6.985825258442e-01, 8.913835346016e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.325290004901e+04, TOL));
         ok(isequalRel(a,       2.653641130203e+04, TOL));
         ok(isequalRel(ecc,     7.075145068396e-01, TOL));
         ok(isequalRel(incl,    1.127126561561e+00, TOL));
         ok(isequalRel(omega,   6.095742976755e+00, TOL));
         ok(isequalRel(argp,    4.713366589880e+00, TOL));
         ok(isequalRel(nu,      2.960372493246e+00, TOL));
         ok(isequalRel(m,       2.413024413463e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[7.240958620636e+01, 1.957508054144e+04, 4.049212544001e+04], [-1.593394604022e+00, 1.136551418846e-01, -3.905560628598e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([7.240958620636e+01, 1.957508054144e+04, 4.049212544001e+04], [-1.593394604022e+00, 1.136551418846e-01, -3.905560628598e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.325274776540e+04, TOL));
         ok(isequalRel(a,       2.653648950166e+04, TOL));
         ok(isequalRel(ecc,     7.075196023956e-01, TOL));
         ok(isequalRel(incl,    1.127123913288e+00, TOL));
         ok(isequalRel(omega,   6.095514796906e+00, TOL));
         ok(isequalRel(argp,    4.713481102025e+00, TOL));
         ok(isequalRel(nu,      3.220205927721e+00, TOL));
         ok(isequalRel(m,       3.464324359213e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.090589252576e+04, 1.796541205111e+04, 3.285007298244e+04], [-1.371396120481e+00, -6.017066038238e-01, -1.782817057614e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.090589252576e+04, 1.796541205111e+04, 3.285007298244e+04], [-1.371396120481e+00, -6.017066038238e-01, -1.782817057614e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.325448571047e+04, TOL));
         ok(isequalRel(a,       2.653615749110e+04, TOL));
         ok(isequalRel(ecc,     7.074689009380e-01, TOL));
         ok(isequalRel(incl,    1.127143092872e+00, TOL));
         ok(isequalRel(omega,   6.095286595173e+00, TOL));
         ok(isequalRel(argp,    4.713571139877e+00, TOL));
         ok(isequalRel(nu,      3.509519813311e+00, TOL));
         ok(isequalRel(m,       4.515654848025e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.704461207568e+04, 9.635484918489e+03, 1.321259462953e+04], [1.292440295752e-01, -1.903551430351e+00, -3.884569098006e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.704461207568e+04, 9.635484918489e+03, 1.321259462953e+04], [1.292440295752e-01, -1.903551430351e+00, -3.884569098006e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.325860805810e+04, TOL));
         ok(isequalRel(a,       2.653778347990e+04, TOL));
         ok(isequalRel(ecc,     7.073807397407e-01, TOL));
         ok(isequalRel(incl,    1.127215108486e+00, TOL));
         ok(isequalRel(omega,   6.095075915992e+00, TOL));
         ok(isequalRel(argp,    4.713474145027e+00, TOL));
         ok(isequalRel(nu,      4.043449649444e+00, TOL));
         ok(isequalRel(m,       5.567205593100e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.436990303735e+04, -1.903856010622e+03, 1.722153198525e+03], [3.543393116437e+00, 1.701687175957e+00, 4.913881357635e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.436990303735e+04, -1.903856010622e+03, 1.722153198525e+03], [3.543393116437e+00, 1.701687175957e+00, 4.913881357635e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.326099420296e+04, TOL));
         ok(isequalRel(a,       2.654706894705e+04, TOL));
         ok(isequalRel(ecc,     7.074407245305e-01, TOL));
         ok(isequalRel(incl,    1.127269688664e+00, TOL));
         ok(isequalRel(omega,   6.094988926700e+00, TOL));
         ok(isequalRel(argp,    4.713600562651e+00, TOL));
         ok(isequalRel(nu,      1.700573304283e+00, TOL));
         ok(isequalRel(m,       3.353684409392e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.898396210441e+04, 9.661122338040e+03, 2.744899557732e+04], [-6.871893040886e-01, 1.293808870096e+00, 2.403630758712e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.898396210441e+04, 9.661122338040e+03, 2.744899557732e+04], [-6.871893040886e-01, 1.293808870096e+00, 2.403630758712e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.325621092433e+04, TOL));
         ok(isequalRel(a,       2.653603790011e+04, TOL));
         ok(isequalRel(ecc,     7.074213601086e-01, TOL));
         ok(isequalRel(incl,    1.127161917058e+00, TOL));
         ok(isequalRel(omega,   6.094850315820e+00, TOL));
         ok(isequalRel(argp,    4.713307985457e+00, TOL));
         ok(isequalRel(nu,      2.634691028511e+00, TOL));
         ok(isequalRel(m,       1.387143205884e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.087879336704e+04, 1.673531433954e+04, 3.887923434264e+04], [-1.418239665776e+00, 6.862357498785e-01, 8.589518483930e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.087879336704e+04, 1.673531433954e+04, 3.887923434264e+04], [-1.418239665776e+00, 6.862357498785e-01, 8.589518483930e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.325415878493e+04, TOL));
         ok(isequalRel(a,       2.653636144051e+04, TOL));
         ok(isequalRel(ecc,     7.074803209950e-01, TOL));
         ok(isequalRel(incl,    1.127133277292e+00, TOL));
         ok(isequalRel(omega,   6.094623491183e+00, TOL));
         ok(isequalRel(argp,    4.713362632377e+00, TOL));
         ok(isequalRel(nu,      2.967017186326e+00, TOL));
         ok(isequalRel(m,       2.438518432461e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.840374310020e+02, 1.959309371709e+04, 4.042040606889e+04], [-1.593348924572e+00, 1.004486972889e-01, -4.215719933717e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.840374310020e+02, 1.959309371709e+04, 4.042040606889e+04], [-1.593348924572e+00, 1.004486972889e-01, -4.215719933717e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.325408448094e+04, TOL));
         ok(isequalRel(a,       2.653642883773e+04, TOL));
         ok(isequalRel(ecc,     7.074831964281e-01, TOL));
         ok(isequalRel(incl,    1.127131260488e+00, TOL));
         ok(isequalRel(omega,   6.094396583400e+00, TOL));
         ok(isequalRel(argp,    4.713475723452e+00, TOL));
         ok(isequalRel(nu,      3.226494742039e+00, TOL));
         ok(isequalRel(m,       3.489823348923e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.112512138631e+04, 1.787019488928e+04, 3.253421521208e+04], [-1.359116235779e+00, -6.214137764913e-01, -1.821629856174e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.112512138631e+04, 1.787019488928e+04, 3.253421521208e+04], [-1.359116235779e+00, -6.214137764913e-01, -1.821629856174e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.325590261428e+04, TOL));
         ok(isequalRel(a,       2.653609119479e+04, TOL));
         ok(isequalRel(ecc,     7.074302810557e-01, TOL));
         ok(isequalRel(incl,    1.127151254354e+00, TOL));
         ok(isequalRel(omega,   6.094169674224e+00, TOL));
         ok(isequalRel(argp,    4.713562261685e+00, TOL));
         ok(isequalRel(nu,      3.517957445017e+00, TOL));
         ok(isequalRel(m,       4.541161349068e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.700443272827e+04, 9.316539263508e+03, 1.252611883812e+04], [2.203307359504e-01, -1.955594322101e+00, -3.955058574817e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.700443272827e+04, 9.316539263508e+03, 1.252611883812e+04], [2.203307359504e-01, -1.955594322101e+00, -3.955058574817e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.326012935088e+04, TOL));
         ok(isequalRel(a,       2.653796825348e+04, TOL));
         ok(isequalRel(ecc,     7.073426782139e-01, TOL));
         ok(isequalRel(incl,    1.127225837824e+00, TOL));
         ok(isequalRel(omega,   6.093962264973e+00, TOL));
         ok(isequalRel(argp,    4.713453122517e+00, TOL));
         ok(isequalRel(nu,      4.066845514948e+00, TOL));
         ok(isequalRel(m,       5.592729339613e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.496006492693e+04, -1.620684308049e+03, 2.574963593810e+03], [3.238634028091e+00, 1.734723384922e+00, 4.868880331132e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.496006492693e+04, -1.620684308049e+03, 2.574963593810e+03], [3.238634028091e+00, 1.734723384922e+00, 4.868880331132e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.326228019181e+04, TOL));
         ok(isequalRel(a,       2.654581709114e+04, TOL));
         ok(isequalRel(ecc,     7.073898343357e-01, TOL));
         ok(isequalRel(incl,    1.127274636280e+00, TOL));
         ok(isequalRel(omega,   6.093884314332e+00, TOL));
         ok(isequalRel(argp,    4.713574301178e+00, TOL));
         ok(isequalRel(nu,      1.757450772531e+00, TOL));
         ok(isequalRel(m,       3.609025622811e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.887346347257e+04, 9.863570045860e+03, 2.786346574735e+04], [-7.167369810792e-01, 1.278632817399e+00, 2.358448535211e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.887346347257e+04, 9.863570045860e+03, 2.786346574735e+04], [-7.167369810792e-01, 1.278632817399e+00, 2.358448535211e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.325756804836e+04, TOL));
         ok(isequalRel(a,       2.653598135696e+04, TOL));
         ok(isequalRel(ecc,     7.073844594661e-01, TOL));
         ok(isequalRel(incl,    1.127168319523e+00, TOL));
         ok(isequalRel(omega,   6.093737430865e+00, TOL));
         ok(isequalRel(argp,    4.713291961164e+00, TOL));
         ok(isequalRel(nu,      2.645067878270e+00, TOL));
         ok(isequalRel(m,       1.412668190983e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.064986857581e+04, 1.684114172669e+04, 3.902548035006e+04], [-1.426527152369e+00, 6.739010570046e-01, 8.266323323297e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.064986857581e+04, 1.684114172669e+04, 3.902548035006e+04], [-1.426527152369e+00, 6.739010570046e-01, 8.266323323297e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.325559440083e+04, TOL));
         ok(isequalRel(a,       2.653631205207e+04, TOL));
         ok(isequalRel(ecc,     7.074414286305e-01, TOL));
         ok(isequalRel(incl,    1.127140734269e+00, TOL));
         ok(isequalRel(omega,   6.093511869368e+00, TOL));
         ok(isequalRel(argp,    4.713347693356e+00, TOL));
         ok(isequalRel(nu,      2.973633805192e+00, TOL));
         ok(isequalRel(m,       2.464045443944e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-4.405345932276e+02, 1.960895524423e+04, 4.034310675451e+04], [-1.593138597312e+00, 8.714788447849e-02, -4.526805591052e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-4.405345932276e+02, 1.960895524423e+04, 4.034310675451e+04], [-1.593138597312e+00, 8.714788447849e-02, -4.526805591052e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.325558875950e+04, TOL));
         ok(isequalRel(a,       2.653636859804e+04, TOL));
         ok(isequalRel(ecc,     7.074423311942e-01, TOL));
         ok(isequalRel(incl,    1.127139290382e+00, TOL));
         ok(isequalRel(omega,   6.093286345978e+00, TOL));
         ok(isequalRel(argp,    4.713459093252e+00, TOL));
         ok(isequalRel(nu,      3.232810138934e+00, TOL));
         ok(isequalRel(m,       3.515355714905e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.134245028909e+04, 1.777144223942e+04, 3.221112535721e+04], [-1.346344015261e+00, -6.414642913523e-01, -1.860864233947e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.134245028909e+04, 1.777144223942e+04, 3.221112535721e+04], [-1.346344015261e+00, -6.414642913523e-01, -1.860864233947e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.325747797551e+04, TOL));
         ok(isequalRel(a,       2.653602583348e+04, TOL));
         ok(isequalRel(ecc,     7.073874505795e-01, TOL));
         ok(isequalRel(incl,    1.127160056291e+00, TOL));
         ok(isequalRel(omega,   6.093060834530e+00, TOL));
         ok(isequalRel(argp,    4.713541845159e+00, TOL));
         ok(isequalRel(nu,      3.526521093421e+00, TOL));
         ok(isequalRel(m,       4.566701625887e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.694806005711e+04, 8.987642548800e+03, 1.182628284367e+04], [3.180072971009e-01, -2.009693491722e+00, -4.026726647563e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.694806005711e+04, 8.987642548800e+03, 1.182628284367e+04], [3.180072971009e-01, -2.009693491722e+00, -4.026726647563e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.326180088195e+04, TOL));
         ok(isequalRel(a,       2.653818506686e+04, TOL));
         ok(isequalRel(ecc,     7.073010396884e-01, TOL));
         ok(isequalRel(incl,    1.127237236537e+00, TOL));
         ok(isequalRel(omega,   6.092857012153e+00, TOL));
         ok(isequalRel(argp,    4.713419839866e+00, TOL));
         ok(isequalRel(nu,      4.091409233514e+00, TOL));
         ok(isequalRel(m,       5.618287722502e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.550053445068e+04, -1.332909810419e+03, 3.419723153077e+03], [2.960917974359e+00, 1.758331634449e+00, 4.813698637895e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.550053445068e+04, -1.332909810419e+03, 3.419723153077e+03], [2.960917974359e+00, 1.758331634449e+00, 4.813698637895e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.326369161712e+04, TOL));
         ok(isequalRel(a,       2.654466327018e+04, TOL));
         ok(isequalRel(ecc,     7.073368998088e-01, TOL));
         ok(isequalRel(incl,    1.127279528726e+00, TOL));
         ok(isequalRel(omega,   6.092786889201e+00, TOL));
         ok(isequalRel(argp,    4.713534822523e+00, TOL));
         ok(isequalRel(nu,      1.809626469631e+00, TOL));
         ok(isequalRel(m,       3.864720570250e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
         // 9998
     });

test('[-1.136218265118e+04, -3.511755867813e+04, -5.413625379945e+03], [3.137861261368e+00, -1.011678260484e+00, 2.675100585537e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.136218265118e+04, -3.511755867813e+04, -5.413625379945e+03], [3.137861261368e+00, -1.011678260484e+00, 2.675100585537e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       3.819332941306e+04, TOL));
         ok(isequalRel(a,       3.822152719601e+04, TOL));
         ok(isequalRel(ecc,     2.716148207783e-02, TOL));
         ok(isequalRel(incl,    1.660039456503e-01, TOL));
         ok(isequalRel(omega,   5.465755189972e+00, TOL));
         ok(isequalRel(argp,    5.712511259082e+00, TOL));
         ok(isequalRel(nu,      5.781740115703e+00, TOL));
         ok(isequalRel(m,       5.807392877827e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[3.092534992889e+02, -3.696043090143e+04, -4.198480076703e+03], [3.292429375074e+00, -2.166045605727e-03, 4.021116276931e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([3.092534992889e+02, -3.696043090143e+04, -4.198480076703e+03], [3.292429375074e+00, -2.166045605727e-03, 4.021116276931e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       3.819335448608e+04, TOL));
         ok(isequalRel(a,       3.822156291155e+04, TOL));
         ok(isequalRel(ecc,     2.716659459679e-02, TOL));
         ok(isequalRel(incl,    1.660040209206e-01, TOL));
         ok(isequalRel(omega,   5.465744128483e+00, TOL));
         ok(isequalRel(argp,    5.713014473641e+00, TOL));
         ok(isequalRel(nu,      6.101465692941e+00, TOL));
         ok(isequalRel(m,       6.111091464856e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.194904009077e+04, -3.512737816804e+04, -2.565898064678e+03], [3.119942783565e+00, 1.012096443731e+00, 4.972840999856e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.194904009077e+04, -3.512737816804e+04, -2.565898064678e+03], [3.119942783565e+00, 1.012096443731e+00, 4.972840999856e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       3.819338713068e+04, TOL));
         ok(isequalRel(a,       3.822159757428e+04, TOL));
         ok(isequalRel(ecc,     2.716755405657e-02, TOL));
         ok(isequalRel(incl,    1.660039993500e-01, TOL));
         ok(isequalRel(omega,   5.465741779626e+00, TOL));
         ok(isequalRel(argp,    5.713558783583e+00, TOL));
         ok(isequalRel(nu,      1.389307149831e-01, TOL));
         ok(isequalRel(m,       1.315553572091e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.240045329336e+04, -2.979863236321e+04, -6.779151512206e+02], [2.638533343919e+00, 1.922477736227e+00, 5.427929125821e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.240045329336e+04, -2.979863236321e+04, -6.779151512206e+02], [2.638533343919e+00, 1.922477736227e+00, 5.427929125821e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       3.819341647455e+04, TOL));
         ok(isequalRel(a,       3.822161910435e+04, TOL));
         ok(isequalRel(ecc,     2.716378367535e-02, TOL));
         ok(isequalRel(incl,    1.660030143820e-01, TOL));
         ok(isequalRel(omega,   5.465746006334e+00, TOL));
         ok(isequalRel(argp,    5.714088661415e+00, TOL));
         ok(isequalRel(nu,      4.588417955321e-01, TOL));
         ok(isequalRel(m,       4.352126617664e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[3.064084752458e+04, -2.152502340201e+04, 1.277348087222e+03], [1.903464941061e+00, 2.634294311900e+00, 5.345409335058e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([3.064084752458e+04, -2.152502340201e+04, 1.277348087222e+03], [1.903464941061e+00, 2.634294311900e+00, 5.345409335058e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       3.819343579109e+04, TOL));
         ok(isequalRel(a,       3.822162135699e+04, TOL));
         ok(isequalRel(ecc,     2.715556395731e-02, TOL));
         ok(isequalRel(incl,    1.660006040125e-01, TOL));
         ok(isequalRel(omega,   5.465751927151e+00, TOL));
         ok(isequalRel(argp,    5.714541220345e+00, TOL));
         ok(isequalRel(nu,      7.764561441336e-01, TOL));
         ok(isequalRel(m,       7.389455208803e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[3.589956788035e+04, -1.115271158138e+04, 3.108725352380e+03], [9.973930448389e-01, 3.079858547670e+00, 4.748732906668e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([3.589956788035e+04, -1.115271158138e+04, 3.108725352380e+03], [9.973930448389e-01, 3.079858547670e+00, 4.748732906668e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       3.819344493284e+04, TOL));
         ok(isequalRel(a,       3.822160664034e+04, TOL));
         ok(isequalRel(ecc,     2.714407348493e-02, TOL));
         ok(isequalRel(incl,    1.659968936727e-01, TOL));
         ok(isequalRel(omega,   5.465754089545e+00, TOL));
         ok(isequalRel(argp,    5.714867507976e+00, TOL));
         ok(isequalRel(nu,      1.090500167808e+00, TOL));
         ok(isequalRel(m,       1.042807997579e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[3.773245438600e+04, 2.881882105381e+02, 4.643875874950e+03], [1.665222633917e-02, 3.225184410378e+00, 3.716697456563e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([3.773245438600e+04, 2.881882105381e+02, 4.643875874950e+03], [1.665222633917e-02, 3.225184410378e+00, 3.716697456563e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       3.819344948911e+04, TOL));
         ok(isequalRel(a,       3.822158392484e+04, TOL));
         ok(isequalRel(ecc,     2.713093521576e-02, TOL));
         ok(isequalRel(incl,    1.659925056170e-01, TOL));
         ok(isequalRel(omega,   5.465748738322e+00, TOL));
         ok(isequalRel(argp,    5.715046709631e+00, TOL));
         ok(isequalRel(nu,      1.400107160725e+00, TOL));
         ok(isequalRel(m,       1.346824424330e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[3.604592961699e+04, 1.170661816230e+04, 5.746326465740e+03], [-9.424090646217e-01, 3.069888941134e+00, 2.366629804474e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([3.604592961699e+04, 1.170661816230e+04, 5.746326465740e+03], [-9.424090646217e-01, 3.069888941134e+00, 2.366629804474e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       3.819345750953e+04, TOL));
         ok(isequalRel(a,       3.822156435229e+04, TOL));
         ok(isequalRel(ecc,     2.711763450764e-02, TOL));
         ok(isequalRel(incl,    1.659882713397e-01, TOL));
         ok(isequalRel(omega,   5.465735117529e+00, TOL));
         ok(isequalRel(argp,    5.715083579847e+00, TOL));
         ok(isequalRel(nu,      1.704879207196e+00, TOL));
         ok(isequalRel(m,       1.650990743932e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[3.107677273609e+04, 2.206344379776e+04, 6.325934037052e+03], [-1.794027975990e+00, 2.642072476104e+00, 8.355612737497e-02], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([3.107677273609e+04, 2.206344379776e+04, 6.325934037052e+03], [-1.794027975990e+00, 2.642072476104e+00, 8.355612737497e-02], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       3.819347564734e+04, TOL));
         ok(isequalRel(a,       3.822155674506e+04, TOL));
         ok(isequalRel(ecc,     2.710521487919e-02, TOL));
         ok(isequalRel(incl,    1.659849043412e-01, TOL));
         ok(isequalRel(omega,   5.465715420626e+00, TOL));
         ok(isequalRel(argp,    5.714994340560e+00, TOL));
         ok(isequalRel(nu,      2.004889883980e+00, TOL));
         ok(isequalRel(m,       1.955288660470e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.334126015320e+04, 3.046088002531e+04, 6.342917078955e+03], [-2.469409743480e+00, 1.990861657683e+00, -7.361209612670e-02], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.334126015320e+04, 3.046088002531e+04, 6.342917078955e+03], [-2.469409743480e+00, 1.990861657683e+00, -7.361209612670e-02], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       3.819350637614e+04, TOL));
         ok(isequalRel(a,       3.822156498717e+04, TOL));
         ok(isequalRel(ecc,     2.709435717698e-02, TOL));
         ok(isequalRel(incl,    1.659827683007e-01, TOL));
         ok(isequalRel(omega,   5.465693694718e+00, TOL));
         ok(isequalRel(argp,    5.714793912496e+00, TOL));
         ok(isequalRel(nu,      2.300636343814e+00, TOL));
         ok(isequalRel(m,       2.259699443657e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.356839733054e+04, 3.620445930900e+04, 5.806795487331e+03], [-2.919354203070e+00, 1.178920217102e+00, -2.216468135390e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.356839733054e+04, 3.620445930900e+04, 5.806795487331e+03], [-2.919354203070e+00, 1.178920217102e+00, -2.216468135390e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       3.819354705379e+04, TOL));
         ok(isequalRel(a,       3.822158764620e+04, TOL));
         ok(isequalRel(ecc,     2.708564805003e-02, TOL));
         ok(isequalRel(incl,    1.659817986307e-01, TOL));
         ok(isequalRel(omega,   5.465674321756e+00, TOL));
         ok(isequalRel(argp,    5.714493185593e+00, TOL));
         ok(isequalRel(nu,      2.592956156753e+00, TOL));
         ok(isequalRel(m,       2.564208091348e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.628587624197e+03, 3.884010855897e+04, 4.771919798544e+03], [-3.114400514097e+00, 2.762391085556e-01, -3.489264012615e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.628587624197e+03, 3.884010855897e+04, 4.771919798544e+03], [-3.114400514097e+00, 2.762391085556e-01, -3.489264012615e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       3.819359075580e+04, TOL));
         ok(isequalRel(a,       3.822161919870e+04, TOL));
         ok(isequalRel(ecc,     2.707976836312e-02, TOL));
         ok(isequalRel(incl,    1.659815648770e-01, TOL));
         ok(isequalRel(omega,   5.465660640542e+00, TOL));
         ok(isequalRel(argp,    5.714105842603e+00, TOL));
         ok(isequalRel(nu,      2.882928008781e+00, TOL));
         ok(isequalRel(m,       2.868797803699e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-8.535815981575e+03, 3.817179073851e+04, 3.331003112854e+03], [-3.043839957770e+00, -6.444625274928e-01, -4.458088940627e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-8.535815981575e+03, 3.817179073851e+04, 3.331003112854e+03], [-3.043839957770e+00, -6.444625274928e-01, -4.458088940627e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       3.819362832618e+04, TOL));
         ok(isequalRel(a,       3.822165200101e+04, TOL));
         ok(isequalRel(ecc,     2.707745330068e-02, TOL));
         ok(isequalRel(incl,    1.659814258863e-01, TOL));
         ok(isequalRel(omega,   5.465654044585e+00, TOL));
         ok(isequalRel(argp,    5.713657914150e+00, TOL));
         ok(isequalRel(nu,      3.171773308210e+00, TOL));
         ok(isequalRel(m,       3.173441275497e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
         // 11801
     });

test('[-3.305221486939e+03, 3.241084323331e+04, -2.469716974954e+04], [-1.301137319152e+00, -1.151315600194e+00, -2.833358225210e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-3.305221486939e+03, 3.241084323331e+04, -2.469716974954e+04], [-1.301137319152e+00, -1.151315600194e+00, -2.833358225210e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.129501876844e+04, TOL));
         ok(isequalRel(a,       2.430300259005e+04, TOL));
         ok(isequalRel(ecc,     7.316022415966e-01, TOL));
         ok(isequalRel(incl,    8.159085435313e-01, TOL));
         ok(isequalRel(omega,   4.020007088147e+00, TOL));
         ok(isequalRel(argp,    8.311170660592e-01, TOL));
         ok(isequalRel(nu,      3.288549055618e+00, TOL));
         ok(isequalRel(m,       3.775604547447e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.427129083858e+04, 2.411044309009e+04, -4.725763201432e+03], [-3.205045281019e-01, 2.679841539187e+00, -2.084054354533e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.427129083858e+04, 2.411044309009e+04, -4.725763201432e+03], [-3.205045281019e-01, 2.679841539187e+00, -2.084054354533e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.129686132652e+04, TOL));
         ok(isequalRel(a,       2.426089469893e+04, TOL));
         ok(isequalRel(ecc,     7.309987995342e-01, TOL));
         ok(isequalRel(incl,    8.160672314021e-01, TOL));
         ok(isequalRel(omega,   4.018633568569e+00, TOL));
         ok(isequalRel(argp,    8.325537420029e-01, TOL));
         ok(isequalRel(nu,      2.539391847291e+00, TOL));
         ok(isequalRel(m,       1.096451998254e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-9.990058000092e+03, 2.271734212448e+04, -2.361688515553e+04], [-1.016674392241e+00, -2.290267980770e+00, 7.289233366775e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-9.990058000092e+03, 2.271734212448e+04, -2.361688515553e+04], [-1.016674392241e+00, -2.290267980770e+00, 7.289233366775e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.129329858635e+04, TOL));
         ok(isequalRel(a,       2.421635939714e+04, TOL));
         ok(isequalRel(ecc,     7.305135354946e-01, TOL));
         ok(isequalRel(incl,    8.158422322268e-01, TOL));
         ok(isequalRel(omega,   4.017370238917e+00, TOL));
         ok(isequalRel(argp,    8.336752447877e-01, TOL));
         ok(isequalRel(nu,      3.550285442989e+00, TOL));
         ok(isequalRel(m,       4.710143401486e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[9.787878362555e+03, 3.375332249667e+04, -1.503079874625e+04], [-1.094251552849e+00, 9.235899056171e-01, -1.522311007671e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([9.787878362555e+03, 3.375332249667e+04, -1.503079874625e+04], [-1.094251552849e+00, 9.235899056171e-01, -1.522311007671e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.129614480496e+04, TOL));
         ok(isequalRel(a,       2.417427262894e+04, TOL));
         ok(isequalRel(ecc,     7.298769657158e-01, TOL));
         ok(isequalRel(incl,    8.159902049965e-01, TOL));
         ok(isequalRel(omega,   4.016125550354e+00, TOL));
         ok(isequalRel(argp,    8.349048292128e-01, TOL));
         ok(isequalRel(nu,      2.876960270493e+00, TOL));
         ok(isequalRel(m,       2.050272913542e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
         // 14128
     });

test('[1.826333439094e+04, 3.815996004751e+04, 4.186183040854e+03], [-2.744396611244e+00, 1.255583260398e+00, 5.285589317648e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.826333439094e+04, 3.815996004751e+04, 4.186183040854e+03], [-2.744396611244e+00, 1.255583260398e+00, 5.285589317648e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.256331147172e+04, TOL));
         ok(isequalRel(a,       4.256337391697e+04, TOL));
         ok(isequalRel(ecc,     1.211244188429e-03, TOL));
         ok(isequalRel(incl,    1.999642202937e-01, TOL));
         ok(isequalRel(omega,   6.143492809144e-01, TOL));
         ok(isequalRel(argp,    4.944521850335e-01, TOL));
         ok(isequalRel(nu,      2.423482789142e-02, TOL));
         ok(isequalRel(m,       2.417617831819e-02, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-3.023388407034e+03, 4.178313186459e+04, 7.273034129058e+03], [-3.035574792735e+00, -2.716565438489e-01, 3.096452507184e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-3.023388407034e+03, 4.178313186459e+04, 7.273034129058e+03], [-3.035574792735e+00, -2.716565438489e-01, 3.096452507184e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.256326302729e+04, TOL));
         ok(isequalRel(a,       4.256332482688e+04, TOL));
         ok(isequalRel(ecc,     1.204966652741e-03, TOL));
         ok(isequalRel(incl,    1.999636110323e-01, TOL));
         ok(isequalRel(omega,   6.143531882960e-01, TOL));
         ok(isequalRel(argp,    5.085652038890e-01, TOL));
         ok(isequalRel(nu,      5.289647058498e-01, TOL));
         ok(isequalRel(m,       5.277495058332e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.351634391907e+04, 3.442442065671e+04, 8.448498676927e+03], [-2.529120477190e+00, -1.726186020213e+00, 9.582303196373e-03], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.351634391907e+04, 3.442442065671e+04, 8.448498676927e+03], [-2.529120477190e+00, -1.726186020213e+00, 9.582303196373e-03], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.256324439401e+04, TOL));
         ok(isequalRel(a,       4.256330490154e+04, TOL));
         ok(isequalRel(ecc,     1.192304030227e-03, TOL));
         ok(isequalRel(incl,    1.999646095541e-01, TOL));
         ok(isequalRel(omega,   6.143418210298e-01, TOL));
         ok(isequalRel(argp,    5.183729941027e-01, TOL));
         ok(isequalRel(nu,      1.037694577457e+00, TOL));
         ok(isequalRel(m,       1.035641803106e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-3.783746699511e+04, 1.802839727170e+04, 7.406255402708e+03], [-1.360069524610e+00, -2.725794685791e+00, -2.925553488898e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-3.783746699511e+04, 1.802839727170e+04, 7.406255402708e+03], [-1.360069524610e+00, -2.725794685791e+00, -2.925553488898e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.256328622815e+04, TOL));
         ok(isequalRel(a,       4.256334508659e+04, TOL));
         ok(isequalRel(ecc,     1.175943608200e-03, TOL));
         ok(isequalRel(incl,    1.999690113383e-01, TOL));
         ok(isequalRel(omega,   6.143300338519e-01, TOL));
         ok(isequalRel(argp,    5.229160477085e-01, TOL));
         ok(isequalRel(nu,      1.551150302261e+00, TOL));
         ok(isequalRel(m,       1.548798910187e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-4.224358460661e+04, -3.093728877741e+03, 4.422917118012e+03], [1.631109188974e-01, -3.009980598000e+00, -5.175843617427e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-4.224358460661e+04, -3.093728877741e+03, 4.422917118012e+03], [1.631109188974e-01, -3.009980598000e+00, -5.175843617427e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.256336008212e+04, TOL));
         ok(isequalRel(a,       4.256341717014e+04, TOL));
         ok(isequalRel(ecc,     1.158121853711e-03, TOL));
         ok(isequalRel(incl,    1.999751914592e-01, TOL));
         ok(isequalRel(omega,   6.143331149090e-01, TOL));
         ok(isequalRel(argp,    5.204398044680e-01, TOL));
         ok(isequalRel(nu,      2.070994646747e+00, TOL));
         ok(isequalRel(m,       2.068961325284e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-3.559757919549e+04, -2.340791145393e+04, 2.820955438334e+02], [1.641405246118e+00, -2.506773678091e+00, -6.069634776032e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-3.559757919549e+04, -2.340791145393e+04, 2.820955438334e+02], [1.641405246118e+00, -2.506773678091e+00, -6.069634776032e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.256340628619e+04, TOL));
         ok(isequalRel(a,       4.256346198594e+04, TOL));
         ok(isequalRel(ecc,     1.143952893278e-03, TOL));
         ok(isequalRel(incl,    1.999797176361e-01, TOL));
         ok(isequalRel(omega,   6.143518194149e-01, TOL));
         ok(isequalRel(argp,    5.096236078464e-01, TOL));
         ok(isequalRel(nu,      2.598631981531e+00, TOL));
         ok(isequalRel(m,       2.597449013251e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.964919834455e+04, -3.760611623860e+04, -3.932715259483e+03], [2.689647055579e+00, -1.349150015803e+00, -5.377106977158e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.964919834455e+04, -3.760611623860e+04, -3.932715259483e+03], [2.689647055579e+00, -1.349150015803e+00, -5.377106977158e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.256339193849e+04, TOL));
         ok(isequalRel(a,       4.256344718713e+04, TOL));
         ok(isequalRel(ecc,     1.139311322585e-03, TOL));
         ok(isequalRel(incl,    1.999807072602e-01, TOL));
         ok(isequalRel(omega,   6.143717223771e-01, TOL));
         ok(isequalRel(argp,    4.935861669351e-01, TOL));
         ok(isequalRel(nu,      3.131180299349e+00, TOL));
         ok(isequalRel(m,       3.131156553664e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.431309121596e+03, -4.198204949668e+04, -7.120454670573e+03], [3.035263352650e+00, 1.608829452348e-01, -3.279939936737e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.431309121596e+03, -4.198204949668e+04, -7.120454670573e+03], [3.035263352650e+00, 1.608829452348e-01, -3.279939936737e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.256334266145e+04, TOL));
         ok(isequalRel(a,       4.256339847770e+04, TOL));
         ok(isequalRel(ecc,     1.145149449569e-03, TOL));
         ok(isequalRel(incl,    1.999796498645e-01, TOL));
         ok(isequalRel(omega,   6.143773078602e-01, TOL));
         ok(isequalRel(argp,    4.785992222853e-01, TOL));
         ok(isequalRel(nu,      3.662685446796e+00, TOL));
         ok(isequalRel(m,       3.663826471930e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.213697605384e+04, -3.538819823762e+04, -8.447623934009e+03], [2.587624888870e+00, 1.630097135750e+00, -3.234900433312e-02], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.213697605384e+04, -3.538819823762e+04, -8.447623934009e+03], [2.587624888870e+00, 1.630097135750e+00, -3.234900433312e-02], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.256331738705e+04, TOL));
         ok(isequalRel(a,       4.256337444632e+04, TOL));
         ok(isequalRel(ecc,     1.157830776929e-03, TOL));
         ok(isequalRel(incl,    1.999799528721e-01, TOL));
         ok(isequalRel(omega,   6.143670393452e-01, TOL));
         ok(isequalRel(argp,    4.685716993212e-01, TOL));
         ok(isequalRel(nu,      4.189544099786e+00, TOL));
         ok(isequalRel(m,       4.191551263798e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[3.705015790219e+04, -1.953723321425e+04, -7.564834635430e+03], [1.461844493729e+00, 2.674654255715e+00, 2.722021906567e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([3.705015790219e+04, -1.953723321425e+04, -7.564834635430e+03], [1.461844493729e+00, 2.674654255715e+00, 2.722021906567e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.256335111708e+04, TOL));
         ok(isequalRel(a,       4.256340979840e+04, TOL));
         ok(isequalRel(ecc,     1.174172010601e-03, TOL));
         ok(isequalRel(incl,    1.999836270292e-01, TOL));
         ok(isequalRel(omega,   6.143548671543e-01, TOL));
         ok(isequalRel(argp,    4.643882163404e-01, TOL));
         ok(isequalRel(nu,      4.711085143769e+00, TOL));
         ok(isequalRel(m,       4.713433487951e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[4.225381760945e+04, 1.431818675929e+03, -4.699876211736e+03], [-4.924733417179e-02, 3.019518960346e+00, 5.058900579504e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([4.225381760945e+04, 1.431818675929e+03, -4.699876211736e+03], [-4.924733417179e-02, 3.019518960346e+00, 5.058900579504e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.256342082877e+04, TOL));
         ok(isequalRel(a,       4.256348128345e+04, TOL));
         ok(isequalRel(ecc,     1.191780771710e-03, TOL));
         ok(isequalRel(incl,    1.999893147855e-01, TOL));
         ok(isequalRel(omega,   6.143566616914e-01, TOL));
         ok(isequalRel(argp,    4.671700755073e-01, TOL));
         ok(isequalRel(nu,      5.226262443973e+00, TOL));
         ok(isequalRel(m,       5.228337249439e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[3.636659147396e+04, 2.202354245720e+04, -6.014712182108e+02], [-1.549681545806e+00, 2.571788981157e+00, 6.070574177354e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([3.636659147396e+04, 2.202354245720e+04, -6.014712182108e+02], [-1.549681545806e+00, 2.571788981157e+00, 6.070574177354e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.256346799917e+04, TOL));
         ok(isequalRel(a,       4.256352988920e+04, TOL));
         ok(isequalRel(ecc,     1.205845104887e-03, TOL));
         ok(isequalRel(incl,    1.999935988194e-01, TOL));
         ok(isequalRel(omega,   6.143746421852e-01, TOL));
         ok(isequalRel(argp,    4.775995189039e-01, TOL));
         ok(isequalRel(nu,      5.734321009877e+00, TOL));
         ok(isequalRel(m,       5.735578263509e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.092212287985e+04, 3.682633975981e+04, 3.654911258864e+03], [-2.644070067530e+00, 1.447521215940e+00, 5.487229830555e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.092212287985e+04, 3.682633975981e+04, 3.654911258864e+03], [-2.644070067530e+00, 1.447521215940e+00, 5.487229830555e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.256345623778e+04, TOL));
         ok(isequalRel(a,       4.256351864422e+04, TOL));
         ok(isequalRel(ecc,     1.210865633436e-03, TOL));
         ok(isequalRel(incl,    1.999943527873e-01, TOL));
         ok(isequalRel(omega,   6.143950793217e-01, TOL));
         ok(isequalRel(argp,    4.927453176181e-01, TOL));
         ok(isequalRel(nu,      6.237991092039e+00, TOL));
         ok(isequalRel(m,       6.238100403848e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.377224182361e+01, 4.194551688402e+04, 6.950298917514e+03], [-3.043358385199e+00, -5.741743997494e-02, 3.461120940566e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.377224182361e+01, 4.194551688402e+04, 6.950298917514e+03], [-3.043358385199e+00, -5.741743997494e-02, 3.461120940566e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.256340763459e+04, TOL));
         ok(isequalRel(a,       4.256346951646e+04, TOL));
         ok(isequalRel(ecc,     1.205766439863e-03, TOL));
         ok(isequalRel(incl,    1.999928475332e-01, TOL));
         ok(isequalRel(omega,   6.144017443164e-01, TOL));
         ok(isequalRel(argp,    5.072832170683e-01, TOL));
         ok(isequalRel(nu,      4.591253600639e-01, TOL));
         ok(isequalRel(m,       4.580575207886e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.096417821076e+04, 3.603906206172e+04, 8.418919849633e+03], [-2.642795221088e+00, -1.546099885695e+00, 5.272585177377e-02], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.096417821076e+04, 3.603906206172e+04, 8.418919849633e+03], [-2.642795221088e+00, -1.546099885695e+00, 5.272585177377e-02], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.256338108624e+04, TOL));
         ok(isequalRel(a,       4.256344174337e+04, TOL));
         ok(isequalRel(ecc,     1.193775211743e-03, TOL));
         ok(isequalRel(incl,    1.999925049466e-01, TOL));
         ok(isequalRel(omega,   6.143919102857e-01, TOL));
         ok(isequalRel(argp,    5.177472101982e-01, TOL));
         ok(isequalRel(nu,      9.672534794013e-01, TOL));
         ok(isequalRel(m,       9.652887362883e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-3.640163863057e+04, 2.066975286162e+04, 7.677197693592e+03], [-1.549488154416e+00, -2.627052310288e+00, -2.540796524511e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-3.640163863057e+04, 2.066975286162e+04, 7.677197693592e+03], [-1.549488154416e+00, -2.627052310288e+00, -2.540796524511e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.256341420049e+04, TOL));
         ok(isequalRel(a,       4.256347324710e+04, TOL));
         ok(isequalRel(ecc,     1.177820064704e-03, TOL));
         ok(isequalRel(incl,    1.999955233781e-01, TOL));
         ok(isequalRel(omega,   6.143790051276e-01, TOL));
         ok(isequalRel(argp,    5.230792039779e-01, TOL));
         ok(isequalRel(nu,      1.480000229664e+00, TOL));
         ok(isequalRel(m,       1.477654481158e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-4.229830327543e+04, -1.190335111769e+02, 4.922963888414e+03], [-5.223276790967e-02, -3.018152669338e+00, -4.938273311773e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-4.229830327543e+04, -1.190335111769e+02, 4.922963888414e+03], [-5.223276790967e-02, -3.018152669338e+00, -4.938273311773e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.256348623508e+04, TOL));
         ok(isequalRel(a,       4.256354350565e+04, TOL));
         ok(isequalRel(ecc,     1.159970274751e-03, TOL));
         ok(isequalRel(incl,    2.000007253048e-01, TOL));
         ok(isequalRel(omega,   6.143793298847e-01, TOL));
         ok(isequalRel(argp,    5.216947719625e-01, TOL));
         ok(isequalRel(nu,      1.998835589395e+00, TOL));
         ok(isequalRel(m,       1.996724188649e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-3.712562383511e+04, -2.087963058368e+04, 8.798697134838e+02], [1.456499841448e+00, -2.619358420834e+00, -6.040816936099e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-3.712562383511e+04, -2.087963058368e+04, 8.798697134838e+02], [1.456499841448e+00, -2.619358420834e+00, -6.040816936099e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.256353844903e+04, TOL));
         ok(isequalRel(a,       4.256359424101e+04, TOL));
         ok(isequalRel(ecc,     1.144897789529e-03, TOL));
         ok(isequalRel(incl,    2.000047339312e-01, TOL));
         ok(isequalRel(omega,   6.143960715315e-01, TOL));
         ok(isequalRel(argp,    5.119885456407e-01, TOL));
         ok(isequalRel(nu,      2.525463771786e+00, TOL));
         ok(isequalRel(m,       2.524139616495e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.225012320553e+04, -3.618274736487e+04, -3.393153651825e+03], [2.583161225931e+00, -1.536647628308e+00, -5.564045550439e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.225012320553e+04, -3.618274736487e+04, -3.393153651825e+03], [2.583161225931e+00, -1.536647628308e+00, -5.564045550439e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.256353124784e+04, TOL));
         ok(isequalRel(a,       4.256358644091e+04, TOL));
         ok(isequalRel(ecc,     1.138736282854e-03, TOL));
         ok(isequalRel(incl,    2.000052812309e-01, TOL));
         ok(isequalRel(omega,   6.144163207035e-01, TOL));
         ok(isequalRel(argp,    4.962904139586e-01, TOL));
         ok(isequalRel(nu,      3.057695076183e+00, TOL));
         ok(isequalRel(m,       3.057504063283e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.563062586537e+03, -4.203543179159e+04, -6.780021617604e+03], [3.034917505677e+00, -5.270204580917e-02, -3.633956537186e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.563062586537e+03, -4.203543179159e+04, -6.780021617604e+03], [3.034917505677e+00, -5.270204580917e-02, -3.633956537186e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.256348248009e+04, TOL));
         ok(isequalRel(a,       4.256353811591e+04, TOL));
         ok(isequalRel(ecc,     1.143295172548e-03, TOL));
         ok(isequalRel(incl,    2.000034094660e-01, TOL));
         ok(isequalRel(omega,   6.144236303540e-01, TOL));
         ok(isequalRel(argp,    4.808128347184e-01, TOL));
         ok(isequalRel(nu,      3.589668189295e+00, TOL));
         ok(isequalRel(m,       3.590659579127e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.953164069587e+04, -3.690565470956e+04, -8.395468920325e+03], [2.693682199348e+00, 1.446079999021e+00, -7.525605408714e-02], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.953164069587e+04, -3.690565470956e+04, -8.395468920325e+03], [2.693682199348e+00, 1.446079999021e+00, -7.525605408714e-02], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.256344973105e+04, TOL));
         ok(isequalRel(a,       4.256350653823e+04, TOL));
         ok(isequalRel(ecc,     1.155268452626e-03, TOL));
         ok(isequalRel(incl,    2.000024504808e-01, TOL));
         ok(isequalRel(omega,   6.144140650036e-01, TOL));
         ok(isequalRel(argp,    4.700009390617e-01, TOL));
         ok(isequalRel(nu,      4.117250443365e+00, TOL));
         ok(isequalRel(m,       4.119164661096e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[3.551653506142e+04, -2.212371916638e+04, -7.815045169350e+03], [1.646882125394e+00, 2.568416058022e+00, 2.329859120639e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([3.551653506142e+04, -2.212371916638e+04, -7.815045169350e+03], [1.646882125394e+00, 2.568416058022e+00, 2.329859120639e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.256347438515e+04, TOL));
         ok(isequalRel(a,       4.256353277254e+04, TOL));
         ok(isequalRel(ecc,     1.171225937288e-03, TOL));
         ok(isequalRel(incl,    2.000047867258e-01, TOL));
         ok(isequalRel(omega,   6.144000067801e-01, TOL));
         ok(isequalRel(argp,    4.649570525361e-01, TOL));
         ok(isequalRel(nu,      4.639569211560e+00, TOL));
         ok(isequalRel(m,       4.641905604283e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[4.219603535976e+04, -1.547326467506e+03, -5.187394019815e+03], [1.664918412208e-01, 3.019211548679e+00, 4.806657802209e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([4.219603535976e+04, -1.547326467506e+03, -5.187394019815e+03], [1.664918412208e-01, 3.019211548679e+00, 4.806657802209e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.256354133849e+04, TOL));
         ok(isequalRel(a,       4.256360149904e+04, TOL));
         ok(isequalRel(ecc,     1.188876403708e-03, TOL));
         ok(isequalRel(incl,    2.000095213478e-01, TOL));
         ok(isequalRel(omega,   6.143981282150e-01, TOL));
         ok(isequalRel(argp,    4.666786109422e-01, TOL));
         ok(isequalRel(nu,      5.155722578143e+00, TOL));
         ok(isequalRel(m,       5.157869644151e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[3.780225393045e+04, 1.943357330019e+04, -1.198666342264e+03], [-1.359930579954e+00, 2.677830902827e+00, 6.025074661403e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([3.780225393045e+04, 1.943357330019e+04, -1.198666342264e+03], [-1.359930579954e+00, 2.677830902827e+00, 6.025074661403e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.256359375888e+04, TOL));
         ok(isequalRel(a,       4.256365543928e+04, TOL));
         ok(isequalRel(ecc,     1.203799374030e-03, TOL));
         ok(isequalRel(incl,    2.000133363877e-01, TOL));
         ok(isequalRel(omega,   6.144130622940e-01, TOL));
         ok(isequalRel(argp,    4.761262427349e-01, TOL));
         ok(isequalRel(nu,      5.664696981605e+00, TOL));
         ok(isequalRel(m,       5.666091891122e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
         // 16925
     });

test('[1.233983273749e+04, -2.771144478711e+03, 1.890457603433e+04], [-8.712476135168e-01, 2.600917692680e+00, 5.815600021766e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.233983273749e+04, -2.771144478711e+03, 1.890457603433e+04], [-8.712476135168e-01, 2.600917692680e+00, 5.815600021766e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.008228702396e+04, TOL));
         ok(isequalRel(a,       1.466117237731e+04, TOL));
         ok(isequalRel(ecc,     5.588503598295e-01, TOL));
         ok(isequalRel(incl,    1.083553580075e+00, TOL));
         ok(isequalRel(omega,   5.148194312060e+00, TOL));
         ok(isequalRel(argp,    4.278783814126e+00, TOL));
         ok(isequalRel(nu,      3.228842773114e+00, TOL));
         ok(isequalRel(m,       3.396444611351e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-3.385002156585e+03, 7.538139557293e+03, 2.005900861598e+02], [-2.023512864987e+00, -4.261808344403e+00, -6.856385786922e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-3.385002156585e+03, 7.538139557293e+03, 2.005900861598e+02], [-2.023512864987e+00, -4.261808344403e+00, -6.856385786922e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.009076947975e+04, TOL));
         ok(isequalRel(a,       1.466571439547e+04, TOL));
         ok(isequalRel(ecc,     5.585233356674e-01, TOL));
         ok(isequalRel(incl,    1.083790293233e+00, TOL));
         ok(isequalRel(omega,   5.147307748424e+00, TOL));
         ok(isequalRel(argp,    4.278503399232e+00, TOL));
         ok(isequalRel(nu,      5.118810788625e+00, TOL));
         ok(isequalRel(m,       5.957769084386e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.280522442200e+04, -1.025894667177e+04, 1.378016486738e+04], [6.192792241561e-01, 1.821510541914e+00, 2.507365975050e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.280522442200e+04, -1.025894667177e+04, 1.378016486738e+04], [6.192792241561e-01, 1.821510541914e+00, 2.507365975050e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.008413968982e+04, TOL));
         ok(isequalRel(a,       1.464511776515e+04, TOL));
         ok(isequalRel(ecc,     5.580621374190e-01, TOL));
         ok(isequalRel(incl,    1.083647457330e+00, TOL));
         ok(isequalRel(omega,   5.146685540082e+00, TOL));
         ok(isequalRel(argp,    4.278736934995e+00, TOL));
         ok(isequalRel(nu,      2.819537459986e+00, TOL));
         ok(isequalRel(m,       2.238092684462e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[5.682465563184e+03, 7.199302704725e+03, 1.543767134070e+04], [-2.474365405658e+00, 2.087897335908e+00, -2.583767459781e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([5.682465563184e+03, 7.199302704725e+03, 1.543767134070e+04], [-2.474365405658e+00, 2.087897335908e+00, -2.583767459781e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.007991801528e+04, TOL));
         ok(isequalRel(a,       1.463390300072e+04, TOL));
         ok(isequalRel(ecc,     5.578477826700e-01, TOL));
         ok(isequalRel(incl,    1.083534633860e+00, TOL));
         ok(isequalRel(omega,   5.145682030509e+00, TOL));
         ok(isequalRel(argp,    4.279555676399e+00, TOL));
         ok(isequalRel(nu,      3.807540447635e+00, TOL));
         ok(isequalRel(m,       4.802737937689e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[7.628942439817e+03, -1.285272097492e+04, 2.902872089813e+03], [2.748131081188e+00, -7.400845792519e-01, 4.125307943253e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([7.628942439817e+03, -1.285272097492e+04, 2.902872089813e+03], [2.748131081188e+00, -7.400845792519e-01, 4.125307943253e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.008691412122e+04, TOL));
         ok(isequalRel(a,       1.463236232597e+04, TOL));
         ok(isequalRel(ecc,     5.573540142195e-01, TOL));
         ok(isequalRel(incl,    1.083775715098e+00, TOL));
         ok(isequalRel(omega,   5.145029910444e+00, TOL));
         ok(isequalRel(argp,    4.279385661733e+00, TOL));
         ok(isequalRel(nu,      2.221250150424e+00, TOL));
         ok(isequalRel(m,       1.087728873960e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.153164866625e+04, -8.582754273594e+02, 1.908685993771e+04], [-1.170071901192e+00, 2.660311985956e+00, 9.600570477341e-02], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.153164866625e+04, -8.582754273594e+02, 1.908685993771e+04], [-1.170071901192e+00, 2.660311985956e+00, 9.600570477341e-02], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.007684800826e+04, TOL));
         ok(isequalRel(a,       1.461840455217e+04, TOL));
         ok(isequalRel(ecc,     5.573812749174e-01, TOL));
         ok(isequalRel(incl,    1.083535548823e+00, TOL));
         ok(isequalRel(omega,   5.144254140050e+00, TOL));
         ok(isequalRel(argp,    4.279260999392e+00, TOL));
         ok(isequalRel(nu,      3.320785430055e+00, TOL));
         ok(isequalRel(m,       3.658151267708e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-3.866980695155e+03, 2.603734427863e+03, -4.577364845770e+03], [1.157257297884e+00, -8.453281163796e+00, -4.683959406933e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-3.866980695155e+03, 2.603734427863e+03, -4.577364845770e+03], [1.157257297884e+00, -8.453281163796e+00, -4.683959406933e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.008128878519e+04, TOL));
         ok(isequalRel(a,       1.460999567395e+04, TOL));
         ok(isequalRel(ecc,     5.567523549887e-01, TOL));
         ok(isequalRel(incl,    1.083617536600e+00, TOL));
         ok(isequalRel(omega,   5.143540400919e+00, TOL));
         ok(isequalRel(argp,    4.279470057337e+00, TOL));
         ok(isequalRel(nu,      6.060784968882e+00, TOL));
         ok(isequalRel(m,       6.230272275488e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.305477732721e+04, -8.707927577304e+03, 1.553763259903e+04], [2.298467482862e-01, 2.119467054482e+00, 2.063396852035e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.305477732721e+04, -8.707927577304e+03, 1.553763259903e+04], [2.298467482862e-01, 2.119467054482e+00, 2.063396852035e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.007792130833e+04, TOL));
         ok(isequalRel(a,       1.460230011641e+04, TOL));
         ok(isequalRel(ecc,     5.566328651392e-01, TOL));
         ok(isequalRel(incl,    1.083615187153e+00, TOL));
         ok(isequalRel(omega,   5.142752074982e+00, TOL));
         ok(isequalRel(argp,    4.279103838804e+00, TOL));
         ok(isequalRel(nu,      2.925115255302e+00, TOL));
         ok(isequalRel(m,       2.522221282650e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[3.496910646522e+03, 8.712839197782e+03, 1.284581838327e+04], [-2.782184997107e+00, 1.552950643964e+00, -3.554436131460e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([3.496910646522e+03, 8.712839197782e+03, 1.284581838327e+04], [-2.782184997107e+00, 1.552950643964e+00, -3.554436131460e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.007623882633e+04, TOL));
         ok(isequalRel(a,       1.459122383131e+04, TOL));
         ok(isequalRel(ecc,     5.562657187843e-01, TOL));
         ok(isequalRel(incl,    1.083560229571e+00, TOL));
         ok(isequalRel(omega,   5.141703401609e+00, TOL));
         ok(isequalRel(argp,    4.279928201046e+00, TOL));
         ok(isequalRel(nu,      3.992590610128e+00, TOL));
         ok(isequalRel(m,       5.097936928032e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[9.593074247290e+03, -1.302375963608e+04, 6.250464849314e+03], [2.072666375563e+00, 2.787353335092e-01, 3.778111073109e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([9.593074247290e+03, -1.302375963608e+04, 6.250464849314e+03], [2.072666375563e+00, 2.787353335092e-01, 3.778111073109e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.008071982267e+04, TOL));
         ok(isequalRel(a,       1.458792369040e+04, TOL));
         ok(isequalRel(ecc,     5.558490397474e-01, TOL));
         ok(isequalRel(incl,    1.083739100982e+00, TOL));
         ok(isequalRel(omega,   5.141139656031e+00, TOL));
         ok(isequalRel(argp,    4.279556991035e+00, TOL));
         ok(isequalRel(nu,      2.423750578165e+00, TOL));
         ok(isequalRel(m,       1.394389780453e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.028479205084e+04, 1.487899141688e+03, 1.882437381327e+04], [-1.530335053060e+00, 2.663107729732e+00, -5.422059660099e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.028479205084e+04, 1.487899141688e+03, 1.882437381327e+04], [-1.530335053060e+00, 2.663107729732e+00, -5.422059660099e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.007142448849e+04, TOL));
         ok(isequalRel(a,       1.457558486378e+04, TOL));
         ok(isequalRel(ecc,     5.558964845678e-01, TOL));
         ok(isequalRel(incl,    1.083518746725e+00, TOL));
         ok(isequalRel(omega,   5.140275858581e+00, TOL));
         ok(isequalRel(argp,    4.279777808907e+00, TOL));
         ok(isequalRel(nu,      3.438269293796e+00, TOL));
         ok(isequalRel(m,       3.975478979288e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-9.846203514641e+02, -5.187034808132e+03, -5.745595941443e+03], [4.340271916475e+00, -7.266811354072e+00, 1.777668888176e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-9.846203514641e+02, -5.187034808132e+03, -5.745595941443e+03], [4.340271916475e+00, -7.266811354072e+00, 1.777668888176e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.007547821096e+04, TOL));
         ok(isequalRel(a,       1.456796242087e+04, TOL));
         ok(isequalRel(ecc,     5.553207140524e-01, TOL));
         ok(isequalRel(incl,    1.083595022968e+00, TOL));
         ok(isequalRel(omega,   5.139302233252e+00, TOL));
         ok(isequalRel(argp,    4.279417376202e+00, TOL));
         ok(isequalRel(nu,      1.018738373234e+00, TOL));
         ok(isequalRel(m,       2.759029633628e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
         // 20413
     });

test('[-1.516690528051e+05, -5.645204545496e+03, -2.198515921184e+03], [-8.691828888193e-01, -8.707598718530e-01, 1.565082188288e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.516690528051e+05, -5.645204545496e+03, -2.198515921184e+03], [-8.691828888193e-01, -8.707598718530e-01, 1.565082188288e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.223650008228e+04, TOL));
         ok(isequalRel(a,       1.073294720201e+05, TOL));
         ok(isequalRel(ecc,     7.787670244171e-01, TOL));
         ok(isequalRel(incl,    2.001796939418e-01, TOL));
         ok(isequalRel(omega,   3.250249893736e+00, TOL));
         ok(isequalRel(argp,    3.453743345086e+00, TOL));
         ok(isequalRel(nu,      2.756537247626e+00, TOL));
         ok(isequalRel(m,       1.472210466701e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.574977165749e+05, -1.188499595074e+04, -1.061444394024e+03], [-7.496579608381e-01, -8.640167152926e-01, 1.577661011570e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.574977165749e+05, -1.188499595074e+04, -1.061444394024e+03], [-7.496579608381e-01, -8.640167152926e-01, 1.577661011570e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.224241158149e+04, TOL));
         ok(isequalRel(a,       1.073295427520e+05, TOL));
         ok(isequalRel(ecc,     7.787318278023e-01, TOL));
         ok(isequalRel(incl,    2.001227292300e-01, TOL));
         ok(isequalRel(omega,   3.250048851194e+00, TOL));
         ok(isequalRel(argp,    3.453875090509e+00, TOL));
         ok(isequalRel(nu,      2.795498343882e+00, TOL));
         ok(isequalRel(m,       1.601689785835e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.624983225558e+05, -1.806299733167e+04, 8.100915252769e+01], [-6.389803775814e-01, -8.536871051597e-01, 1.580989915460e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.624983225558e+05, -1.806299733167e+04, 8.100915252769e+01], [-6.389803775814e-01, -8.536871051597e-01, 1.580989915460e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.224804085139e+04, TOL));
         ok(isequalRel(a,       1.073296019418e+05, TOL));
         ok(isequalRel(ecc,     7.786982908955e-01, TOL));
         ok(isequalRel(incl,    2.000695909108e-01, TOL));
         ok(isequalRel(omega,   3.249852878979e+00, TOL));
         ok(isequalRel(argp,    3.453999927519e+00, TOL));
         ok(isequalRel(nu,      2.831678475947e+00, TOL));
         ok(isequalRel(m,       1.731174049415e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.667287601092e+05, -2.415599648299e+04, 1.222841286769e+03], [-5.356006870121e-01, -8.404554444322e-01, 1.576808569901e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.667287601092e+05, -2.415599648299e+04, 1.222841286769e+03], [-5.356006870121e-01, -8.404554444322e-01, 1.576808569901e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.225337844802e+04, TOL));
         ok(isequalRel(a,       1.073296517182e+05, TOL));
         ok(isequalRel(ecc,     7.786664754119e-01, TOL));
         ok(isequalRel(incl,    2.000203280450e-01, TOL));
         ok(isequalRel(omega,   3.249662137538e+00, TOL));
         ok(isequalRel(argp,    3.454117819154e+00, TOL));
         ok(isequalRel(nu,      2.865606725861e+00, TOL));
         ok(isequalRel(m,       1.860662946097e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.699358192459e+05, -3.176729787964e+04, 2.749015403445e+03], [-4.300504306249e-01, -8.289041834268e-01, 1.578123404668e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.699358192459e+05, -3.176729787964e+04, 2.749015403445e+03], [-4.300504306249e-01, -8.289041834268e-01, 1.578123404668e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.225847861613e+04, TOL));
         ok(isequalRel(a,       1.073296933043e+05, TOL));
         ok(isequalRel(ecc,     7.786360598891e-01, TOL));
         ok(isequalRel(incl,    1.999749699292e-01, TOL));
         ok(isequalRel(omega,   3.247862176503e+00, TOL));
         ok(isequalRel(argp,    3.465612685631e+00, TOL));
         ok(isequalRel(nu,      2.897697282650e+00, TOL));
         ok(isequalRel(m,       1.990156205250e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.727030783182e+05, -3.766295639336e+04, 3.883600525786e+03], [-3.380048910818e-01, -8.102774874652e-01, 1.560200348876e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.727030783182e+05, -3.766295639336e+04, 3.883600525786e+03], [-3.380048910818e-01, -8.102774874652e-01, 1.560200348876e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.226320579553e+04, TOL));
         ok(isequalRel(a,       1.073297285991e+05, TOL));
         ok(isequalRel(ecc,     7.786078600369e-01, TOL));
         ok(isequalRel(incl,    1.999335699988e-01, TOL));
         ok(isequalRel(omega,   3.247674369277e+00, TOL));
         ok(isequalRel(argp,    3.465728297535e+00, TOL));
         ok(isequalRel(nu,      2.928282952468e+00, TOL));
         ok(isequalRel(m,       2.119653396692e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.748231933740e+05, -4.341755605219e+04, 5.003263128095e+03], [-2.502586222837e-01, -7.898286720211e-01, 1.537649030472e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.748231933740e+05, -4.341755605219e+04, 5.003263128095e+03], [-2.502586222837e-01, -7.898286720211e-01, 1.537649030472e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.226761498804e+04, TOL));
         ok(isequalRel(a,       1.073297581475e+05, TOL));
         ok(isequalRel(ecc,     7.785815482761e-01, TOL));
         ok(isequalRel(incl,    1.998961480294e-01, TOL));
         ok(isequalRel(omega,   3.247493155968e+00, TOL));
         ok(isequalRel(argp,    3.465833593204e+00, TOL));
         ok(isequalRel(nu,      2.957635499184e+00, TOL));
         ok(isequalRel(m,       2.249154231614e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.763246392577e+05, -4.901851958648e+04, 6.104850250015e+03], [-1.661366126847e-01, -7.677062623608e-01, 1.510922423753e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.763246392577e+05, -4.901851958648e+04, 6.104850250015e+03], [-1.661366126847e-01, -7.677062623608e-01, 1.510922423753e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.227169822849e+04, TOL));
         ok(isequalRel(a,       1.073297826406e+05, TOL));
         ok(isequalRel(ecc,     7.785571740818e-01, TOL));
         ok(isequalRel(incl,    1.998627234199e-01, TOL));
         ok(isequalRel(omega,   3.247318672342e+00, TOL));
         ok(isequalRel(argp,    3.465928555162e+00, TOL));
         ok(isequalRel(nu,      2.985982433197e+00, TOL));
         ok(isequalRel(m,       2.378658363389e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.772314214246e+05, -5.445412699497e+04, 7.185486616066e+03], [-8.506785380971e-02, -7.440015671476e-01, 1.480334033218e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.772314214246e+05, -5.445412699497e+04, 7.185486616066e+03], [-8.506785380971e-02, -7.440015671476e-01, 1.480334033218e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.227544800367e+04, TOL));
         ok(isequalRel(a,       1.073298026091e+05, TOL));
         ok(isequalRel(ecc,     7.785347838381e-01, TOL));
         ok(isequalRel(incl,    1.998333082686e-01, TOL));
         ok(isequalRel(omega,   3.247151040315e+00, TOL));
         ok(isequalRel(argp,    3.466013185231e+00, TOL));
         ok(isequalRel(nu,      3.013517951608e+00, TOL));
         ok(isequalRel(m,       2.508165437906e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.775637358323e+05, -5.971314859144e+04, 8.242484725914e+03], [-6.561729659597e-03, -7.187603090748e-01, 1.446086760399e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.775637358323e+05, -5.971314859144e+04, 8.242484725914e+03], [-6.561729659597e-03, -7.187603090748e-01, 1.446086760399e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.227885727864e+04, TOL));
         ok(isequalRel(a,       1.073298184567e+05, TOL));
         ok(isequalRel(ecc,     7.785144207609e-01, TOL));
         ok(isequalRel(incl,    1.998079073545e-01, TOL));
         ok(isequalRel(omega,   3.246990367681e+00, TOL));
         ok(isequalRel(argp,    3.466087504898e+00, TOL));
         ok(isequalRel(nu,      3.040411304260e+00, TOL));
         ok(isequalRel(m,       2.637675094174e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.773384802648e+05, -6.478454644698e+04, 9.273272200031e+03], [6.980994561026e-02, -6.919902383374e-01, 1.408292362313e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.773384802648e+05, -6.478454644698e+04, 9.273272200031e+03], [6.980994561026e-02, -6.919902383374e-01, 1.408292362313e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.228191952057e+04, TOL));
         ok(isequalRel(a,       1.073298304854e+05, TOL));
         ok(isequalRel(ecc,     7.784961248099e-01, TOL));
         ok(isequalRel(incl,    1.997865181124e-01, TOL));
         ok(isequalRel(omega,   3.246836747851e+00, TOL));
         ok(isequalRel(argp,    3.466151555602e+00, TOL));
         ok(isequalRel(nu,      3.066813191577e+00, TOL));
         ok(isequalRel(m,       2.767186964960e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.765696515146e+05, -6.965721976255e+04, 1.027533063459e+04], [1.444268782413e-01, -6.636658757354e-01, 1.366984192526e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.765696515146e+05, -6.965721976255e+04, 1.027533063459e+04], [1.444268782413e-01, -6.636658757354e-01, 1.366984192526e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.228462872044e+04, TOL));
         ok(isequalRel(a,       1.073298389116e+05, TOL));
         ok(isequalRel(ecc,     7.784799325977e-01, TOL));
         ok(isequalRel(incl,    1.997691306091e-01, TOL));
         ok(isequalRel(omega,   3.246690259610e+00, TOL));
         ok(isequalRel(argp,    3.466205398951e+00, TOL));
         ok(isequalRel(nu,      3.092860814165e+00, TOL));
         ok(isequalRel(m,       2.896700677442e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.752686529907e+05, -7.431977625463e+04, 1.124614177160e+04], [2.176313698749e-01, -6.337310905951e-01, 1.322124908760e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.752686529907e+05, -7.431977625463e+04, 1.124614177160e+04], [2.176313698749e-01, -6.337310905951e-01, 1.322124908760e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.228697941266e+04, TOL));
         ok(isequalRel(a,       1.073298438784e+05, TOL));
         ok(isequalRel(ecc,     7.784658772980e-01, TOL));
         ok(isequalRel(incl,    1.997557275233e-01, TOL));
         ok(isequalRel(omega,   3.246550966884e+00, TOL));
         ok(isequalRel(argp,    3.466249116887e+00, TOL));
         ok(isequalRel(nu,      3.118682005899e+00, TOL));
         ok(isequalRel(m,       3.026215853894e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.734445303961e+05, -7.876031560396e+04, 1.218313775212e+04], [2.897373248714e-01, -6.020999289137e-01, 1.273610170173e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.734445303961e+05, -7.876031560396e+04, 1.218313775212e+04], [2.897373248714e-01, -6.020999289137e-01, 1.273610170173e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.228896669280e+04, TOL));
         ok(isequalRel(a,       1.073298454624e+05, TOL));
         ok(isequalRel(ecc,     7.784539885554e-01, TOL));
         ok(isequalRel(incl,    1.997462841346e-01, TOL));
         ok(isequalRel(omega,   3.246418918541e+00, TOL));
         ok(isequalRel(argp,    3.466282811786e+00, TOL));
         ok(isequalRel(nu,      3.144398764351e+00, TOL));
         ok(isequalRel(m,       3.155732112386e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.711041481365e+05, -8.296621323591e+04, 1.308365278381e+04], [3.610377794607e-01, -5.686559032440e-01, 1.221268885320e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.711041481365e+05, -8.296621323591e+04, 1.308365278381e+04], [3.610377794607e-01, -5.686559032440e-01, 1.221268885320e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.229058623331e+04, TOL));
         ok(isequalRel(a,       1.073298436775e+05, TOL));
         ok(isequalRel(ecc,     7.784442923988e-01, TOL));
         ok(isequalRel(incl,    1.997407683213e-01, TOL));
         ok(isequalRel(omega,   3.246294148215e+00, TOL));
         ok(isequalRel(argp,    3.466306606515e+00, TOL));
         ok(isequalRel(nu,      3.170130419862e+00, TOL));
         ok(isequalRel(m,       3.285249067500e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.682523154380e+05, -8.692389363433e+04, 1.394487382716e+04], [4.318113960749e-01, -5.332497972119e-01, 1.164860217688e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.682523154380e+05, -8.692389363433e+04, 1.394487382716e+04], [4.318113960749e-01, -5.332497972119e-01, 1.164860217688e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.229183429747e+04, TOL));
         ok(isequalRel(a,       1.073298384763e+05, TOL));
         ok(isequalRel(ecc,     7.784368111594e-01, TOL));
         ok(isequalRel(incl,    1.997391405691e-01, TOL));
         ok(isequalRel(omega,   3.246176674149e+00, TOL));
         ok(isequalRel(argp,    3.466320644446e+00, TOL));
         ok(isequalRel(nu,      3.195996643139e+00, TOL));
         ok(isequalRel(m,       3.414766331066e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.648918683289e+05, -9.061858225954e+04, 1.476378794247e+04], [5.023282686524e-01, -4.956958964576e-01, 1.104067247985e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.648918683289e+05, -9.061858225954e+04, 1.476378794247e+04], [5.023282686524e-01, -4.956958964576e-01, 1.104067247985e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.229270775134e+04, TOL));
         ok(isequalRel(a,       1.073298297469e+05, TOL));
         ok(isequalRel(ecc,     7.784315633925e-01, TOL));
         ok(isequalRel(incl,    1.997413539910e-01, TOL));
         ok(isequalRel(omega,   3.246066499077e+00, TOL));
         ok(isequalRel(argp,    3.466325089422e+00, TOL));
         ok(isequalRel(nu,      3.222120473262e+00, TOL));
         ok(isequalRel(m,       3.544283512910e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.610237113982e+05, -9.403402398835e+04, 1.553712375729e+04], [5.728553207495e-01, -4.557664118588e-01, 1.038486882530e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.610237113982e+05, -9.403402398835e+04, 1.553712375729e+04], [5.728553207495e-01, -4.557664118588e-01, 1.038486882530e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.229320407367e+04, TOL));
         ok(isequalRel(a,       1.073298173083e+05, TOL));
         ok(isequalRel(ecc,     7.784285638045e-01, TOL));
         ok(isequalRel(incl,    1.997473543599e-01, TOL));
         ok(isequalRel(omega,   3.245963610118e+00, TOL));
         ok(isequalRel(argp,    3.466320125702e+00, TOL));
         ok(isequalRel(nu,      3.248631550250e+00, TOL));
         ok(isequalRel(m,       3.673800221610e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.566468213673e+05, -9.715215370791e+04, 1.626128409305e+04], [6.436615381409e-01, -4.131836878365e-01, 9.676152377564e-02], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.566468213673e+05, -9.715215370791e+04, 1.626128409305e+04], [6.436615381409e-01, -4.131836878365e-01, 9.676152377564e-02], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.229332136381e+04, TOL));
         ok(isequalRel(a,       1.073298009004e+05, TOL));
         ok(isequalRel(ecc,     7.784278231833e-01, TOL));
         ok(isequalRel(incl,    1.997570801514e-01, TOL));
         ok(isequalRel(omega,   3.245867978701e+00, TOL));
         ok(isequalRel(argp,    3.466305957883e+00, TOL));
         ok(isequalRel(nu,      3.275669759147e+00, TOL));
         ok(isequalRel(m,       3.803316065264e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.517582128574e+05, -9.995270098346e+04, 1.693226607548e+04], [7.150232542983e-01, -3.676095609687e-01, 8.908272650298e-02], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.517582128574e+05, -9.995270098346e+04, 1.693226607548e+04], [7.150232542983e-01, -3.676095609687e-01, 8.908272650298e-02], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.229305834729e+04, TOL));
         ok(isequalRel(a,       1.073297801707e+05, TOL));
         ok(isequalRel(ecc,     7.784293483318e-01, TOL));
         ok(isequalRel(incl,    1.997704625980e-01, TOL));
         ok(isequalRel(omega,   3.245779560489e+00, TOL));
         ok(isequalRel(argp,    3.466282810823e+00, TOL));
         ok(isequalRel(nu,      3.303389540241e+00, TOL));
         ok(isequalRel(m,       3.932830652264e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.463528652128e+05, -1.024127050628e+05, 1.754556394158e+04], [7.872296948625e-01, -3.186309130390e-01, 8.073487275970e-02], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.463528652128e+05, -1.024127050628e+05, 1.754556394158e+04], [7.872296948625e-01, -3.186309130390e-01, 8.073487275970e-02], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.229241437910e+04, TOL));
         ok(isequalRel(a,       1.073297546537e+05, TOL));
         ok(isequalRel(ecc,     7.784331420011e-01, TOL));
         ok(isequalRel(incl,    1.997874257522e-01, TOL));
         ok(isequalRel(omega,   3.245698295311e+00, TOL));
         ok(isequalRel(argp,    3.466250929572e+00, TOL));
         ok(isequalRel(nu,      3.331965201172e+00, TOL));
         ok(isequalRel(m,       4.062343592070e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.404236077744e+05, -1.045059079973e+05, 1.809604807097e+04], [8.605889788509e-01, -2.657399872729e-01, 7.162176779901e-02], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.404236077744e+05, -1.045059079973e+05, 1.809604807097e+04], [8.605889788509e-01, -2.657399872729e-01, 7.162176779901e-02], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.229138944420e+04, TOL));
         ok(isequalRel(a,       1.073297237431e+05, TOL));
         ok(isequalRel(ecc,     7.784392028199e-01, TOL));
         ok(isequalRel(incl,    1.998078865583e-01, TOL));
         ok(isequalRel(omega,   3.245624107064e+00, TOL));
         ok(isequalRel(argp,    3.466210579367e+00, TOL));
         ok(isequalRel(nu,      3.361597697789e+00, TOL));
         ok(isequalRel(m,       4.191854495991e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.339609596185e+05, -1.062019809132e+05, 1.857781121953e+04], [9.354347581087e-01, -2.083073067579e-01, 6.162311047804e-02], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.339609596185e+05, -1.062019809132e+05, 1.857781121953e+04], [9.354347581087e-01, -2.083073067579e-01, 6.162311047804e-02], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.228998415510e+04, TOL));
         ok(isequalRel(a,       1.073296866505e+05, TOL));
         ok(isequalRel(ecc,     7.784475252140e-01, TOL));
         ok(isequalRel(incl,    1.998317549275e-01, TOL));
         ok(isequalRel(omega,   3.245556903569e+00, TOL));
         ok(isequalRel(argp,    3.466162045722e+00, TOL));
         ok(isequalRel(nu,      3.392523559727e+00, TOL));
         ok(isequalRel(m,       4.321362977954e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.269529186001e+05, -1.074655190619e+05, 1.898396903112e+04], [1.012133628387e+00, -1.455438783178e-01, 5.058700700673e-02], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.269529186001e+05, -1.074655190619e+05, 1.898396903112e+04], [1.012133628387e+00, -1.455438783178e-01, 5.058700700673e-02], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.228819974604e+04, TOL));
         ok(isequalRel(a,       1.073296423483e+05, TOL));
         ok(isequalRel(ecc,     7.784580993053e-01, TOL));
         ok(isequalRel(incl,    1.998589338157e-01, TOL));
         ok(isequalRel(omega,   3.245496576316e+00, TOL));
         ok(isequalRel(argp,    3.466105634685e+00, TOL));
         ok(isequalRel(nu,      3.425026973822e+00, TOL));
         ok(isequalRel(m,       4.450868655273e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.193846939645e+05, -1.082547111537e+05, 1.930639581892e+04], [1.091093313277e+00, -7.644747853773e-02, 3.831928160303e-02], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.193846939645e+05, -1.082547111537e+05, 1.930639581892e+04], [1.091093313277e+00, -7.644747853773e-02, 3.831928160303e-02], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.228603806304e+04, TOL));
         ok(isequalRel(a,       1.073295894846e+05, TOL));
         ok(isequalRel(ecc,     7.784709107731e-01, TOL));
         ok(isequalRel(incl,    1.998893192965e-01, TOL));
         ok(isequalRel(omega,   3.245443000038e+00, TOL));
         ok(isequalRel(argp,    3.466041673385e+00, TOL));
         ok(isequalRel(nu,      3.459456592715e+00, TOL));
         ok(isequalRel(m,       4.580371149403e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
         // 21897
     });

test('[-1.941046286123e+04, -1.914303318969e+04, 2.311405522619e+04], [5.086022367297e-01, -1.156882269205e+00, 2.379923454711e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.941046286123e+04, -1.914303318969e+04, 2.311405522619e+04], [5.086022367297e-01, -1.156882269205e+00, 2.379923454711e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.191370222755e+04, TOL));
         ok(isequalRel(a,       2.649685987122e+04, TOL));
         ok(isequalRel(ecc,     7.418713178843e-01, TOL));
         ok(isequalRel(incl,    1.084735551503e+00, TOL));
         ok(isequalRel(omega,   3.455583373947e+00, TOL));
         ok(isequalRel(argp,    4.416114688053e+00, TOL));
         ok(isequalRel(nu,      2.687451322260e+00, TOL));
         ok(isequalRel(m,       1.405736344711e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.268606129708e+04, -2.385375335645e+04, 3.552981733588e+04], [1.231633828844e+00, -2.217182021642e-01, 1.118440290893e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.268606129708e+04, -2.385375335645e+04, 3.552981733588e+04], [1.231633828844e+00, -2.217182021642e-01, 1.118440290893e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.191121165465e+04, TOL));
         ok(isequalRel(a,       2.649678123724e+04, TOL));
         ok(isequalRel(ecc,     7.419337660802e-01, TOL));
         ok(isequalRel(incl,    1.084680145387e+00, TOL));
         ok(isequalRel(omega,   3.455327904606e+00, TOL));
         ok(isequalRel(argp,    4.416136972885e+00, TOL));
         ok(isequalRel(nu,      2.987505710749e+00, TOL));
         ok(isequalRel(m,       2.459624965475e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.775466493588e+03, -2.283964574119e+04, 3.949464689967e+04], [1.468963404931e+00, 4.894817687596e-01, -2.397278779863e-02], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.775466493588e+03, -2.283964574119e+04, 3.949464689967e+04], [1.468963404931e+00, 4.894817687596e-01, -2.397278779863e-02], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.191003302082e+04, TOL));
         ok(isequalRel(a,       2.649683968712e+04, TOL));
         ok(isequalRel(ecc,     7.419644108308e-01, TOL));
         ok(isequalRel(incl,    1.084650006788e+00, TOL));
         ok(isequalRel(omega,   3.455055547100e+00, TOL));
         ok(isequalRel(argp,    4.416242645786e+00, TOL));
         ok(isequalRel(nu,      3.224276172793e+00, TOL));
         ok(isequalRel(m,       3.513392292221e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[7.679878835699e+03, -1.678050760106e+04, 3.468621815555e+04], [1.364171080400e+00, 1.211183896523e+00, -1.385151370861e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([7.679878835699e+03, -1.678050760106e+04, 3.468621815555e+04], [1.364171080400e+00, 1.211183896523e+00, -1.385151370861e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.191043009397e+04, TOL));
         ok(isequalRel(a,       2.649629732483e+04, TOL));
         ok(isequalRel(ecc,     7.419481115307e-01, TOL));
         ok(isequalRel(incl,    1.084639688119e+00, TOL));
         ok(isequalRel(omega,   3.454766613369e+00, TOL));
         ok(isequalRel(argp,    4.416372810976e+00, TOL));
         ok(isequalRel(nu,      3.492015957339e+00, TOL));
         ok(isequalRel(m,       4.567109724343e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.455240023028e+04, -4.819501214612e+03, 1.715470672449e+04], [1.092015914958e-01, 2.176124494271e+00, -3.854856804902e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.455240023028e+04, -4.819501214612e+03, 1.715470672449e+04], [1.092015914958e-01, 2.176124494271e+00, -3.854856804902e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.191347714500e+04, TOL));
         ok(isequalRel(a,       2.649520737680e+04, TOL));
         ok(isequalRel(ecc,     7.418581430988e-01, TOL));
         ok(isequalRel(incl,    1.084692450950e+00, TOL));
         ok(isequalRel(omega,   3.454447829237e+00, TOL));
         ok(isequalRel(argp,    4.416403154412e+00, TOL));
         ok(isequalRel(nu,      4.004886348835e+00, TOL));
         ok(isequalRel(m,       5.620919368097e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.530238845375e+04, -5.556434402997e+03, 1.095950887533e+03], [-2.838224312259e+00, -3.134231137481e+00, 3.992596325784e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.530238845375e+04, -5.556434402997e+03, 1.095950887533e+03], [-2.838224312259e+00, -3.134231137481e+00, 3.992596325784e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.191704518456e+04, TOL));
         ok(isequalRel(a,       2.650637712585e+04, TOL));
         ok(isequalRel(ecc,     7.418951234893e-01, TOL));
         ok(isequalRel(incl,    1.084825981370e+00, TOL));
         ok(isequalRel(omega,   3.454330810336e+00, TOL));
         ok(isequalRel(argp,    4.416449362609e+00, TOL));
         ok(isequalRel(nu,      1.942770864677e+00, TOL));
         ok(isequalRel(m,       3.915680573883e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.928920066748e+04, -1.942704851118e+04, 2.375945685636e+04], [5.524950869889e-01, -1.112499437338e+00, 2.325112653904e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.928920066748e+04, -1.942704851118e+04, 2.375945685636e+04], [5.524950869889e-01, -1.112499437338e+00, 2.325112653904e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.191354190354e+04, TOL));
         ok(isequalRel(a,       2.649695182559e+04, TOL));
         ok(isequalRel(ecc,     7.418764474845e-01, TOL));
         ok(isequalRel(incl,    1.084719458624e+00, TOL));
         ok(isequalRel(omega,   3.454190558087e+00, TOL));
         ok(isequalRel(argp,    4.416213959156e+00, TOL));
         ok(isequalRel(nu,      2.701998565017e+00, TOL));
         ok(isequalRel(m,       1.445756171797e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.237621976437e+04, -2.389338020018e+04, 3.583133691892e+04], [1.246701528718e+00, -1.942940481169e-01, 1.074867282458e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.237621976437e+04, -2.389338020018e+04, 3.583133691892e+04], [1.246701528718e+00, -1.942940481169e-01, 1.074867282458e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.191110469849e+04, TOL));
         ok(isequalRel(a,       2.649691190231e+04, TOL));
         ok(isequalRel(ecc,     7.419379802954e-01, TOL));
         ok(isequalRel(incl,    1.084665967967e+00, TOL));
         ok(isequalRel(omega,   3.453934388126e+00, TOL));
         ok(isequalRel(argp,    4.416241318931e+00, TOL));
         ok(isequalRel(nu,      2.996922400116e+00, TOL));
         ok(isequalRel(m,       2.499630537234e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.400556776651e+03, -2.269862264640e+04, 3.948275964390e+04], [1.472582921869e+00, 5.135556538063e-01, -6.930656058462e-02], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.400556776651e+03, -2.269862264640e+04, 3.948275964390e+04], [1.472582921869e+00, 5.135556538063e-01, -6.930656058462e-02], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.190998392371e+04, TOL));
         ok(isequalRel(a,       2.649695760842e+04, TOL));
         ok(isequalRel(ecc,     7.419670075317e-01, TOL));
         ok(isequalRel(incl,    1.084637081490e+00, TOL));
         ok(isequalRel(omega,   3.453661852166e+00, TOL));
         ok(isequalRel(argp,    4.416348907065e+00, TOL));
         ok(isequalRel(nu,      3.233306439119e+00, TOL));
         ok(isequalRel(m,       3.553387326560e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[8.031668192521e+03, -1.645577592085e+04, 3.429894391742e+04], [1.351357425528e+00, 1.239633233998e+00, -1.448195324033e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([8.031668192521e+03, -1.645577592085e+04, 3.429894391742e+04], [1.351357425528e+00, 1.239633233998e+00, -1.448195324033e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.191045674859e+04, TOL));
         ok(isequalRel(a,       2.649638058671e+04, TOL));
         ok(isequalRel(ecc,     7.419483855201e-01, TOL));
         ok(isequalRel(incl,    1.084628311975e+00, TOL));
         ok(isequalRel(omega,   3.453372392737e+00, TOL));
         ok(isequalRel(argp,    4.416478893462e+00, TOL));
         ok(isequalRel(nu,      3.504335932164e+00, TOL));
         ok(isequalRel(m,       4.607096710975e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.455948780372e+04, -4.238437738131e+03, 1.607923154704e+04], [-2.640965547724e-02, 2.218938770316e+00, -4.012628895727e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.455948780372e+04, -4.238437738131e+03, 1.607923154704e+04], [-2.640965547724e-02, 2.218938770316e+00, -4.012628895727e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.191367546893e+04, TOL));
         ok(isequalRel(a,       2.649546337476e+04, TOL));
         ok(isequalRel(ecc,     7.418560262900e-01, TOL));
         ok(isequalRel(incl,    1.084687912504e+00, TOL));
         ok(isequalRel(omega,   3.453053499305e+00, TOL));
         ok(isequalRel(argp,    4.416495389179e+00, TOL));
         ok(isequalRel(nu,      4.041909597073e+00, TOL));
         ok(isequalRel(m,       5.660913156366e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.603604980660e+04, -6.372514064680e+03, 2.183448342318e+03], [-2.485113443020e+00, -2.994994354835e+00, 3.955891271958e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.603604980660e+04, -6.372514064680e+03, 2.183448342318e+03], [-2.485113443020e+00, -2.994994354835e+00, 3.955891271958e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.191692050416e+04, TOL));
         ok(isequalRel(a,       2.650515086830e+04, TOL));
         ok(isequalRel(ecc,     7.418842753170e-01, TOL));
         ok(isequalRel(incl,    1.084812664994e+00, TOL));
         ok(isequalRel(omega,   3.452954054796e+00, TOL));
         ok(isequalRel(argp,    4.416534661710e+00, TOL));
         ok(isequalRel(nu,      2.009102882130e+00, TOL));
         ok(isequalRel(m,       4.315652579809e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.915671583814e+04, -1.969889059957e+04, 2.438929473934e+04], [5.942781327432e-01, -1.069418599251e+00, 2.271152044320e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.915671583814e+04, -1.969889059957e+04, 2.438929473934e+04], [5.942781327432e-01, -1.069418599251e+00, 2.271152044320e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.191340866219e+04, TOL));
         ok(isequalRel(a,       2.649705024250e+04, TOL));
         ok(isequalRel(ecc,     7.418809620621e-01, TOL));
         ok(isequalRel(incl,    1.084706748440e+00, TOL));
         ok(isequalRel(omega,   3.452799720238e+00, TOL));
         ok(isequalRel(argp,    4.416313827910e+00, TOL));
         ok(isequalRel(nu,      2.716133347635e+00, TOL));
         ok(isequalRel(m,       1.485729925734e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.206272925552e+04, -2.392582362911e+04, 3.612066680667e+04], [1.261238797599e+00, -1.672018558678e-01, 1.031478938786e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.206272925552e+04, -2.392582362911e+04, 3.612066680667e+04], [1.261238797599e+00, -1.672018558678e-01, 1.031478938786e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.191102274735e+04, TOL));
         ok(isequalRel(a,       2.649704401740e+04, TOL));
         ok(isequalRel(ecc,     7.419415750629e-01, TOL));
         ok(isequalRel(incl,    1.084655150183e+00, TOL));
         ok(isequalRel(omega,   3.452542936051e+00, TOL));
         ok(isequalRel(argp,    4.416345942461e+00, TOL));
         ok(isequalRel(nu,      3.006257125092e+00, TOL));
         ok(isequalRel(m,       2.539590123051e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.024961369658e+03, -2.255156626703e+04, 3.945850085787e+04], [1.475816889364e+00, 5.376157637619e-01, -1.148874718034e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.024961369658e+03, -2.255156626703e+04, 3.945850085787e+04], [1.475816889364e+00, 5.376157637619e-01, -1.148874718034e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.190995804259e+04, TOL));
         ok(isequalRel(a,       2.649707621951e+04, TOL));
         ok(isequalRel(ecc,     7.419690216489e-01, TOL));
         ok(isequalRel(incl,    1.084627533314e+00, TOL));
         ok(isequalRel(omega,   3.452270240577e+00, TOL));
         ok(isequalRel(argp,    4.416455267793e+00, TOL));
         ok(isequalRel(nu,      3.242368909528e+00, TOL));
         ok(isequalRel(m,       3.593336307449e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[8.379809162036e+03, -1.612395878459e+04, 3.389475123231e+04], [1.337468253958e+00, 1.268432782853e+00, -1.512473301062e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([8.379809162036e+03, -1.612395878459e+04, 3.389475123231e+04], [1.337468253958e+00, 1.268432782853e+00, -1.512473301062e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.191050570391e+04, TOL));
         ok(isequalRel(a,       2.649646352778e+04, TOL));
         ok(isequalRel(ecc,     7.419480886518e-01, TOL));
         ok(isequalRel(incl,    1.084620371934e+00, TOL));
         ok(isequalRel(omega,   3.451980249192e+00, TOL));
         ok(isequalRel(argp,    4.416584851835e+00, TOL));
         ok(isequalRel(nu,      3.516908405580e+00, TOL));
         ok(isequalRel(m,       4.647037629019e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.452786748873e+04, -3.646338171202e+03, 1.496074306518e+04], [-1.800358394778e-01, 2.261273514931e+00, -4.179355590360e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.452786748873e+04, -3.646338171202e+03, 1.496074306518e+04], [-1.800358394778e-01, 2.261273514931e+00, -4.179355590360e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.191390549693e+04, TOL));
         ok(isequalRel(a,       2.649579318949e+04, TOL));
         ok(isequalRel(ecc,     7.418539473630e-01, TOL));
         ok(isequalRel(incl,    1.084687529443e+00, TOL));
         ok(isequalRel(omega,   3.451661673727e+00, TOL));
         ok(isequalRel(argp,    4.416585380864e+00, TOL));
         ok(isequalRel(nu,      4.082099274567e+00, TOL));
         ok(isequalRel(m,       5.700862798318e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.668012147335e+04, -7.149808004251e+03, 3.257642272081e+03], [-2.178897351030e+00, -2.863927094807e+00, 3.904876942823e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.668012147335e+04, -7.149808004251e+03, 3.257642272081e+03], [-2.178897351030e+00, -2.863927094807e+00, 3.904876942823e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.191679316486e+04, TOL));
         ok(isequalRel(a,       2.650410795570e+04, TOL));
         ok(isequalRel(ecc,     7.418755898522e-01, TOL));
         ok(isequalRel(incl,    1.084801706304e+00, TOL));
         ok(isequalRel(omega,   3.451577374571e+00, TOL));
         ok(isequalRel(argp,    4.416618965915e+00, TOL));
         ok(isequalRel(nu,      2.067738535875e+00, TOL));
         ok(isequalRel(m,       4.715168664700e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.901358793448e+04, -1.995893766022e+04, 2.500381778666e+04], [6.341004308335e-01, -1.027559822779e+00, 2.218002684850e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.901358793448e+04, -1.995893766022e+04, 2.500381778666e+04], [6.341004308335e-01, -1.027559822779e+00, 2.218002684850e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.191328997614e+04, TOL));
         ok(isequalRel(a,       2.649715449517e+04, TOL));
         ok(isequalRel(ecc,     7.418851730991e-01, TOL));
         ok(isequalRel(incl,    1.084697520547e+00, TOL));
         ok(isequalRel(omega,   3.451410963853e+00, TOL));
         ok(isequalRel(argp,    4.416413665989e+00, TOL));
         ok(isequalRel(nu,      2.729884161534e+00, TOL));
         ok(isequalRel(m,       1.525656676188e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.174576155818e+04, -2.395119438627e+04, 3.639787676581e+04], [1.275261812541e+00, -1.404251324752e-01, 9.882594409508e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.174576155818e+04, -2.395119438627e+04, 3.639787676581e+04], [1.275261812541e+00, -1.404251324752e-01, 9.882594409508e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.191095328873e+04, TOL));
         ok(isequalRel(a,       2.649717748621e+04, TOL));
         ok(isequalRel(ecc,     7.419448675302e-01, TOL));
         ok(isequalRel(incl,    1.084647766612e+00, TOL));
         ok(isequalRel(omega,   3.451153627365e+00, TOL));
         ok(isequalRel(argp,    4.416450237856e+00, TOL));
         ok(isequalRel(nu,      3.015515314817e+00, TOL));
         ok(isequalRel(m,       2.579502785323e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.648819450702e+03, -2.239850594576e+04, 3.942183273890e+04], [1.478660173878e+00, 5.616715190740e-01, -1.607330927066e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.648819450702e+03, -2.239850594576e+04, 3.942183273890e+04], [1.478660173878e+00, 5.616715190740e-01, -1.607330927066e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.190994290884e+04, TOL));
         ok(isequalRel(a,       2.649719544199e+04, TOL));
         ok(isequalRel(ecc,     7.419707694028e-01, TOL));
         ok(isequalRel(incl,    1.084621410244e+00, TOL));
         ok(isequalRel(omega,   3.450880772609e+00, TOL));
         ok(isequalRel(argp,    4.416561133974e+00, TOL));
         ok(isequalRel(nu,      3.251467701041e+00, TOL));
         ok(isequalRel(m,       3.633238302750e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[8.723976527952e+03, -1.578499406275e+04, 3.347335215527e+04], [1.322433592992e+00, 1.297602496744e+00, -1.578055492520e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([8.723976527952e+03, -1.578499406275e+04, 3.347335215527e+04], [1.322433592992e+00, 1.297602496744e+00, -1.578055492520e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.191056459832e+04, TOL));
         ok(isequalRel(a,       2.649654607185e+04, TOL));
         ok(isequalRel(ecc,     7.419475344599e-01, TOL));
         ok(isequalRel(incl,    1.084615892444e+00, TOL));
         ok(isequalRel(omega,   3.450590224510e+00, TOL));
         ok(isequalRel(argp,    4.416690095914e+00, TOL));
         ok(isequalRel(nu,      3.529749790986e+00, TOL));
         ok(isequalRel(m,       4.686931561882e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.445225571587e+04, -3.043423326450e+03, 1.379684870805e+04], [-3.551901693436e-01, 2.302485443236e+00, -4.355767076879e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.445225571587e+04, -3.043423326450e+03, 1.379684870805e+04], [-3.551901693436e-01, 2.302485443236e+00, -4.355767076879e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.191415678362e+04, TOL));
         ok(isequalRel(a,       2.649622209854e+04, TOL));
         ok(isequalRel(ecc,     7.418524611590e-01, TOL));
         ok(isequalRel(incl,    1.084691396031e+00, TOL));
         ok(isequalRel(omega,   3.450272530511e+00, TOL));
         ok(isequalRel(argp,    4.416672198999e+00, TOL));
         ok(isequalRel(nu,      4.125998165449e+00, TOL));
         ok(isequalRel(m,       5.740767723337e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.724631075678e+04, -7.890726015081e+03, 4.315394103066e+03], [-1.910968457683e+00, -2.740945671846e+00, 3.844722725601e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.724631075678e+04, -7.890726015081e+03, 4.315394103066e+03], [-1.910968457683e+00, -2.740945671846e+00, 3.844722725601e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.191665765654e+04, TOL));
         ok(isequalRel(a,       2.650323399070e+04, TOL));
         ok(isequalRel(ecc,     7.418690431082e-01, TOL));
         ok(isequalRel(incl,    1.084793481450e+00, TOL));
         ok(isequalRel(omega,   3.450201078657e+00, TOL));
         ok(isequalRel(argp,    4.416702553563e+00, TOL));
         ok(isequalRel(nu,      2.120113766971e+00, TOL));
         ok(isequalRel(m,       5.114211265811e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
         // 22312
     });

test('[3.061047845321e+02, -5.816456555246e+03, -2.979558460681e+03], [3.950663854595e+00, 3.415332542537e+00, -5.879974328913e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([3.061047845321e+02, -5.816456555246e+03, -2.979558460681e+03], [3.950663854595e+00, 3.415332542537e+00, -5.879974328913e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.637964620826e+03, TOL));
         ok(isequalRel(a,       6.642718545896e+03, TOL));
         ok(isequalRel(ecc,     2.675181425237e-02, TOL));
         ok(isequalRel(incl,    1.084843187654e+00, TOL));
         ok(isequalRel(omega,   1.349770040946e+00, TOL));
         ok(isequalRel(argp,    4.675662571998e+00, TOL));
         ok(isequalRel(nu,      5.290184034854e+00, TOL));
         ok(isequalRel(m,       5.334512258340e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[3.282820854640e+03, 2.077469729049e+03, -5.189179887704e+03], [9.734270093810e-02, 7.375135691837e+00, 2.900196701780e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([3.282820854640e+03, 2.077469729049e+03, -5.189179887704e+03], [9.734270093810e-02, 7.375135691837e+00, 2.900196701780e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.620882010942e+03, TOL));
         ok(isequalRel(a,       6.624825592803e+03, TOL));
         ok(isequalRel(ecc,     2.439822350749e-02, TOL));
         ok(isequalRel(incl,    1.084498821997e+00, TOL));
         ok(isequalRel(omega,   1.348206741490e+00, TOL));
         ok(isequalRel(argp,    4.647676853039e+00, TOL));
         ok(isequalRel(nu,      5.029815553106e-01, TOL));
         ok(isequalRel(m,       4.798320824675e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[5.308272917598e+02, 6.426207900027e+03, 1.712370767934e+03], [-3.837120394519e+00, -1.252430636871e+00, 6.561602576910e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([5.308272917598e+02, 6.426207900027e+03, 1.712370767934e+03], [-3.837120394519e+00, -1.252430636871e+00, 6.561602576910e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.623690629104e+03, TOL));
         ok(isequalRel(a,       6.627308250741e+03, TOL));
         ok(isequalRel(ecc,     2.336377341457e-02, TOL));
         ok(isequalRel(incl,    1.084956775709e+00, TOL));
         ok(isequalRel(omega,   1.347684495547e+00, TOL));
         ok(isequalRel(argp,    4.694516590948e+00, TOL));
         ok(isequalRel(nu,      1.883160080065e+00, TOL));
         ok(isequalRel(m,       1.838456779477e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-3.191691702120e+03, 1.702721991216e+02, 5.956298077747e+03], [-1.394956871507e+00, -7.438073470735e+00, -5.575531150954e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-3.191691702120e+03, 1.702721991216e+02, 5.956298077747e+03], [-1.394956871507e+00, -7.438073470735e+00, -5.575531150954e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.600806236802e+03, TOL));
         ok(isequalRel(a,       6.604498623235e+03, TOL));
         ok(isequalRel(ecc,     2.364469118874e-02, TOL));
         ok(isequalRel(incl,    1.084389339721e+00, TOL));
         ok(isequalRel(omega,   1.346439270272e+00, TOL));
         ok(isequalRel(argp,    4.683913055327e+00, TOL));
         ok(isequalRel(nu,      3.250644890537e+00, TOL));
         ok(isequalRel(m,       3.255883862338e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.818992224649e+03, -6.322451466164e+03, 6.819524715393e+02], [3.349795172805e+00, -1.530140265238e+00, -6.831522764535e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.818992224649e+03, -6.322451466164e+03, 6.819524715393e+02], [3.349795172805e+00, -1.530140265238e+00, -6.831522764535e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.607684084093e+03, TOL));
         ok(isequalRel(a,       6.610600269038e+03, TOL));
         ok(isequalRel(ecc,     2.100327812399e-02, TOL));
         ok(isequalRel(incl,    1.085002392522e+00, TOL));
         ok(isequalRel(omega,   1.345416579958e+00, TOL));
         ok(isequalRel(argp,    4.642201430874e+00, TOL));
         ok(isequalRel(nu,      4.665716463652e+00, TOL));
         ok(isequalRel(m,       4.707705053138e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.515664486339e+03, -2.158830912240e+03, -5.552133205438e+03], [2.571979660072e+00, 7.311930508595e+00, -1.639865619678e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.515664486339e+03, -2.158830912240e+03, -5.552133205438e+03], [2.571979660072e+00, 7.311930508595e+00, -1.639865619678e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.584644865859e+03, TOL));
         ok(isequalRel(a,       6.586959567387e+03, TOL));
         ok(isequalRel(ecc,     1.874584407606e-02, TOL));
         ok(isequalRel(incl,    1.084419267218e+00, TOL));
         ok(isequalRel(omega,   1.344660998734e+00, TOL));
         ok(isequalRel(argp,    4.696749827132e+00, TOL));
         ok(isequalRel(nu,      6.058390627524e+00, TOL));
         ok(isequalRel(m,       6.066634567460e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.414528332105e+03, 5.749101509221e+03, -1.998596931649e+03], [-2.681032960105e+00, 3.527589300630e+00, 6.452951428507e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.414528332105e+03, 5.749101509221e+03, -1.998596931649e+03], [-2.681032960105e+00, 3.527589300630e+00, 6.452951428507e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.588849139687e+03, TOL));
         ok(isequalRel(a,       6.591210604966e+03, TOL));
         ok(isequalRel(ecc,     1.892815082464e-02, TOL));
         ok(isequalRel(incl,    1.084937509030e+00, TOL));
         ok(isequalRel(omega,   1.343259504785e+00, TOL));
         ok(isequalRel(argp,    4.695703809680e+00, TOL));
         ok(isequalRel(nu,      1.235065384670e+00, TOL));
         ok(isequalRel(m,       1.199490978700e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.877989443311e+03, 3.862278483018e+03, 5.112484358627e+03], [-3.261489804108e+00, -6.026859137476e+00, 3.433254767552e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.877989443311e+03, 3.862278483018e+03, 5.112484358627e+03], [-3.261489804108e+00, -6.026859137476e+00, 3.433254767552e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.570232276816e+03, TOL));
         ok(isequalRel(a,       6.572299908505e+03, TOL));
         ok(isequalRel(ecc,     1.773690758731e-02, TOL));
         ok(isequalRel(incl,    1.084539761355e+00, TOL));
         ok(isequalRel(omega,   1.342788335795e+00, TOL));
         ok(isequalRel(argp,    4.637543173778e+00, TOL));
         ok(isequalRel(nu,      2.692951932245e+00, TOL));
         ok(isequalRel(m,       2.677379214425e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-3.117365843953e+03, -4.419747738641e+03, 3.840859609123e+03], [1.545479181810e+00, -5.475416581198e+00, -5.207913748470e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-3.117365843953e+03, -4.419747738641e+03, 3.840859609123e+03], [1.545479181810e+00, -5.475416581198e+00, -5.207913748470e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.566675091830e+03, TOL));
         ok(isequalRel(a,       6.568290656528e+03, TOL));
         ok(isequalRel(ecc,     1.568324749544e-02, TOL));
         ok(isequalRel(incl,    1.084742711549e+00, TOL));
         ok(isequalRel(omega,   1.341109207553e+00, TOL));
         ok(isequalRel(argp,    4.696904023607e+00, TOL));
         ok(isequalRel(nu,      4.013896696360e+00, TOL));
         ok(isequalRel(m,       4.038099895934e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[8.153203467830e+02, -5.231676922491e+03, -3.760046903535e+03], [3.870864200432e+00, 4.455588551932e+00, -5.211082190603e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([8.153203467830e+02, -5.231676922491e+03, -3.760046903535e+03], [3.870864200432e+00, 4.455588551932e+00, -5.211082190603e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.558074477010e+03, TOL));
         ok(isequalRel(a,       6.559514691766e+03, TOL));
         ok(isequalRel(ecc,     1.481759681755e-02, TOL));
         ok(isequalRel(incl,    1.084742837272e+00, TOL));
         ok(isequalRel(omega,   1.340798609458e+00, TOL));
         ok(isequalRel(argp,    4.698883389245e+00, TOL));
         ok(isequalRel(nu,      5.439861002541e+00, TOL));
         ok(isequalRel(m,       5.461831330983e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[3.269543418101e+03, 3.029000810825e+03, -4.704679697131e+03], [-5.267113448095e-01, 6.812157949700e+00, 3.929825087305e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([3.269543418101e+03, 3.029000810825e+03, -4.704679697131e+03], [-5.267113448095e-01, 6.812157949700e+00, 3.929825087305e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.545540045688e+03, TOL));
         ok(isequalRel(a,       6.546655266097e+03, TOL));
         ok(isequalRel(ecc,     1.305180624613e-02, TOL));
         ok(isequalRel(incl,    1.084586777664e+00, TOL));
         ok(isequalRel(omega,   1.339081224197e+00, TOL));
         ok(isequalRel(argp,    4.623509496744e+00, TOL));
         ok(isequalRel(nu,      6.963097470980e-01, TOL));
         ok(isequalRel(m,       6.796922298301e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.018099755532e+01, 6.026233414534e+03, 2.643505184071e+03], [-3.953623254352e+00, -2.616070011952e+00, 6.145637499655e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.018099755532e+01, 6.026233414534e+03, 2.643505184071e+03], [-3.953623254352e+00, -2.616070011952e+00, 6.145637499655e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.544170760288e+03, TOL));
         ok(isequalRel(a,       6.545045006933e+03, TOL));
         ok(isequalRel(ecc,     1.155741395162e-02, TOL));
         ok(isequalRel(incl,    1.084885014732e+00, TOL));
         ok(isequalRel(omega,   1.338681248973e+00, TOL));
         ok(isequalRel(argp,    4.685135272400e+00, TOL));
         ok(isequalRel(nu,      2.069636245312e+00, TOL));
         ok(isequalRel(m,       2.049254099050e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-3.320588195837e+03, -1.248426799446e+03, 5.563060179268e+03], [-6.370469743005e-01, -7.417786043641e+00, -2.076120187110e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-3.320588195837e+03, -1.248426799446e+03, 5.563060179268e+03], [-6.370469743005e-01, -7.417786043641e+00, -2.076120187110e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.524295718729e+03, TOL));
         ok(isequalRel(a,       6.525182136918e+03, TOL));
         ok(isequalRel(ecc,     1.165528802335e-02, TOL));
         ok(isequalRel(incl,    1.084435599262e+00, TOL));
         ok(isequalRel(omega,   1.337147765601e+00, TOL));
         ok(isequalRel(argp,    4.724636846516e+00, TOL));
         ok(isequalRel(nu,      3.434663530073e+00, TOL));
         ok(isequalRel(m,       3.441454572335e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.025489746164e+03, -6.366989457818e+03, -9.112355915263e+02], [3.811771908909e+00, 4.380714897433e-01, -6.829260617052e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.025489746164e+03, -6.366989457818e+03, -9.112355915263e+02], [3.811771908909e+00, 4.380714897433e-01, -6.829260617052e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.529625338931e+03, TOL));
         ok(isequalRel(a,       6.530236478901e+03, TOL));
         ok(isequalRel(ecc,     9.673995701750e-03, TOL));
         ok(isequalRel(incl,    1.085002382761e+00, TOL));
         ok(isequalRel(omega,   1.336430018245e+00, TOL));
         ok(isequalRel(argp,    4.605969499667e+00, TOL));
         ok(isequalRel(nu,      4.977688537268e+00, TOL));
         ok(isequalRel(m,       4.996323889873e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[3.003759961276e+03, -4.138570800321e+02, -5.706155914353e+03], [1.674350083380e+00, 7.694169068130e+00, 3.169152040347e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([3.003759961276e+03, -4.138570800321e+02, -5.706155914353e+03], [1.674350083380e+00, 7.694169068130e+00, 3.169152040347e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.505507794891e+03, TOL));
         ok(isequalRel(a,       6.505809714075e+03, TOL));
         ok(isequalRel(ecc,     6.812314294138e-03, TOL));
         ok(isequalRel(incl,    1.084377457549e+00, TOL));
         ok(isequalRel(omega,   1.335239965523e+00, TOL));
         ok(isequalRel(argp,    4.651926721080e+00, TOL));
         ok(isequalRel(nu,      1.066893958335e-01, TOL));
         ok(isequalRel(m,       1.052458861213e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.731428169801e+03, 6.258276769247e+03, -4.093252798221e+02], [-3.400497805702e+00, 1.447945424057e+00, 6.904010051792e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.731428169801e+03, 6.258276769247e+03, -4.093252798221e+02], [-3.400497805702e+00, 1.447945424057e+00, 6.904010051792e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.512449647075e+03, TOL));
         ok(isequalRel(a,       6.512759851817e+03, TOL));
         ok(isequalRel(ecc,     6.901471261849e-03, TOL));
         ok(isequalRel(incl,    1.085016908669e+00, TOL));
         ok(isequalRel(omega,   1.334174076176e+00, TOL));
         ok(isequalRel(argp,    4.779472392617e+00, TOL));
         ok(isequalRel(nu,      1.432509797150e+00, TOL));
         ok(isequalRel(m,       1.418848477048e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.582521114602e+03, 2.024190206799e+03, 5.647556502679e+03], [-2.530348120669e+00, -7.221719392625e+00, 1.438141552585e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.582521114602e+03, 2.024190206799e+03, 5.647556502679e+03], [-2.530348120669e+00, -7.221719392625e+00, 1.438141552585e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.488514798285e+03, TOL));
         ok(isequalRel(a,       6.488800677429e+03, TOL));
         ok(isequalRel(ecc,     6.637568551695e-03, TOL));
         ok(isequalRel(incl,    1.084402368904e+00, TOL));
         ok(isequalRel(omega,   1.333322496979e+00, TOL));
         ok(isequalRel(argp,    4.616291918958e+00, TOL));
         ok(isequalRel(nu,      3.027959831728e+00, TOL));
         ok(isequalRel(m,       3.026447106884e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.440568485779e+03, -5.702773118774e+03, 1.934810946889e+03], [2.731792946601e+00, -3.350576075382e+00, -6.527773338653e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.440568485779e+03, -5.702773118774e+03, 1.934810946889e+03], [2.731792946601e+00, -3.350576075382e+00, -6.527773338653e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.493164913130e+03, TOL));
         ok(isequalRel(a,       6.493258246795e+03, TOL));
         ok(isequalRel(ecc,     3.791297143854e-03, TOL));
         ok(isequalRel(incl,    1.084948379071e+00, TOL));
         ok(isequalRel(omega,   1.331884152721e+00, TOL));
         ok(isequalRel(argp,    4.558492635670e+00, TOL));
         ok(isequalRel(nu,      4.522842999589e+00, TOL));
         ok(isequalRel(m,       4.530293762977e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.951229343914e+03, -3.423594430447e+03, -5.121678082006e+03], [3.249039132643e+00, 6.465974362321e+00, -3.069806658892e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.951229343914e+03, -3.423594430447e+03, -5.121678082006e+03], [3.249039132643e+00, 6.465974362321e+00, -3.069806658892e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.473367283841e+03, TOL));
         ok(isequalRel(a,       6.473400699733e+03, TOL));
         ok(isequalRel(ecc,     2.272010245208e-03, TOL));
         ok(isequalRel(incl,    1.084500196896e+00, TOL));
         ok(isequalRel(omega,   1.331347365224e+00, TOL));
         ok(isequalRel(argp,    4.958734434718e+00, TOL));
         ok(isequalRel(nu,      5.577829006748e+00, TOL));
         ok(isequalRel(m,       5.580771099954e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.886509393556e+03, 4.888686262157e+03, -3.096298859890e+03], [-1.973162138508e+00, 4.877039020188e+00, 5.832414910422e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.886509393556e+03, 4.888686262157e+03, -3.096298859890e+03], [-1.973162138508e+00, 4.877039020188e+00, 5.832414910422e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.472669723020e+03, TOL));
         ok(isequalRel(a,       6.472694635611e+03, TOL));
         ok(isequalRel(ecc,     1.961854943427e-03, TOL));
         ok(isequalRel(incl,    1.084832477978e+00, TOL));
         ok(isequalRel(omega,   1.329653549990e+00, TOL));
         ok(isequalRel(argp,    4.629754337897e+00, TOL));
         ok(isequalRel(nu,      1.081212776615e+00, TOL));
         ok(isequalRel(m,       1.077752386014e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.276555321818e+03, 4.553268984633e+03, 4.406197873753e+03], [-3.715146421403e+00, -5.320176914386e+00, 4.418210777087e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.276555321818e+03, 4.553268984633e+03, 4.406197873753e+03], [-3.715146421403e+00, -5.320176914386e+00, 4.418210777087e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.459008267508e+03, TOL));
         ok(isequalRel(a,       6.459011841728e+03, TOL));
         ok(isequalRel(ecc,     7.438880868106e-04, TOL));
         ok(isequalRel(incl,    1.084635860662e+00, TOL));
         ok(isequalRel(omega,   1.329281723648e+00, TOL));
         ok(isequalRel(argp,    3.639633780772e+00, TOL));
         ok(isequalRel(nu,      3.524034448127e+00, TOL));
         ok(isequalRel(m,       3.524589954320e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-3.181546980418e+03, -3.831299765064e+03, 4.096802427872e+03], [1.114159969833e+00, -6.104773577810e+00, -4.829967400236e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-3.181546980418e+03, -3.831299765064e+03, 4.096802427872e+03], [1.114159969833e+00, -6.104773577810e+00, -4.829967400236e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.451401171948e+03, TOL));
         ok(isequalRel(a,       6.451410529670e+03, TOL));
         ok(isequalRel(ecc,     1.204363911379e-03, TOL));
         ok(isequalRel(incl,    1.084686968965e+00, TOL));
         ok(isequalRel(omega,   1.327472968941e+00, TOL));
         ok(isequalRel(argp,    1.133310168534e+00, TOL));
         ok(isequalRel(nu,      1.206589309560e+00, TOL));
         ok(isequalRel(m,       1.204339303021e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
         // *** error: t:= 494.202867 *** code =   1
         // 22674
     });

test('[2.541888807860e+04, 9.342603079886e+03, 2.361146690798e+04], [5.128408585237e-02, 1.213127306022e+00, 2.429004158884e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.541888807860e+04, 9.342603079886e+03, 2.361146690798e+04], [5.128408585237e-02, 1.213127306022e+00, 2.429004158884e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.159320085067e+04, TOL));
         ok(isequalRel(a,       2.690745808507e+04, TOL));
         ok(isequalRel(ecc,     7.544172890840e-01, TOL));
         ok(isequalRel(incl,    1.107865977065e+00, TOL));
         ok(isequalRel(omega,   6.185196371801e+00, TOL));
         ok(isequalRel(argp,    4.422480585980e+00, TOL));
         ok(isequalRel(nu,      2.685592796046e+00, TOL));
         ok(isequalRel(m,       1.355519116917e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.161959550749e+04, 1.612524978864e+04, 3.639679365831e+04], [-9.636043798930e-01, 6.854549653297e-01, 1.177181936797e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.161959550749e+04, 1.612524978864e+04, 3.639679365831e+04], [-9.636043798930e-01, 6.854549653297e-01, 1.177181936797e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.159087538788e+04, TOL));
         ok(isequalRel(a,       2.690732533602e+04, TOL));
         ok(isequalRel(ecc,     7.544731574519e-01, TOL));
         ok(isequalRel(incl,    1.107809333542e+00, TOL));
         ok(isequalRel(omega,   6.184927355524e+00, TOL));
         ok(isequalRel(argp,    4.422497485664e+00, TOL));
         ok(isequalRel(nu,      2.975858362533e+00, TOL));
         ok(isequalRel(m,       2.385345914590e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.272150543331e+04, 1.925896193362e+04, 4.089847648359e+04], [-1.457448564647e+00, 1.799554689286e-01, 7.150260130699e-02], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.272150543331e+04, 1.925896193362e+04, 4.089847648359e+04], [-1.457448564647e+00, 1.799554689286e-01, 7.150260130699e-02], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.158987848010e+04, TOL));
         ok(isequalRel(a,       2.690738772024e+04, TOL));
         ok(isequalRel(ecc,     7.544983721924e-01, TOL));
         ok(isequalRel(incl,    1.107777497726e+00, TOL));
         ok(isequalRel(omega,   6.184643474929e+00, TOL));
         ok(isequalRel(argp,    4.422595024892e+00, TOL));
         ok(isequalRel(nu,      3.200101244478e+00, TOL));
         ok(isequalRel(m,       3.415058858959e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.272807600538e+03, 1.845841971897e+04, 3.704474742696e+04], [-1.674863385527e+00, -4.364549830031e-01, -1.201040990250e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.272807600538e+03, 1.845841971897e+04, 3.704474742696e+04], [-1.674863385527e+00, -4.364549830031e-01, -1.201040990250e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.159040235013e+04, TOL));
         ok(isequalRel(a,       2.690692905760e+04, TOL));
         ok(isequalRel(ecc,     7.544806038316e-01, TOL));
         ok(isequalRel(incl,    1.107763173189e+00, TOL));
         ok(isequalRel(omega,   6.184345657828e+00, TOL));
         ok(isequalRel(argp,    4.422717736465e+00, TOL));
         ok(isequalRel(nu,      3.444664010443e+00, TOL));
         ok(isequalRel(m,       4.444723368166e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.005843188619e+04, 1.190660764454e+04, 2.173962097733e+04], [-1.245829682640e+00, -1.543789125451e+00, -3.324449220718e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.005843188619e+04, 1.190660764454e+04, 2.173962097733e+04], [-1.245829682640e+00, -1.543789125451e+00, -3.324449220718e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.159325909300e+04, TOL));
         ok(isequalRel(a,       2.690553227972e+04, TOL));
         ok(isequalRel(ecc,     7.543954150750e-01, TOL));
         ok(isequalRel(incl,    1.107793530627e+00, TOL));
         ok(isequalRel(omega,   6.184019545195e+00, TOL));
         ok(isequalRel(argp,    4.422779532513e+00, TOL));
         ok(isequalRel(nu,      3.862708265350e+00, TOL));
         ok(isequalRel(m,       5.474435995996e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.092440116466e+04, -2.571924141697e+03, -2.956348562941e+03], [6.071727751453e+00, 1.349579101948e+00, 3.898430260132e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.092440116466e+04, -2.571924141697e+03, -2.956348562941e+03], [6.071727751453e+00, 1.349579101948e+00, 3.898430260132e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.159808286769e+04, TOL));
         ok(isequalRel(a,       2.692487427916e+04, TOL));
         ok(isequalRel(ecc,     7.544818233776e-01, TOL));
         ok(isequalRel(incl,    1.107935750947e+00, TOL));
         ok(isequalRel(omega,   6.183797563975e+00, TOL));
         ok(isequalRel(argp,    4.422819239296e+00, TOL));
         ok(isequalRel(nu,      1.571691104696e+00, TOL));
         ok(isequalRel(m,       2.210030004631e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.533214851525e+04, 8.398910999243e+03, 2.178390654357e+04], [2.223207536625e-01, 1.272214305745e+00, 2.580527192026e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.533214851525e+04, 8.398910999243e+03, 2.178390654357e+04], [2.223207536625e-01, 1.272214305745e+00, 2.580527192026e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.159508517672e+04, TOL));
         ok(isequalRel(a,       2.690741558523e+04, TOL));
         ok(isequalRel(ecc,     7.543704233005e-01, TOL));
         ok(isequalRel(incl,    1.107849830490e+00, TOL));
         ok(isequalRel(omega,   6.183721934672e+00, TOL));
         ok(isequalRel(argp,    4.422566259801e+00, TOL));
         ok(isequalRel(nu,      2.645476966811e+00, TOL));
         ok(isequalRel(m,       1.251157238350e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.231771926039e+04, 1.557482086129e+04, 3.549577144092e+04], [-8.927500564006e-01, 7.373833814583e-01, 1.291738834447e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.231771926039e+04, 1.557482086129e+04, 3.549577144092e+04], [-8.927500564006e-01, 7.373833814583e-01, 1.291738834447e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.159265209963e+04, TOL));
         ok(isequalRel(a,       2.690713671758e+04, TOL));
         ok(isequalRel(ecc,     7.544273950354e-01, TOL));
         ok(isequalRel(incl,    1.107789759652e+00, TOL));
         ok(isequalRel(omega,   6.183457113091e+00, TOL));
         ok(isequalRel(argp,    4.422566989753e+00, TOL));
         ok(isequalRel(nu,      2.951373432026e+00, TOL));
         ok(isequalRel(m,       2.281015266753e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.379568675885e+04, 1.908883051008e+04, 4.080369584385e+04], [-1.420277668718e+00, 2.355994561611e-01, 1.855170558402e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.379568675885e+04, 1.908883051008e+04, 4.080369584385e+04], [-1.420277668718e+00, 2.355994561611e-01, 1.855170558402e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.159154186654e+04, TOL));
         ok(isequalRel(a,       2.690722182615e+04, TOL));
         ok(isequalRel(ecc,     7.544556439375e-01, TOL));
         ok(isequalRel(incl,    1.107756670162e+00, TOL));
         ok(isequalRel(omega,   6.183175785984e+00, TOL));
         ok(isequalRel(argp,    4.422657323650e+00, TOL));
         ok(isequalRel(nu,      3.177710326905e+00, TOL));
         ok(isequalRel(m,       3.310749209521e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.515171450487e+03, 1.874663776282e+04, 3.786458088636e+04], [-1.668016052819e+00, -3.604314584858e-01, -1.052854595701e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.515171450487e+03, 1.874663776282e+04, 3.786458088636e+04], [-1.668016052819e+00, -3.604314584858e-01, -1.052854595701e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.159191509913e+04, TOL));
         ok(isequalRel(a,       2.690683684953e+04, TOL));
         ok(isequalRel(ecc,     7.544423660167e-01, TOL));
         ok(isequalRel(incl,    1.107740868247e+00, TOL));
         ok(isequalRel(omega,   6.182881249600e+00, TOL));
         ok(isequalRel(argp,    4.422777445189e+00, TOL));
         ok(isequalRel(nu,      3.416429814041e+00, TOL));
         ok(isequalRel(m,       4.340429491937e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-9.084486021062e+03, 1.298262608646e+04, 2.404563900249e+04], [-1.378032362870e+00, -1.373184736469e+00, -3.013963835302e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-9.084486021062e+03, 1.298262608646e+04, 2.404563900249e+04], [-1.378032362870e+00, -1.373184736469e+00, -3.013963835302e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.159446666677e+04, TOL));
         ok(isequalRel(a,       2.690546805180e+04, TOL));
         ok(isequalRel(ecc,     7.543649856597e-01, TOL));
         ok(isequalRel(incl,    1.107762749508e+00, TOL));
         ok(isequalRel(omega,   6.182560237012e+00, TOL));
         ok(isequalRel(argp,    4.422854220659e+00, TOL));
         ok(isequalRel(nu,      3.798493751187e+00, TOL));
         ok(isequalRel(m,       5.370138822445e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[5.647009094950e+03, -3.293905186928e+03, -5.425852350631e+03], [8.507977175552e+00, 4.145607966602e-01, 2.543322805760e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([5.647009094950e+03, -3.293905186928e+03, -5.425852350631e+03], [8.507977175552e+00, 4.145607966602e-01, 2.543322805760e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.159787118062e+04, TOL));
         ok(isequalRel(a,       2.691641974626e+04, TOL));
         ok(isequalRel(ecc,     7.543973649324e-01, TOL));
         ok(isequalRel(incl,    1.107830400932e+00, TOL));
         ok(isequalRel(omega,   6.182280124794e+00, TOL));
         ok(isequalRel(argp,    4.422717417256e+00, TOL));
         ok(isequalRel(nu,      1.065570636840e+00, TOL));
         ok(isequalRel(m,       1.168666772008e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.511163372210e+04, 7.412551094883e+03, 1.984425781729e+04], [4.164962896993e-01, 1.332106005655e+00, 2.739301737209e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.511163372210e+04, 7.412551094883e+03, 1.984425781729e+04], [4.164962896993e-01, 1.332106005655e+00, 2.739301737209e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.159711144998e+04, TOL));
         ok(isequalRel(a,       2.690741521945e+04, TOL));
         ok(isequalRel(ecc,     7.543205050293e-01, TOL));
         ok(isequalRel(incl,    1.107837734070e+00, TOL));
         ok(isequalRel(omega,   6.182255329349e+00, TOL));
         ok(isequalRel(argp,    4.422641678516e+00, TOL));
         ok(isequalRel(nu,      2.601631683239e+00, TOL));
         ok(isequalRel(m,       1.146871579335e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.296147461641e+04, 1.498574459578e+04, 3.451109257381e+04], [-8.167110480218e-01, 7.893911075507e-01, 1.407901804256e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.296147461641e+04, 1.498574459578e+04, 3.451109257381e+04], [-8.167110480218e-01, 7.893911075507e-01, 1.407901804256e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.159455818050e+04, TOL));
         ok(isequalRel(a,       2.690693209782e+04, TOL));
         ok(isequalRel(ecc,     7.543782726170e-01, TOL));
         ok(isequalRel(incl,    1.107773752166e+00, TOL));
         ok(isequalRel(omega,   6.181995515785e+00, TOL));
         ok(isequalRel(argp,    4.422624170334e+00, TOL));
         ok(isequalRel(nu,      2.926221972581e+00, TOL));
         ok(isequalRel(m,       2.176764093643e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.484115301459e+04, 1.887691439870e+04, 4.062625901619e+04], [-1.380403340809e+00, 2.902288098752e-01, 2.982581201764e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.484115301459e+04, 1.887691439870e+04, 4.062625901619e+04], [-1.380403340809e+00, 2.902288098752e-01, 2.982581201764e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.159332438363e+04, TOL));
         ok(isequalRel(a,       2.690703434251e+04, TOL));
         ok(isequalRel(ecc,     7.544097492072e-01, TOL));
         ok(isequalRel(incl,    1.107739315699e+00, TOL));
         ok(isequalRel(omega,   6.181716914276e+00, TOL));
         ok(isequalRel(argp,    4.422706632256e+00, TOL));
         ok(isequalRel(nu,      3.155441928149e+00, TOL));
         ok(isequalRel(m,       3.206520759535e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[3.750701740805e+03, 1.897857939698e+04, 3.857811783220e+04], [-1.656939412449e+00, -2.879308805679e-01, -9.108255985567e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([3.750701740805e+03, 1.897857939698e+04, 3.857811783220e+04], [-1.656939412449e+00, -2.879308805679e-01, -9.108255985567e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.159354120371e+04, TOL));
         ok(isequalRel(a,       2.690671693868e+04, TOL));
         ok(isequalRel(ecc,     7.544010397628e-01, TOL));
         ok(isequalRel(incl,    1.107722158280e+00, TOL));
         ok(isequalRel(omega,   6.181425673942e+00, TOL));
         ok(isequalRel(argp,    4.422823480026e+00, TOL));
         ok(isequalRel(nu,      3.389359534002e+00, TOL));
         ok(isequalRel(m,       4.236218513604e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-8.027302194887e+03, 1.393954436955e+04, 2.613649045637e+04], [-1.474476060920e+00, -1.222693623774e+00, -2.737178731434e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-8.027302194887e+03, 1.393954436955e+04, 2.613649045637e+04], [-1.474476060920e+00, -1.222693623774e+00, -2.737178731434e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.159580832583e+04, TOL));
         ok(isequalRel(a,       2.690543255995e+04, TOL));
         ok(isequalRel(ecc,     7.543315566779e-01, TOL));
         ok(isequalRel(incl,    1.107737391772e+00, TOL));
         ok(isequalRel(omega,   6.181109885690e+00, TOL));
         ok(isequalRel(argp,    4.422910653316e+00, TOL));
         ok(isequalRel(nu,      3.742567954597e+00, TOL));
         ok(isequalRel(m,       5.265930365825e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.296956570925e+03, -2.813693697683e+03, -5.871095872577e+03], [9.881929371107e+00, -1.978467206547e+00, -1.922261005276e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.296956570925e+03, -2.813693697683e+03, -5.871095872577e+03], [9.881929371107e+00, -1.978467206547e+00, -1.922261005276e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.159675194246e+04, TOL));
         ok(isequalRel(a,       2.688370020316e+04, TOL));
         ok(isequalRel(ecc,     7.540773149328e-01, TOL));
         ok(isequalRel(incl,    1.107720670171e+00, TOL));
         ok(isequalRel(omega,   6.180964253463e+00, TOL));
         ok(isequalRel(argp,    4.422744450037e+00, TOL));
         ok(isequalRel(nu,      1.379633086621e-01, TOL));
         ok(isequalRel(m,       1.273864704904e-02, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.473860364819e+04, 6.383416440188e+03, 1.778727631900e+04], [6.395569516125e-01, 1.392554379179e+00, 2.906206323925e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.473860364819e+04, 6.383416440188e+03, 1.778727631900e+04], [6.395569516125e-01, 1.392554379179e+00, 2.906206323925e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.159920910780e+04, TOL));
         ok(isequalRel(a,       2.690748325404e+04, TOL));
         ok(isequalRel(ecc,     7.542695512343e-01, TOL));
         ok(isequalRel(incl,    1.107829705307e+00, TOL));
         ok(isequalRel(omega,   6.180797170612e+00, TOL));
         ok(isequalRel(argp,    4.422706612708e+00, TOL));
         ok(isequalRel(nu,      2.553148562530e+00, TOL));
         ok(isequalRel(m,       1.042667920789e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.354685388669e+04, 1.435815602832e+04, 3.344167679479e+04], [-7.348950062910e-01, 8.415648514604e-01, 1.526009908521e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.354685388669e+04, 1.435815602832e+04, 3.344167679479e+04], [-7.348950062910e-01, 8.415648514604e-01, 1.526009908521e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.159652301462e+04, TOL));
         ok(isequalRel(a,       2.690671416052e+04, TOL));
         ok(isequalRel(ecc,     7.543275574825e-01, TOL));
         ok(isequalRel(incl,    1.107761225370e+00, TOL));
         ok(isequalRel(omega,   6.180543332273e+00, TOL));
         ok(isequalRel(argp,    4.422668510757e+00, TOL));
         ok(isequalRel(nu,      2.900284963886e+00, TOL));
         ok(isequalRel(m,       2.072598332621e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.585587696303e+04, 1.862405633582e+04, 4.036713420574e+04], [-1.337753546067e+00, 3.439695218582e-01, 4.100184716680e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.585587696303e+04, 1.862405633582e+04, 4.036713420574e+04], [-1.337753546067e+00, 3.439695218582e-01, 4.100184716680e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.159515533885e+04, TOL));
         ok(isequalRel(a,       2.690682719560e+04, TOL));
         ok(isequalRel(ecc,     7.543624491072e-01, TOL));
         ok(isequalRel(incl,    1.107725304350e+00, TOL));
         ok(isequalRel(omega,   6.180267568118e+00, TOL));
         ok(isequalRel(argp,    4.422742503334e+00, TOL));
         ok(isequalRel(nu,      3.133228268447e+00, TOL));
         ok(isequalRel(m,       3.102379251274e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[4.976449335906e+03, 1.915675504042e+04, 3.918968603184e+04], [-1.642084364575e+00, -2.185250959665e-01, -7.741482036572e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([4.976449335906e+03, 1.915675504042e+04, 3.918968603184e+04], [-1.642084364575e+00, -2.185250959665e-01, -7.741482036572e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.159520953352e+04, TOL));
         ok(isequalRel(a,       2.690657177045e+04, TOL));
         ok(isequalRel(ecc,     7.543584025770e-01, TOL));
         ok(isequalRel(incl,    1.107706856641e+00, TOL));
         ok(isequalRel(omega,   6.179979576656e+00, TOL));
         ok(isequalRel(argp,    4.422855552694e+00, TOL));
         ok(isequalRel(nu,      3.363281180717e+00, TOL));
         ok(isequalRel(m,       4.132095878009e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-6.909207462100e+03, 1.479044707042e+04, 2.803446732222e+04], [-1.545152609613e+00, -1.088119523356e+00, -2.487447213815e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-6.909207462100e+03, 1.479044707042e+04, 2.803446732222e+04], [-1.545152609613e+00, -1.088119523356e+00, -2.487447213815e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.159720615505e+04, TOL));
         ok(isequalRel(a,       2.690539536101e+04, TOL));
         ok(isequalRel(ecc,     7.542967241330e-01, TOL));
         ok(isequalRel(incl,    1.107716753980e+00, TOL));
         ok(isequalRel(omega,   6.179668905637e+00, TOL));
         ok(isequalRel(argp,    4.422949895116e+00, TOL));
         ok(isequalRel(nu,      3.692964050534e+00, TOL));
         ok(isequalRel(m,       5.161814529443e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-7.331650067070e+03, -6.041732341856e+02, -2.723510145754e+03], [6.168997264937e+00, -3.634011554138e+00, -5.963531681634e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-7.331650067070e+03, -6.041732341856e+02, -2.723510145754e+03], [6.168997264937e+00, -3.634011554138e+00, -5.963531681634e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.160339534575e+04, TOL));
         ok(isequalRel(a,       2.693312477518e+04, TOL));
         ok(isequalRel(ecc,     7.544385527024e-01, TOL));
         ok(isequalRel(incl,    1.107867960141e+00, TOL));
         ok(isequalRel(omega,   6.179561438505e+00, TOL));
         ok(isequalRel(argp,    4.422677213102e+00, TOL));
         ok(isequalRel(nu,      5.400593266884e+00, TOL));
         ok(isequalRel(m,       6.191930050445e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
         // 23177
     });

test('[-1.684343528577e+03, -3.155595196340e+04, 3.888999443194e+03], [2.023055718619e+00, -2.151306405417e+00, 2.650657784926e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.684343528577e+03, -3.155595196340e+04, 3.888999443194e+03], [2.023055718619e+00, -2.151306405417e+00, 2.650657784926e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.159150604739e+04, TOL));
         ok(isequalRel(a,       2.453355662756e+04, TOL));
         ok(isequalRel(ecc,     7.263087733555e-01, TOL));
         ok(isequalRel(incl,    1.226214931208e-01, TOL));
         ok(isequalRel(omega,   3.141348919022e+00, TOL));
         ok(isequalRel(argp,    5.163878911514e+00, TOL));
         ok(isequalRel(nu,      2.637418480129e+00, TOL));
         ok(isequalRel(m,       1.330791003283e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.232551410155e+04, -3.898215046244e+04, 4.802888322754e+03], [1.763224157190e+00, -1.025144461842e-01, 1.239713851147e-02], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.232551410155e+04, -3.898215046244e+04, 4.802888322754e+03], [1.763224157190e+00, -1.025144461842e-01, 1.239713851147e-02], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.159419427396e+04, TOL));
         ok(isequalRel(a,       2.453506374349e+04, TOL));
         ok(isequalRel(ecc,     7.262533237763e-01, TOL));
         ok(isequalRel(incl,    1.226316297312e-01, TOL));
         ok(isequalRel(omega,   3.140498549650e+00, TOL));
         ok(isequalRel(argp,    5.165203641230e+00, TOL));
         ok(isequalRel(nu,      2.993942370793e+00, TOL));
         ok(isequalRel(m,       2.513553063295e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.277366831936e+04, -3.434802176606e+04, 4.228774073906e+03], [1.067616787250e+00, 1.352427865481e+00, -1.669563673618e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.277366831936e+04, -3.434802176606e+04, 4.228774073906e+03], [1.067616787250e+00, 1.352427865481e+00, -1.669563673618e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.159408771664e+04, TOL));
         ok(isequalRel(a,       2.453509125650e+04, TOL));
         ok(isequalRel(ecc,     7.262566786379e-01, TOL));
         ok(isequalRel(incl,    1.226494036439e-01, TOL));
         ok(isequalRel(omega,   3.139727897237e+00, TOL));
         ok(isequalRel(argp,    5.166395681062e+00, TOL));
         ok(isequalRel(nu,      3.271456185468e+00, TOL));
         ok(isequalRel(m,       3.696323676145e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.619440441089e+04, -1.948294203672e+04, 2.393847740627e+03], [-3.137321856817e-01, 2.808771328014e+00, -3.462041182091e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.619440441089e+04, -1.948294203672e+04, 2.393847740627e+03], [-3.137321856817e-01, 2.808771328014e+00, -3.462041182091e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.159120401248e+04, TOL));
         ok(isequalRel(a,       2.453375145032e+04, TOL));
         ok(isequalRel(ecc,     7.263198311914e-01, TOL));
         ok(isequalRel(incl,    1.226747759565e-01, TOL));
         ok(isequalRel(omega,   3.139031353953e+00, TOL));
         ok(isequalRel(argp,    5.167558152768e+00, TOL));
         ok(isequalRel(nu,      3.616660347911e+00, TOL));
         ok(isequalRel(m,       4.879092111333e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[8.893505734480e+03, 5.763388905608e+03, -7.136988416357e+02], [-7.037399220059e+00, 3.022613130968e+00, -3.702724159315e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([8.893505734480e+03, 5.763388905608e+03, -7.136988416357e+02], [-7.037399220059e+00, 3.022613130968e+00, -3.702724159315e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.158409209629e+04, TOL));
         ok(isequalRel(a,       2.452062824710e+04, TOL));
         ok(isequalRel(ecc,     7.263454271303e-01, TOL));
         ok(isequalRel(incl,    1.226833333057e-01, TOL));
         ok(isequalRel(omega,   3.138801335329e+00, TOL));
         ok(isequalRel(argp,    5.168567953205e+00, TOL));
         ok(isequalRel(nu,      4.837457714387e+00, TOL));
         ok(isequalRel(m,       6.061850677234e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-6.028756865366e+03, -2.564899913786e+04, 3.164371072739e+03], [1.883159287927e+00, -3.177051976376e+00, 3.907931623816e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-6.028756865366e+03, -2.564899913786e+04, 3.164371072739e+03], [1.883159287927e+00, -3.177051976376e+00, 3.907931623816e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.158878222061e+04, TOL));
         ok(isequalRel(a,       2.453218991225e+04, TOL));
         ok(isequalRel(ecc,     7.263670854616e-01, TOL));
         ok(isequalRel(incl,    1.226499243110e-01, TOL));
         ok(isequalRel(omega,   3.137994612184e+00, TOL));
         ok(isequalRel(argp,    5.170057380766e+00, TOL));
         ok(isequalRel(nu,      2.458314087655e+00, TOL));
         ok(isequalRel(m,       9.618077026516e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[8.313572990560e+03, -3.814645710922e+04, 4.697807775347e+03], [1.905002133306e+00, -6.258830744031e-01, 7.609818669984e-02], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([8.313572990560e+03, -3.814645710922e+04, 4.697807775347e+03], [1.905002133306e+00, -6.258830744031e-01, 7.609818669984e-02], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.159255390122e+04, TOL));
         ok(isequalRel(a,       2.453478796489e+04, TOL));
         ok(isequalRel(ecc,     7.262956957566e-01, TOL));
         ok(isequalRel(incl,    1.226551350798e-01, TOL));
         ok(isequalRel(omega,   3.137095440856e+00, TOL));
         ok(isequalRel(argp,    5.171481490304e+00, TOL));
         ok(isequalRel(nu,      2.899985976628e+00, TOL));
         ok(isequalRel(m,       2.144562730680e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.018129108622e+04, -3.684260674073e+04, 4.529125682184e+03], [1.326244475907e+00, 9.219164865847e-01, -1.145274551925e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.018129108622e+04, -3.684260674073e+04, 4.529125682184e+03], [1.326244475907e+00, 9.219164865847e-01, -1.145274551925e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.159329254213e+04, TOL));
         ok(isequalRel(a,       2.453515604347e+04, TOL));
         ok(isequalRel(ecc,     7.262798501064e-01, TOL));
         ok(isequalRel(incl,    1.226717535740e-01, TOL));
         ok(isequalRel(omega,   3.136301269251e+00, TOL));
         ok(isequalRel(argp,    5.172703429001e+00, TOL));
         ok(isequalRel(nu,      3.184506271738e+00, TOL));
         ok(isequalRel(m,       3.327331274225e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.630261794569e+04, -2.517339539436e+04, 3.084653099862e+03], [2.453988353635e-01, 2.329974346816e+00, -2.874958796262e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.630261794569e+04, -2.517339539436e+04, 3.084653099862e+03], [2.453988353635e-01, 2.329974346816e+00, -2.874958796262e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.159135771519e+04, TOL));
         ok(isequalRel(a,       2.453437669424e+04, TOL));
         ok(isequalRel(ecc,     7.263238070861e-01, TOL));
         ok(isequalRel(incl,    1.226947768986e-01, TOL));
         ok(isequalRel(omega,   3.135572089718e+00, TOL));
         ok(isequalRel(argp,    5.173873772615e+00, TOL));
         ok(isequalRel(nu,      3.489692093179e+00, TOL));
         ok(isequalRel(m,       4.510101082385e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.936507045602e+04, -2.700004901218e+03, 3.174272741652e+02], [-3.009733018324e+00, 3.902496057932e+00, -4.789285820627e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.936507045602e+04, -2.700004901218e+03, 3.174272741652e+02], [-3.009733018324e+00, 3.902496057932e+00, -4.789285820627e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.158591008376e+04, TOL));
         ok(isequalRel(a,       2.452949947624e+04, TOL));
         ok(isequalRel(ecc,     7.264120176083e-01, TOL));
         ok(isequalRel(incl,    1.227278654093e-01, TOL));
         ok(isequalRel(omega,   3.135059499098e+00, TOL));
         ok(isequalRel(argp,    5.174999487937e+00, TOL));
         ok(isequalRel(nu,      4.116789489670e+00, TOL));
         ok(isequalRel(m,       5.692856020935e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-9.667818787801e+03, -1.693019112642e+04, 2.095874690342e+03], [1.279288285157e+00, -4.736005905398e+00, 5.828782553890e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-9.667818787801e+03, -1.693019112642e+04, 2.095874690342e+03], [1.279288285157e+00, -4.736005905398e+00, 5.828782553890e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.158567037053e+04, TOL));
         ok(isequalRel(a,       2.452935272995e+04, TOL));
         ok(isequalRel(ecc,     7.264167991962e-01, TOL));
         ok(isequalRel(incl,    1.226890861071e-01, TOL));
         ok(isequalRel(omega,   3.134638468431e+00, TOL));
         ok(isequalRel(argp,    5.176197539891e+00, TOL));
         ok(isequalRel(nu,      2.169100857506e+00, TOL));
         ok(isequalRel(m,       5.928252330550e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[4.021314385831e+03, -3.606609209609e+04, 4.442915874109e+03], [2.007322354141e+00, -1.227461375715e+00, 1.493838966847e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([4.021314385831e+03, -3.606609209609e+04, 4.442915874109e+03], [2.007322354141e+00, -1.227461375715e+00, 1.493838966847e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.159074197689e+04, TOL));
         ok(isequalRel(a,       2.453434510378e+04, TOL));
         ok(isequalRel(ecc,     7.263406648409e-01, TOL));
         ok(isequalRel(incl,    1.226815949495e-01, TOL));
         ok(isequalRel(omega,   3.133680211534e+00, TOL));
         ok(isequalRel(argp,    5.177768783129e+00, TOL));
         ok(isequalRel(nu,      2.794279417344e+00, TOL));
         ok(isequalRel(m,       1.775570986411e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
         // 23333
     });

test('[-4.467291239679e+04, -6.213119965811e+03, -1.738801317270e+03], [-3.719475069902e+00, -1.336673022266e+00, -6.218882613837e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-4.467291239679e+04, -6.213119965811e+03, -1.738801317270e+03], [-3.719475069902e+00, -1.336673022266e+00, -6.218882613837e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.506972700758e+03, TOL));
         ok(isequalRel(a,       2.409769999594e+05, TOL));
         ok(isequalRel(ecc,     9.906044031463e-01, TOL));
         ok(isequalRel(incl,    5.284333027994e-01, TOL));
         ok(isequalRel(omega,   7.211121268969e-02, TOL));
         ok(isequalRel(argp,    5.071542112866e-01, TOL));
         ok(isequalRel(nu,      2.710920576748e+00, TOL));
         ok(isequalRel(m,       4.226762810877e-02, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-6.705308885387e+04, -1.499469685946e+04, -5.897990727927e+03], [-2.860576612613e+00, -1.183771564513e+00, -5.684739091465e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-6.705308885387e+04, -1.499469685946e+04, -5.897990727927e+03], [-2.860576612613e+00, -1.183771564513e+00, -5.684739091465e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.477474953720e+03, TOL));
         ok(isequalRel(a,       2.411897549004e+05, TOL));
         ok(isequalRel(ecc,     9.906744583785e-01, TOL));
         ok(isequalRel(incl,    5.285033066150e-01, TOL));
         ok(isequalRel(omega,   7.246069977222e-02, TOL));
         ok(isequalRel(argp,    5.070592051936e-01, TOL));
         ok(isequalRel(nu,      2.804969305754e+00, TOL));
         ok(isequalRel(m,       7.916219999337e-02, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-8.522784253168e+04, -2.289708484471e+04, -9.722591845641e+03], [-2.426469823388e+00, -1.078592475459e+00, -5.253414306680e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-8.522784253168e+04, -2.289708484471e+04, -9.722591845641e+03], [-2.426469823388e+00, -1.078592475459e+00, -5.253414306680e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.449622610295e+03, TOL));
         ok(isequalRel(a,       2.412822722632e+05, TOL));
         ok(isequalRel(ecc,     9.907363097222e-01, TOL));
         ok(isequalRel(incl,    5.285687732561e-01, TOL));
         ok(isequalRel(omega,   7.267241025939e-02, TOL));
         ok(isequalRel(argp,    5.070686522320e-01, TOL));
         ok(isequalRel(nu,      2.853418125097e+00, TOL));
         ok(isequalRel(m,       1.160226162864e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.009860041914e+05, -3.017119698695e+04, -1.328377044765e+04], [-2.147108978436e+00, -1.000530826921e+00, -4.915875819679e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.009860041914e+05, -3.017119698695e+04, -1.328377044765e+04], [-2.147108978436e+00, -1.000530826921e+00, -4.915875819679e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.423480498074e+03, TOL));
         ok(isequalRel(a,       2.413357641222e+05, TOL));
         ok(isequalRel(ecc,     9.907930387002e-01, TOL));
         ok(isequalRel(incl,    5.286289343507e-01, TOL));
         ok(isequalRel(omega,   7.282719105430e-02, TOL));
         ok(isequalRel(argp,    5.071228184989e-01, TOL));
         ok(isequalRel(nu,      2.885019187817e+00, TOL));
         ok(isequalRel(m,       1.528555719233e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.150930068639e+05, -3.696256316477e+04, -1.663415682929e+04], [-1.945446187603e+00, -9.389477360594e-01, -4.641992018274e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.150930068639e+05, -3.696256316477e+04, -1.663415682929e+04], [-1.945446187603e+00, -9.389477360594e-01, -4.641992018274e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.399113023702e+03, TOL));
         ok(isequalRel(a,       2.413712341200e+05, TOL));
         ok(isequalRel(ecc,     9.908453428193e-01, TOL));
         ok(isequalRel(incl,    5.286817310523e-01, TOL));
         ok(isequalRel(omega,   7.294756727207e-02, TOL));
         ok(isequalRel(argp,    5.072052372828e-01, TOL));
         ok(isequalRel(nu,      2.908057142832e+00, TOL));
         ok(isequalRel(m,       1.896643340401e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.279658006489e+05, -4.336332967165e+04, -1.980990480432e+04], [-1.789652015921e+00, -8.882784630768e-01, -4.412544683039e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.279658006489e+05, -4.336332967165e+04, -1.980990480432e+04], [-1.789652015921e+00, -8.882784630768e-01, -4.412544683039e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.376580733129e+03, TOL));
         ok(isequalRel(a,       2.413967650470e+05, TOL));
         ok(isequalRel(ecc,     9.908934162100e-01, TOL));
         ok(isequalRel(incl,    5.287257570138e-01, TOL));
         ok(isequalRel(omega,   7.304248511070e-02, TOL));
         ok(isequalRel(argp,    5.073093700015e-01, TOL));
         ok(isequalRel(nu,      2.925984490012e+00, TOL));
         ok(isequalRel(m,       2.264511571453e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.398632833221e+05, -4.943645704153e+04, -2.283680438139e+04], [-1.663762568029e+00, -8.453159125263e-01, -4.215486272921e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.398632833221e+05, -4.943645704153e+04, -2.283680438139e+04], [-1.663762568029e+00, -8.453159125263e-01, -4.215486272921e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.355940279396e+03, TOL));
         ok(isequalRel(a,       2.414161852759e+05, TOL));
         ok(isequalRel(ecc,     9.909372927325e-01, TOL));
         ok(isequalRel(incl,    5.287600418418e-01, TOL));
         ok(isequalRel(omega,   7.311619088859e-02, TOL));
         ok(isequalRel(argp,    5.074320745831e-01, TOL));
         ok(isequalRel(nu,      2.940546063766e+00, TOL));
         ok(isequalRel(m,       2.632178986692e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.509602297826e+05, -5.522745413896e+04, -2.573401408879e+04], [-1.558730986445e+00, -8.080610648023e-01, -4.042938457354e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.509602297826e+05, -5.522745413896e+04, -2.573401408879e+04], [-1.558730986445e+00, -8.080610648023e-01, -4.042938457354e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.337244521666e+03, TOL));
         ok(isequalRel(a,       2.414315614854e+05, TOL));
         ok(isequalRel(ecc,     9.909769444104e-01, TOL));
         ok(isequalRel(incl,    5.287838764256e-01, TOL));
         ok(isequalRel(omega,   7.317091761381e-02, TOL));
         ok(isequalRel(argp,    5.075716479150e-01, TOL));
         ok(isequalRel(nu,      2.952737452853e+00, TOL));
         ok(isequalRel(m,       2.999662394134e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.613817141463e+05, -6.077064040903e+04, -2.851626290017e+04], [-1.468977173779e+00, -7.751904591525e-01, -3.889518104933e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.613817141463e+05, -6.077064040903e+04, -2.851626290017e+04], [-1.468977173779e+00, -7.751904591525e-01, -3.889518104933e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.320542549547e+03, TOL));
         ok(isequalRel(a,       2.414441153151e+05, TOL));
         ok(isequalRel(ecc,     9.910123176508e-01, TOL));
         ok(isequalRel(incl,    5.287967163251e-01, TOL));
         ok(isequalRel(omega,   7.320791238651e-02, TOL));
         ok(isequalRel(argp,    5.077270831945e-01, TOL));
         ok(isequalRel(nu,      2.963176615147e+00, TOL));
         ok(isequalRel(m,       3.366977788907e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.712211873695e+05, -6.609276474442e+04, -3.119519847387e+04], [-1.390837596332e+00, -7.457856328566e-01, -3.751403978620e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.712211873695e+05, -6.609276474442e+04, -3.119519847387e+04], [-1.390837596332e+00, -7.457856328566e-01, -3.751403978620e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.305879649115e+03, TOL));
         ok(isequalRel(a,       2.414546188375e+05, TOL));
         ok(isequalRel(ecc,     9.910433489629e-01, TOL));
         ok(isequalRel(incl,    5.287981285599e-01, TOL));
         ok(isequalRel(omega,   7.322789461204e-02, TOL));
         ok(isequalRel(argp,    5.078977411021e-01, TOL));
         ok(isequalRel(nu,      2.972271689837e+00, TOL));
         ok(isequalRel(m,       3.734140816695e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.805508288875e+05, -7.121523290630e+04, -3.378024938270e+04], [-1.321788671573e+00, -7.191847523360e-01, -3.625794946294e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.805508288875e+05, -7.121523290630e+04, -3.378024938270e+04], [-1.321788671573e+00, -7.191847523360e-01, -3.625794946294e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.293297235644e+03, TOL));
         ok(isequalRel(a,       2.414635857172e+05, TOL));
         ok(isequalRel(ecc,     9.910699726623e-01, TOL));
         ok(isequalRel(incl,    5.287877612087e-01, TOL));
         ok(isequalRel(omega,   7.323128422699e-02, TOL));
         ok(isequalRel(argp,    5.080831871628e-01, TOL));
         ok(isequalRel(nu,      2.980305455016e+00, TOL));
         ok(isequalRel(m,       4.101167015781e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.894278753307e+05, -7.615554943344e+04, -3.627919882816e+04], [-1.260024473046e+00, -6.948960527126e-01, -3.510581325907e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.894278753307e+05, -7.615554943344e+04, -3.627919882816e+04], [-1.260024473046e+00, -6.948960527126e-01, -3.510581325907e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.282832769809e+03, TOL));
         ok(isequalRel(a,       2.414713718655e+05, TOL));
         ok(isequalRel(ecc,     9.910921250270e-01, TOL));
         ok(isequalRel(incl,    5.287653253333e-01, TOL));
         ok(isequalRel(omega,   7.321832534646e-02, TOL));
         ok(isequalRel(argp,    5.082831042665e-01, TOL));
         ok(isequalRel(nu,      2.987481446559e+00, TOL));
         ok(isequalRel(m,       4.468071947966e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.978986940141e+05, -8.092829015181e+04, -3.869857972447e+04], [-1.204211888236e+00, -6.725447088389e-01, -3.404137305224e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.978986940141e+05, -8.092829015181e+04, -3.869857972447e+04], [-1.204211888236e+00, -6.725447088389e-01, -3.404137305224e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.274519667751e+03, TOL));
         ok(isequalRel(a,       2.414782321148e+05, TOL));
         ok(isequalRel(ecc,     9.911097467267e-01, TOL));
         ok(isequalRel(incl,    5.287305838373e-01, TOL));
         ok(isequalRel(omega,   7.318915787318e-02, TOL));
         ok(isequalRel(argp,    5.084972424030e-01, TOL));
         ok(isequalRel(nu,      2.993950801145e+00, TOL));
         ok(isequalRel(m,       4.834871268905e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.006388298624e+05, -8.248414969882e+04, -3.948834331447e+04], [-1.186748462247e+00, -6.654724216179e-01, -3.370375820763e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.006388298624e+05, -8.248414969882e+04, -3.948834331447e+04], [-1.186748462247e+00, -6.654724216179e-01, -3.370375820763e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.272231896423e+03, TOL));
         ok(isequalRel(a,       2.414803469980e+05, TOL));
         ok(isequalRel(ecc,     9.911146043875e-01, TOL));
         ok(isequalRel(incl,    5.287162343211e-01, TOL));
         ok(isequalRel(omega,   7.317584835319e-02, TOL));
         ok(isequalRel(argp,    5.085717444892e-01, TOL));
         ok(isequalRel(nu,      2.995970942154e+00, TOL));
         ok(isequalRel(m,       4.957116964193e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
         // 23599
     });

test('[1.193195642997e+04, 7.340749737496e+03, 8.864636598694e+02], [3.083291156075e-01, 5.532328972169e+00, 6.728872813175e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.193195642997e+04, 7.340749737496e+03, 8.864636598694e+02], [3.083291156075e-01, 5.532328972169e+00, 6.728872813175e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.034613796097e+04, TOL));
         ok(isequalRel(a,       1.554763988363e+04, TOL));
         ok(isequalRel(ecc,     5.784051420876e-01, TOL));
         ok(isequalRel(incl,    1.210653565662e-01, TOL));
         ok(isequalRel(omega,   4.550077194867e-03, TOL));
         ok(isequalRel(argp,    4.790703991463e+00, TOL));
         ok(isequalRel(nu,      2.042734029820e+00, TOL));
         ok(isequalRel(m,       8.318515906631e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.132171039205e+04, 1.322284749156e+04, 1.602401190490e+03], [-1.151973982413e+00, 4.285810871397e+00, 5.219194250331e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.132171039205e+04, 1.322284749156e+04, 1.602401190490e+03], [-1.151973982413e+00, 4.285810871397e+00, 5.219194250331e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.034833591491e+04, TOL));
         ok(isequalRel(a,       1.554864872040e+04, TOL));
         ok(isequalRel(ecc,     5.783202612333e-01, TOL));
         ok(isequalRel(incl,    1.210430045541e-01, TOL));
         ok(isequalRel(omega,   4.342043133215e-03, TOL));
         ok(isequalRel(argp,    4.791186840966e+00, TOL));
         ok(isequalRel(nu,      2.353987642725e+00, TOL));
         ok(isequalRel(m,       1.222597034643e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[9.438293956752e+03, 1.768805450261e+04, 2.146592934019e+03], [-1.907904054339e+00, 3.179955045945e+00, 3.876924790871e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([9.438293956752e+03, 1.768805450261e+04, 2.146592934019e+03], [-1.907904054339e+00, 3.179955045945e+00, 3.876924790871e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.035004373812e+04, TOL));
         ok(isequalRel(a,       1.554918686241e+04, TOL));
         ok(isequalRel(ecc,     5.782452116786e-01, TOL));
         ok(isequalRel(incl,    1.210281785821e-01, TOL));
         ok(isequalRel(omega,   4.056469339629e-03, TOL));
         ok(isequalRel(argp,    4.791670218076e+00, TOL));
         ok(isequalRel(nu,      2.571151958504e+00, TOL));
         ok(isequalRel(m,       1.613374145509e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[6.872086346386e+03, 2.091011016811e+04, 2.539799450345e+03], [-2.323995366881e+00, 2.207398461776e+00, 2.695061210772e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([6.872086346386e+03, 2.091011016811e+04, 2.539799450345e+03], [-2.323995366881e+00, 2.207398461776e+00, 2.695061210772e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.035130989883e+04, TOL));
         ok(isequalRel(a,       1.554948627316e+04, TOL));
         ok(isequalRel(ecc,     5.781858818730e-01, TOL));
         ok(isequalRel(incl,    1.210190646011e-01, TOL));
         ok(isequalRel(omega,   3.746592809550e-03, TOL));
         ok(isequalRel(argp,    4.792132050196e+00, TOL));
         ok(isequalRel(nu,      2.742767240296e+00, TOL));
         ok(isequalRel(m,       2.004172092034e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[3.933375097983e+03, 2.302407662542e+04, 2.798259667462e+03], [-2.542860615829e+00, 1.327134965795e+00, 1.624500761758e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([3.933375097983e+03, 2.302407662542e+04, 2.798259667462e+03], [-2.542860615829e+00, 1.327134965795e+00, 1.624500761758e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.035217550045e+04, TOL));
         ok(isequalRel(a,       1.554964232383e+04, TOL));
         ok(isequalRel(ecc,     5.781435183037e-01, TOL));
         ok(isequalRel(incl,    1.210139969595e-01, TOL));
         ok(isequalRel(omega,   3.429549142039e-03, TOL));
         ok(isequalRel(argp,    4.792573290958e+00, TOL));
         ok(isequalRel(nu,      2.890012644494e+00, TOL));
         ok(isequalRel(m,       2.394983832435e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[8.166409154575e+02, 2.411898675475e+04, 2.932694594275e+03], [-2.626838010139e+00, 5.045027625462e-01, 6.234430647519e-02], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([8.166409154575e+02, 2.411898675475e+04, 2.932694594275e+03], [-2.626838010139e+00, 5.045027625462e-01, 6.234430647519e-02], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.035266773229e+04, TOL));
         ok(isequalRel(a,       1.554969873037e+04, TOL));
         ok(isequalRel(ecc,     5.781182295785e-01, TOL));
         ok(isequalRel(incl,    1.210120012340e-01, TOL));
         ok(isequalRel(omega,   3.111548903829e-03, TOL));
         ok(isequalRel(argp,    4.792999547699e+00, TOL));
         ok(isequalRel(nu,      3.024294654572e+00, TOL));
         ok(isequalRel(m,       2.785804532415e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.334417058038e+03, 2.424686096326e+04, 2.949364488411e+03], [-2.602259645510e+00, -2.880582655860e-01, -3.414513473677e-02], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.334417058038e+03, 2.424686096326e+04, 2.949364488411e+03], [-2.602259645510e+00, -2.880582655860e-01, -3.414513473677e-02], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.035280141297e+04, TOL));
         ok(isequalRel(a,       1.554967510109e+04, TOL));
         ok(isequalRel(ecc,     5.781099191721e-01, TOL));
         ok(isequalRel(incl,    1.210125864550e-01, TOL));
         ok(isequalRel(omega,   2.795255643399e-03, TOL));
         ok(isequalRel(argp,    4.793416992693e+00, TOL));
         ok(isequalRel(nu,      3.153073057420e+00, TOL));
         ok(isequalRel(m,       3.176630486600e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-5.394317980388e+03, 2.342942716149e+04, 2.850868325860e+03], [-2.474434068042e+00, -1.074055982182e+00, -1.298683659015e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-5.394317980388e+03, 2.342942716149e+04, 2.850868325860e+03], [-2.474434068042e+00, -1.074055982182e+00, -1.298683659015e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.035258051659e+04, TOL));
         ok(isequalRel(a,       1.554957666106e+04, TOL));
         ok(isequalRel(ecc,     5.781185602132e-01, TOL));
         ok(isequalRel(incl,    1.210155993466e-01, TOL));
         ok(isequalRel(omega,   2.482414635147e-03, TOL));
         ok(isequalRel(argp,    4.793831542373e+00, TOL));
         ok(isequalRel(nu,      3.282377737929e+00, TOL));
         ok(isequalRel(m,       3.567458447874e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-8.233351302374e+03, 2.166124480883e+04, 2.636514561180e+03], [-2.230845532770e+00, -1.875742343807e+00, -2.275286034063e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-8.233351302374e+03, 2.166124480883e+04, 2.636514561180e+03], [-2.230845532770e+00, -1.875742343807e+00, -2.275286034063e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.035199861225e+04, TOL));
         ok(isequalRel(a,       1.554939651511e+04, TOL));
         ok(isequalRel(ecc,     5.781442547519e-01, TOL));
         ok(isequalRel(incl,    1.210211678657e-01, TOL));
         ok(isequalRel(omega,   2.175272820517e-03, TOL));
         ok(isequalRel(argp,    4.794248732256e+00, TOL));
         ok(isequalRel(nu,      3.418369059747e+00, TOL));
         ok(isequalRel(m,       3.958285119243e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.069396497348e+04, 1.890988168891e+04, 2.302337075483e+03], [-1.835912432878e+00, -2.716169864668e+00, -3.299318802762e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.069396497348e+04, 1.890988168891e+04, 2.302337075483e+03], [-1.835912432878e+00, -2.716169864668e+00, -3.299318802762e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.035103810506e+04, TOL));
         ok(isequalRel(a,       1.554911246888e+04, TOL));
         ok(isequalRel(ecc,     5.781871583535e-01, TOL));
         ok(isequalRel(incl,    1.210297102210e-01, TOL));
         ok(isequalRel(omega,   1.878198108324e-03, TOL));
         ok(isequalRel(argp,    4.794673448091e+00, TOL));
         ok(isequalRel(nu,      3.568979715947e+00, TOL));
         ok(isequalRel(m,       4.349106621248e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.255389669904e+04, 1.511463990716e+04, 1.840935732308e+03], [-1.212478879277e+00, -3.619036996387e+00, -4.399706327432e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.255389669904e+04, 1.511463990716e+04, 1.840935732308e+03], [-1.212478879277e+00, -3.619036996387e+00, -4.399706327432e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.034966838459e+04, TOL));
         ok(isequalRel(a,       1.554867535177e+04, TOL));
         ok(isequalRel(ecc,     5.782471511503e-01, TOL));
         ok(isequalRel(incl,    1.210419707570e-01, TOL));
         ok(isequalRel(omega,   1.601047321190e-03, TOL));
         ok(isequalRel(argp,    4.795108579664e+00, TOL));
         ok(isequalRel(nu,      3.746777622450e+00, TOL));
         ok(isequalRel(m,       4.739917727954e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.345020591864e+04, 1.019057904289e+04, 1.241959587359e+03], [-1.890825111155e-01, -4.596701971373e+00, -5.591738989436e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.345020591864e+04, 1.019057904289e+04, 1.241959587359e+03], [-1.890825111155e-01, -4.596701971373e+00, -5.591738989436e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.034784426025e+04, TOL));
         ok(isequalRel(a,       1.554797526519e+04, TOL));
         ok(isequalRel(ecc,     5.783226767564e-01, TOL));
         ok(isequalRel(incl,    1.210588506563e-01, TOL));
         ok(isequalRel(omega,   1.368293474843e-03, TOL));
         ok(isequalRel(argp,    4.795549749201e+00, TOL));
         ok(isequalRel(nu,      3.975937404662e+00, TOL));
         ok(isequalRel(m,       5.130710549596e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.268660437121e+04, 4.079311061609e+03, 4.982707861417e+02], [1.664498211229e+00, -5.559889864636e+00, -6.767477790003e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.268660437121e+04, 4.079311061609e+03, 4.982707861417e+02], [1.664498211229e+00, -5.559889864636e+00, -6.767477790003e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.034551566585e+04, TOL));
         ok(isequalRel(a,       1.554673059356e+04, TOL));
         ok(isequalRel(ecc,     5.784060990336e-01, TOL));
         ok(isequalRel(incl,    1.210791662855e-01, TOL));
         ok(isequalRel(omega,   1.246217544637e-03, TOL));
         ok(isequalRel(argp,    4.795966256755e+00, TOL));
         ok(isequalRel(nu,      4.314306727539e+00, TOL));
         ok(isequalRel(m,       5.521472489589e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-8.672558677528e+03, -2.827568233149e+03, -3.425964471559e+02], [5.515079851923e+00, -5.551222961583e+00, -6.763600441294e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-8.672558677528e+03, -2.827568233149e+03, -3.425964471559e+02], [5.515079851923e+00, -5.551222961583e+00, -6.763600441294e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.034274204628e+04, TOL));
         ok(isequalRel(a,       1.554404459694e+04, TOL));
         ok(isequalRel(ecc,     5.784609433935e-01, TOL));
         ok(isequalRel(incl,    1.210791581493e-01, TOL));
         ok(isequalRel(omega,   1.370032798238e-03, TOL));
         ok(isequalRel(argp,    4.796281202555e+00, TOL));
         ok(isequalRel(nu,      4.944459382375e+00, TOL));
         ok(isequalRel(m,       5.912192623481e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.153314980597e+03, -6.411986920596e+03, -7.798728894123e+02], [9.689818101748e+00, 1.388598425041e+00, 1.678687983020e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.153314980597e+03, -6.411986920596e+03, -7.798728894123e+02], [9.689818101748e+00, 1.388598425041e+00, 1.678687983020e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.034092689683e+04, TOL));
         ok(isequalRel(a,       1.554015105591e+04, TOL));
         ok(isequalRel(ecc,     5.784178049311e-01, TOL));
         ok(isequalRel(incl,    1.210146563121e-01, TOL));
         ok(isequalRel(omega,   8.461109371354e-04, TOL));
         ok(isequalRel(argp,    4.797258397489e+00, TOL));
         ok(isequalRel(nu,      9.098140980551e-02, TOL));
         ok(isequalRel(m,       1.984286548586e-02, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[9.542792010555e+03, -5.337125308064e+02, -6.573165427708e+01], [3.926947086559e+00, 6.459583538639e+00, 7.856867546234e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([9.542792010555e+03, -5.337125308064e+02, -6.573165427708e+01], [3.926947086559e+00, 6.459583538639e+00, 7.856867546234e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.034300364321e+04, TOL));
         ok(isequalRel(a,       1.554432547730e+04, TOL));
         ok(isequalRel(ecc,     5.784567893684e-01, TOL));
         ok(isequalRel(incl,    1.210861792933e-01, TOL));
         ok(isequalRel(omega,   6.792678077191e-04, TOL));
         ok(isequalRel(argp,    4.797900524634e+00, TOL));
         ok(isequalRel(nu,      1.428319169135e+00, TOL));
         ok(isequalRel(m,       4.106535910989e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.186880960100e+04, 6.861595908475e+03, 8.337278060176e+02], [4.529578524427e-01, 5.632811327979e+00, 6.852623226654e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.186880960100e+04, 6.861595908475e+03, 8.337278060176e+02], [4.529578524427e-01, 5.632811327979e+00, 6.852623226654e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.034569287579e+04, TOL));
         ok(isequalRel(a,       1.554663812387e+04, TOL));
         ok(isequalRel(ecc,     5.783928239487e-01, TOL));
         ok(isequalRel(incl,    1.210677722426e-01, TOL));
         ok(isequalRel(omega,   7.429102660920e-04, TOL));
         ok(isequalRel(argp,    4.798255346748e+00, TOL));
         ok(isequalRel(nu,      2.011549338173e+00, TOL));
         ok(isequalRel(m,       8.013862671461e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.137623941678e+04, 1.285897121366e+04, 1.563406601721e+03], [-1.087665694862e+00, 4.374693346994e+00, 5.322070510628e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.137623941678e+04, 1.285897121366e+04, 1.563406601721e+03], [-1.087665694862e+00, 4.374693346994e+00, 5.322070510628e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.034792975112e+04, TOL));
         ok(isequalRel(a,       1.554770283835e+04, TOL));
         ok(isequalRel(ecc,     5.783078403339e-01, TOL));
         ok(isequalRel(incl,    1.210447884594e-01, TOL));
         ok(isequalRel(omega,   5.429660028207e-04, TOL));
         ok(isequalRel(argp,    4.798738104751e+00, TOL));
         ok(isequalRel(nu,      2.334050515830e+00, TOL));
         ok(isequalRel(m,       1.192161926553e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[9.547703007819e+03, 1.742148570758e+04, 2.118569075147e+03], [-1.876540262417e+00, 3.253891727584e+00, 3.958102433992e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([9.547703007819e+03, 1.742148570758e+04, 2.118569075147e+03], [-1.876540262417e+00, 3.253891727584e+00, 3.958102433992e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.034967368073e+04, TOL));
         ok(isequalRel(a,       1.554826694832e+04, TOL));
         ok(isequalRel(ecc,     5.782317383207e-01, TOL));
         ok(isequalRel(incl,    1.210295111991e-01, TOL));
         ok(isequalRel(omega,   2.589553399292e-04, TOL));
         ok(isequalRel(argp,    4.799224631751e+00, TOL));
         ok(isequalRel(nu,      2.556248718242e+00, TOL));
         ok(isequalRel(m,       1.582970266417e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[7.008514702633e+03, 2.072547471227e+04, 2.520560642888e+03], [-2.308703598891e+00, 2.270724438391e+00, 2.761386128135e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([7.008514702633e+03, 2.072547471227e+04, 2.520560642888e+03], [-2.308703598891e+00, 2.270724438391e+00, 2.761386128135e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.035097228680e+04, TOL));
         ok(isequalRel(a,       1.554858081519e+04, TOL));
         ok(isequalRel(ecc,     5.781711345647e-01, TOL));
         ok(isequalRel(incl,    1.210201547307e-01, TOL));
         ok(isequalRel(omega,   6.283134393412e+00, TOL));
         ok(isequalRel(argp,    4.799689327100e+00, TOL));
         ok(isequalRel(nu,      2.730476349827e+00, TOL));
         ok(isequalRel(m,       1.973800144940e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[4.082281351036e+03, 2.291104184601e+04, 2.786375683090e+03], [-2.536665546306e+00, 1.383670231785e+00, 1.681534071318e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([4.082281351036e+03, 2.291104184601e+04, 2.786375683090e+03], [-2.536665546306e+00, 1.383670231785e+00, 1.681534071318e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.035186765295e+04, TOL));
         ok(isequalRel(a,       1.554874619546e+04, TOL));
         ok(isequalRel(ecc,     5.781274575091e-01, TOL));
         ok(isequalRel(incl,    1.210149622132e-01, TOL));
         ok(isequalRel(omega,   6.282817092546e+00, TOL));
         ok(isequalRel(argp,    4.800132557485e+00, TOL));
         ok(isequalRel(nu,      2.879148887278e+00, TOL));
         ok(isequalRel(m,       2.364644291315e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[9.691797814899e+02, 2.407123673676e+04, 2.927313265790e+03], [-2.626695114733e+00, 5.571724275943e-01, 6.753685382056e-02], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([9.691797814899e+02, 2.407123673676e+04, 2.927313265790e+03], [-2.626695114733e+00, 5.571724275943e-01, 6.753685382056e-02], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.035238797542e+04, TOL));
         ok(isequalRel(a,       1.554880952767e+04, TOL));
         ok(isequalRel(ecc,     5.781008606368e-01, TOL));
         ok(isequalRel(incl,    1.210129002445e-01, TOL));
         ok(isequalRel(omega,   6.282498923503e+00, TOL));
         ok(isequalRel(argp,    4.800559919123e+00, TOL));
         ok(isequalRel(nu,      3.014155823370e+00, TOL));
         ok(isequalRel(m,       2.755497745077e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.184715154439e+03, 2.426121671601e+04, 2.950081428247e+03], [-2.607072865954e+00, -2.368876072256e-01, -2.912521458880e-02], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.184715154439e+03, 2.426121671601e+04, 2.950081428247e+03], [-2.607072865954e+00, -2.368876072256e-01, -2.912521458880e-02], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.035254893951e+04, TOL));
         ok(isequalRel(a,       1.554879185017e+04, TOL));
         ok(isequalRel(ecc,     5.780912522479e-01, TOL));
         ok(isequalRel(incl,    1.210134415662e-01, TOL));
         ok(isequalRel(omega,   6.282182637545e+00, TOL));
         ok(isequalRel(argp,    4.800977654804e+00, TOL));
         ok(isequalRel(nu,      3.143153611159e+00, TOL));
         ok(isequalRel(m,       3.146356738774e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-5.253422233696e+03, 2.350537595671e+04, 2.857661207376e+03], [-2.484424544113e+00, -1.022255435921e+00, -1.247144435756e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-5.253422233696e+03, 2.350537595671e+04, 2.857661207376e+03], [-2.484424544113e+00, -1.022255435921e+00, -1.247144435756e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.035235530419e+04, TOL));
         ok(isequalRel(a,       1.554869938018e+04, TOL));
         ok(isequalRel(ecc,     5.780985986352e-01, TOL));
         ok(isequalRel(incl,    1.210164064628e-01, TOL));
         ok(isequalRel(omega,   6.281869973921e+00, TOL));
         ok(isequalRel(argp,    4.801391732478e+00, TOL));
         ok(isequalRel(nu,      3.272224256700e+00, TOL));
         ok(isequalRel(m,       3.537218006355e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-8.108279610168e+03, 2.180081688388e+04, 2.649729819609e+03], [-2.247597250991e+00, -1.821159176294e+00, -2.219256237509e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-8.108279610168e+03, 2.180081688388e+04, 2.649729819609e+03], [-2.247597250991e+00, -1.821159176294e+00, -2.219256237509e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.035180142813e+04, TOL));
         ok(isequalRel(a,       1.554852622481e+04, TOL));
         ok(isequalRel(ecc,     5.781229951224e-01, TOL));
         ok(isequalRel(incl,    1.210218975530e-01, TOL));
         ok(isequalRel(omega,   6.281563106967e+00, TOL));
         ok(isequalRel(argp,    4.801807710953e+00, TOL));
         ok(isequalRel(nu,      3.407467729449e+00, TOL));
         ok(isequalRel(m,       3.928078269318e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.059477795556e+04, 1.911780779221e+04, 2.322721369788e+03], [-1.863118483942e+00, -2.656426668062e+00, -3.235215022694e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.059477795556e+04, 1.911780779221e+04, 2.322721369788e+03], [-1.863118483942e+00, -2.656426668062e+00, -3.235215022694e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.035087059861e+04, TOL));
         ok(isequalRel(a,       1.554825166393e+04, TOL));
         ok(isequalRel(ecc,     5.781646028457e-01, TOL));
         ok(isequalRel(incl,    1.210303017317e-01, TOL));
         ok(isequalRel(omega,   6.281266208018e+00, TOL));
         ok(isequalRel(argp,    4.802230506500e+00, TOL));
         ok(isequalRel(nu,      3.556605575105e+00, TOL));
         ok(isequalRel(m,       4.318933711585e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.249732045995e+04, 1.539864085906e+04, 1.869699838970e+03], [-1.258130762801e+00, -3.551583367757e+00, -4.323388881599e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.249732045995e+04, 1.539864085906e+04, 1.869699838970e+03], [-1.258130762801e+00, -3.551583367757e+00, -4.323388881599e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.034953323986e+04, TOL));
         ok(isequalRel(a,       1.554782939875e+04, TOL));
         ok(isequalRel(ecc,     5.782233506636e-01, TOL));
         ok(isequalRel(incl,    1.210423214032e-01, TOL));
         ok(isequalRel(omega,   6.280988595202e+00, TOL));
         ok(isequalRel(argp,    4.802663185551e+00, TOL));
         ok(isequalRel(nu,      3.731687084934e+00, TOL));
         ok(isequalRel(m,       4.709779240440e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.346792475245e+04, 1.056090147785e+04, 1.280783991807e+03], [-2.718705231553e-01, -4.520514224198e+00, -5.500160921192e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.346792475245e+04, 1.056090147785e+04, 1.280783991807e+03], [-2.718705231553e-01, -4.520514224198e+00, -5.500160921192e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.034774516117e+04, TOL));
         ok(isequalRel(a,       1.554715649864e+04, TOL));
         ok(isequalRel(ecc,     5.782978841206e-01, TOL));
         ok(isequalRel(incl,    1.210588294826e-01, TOL));
         ok(isequalRel(omega,   6.280753125876e+00, TOL));
         ok(isequalRel(argp,    4.803102226720e+00, TOL));
         ok(isequalRel(nu,      3.955539621498e+00, TOL));
         ok(isequalRel(m,       5.100607219443e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.284818843590e+04, 4.541219018423e+03, 5.485382642655e+02], [1.494157156479e+00, -5.489585383675e+00, -6.674720394473e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.284818843590e+04, 4.541219018423e+03, 5.485382642655e+02], [1.494157156479e+00, -5.489585383675e+00, -6.674720394473e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.034545520456e+04, TOL));
         ok(isequalRel(a,       1.554597265632e+04, TOL));
         ok(isequalRel(ecc,     5.783814148451e-01, TOL));
         ok(isequalRel(incl,    1.210789436601e-01, TOL));
         ok(isequalRel(omega,   6.280621032454e+00, TOL));
         ok(isequalRel(argp,    4.803520403052e+00, TOL));
         ok(isequalRel(nu,      4.281774322930e+00, TOL));
         ok(isequalRel(m,       5.491405423111e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-9.152705527280e+03, -2.344249501437e+03, -2.879812196960e+02], [5.127921094864e+00, -5.650383024709e+00, -6.859890076156e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-9.152705527280e+03, -2.344249501437e+03, -2.879812196960e+02], [5.127921094864e+00, -5.650383024709e+00, -6.859890076156e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.034270078988e+04, TOL));
         ok(isequalRel(a,       1.554345934249e+04, TOL));
         ok(isequalRel(ecc,     5.784415819901e-01, TOL));
         ok(isequalRel(incl,    1.210825010379e-01, TOL));
         ok(isequalRel(omega,   6.280725760698e+00, TOL));
         ok(isequalRel(argp,    4.803841944010e+00, TOL));
         ok(isequalRel(nu,      4.875919714831e+00, TOL));
         ok(isequalRel(m,       5.882161169868e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.803849090860e+02, -6.500102640176e+03, -7.903609298377e+02], [9.779619613582e+00, 5.818158109181e-01, 7.417134496049e-02], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.803849090860e+02, -6.500102640176e+03, -7.903609298377e+02], [9.779619613582e+00, 5.818158109181e-01, 7.417134496049e-02], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.034065950353e+04, TOL));
         ok(isequalRel(a,       1.553923620234e+04, TOL));
         ok(isequalRel(ecc,     5.783988140863e-01, TOL));
         ok(isequalRel(incl,    1.210134509907e-01, TOL));
         ok(isequalRel(omega,   6.280310964008e+00, TOL));
         ok(isequalRel(argp,    4.804723873710e+00, TOL));
         ok(isequalRel(nu,      6.236497677359e+00, TOL));
         ok(isequalRel(m,       6.273009664811e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[9.166257843150e+03, -1.093125526507e+03, -1.294942888733e+02], [4.316668714234e+00, 6.438636494018e+00, 7.851166087728e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([9.166257843150e+03, -1.093125526507e+03, -1.294942888733e+02], [4.316668714234e+00, 6.438636494018e+00, 7.851166087728e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.034253017839e+04, TOL));
         ok(isequalRel(a,       1.554316017320e+04, TOL));
         ok(isequalRel(ecc,     5.784399994085e-01, TOL));
         ok(isequalRel(incl,    1.210863286399e-01, TOL));
         ok(isequalRel(omega,   6.280030892202e+00, TOL));
         ok(isequalRel(argp,    4.805466180590e+00, TOL));
         ok(isequalRel(nu,      1.361334154581e+00, TOL));
         ok(isequalRel(m,       3.806880266413e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.179448942915e+04, 6.382211383537e+03, 7.808843901486e+02], [6.044124532698e-01, 5.731729369262e+00, 6.975743326882e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.179448942915e+04, 6.382211383537e+03, 7.808843901486e+02], [6.044124532698e-01, 5.731729369262e+00, 6.975743326882e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.034523880575e+04, TOL));
         ok(isequalRel(a,       1.554563169891e+04, TOL));
         ok(isequalRel(ecc,     5.783808309591e-01, TOL));
         ok(isequalRel(incl,    1.210702318898e-01, TOL));
         ok(isequalRel(omega,   6.280122848571e+00, TOL));
         ok(isequalRel(argp,    4.805805141676e+00, TOL));
         ok(isequalRel(nu,      1.979534666510e+00, TOL));
         ok(isequalRel(m,       7.714515489745e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.142430138324e+04, 1.249426088864e+04, 1.524331654876e+03], [-1.021328075142e+00, 4.463448967588e+00, 5.425326979668e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.142430138324e+04, 1.249426088864e+04, 1.524331654876e+03], [-1.021328075142e+00, 4.463448967588e+00, 5.425326979668e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.034751395065e+04, TOL));
         ok(isequalRel(a,       1.554675520265e+04, TOL));
         ok(isequalRel(ecc,     5.782958886741e-01, TOL));
         ok(isequalRel(incl,    1.210466223817e-01, TOL));
         ok(isequalRel(omega,   6.279931700566e+00, TOL));
         ok(isequalRel(argp,    4.806287301723e+00, TOL));
         ok(isequalRel(nu,      2.313907266475e+00, TOL));
         ok(isequalRel(m,       1.162257387001e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[9.652098673500e+03, 1.715384762075e+04, 2.090480383360e+03], [-1.844516637081e+00, 3.327522235010e+00, 4.039152320430e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([9.652098673500e+03, 1.715384762075e+04, 2.090480383360e+03], [-1.844516637081e+00, 3.327522235010e+00, 4.039152320430e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.034929374632e+04, TOL));
         ok(isequalRel(a,       1.554734621893e+04, TOL));
         ok(isequalRel(ecc,     5.782187822181e-01, TOL));
         ok(isequalRel(incl,    1.210308797537e-01, TOL));
         ok(isequalRel(omega,   6.279649385493e+00, TOL));
         ok(isequalRel(argp,    4.806776957363e+00, TOL));
         ok(isequalRel(nu,      2.541333908517e+00, TOL));
         ok(isequalRel(m,       1.553096911448e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[7.140419458837e+03, 2.053925485336e+04, 2.501214693678e+03], [-2.293173683869e+00, 2.333507911861e+00, 2.827163107973e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([7.140419458837e+03, 2.053925485336e+04, 2.501214693678e+03], [-2.293173683869e+00, 2.333507911861e+00, 2.827163107973e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.035062457967e+04, TOL));
         ok(isequalRel(a,       1.554767488099e+04, TOL));
         ok(isequalRel(ecc,     5.781569290539e-01, TOL));
         ok(isequalRel(incl,    1.210212742714e-01, TOL));
         ok(isequalRel(omega,   6.279339536355e+00, TOL));
         ok(isequalRel(argp,    4.807244569754e+00, TOL));
         ok(isequalRel(nu,      2.718253536163e+00, TOL));
         ok(isequalRel(m,       1.943958687704e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
         // 24208
     });

test('[-1.428919940414e+04, 3.946905530051e+04, 1.428628385914e+03], [-2.893205245166e+00, -1.045447840405e+00, 1.796342494877e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.428919940414e+04, 3.946905530051e+04, 1.428628385914e+03], [-2.893205245166e+00, -1.045447840405e+00, 1.796342494877e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.202420440026e+04, TOL));
         ok(isequalRel(a,       4.202450047533e+04, TOL));
         ok(isequalRel(ecc,     2.654297752769e-03, TOL));
         ok(isequalRel(incl,    6.746713547547e-02, TOL));
         ok(isequalRel(omega,   1.390284310378e+00, TOL));
         ok(isequalRel(argp,    5.456988606053e+00, TOL));
         ok(isequalRel(nu,      1.355056725607e+00, TOL));
         ok(isequalRel(m,       1.349873406990e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-3.222292014955e+04, 2.691625425799e+04, 2.468599965935e+03], [-1.973007929055e+00, -2.359335070868e+00, 1.025393763757e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-3.222292014955e+04, 2.691625425799e+04, 2.468599965935e+03], [-1.973007929055e+00, -2.359335070868e+00, 1.025393763757e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.202420630509e+04, TOL));
         ok(isequalRel(a,       4.202449796321e+04, TOL));
         ok(isequalRel(ecc,     2.634424546089e-03, TOL));
         ok(isequalRel(incl,    6.747226240716e-02, TOL));
         ok(isequalRel(omega,   1.390302396353e+00, TOL));
         ok(isequalRel(argp,    5.456563647548e+00, TOL));
         ok(isequalRel(nu,      1.882982264873e+00, TOL));
         ok(isequalRel(m,       1.877965049220e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-4.141395109398e+04, 7.055516566392e+03, 2.838909066712e+03], [-5.216650801119e-01, -3.029172206738e+00, -2.066843360971e-03], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-4.141395109398e+04, 7.055516566392e+03, 2.838909066712e+03], [-5.216650801119e-01, -3.029172206738e+00, -2.066843360971e-03], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.202421115887e+04, TOL));
         ok(isequalRel(a,       4.202449916263e+04, TOL));
         ok(isequalRel(ecc,     2.617868391905e-03, TOL));
         ok(isequalRel(incl,    6.747797881521e-02, TOL));
         ok(isequalRel(omega,   1.390305412787e+00, TOL));
         ok(isequalRel(argp,    5.452449049868e+00, TOL));
         ok(isequalRel(nu,      2.413251211721e+00, TOL));
         ok(isequalRel(m,       2.409761022177e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-3.940272251896e+04, -1.471642475223e+04, 2.441326783576e+03], [1.066928187054e+00, -2.878714619433e+00, -1.058657290372e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-3.940272251896e+04, -1.471642475223e+04, 2.441326783576e+03], [1.066928187054e+00, -2.878714619433e+00, -1.058657290372e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.202422146590e+04, TOL));
         ok(isequalRel(a,       4.202450750642e+04, TOL));
         ok(isequalRel(ecc,     2.608930185835e-03, TOL));
         ok(isequalRel(incl,    6.748489215469e-02, TOL));
         ok(isequalRel(omega,   1.390309924453e+00, TOL));
         ok(isequalRel(argp,    5.445713492476e+00, TOL));
         ok(isequalRel(nu,      2.945196393376e+00, TOL));
         ok(isequalRel(m,       2.944176242933e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.675108889828e+04, -3.251513982431e+04, 1.384388655702e+03], [2.366228869377e+00, -1.951032799314e+00, -1.810184978888e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.675108889828e+04, -3.251513982431e+04, 1.384388655702e+03], [2.366228869377e+00, -1.951032799314e+00, -1.810184978888e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.202423294443e+04, TOL));
         ok(isequalRel(a,       4.202451924152e+04, TOL));
         ok(isequalRel(ecc,     2.610099643301e-03, TOL));
         ok(isequalRel(incl,    6.749233650727e-02, TOL));
         ok(isequalRel(omega,   1.390331915677e+00, TOL));
         ok(isequalRel(argp,    5.438115278041e+00, TOL));
         ok(isequalRel(nu,      3.477711644804e+00, TOL));
         ok(isequalRel(m,       3.479436587838e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-6.874779755423e+03, -4.153038329422e+04, -4.660245459036e+01], [3.027415086970e+00, -4.946711768357e-01, -2.073372596409e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-6.874779755423e+03, -4.153038329422e+04, -4.660245459036e+01], [3.027415086970e+00, -4.946711768357e-01, -2.073372596409e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.202423846920e+04, TOL));
         ok(isequalRel(a,       4.202452722440e+04, TOL));
         ok(isequalRel(ecc,     2.621280442174e-03, TOL));
         ok(isequalRel(incl,    6.749904350686e-02, TOL));
         ok(isequalRel(omega,   1.390370821119e+00, TOL));
         ok(isequalRel(argp,    5.431788424788e+00, TOL));
         ok(isequalRel(nu,      4.009403899752e+00, TOL));
         ok(isequalRel(m,       4.013408618543e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.485952039042e+04, -3.930258907247e+04, -1.465024825241e+03], [2.869609883140e+00, 1.100123968605e+00, -1.775144249145e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.485952039042e+04, -3.930258907247e+04, -1.465024825241e+03], [2.869609883140e+00, 1.100123968605e+00, -1.775144249145e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.202423525237e+04, TOL));
         ok(isequalRel(a,       4.202452799757e+04, TOL));
         ok(isequalRel(ecc,     2.639328633586e-03, TOL));
         ok(isequalRel(incl,    6.750440715797e-02, TOL));
         ok(isequalRel(omega,   1.390410024452e+00, TOL));
         ok(isequalRel(argp,    5.428575925100e+00, TOL));
         ok(isequalRel(nu,      4.539064512266e+00, TOL));
         ok(isequalRel(m,       4.544265848486e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[3.255314863770e+04, -2.639888401807e+04, -2.485458660025e+03], [1.930064459104e+00, 2.401574539278e+00, -9.925051981728e-02], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([3.255314863770e+04, -2.639888401807e+04, -2.485458660025e+03], [1.930064459104e+00, 2.401574539278e+00, -9.925051981728e-02], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.202422817146e+04, TOL));
         ok(isequalRel(a,       4.202452530253e+04, TOL));
         ok(isequalRel(ecc,     2.659026281401e-03, TOL));
         ok(isequalRel(incl,    6.750909820897e-02, TOL));
         ok(isequalRel(omega,   1.390433373509e+00, TOL));
         ok(isequalRel(argp,    5.429302620204e+00, TOL));
         ok(isequalRel(nu,      5.066214260860e+00, TOL));
         ok(isequalRel(m,       5.071199432057e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[4.136567576837e+04, -6.298099658107e+03, -2.828052540329e+03], [4.597412761382e-01, 3.051680213909e+00, 6.431871844820e-03], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([4.136567576837e+04, -6.298099658107e+03, -2.828052540329e+03], [4.597412761382e-01, 3.051680213909e+00, 6.431871844820e-03], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.202422570363e+04, TOL));
         ok(isequalRel(a,       4.202452642600e+04, TOL));
         ok(isequalRel(ecc,     2.675047219934e-03, TOL));
         ok(isequalRel(incl,    6.751440133332e-02, TOL));
         ok(isequalRel(omega,   1.390441532965e+00, TOL));
         ok(isequalRel(argp,    5.433608785465e+00, TOL));
         ok(isequalRel(nu,      5.591159816614e+00, TOL));
         ok(isequalRel(m,       5.594568433296e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[3.885883295070e+04, 1.552339314924e+04, -2.396868507516e+03], [-1.140211487947e+00, 2.867567143101e+00, 1.106372170646e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([3.885883295070e+04, 1.552339314924e+04, -2.396868507516e+03], [-1.140211487947e+00, 2.867567143101e+00, 1.106372170646e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.202423218532e+04, TOL));
         ok(isequalRel(a,       4.202453477188e+04, TOL));
         ok(isequalRel(ecc,     2.683325530177e-03, TOL));
         ok(isequalRel(incl,    6.752090858804e-02, TOL));
         ok(isequalRel(omega,   1.390451535741e+00, TOL));
         ok(isequalRel(argp,    5.440296821726e+00, TOL));
         ok(isequalRel(nu,      6.114655177180e+00, TOL));
         ok(isequalRel(m,       6.115553561464e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.570146068162e+04, 3.308942617648e+04, -1.308685566378e+03], [-2.428713821271e+00, 1.897381431097e+00, 1.846059074448e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.570146068162e+04, 3.308942617648e+04, -1.308685566378e+03], [-2.428713821271e+00, 1.897381431097e+00, 1.846059074448e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.202424402721e+04, TOL));
         ok(isequalRel(a,       4.202454622604e+04, TOL));
         ok(isequalRel(ecc,     2.681605396723e-03, TOL));
         ok(isequalRel(incl,    6.752789848888e-02, TOL));
         ok(isequalRel(omega,   1.390479411940e+00, TOL));
         ok(isequalRel(argp,    5.447658255289e+00, TOL));
         ok(isequalRel(nu,      3.545203619987e-01, TOL));
         ok(isequalRel(m,       3.526620797908e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[5.501081370996e+03, 4.159027784405e+04, 1.383252292972e+02], [-3.050691874469e+00, 4.092030519613e-01, 2.079581327855e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([5.501081370996e+03, 4.159027784405e+04, 1.383252292972e+02], [-3.050691874469e+00, 4.092030519613e-01, 2.079581327855e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.202425373723e+04, TOL));
         ok(isequalRel(a,       4.202455334581e+04, TOL));
         ok(isequalRel(ecc,     2.670087967001e-03, TOL));
         ok(isequalRel(incl,    6.753406990777e-02, TOL));
         ok(isequalRel(omega,   1.390523588988e+00, TOL));
         ok(isequalRel(argp,    5.453727122849e+00, TOL));
         ok(isequalRel(nu,      8.783370687673e-01, TOL));
         ok(isequalRel(m,       8.742321032115e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
         // 25954
     });

test('[8.118185192210e+03, -4.136840537378e+04, 4.110466873304e+00], [3.017696740517e+00, 5.919942965821e-01, 9.330158220802e-04], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([8.118185192210e+03, -4.136840537378e+04, 4.110466873304e+00], [3.017696740517e+00, 5.919942965821e-01, 9.330158220802e-04], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.216595065256e+04, TOL));
         ok(isequalRel(a,       4.216595254584e+04, TOL));
         ok(isequalRel(ecc,     2.118980881091e-04, TOL));
         ok(isequalRel(incl,    3.186747891837e-04, TOL));
         ok(isequalRel(omega,   4.595217728673e+00, TOL));
         ok(isequalRel(argp,    1.478783746842e-03, TOL));
         ok(isequalRel(nu,      3.094712057265e-01, TOL));
         ok(isequalRel(m,       3.093421560150e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.776634015328e+04, -3.172497000557e+04, 9.932978462844e+00], [2.314236153117e+00, 2.024903192670e+00, 6.608611838850e-04], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.776634015328e+04, -3.172497000557e+04, 9.932978462844e+00], [2.314236153117e+00, 2.024903192670e+00, 6.608611838850e-04], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.216595194550e+04, TOL));
         ok(isequalRel(a,       4.216595366410e+04, TOL));
         ok(isequalRel(ecc,     2.018857414327e-04, TOL));
         ok(isequalRel(incl,    3.188756402472e-04, TOL));
         ok(isequalRel(omega,   4.599971556554e+00, TOL));
         ok(isequalRel(argp,    7.908485939916e-02, TOL));
         ok(isequalRel(nu,      7.522873900398e-01, TOL));
         ok(isequalRel(m,       7.520115191915e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[3.993257237973e+04, -1.353260040454e+04, 1.312958252292e+01], [9.873828187443e-01, 2.911942843401e+00, 2.132980788857e-04], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([3.993257237973e+04, -1.353260040454e+04, 1.312958252292e+01], [9.873828187443e-01, 2.911942843401e+00, 2.132980788857e-04], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.216595333073e+04, TOL));
         ok(isequalRel(a,       4.216595478010e+04, TOL));
         ok(isequalRel(ecc,     1.853991043408e-04, TOL));
         ok(isequalRel(incl,    3.190199458752e-04, TOL));
         ok(isequalRel(omega,   4.604673191224e+00, TOL));
         ok(isequalRel(argp,    1.306491048397e-01, TOL));
         ok(isequalRel(nu,      1.221123179806e+00, TOL));
         ok(isequalRel(m,       1.220774837144e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[4.134101365441e+04, 8.305716819548e+03, 1.284988501152e+01], [-6.050982241921e-01, 3.014378268382e+00, -2.910335896563e-04], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([4.134101365441e+04, 8.305716819548e+03, 1.284988501152e+01], [-6.050982241921e-01, 3.014378268382e+00, -2.910335896563e-04], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.216595473756e+04, TOL));
         ok(isequalRel(a,       4.216595589569e+04, TOL));
         ok(isequalRel(ecc,     1.657288742284e-04, TOL));
         ok(isequalRel(incl,    3.191155603197e-04, TOL));
         ok(isequalRel(omega,   4.609328696499e+00, TOL));
         ok(isequalRel(argp,    1.363854505808e-01, TOL));
         ok(isequalRel(nu,      1.735739082203e+00, TOL));
         ok(isequalRel(m,       1.735412116409e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[3.161499210558e+04, 2.790729155353e+04, 9.166187966821e+00], [-2.034243523452e+00, 2.305014101656e+00, -7.184181760693e-04], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([3.161499210558e+04, 2.790729155353e+04, 9.166187966821e+00], [-2.034243523452e+00, 2.305014101656e+00, -7.184181760693e-04], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.216595608938e+04, TOL));
         ok(isequalRel(a,       4.216595701271e+04, TOL));
         ok(isequalRel(ecc,     1.479780786326e-04, TOL));
         ok(isequalRel(incl,    3.191652005961e-04, TOL));
         ok(isequalRel(omega,   4.613951651914e+00, TOL));
         ok(isequalRel(argp,    7.642855388953e-02, TOL));
         ok(isequalRel(nu,      2.315992652649e+00, TOL));
         ok(isequalRel(m,       2.315775121884e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.337575227587e+04, 3.999427017651e+04, 3.054168543211e+00], [-2.915424365576e+00, 9.751198736627e-01, -9.555764871800e-04], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.337575227587e+04, 3.999427017651e+04, 3.054168543211e+00], [-2.915424365576e+00, 9.751198736627e-01, -9.555764871800e-04], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.216595732435e+04, TOL));
         ok(isequalRel(a,       4.216595813250e+04, TOL));
         ok(isequalRel(ecc,     1.384411464309e-04, TOL));
         ok(isequalRel(incl,    3.191669120241e-04, TOL));
         ok(isequalRel(omega,   4.618545155951e+00, TOL));
         ok(isequalRel(argp,    6.234112459455e+00, TOL));
         ok(isequalRel(nu,      2.961761549236e+00, TOL));
         ok(isequalRel(m,       2.961712020067e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-8.464899633091e+03, 4.131293549892e+04, -3.866229191080e+00], [-3.011600615036e+00, -6.172750497400e-01, -9.396644554174e-04], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-8.464899633091e+03, 4.131293549892e+04, -3.866229191080e+00], [-3.011600615036e+00, -6.172750497400e-01, -9.396644554174e-04], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.216595841209e+04, TOL));
         ok(isequalRel(a,       4.216595925566e+04, TOL));
         ok(isequalRel(ecc,     1.414428690715e-04, TOL));
         ok(isequalRel(incl,    3.191192641083e-04, TOL));
         ok(isequalRel(omega,   4.623094016696e+00, TOL));
         ok(isequalRel(argp,    6.089964924067e+00, TOL));
         ok(isequalRel(nu,      3.626207835025e+00, TOL));
         ok(isequalRel(m,       3.626339634777e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.802623406158e+04, 3.150789995661e+04, -9.760478685420e+00], [-2.296840159731e+00, -2.043607595250e+00, -6.748885938978e-04], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.802623406158e+04, 3.150789995661e+04, -9.760478685420e+00], [-2.296840159731e+00, -2.043607595250e+00, -6.748885938978e-04], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.216595936194e+04, TOL));
         ok(isequalRel(a,       4.216596038199e+04, TOL));
         ok(isequalRel(ecc,     1.555355900366e-04, TOL));
         ok(isequalRel(incl,    3.190261257866e-04, TOL));
         ok(isequalRel(omega,   4.627574826084e+00, TOL));
         ok(isequalRel(argp,    5.992190534485e+00, TOL));
         ok(isequalRel(nu,      4.244384461393e+00, TOL));
         ok(isequalRel(m,       4.244662097773e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-4.004001314363e+04, 1.321800579413e+04, -1.306594831815e+01], [-9.633287718859e-01, -2.919827982597e+00, -2.314137180301e-04], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-4.004001314363e+04, 1.321800579413e+04, -1.306594831815e+01], [-9.633287718859e-01, -2.919827982597e+00, -2.314137180301e-04], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.216596022044e+04, TOL));
         ok(isequalRel(a,       4.216596151049e+04, TOL));
         ok(isequalRel(ecc,     1.749131783852e-04, TOL));
         ok(isequalRel(incl,    3.188963047430e-04, TOL));
         ok(isequalRel(omega,   4.631973972808e+00, TOL));
         ok(isequalRel(argp,    5.964750167514e+00, TOL));
         ok(isequalRel(nu,      4.792383442720e+00, TOL));
         ok(isequalRel(m,       4.792732146727e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-4.126843291976e+04, -8.632068596927e+03, -1.290661266416e+01], [6.300423153131e-01, -3.009677375944e+00, 2.731633096663e-04], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-4.126843291976e+04, -8.632068596927e+03, -1.290661266416e+01], [6.300423153131e-01, -3.009677375944e+00, 2.731633096663e-04], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.216596105874e+04, TOL));
         ok(isequalRel(a,       4.216596263959e+04, TOL));
         ok(isequalRel(ecc,     1.936266716627e-04, TOL));
         ok(isequalRel(incl,    3.187383914215e-04, TOL));
         ok(isequalRel(omega,   4.636295811717e+00, TOL));
         ok(isequalRel(argp,    5.994697629207e+00, TOL));
         ok(isequalRel(nu,      5.283165782504e+00, TOL));
         ok(isequalRel(m,       5.283491623474e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-3.137785317015e+04, -2.815613970334e+04, -9.326055295520e+00], [2.054021716822e+00, -2.288554158402e+00, 7.049590249212e-04], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-3.137785317015e+04, -2.815613970334e+04, -9.326055295520e+00], [2.054021716822e+00, -2.288554158402e+00, 7.049590249212e-04], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.216596195333e+04, TOL));
         ok(isequalRel(a,       4.216596376743e+04, TOL));
         ok(isequalRel(ecc,     2.074197220398e-04, TOL));
         ok(isequalRel(incl,    3.185559059128e-04, TOL));
         ok(isequalRel(omega,   4.640552886385e+00, TOL));
         ok(isequalRel(argp,    6.060983526007e+00, TOL));
         ok(isequalRel(nu,      5.737762198434e+00, TOL));
         ok(isequalRel(m,       5.737977380162e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.303141552688e+04, -4.009233381029e+04, -3.276366600268e+00], [2.924657466185e+00, -9.505411665183e-01, 9.493811931623e-04], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.303141552688e+04, -4.009233381029e+04, -3.276366600268e+00], [2.924657466185e+00, -9.505411665183e-01, 9.493811931623e-04], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.216596296547e+04, TOL));
         ok(isequalRel(a,       4.216596489238e+04, TOL));
         ok(isequalRel(ecc,     2.137717161693e-04, TOL));
         ok(isequalRel(incl,    3.183475438530e-04, TOL));
         ok(isequalRel(omega,   4.644747829877e+00, TOL));
         ok(isequalRel(argp,    6.145630476664e+00, TOL));
         ok(isequalRel(nu,      6.174117635266e+00, TOL));
         ok(isequalRel(m,       6.174164166620e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[8.827156604721e+03, -4.122300971237e+04, 3.634829628582e+00], [3.007087318519e+00, 6.437013231315e-01, 9.416630000093e-04], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([8.827156604721e+03, -4.122300971237e+04, 3.634829628582e+00], [3.007087318519e+00, 6.437013231315e-01, 9.416630000093e-04], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.216596412474e+04, TOL));
         ok(isequalRel(a,       4.216596601360e+04, TOL));
         ok(isequalRel(ecc,     2.116506173217e-04, TOL));
         ok(isequalRel(incl,    3.181122904490e-04, TOL));
         ok(isequalRel(omega,   4.648864867965e+00, TOL));
         ok(isequalRel(argp,    6.233869595160e+00, TOL));
         ok(isequalRel(nu,      3.237859936919e-01, TOL));
         ok(isequalRel(m,       3.236513372416e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.830685426674e+04, -3.124380147394e+04, 9.572168911755e+00], [2.279137743095e+00, 2.064316875309e+00, 6.841271481732e-04], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.830685426674e+04, -3.124380147394e+04, 9.572168911755e+00], [2.279137743095e+00, 2.064316875309e+00, 6.841271481732e-04], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.216596542112e+04, TOL));
         ok(isequalRel(a,       4.216596713133e+04, TOL));
         ok(isequalRel(ecc,     2.013927155994e-04, TOL));
         ok(isequalRel(incl,    3.178543256615e-04, TOL));
         ok(isequalRel(omega,   4.652879397164e+00, TOL));
         ok(isequalRel(argp,    2.845542048775e-02, TOL));
         ok(isequalRel(nu,      7.671738094483e-01, TOL));
         ok(isequalRel(m,       7.668942650642e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[4.015905128805e+04, -1.284539151157e+04, 1.296086315922e+01], [9.372654224940e-01, 2.928448287383e+00, 2.455046084950e-04], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([4.015905128805e+04, -1.284539151157e+04, 1.296086315922e+01], [9.372654224940e-01, 2.928448287383e+00, 2.455046084950e-04], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.216596680774e+04, TOL));
         ok(isequalRel(a,       4.216596824685e+04, TOL));
         ok(isequalRel(ecc,     1.847419205128e-04, TOL));
         ok(isequalRel(incl,    3.175828478037e-04, TOL));
         ok(isequalRel(omega,   4.656776172752e+00, TOL));
         ok(isequalRel(argp,    7.965862466730e-02, TOL));
         ok(isequalRel(nu,      1.237171927001e+00, TOL));
         ok(isequalRel(m,       1.236822831723e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[4.119255903455e+04, 9.013796067591e+03, 1.290495665506e+01], [-6.567274424695e-01, 3.003543457926e+00, -2.574794670483e-04], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([4.119255903455e+04, 9.013796067591e+03, 1.290495665506e+01], [-6.567274424695e-01, 3.003543457926e+00, -2.574794670483e-04], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.216596821340e+04, TOL));
         ok(isequalRel(a,       4.216596936201e+04, TOL));
         ok(isequalRel(ecc,     1.650458110166e-04, TOL));
         ok(isequalRel(incl,    3.173069792745e-04, TOL));
         ok(isequalRel(omega,   4.660558059844e+00, TOL));
         ok(isequalRel(argp,    8.439006661432e-02, TOL));
         ok(isequalRel(nu,      1.753662603595e+00, TOL));
         ok(isequalRel(m,       1.753338008449e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[3.113169755798e+04, 2.844555681731e+04, 9.424192384593e+00], [-2.073484841753e+00, 2.269770850704e+00, -6.912330785485e-04], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([3.113169755798e+04, 2.844555681731e+04, 9.424192384593e+00], [-2.073484841753e+00, 2.269770850704e+00, -6.912330785485e-04], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.216596956171e+04, TOL));
         ok(isequalRel(a,       4.216597047865e+04, TOL));
         ok(isequalRel(ecc,     1.474658285037e-04, TOL));
         ok(isequalRel(incl,    3.170308167650e-04, TOL));
         ok(isequalRel(omega,   4.664236665717e+00, TOL));
         ok(isequalRel(argp,    2.299866983366e-02, TOL));
         ok(isequalRel(nu,      2.336291941255e+00, TOL));
         ok(isequalRel(m,       2.336079267720e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.268781846530e+04, 4.021783324639e+04, 3.447262490826e+00], [-2.931721827058e+00, 9.249622300916e-01, -9.407662752301e-04], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.268781846530e+04, 4.021783324639e+04, 3.447262490826e+00], [-2.931721827058e+00, 9.249622300916e-01, -9.407662752301e-04], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.216597079162e+04, TOL));
         ok(isequalRel(a,       4.216597159812e+04, TOL));
         ok(isequalRel(ecc,     1.382992296552e-04, TOL));
         ok(isequalRel(incl,    3.167535228624e-04, TOL));
         ok(isequalRel(omega,   4.667814160201e+00, TOL));
         ok(isequalRel(argp,    6.180033398843e+00, TOL));
         ok(isequalRel(nu,      2.983724275840e+00, TOL));
         ok(isequalRel(m,       2.983680786387e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-9.172235002451e+03, 4.116163475527e+04, -3.435757567745e+00], [-3.000571486290e+00, -6.688475083905e-01, -9.401010291814e-04], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-9.172235002451e+03, 4.116163475527e+04, -3.435757567745e+00], [-3.000571486290e+00, -6.688475083905e-01, -9.401010291814e-04], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.216597187400e+04, TOL));
         ok(isequalRel(a,       4.216597272097e+04, TOL));
         ok(isequalRel(ecc,     1.417267990267e-04, TOL));
         ok(isequalRel(incl,    3.164743505259e-04, TOL));
         ok(isequalRel(omega,   4.671274318534e+00, TOL));
         ok(isequalRel(argp,    6.037541048562e+00, TOL));
         ok(isequalRel(nu,      3.647603983939e+00, TOL));
         ok(isequalRel(m,       3.647741384485e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.856251093192e+04, 3.102245987587e+04, -9.395621609154e+00], [-2.261449201877e+00, -2.082713896673e+00, -6.896686839856e-04], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.856251093192e+04, 3.102245987587e+04, -9.395621609154e+00], [-2.261449201877e+00, -2.082713896673e+00, -6.896686839856e-04], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.216597281947e+04, TOL));
         ok(isequalRel(a,       4.216597384694e+04, TOL));
         ok(isequalRel(ecc,     1.560996564057e-04, TOL));
         ok(isequalRel(incl,    3.161976124932e-04, TOL));
         ok(isequalRel(omega,   4.674591679632e+00, TOL));
         ok(isequalRel(argp,    5.943136035013e+00, TOL));
         ok(isequalRel(nu,      4.263576124747e+00, TOL));
         ok(isequalRel(m,       4.263857419013e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-4.026077504549e+04, 1.252911484344e+04, -1.284915105397e+01], [-9.130970307116e-01, -2.935933528373e+00, -2.561807220466e-04], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-4.026077504549e+04, 1.252911484344e+04, -1.284915105397e+01], [-9.130970307116e-01, -2.935933528373e+00, -2.561807220466e-04], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.216597367563e+04, TOL));
         ok(isequalRel(a,       4.216597497502e+04, TOL));
         ok(isequalRel(ecc,     1.755451493936e-04, TOL));
         ok(isequalRel(incl,    3.159326663542e-04, TOL));
         ok(isequalRel(omega,   4.677749783766e+00, TOL));
         ok(isequalRel(argp,    5.919139389542e+00, TOL));
         ok(isequalRel(nu,      4.809374887000e+00, TOL));
         ok(isequalRel(m,       4.809724322911e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-4.111414376538e+04, -9.338871944829e+03, -1.287952403555e+01], [6.815888153116e-01, -2.998432564535e+00, 2.450055230930e-04], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-4.111414376538e+04, -9.338871944829e+03, -1.287952403555e+01], [6.815888153116e-01, -2.998432564535e+00, 2.450055230930e-04], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.216597451411e+04, TOL));
         ok(isequalRel(a,       4.216597610363e+04, TOL));
         ok(isequalRel(ecc,     1.941563959538e-04, TOL));
         ok(isequalRel(incl,    3.156889206105e-04, TOL));
         ok(isequalRel(omega,   4.680750437803e+00, TOL));
         ok(isequalRel(argp,    5.951940466509e+00, TOL));
         ok(isequalRel(nu,      5.298627489863e+00, TOL));
         ok(isequalRel(m,       5.298950939055e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-3.089001512240e+04, -2.869040750792e+04, -9.480372120172e+00], [2.092989804846e+00, -2.252978151538e+00, 6.804591920790e-04], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-3.089001512240e+04, -2.869040750792e+04, -9.480372120172e+00], [2.092989804846e+00, -2.252978151538e+00, 6.804591920790e-04], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.216597541125e+04, TOL));
         ok(isequalRel(a,       4.216597723093e+04, TOL));
         ok(isequalRel(ecc,     2.077379521664e-04, TOL));
         ok(isequalRel(incl,    3.154708023905e-04, TOL));
         ok(isequalRel(omega,   4.683604786317e+00, TOL));
         ok(isequalRel(argp,    6.020505095896e+00, TOL));
         ok(isequalRel(nu,      5.752349988353e+00, TOL));
         ok(isequalRel(m,       5.752560296384e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.234146194020e+04, -4.031006316386e+04, -3.558332010069e+00], [2.940537098402e+00, -9.002195229492e-01, 9.341700563986e-04], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.234146194020e+04, -4.031006316386e+04, -3.558332010069e+00], [2.940537098402e+00, -9.002195229492e-01, 9.341700563986e-04], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.216597642748e+04, TOL));
         ok(isequalRel(a,       4.216597835530e+04, TOL));
         ok(isequalRel(ecc,     2.138219808942e-04, TOL));
         ok(isequalRel(incl,    3.152776736311e-04, TOL));
         ok(isequalRel(omega,   4.686315011902e+00, TOL));
         ok(isequalRel(argp,    6.106985180907e+00, TOL));
         ok(isequalRel(nu,      6.188357826844e+00, TOL));
         ok(isequalRel(m,       6.188398312032e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[9.533277508184e+03, -4.106552390214e+04, 3.307564821074e+00], [2.995596171266e+00, 6.952002362639e-01, 9.385247868216e-04], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([9.533277508184e+03, -4.106552390214e+04, 3.307564821074e+00], [2.995596171266e+00, 6.952002362639e-01, 9.385247868216e-04], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.216597759114e+04, TOL));
         ok(isequalRel(a,       4.216597947594e+04, TOL));
         ok(isequalRel(ecc,     2.114225876523e-04, TOL));
         ok(isequalRel(incl,    3.151088026884e-04, TOL));
         ok(isequalRel(omega,   4.688864889893e+00, TOL));
         ok(isequalRel(argp,    6.196678391158e+00, TOL));
         ok(isequalRel(nu,      3.381384865579e-01, TOL));
         ok(isequalRel(m,       3.379982364464e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
         // 26900
     });

test('[4.096868133298e+04, -9.905991560862e+03, 1.184946837135e+01], [7.227568481246e-01, 2.989645389045e+00, -1.612610692444e-04], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([4.096868133298e+04, -9.905991560862e+03, 1.184946837135e+01], [7.227568481246e-01, 2.989645389045e+00, -1.612610692444e-04], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.216479916545e+04, TOL));
         ok(isequalRel(a,       4.216480494590e+04, TOL));
         ok(isequalRel(ecc,     3.702590174409e-04, TOL));
         ok(isequalRel(incl,    2.859761363481e-04, TOL));
         ok(isequalRel(omega,   4.290808647498e+00, TOL));
         ok(isequalRel(argp,    1.859715133037e+00, TOL));
         ok(isequalRel(nu,      6.178606008330e+00, TOL));
         ok(isequalRel(m,       6.178683288757e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[4.213566858481e+04, 1.072991956181e+03, 1.083481752324e+01], [-7.815060209714e-02, 3.074772455410e+00, -3.800629733523e-04], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([4.213566858481e+04, 1.072991956181e+03, 1.083481752324e+01], [-7.815060209714e-02, 3.074772455410e+00, -3.800629733523e-04], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.216479631231e+04, TOL));
         ok(isequalRel(a,       4.216480208865e+04, TOL));
         ok(isequalRel(ecc,     3.701274097376e-04, TOL));
         ok(isequalRel(incl,    2.852203096038e-04, TOL));
         ok(isequalRel(omega,   4.289723014655e+00, TOL));
         ok(isequalRel(argp,    1.887743170546e+00, TOL));
         ok(isequalRel(nu,      1.311787735524e-01, TOL));
         ok(isequalRel(m,       1.310819727321e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[4.130475156132e+04, 8.398277429438e+03, 9.740062137489e+00], [-6.125151346766e-01, 3.014117469306e+00, -5.115749080507e-04], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([4.130475156132e+04, 8.398277429438e+03, 9.740062137489e+00], [-6.125151346766e-01, 3.014117469306e+00, -5.115749080507e-04], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.216479444977e+04, TOL));
         ok(isequalRel(a,       4.216480018294e+04, TOL));
         ok(isequalRel(ecc,     3.687418981571e-04, TOL));
         ok(isequalRel(incl,    2.847302185133e-04, TOL));
         ok(isequalRel(omega,   4.289035493565e+00, TOL));
         ok(isequalRel(argp,    1.906063990679e+00, TOL));
         ok(isequalRel(nu,      2.886761651077e-01, TOL));
         ok(isequalRel(m,       2.884662713473e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
         // 26975
     });

test('[7.309621979505e+03, 6.076007136636e+03, 6.800087052633e+03], [1.300543382827e+00, 5.322579614806e+00, -4.788746312453e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([7.309621979505e+03, 6.076007136636e+03, 6.800087052633e+03], [1.300543382827e+00, 5.322579614806e+00, -4.788746312453e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.792951355547e+04, TOL));
         ok(isequalRel(a,       2.612343079530e+04, TOL));
         ok(isequalRel(ecc,     5.600550020529e-01, TOL));
         ok(isequalRel(incl,    1.195289008574e+00, TOL));
         ok(isequalRel(omega,   4.120992912944e+00, TOL));
         ok(isequalRel(argp,    2.160413069018e+00, TOL));
         ok(isequalRel(nu,      3.055085867742e-01, TOL));
         ok(isequalRel(m,       7.218137586086e-02, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-3.882629337907e+03, 1.196000543452e+04, -2.508814383845e+04], [-2.146773699437e+00, -1.372461491451e+00, -2.579382089499e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-3.882629337907e+03, 1.196000543452e+04, -2.508814383845e+04], [-2.146773699437e+00, -1.372461491451e+00, -2.579382089499e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.792589029144e+04, TOL));
         ok(isequalRel(a,       2.611709409444e+04, TOL));
         ok(isequalRel(ecc,     5.600301892854e-01, TOL));
         ok(isequalRel(incl,    1.195245987323e+00, TOL));
         ok(isequalRel(omega,   4.120974170498e+00, TOL));
         ok(isequalRel(argp,    2.160235171072e+00, TOL));
         ok(isequalRel(nu,      2.271836458316e+00, TOL));
         ok(isequalRel(m,       1.149180531845e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.678545507465e+04, -7.347915970418e+02, -3.430057085853e+04], [-1.386528124537e+00, -1.907762640718e+00, -2.209496405435e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.678545507465e+04, -7.347915970418e+02, -3.430057085853e+04], [-1.386528124537e+00, -1.907762640718e+00, -2.209496405435e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.792492642513e+04, TOL));
         ok(isequalRel(a,       2.611838817044e+04, TOL));
         ok(isequalRel(ecc,     5.600934955264e-01, TOL));
         ok(isequalRel(incl,    1.195239577161e+00, TOL));
         ok(isequalRel(omega,   4.120859694907e+00, TOL));
         ok(isequalRel(argp,    2.160332162887e+00, TOL));
         ok(isequalRel(nu,      2.816149153755e+00, TOL));
         ok(isequalRel(m,       2.225783135424e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.352416689356e+04, -1.362945124622e+04, -3.024627899200e+04], [-4.628467838728e-01, -1.586139829514e+00, 1.269293624014e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.352416689356e+04, -1.362945124622e+04, -3.024627899200e+04], [-4.628467838728e-01, -1.586139829514e+00, 1.269293624014e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.792673337459e+04, TOL));
         ok(isequalRel(a,       2.611907401505e+04, TOL));
         ok(isequalRel(ecc,     5.600478225224e-01, TOL));
         ok(isequalRel(incl,    1.195254164446e+00, TOL));
         ok(isequalRel(omega,   4.120767169348e+00, TOL));
         ok(isequalRel(argp,    2.160428590227e+00, TOL));
         ok(isequalRel(nu,      3.196415647512e+00, TOL));
         ok(isequalRel(m,       3.302439923089e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.289023597092e+04, -2.220935900155e+04, -1.676991946116e+04], [7.043513419348e-01, -6.711125944523e-01, 2.432433851330e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.289023597092e+04, -2.220935900155e+04, -1.676991946116e+04], [7.043513419348e-01, -6.711125944523e-01, 2.432433851330e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.792964169836e+04, TOL));
         ok(isequalRel(a,       2.612002233322e+04, TOL));
         ok(isequalRel(ecc,     5.599706577269e-01, TOL));
         ok(isequalRel(incl,    1.195275370447e+00, TOL));
         ok(isequalRel(omega,   4.120695517686e+00, TOL));
         ok(isequalRel(argp,    2.160370952139e+00, TOL));
         ok(isequalRel(nu,      3.598925992357e+00, TOL));
         ok(isequalRel(m,       4.379317682113e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.164639698980e+04, -1.985544222106e+04, 3.574001096073e+03], [2.626712727480e+00, 1.815887328921e+00, 2.960883901054e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.164639698980e+04, -1.985544222106e+04, 3.574001096073e+03], [2.626712727480e+00, 1.815887328921e+00, 2.960883901054e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.793152168438e+04, TOL));
         ok(isequalRel(a,       2.612355775718e+04, TOL));
         ok(isequalRel(ecc,     5.599893485981e-01, TOL));
         ok(isequalRel(incl,    1.195284840674e+00, TOL));
         ok(isequalRel(omega,   4.120665333603e+00, TOL));
         ok(isequalRel(argp,    2.160179185121e+00, TOL));
         ok(isequalRel(nu,      4.288678697633e+00, TOL));
         ok(isequalRel(m,       5.456398759969e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[7.665761242415e+03, 1.115978946577e+04, 3.459381311655e+02], [-5.848180068327e-01, 3.193514161496e+00, -5.750338922301e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([7.665761242415e+03, 1.115978946577e+04, 3.459381311655e+02], [-5.848180068327e-01, 3.193514161496e+00, -5.750338922301e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.793246687870e+04, TOL));
         ok(isequalRel(a,       2.612811182672e+04, TOL));
         ok(isequalRel(ecc,     5.600638670535e-01, TOL));
         ok(isequalRel(incl,    1.195280420366e+00, TOL));
         ok(isequalRel(omega,   4.120576008529e+00, TOL));
         ok(isequalRel(argp,    2.160388322022e+00, TOL));
         ok(isequalRel(nu,      9.537448265413e-01, TOL));
         ok(isequalRel(m,       2.497329415917e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-6.369353881120e+03, 1.020480073022e+04, -2.784452150384e+04], [-2.050573276137e+00, -1.582940542431e+00, -2.076075231976e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-6.369353881120e+03, 1.020480073022e+04, -2.784452150384e+04], [-2.050573276137e+00, -1.582940542431e+00, -2.076075231976e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.792665013164e+04, TOL));
         ok(isequalRel(a,       2.611726475062e+04, TOL));
         ok(isequalRel(ecc,     5.600082181346e-01, TOL));
         ok(isequalRel(incl,    1.195205820545e+00, TOL));
         ok(isequalRel(omega,   4.120515227648e+00, TOL));
         ok(isequalRel(argp,    2.160036374079e+00, TOL));
         ok(isequalRel(nu,      2.389582311632e+00, TOL));
         ok(isequalRel(m,       1.326850334671e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.834564763145e+04, -2.977766844301e+03, -3.439490760612e+04], [-1.243589864298e+00, -1.892050756677e+00, 6.037206113726e-02], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.834564763145e+04, -2.977766844301e+03, -3.439490760612e+04], [-1.243589864298e+00, -1.892050756677e+00, 6.037206113726e-02], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.792630962892e+04, TOL));
         ok(isequalRel(a,       2.611851157885e+04, TOL));
         ok(isequalRel(ecc,     5.600491118493e-01, TOL));
         ok(isequalRel(incl,    1.195204928464e+00, TOL));
         ok(isequalRel(omega,   4.120405184646e+00, TOL));
         ok(isequalRel(argp,    2.160156858553e+00, TOL));
         ok(isequalRel(nu,      2.883301197419e+00, TOL));
         ok(isequalRel(m,       2.403439199449e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.397974839255e+04, -1.543644139571e+04, -2.861650540218e+04], [-2.949734249687e-01, -1.482987916391e+00, 1.478255628364e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.397974839255e+04, -1.543644139571e+04, -2.861650540218e+04], [-2.949734249687e-01, -1.482987916391e+00, 1.478255628364e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.792836993656e+04, TOL));
         ok(isequalRel(a,       2.611914767216e+04, TOL));
         ok(isequalRel(ecc,     5.599936084298e-01, TOL));
         ok(isequalRel(incl,    1.195220448537e+00, TOL));
         ok(isequalRel(omega,   4.120316407952e+00, TOL));
         ok(isequalRel(argp,    2.160232198230e+00, TOL));
         ok(isequalRel(nu,      3.257500895422e+00, TOL));
         ok(isequalRel(m,       3.480130621318e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.192197167880e+04, -2.285245147658e+04, -1.378485308485e+04], [9.454556285702e-01, -4.289409948304e-01, 2.596964377926e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.192197167880e+04, -2.285245147658e+04, -1.378485308485e+04], [9.454556285702e-01, -4.289409948304e-01, 2.596964377926e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.793130212678e+04, TOL));
         ok(isequalRel(a,       2.612031047667e+04, TOL));
         ok(isequalRel(ecc,     5.599206562963e-01, TOL));
         ok(isequalRel(incl,    1.195241573917e+00, TOL));
         ok(isequalRel(omega,   4.120249730486e+00, TOL));
         ok(isequalRel(argp,    2.160141685126e+00, TOL));
         ok(isequalRel(nu,      3.679624684616e+00, TOL));
         ok(isequalRel(m,       4.557056318968e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-8.266438210307e+03, -1.721074590112e+04, 6.967955460702e+03], [3.082244068744e+00, 2.665881871564e+00, 2.712555075271e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-8.266438210307e+03, -1.721074590112e+04, 6.967955460702e+03], [3.082244068744e+00, 2.665881871564e+00, 2.712555075271e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.793234389535e+04, TOL));
         ok(isequalRel(a,       2.612400469837e+04, TOL));
         ok(isequalRel(ecc,     5.599717319624e-01, TOL));
         ok(isequalRel(incl,    1.195238271799e+00, TOL));
         ok(isequalRel(omega,   4.120230152243e+00, TOL));
         ok(isequalRel(argp,    2.159993859342e+00, TOL));
         ok(isequalRel(nu,      4.500602674831e+00, TOL));
         ok(isequalRel(m,       5.634103189003e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[6.286854645346e+03, 1.380956328971e+04, -6.321606637811e+03], [-1.615964016220e+00, 1.383135376814e+00, -5.358719131848e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([6.286854645346e+03, 1.380956328971e+04, -6.321606637811e+03], [-1.615964016220e+00, 1.383135376814e+00, -5.358719131848e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.793261272576e+04, TOL));
         ok(isequalRel(a,       2.612291732668e+04, TOL));
         ok(isequalRel(ecc,     5.599370292825e-01, TOL));
         ok(isequalRel(incl,    1.195229063274e+00, TOL));
         ok(isequalRel(omega,   4.120158145334e+00, TOL));
         ok(isequalRel(argp,    2.160145314650e+00, TOL));
         ok(isequalRel(nu,      1.407630631290e+00, TOL));
         ok(isequalRel(m,       4.275097677437e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-8.730875267877e+03, 8.244633443645e+03, -3.003992372791e+04], [-1.935622870559e+00, -1.724162071956e+00, -1.631224737529e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-8.730875267877e+03, 8.244633443645e+03, -3.003992372791e+04], [-1.935622870559e+00, -1.724162071956e+00, -1.631224737529e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.792744366756e+04, TOL));
         ok(isequalRel(a,       2.611747838942e+04, TOL));
         ok(isequalRel(ecc,     5.599861031042e-01, TOL));
         ok(isequalRel(incl,    1.195164383564e+00, TOL));
         ok(isequalRel(omega,   4.120059832403e+00, TOL));
         ok(isequalRel(argp,    2.159841087772e+00, TOL));
         ok(isequalRel(nu,      2.491749272943e+00, TOL));
         ok(isequalRel(m,       1.504537491082e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.973581883249e+04, -5.191765930066e+03, -3.416614974143e+04], [-1.097835529690e+00, -1.860148418240e+00, 3.244010498337e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.973581883249e+04, -5.191765930066e+03, -3.416614974143e+04], [-1.097835529690e+00, -1.860148418240e+00, 3.244010498337e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.792762985747e+04, TOL));
         ok(isequalRel(a,       2.611860568248e+04, TOL));
         ok(isequalRel(ecc,     5.600061902363e-01, TOL));
         ok(isequalRel(incl,    1.195167677079e+00, TOL));
         ok(isequalRel(omega,   4.119953997208e+00, TOL));
         ok(isequalRel(argp,    2.159970525926e+00, TOL));
         ok(isequalRel(nu,      2.947772957086e+00, TOL));
         ok(isequalRel(m,       2.581129241572e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.423273847703e+04, -1.711208243255e+04, -2.674288893252e+04], [-1.197861835825e-01, -1.364365316968e+00, 1.680220467576e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.423273847703e+04, -1.711208243255e+04, -2.674288893252e+04], [-1.197861835825e-01, -1.364365316968e+00, 1.680220467576e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.792990514048e+04, TOL));
         ok(isequalRel(a,       2.611922298493e+04, TOL));
         ok(isequalRel(ecc,     5.599428934279e-01, TOL));
         ok(isequalRel(incl,    1.195184182731e+00, TOL));
         ok(isequalRel(omega,   4.119868681266e+00, TOL));
         ok(isequalRel(argp,    2.160022116815e+00, TOL));
         ok(isequalRel(nu,      3.319721883918e+00, TOL));
         ok(isequalRel(m,       3.657859039487e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.065445640708e+04, -2.318454386047e+04, -1.061155144716e+04], [1.209238112654e+00, -1.441696392120e-01, 2.748054938128e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.065445640708e+04, -2.318454386047e+04, -1.061155144716e+04], [1.209238112654e+00, -1.441696392120e-01, 2.748054938128e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.793280629729e+04, TOL));
         ok(isequalRel(a,       2.612067806772e+04, TOL));
         ok(isequalRel(ecc,     5.598778587657e-01, TOL));
         ok(isequalRel(incl,    1.195205112544e+00, TOL));
         ok(isequalRel(omega,   4.119807355542e+00, TOL));
         ok(isequalRel(argp,    2.159898390398e+00, TOL));
         ok(isequalRel(nu,      3.768254456239e+00, TOL));
         ok(isequalRel(m,       4.734833973902e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-4.337159889566e+03, -1.341046817244e+04, 9.870459492155e+03], [3.532753094539e+00, 3.772236461389e+00, 2.088424246740e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-4.337159889566e+03, -1.341046817244e+04, 9.870459492155e+03], [3.532753094539e+00, 3.772236461389e+00, 2.088424246740e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.793248684818e+04, TOL));
         ok(isequalRel(a,       2.612289835071e+04, TOL));
         ok(isequalRel(ecc,     5.599408868531e-01, TOL));
         ok(isequalRel(incl,    1.195179977485e+00, TOL));
         ok(isequalRel(omega,   4.119794106969e+00, TOL));
         ok(isequalRel(argp,    2.159863545929e+00, TOL));
         ok(isequalRel(nu,      4.787768395720e+00, TOL));
         ok(isequalRel(m,       5.811769941130e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[4.074622635232e+03, 1.469807548285e+04, -1.224865327973e+04], [-2.053824693038e+00, 2.033258168449e-01, -4.607867718000e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([4.074622635232e+03, 1.469807548285e+04, -1.224865327973e+04], [-2.053824693038e+00, 2.033258168449e-01, -4.607867718000e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.793215920247e+04, TOL));
         ok(isequalRel(a,       2.611909737513e+04, TOL));
         ok(isequalRel(ecc,     5.598628789548e-01, TOL));
         ok(isequalRel(incl,    1.195167906001e+00, TOL));
         ok(isequalRel(omega,   4.119720639147e+00, TOL));
         ok(isequalRel(argp,    2.159803737926e+00, TOL));
         ok(isequalRel(nu,      1.720153608349e+00, TOL));
         ok(isequalRel(m,       6.053832396828e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.095023438984e+04, 6.148668794467e+03, -3.173665532865e+04], [-1.809875605115e+00, -1.816179061757e+00, -1.233364913036e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.095023438984e+04, 6.148668794467e+03, -3.173665532865e+04], [-1.809875605115e+00, -1.816179061757e+00, -1.233364913036e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.792823466685e+04, TOL));
         ok(isequalRel(a,       2.611768372773e+04, TOL));
         ok(isequalRel(ecc,     5.599638794879e-01, TOL));
         ok(isequalRel(incl,    1.195122638123e+00, TOL));
         ok(isequalRel(omega,   4.119606473106e+00, TOL));
         ok(isequalRel(argp,    2.159644474590e+00, TOL));
         ok(isequalRel(nu,      2.582573301986e+00, TOL));
         ok(isequalRel(m,       1.682252070980e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.095240702045e+04, -7.358715078949e+03, -3.363306643074e+04], [-9.489730308932e-01, -1.813594137221e+00, 5.738930782394e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.095240702045e+04, -7.358715078949e+03, -3.363306643074e+04], [-9.489730308932e-01, -1.813594137221e+00, 5.738930782394e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.792887175955e+04, TOL));
         ok(isequalRel(a,       2.611867574376e+04, TOL));
         ok(isequalRel(ecc,     5.599653791676e-01, TOL));
         ok(isequalRel(incl,    1.195129285721e+00, TOL));
         ok(isequalRel(omega,   4.119504434385e+00, TOL));
         ok(isequalRel(argp,    2.159772903721e+00, TOL));
         ok(isequalRel(nu,      3.010336368451e+00, TOL));
         ok(isequalRel(m,       2.758858172723e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.427348944134e+04, -1.863715546906e+04, -2.463327702390e+04], [6.416143974375e-02, -1.228537559549e+00, 1.875728934609e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.427348944134e+04, -1.863715546906e+04, -2.463327702390e+04], [6.416143974375e-02, -1.228537559549e+00, 1.875728934609e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.793132637869e+04, TOL));
         ok(isequalRel(a,       2.611930804509e+04, TOL));
         ok(isequalRel(ecc,     5.598962994359e-01, TOL));
         ok(isequalRel(incl,    1.195146874142e+00, TOL));
         ok(isequalRel(omega,   4.119422363288e+00, TOL));
         ok(isequalRel(argp,    2.159798510035e+00, TOL));
         ok(isequalRel(nu,      3.383730187939e+00, TOL));
         ok(isequalRel(m,       3.835629480898e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.905755468077e+04, -2.314829322082e+04, -7.269386141784e+03], [1.500802808575e+00, 1.953830370764e-01, 2.879031236996e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.905755468077e+04, -2.314829322082e+04, -7.269386141784e+03], [1.500802808575e+00, 1.953830370764e-01, 2.879031236996e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.793412895363e+04, TOL));
         ok(isequalRel(a,       2.612114924538e+04, TOL));
         ok(isequalRel(ecc,     5.598436970652e-01, TOL));
         ok(isequalRel(incl,    1.195167259949e+00, TOL));
         ok(isequalRel(omega,   4.119366981451e+00, TOL));
         ok(isequalRel(argp,    2.159642763602e+00, TOL));
         ok(isequalRel(nu,      3.867476885835e+00, TOL));
         ok(isequalRel(m,       4.912653141722e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[4.369305307820e+01, -8.145902992073e+03, 1.163457079913e+04], [3.780661682427e+00, 5.105315423410e+00, 7.144013445774e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([4.369305307820e+01, -8.145902992073e+03, 1.163457079913e+04], [3.780661682427e+00, 5.105315423410e+00, 7.144013445774e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.793181615959e+04, TOL));
         ok(isequalRel(a,       2.611781005175e+04, TOL));
         ok(isequalRel(ecc,     5.598443873674e-01, TOL));
         ok(isequalRel(incl,    1.195110429076e+00, TOL));
         ok(isequalRel(omega,   4.119342430349e+00, TOL));
         ok(isequalRel(argp,    2.159770939903e+00, TOL));
         ok(isequalRel(nu,      5.200514292271e+00, TOL));
         ok(isequalRel(m,       5.989404621744e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
         // 28057
     });

test('[-1.816879209419e+03, -1.835787621322e+03, 6.661079264647e+03], [2.325140070634e+00, 6.655669328664e+00, 2.463394511576e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.816879209419e+03, -1.835787621322e+03, 6.661079264647e+03], [2.325140070634e+00, 6.655669328664e+00, 2.463394511576e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       7.141718578245e+03, TOL));
         ok(isequalRel(a,       7.141722419562e+03, TOL));
         ok(isequalRel(ecc,     7.333961569790e-04, TOL));
         ok(isequalRel(incl,    1.717970702080e+00, TOL));
         ok(isequalRel(omega,   4.324473586508e+00, TOL));
         ok(isequalRel(argp,    3.317997763547e+00, TOL));
         ok(isequalRel(nu,      4.195374323083e+00, TOL));
         ok(isequalRel(m,       4.196649750355e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.483173642905e+03, 5.395212487860e+03, 4.448659071715e+03], [2.560540387224e+00, 4.039025765878e+00, -5.736648561317e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.483173642905e+03, 5.395212487860e+03, 4.448659071715e+03], [2.560540387224e+00, 4.039025765878e+00, -5.736648561317e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       7.150621710201e+03, TOL));
         ok(isequalRel(a,       7.150634302307e+03, TOL));
         ok(isequalRel(ecc,     1.327018230815e-03, TOL));
         ok(isequalRel(incl,    1.717878366281e+00, TOL));
         ok(isequalRel(omega,   4.326046671561e+00, TOL));
         ok(isequalRel(argp,    1.133855641863e+00, TOL));
         ok(isequalRel(nu,      1.327306440310e+00, TOL));
         ok(isequalRel(m,       1.324731309901e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.801256071573e+03, 5.455039313331e+03, -3.692128656945e+03], [-5.950958644238e-01, -3.951923117077e+00, -6.298799125078e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.801256071573e+03, 5.455039313331e+03, -3.692128656945e+03], [-5.950958644238e-01, -3.951923117077e+00, -6.298799125078e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       7.152853446878e+03, TOL));
         ok(isequalRel(a,       7.152859496197e+03, TOL));
         ok(isequalRel(ecc,     9.196305043762e-04, TOL));
         ok(isequalRel(incl,    1.717855145874e+00, TOL));
         ok(isequalRel(omega,   4.327290487836e+00, TOL));
         ok(isequalRel(argp,    1.232891867606e+00, TOL));
         ok(isequalRel(nu,      2.457233819566e+00, TOL));
         ok(isequalRel(m,       2.456070460641e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[4.110933281184e+02, -1.728997691520e+03, -6.935455488101e+03], [-2.935970964045e+00, -6.684085057511e+00, 1.492800885516e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([4.110933281184e+02, -1.728997691520e+03, -6.935455488101e+03], [-2.935970964045e+00, -6.684085057511e+00, 1.492800885516e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       7.140417618296e+03, TOL));
         ok(isequalRel(a,       7.140468571099e+03, TOL));
         ok(isequalRel(ecc,     2.671287814371e-03, TOL));
         ok(isequalRel(incl,    1.717983939705e+00, TOL));
         ok(isequalRel(omega,   4.328833121434e+00, TOL));
         ok(isequalRel(argp,    1.750558980215e+00, TOL));
         ok(isequalRel(nu,      3.165700582569e+00, TOL));
         ok(isequalRel(m,       3.165829626930e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.506525584538e+03, -6.628986550942e+03, -9.880778449704e+02], [-1.390577188722e+00, -5.561641428183e-01, 7.312736467784e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.506525584538e+03, -6.628986550942e+03, -9.880778449704e+02], [-1.390577188722e+00, -5.561641428183e-01, 7.312736467784e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       7.157424311799e+03, TOL));
         ok(isequalRel(a,       7.157431895845e+03, TOL));
         ok(isequalRel(ecc,     1.029370833968e-03, TOL));
         ok(isequalRel(incl,    1.717807849964e+00, TOL));
         ok(isequalRel(omega,   4.330242498707e+00, TOL));
         ok(isequalRel(argp,    1.178702693285e+00, TOL));
         ok(isequalRel(nu,      4.964434733801e+00, TOL));
         ok(isequalRel(m,       4.966428043901e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.090798842662e+03, -2.723228321928e+03, 6.266133565761e+03], [1.992640665061e+00, 6.337529519479e+00, 3.411803080481e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.090798842662e+03, -2.723228321928e+03, 6.266133565761e+03], [1.992640665061e+00, 6.337529519479e+00, 3.411803080481e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       7.143568533752e+03, TOL));
         ok(isequalRel(a,       7.143574135655e+03, TOL));
         ok(isequalRel(ecc,     8.855437590308e-04, TOL));
         ok(isequalRel(incl,    1.717951505755e+00, TOL));
         ok(isequalRel(omega,   4.331559363916e+00, TOL));
         ok(isequalRel(argp,    2.898176357430e+00, TOL));
         ok(isequalRel(nu,      4.474886889950e+00, TOL));
         ok(isequalRel(m,       4.476608529551e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.091805602223e+03, 4.809882295025e+03, 5.172428978938e+03], [2.717483545732e+00, 4.805518976627e+00, -5.030019896091e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.091805602223e+03, 4.809882295025e+03, 5.172428978938e+03], [2.717483545732e+00, 4.805518976627e+00, -5.030019896091e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       7.148100359571e+03, TOL));
         ok(isequalRel(a,       7.148110626230e+03, TOL));
         ok(isequalRel(ecc,     1.198447314706e-03, TOL));
         ok(isequalRel(incl,    1.717904503070e+00, TOL));
         ok(isequalRel(omega,   4.333152345283e+00, TOL));
         ok(isequalRel(argp,    8.672496961041e-01, TOL));
         ok(isequalRel(nu,      1.453658925869e+00, TOL));
         ok(isequalRel(m,       1.451278707145e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.811140622996e+03, 5.950657071710e+03, -2.813237053894e+03], [-1.596627418235e-01, -3.121215491213e+00, -6.775341949332e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.811140622996e+03, 5.950657071710e+03, -2.813237053894e+03], [-1.596627418235e-01, -3.121215491213e+00, -6.775341949332e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       7.154917463977e+03, TOL));
         ok(isequalRel(a,       7.154921986789e+03, TOL));
         ok(isequalRel(ecc,     7.950634398042e-04, TOL));
         ok(isequalRel(incl,    1.717833781474e+00, TOL));
         ok(isequalRel(omega,   4.334409529965e+00, TOL));
         ok(isequalRel(argp,    1.544842993995e+00, TOL));
         ok(isequalRel(nu,      2.005371775591e+00, TOL));
         ok(isequalRel(m,       2.003929090740e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[8.057269830432e+02, -8.121662790683e+02, -7.067584839683e+03], [-2.798936019759e+00, -6.889265977002e+00, 4.727708725617e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([8.057269830432e+02, -8.121662790683e+02, -7.067584839683e+03], [-2.798936019759e+00, -6.889265977002e+00, 4.727708725617e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       7.139750086413e+03, TOL));
         ok(isequalRel(a,       7.139804854091e+03, TOL));
         ok(isequalRel(ecc,     2.769612384846e-03, TOL));
         ok(isequalRel(incl,    1.717990854273e+00, TOL));
         ok(isequalRel(omega,   4.335911499899e+00, TOL));
         ok(isequalRel(argp,    1.626204945547e+00, TOL));
         ok(isequalRel(nu,      3.150346841263e+00, TOL));
         ok(isequalRel(m,       3.150395432965e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.249598375316e+03, -6.505848907139e+03, -1.956723650620e+03], [-1.731234728779e+00, -1.528750230335e+00, 7.096660884765e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.249598375316e+03, -6.505848907139e+03, -1.956723650620e+03], [-1.731234728779e+00, -1.528750230335e+00, 7.096660884765e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       7.156393071442e+03, TOL));
         ok(isequalRel(a,       7.156398336245e+03, TOL));
         ok(isequalRel(ecc,     8.577165476244e-04, TOL));
         ok(isequalRel(incl,    1.717818513198e+00, TOL));
         ok(isequalRel(omega,   4.337370461388e+00, TOL));
         ok(isequalRel(argp,    1.308603315714e+00, TOL));
         ok(isequalRel(nu,      4.694534930147e+00, TOL));
         ok(isequalRel(m,       4.696250109326e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.311573757974e+03, -3.560991128912e+03, 5.748167495996e+03], [1.626569751194e+00, 5.890482233105e+00, 4.293545047748e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.311573757974e+03, -3.560991128912e+03, 5.748167495996e+03], [1.626569751194e+00, 5.890482233105e+00, 4.293545047748e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       7.145822839365e+03, TOL));
         ok(isequalRel(a,       7.145830676271e+03, TOL));
         ok(isequalRel(ecc,     1.047239373767e-03, TOL));
         ok(isequalRel(incl,    1.717928119633e+00, TOL));
         ok(isequalRel(omega,   4.338651224867e+00, TOL));
         ok(isequalRel(argp,    2.545409641133e+00, TOL));
         ok(isequalRel(nu,      4.687360971920e+00, TOL));
         ok(isequalRel(m,       4.689454835484e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[6.881605659366e+02, 4.124876189636e+03, 5.794559944490e+03], [2.810973664728e+00, 5.479585562882e+00, -4.224866315922e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([6.881605659366e+02, 4.124876189636e+03, 5.794559944490e+03], [2.810973664728e+00, 5.479585562882e+00, -4.224866315922e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       7.145628919875e+03, TOL));
         ok(isequalRel(a,       7.145636740420e+03, TOL));
         ok(isequalRel(ecc,     1.046159866680e-03, TOL));
         ok(isequalRel(incl,    1.717930129460e+00, TOL));
         ok(isequalRel(omega,   4.340250631274e+00, TOL));
         ok(isequalRel(argp,    5.622660715883e-01, TOL));
         ok(isequalRel(nu,      1.618368989317e+00, TOL));
         ok(isequalRel(m,       1.616278959159e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.759940882296e+03, 6.329872717980e+03, -1.879195183309e+03], [2.669306724043e-01, -2.222670877521e+00, -7.119390566961e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.759940882296e+03, 6.329872717980e+03, -1.879195183309e+03], [2.669306724043e-01, -2.222670877521e+00, -7.119390566961e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       7.156500303890e+03, TOL));
         ok(isequalRel(a,       7.156505661966e+03, TOL));
         ok(isequalRel(ecc,     8.652745849065e-04, TOL));
         ok(isequalRel(incl,    1.717817401239e+00, TOL));
         ok(isequalRel(omega,   4.341533951701e+00, TOL));
         ok(isequalRel(argp,    1.834498175459e+00, TOL));
         ok(isequalRel(nu,      1.575763395697e+00, TOL));
         ok(isequalRel(m,       1.574032862513e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.171506771373e+03, 1.258205374764e+02, -7.061966262020e+03], [-2.605687852250e+00, -6.958489748881e+00, -5.563332247578e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.171506771373e+03, 1.258205374764e+02, -7.061966262020e+03], [-2.605687852250e+00, -6.958489748881e+00, -5.563332247578e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       7.139778452093e+03, TOL));
         ok(isequalRel(a,       7.139833083855e+03, TOL));
         ok(isequalRel(ecc,     2.766168153711e-03, TOL));
         ok(isequalRel(incl,    1.717990557279e+00, TOL));
         ok(isequalRel(omega,   4.342988939431e+00, TOL));
         ok(isequalRel(argp,    1.500018886999e+00, TOL));
         ok(isequalRel(nu,      3.136831201507e+00, TOL));
         ok(isequalRel(m,       3.136804804902e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.951437084725e+03, -6.251719458202e+03, -2.886954723550e+03], [-2.024131482542e+00, -2.475214272154e+00, 6.741537478137e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.951437084725e+03, -6.251719458202e+03, -2.886954723550e+03], [-2.024131482542e+00, -2.475214272154e+00, 6.741537478137e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       7.154765333506e+03, TOL));
         ok(isequalRel(a,       7.154769873344e+03, TOL));
         ok(isequalRel(ecc,     7.965670845200e-04, TOL));
         ok(isequalRel(incl,    1.717835352548e+00, TOL));
         ok(isequalRel(omega,   4.344494501342e+00, TOL));
         ok(isequalRel(argp,    1.606955727435e+00, TOL));
         ok(isequalRel(nu,      4.256230709275e+00, TOL));
         ok(isequalRel(m,       4.257661324079e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.475707222879e+03, -4.331905699582e+03, 5.117312349244e+03], [1.235823538829e+00, 5.322743370812e+00, 5.091281211251e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.475707222879e+03, -4.331905699582e+03, 5.117312349244e+03], [1.235823538829e+00, 5.322743370812e+00, 5.091281211251e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       7.148305117128e+03, TOL));
         ok(isequalRel(a,       7.148315425562e+03, TOL));
         ok(isequalRel(ecc,     1.200865835031e-03, TOL));
         ok(isequalRel(incl,    1.717902375593e+00, TOL));
         ok(isequalRel(omega,   4.345750102300e+00, TOL));
         ok(isequalRel(argp,    2.242364113581e+00, TOL));
         ok(isequalRel(nu,      4.850134276420e+00, TOL));
         ok(isequalRel(m,       4.852512964413e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.814609784741e+02, 3.353510571023e+03, 6.302879006502e+03], [2.840647273466e+00, 6.047222485034e+00, -3.337085992421e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.814609784741e+02, 3.353510571023e+03, 6.302879006502e+03], [2.840647273466e+00, 6.047222485034e+00, -3.337085992421e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       7.143400674471e+03, TOL));
         ok(isequalRel(a,       7.143406287288e+03, TOL));
         ok(isequalRel(ecc,     8.864163207241e-04, TOL));
         ok(isequalRel(incl,    1.717953239952e+00, TOL));
         ok(isequalRel(omega,   4.347341959125e+00, TOL));
         ok(isequalRel(argp,    2.084127483635e-01, TOL));
         ok(isequalRel(nu,      1.831932871163e+00, TOL));
         ok(isequalRel(m,       1.830219848756e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.650331188597e+03, 6.584334348513e+03, -9.082902713431e+02], [6.754572353940e-01, -1.274044971616e+00, -7.323921566628e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.650331188597e+03, 6.584334348513e+03, -9.082902713431e+02], [6.754572353940e-01, -1.274044971616e+00, -7.323921566628e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       7.157478226552e+03, TOL));
         ok(isequalRel(a,       7.157485952956e+03, TOL));
         ok(isequalRel(ecc,     1.038983051778e-03, TOL));
         ok(isequalRel(incl,    1.717807284127e+00, TOL));
         ok(isequalRel(omega,   4.348662154336e+00, TOL));
         ok(isequalRel(argp,    1.953957891234e+00, TOL));
         ok(isequalRel(nu,      1.316307731762e+00, TOL));
         ok(isequalRel(m,       1.314297087223e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.501172265975e+03, 1.066311327559e+03, -6.918714729524e+03], [-2.361891904359e+00, -6.889669973793e+00, -1.574718619163e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.501172265975e+03, 1.066311327559e+03, -6.918714729524e+03], [-2.361891904359e+00, -6.889669973793e+00, -1.574718619163e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       7.140500466458e+03, TOL));
         ok(isequalRel(a,       7.140551036469e+03, TOL));
         ok(isequalRel(ecc,     2.661219266844e-03, TOL));
         ok(isequalRel(incl,    1.717983072089e+00, TOL));
         ok(isequalRel(omega,   4.350067486282e+00, TOL));
         ok(isequalRel(argp,    1.375850753510e+00, TOL));
         ok(isequalRel(nu,      3.121295808750e+00, TOL));
         ok(isequalRel(m,       3.121187571518e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.619734683344e+03, -5.871140519913e+03, -3.760565870714e+03], [-2.264093974624e+00, -3.376316601072e+00, 6.254622256152e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.619734683344e+03, -5.871140519913e+03, -3.760565870714e+03], [-2.264093974624e+00, -3.376316601072e+00, 6.254622256152e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       7.152668331048e+03, TOL));
         ok(isequalRel(a,       7.152674553286e+03, TOL));
         ok(isequalRel(ecc,     9.326937609175e-04, TOL));
         ok(isequalRel(incl,    1.717857052923e+00, TOL));
         ok(isequalRel(omega,   4.351613050167e+00, TOL));
         ok(isequalRel(argp,    1.914001407506e+00, TOL));
         ok(isequalRel(nu,      3.809280071246e+00, TOL));
         ok(isequalRel(m,       3.810435701051e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.581042025049e+03, -5.020055725306e+03, 4.385923290467e+03], [8.296684584055e-01, 4.645048038434e+00, 5.789262667122e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.581042025049e+03, -5.020055725306e+03, 4.385923290467e+03], [8.296684584055e-01, 4.645048038434e+00, 5.789262667122e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       7.150821180639e+03, TOL));
         ok(isequalRel(a,       7.150833824018e+03, TOL));
         ok(isequalRel(ecc,     1.329698702340e-03, TOL));
         ok(isequalRel(incl,    1.717876288328e+00, TOL));
         ok(isequalRel(omega,   4.352856378880e+00, TOL));
         ok(isequalRel(argp,    1.978021685182e+00, TOL));
         ok(isequalRel(nu,      4.974229143065e+00, TOL));
         ok(isequalRel(m,       4.976797231949e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.192208062753e+02, 2.510906204877e+03, 6.687456154588e+03], [2.807575711633e+00, 6.496549689314e+00, -2.384136660660e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.192208062753e+02, 2.510906204877e+03, 6.687456154588e+03], [2.807575711633e+00, 6.496549689314e+00, -2.384136660660e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       7.141589879290e+03, TOL));
         ok(isequalRel(a,       7.141593748617e+03, TOL));
         ok(isequalRel(ecc,     7.360717491391e-04, TOL));
         ok(isequalRel(incl,    1.717972024558e+00, TOL));
         ok(isequalRel(omega,   4.354427304219e+00, TOL));
         ok(isequalRel(argp,    6.072391012382e+00, TOL));
         ok(isequalRel(nu,      2.110838769814e+00, TOL));
         ok(isequalRel(m,       2.109575773273e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.486238067258e+03, 6.708182100279e+03, 8.043349580657e+01], [1.057274904698e+00, -2.942940273652e-01, -7.384689123310e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.486238067258e+03, 6.708182100279e+03, 8.043349580657e+01], [1.057274904698e+00, -2.942940273652e-01, -7.384689123310e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       7.157774497710e+03, TOL));
         ok(isequalRel(a,       7.157785139308e+03, TOL));
         ok(isequalRel(ecc,     1.219309889156e-03, TOL));
         ok(isequalRel(incl,    1.717804223356e+00, TOL));
         ok(isequalRel(omega,   4.355792242583e+00, TOL));
         ok(isequalRel(argp,    1.938293636228e+00, TOL));
         ok(isequalRel(nu,      1.191933899729e+00, TOL));
         ok(isequalRel(m,       1.189668978860e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.788423345804e+03, 1.990505309570e+03, -6.640593377252e+03], [-2.074169090639e+00, -6.683381288034e+00, -2.562777775602e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.788423345804e+03, 1.990505309570e+03, -6.640593377252e+03], [-2.074169090639e+00, -6.683381288034e+00, -2.562777775602e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       7.141860294622e+03, TOL));
         ok(isequalRel(a,       7.141903592606e+03, TOL));
         ok(isequalRel(ecc,     2.462219959731e-03, TOL));
         ok(isequalRel(incl,    1.717968978639e+00, TOL));
         ok(isequalRel(omega,   4.357149101110e+00, TOL));
         ok(isequalRel(argp,    1.258123301354e+00, TOL));
         ok(isequalRel(nu,      3.099310142526e+00, TOL));
         ok(isequalRel(m,       3.099101602196e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
         // 28129
     });

test('[1.861675971861e+04, 3.166151770435e+03, 1.883341523210e+04], [-2.076122016210e+00, 2.838457575004e+00, 1.586210534951e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.861675971861e+04, 3.166151770435e+03, 1.883341523210e+04], [-2.076122016210e+00, 2.838457575004e+00, 1.586210534951e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       2.655906129918e+04, TOL));
         ok(isequalRel(a,       2.655963328169e+04, TOL));
         ok(isequalRel(ecc,     4.640666248398e-03, TOL));
         ok(isequalRel(incl,    9.551696494031e-01, TOL));
         ok(isequalRel(omega,   5.668614168392e+00, TOL));
         ok(isequalRel(argp,    4.640185603163e+00, TOL));
         ok(isequalRel(nu,      2.688053122763e+00, TOL));
         ok(isequalRel(m,       2.683973751649e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-3.006505963285e+03, 1.852220742011e+04, 1.894184078154e+04], [-3.375452789384e+00, 1.032680772586e+00, -1.559324534308e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-3.006505963285e+03, 1.852220742011e+04, 1.894184078154e+04], [-3.375452789384e+00, 1.032680772586e+00, -1.559324534308e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       2.655903130211e+04, TOL));
         ok(isequalRel(a,       2.655960264513e+04, TOL));
         ok(isequalRel(ecc,     4.638074038857e-03, TOL));
         ok(isequalRel(incl,    9.551707290094e-01, TOL));
         ok(isequalRel(omega,   5.668507349554e+00, TOL));
         ok(isequalRel(argp,    4.652399020257e+00, TOL));
         ok(isequalRel(nu,      3.716820103224e+00, TOL));
         ok(isequalRel(m,       3.721881328029e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.160702086957e+04, 1.543259962630e+04, 2.066247030937e+02], [-1.306049851047e+00, -1.817011568223e+00, -3.163725018401e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.160702086957e+04, 1.543259962630e+04, 2.066247030937e+02], [-1.306049851047e+00, -1.817011568223e+00, -3.163725018401e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       2.656154270050e+04, TOL));
         ok(isequalRel(a,       2.656211191488e+04, TOL));
         ok(isequalRel(ecc,     4.629207297044e-03, TOL));
         ok(isequalRel(incl,    9.552056500981e-01, TOL));
         ok(isequalRel(omega,   5.668469932355e+00, TOL));
         ok(isequalRel(argp,    4.634741971742e+00, TOL));
         ok(isequalRel(nu,      4.780504691011e+00, TOL));
         ok(isequalRel(m,       4.789739420407e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.845306134549e+04, -3.150832561335e+03, -1.868583030936e+04], [2.106017925296e+00, -2.860236336534e+00, -1.586151870247e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.845306134549e+04, -3.150832561335e+03, -1.868583030936e+04], [2.106017925296e+00, -2.860236336534e+00, -1.586151870247e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       2.655906152370e+04, TOL));
         ok(isequalRel(a,       2.655962638967e+04, TOL));
         ok(isequalRel(ecc,     4.611707205141e-03, TOL));
         ok(isequalRel(incl,    9.551741000484e-01, TOL));
         ok(isequalRel(omega,   5.668433882848e+00, TOL));
         ok(isequalRel(argp,    4.652103088794e+00, TOL));
         ok(isequalRel(nu,      5.818459689103e+00, TOL));
         ok(isequalRel(m,       5.822580667009e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[3.425117423839e+03, -1.851473232706e+04, -1.858867200557e+04], [3.394666339720e+00, -1.003072029950e+00, 1.610061294673e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([3.425117423839e+03, -1.851473232706e+04, -1.858867200557e+04], [3.394666339720e+00, -1.003072029950e+00, 1.610061294673e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       2.655908879815e+04, TOL));
         ok(isequalRel(a,       2.655965482359e+04, TOL));
         ok(isequalRel(ecc,     4.616435403522e-03, TOL));
         ok(isequalRel(incl,    9.551759787097e-01, TOL));
         ok(isequalRel(omega,   5.668326774367e+00, TOL));
         ok(isequalRel(argp,    4.640055446068e+00, TOL));
         ok(isequalRel(nu,      6.068134805952e-01, TOL));
         ok(isequalRel(m,       6.015633540021e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.185823838149e+04, -1.510151661554e+04, 3.873451704808e+02], [1.247973967427e+00, 1.856017402747e+00, 3.161439947612e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.185823838149e+04, -1.510151661554e+04, 3.873451704808e+02], [1.247973967427e+00, 1.856017402747e+00, 3.161439947612e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       2.656154238130e+04, TOL));
         ok(isequalRel(a,       2.656210961740e+04, TOL));
         ok(isequalRel(ecc,     4.621156197662e-03, TOL));
         ok(isequalRel(incl,    9.552101797902e-01, TOL));
         ok(isequalRel(omega,   5.668291566026e+00, TOL));
         ok(isequalRel(argp,    4.657695666441e+00, TOL));
         ok(isequalRel(nu,      1.643346322335e+00, TOL));
         ok(isequalRel(m,       1.634126039048e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.836069935796e+04, 3.506552567622e+03, 1.902481678979e+04], [-2.122684183899e+00, 2.830618604699e+00, 1.537510676810e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.836069935796e+04, 3.506552567622e+03, 1.902481678979e+04], [-2.122684183899e+00, 2.830618604699e+00, 1.537510676810e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       2.655901086938e+04, TOL));
         ok(isequalRel(a,       2.655958322757e+04, TOL));
         ok(isequalRel(ecc,     4.642194405799e-03, TOL));
         ok(isequalRel(incl,    9.551780154791e-01, TOL));
         ok(isequalRel(omega,   5.668253776532e+00, TOL));
         ok(isequalRel(argp,    4.640452733980e+00, TOL));
         ok(isequalRel(nu,      2.705502836523e+00, TOL));
         ok(isequalRel(m,       2.701568716408e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-3.412847654090e+03, 1.864685269710e+04, 1.874800359987e+04], [-3.366815727595e+00, 9.860399215987e-01, -1.607874971672e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-3.412847654090e+03, 1.864685269710e+04, 1.874800359987e+04], [-3.366815727595e+00, 9.860399215987e-01, -1.607874971672e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       2.655908243467e+04, TOL));
         ok(isequalRel(a,       2.655965314350e+04, TOL));
         ok(isequalRel(ecc,     4.635494796957e-03, TOL));
         ok(isequalRel(incl,    9.551804919247e-01, TOL));
         ok(isequalRel(omega,   5.668147390923e+00, TOL));
         ok(isequalRel(argp,    4.652598125276e+00, TOL));
         ok(isequalRel(nu,      3.734349294046e+00, TOL));
         ok(isequalRel(m,       3.739543494880e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.175808331586e+04, 1.521544829478e+04, -1.808218140631e+02], [-1.250144679705e+00, -1.856490448461e+00, -3.163774870236e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.175808331586e+04, 1.521544829478e+04, -1.808218140631e+02], [-1.250144679705e+00, -1.856490448461e+00, -3.163774870236e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       2.656154288306e+04, TOL));
         ok(isequalRel(a,       2.656211237253e+04, TOL));
         ok(isequalRel(ecc,     4.630325740817e-03, TOL));
         ok(isequalRel(incl,    9.552147675692e-01, TOL));
         ok(isequalRel(omega,   5.668111841916e+00, TOL));
         ok(isequalRel(argp,    4.635045848210e+00, TOL));
         ok(isequalRel(nu,      4.798073754256e+00, TOL));
         ok(isequalRel(m,       4.807297657100e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.819341290284e+04, -3.493858769121e+03, -1.887714757717e+04], [2.153326942358e+00, -2.852221264187e+00, -1.536617760164e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.819341290284e+04, -3.493858769121e+03, -1.887714757717e+04], [2.153326942358e+00, -2.852221264187e+00, -1.536617760164e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       2.655901048415e+04, TOL));
         ok(isequalRel(a,       2.655957469729e+04, TOL));
         ok(isequalRel(ecc,     4.609045984338e-03, TOL));
         ok(isequalRel(incl,    9.551825519709e-01, TOL));
         ok(isequalRel(omega,   5.668074751304e+00, TOL));
         ok(isequalRel(argp,    4.652399516734e+00, TOL));
         ok(isequalRel(nu,      5.836171484637e+00, TOL));
         ok(isequalRel(m,       5.840143843312e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[3.833573868477e+03, -1.863577026711e+04, -1.838868722885e+04], [3.384748179026e+00, -9.553638407244e-01, 1.658785020368e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([3.833573868477e+03, -1.863577026711e+04, -1.838868722885e+04], [3.384748179026e+00, -9.553638407244e-01, 1.658785020368e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       2.655914165639e+04, TOL));
         ok(isequalRel(a,       2.655970804969e+04, TOL));
         ok(isequalRel(ecc,     4.617930660554e-03, TOL));
         ok(isequalRel(incl,    9.551858194002e-01, TOL));
         ok(isequalRel(omega,   5.667968117050e+00, TOL));
         ok(isequalRel(argp,    4.640440864979e+00, TOL));
         ok(isequalRel(nu,      6.244211807145e-01, TOL));
         ok(isequalRel(m,       6.190367806071e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.200220074562e+04, -1.487972595593e+04, 7.743282709904e+02], [1.191573619290e+00, 1.894561164654e+00, 3.159953047019e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.200220074562e+04, -1.487972595593e+04, 7.743282709904e+02], [1.191573619290e+00, 1.894561164654e+00, 3.159953047019e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       2.656153942031e+04, TOL));
         ok(isequalRel(a,       2.656210610985e+04, TOL));
         ok(isequalRel(ecc,     4.618929629951e-03, TOL));
         ok(isequalRel(incl,    9.552192639878e-01, TOL));
         ok(isequalRel(omega,   5.667934751691e+00, TOL));
         ok(isequalRel(argp,    4.657911891002e+00, TOL));
         ok(isequalRel(nu,      1.660972656137e+00, TOL));
         ok(isequalRel(m,       1.651769492992e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
         // 28350
     });

test('[-3.990938458545e+03, 3.052983419071e+03, 4.155327006290e+03], [-5.909006188028e+00, -8.763079661834e-01, -5.039131403571e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-3.990938458545e+03, 3.052983419071e+03, 4.155327006290e+03], [-5.909006188028e+00, -8.763079661834e-01, -5.039131403571e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.514531072766e+03, TOL));
         ok(isequalRel(a,       6.514538853937e+03, TOL));
         ok(isequalRel(ecc,     1.092900560486e-03, TOL));
         ok(isequalRel(incl,    1.134427155150e+00, TOL));
         ok(isequalRel(omega,   6.026088463768e+00, TOL));
         ok(isequalRel(argp,    4.889383721756e+00, TOL));
         ok(isequalRel(nu,      3.755536003947e+00, TOL));
         ok(isequalRel(m,       3.756796077475e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-6.035523200973e+02, -2.685134745690e+03, -5.891702742823e+03], [7.572519906820e+00, -1.975656725839e+00, 1.217226051852e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-6.035523200973e+02, -2.685134745690e+03, -5.891702742823e+03], [7.572519906820e+00, -1.975656725839e+00, 1.217226051852e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.499014129580e+03, TOL));
         ok(isequalRel(a,       6.499017083751e+03, TOL));
         ok(isequalRel(ecc,     6.742081783819e-04, TOL));
         ok(isequalRel(incl,    1.134125261468e+00, TOL));
         ok(isequalRel(omega,   6.020716867456e+00, TOL));
         ok(isequalRel(argp,    2.117678045134e+00, TOL));
         ok(isequalRel(nu,      2.612214602642e+00, TOL));
         ok(isequalRel(m,       2.611533359642e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[4.788223456270e+03, 7.825616921357e+02, 4.335142846214e+03], [-4.954509025954e+00, 3.683346463780e+00, 4.804645838579e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([4.788223456270e+03, 7.825616921357e+02, 4.335142846214e+03], [-4.954509025954e+00, 3.683346463780e+00, 4.804645838579e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.499557668862e+03, TOL));
         ok(isequalRel(a,       6.499565172062e+03, TOL));
         ok(isequalRel(ecc,     1.074437396221e-03, TOL));
         ok(isequalRel(incl,    1.134399591273e+00, TOL));
         ok(isequalRel(omega,   6.015347087255e+00, TOL));
         ok(isequalRel(argp,    3.746095436251e+00, TOL));
         ok(isequalRel(nu,      3.363041521853e+00, TOL));
         ok(isequalRel(m,       3.363513879197e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-6.291846016441e+03, 1.547827907719e+03, -4.536711649769e+02], [-3.086255882484e-01, -3.341538573565e+00, -7.082659115218e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-6.291846016441e+03, 1.547827907719e+03, -4.536711649769e+02], [-3.086255882484e-01, -3.341538573565e+00, -7.082659115218e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.501402296482e+03, TOL));
         ok(isequalRel(a,       6.501408771262e+03, TOL));
         ok(isequalRel(ecc,     9.979499333660e-04, TOL));
         ok(isequalRel(incl,    1.134720407837e+00, TOL));
         ok(isequalRel(omega,   6.009336379812e+00, TOL));
         ok(isequalRel(argp,    3.562445827897e+00, TOL));
         ok(isequalRel(nu,      5.939466001665e+00, TOL));
         ok(isequalRel(m,       5.940138128610e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[4.480745734282e+03, -3.028552003741e+03, -3.586943436410e+03], [5.320920856923e+00, 1.199736274927e+00, 5.626350480560e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([4.480745734282e+03, -3.028552003741e+03, -3.586943436410e+03], [5.320920856923e+00, 1.199736274927e+00, 5.626350480560e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.488187033203e+03, TOL));
         ok(isequalRel(a,       6.488189161531e+03, TOL));
         ok(isequalRel(ecc,     5.727401464106e-04, TOL));
         ok(isequalRel(incl,    1.134500898804e+00, TOL));
         ok(isequalRel(omega,   6.003210805697e+00, TOL));
         ok(isequalRel(argp,    3.656128168897e+00, TOL));
         ok(isequalRel(nu,      1.971189384963e+00, TOL));
         ok(isequalRel(m,       1.970134326561e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-4.464246091556e+02, 2.932288725878e+03, 5.759193897566e+03], [-7.561000244696e+00, 1.550975493333e+00, -1.374970884552e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-4.464246091556e+02, 2.932288725878e+03, 5.759193897566e+03], [-7.561000244696e+00, 1.550975493333e+00, -1.374970884552e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.471209659104e+03, TOL));
         ok(isequalRel(a,       6.471217057197e+03, TOL));
         ok(isequalRel(ecc,     1.069219642677e-03, TOL));
         ok(isequalRel(incl,    1.134145052997e+00, TOL));
         ok(isequalRel(omega,   5.997629708734e+00, TOL));
         ok(isequalRel(argp,    4.991979129089e+00, TOL));
         ok(isequalRel(nu,      3.056861482628e+00, TOL));
         ok(isequalRel(m,       3.056680362185e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-3.713795818306e+03, -1.382661251301e+03, -5.122451311359e+03], [6.090931625542e+00, -3.512629732827e+00, -3.467571745776e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-3.713795818306e+03, -1.382661251301e+03, -5.122451311359e+03], [6.090931625542e+00, -3.512629732827e+00, -3.467571745776e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.467470768110e+03, TOL));
         ok(isequalRel(a,       6.467483019751e+03, TOL));
         ok(isequalRel(ecc,     1.376351918738e-03, TOL));
         ok(isequalRel(incl,    1.134265711762e+00, TOL));
         ok(isequalRel(omega,   5.992242866994e+00, TOL));
         ok(isequalRel(argp,    1.043283990638e+00, TOL));
         ok(isequalRel(nu,      3.159198185783e+00, TOL));
         ok(isequalRel(m,       3.159246696158e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[6.058320175220e+03, -8.274740672249e+02, 2.104046786506e+03], [-1.798403024273e+00, 3.787067271798e+00, 6.641439743741e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([6.058320175220e+03, -8.274740672249e+02, 2.104046786506e+03], [-1.798403024273e+00, 3.787067271798e+00, 6.641439743741e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.471009508115e+03, TOL));
         ok(isequalRel(a,       6.471020353769e+03, TOL));
         ok(isequalRel(ecc,     1.294617565144e-03, TOL));
         ok(isequalRel(incl,    1.134648573921e+00, TOL));
         ok(isequalRel(omega,   5.986363950250e+00, TOL));
         ok(isequalRel(argp,    1.361948625924e+00, TOL));
         ok(isequalRel(nu,      5.288416964379e+00, TOL));
         ok(isequalRel(m,       5.290587233593e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-5.631736590064e+03, 2.623709536436e+03, 1.766491250842e+03], [-3.216401578200e+00, -2.309140958515e+00, -6.788609120175e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-5.631736590064e+03, 2.623709536436e+03, 1.766491250842e+03], [-3.216401578200e+00, -2.309140958515e+00, -6.788609120175e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.464569948728e+03, TOL));
         ok(isequalRel(a,       6.464584575690e+03, TOL));
         ok(isequalRel(ecc,     1.504204024512e-03, TOL));
         ok(isequalRel(incl,    1.134672024906e+00, TOL));
         ok(isequalRel(omega,   5.980107043806e+00, TOL));
         ok(isequalRel(argp,    1.854335137159e+00, TOL));
         ok(isequalRel(nu,      9.807516430894e-01, TOL));
         ok(isequalRel(m,       9.782534781184e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.776849915601e+03, -3.255369419526e+03, -4.837196677900e+03], [6.748135564437e+00, -1.930448249990e-01, 4.005718697631e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.776849915601e+03, -3.255369419526e+03, -4.837196677900e+03], [6.748135564437e+00, -1.930448249990e-01, 4.005718697631e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.447530973307e+03, TOL));
         ok(isequalRel(a,       6.447548400274e+03, TOL));
         ok(isequalRel(ecc,     1.644044584100e-03, TOL));
         ok(isequalRel(incl,    1.134312497082e+00, TOL));
         ok(isequalRel(omega,   5.974125404463e+00, TOL));
         ok(isequalRel(argp,    2.055192780568e+00, TOL));
         ok(isequalRel(nu,      3.255122645661e+00, TOL));
         ok(isequalRel(m,       3.255495597846e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.148044308372e+03, 2.486073433861e+03, 5.826340759133e+03], [-7.420162295259e+00, 2.589456381879e+00, 3.563500059243e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.148044308372e+03, 2.486073433861e+03, 5.826340759133e+03], [-7.420162295259e+00, 2.589456381879e+00, 3.563500059243e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.435176429406e+03, TOL));
         ok(isequalRel(a,       6.435177529229e+03, TOL));
         ok(isequalRel(ecc,     4.134101163345e-04, TOL));
         ok(isequalRel(incl,    1.134120661345e+00, TOL));
         ok(isequalRel(omega,   5.968587540969e+00, TOL));
         ok(isequalRel(argp,    4.427155450409e+00, TOL));
         ok(isequalRel(nu,      3.376722047172e+00, TOL));
         ok(isequalRel(m,       3.376914728603e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-4.527908718278e+03, -7.232919904114e+02, -4.527446083187e+03], [5.121674217224e+00, -3.909895426836e+00, -4.500218555578e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-4.527908718278e+03, -7.232919904114e+02, -4.527446083187e+03], [5.121674217224e+00, -3.909895426836e+00, -4.500218555578e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.434767090192e+03, TOL));
         ok(isequalRel(a,       6.434780165349e+03, TOL));
         ok(isequalRel(ecc,     1.425465157565e-03, TOL));
         ok(isequalRel(incl,    1.134362130102e+00, TOL));
         ok(isequalRel(omega,   5.962978607089e+00, TOL));
         ok(isequalRel(argp,    1.054181868022e+00, TOL));
         ok(isequalRel(nu,      2.974557517523e+00, TOL));
         ok(isequalRel(m,       2.974083023159e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
         // *** error: t:= 1560.000000 *** code =   1
         // 28623
     });

test('[[-1.164535454950e+04, 9.793766835596e+02, 5.517895000578e+03], [3.407743501660e+00, -5.183094988169e+00, -4.929832772235e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.164535454950e+04, 9.793766835596e+02, 5.517895000578e+03], [3.407743501660e+00, -5.183094988169e+00, -4.929832772235e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.056859858222e+04, TOL));
         ok(isequalRel(a,       1.735669640942e+04, TOL));
         ok(isequalRel(ecc,     6.253749953957e-01, TOL));
         ok(isequalRel(incl,    4.980009029411e-01, TOL));
         ok(isequalRel(omega,   2.005709479843e+00, TOL));
         ok(isequalRel(argp,    2.972314951678e+00, TOL));
         ok(isequalRel(nu,      4.416709793252e+00, TOL));
         ok(isequalRel(m,       5.703940901115e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[5.619192522737e+03, 1.965144862280e+04, -7.261384967647e+03], [-2.013634212849e+00, 3.106842860878e+00, 2.842355165096e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([5.619192522737e+03, 1.965144862280e+04, -7.261384967647e+03], [-2.013634212849e+00, 3.106842860878e+00, 2.842355165096e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.057223529761e+04, TOL));
         ok(isequalRel(a,       1.735664725559e+04, TOL));
         ok(isequalRel(ecc,     6.252060714442e-01, TOL));
         ok(isequalRel(incl,    4.980830256012e-01, TOL));
         ok(isequalRel(omega,   2.004208645831e+00, TOL));
         ok(isequalRel(argp,    2.974773074032e+00, TOL));
         ok(isequalRel(nu,      2.531984598019e+00, TOL));
         ok(isequalRel(m,       1.408469011228e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-9.708686297137e+03, 2.630614553149e+04, -1.204294788557e+03], [-1.824164289749e+00, -9.319095958561e-01, 1.113419051843e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-9.708686297137e+03, 2.630614553149e+04, -1.204294788557e+03], [-1.824164289749e+00, -9.319095958561e-01, 1.113419051843e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.057574530052e+04, TOL));
         ok(isequalRel(a,       1.735431253119e+04, TOL));
         ok(isequalRel(ecc,     6.249787437426e-01, TOL));
         ok(isequalRel(incl,    4.982085594326e-01, TOL));
         ok(isequalRel(omega,   2.003388389356e+00, TOL));
         ok(isequalRel(argp,    2.975963132245e+00, TOL));
         ok(isequalRel(nu,      3.217306037618e+00, TOL));
         ok(isequalRel(m,       3.396884756261e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.439403162892e+04, 6.659307650738e+03, 5.593383458579e+03], [1.556522911394e+00, -4.681657613693e+00, 2.969122476380e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.439403162892e+04, 6.659307650738e+03, 5.593383458579e+03], [1.556522911394e+00, -4.681657613693e+00, 2.969122476380e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.057007781155e+04, TOL));
         ok(isequalRel(a,       1.734940697200e+04, TOL));
         ok(isequalRel(ecc,     6.251022227779e-01, TOL));
         ok(isequalRel(incl,    4.980957749536e-01, TOL));
         ok(isequalRel(omega,   2.002660645070e+00, TOL));
         ok(isequalRel(argp,    2.977192753144e+00, TOL));
         ok(isequalRel(nu,      4.076040856151e+00, TOL));
         ok(isequalRel(m,       5.385825063318e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[7.712094762697e+03, 1.556572627434e+04, -7.342404655712e+03], [-1.646800363992e+00, 4.070313571346e+00, -1.094830809489e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([7.712094762697e+03, 1.556572627434e+04, -7.342404655712e+03], [-1.646800363992e+00, 4.070313571346e+00, -1.094830809489e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.057026755952e+04, TOL));
         ok(isequalRel(a,       1.734612222540e+04, TOL));
         ok(isequalRel(ecc,     6.250011839676e-01, TOL));
         ok(isequalRel(incl,    4.980566577602e-01, TOL));
         ok(isequalRel(omega,   2.001121581976e+00, TOL));
         ok(isequalRel(argp,    2.979787251732e+00, TOL));
         ok(isequalRel(nu,      2.350737456572e+00, TOL));
         ok(isequalRel(m,       1.091960814968e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-7.558367396029e+03, 2.703511367962e+04, -2.385120541840e+03], [-1.999583791247e+00, -3.934092829965e-01, 1.078093514514e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-7.558367396029e+03, 2.703511367962e+04, -2.385120541840e+03], [-1.999583791247e+00, -3.934092829965e-01, 1.078093514514e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.057518286707e+04, TOL));
         ok(isequalRel(a,       1.734456629621e+04, TOL));
         ok(isequalRel(ecc,     6.247306804556e-01, TOL));
         ok(isequalRel(incl,    4.982190539537e-01, TOL));
         ok(isequalRel(omega,   2.000241708000e+00, TOL));
         ok(isequalRel(argp,    2.981131490430e+00, TOL));
         ok(isequalRel(nu,      3.123949627337e+00, TOL));
         ok(isequalRel(m,       3.081958011370e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.549561862220e+04, 1.155015897828e+04, 5.053831781214e+03], [4.692773362912e-01, -4.029761073285e+00, 6.790547422118e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.549561862220e+04, 1.155015897828e+04, 5.053831781214e+03], [4.692773362912e-01, -4.029761073285e+00, 6.790547422118e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.057115953427e+04, TOL));
         ok(isequalRel(a,       1.734057761519e+04, TOL));
         ok(isequalRel(ecc,     6.248041257720e-01, TOL));
         ok(isequalRel(incl,    4.981624431725e-01, TOL));
         ok(isequalRel(omega,   1.999530767317e+00, TOL));
         ok(isequalRel(argp,    2.982220394988e+00, TOL));
         ok(isequalRel(nu,      3.858943902046e+00, TOL));
         ok(isequalRel(m,       5.072660218557e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[9.167025682224e+03, 1.036365204210e+04, -6.871525760423e+03], [-8.816210273002e-01, 5.223361510353e+00, -7.406962968990e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([9.167025682224e+03, 1.036365204210e+04, -6.871525760423e+03], [-8.816210273002e-01, 5.223361510353e+00, -7.406962968990e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.056809473987e+04, TOL));
         ok(isequalRel(a,       1.733479983096e+04, TOL));
         ok(isequalRel(ecc,     6.247830071695e-01, TOL));
         ok(isequalRel(incl,    4.980219452395e-01, TOL));
         ok(isequalRel(omega,   1.998085766074e+00, TOL));
         ok(isequalRel(argp,    2.984703134726e+00, TOL));
         ok(isequalRel(nu,      2.100922125379e+00, TOL));
         ok(isequalRel(m,       7.805074740614e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-5.275802720938e+03, 2.715178486008e+04, -3.494506872161e+03], [-2.129609387811e+00, 1.501964804488e-01, 1.021038088603e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-5.275802720938e+03, 2.715178486008e+04, -3.494506872161e+03], [-2.129609387811e+00, 1.501964804488e-01, 1.021038088603e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.057442953640e+04, TOL));
         ok(isequalRel(a,       1.733480199944e+04, TOL));
         ok(isequalRel(ecc,     6.244905477618e-01, TOL));
         ok(isequalRel(incl,    4.982250705518e-01, TOL));
         ok(isequalRel(omega,   1.997094868990e+00, TOL));
         ok(isequalRel(argp,    2.986292965306e+00, TOL));
         ok(isequalRel(nu,      3.031490045493e+00, TOL));
         ok(isequalRel(m,       2.772051574029e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.560137656145e+04, 1.564129379850e+04, 4.217032668496e+03], [-2.491831233173e-01, -3.405238557031e+00, 8.882145034423e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.560137656145e+04, 1.564129379850e+04, 4.217032668496e+03], [-2.491831233173e-01, -3.405238557031e+00, 8.882145034423e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.057189383040e+04, TOL));
         ok(isequalRel(a,       1.733123294659e+04, TOL));
         ok(isequalRel(ecc,     6.245071111651e-01, TOL));
         ok(isequalRel(incl,    4.982087990959e-01, TOL));
         ok(isequalRel(omega,   1.996377914462e+00, TOL));
         ok(isequalRel(argp,    2.987315694036e+00, TOL));
         ok(isequalRel(nu,      3.699088170812e+00, TOL));
         ok(isequalRel(m,       4.764472125349e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[9.301058722997e+03, 3.883152655738e+03, -5.477864770168e+03], [8.714478212337e-01, 6.493677330817e+00, -1.885545281704e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([9.301058722997e+03, 3.883152655738e+03, -5.477864770168e+03], [8.714478212337e-01, 6.493677330817e+00, -1.885545281704e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.056588648787e+04, TOL));
         ok(isequalRel(a,       1.732184986455e+04, TOL));
         ok(isequalRel(ecc,     6.245202261218e-01, TOL));
         ok(isequalRel(incl,    4.980037469967e-01, TOL));
         ok(isequalRel(omega,   1.995167086024e+00, TOL));
         ok(isequalRel(argp,    2.989475653765e+00, TOL));
         ok(isequalRel(nu,      1.697545348109e+00, TOL));
         ok(isequalRel(m,       4.740890128887e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.914310658284e+03, 2.666520392758e+04, -4.511098143349e+03], [-2.216261908828e+00, 7.100677692327e-01, 9.406918236661e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.914310658284e+03, 2.666520392758e+04, -4.511098143349e+03], [-2.216261908828e+00, 7.100677692327e-01, 9.406918236661e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       1.057349307506e+04, TOL));
         ok(isequalRel(a,       1.732501351127e+04, TOL));
         ok(isequalRel(ecc,     6.242578356432e-01, TOL));
         ok(isequalRel(incl,    4.982265506086e-01, TOL));
         ok(isequalRel(omega,   1.993947936512e+00, TOL));
         ok(isequalRel(argp,    2.991444172479e+00, TOL));
         ok(isequalRel(nu,      2.937315397418e+00, TOL));
         ok(isequalRel(m,       2.467168050717e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
         // 28626
     });

test('[3.774000085593e+04, 1.880276872802e+04, 3.455125837297e+00], [-1.371035205968e+00, 2.752105932104e+00, 3.368828238918e-04], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([3.774000085593e+04, 1.880276872802e+04, 3.455125837297e+00], [-1.371035205968e+00, 2.752105932104e+00, 3.368828238918e-04], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.216628329558e+04, TOL));
         ok(isequalRel(a,       4.216628341172e+04, TOL));
         ok(isequalRel(ecc,     5.248254601406e-05, TOL));
         ok(isequalRel(incl,    1.368168623728e-04, TOL));
         ok(isequalRel(omega,   6.103241782478e+00, TOL));
         ok(isequalRel(argp,    6.233094044897e+00, TOL));
         ok(isequalRel(nu,      6.922562299435e-01, TOL));
         ok(isequalRel(m,       6.921892353092e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.323282515008e+04, 3.518733981802e+04, 4.989274276434e+00], [-2.565776620125e+00, 1.694193131851e+00, 1.633653544487e-04], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.323282515008e+04, 3.518733981802e+04, 4.989274276434e+00], [-2.565776620125e+00, 1.694193131851e+00, 1.633653544487e-04], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.216628874697e+04, TOL));
         ok(isequalRel(a,       4.216628880822e+04, TOL));
         ok(isequalRel(ecc,     3.811314442850e-05, TOL));
         ok(isequalRel(incl,    1.297069563414e-04, TOL));
         ok(isequalRel(omega,   6.121657764712e+00, TOL));
         ok(isequalRel(argp,    2.355562904361e-01, TOL));
         ok(isequalRel(nu,      9.132128511527e-01, TOL));
         ok(isequalRel(m,       9.131525212689e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.467442901779e+03, 4.209360909959e+04, 5.150629869589e+00], [-3.069341800053e+00, 1.799762762513e-01, -3.173887732038e-05], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.467442901779e+03, 4.209360909959e+04, 5.150629869589e+00], [-3.069341800053e+00, 1.799762762513e-01, -3.173887732038e-05], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.216629418582e+04, TOL));
         ok(isequalRel(a,       4.216629420493e+04, TOL));
         ok(isequalRel(ecc,     2.128915564641e-05, TOL));
         ok(isequalRel(incl,    1.225872489323e-04, TOL));
         ok(isequalRel(omega,   6.140307315629e+00, TOL));
         ok(isequalRel(argp,    5.819715913114e-01, TOL));
         ok(isequalRel(nu,      1.073151733387e+00, TOL));
         ok(isequalRel(m,       1.073114319711e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.896259052991e+04, 3.766166243819e+04, 4.044332575234e+00], [-2.746151981754e+00, -1.382675777466e+00, -1.976331326273e-04], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.896259052991e+04, 3.766166243819e+04, 4.044332575234e+00], [-2.746151981754e+00, -1.382675777466e+00, -1.976331326273e-04], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.216629960106e+04, TOL));
         ok(isequalRel(a,       4.216629960214e+04, TOL));
         ok(isequalRel(ecc,     5.049959995073e-06, TOL));
         ok(isequalRel(incl,    1.154617569511e-04, TOL));
         ok(isequalRel(omega,   6.159198673789e+00, TOL));
         ok(isequalRel(argp,    1.708505464751e+00, TOL));
         ok(isequalRel(nu,      4.527199825854e-01, TOL));
         ok(isequalRel(m,       4.527155647630e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-3.528500095313e+04, 2.308544402778e+04, 2.087118800595e+00], [-1.683277907554e+00, -2.572893625018e+00, -2.962820474671e-04], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-3.528500095313e+04, 2.308544402778e+04, 2.087118800595e+00], [-1.683277907554e+00, -2.572893625018e+00, -2.962820474671e-04], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.216630498792e+04, TOL));
         ok(isequalRel(a,       4.216630499992e+04, TOL));
         ok(isequalRel(ecc,     1.687344340959e-05, TOL));
         ok(isequalRel(incl,    1.083325538770e-04, TOL));
         ok(isequalRel(omega,   6.178336451170e+00, TOL));
         ok(isequalRel(argp,    3.747580330599e+00, TOL));
         ok(isequalRel(nu,      5.202684757930e+00, TOL));
         ok(isequalRel(m,       5.202714529040e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-4.210320138132e+04, 2.291062288930e+03, -1.327496350641e-01], [-1.669748164887e-01, -3.070104560267e+00, -3.110070365039e-04], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-4.210320138132e+04, 2.291062288930e+03, -1.327496350641e-01], [-1.669748164887e-01, -3.070104560267e+00, -3.110070365039e-04], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.216631034925e+04, TOL));
         ok(isequalRel(a,       4.216631039821e+04, TOL));
         ok(isequalRel(ecc,     3.407549879677e-05, TOL));
         ok(isequalRel(incl,    1.012013501095e-04, TOL));
         ok(isequalRel(omega,   6.197709232686e+00, TOL));
         ok(isequalRel(argp,    4.135698315694e+00, TOL));
         ok(isequalRel(nu,      5.320193939209e+00, TOL));
         ok(isequalRel(m,       5.320249883786e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-3.758031858370e+04, -1.912040485693e+04, -2.027557016159e+00], [1.394367847791e+00, -2.740341611982e+00, -2.485907402960e-04], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-3.758031858370e+04, -1.912040485693e+04, -2.027557016159e+00], [1.394367847791e+00, -2.740341611982e+00, -2.485907402960e-04], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.216631569473e+04, TOL));
         ok(isequalRel(a,       4.216631579673e+04, TOL));
         ok(isequalRel(ecc,     4.918143532648e-05, TOL));
         ok(isequalRel(incl,    9.407120177979e-05, TOL));
         ok(isequalRel(omega,   6.217291459128e+00, TOL));
         ok(isequalRel(argp,    4.428215217450e+00, TOL));
         ok(isequalRel(nu,      5.533109643824e+00, TOL));
         ok(isequalRel(m,       5.533176695405e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.293420761876e+04, -3.538123870806e+04, -3.164959320817e+00], [2.580167539475e+00, -1.672360950534e+00, -1.349072104218e-04], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.293420761876e+04, -3.538123870806e+04, -3.164959320817e+00], [2.580167539475e+00, -1.672360950534e+00, -1.349072104218e-04], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.216632103835e+04, TOL));
         ok(isequalRel(a,       4.216632119517e+04, TOL));
         ok(isequalRel(ecc,     6.098391755986e-05, TOL));
         ok(isequalRel(incl,    8.694673694241e-05, TOL));
         ok(isequalRel(omega,   6.237057763127e+00, TOL));
         ok(isequalRel(argp,    4.698660596091e+00, TOL));
         ok(isequalRel(nu,      5.767930670346e+00, TOL));
         ok(isequalRel(m,       5.767990768391e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.109903323895e+03, -4.211071508198e+04, -3.365078891801e+00], [3.070935368803e+00, -1.538083903627e-01, -5.854950569728e-06], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.109903323895e+03, -4.211071508198e+04, -3.365078891801e+00], [3.070935368803e+00, -1.538083903627e-01, -5.854950569728e-06], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.216632639454e+04, TOL));
         ok(isequalRel(a,       4.216632659321e+04, TOL));
         ok(isequalRel(ecc,     6.864105801929e-05, TOL));
         ok(isequalRel(incl,    7.983291097021e-05, TOL));
         ok(isequalRel(omega,   6.256996290106e+00, TOL));
         ok(isequalRel(argp,    4.961077986625e+00, TOL));
         ok(isequalRel(nu,      6.010623465194e+00, TOL));
         ok(isequalRel(m,       6.010660419651e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.928277774728e+04, -3.749559250598e+04, -2.718614618432e+00], [2.734400524359e+00, 1.406220933068e+00, 1.034861081231e-04], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.928277774728e+04, -3.749559250598e+04, -2.718614618432e+00], [2.734400524359e+00, 1.406220933068e+00, 1.034861081231e-04], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.216633177430e+04, TOL));
         ok(isequalRel(a,       4.216633199058e+04, TOL));
         ok(isequalRel(ecc,     7.161768038708e-05, TOL));
         ok(isequalRel(incl,    7.273355082748e-05, TOL));
         ok(isequalRel(omega,   6.277108550069e+00, TOL));
         ok(isequalRel(argp,    5.220369363570e+00, TOL));
         ok(isequalRel(nu,      6.256278308620e+00, TOL));
         ok(isequalRel(m,       6.256282161981e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[3.548060990600e+04, -2.277903375285e+04, -1.528418589129e+00], [1.661210675962e+00, 2.587414593138e+00, 1.682997515478e-04], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([3.548060990600e+04, -2.277903375285e+04, -1.528418589129e+00], [1.661210675962e+00, 2.587414593138e+00, 1.682997515478e-04], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.216633718226e+04, TOL));
         ok(isequalRel(a,       4.216633738715e+04, TOL));
         ok(isequalRel(ecc,     6.970674633954e-05, TOL));
         ok(isequalRel(incl,    6.565112229140e-05, TOL));
         ok(isequalRel(omega,   1.421068986777e-02, TOL));
         ok(isequalRel(argp,    5.479216046296e+00, TOL));
         ok(isequalRel(nu,      2.190182011693e-01, TOL));
         ok(isequalRel(m,       2.189879121526e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[4.211996263499e+04, -1.925775672630e+03, -1.982743315433e-01], [1.405212063672e-01, 3.071541613467e+00, 1.795611668152e-04], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([4.211996263499e+04, -1.925775672630e+03, -1.982743315433e-01], [1.405212063672e-01, 3.071541613467e+00, 1.795611668152e-04], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       4.216634261542e+04, TOL));
         ok(isequalRel(a,       4.216634278300e+04, TOL));
         ok(isequalRel(ecc,     6.304075253192e-05, TOL));
         ok(isequalRel(incl,    5.858769536820e-05, TOL));
         ok(isequalRel(omega,   3.466063919527e-02, TOL));
         ok(isequalRel(argp,    5.740143953637e+00, TOL));
         ok(isequalRel(nu,      4.626913229175e-01, TOL));
         ok(isequalRel(m,       4.626350478021e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
         // 28872
     });

test('[-5.799242561336e+03, 2.589148111188e+03, 2.011545150996e+03], [2.325207364368e+00, -4.712567240989e-02, 7.296234070991e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-5.799242561336e+03, 2.589148111188e+03, 2.011545150996e+03], [2.325207364368e+00, -4.712567240989e-02, 7.296234070991e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.526685151086e+03, TOL));
         ok(isequalRel(a,       6.532137453014e+03, TOL));
         ok(isequalRel(ecc,     2.889098117477e-02, TOL));
         ok(isequalRel(incl,    1.683710955728e+00, TOL));
         ok(isequalRel(omega,   2.757607816819e+00, TOL));
         ok(isequalRel(argp,    4.242045608476e+00, TOL));
         ok(isequalRel(nu,      2.349904176644e+00, TOL));
         ok(isequalRel(m,       2.308158331790e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-4.769050619670e+03, 2.420465805618e+03, 4.035308558368e+03], [4.464585796417e+00, -1.060923208853e+00, 6.070907874485e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-4.769050619670e+03, 2.420465805618e+03, 4.035308558368e+03], [4.464585796417e+00, -1.060923208853e+00, 6.070907874485e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.520647959172e+03, TOL));
         ok(isequalRel(a,       6.526279046695e+03, TOL));
         ok(isequalRel(ecc,     2.937401546552e-02, TOL));
         ok(isequalRel(incl,    1.683758853083e+00, TOL));
         ok(isequalRel(omega,   2.757636827441e+00, TOL));
         ok(isequalRel(argp,    4.220545967042e+00, TOL));
         ok(isequalRel(nu,      2.713880114471e+00, TOL));
         ok(isequalRel(m,       2.689015217385e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-3.175451573399e+03, 1.965987380859e+03, 5.582125696073e+03], [6.049639376478e+00, -1.935777557718e+00, 4.148607019377e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-3.175451573399e+03, 1.965987380859e+03, 5.582125696073e+03], [6.049639376478e+00, -1.935777557718e+00, 4.148607019377e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.513469311540e+03, TOL));
         ok(isequalRel(a,       6.519463020522e+03, TOL));
         ok(isequalRel(ecc,     3.032088778104e-02, TOL));
         ok(isequalRel(incl,    1.683816729883e+00, TOL));
         ok(isequalRel(omega,   2.757703761826e+00, TOL));
         ok(isequalRel(argp,    4.221648802772e+00, TOL));
         ok(isequalRel(nu,      3.052341460815e+00, TOL));
         ok(isequalRel(m,       3.046811339913e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.210190248024e+03, 1.281545412937e+03, 6.474681727721e+03], [6.920746272878e+00, -2.580517337172e+00, 1.748783867509e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.210190248024e+03, 1.281545412937e+03, 6.474681727721e+03], [6.920746272878e+00, -2.580517337172e+00, 1.748783867509e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.508121629846e+03, TOL));
         ok(isequalRel(a,       6.514342076464e+03, TOL));
         ok(isequalRel(ecc,     3.090121129435e-02, TOL));
         ok(isequalRel(incl,    1.683859143223e+00, TOL));
         ok(isequalRel(omega,   2.757806295916e+00, TOL));
         ok(isequalRel(argp,    4.247841273005e+00, TOL));
         ok(isequalRel(nu,      3.365074515700e+00, TOL));
         ok(isequalRel(m,       3.379087376721e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[8.967379953280e+02, 4.471235730478e+02, 6.607224005065e+03], [6.983396281749e+00, -2.925846167662e+00, -8.726552065311e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([8.967379953280e+02, 4.471235730478e+02, 6.607224005065e+03], [6.983396281749e+00, -2.925846167662e+00, -8.726552065311e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.506782115003e+03, TOL));
         ok(isequalRel(a,       6.512867783108e+03, TOL));
         ok(isequalRel(ecc,     3.056806871265e-02, TOL));
         ok(isequalRel(incl,    1.683867367995e+00, TOL));
         ok(isequalRel(omega,   2.757927138341e+00, TOL));
         ok(isequalRel(argp,    4.279408369525e+00, TOL));
         ok(isequalRel(nu,      3.674123865722e+00, TOL));
         ok(isequalRel(m,       3.705786451326e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.896996635344e+03, -4.400473859436e+02, 5.954926754864e+03], [6.211488246365e+00, -2.926949814866e+00, -3.433959805617e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.896996635344e+03, -4.400473859436e+02, 5.954926754864e+03], [6.211488246365e+00, -2.926949814866e+00, -3.433959805617e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.509946222022e+03, TOL));
         ok(isequalRel(a,       6.515613675243e+03, TOL));
         ok(isequalRel(ecc,     2.949282059374e-02, TOL));
         ok(isequalRel(incl,    1.683836924808e+00, TOL));
         ok(isequalRel(omega,   2.758040694520e+00, TOL));
         ok(isequalRel(argp,    4.290836164018e+00, TOL));
         ok(isequalRel(nu,      4.007195184999e+00, TOL));
         ok(isequalRel(m,       4.052760404378e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[4.545789701674e+03, -1.273559528721e+03, 4.580165129838e+03], [4.656984232729e+00, -2.568711512559e+00, -5.638510953752e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([4.545789701674e+03, -1.273559528721e+03, 4.580165129838e+03], [4.656984232729e+00, -2.568711512559e+00, -5.638510953752e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.516119499293e+03, TOL));
         ok(isequalRel(a,       6.521409740196e+03, TOL));
         ok(isequalRel(ecc,     2.848177036626e-02, TOL));
         ok(isequalRel(incl,    1.683780393443e+00, TOL));
         ok(isequalRel(omega,   2.758123203672e+00, TOL));
         ok(isequalRel(argp,    4.269917054768e+00, TOL));
         ok(isequalRel(nu,      4.378339757688e+00, TOL));
         ok(isequalRel(m,       4.432527202422e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[5.627432993706e+03, -1.947942824694e+03, 2.634167149295e+03], [2.464141046782e+00, -1.873985160836e+00, -7.195743032304e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([5.627432993706e+03, -1.947942824694e+03, 2.634167149295e+03], [2.464141046782e+00, -1.873985160836e+00, -7.195743032304e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.522284749894e+03, TOL));
         ok(isequalRel(a,       6.527508145390e+03, TOL));
         ok(isequalRel(ecc,     2.828803260517e-02, TOL));
         ok(isequalRel(incl,    1.683723680812e+00, TOL));
         ok(isequalRel(omega,   2.758163619089e+00, TOL));
         ok(isequalRel(argp,    4.235206283929e+00, TOL));
         ok(isequalRel(nu,      4.770266516375e+00, TOL));
         ok(isequalRel(m,       4.826671112807e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[5.984723185337e+03, -2.371376916090e+03, 3.498799620911e+02], [-1.212769495689e-01, -9.119815461885e-01, -7.859613893998e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([5.984723185337e+03, -2.371376916090e+03, 3.498799620911e+02], [-1.212769495689e-01, -9.119815461885e-01, -7.859613893998e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.525164595724e+03, TOL));
         ok(isequalRel(a,       6.530561464880e+03, TOL));
         ok(isequalRel(ecc,     2.874720882759e-02, TOL));
         ok(isequalRel(incl,    1.683695305033e+00, TOL));
         ok(isequalRel(omega,   2.758170853450e+00, TOL));
         ok(isequalRel(argp,    4.221875015599e+00, TOL));
         ok(isequalRel(nu,      5.148257147930e+00, TOL));
         ok(isequalRel(m,       5.199899611280e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[5.548433259218e+03, -2.480164692448e+03, -1.979243145270e+03], [-2.763269533889e+00, 1.996919153146e-01, -7.482796996303e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([5.548433259218e+03, -2.480164692448e+03, -1.979243145270e+03], [-2.763269533889e+00, 1.996919153146e-01, -7.482796996303e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.522904889010e+03, TOL));
         ok(isequalRel(a,       6.528359775329e+03, TOL));
         ok(isequalRel(ecc,     2.890618727506e-02, TOL));
         ok(isequalRel(incl,    1.683711701743e+00, TOL));
         ok(isequalRel(omega,   2.758172241885e+00, TOL));
         ok(isequalRel(argp,    4.239557097920e+00, TOL));
         ok(isequalRel(nu,      5.502142827149e+00, TOL));
         ok(isequalRel(m,       5.542222930208e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
         // 29141
     });

test('[9.318088358700e+02, -1.017178522393e+03, 6.529192445268e+03], [-2.988479182834e-01, 7.613891977075e+00, 1.226399480369e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([9.318088358700e+02, -1.017178522393e+03, 6.529192445268e+03], [-2.988479182834e-01, 7.613891977075e+00, 1.226399480369e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.654813487604e+03, TOL));
         ok(isequalRel(a,       6.654865318242e+03, TOL));
         ok(isequalRel(ecc,     2.790767404911e-03, TOL));
         ok(isequalRel(incl,    1.438561827346e+00, TOL));
         ok(isequalRel(omega,   4.773028895516e+00, TOL));
         ok(isequalRel(argp,    4.441534164675e+00, TOL));
         ok(isequalRel(nu,      3.251142425279e+00, TOL));
         ok(isequalRel(m,       3.251753930800e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-8.344906141046e+01, 6.286202084526e+03, 2.223498371606e+03], [-1.113515974336e+00, 2.530970283428e+00, -7.219445567640e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-8.344906141046e+01, 6.286202084526e+03, 2.223498371606e+03], [-1.113515974336e+00, 2.530970283428e+00, -7.219445567640e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.667409602629e+03, TOL));
         ok(isequalRel(a,       6.667415841807e+03, TOL));
         ok(isequalRel(ecc,     9.673528490398e-04, TOL));
         ok(isequalRel(incl,    1.438729223905e+00, TOL));
         ok(isequalRel(omega,   4.772663394247e+00, TOL));
         ok(isequalRel(argp,    4.519792026389e+00, TOL));
         ok(isequalRel(nu,      4.561928014795e+00, TOL));
         ok(isequalRel(m,       4.563841070107e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-9.585768122083e+02, 3.259260053478e+03, -5.722637324667e+03], [-1.012258127257e-01, -6.735338321376e+00, -3.804851872132e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-9.585768122083e+02, 3.259260053478e+03, -5.722637324667e+03], [-1.012258127257e-01, -6.735338321376e+00, -3.804851872132e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.650390494712e+03, TOL));
         ok(isequalRel(a,       6.650410410281e+03, TOL));
         ok(isequalRel(ecc,     1.730502113280e-03, TOL));
         ok(isequalRel(incl,    1.438604790616e+00, TOL));
         ok(isequalRel(omega,   4.772537561443e+00, TOL));
         ok(isequalRel(argp,    6.182791628537e+00, TOL));
         ok(isequalRel(nu,      4.292054198164e+00, TOL));
         ok(isequalRel(m,       4.295215603132e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.552561998463e+02, -5.132597629736e+03, -4.221272331177e+03], [1.077709303174e+00, -4.905938824423e+00, 5.892521263779e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.552561998463e+02, -5.132597629736e+03, -4.221272331177e+03], [1.077709303174e+00, -4.905938824423e+00, 5.892521263779e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.652088033297e+03, TOL));
         ok(isequalRel(a,       6.652090900983e+03, TOL));
         ok(isequalRel(ecc,     6.565785196579e-04, TOL));
         ok(isequalRel(incl,    1.438671535544e+00, TOL));
         ok(isequalRel(omega,   4.772082607930e+00, TOL));
         ok(isequalRel(argp,    4.413764638020e+00, TOL));
         ok(isequalRel(nu,      1.174505520790e+00, TOL));
         ok(isequalRel(m,       1.173294364920e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[8.674429509677e+02, -5.038404029333e+03, 4.256738105326e+03], [4.794475348774e-01, 5.032326445668e+00, 5.857126248379e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([8.674429509677e+02, -5.038404029333e+03, 4.256738105326e+03], [4.794475348774e-01, 5.032326445668e+00, 5.857126248379e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.646445507706e+03, TOL));
         ok(isequalRel(a,       6.646451408421e+03, TOL));
         ok(isequalRel(ecc,     9.422310831730e-04, TOL));
         ok(isequalRel(incl,    1.438670267904e+00, TOL));
         ok(isequalRel(omega,   4.772002711134e+00, TOL));
         ok(isequalRel(argp,    3.703784689029e+00, TOL));
         ok(isequalRel(nu,      3.281054437973e+00, TOL));
         ok(isequalRel(m,       3.281316580767e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[5.591688201275e+02, 3.376305879365e+03, 5.699220173906e+03], [-9.067493283052e-01, 6.646149866798e+00, -3.852331832189e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([5.591688201275e+02, 3.376305879365e+03, 5.699220173906e+03], [-9.067493283052e-01, 6.646149866798e+00, -3.852331832189e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.633848816537e+03, TOL));
         ok(isequalRel(a,       6.633879333801e+03, TOL));
         ok(isequalRel(ecc,     2.144810920918e-03, TOL));
         ok(isequalRel(incl,    1.438605427167e+00, TOL));
         ok(isequalRel(omega,   4.771545357769e+00, TOL));
         ok(isequalRel(argp,    5.029815641462e+00, TOL));
         ok(isequalRel(nu,      3.350101125732e+00, TOL));
         ok(isequalRel(m,       3.350990480714e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-6.698518420486e+02, 6.196002294840e+03, -2.281957417704e+03], [-7.958040917752e-01, -2.752114827104e+00, -7.202478519577e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-6.698518420486e+02, 6.196002294840e+03, -2.281957417704e+03], [-7.958040917752e-01, -2.752114827104e+00, -7.202478519577e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.639339077823e+03, TOL));
         ok(isequalRel(a,       6.639357504214e+03, TOL));
         ok(isequalRel(ecc,     1.665931398776e-03, TOL));
         ok(isequalRel(incl,    1.438728454721e+00, TOL));
         ok(isequalRel(omega,   4.771420543348e+00, TOL));
         ok(isequalRel(argp,    4.830416962523e+00, TOL));
         ok(isequalRel(nu,      4.948578992540e+00, TOL));
         ok(isequalRel(m,       4.951817403123e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-7.842070801930e+02, -1.278531255533e+03, -6.449198925965e+03], [6.367023798193e-01, -7.595425203451e+00, 1.431090801759e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-7.842070801930e+02, -1.278531255533e+03, -6.449198925965e+03], [6.367023798193e-01, -7.595425203451e+00, 1.431090801759e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.615185029258e+03, TOL));
         ok(isequalRel(a,       6.615191481104e+03, TOL));
         ok(isequalRel(ecc,     9.875766192070e-04, TOL));
         ok(isequalRel(incl,    1.438562435955e+00, TOL));
         ok(isequalRel(omega,   4.771044467380e+00, TOL));
         ok(isequalRel(argp,    1.401357423633e+00, TOL));
         ok(isequalRel(nu,      3.497936105017e+00, TOL));
         ok(isequalRel(m,       3.498625615272e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[4.061581165884e+02, -6.607031157990e+03, 1.483302147702e+02], [1.009818574511e+00, 2.318437654711e-01, 7.692047844379e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([4.061581165884e+02, -6.607031157990e+03, 1.483302147702e+02], [1.009818574511e+00, 2.318437654711e-01, 7.692047844379e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.625578147453e+03, TOL));
         ok(isequalRel(a,       6.625582027493e+03, TOL));
         ok(isequalRel(ecc,     7.652547772083e-04, TOL));
         ok(isequalRel(incl,    1.438752426106e+00, TOL));
         ok(isequalRel(omega,   4.770809169214e+00, TOL));
         ok(isequalRel(argp,    5.792151297858e+00, TOL));
         ok(isequalRel(nu,      5.136350963792e-01, TOL));
         ok(isequalRel(m,       5.128834615956e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[9.163491181317e+02, -8.840864924780e+02, 6.491098103617e+03], [-3.021630486618e-01, 7.669887108902e+00, 1.084336908891e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([9.163491181317e+02, -8.840864924780e+02, 6.491098103617e+03], [-3.021630486618e-01, 7.669887108902e+00, 1.084336908891e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.596739992521e+03, TOL));
         ok(isequalRel(a,       6.596790118535e+03, TOL));
         ok(isequalRel(ecc,     2.756546056247e-03, TOL));
         ok(isequalRel(incl,    1.438559063086e+00, TOL));
         ok(isequalRel(omega,   4.770556067752e+00, TOL));
         ok(isequalRel(argp,    4.434602404487e+00, TOL));
         ok(isequalRel(nu,      3.277422958907e+00, TOL));
         ok(isequalRel(m,       3.278171035304e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.040249096999e+02, 6.304318214051e+03, 1.960087398815e+03], [-1.108873823088e+00, 2.259522809253e+00, -7.351147709905e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.040249096999e+02, 6.304318214051e+03, 1.960087398815e+03], [-1.108873823088e+00, 2.259522809253e+00, -7.351147709905e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.603486587833e+03, TOL));
         ok(isequalRel(a,       6.603492629191e+03, TOL));
         ok(isequalRel(ecc,     9.564899889534e-04, TOL));
         ok(isequalRel(incl,    1.438735355273e+00, TOL));
         ok(isequalRel(omega,   4.770193881341e+00, TOL));
         ok(isequalRel(argp,    4.302031480087e+00, TOL));
         ok(isequalRel(nu,      4.818615885002e+00, TOL));
         ok(isequalRel(m,       4.820517936984e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-9.446164284893e+02, 2.872172483790e+03, -5.846941033616e+03], [-5.111768583039e-02, -6.989747075746e+00, -3.413102600335e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-9.446164284893e+02, 2.872172483790e+03, -5.846941033616e+03], [-5.111768583039e-02, -6.989747075746e+00, -3.413102600335e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.577335309378e+03, TOL));
         ok(isequalRel(a,       6.577351971602e+03, TOL));
         ok(isequalRel(ecc,     1.591625695760e-03, TOL));
         ok(isequalRel(incl,    1.438593656194e+00, TOL));
         ok(isequalRel(omega,   4.770053319995e+00, TOL));
         ok(isequalRel(argp,    4.798439029491e-02, TOL));
         ok(isequalRel(nu,      4.204475559285e+00, TOL));
         ok(isequalRel(m,       4.207258575667e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-1.871656988818e+02, -5.404861634673e+03, -3.731970576180e+03], [1.094696706449e+00, -4.412110995417e+00, 6.326060952339e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-1.871656988818e+02, -5.404861634673e+03, -3.731970576180e+03], [1.094696706449e+00, -4.412110995417e+00, 6.326060952339e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.573114294694e+03, TOL));
         ok(isequalRel(a,       6.573117905121e+03, TOL));
         ok(isequalRel(ecc,     7.411286038596e-04, TOL));
         ok(isequalRel(incl,    1.438688306850e+00, TOL));
         ok(isequalRel(omega,   4.769600577577e+00, TOL));
         ok(isequalRel(argp,    4.601919442478e+00, TOL));
         ok(isequalRel(nu,      1.071156580722e+00, TOL));
         ok(isequalRel(m,       1.069855868217e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[8.845972046733e+02, -4.465745161630e+03, 4.725836326961e+03], [3.806560278094e-01, 5.691554045613e+00, 5.303910983386e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([8.845972046733e+02, -4.465745161630e+03, 4.725836326961e+03], [3.806560278094e-01, 5.691554045613e+00, 5.303910983386e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.553909770149e+03, TOL));
         ok(isequalRel(a,       6.553920114688e+03, TOL));
         ok(isequalRel(ecc,     1.256333636802e-03, TOL));
         ok(isequalRel(incl,    1.438648390019e+00, TOL));
         ok(isequalRel(omega,   4.769517730771e+00, TOL));
         ok(isequalRel(argp,    3.721160696525e+00, TOL));
         ok(isequalRel(nu,      3.375274995895e+00, TOL));
         ok(isequalRel(m,       3.375857366264e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[4.464076723613e+02, 4.086668396204e+03, 5.093055966501e+03], [-9.824244465967e-01, 6.072965199475e+00, -4.791630681766e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([4.464076723613e+02, 4.086668396204e+03, 5.093055966501e+03], [-9.824244465967e-01, 6.072965199475e+00, -4.791630681766e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.535066319931e+03, TOL));
         ok(isequalRel(a,       6.535083408245e+03, TOL));
         ok(isequalRel(ecc,     1.617052197068e-03, TOL));
         ok(isequalRel(incl,    1.438630519984e+00, TOL));
         ok(isequalRel(omega,   4.769038308436e+00, TOL));
         ok(isequalRel(argp,    5.080732696825e+00, TOL));
         ok(isequalRel(nu,      3.441373946322e+00, TOL));
         ok(isequalRel(m,       3.442330121509e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-7.522446749459e+02, 5.588354733011e+03, -3.275040925732e+03], [-6.611613700329e-01, -4.016290740302e+00, -6.676898026330e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-7.522446749459e+02, 5.588354733011e+03, -3.275040925732e+03], [-6.611613700329e-01, -4.016290740302e+00, -6.676898026330e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.523139137493e+03, TOL));
         ok(isequalRel(a,       6.523156004630e+03, TOL));
         ok(isequalRel(ecc,     1.608021315605e-03, TOL));
         ok(isequalRel(incl,    1.438703384846e+00, TOL));
         ok(isequalRel(omega,   4.768947078294e+00, TOL));
         ok(isequalRel(argp,    5.023523928243e+00, TOL));
         ok(isequalRel(nu,      4.932554834367e+00, TOL));
         ok(isequalRel(m,       4.935692418022e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-6.437287252548e+02, -2.585025285602e+03, -5.923013066083e+03], [8.079221418095e-01, -7.171597814175e+00, 3.041115058342e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-6.437287252548e+02, -2.585025285602e+03, -5.923013066083e+03], [8.079221418095e-01, -7.171597814175e+00, 3.041115058342e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.490085965241e+03, TOL));
         ok(isequalRel(a,       6.490089087918e+03, TOL));
         ok(isequalRel(ecc,     6.936464890584e-04, TOL));
         ok(isequalRel(incl,    1.438583151404e+00, TOL));
         ok(isequalRel(omega,   4.768502956842e+00, TOL));
         ok(isequalRel(argp,    2.147512766683e+00, TOL));
         ok(isequalRel(nu,      2.967513492439e+00, TOL));
         ok(isequalRel(m,       2.967273088337e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[5.844029581851e+02, -6.202356058171e+03, 1.781005360194e+03], [8.692504496186e-01, 2.226927513957e+00, 7.471676764710e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([5.844029581851e+02, -6.202356058171e+03, 1.781005360194e+03], [8.692504496186e-01, 2.226927513957e+00, 7.471676764710e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.481801128026e+03, TOL));
         ok(isequalRel(a,       6.481802033257e+03, TOL));
         ok(isequalRel(ecc,     3.737073375169e-04, TOL));
         ok(isequalRel(incl,    1.438741087827e+00, TOL));
         ok(isequalRel(omega,   4.768351809548e+00, TOL));
         ok(isequalRel(argp,    1.280936040457e-01, TOL));
         ok(isequalRel(nu,      1.528744208093e-01, TOL));
         ok(isequalRel(m,       1.527606362809e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[7.795921176491e+02, 1.100737283015e+03, 6.311595294805e+03], [-5.995523048656e-01, 7.721032522310e+00, -1.275153026528e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([7.795921176491e+02, 1.100737283015e+03, 6.311595294805e+03], [-5.995523048656e-01, 7.721032522310e+00, -1.275153026528e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.437470457748e+03, TOL));
         ok(isequalRel(a,       6.437513987191e+03, TOL));
         ok(isequalRel(ecc,     2.600353921139e-03, TOL));
         ok(isequalRel(incl,    1.438555719160e+00, TOL));
         ok(isequalRel(omega,   4.767981317564e+00, TOL));
         ok(isequalRel(argp,    4.748930873530e+00, TOL));
         ok(isequalRel(nu,      3.269362202321e+00, TOL));
         ok(isequalRel(m,       3.270026171986e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-4.030315558768e+02, 6.399180008372e+03, -3.641273587499e+02], [-1.008861923884e+00, -5.166366152128e-01, -7.799812287320e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-4.030315558768e+02, 6.399180008372e+03, -3.641273587499e+02], [-1.008861923884e+00, -5.166366152128e-01, -7.799812287320e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.427941398231e+03, TOL));
         ok(isequalRel(a,       6.427955397644e+03, TOL));
         ok(isequalRel(ecc,     1.475769388942e-03, TOL));
         ok(isequalRel(incl,    1.438758013840e+00, TOL));
         ok(isequalRel(omega,   4.767745285928e+00, TOL));
         ok(isequalRel(argp,    4.117578552992e+00, TOL));
         ok(isequalRel(nu,      5.364426811137e+00, TOL));
         ok(isequalRel(m,       5.366771263164e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-8.529391007119e+02, 1.926523202273e+02, -6.322470547838e+03], [3.960061942603e-01, -7.882964919438e+00, -2.893315173451e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-8.529391007119e+02, 1.926523202273e+02, -6.322470547838e+03], [3.960061942603e-01, -7.882964919438e+00, -2.893315173451e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.375606463225e+03, TOL));
         ok(isequalRel(a,       6.375616078466e+03, TOL));
         ok(isequalRel(ecc,     1.228058368261e-03, TOL));
         ok(isequalRel(incl,    1.438548458236e+00, TOL));
         ok(isequalRel(omega,   4.767458789224e+00, TOL));
         ok(isequalRel(argp,    1.079834071648e+00, TOL));
         ok(isequalRel(nu,      3.595052659694e+00, TOL));
         ok(isequalRel(m,       3.596129523039e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
         // *** error: t:= 440.000000 *** code =   6
         // 29238
     });

test('[4.474279154954e+03, -1.447722861416e+03, 4.619839272345e+03], [4.712595821980e+00, 5.668306152772e+00, -2.701606741039e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([4.474279154954e+03, -1.447722861416e+03, 4.619839272345e+03], [4.712595821980e+00, 5.668306152772e+00, -2.701606741039e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.719657783929e+03, TOL));
         ok(isequalRel(a,       6.722581964710e+03, TOL));
         ok(isequalRel(ecc,     2.085614589579e-02, TOL));
         ok(isequalRel(incl,    8.996688700562e-01, TOL));
         ok(isequalRel(omega,   3.723491805305e+00, TOL));
         ok(isequalRel(argp,    1.647769568203e+00, TOL));
         ok(isequalRel(nu,      3.856684162202e-01, TOL));
         ok(isequalRel(m,       3.702018396986e-01, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[1.922177124743e+03, 5.113011383417e+03, -4.087084702033e+03], [-6.490769650541e+00, -5.223501575279e-01, -3.896001153601e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.922177124743e+03, 5.113011383417e+03, -4.087084702033e+03], [-6.490769650541e+00, -5.223501575279e-01, -3.896001153601e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.721927099419e+03, TOL));
         ok(isequalRel(a,       6.724846490205e+03, TOL));
         ok(isequalRel(ecc,     2.083554807806e-02, TOL));
         ok(isequalRel(incl,    8.998223333854e-01, TOL));
         ok(isequalRel(omega,   3.716810828037e+00, TOL));
         ok(isequalRel(argp,    1.659025131101e+00, TOL));
         ok(isequalRel(nu,      2.353467440563e+00, TOL));
         ok(isequalRel(m,       2.323593557526e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-6.157935468821e+03, -2.094707987903e+03, -1.941637309598e+03], [1.499006608594e-01, -5.175192523207e+00, 5.604262034415e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-6.157935468821e+03, -2.094707987903e+03, -1.941637309598e+03], [1.499006608594e-01, -5.175192523207e+00, 5.604262034415e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.727031374135e+03, TOL));
         ok(isequalRel(a,       6.729866219855e+03, TOL));
         ok(isequalRel(ecc,     2.052397602446e-02, TOL));
         ok(isequalRel(incl,    9.001439832273e-01, TOL));
         ok(isequalRel(omega,   3.708561249006e+00, TOL));
         ok(isequalRel(argp,    1.650569749026e+00, TOL));
         ok(isequalRel(nu,      4.258859852930e+00, TOL));
         ok(isequalRel(m,       4.296006363366e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.482640524109e+03, -3.268459445550e+03, 5.146380061902e+03], [6.501814698230e+00, 4.402848753801e+00, -3.509435107562e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.482640524109e+03, -3.268459445550e+03, 5.146380061902e+03], [6.501814698230e+00, 4.402848753801e+00, -3.509435107562e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.716249724923e+03, TOL));
         ok(isequalRel(a,       6.719024402339e+03, TOL));
         ok(isequalRel(ecc,     2.032137735504e-02, TOL));
         ok(isequalRel(incl,    8.995293188432e-01, TOL));
         ok(isequalRel(omega,   3.701325170090e+00, TOL));
         ok(isequalRel(argp,    1.680134962843e+00, TOL));
         ok(isequalRel(nu,      6.229835386726e+00, TOL));
         ok(isequalRel(m,       6.231970099779e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[4.036264552866e+03, 4.827433472010e+03, -2.507990639548e+03], [-5.184409515423e+00, 1.772280694717e+00, -5.331390167990e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([4.036264552866e+03, 4.827433472010e+03, -2.507990639548e+03], [-5.184409515423e+00, 1.772280694717e+00, -5.331390167990e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.725228003142e+03, TOL));
         ok(isequalRel(a,       6.728054020044e+03, TOL));
         ok(isequalRel(ecc,     2.049475083034e-02, TOL));
         ok(isequalRel(incl,    9.000798798682e-01, TOL));
         ok(isequalRel(omega,   3.694258870868e+00, TOL));
         ok(isequalRel(argp,    1.704954140322e+00, TOL));
         ok(isequalRel(nu,      1.928906360214e+00, TOL));
         ok(isequalRel(m,       1.890311747313e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-5.776813716215e+03, -1.186415531930e+02, -3.641220524182e+03], [-2.539917206750e+00, -5.622701582125e+00, 4.403125405190e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-5.776813716215e+03, -1.186415531930e+02, -3.641220524182e+03], [-2.539917206750e+00, -5.622701582125e+00, 4.403125405190e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.721987462883e+03, TOL));
         ok(isequalRel(a,       6.724826415609e+03, TOL));
         ok(isequalRel(ecc,     2.054653257801e-02, TOL));
         ok(isequalRel(incl,    8.999090117889e-01, TOL));
         ok(isequalRel(omega,   3.685929688621e+00, TOL));
         ok(isequalRel(argp,    1.696652161771e+00, TOL));
         ok(isequalRel(nu,      3.837856027087e+00, TOL));
         ok(isequalRel(m,       3.864525427033e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[6.798699486521e+01, -4.456492134728e+03, 4.863717942833e+03], [7.183809419588e+00, 2.418917791052e+00, 2.015642495218e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([6.798699486521e+01, -4.456492134728e+03, 4.863717942833e+03], [7.183809419588e+00, 2.418917791052e+00, 2.015642495218e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.716507435580e+03, TOL));
         ok(isequalRel(a,       6.719331151834e+03, TOL));
         ok(isequalRel(ecc,     2.049969994571e-02, TOL));
         ok(isequalRel(incl,    8.996078219187e-01, TOL));
         ok(isequalRel(omega,   3.679172839755e+00, TOL));
         ok(isequalRel(argp,    1.714458963261e+00, TOL));
         ok(isequalRel(nu,      5.795730699433e+00, TOL));
         ok(isequalRel(m,       5.814675889982e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[5.520622070379e+03, 3.782382035542e+03, -5.967319316081e+02], [-3.027966069347e+00, 3.754152524768e+00, -6.013506362859e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([5.520622070379e+03, 3.782382035542e+03, -5.967319316081e+02], [-3.027966069347e+00, 3.754152524768e+00, -6.013506362859e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.726684513704e+03, TOL));
         ok(isequalRel(a,       6.729584553449e+03, TOL));
         ok(isequalRel(ecc,     2.075906782496e-02, TOL));
         ok(isequalRel(incl,    9.002299697879e-01, TOL));
         ok(isequalRel(omega,   3.671486852070e+00, TOL));
         ok(isequalRel(argp,    1.742303854431e+00, TOL));
         ok(isequalRel(nu,      1.512897595518e+00, TOL));
         ok(isequalRel(m,       1.471489306236e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-4.528051044554e+03, 1.808462733292e+03, -4.816997277621e+03], [-4.808419762697e+00, -5.185789344828e+00, 2.642104493777e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-4.528051044554e+03, 1.808462733292e+03, -4.816997277621e+03], [-4.808419762697e+00, -5.185789344828e+00, 2.642104493777e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.716781089744e+03, TOL));
         ok(isequalRel(a,       6.719740800681e+03, TOL));
         ok(isequalRel(ecc,     2.098690457849e-02, TOL));
         ok(isequalRel(incl,    8.996654198839e-01, TOL));
         ok(isequalRel(omega,   3.663523025499e+00, TOL));
         ok(isequalRel(argp,    1.722861308306e+00, TOL));
         ok(isequalRel(nu,      3.446394713721e+00, TOL));
         ok(isequalRel(m,       3.459182853549e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.356614680779e+03, -4.852512022719e+03, 3.856538161837e+03], [6.688446735149e+00, 1.185209579825e-01, 4.021854210077e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.356614680779e+03, -4.852512022719e+03, 3.856538161837e+03], [6.688446735149e+00, 1.185209579825e-01, 4.021854210077e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.719463719033e+03, TOL));
         ok(isequalRel(a,       6.722415136345e+03, TOL));
         ok(isequalRel(ecc,     2.095331036873e-02, TOL));
         ok(isequalRel(incl,    8.998463125580e-01, TOL));
         ok(isequalRel(omega,   3.656832378349e+00, TOL));
         ok(isequalRel(argp,    1.719725905812e+00, TOL));
         ok(isequalRel(nu,      5.400295422210e+00, TOL));
         ok(isequalRel(m,       5.432349908996e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[6.149658001344e+03, 2.173594232607e+03, 1.369294887325e+03], [-3.458327771842e-01, 5.109857861076e+00, -5.842951828175e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([6.149658001344e+03, 2.173594232607e+03, 1.369294887325e+03], [-3.458327771842e-01, 5.109857861076e+00, -5.842951828175e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.724921911660e+03, TOL));
         ok(isequalRel(a,       6.727922546357e+03, TOL));
         ok(isequalRel(ecc,     2.111864606986e-02, TOL));
         ok(isequalRel(incl,    9.001902096084e-01, TOL));
         ok(isequalRel(omega,   3.648645507378e+00, TOL));
         ok(isequalRel(argp,    1.747846293805e+00, TOL));
         ok(isequalRel(nu,      1.128396722726e+00, TOL));
         ok(isequalRel(m,       1.090485319290e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.629550114488e+03, 3.400980401577e+03, -5.344382171288e+03], [-6.368548448364e+00, -3.998963508932e+00, 5.772530637682e-01], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.629550114488e+03, 3.400980401577e+03, -5.344382171288e+03], [-6.368548448364e+00, -3.998963508932e+00, 5.772530637682e-01], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.713476316757e+03, TOL));
         ok(isequalRel(a,       6.716501912989e+03, TOL));
         ok(isequalRel(ecc,     2.122432630575e-02, TOL));
         ok(isequalRel(incl,    8.995337568143e-01, TOL));
         ok(isequalRel(omega,   3.641280539566e+00, TOL));
         ok(isequalRel(argp,    1.724247704599e+00, TOL));
         ok(isequalRel(nu,      3.087220305974e+00, TOL));
         ok(isequalRel(m,       3.084876215350e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
         // 88888
     });

test('[1.020692345577e+03, 2.286562606342e+03, -6.191555659270e+03], [-3.746543902234e+00, 6.467532720713e+00, 1.827985678143e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([1.020692345577e+03, 2.286562606342e+03, -6.191555659270e+03], [-3.746543902234e+00, 6.467532720713e+00, 1.827985678143e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.625280719812e+03, TOL));
         ok(isequalRel(a,       6.626014152838e+03, TOL));
         ok(isequalRel(ecc,     1.052092807260e-02, TOL));
         ok(isequalRel(incl,    1.271172110652e+00, TOL));
         ok(isequalRel(omega,   2.020219537145e+00, TOL));
         ok(isequalRel(argp,    1.108912409016e+00, TOL));
         ok(isequalRel(nu,      3.847874084449e+00, TOL));
         ok(isequalRel(m,       3.861612757496e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-3.226543491554e+03, 3.503709775249e+03, 4.532809793430e+03], [1.000992116067e+00, -5.788042888412e+00, 5.162585825662e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-3.226543491554e+03, 3.503709775249e+03, 4.532809793430e+03], [1.000992116067e+00, -5.788042888412e+00, 5.162585825662e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.633031090700e+03, TOL));
         ok(isequalRel(a,       6.633574667284e+03, TOL));
         ok(isequalRel(ecc,     9.052250412713e-03, TOL));
         ok(isequalRel(incl,    1.271350239926e+00, TOL));
         ok(isequalRel(omega,   2.016829095817e+00, TOL));
         ok(isequalRel(argp,    1.042986910602e+00, TOL));
         ok(isequalRel(nu,      6.046148101654e+00, TOL));
         ok(isequalRel(m,       6.050371571658e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.456107065334e+03, -6.071938555030e+03, 1.222897685538e+03], [2.679390040234e+00, -4.482908110761e-01, -7.228792154938e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.456107065334e+03, -6.071938555030e+03, 1.222897685538e+03], [2.679390040234e+00, -4.482908110761e-01, -7.228792154938e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.641707289737e+03, TOL));
         ok(isequalRel(a,       6.642309435299e+03, TOL));
         ok(isequalRel(ecc,     9.521189153082e-03, TOL));
         ok(isequalRel(incl,    1.271554894215e+00, TOL));
         ok(isequalRel(omega,   2.012808612484e+00, TOL));
         ok(isequalRel(argp,    1.034231072197e+00, TOL));
         ok(isequalRel(nu,      1.914091192733e+00, TOL));
         ok(isequalRel(m,       1.896116972636e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[7.871645734899e+02, 2.719918009460e+03, -6.043866620243e+03], [-3.759883838595e+00, 6.277439314037e+00, 2.397897863858e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([7.871645734899e+02, 2.719918009460e+03, -6.043866620243e+03], [-3.759883838595e+00, 6.277439314037e+00, 2.397897863858e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.625964322201e+03, TOL));
         ok(isequalRel(a,       6.626664995046e+03, TOL));
         ok(isequalRel(ecc,     1.028277032065e-02, TOL));
         ok(isequalRel(incl,    1.271190383408e+00, TOL));
         ok(isequalRel(omega,   2.009042359582e+00, TOL));
         ok(isequalRel(argp,    1.105486484401e+00, TOL));
         ok(isequalRel(nu,      3.931537311526e+00, TOL));
         ok(isequalRel(m,       3.946224861887e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-3.110976480293e+03, 3.121730262353e+03, 4.878152170355e+03], [1.244916055994e+00, -6.124880424955e+00, 4.700576353428e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-3.110976480293e+03, 3.121730262353e+03, 4.878152170355e+03], [1.244916055994e+00, -6.124880424955e+00, 4.700576353428e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.631426011953e+03, TOL));
         ok(isequalRel(a,       6.631939140117e+03, TOL));
         ok(isequalRel(ecc,     8.796150676142e-03, TOL));
         ok(isequalRel(incl,    1.271315310465e+00, TOL));
         ok(isequalRel(omega,   2.005677049072e+00, TOL));
         ok(isequalRel(argp,    1.030217934101e+00, TOL));
         ok(isequalRel(nu,      6.142192224381e+00, TOL));
         ok(isequalRel(m,       6.144648352357e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.567562296951e+03, -6.112503839223e+03, 7.139637443537e+02], [2.440245751324e+00, 9.810900213933e-02, -7.319959258254e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.567562296951e+03, -6.112503839223e+03, 7.139637443537e+02], [2.440245751324e+00, 9.810900213933e-02, -7.319959258254e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.642037995413e+03, TOL));
         ok(isequalRel(a,       6.642621281760e+03, TOL));
         ok(isequalRel(ecc,     9.370681122593e-03, TOL));
         ok(isequalRel(incl,    1.271565197423e+00, TOL));
         ok(isequalRel(omega,   2.001695070115e+00, TOL));
         ok(isequalRel(argp,    1.026599628709e+00, TOL));
         ok(isequalRel(nu,      2.002708132273e+00, TOL));
         ok(isequalRel(m,       1.985637845032e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[5.560566178034e+02, 3.144522882008e+03, -5.855346361782e+03], [-3.754660143253e+00, 6.044752775392e+00, 2.957941671728e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([5.560566178034e+02, 3.144522882008e+03, -5.855346361782e+03], [-3.754660143253e+00, 6.044752775392e+00, 2.957941671728e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.626844468362e+03, TOL));
         ok(isequalRel(a,       6.627511386587e+03, TOL));
         ok(isequalRel(ecc,     1.003138852591e-02, TOL));
         ok(isequalRel(incl,    1.271213220945e+00, TOL));
         ok(isequalRel(omega,   1.997867733283e+00, TOL));
         ok(isequalRel(argp,    1.097062999175e+00, TOL));
         ok(isequalRel(nu,      4.020955344172e+00, TOL));
         ok(isequalRel(m,       4.036484662356e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.982479405393e+03, 2.712616637110e+03, 5.192323304719e+03], [1.475566773233e+00, -6.427737013518e+00, 4.202420226902e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.982479405393e+03, 2.712616637110e+03, 5.192323304719e+03], [1.475566773233e+00, -6.427737013518e+00, 4.202420226902e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.629861163234e+03, TOL));
         ok(isequalRel(a,       6.630345581359e+03, TOL));
         ok(isequalRel(ecc,     8.547559047484e-03, TOL));
         ok(isequalRel(incl,    1.271281327062e+00, TOL));
         ok(isequalRel(omega,   1.994518241004e+00, TOL));
         ok(isequalRel(argp,    1.011057134470e+00, TOL));
         ok(isequalRel(nu,      6.245283000327e+00, TOL));
         ok(isequalRel(m,       6.245926663275e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.663089643522e+03, -6.115482908846e+03, 1.964007286646e+02], [2.196121563878e+00, 6.524150925789e-01, -7.362824152460e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.663089643522e+03, -6.115482908846e+03, 1.964007286646e+02], [2.196121563878e+00, 6.524150925789e-01, -7.362824152460e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.642137015938e+03, TOL));
         ok(isequalRel(a,       6.642702794748e+03, TOL));
         ok(isequalRel(ecc,     9.228920995253e-03, TOL));
         ok(isequalRel(incl,    1.271570115150e+00, TOL));
         ok(isequalRel(omega,   1.990582381545e+00, TOL));
         ok(isequalRel(argp,    1.013915656513e+00, TOL));
         ok(isequalRel(nu,      2.096871623755e+00, TOL));
         ok(isequalRel(m,       2.080854087559e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[3.285499967384e+02, 3.557094905520e+03, -5.626214272111e+03], [-3.731193288240e+00, 5.769341171972e+00, 3.504058730818e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([3.285499967384e+02, 3.557094905520e+03, -5.626214272111e+03], [-3.731193288240e+00, 5.769341171972e+00, 3.504058730818e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.627900352691e+03, TOL));
         ok(isequalRel(a,       6.628534299831e+03, TOL));
         ok(isequalRel(ecc,     9.779525182704e-03, TOL));
         ok(isequalRel(incl,    1.271240143893e+00, TOL));
         ok(isequalRel(omega,   1.986696462737e+00, TOL));
         ok(isequalRel(argp,    1.083095822700e+00, TOL));
         ok(isequalRel(nu,      4.116685011800e+00, TOL));
         ok(isequalRel(m,       4.132941784111e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[-2.842068767573e+03, 2.278423434920e+03, 5.472334371496e+03], [1.691852635382e+00, -6.693216334930e+00, 3.671022711877e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([-2.842068767573e+03, 2.278423434920e+03, 5.472334371496e+03], [1.691852635382e+00, -6.693216334930e+00, 3.671022711877e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.628379251026e+03, TOL));
         ok(isequalRel(a,       6.628838386695e+03, TOL));
         ok(isequalRel(ecc,     8.322461617424e-03, TOL));
         ok(isequalRel(incl,    1.271249290598e+00, TOL));
         ok(isequalRel(omega,   1.983352835854e+00, TOL));
         ok(isequalRel(argp,    9.852497398353e-01, TOL));
         ok(isequalRel(nu,      7.247449604514e-02, TOL));
         ok(isequalRel(m,       7.127668165083e-02, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });

test('[2.742553988317e+03, -6.079670091229e+03, -3.263901264921e+02], [1.948497651478e+00, 1.211072678443e+00, -7.356193131278e+00], 3.986004418000e+05',
     function () {
         expect(11);
         var rets = rv2coe([2.742553988317e+03, -6.079670091229e+03, -3.263901264921e+02], [1.948497651478e+00, 1.211072678443e+00, -7.356193131278e+00], 3.986004418000e+05),
         TOL         = 0.000001,
         p           = rets.shift(),
         a           = rets.shift(),
         ecc         = rets.shift(),
         incl        = rets.shift(),
         omega       = rets.shift(),
         argp        = rets.shift(),
         nu          = rets.shift(),
         m           = rets.shift(),
         arglat      = rets.shift(),
         truelon     = rets.shift(),
         lonper      = rets.shift();
         ok(isequalRel(p,       6.641994238861e+03, TOL));
         ok(isequalRel(a,       6.642545324665e+03, TOL));
         ok(isequalRel(ecc,     9.108405326374e-03, TOL));
         ok(isequalRel(incl,    1.271569416426e+00, TOL));
         ok(isequalRel(omega,   1.979469619232e+00, TOL));
         ok(isequalRel(argp,    9.963172878601e-01, TOL));
         ok(isequalRel(nu,      2.196448877477e+00, TOL));
         ok(isequalRel(m,       2.181623524669e+00, TOL));
         ok(isequalRel(arglat,  9.999991000000e+05, TOL));
         ok(isequalRel(truelon, 9.999991000000e+05, TOL));
         ok(isequalRel(lonper,  9.999991000000e+05, TOL));
     });



