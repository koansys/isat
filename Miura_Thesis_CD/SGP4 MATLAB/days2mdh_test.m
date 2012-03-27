%% Cheating here as I used Octave to generate these expected results

[m, d, hr, mm, ss] = days2mdh(2000, 1);
assert(isequal([m, d, hr, mm, ss], [1, 1, 0, 0, 0]));

[m, d, hr, mm, ss] = days2mdh(2012, 39);
assert(isequal([m, d, hr, mm, ss], [2, 8, 0, 0, 0]));

[m, d, hr, mm, ss] = days2mdh(2012, 39.015625);
assert(isequal([m, d, hr, mm, ss], [2, 8, 0, 22, 30]));

[m, d, hr, mm, ss] = days2mdh(2100, 365);
assert(isequal([m, d, hr, mm, ss], [12, 30, 0, 0, 0]));

%% From running octave testmat.m...
TOL = 0.00000001;

[mon,day,hr,minute,sec] = days2mdh(2000, 179.784950620000);
assert(isequal(mon,    6));
assert(isequal(day,    27));
assert(isequal(hr,     18));
assert(isequal(minute, 50));
assert(isequalRel(sec, 19.733567999083, TOL));
# 5

[mon,day,hr,minute,sec] = days2mdh(2004, 31.910709590000);
assert(isequal(mon,    1));
assert(isequal(day,    31));
assert(isequal(hr,     21));
assert(isequal(minute, 51));
assert(isequalRel(sec, 25.308575999977, TOL));
# 4632

[mon,day,hr,minute,sec] = days2mdh(2006, 176.824120140000);
assert(isequal(mon,    6));
assert(isequal(day,    25));
assert(isequal(hr,     19));
assert(isequal(minute, 46));
assert(isequalRel(sec, 43.980095999214, TOL));
# 6251

[mon,day,hr,minute,sec] = days2mdh(2006, 176.332154440000);
assert(isequal(mon,    6));
assert(isequal(day,    25));
assert(isequal(hr,     7));
assert(isequal(minute, 58));
assert(isequalRel(sec, 18.143616000925, TOL));
# 8195

[mon,day,hr,minute,sec] = days2mdh(2006, 176.561574750000);
assert(isequal(mon,    6));
assert(isequal(day,    25));
assert(isequal(hr,     13));
assert(isequal(minute, 28));
assert(isequalRel(sec, 40.058400000471, TOL));
# 9880

[mon,day,hr,minute,sec] = days2mdh(2005, 148.794179280000);
assert(isequal(mon,    5));
assert(isequal(day,    28));
assert(isequal(hr,     19));
assert(isequal(minute, 3));
assert(isequalRel(sec, 37.089792000752, TOL));
# 9998

[mon,day,hr,minute,sec] = days2mdh(1980, 230.296297880000);
assert(isequal(mon,    8));
assert(isequal(day,    17));
assert(isequal(hr,     7));
assert(isequal(minute, 6));
assert(isequalRel(sec, 40.136831999771, TOL));
# 11801

[mon,day,hr,minute,sec] = days2mdh(2006, 176.028448930000);
assert(isequal(mon,    6));
assert(isequal(day,    25));
assert(isequal(hr,     0));
assert(isequal(minute, 40));
assert(isequalRel(sec, 57.987551999668, TOL));
# 14128

[mon,day,hr,minute,sec] = days2mdh(2006, 151.674157710000);
assert(isequal(mon,    5));
assert(isequal(day,    31));
assert(isequal(hr,     16));
assert(isequal(minute, 10));
assert(isequalRel(sec, 47.226144000251, TOL));
# 16925
#dayofyr=363
#mon=12 day=29
#hr=19 minute=0 sec=0.000288

[mon,day,hr,minute,sec] = days2mdh(2005, 363.791666670000);
assert(isequal(mon,    12));
assert(isequal(day,    29));
assert(isequal(hr,     19));
assert(isequal(minute, 0));
assert(isequalRel(sec, 0.000287998591, TOL));
# 20413

[mon,day,hr,minute,sec] = days2mdh(2006, 176.023412440000);
assert(isequal(mon,    6));
assert(isequal(day,    25));
assert(isequal(hr,     0));
assert(isequal(minute, 33));
assert(isequalRel(sec, 42.834815998885, TOL));
# 21897

[mon,day,hr,minute,sec] = days2mdh(2006, 94.462359120000);
assert(isequal(mon,    4));
assert(isequal(day,    4));
assert(isequal(hr,     11));
assert(isequal(minute, 5));
assert(isequalRel(sec, 47.827968000183, TOL));
# 22312
# *** error: t:= 494.202867 *** code =   1

[mon,day,hr,minute,sec] = days2mdh(2006, 176.559091070000);
assert(isequal(mon,    6));
assert(isequal(day,    25));
assert(isequal(hr,     13));
assert(isequal(minute, 25));
assert(isequalRel(sec, 5.468447999465, TOL));
# 22674

