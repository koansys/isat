TOL = 0.000001;

[year,mon,day,hr,min,sec] = invjday(2456026.500000000000);
assert(isequal(year, 2012));
assert(isequal(mon,  4));
assert(isequal(day,  9));
assert(isequal(hr,   0));
assert(isequal(min,  0));
assert(isequalRel(sec, 0.000000000000, TOL));

[year,mon,day,hr,min,sec] = invjday(2456026.552083333489);
assert(isequal(year, 2012));
assert(isequal(mon,  4));
assert(isequal(day,  9));
assert(isequal(hr,   1));
assert(isequal(min,  15));
assert(isequalRel(sec, 0.000013411045, TOL));

[year,mon,day,hr,min,sec] = invjday(2456026.604166666511);
assert(isequal(year, 2012));
assert(isequal(mon,  4));
assert(isequal(day,  9));
assert(isequal(hr,   2));
assert(isequal(min,  29));
assert(isequalRel(sec, 59.999986588955, TOL));

[year,mon,day,hr,min,sec] = invjday(2456026.656250000000);
assert(isequal(year, 2012));
assert(isequal(mon,  4));
assert(isequal(day,  9));
assert(isequal(hr,   3));
assert(isequal(min,  45));
assert(isequalRel(sec, 0.000000000000, TOL));

[year,mon,day,hr,min,sec] = invjday(2456026.708333333489);
assert(isequal(year, 2012));
assert(isequal(mon,  4));
assert(isequal(day,  9));
assert(isequal(hr,   5));
assert(isequal(min,  0));
assert(isequalRel(sec, 0.000013411045, TOL));

[year,mon,day,hr,min,sec] = invjday(2456026.760416666511);
assert(isequal(year, 2012));
assert(isequal(mon,  4));
assert(isequal(day,  9));
assert(isequal(hr,   6));
assert(isequal(min,  14));
assert(isequalRel(sec, 59.999986588955, TOL));

[year,mon,day,hr,min,sec] = invjday(2456026.812500000000);
assert(isequal(year, 2012));
assert(isequal(mon,  4));
assert(isequal(day,  9));
assert(isequal(hr,   7));
assert(isequal(min,  30));
assert(isequalRel(sec, 0.000000000000, TOL));

[year,mon,day,hr,min,sec] = invjday(2456026.864583333489);
assert(isequal(year, 2012));
assert(isequal(mon,  4));
assert(isequal(day,  9));
assert(isequal(hr,   8));
assert(isequal(min,  45));
assert(isequalRel(sec, 0.000013411045, TOL));

[year,mon,day,hr,min,sec] = invjday(2456026.916666666511);
assert(isequal(year, 2012));
assert(isequal(mon,  4));
assert(isequal(day,  9));
assert(isequal(hr,   9));
assert(isequal(min,  59));
assert(isequalRel(sec, 59.999986588955, TOL));

[year,mon,day,hr,min,sec] = invjday(2456026.968750000000);
assert(isequal(year, 2012));
assert(isequal(mon,  4));
assert(isequal(day,  9));
assert(isequal(hr,   11));
assert(isequal(min,  15));
assert(isequalRel(sec, 0.000000000000, TOL));

[year,mon,day,hr,min,sec] = invjday(2456027.020833333489);
assert(isequal(year, 2012));
assert(isequal(mon,  4));
assert(isequal(day,  9));
assert(isequal(hr,   12));
assert(isequal(min,  30));
assert(isequalRel(sec, 0.000013411045, TOL));

[year,mon,day,hr,min,sec] = invjday(2456027.072916666511);
assert(isequal(year, 2012));
assert(isequal(mon,  4));
assert(isequal(day,  9));
assert(isequal(hr,   13));
assert(isequal(min,  44));
assert(isequalRel(sec, 59.999986588955, TOL));

[year,mon,day,hr,min,sec] = invjday(2456027.125000000000);
assert(isequal(year, 2012));
assert(isequal(mon,  4));
assert(isequal(day,  9));
assert(isequal(hr,   15));
assert(isequal(min,  0));
assert(isequalRel(sec, 0.000000000000, TOL));

[year,mon,day,hr,min,sec] = invjday(2456027.177083333489);
assert(isequal(year, 2012));
assert(isequal(mon,  4));
assert(isequal(day,  9));
assert(isequal(hr,   16));
assert(isequal(min,  15));
assert(isequalRel(sec, 0.000013411045, TOL));

[year,mon,day,hr,min,sec] = invjday(2456027.229166666511);
assert(isequal(year, 2012));
assert(isequal(mon,  4));
assert(isequal(day,  9));
assert(isequal(hr,   17));
assert(isequal(min,  29));
assert(isequalRel(sec, 59.999986588955, TOL));

[year,mon,day,hr,min,sec] = invjday(2456027.281250000000);
assert(isequal(year, 2012));
assert(isequal(mon,  4));
assert(isequal(day,  9));
assert(isequal(hr,   18));
assert(isequal(min,  45));
assert(isequalRel(sec, 0.000000000000, TOL));

[year,mon,day,hr,min,sec] = invjday(2456027.333333333489);
assert(isequal(year, 2012));
assert(isequal(mon,  4));
assert(isequal(day,  9));
assert(isequal(hr,   20));
assert(isequal(min,  0));
assert(isequalRel(sec, 0.000013411045, TOL));

[year,mon,day,hr,min,sec] = invjday(2456027.385416666511);
assert(isequal(year, 2012));
assert(isequal(mon,  4));
assert(isequal(day,  9));
assert(isequal(hr,   21));
assert(isequal(min,  14));
assert(isequalRel(sec, 59.999986588955, TOL));

[year,mon,day,hr,min,sec] = invjday(2456027.437500000000);
assert(isequal(year, 2012));
assert(isequal(mon,  4));
assert(isequal(day,  9));
assert(isequal(hr,   22));
assert(isequal(min,  30));
assert(isequalRel(sec, 0.000000000000, TOL));

[year,mon,day,hr,min,sec] = invjday(2456027.489583333489);
assert(isequal(year, 2012));
assert(isequal(mon,  4));
assert(isequal(day,  9));
assert(isequal(hr,   23));
assert(isequal(min,  45));
assert(isequalRel(sec, 0.000013411045, TOL));

[year,mon,day,hr,min,sec] = invjday(2456027.541666666511);
assert(isequal(year, 2012));
assert(isequal(mon,  4));
assert(isequal(day,  10));
assert(isequal(hr,   0));
assert(isequal(min,  59));
assert(isequalRel(sec, 59.999986588955, TOL));

[year,mon,day,hr,min,sec] = invjday(2456027.593750000000);
assert(isequal(year, 2012));
assert(isequal(mon,  4));
assert(isequal(day,  10));
assert(isequal(hr,   2));
assert(isequal(min,  15));
assert(isequalRel(sec, 0.000000000000, TOL));

[year,mon,day,hr,min,sec] = invjday(2456027.645833333489);
assert(isequal(year, 2012));
assert(isequal(mon,  4));
assert(isequal(day,  10));
assert(isequal(hr,   3));
assert(isequal(min,  30));
assert(isequalRel(sec, 0.000013411045, TOL));

[year,mon,day,hr,min,sec] = invjday(2456027.697916666511);
assert(isequal(year, 2012));
assert(isequal(mon,  4));
assert(isequal(day,  10));
assert(isequal(hr,   4));
assert(isequal(min,  44));
assert(isequalRel(sec, 59.999986588955, TOL));

[year,mon,day,hr,min,sec] = invjday(2456027.750000000000);
assert(isequal(year, 2012));
assert(isequal(mon,  4));
assert(isequal(day,  10));
assert(isequal(hr,   6));
assert(isequal(min,  0));
assert(isequalRel(sec, 0.000000000000, TOL));

[year,mon,day,hr,min,sec] = invjday(2456027.802083333489);
assert(isequal(year, 2012));
assert(isequal(mon,  4));
assert(isequal(day,  10));
assert(isequal(hr,   7));
assert(isequal(min,  15));
assert(isequalRel(sec, 0.000013411045, TOL));

[year,mon,day,hr,min,sec] = invjday(2456027.854166666511);
assert(isequal(year, 2012));
assert(isequal(mon,  4));
assert(isequal(day,  10));
assert(isequal(hr,   8));
assert(isequal(min,  29));
assert(isequalRel(sec, 59.999986588955, TOL));