[mon,day,hr,minute,sec] = days2mdh(2006, 175.457520520000);
assert(isequal(mon,    6));
assert(isequal(day,    24));
assert(isequal(hr,     10));
assert(isequal(minute, 58));
assert(isequalRel(sec, 49.772928000239, TOL));
# 23177

[mon,day,hr,minute,sec] = days2mdh(1994, 305.499999990000);
assert(isequal(mon,    11));
assert(isequal(day,    1));
assert(isequal(hr,     11));
assert(isequal(minute, 59));
assert(isequalRel(sec, 59.999135999315, TOL));
# 23333

[mon,day,hr,minute,sec] = days2mdh(2006, 171.765354630000);
assert(isequal(mon,    6));
assert(isequal(day,    20));
assert(isequal(hr,     18));
assert(isequal(minute, 22));
assert(isequalRel(sec, 6.640031999159, TOL));
# 23599

[mon,day,hr,minute,sec] = days2mdh(2006, 177.040617400000);
assert(isequal(mon,    6));
assert(isequal(day,    26));
assert(isequal(hr,     0));
assert(isequal(minute, 58));
assert(isequalRel(sec, 29.343360000184, TOL));
# 24208

[mon,day,hr,minute,sec] = days2mdh(2004, 39.680572850000);
assert(isequal(mon,    2));
assert(isequal(day,    8));
assert(isequal(hr,     16));
assert(isequal(minute, 20));
assert(isequalRel(sec, 1.494239999761, TOL));
# 25954

[mon,day,hr,minute,sec] = days2mdh(2006, 106.745032470000);
assert(isequal(mon,    4));
assert(isequal(day,    16));
assert(isequal(hr,     17));
assert(isequal(minute, 52));
assert(isequalRel(sec, 50.805407999842, TOL));
# 26900

[mon,day,hr,minute,sec] = days2mdh(2006, 174.858188710000);
assert(isequal(mon,    6));
assert(isequal(day,    23));
assert(isequal(hr,     20));
assert(isequal(minute, 35));
assert(isequalRel(sec, 47.504544000640, TOL));
# 26975

[mon,day,hr,minute,sec] = days2mdh(2006, 177.786158330000);
assert(isequal(mon,    6));
assert(isequal(day,    26));
assert(isequal(hr,     18));
assert(isequal(minute, 52));
assert(isequalRel(sec, 4.079712000548, TOL));
# 28057

[mon,day,hr,minute,sec] = days2mdh(2006, 175.570711360000);
assert(isequal(mon,    6));
assert(isequal(day,    24));
assert(isequal(hr,     13));
assert(isequal(minute, 41));
assert(isequalRel(sec, 49.461503999137, TOL));
# 28129

[mon,day,hr,minute,sec] = days2mdh(2006, 167.217886660000);
assert(isequal(mon,    6));
assert(isequal(day,    16));
assert(isequal(hr,     5));
assert(isequal(minute, 13));
assert(isequalRel(sec, 45.407424000423, TOL));
# 28350
# *** error: t:= 1560.000000 *** code =   1

[mon,day,hr,minute,sec] = days2mdh(2006, 177.810791840000);
assert(isequal(mon,    6));
assert(isequal(day,    26));
assert(isequal(hr,     19));
assert(isequal(minute, 27));
assert(isequalRel(sec, 32.414976000637, TOL));
# 28623

[mon,day,hr,minute,sec] = days2mdh(2006, 176.466833970000);
assert(isequal(mon,    6));
assert(isequal(day,    25));
assert(isequal(hr,     11));
assert(isequal(minute, 12));
assert(isequalRel(sec, 14.455008000896, TOL));
# 28626

[mon,day,hr,minute,sec] = days2mdh(2005, 333.020126610000);
assert(isequal(mon,    11));
assert(isequal(day,    29));
assert(isequal(hr,     0));
assert(isequal(minute, 28));
assert(isequalRel(sec, 58.939103998018, TOL));
# 28872

[mon,day,hr,minute,sec] = days2mdh(2006, 170.267838450000);
assert(isequal(mon,    6));
assert(isequal(day,    19));
assert(isequal(hr,     6));
assert(isequal(minute, 25));
assert(isequalRel(sec, 41.242079999938, TOL));
# 29141
# *** error: t:= 440.000000 *** code =   6

[mon,day,hr,minute,sec] = days2mdh(2006, 177.287320100000);
assert(isequal(mon,    6));
assert(isequal(day,    26));
assert(isequal(hr,     6));
assert(isequal(minute, 53));
assert(isequalRel(sec, 44.456639998971, TOL));
# 29238

[mon,day,hr,minute,sec] = days2mdh(1980, 275.987084650000);
assert(isequal(mon,    10));
assert(isequal(day,    1));
assert(isequal(hr,     23));
assert(isequal(minute, 41));
assert(isequalRel(sec, 24.113759998763, TOL));
# 88888