[year,mon,day,hr,min,sec] = invjday(2456027.906250000000);
assert(isequal(year, 2012));
assert(isequal(mon,  4));
assert(isequal(day,  10));
assert(isequal(hr,   9));
assert(isequal(min,  45));
assert(isequalRel(sec, 0.000000000000, TOL));

[year,mon,day,hr,min,sec] = invjday(2456027.958333333489);
assert(isequal(year, 2012));
assert(isequal(mon,  4));
assert(isequal(day,  10));
assert(isequal(hr,   11));
assert(isequal(min,  0));
assert(isequalRel(sec, 0.000013411045, TOL));

[year,mon,day,hr,min,sec] = invjday(2456028.010416666511);
assert(isequal(year, 2012));
assert(isequal(mon,  4));
assert(isequal(day,  10));
assert(isequal(hr,   12));
assert(isequal(min,  14));
assert(isequalRel(sec, 59.999986588955, TOL));

[year,mon,day,hr,min,sec] = invjday(2456028.062500000000);
assert(isequal(year, 2012));
assert(isequal(mon,  4));
assert(isequal(day,  10));
assert(isequal(hr,   13));
assert(isequal(min,  30));
assert(isequalRel(sec, 0.000000000000, TOL));

[year,mon,day,hr,min,sec] = invjday(2456028.114583333489);
assert(isequal(year, 2012));
assert(isequal(mon,  4));
assert(isequal(day,  10));
assert(isequal(hr,   14));
assert(isequal(min,  45));
assert(isequalRel(sec, 0.000013411045, TOL));

[year,mon,day,hr,min,sec] = invjday(2456028.166666666511);
assert(isequal(year, 2012));
assert(isequal(mon,  4));
assert(isequal(day,  10));
assert(isequal(hr,   15));
assert(isequal(min,  59));
assert(isequalRel(sec, 59.999986588955, TOL));

[year,mon,day,hr,min,sec] = invjday(2456028.218750000000);
assert(isequal(year, 2012));
assert(isequal(mon,  4));
assert(isequal(day,  10));
assert(isequal(hr,   17));
assert(isequal(min,  15));
assert(isequalRel(sec, 0.000000000000, TOL));

[year,mon,day,hr,min,sec] = invjday(2456028.270833333489);
assert(isequal(year, 2012));
assert(isequal(mon,  4));
assert(isequal(day,  10));
assert(isequal(hr,   18));
assert(isequal(min,  30));
assert(isequalRel(sec, 0.000013411045, TOL));

[year,mon,day,hr,min,sec] = invjday(2456028.322916666511);
assert(isequal(year, 2012));
assert(isequal(mon,  4));
assert(isequal(day,  10));
assert(isequal(hr,   19));
assert(isequal(min,  44));
assert(isequalRel(sec, 59.999986588955, TOL));

[year,mon,day,hr,min,sec] = invjday(2456028.375000000000);
assert(isequal(year, 2012));
assert(isequal(mon,  4));
assert(isequal(day,  10));
assert(isequal(hr,   21));
assert(isequal(min,  0));
assert(isequalRel(sec, 0.000000000000, TOL));

[year,mon,day,hr,min,sec] = invjday(2456028.427083333489);
assert(isequal(year, 2012));
assert(isequal(mon,  4));
assert(isequal(day,  10));
assert(isequal(hr,   22));
assert(isequal(min,  15));
assert(isequalRel(sec, 0.000013411045, TOL));

[year,mon,day,hr,min,sec] = invjday(2456028.479166666511);
assert(isequal(year, 2012));
assert(isequal(mon,  4));
assert(isequal(day,  10));
assert(isequal(hr,   23));
assert(isequal(min,  29));
assert(isequalRel(sec, 59.999986588955, TOL));

[year,mon,day,hr,min,sec] = invjday(2456028.500000000000);
assert(isequal(year, 2012));
assert(isequal(mon,  4));
assert(isequal(day,  11));
assert(isequal(hr,   0));
assert(isequal(min,  0));
assert(isequalRel(sec, 0.000000000000, TOL));
