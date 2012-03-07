var TOL = 0.000001;

module('invjday');

test('2456026.500000000000', function () {
    var rets = invjday(2456026.500000000000)
        year = rets.shift(),
        mon  = rets.shift(),
        day  = rets.shift(),
        hr   = rets.shift(),
        min  = rets.shift(),
        sec  = rets.shift();
    equal(year, 2012);
    equal(mon,  4);
    equal(day,  9);
    equal(hr,   0);
    equal(min,  0);
    ok(isequalRel(sec, 0.000000000000, TOL));
});

test('2456026.552083333489', function () {
    var rets = invjday(2456026.552083333489)
        year = rets.shift(),
        mon  = rets.shift(),
        day  = rets.shift(),
        hr   = rets.shift(),
        min  = rets.shift(),
        sec  = rets.shift();
    equal(year, 2012);
    equal(mon,  4);
    equal(day,  9);
    equal(hr,   1);
    equal(min,  15);
    ok(isequalRel(sec, 0.000013411045, TOL));
});

test('2456026.604166666511', function () {
    var rets = invjday(2456026.604166666511)
        year = rets.shift(),
        mon  = rets.shift(),
        day  = rets.shift(),
        hr   = rets.shift(),
        min  = rets.shift(),
        sec  = rets.shift();
    equal(year, 2012);
    equal(mon,  4);
    equal(day,  9);
    equal(hr,   2);
    equal(min,  29);
    ok(isequalRel(sec, 59.999986588955, TOL));
});

test('2456026.656250000000', function () {
    var rets = invjday(2456026.656250000000)
        year = rets.shift(),
        mon  = rets.shift(),
        day  = rets.shift(),
        hr   = rets.shift(),
        min  = rets.shift(),
        sec  = rets.shift();
    equal(year, 2012);
    equal(mon,  4);
    equal(day,  9);
    equal(hr,   3);
    equal(min,  45);
    ok(isequalRel(sec, 0.000000000000, TOL));
});

test('2456026.708333333489', function () {
    var rets = invjday(2456026.708333333489)
        year = rets.shift(),
        mon  = rets.shift(),
        day  = rets.shift(),
        hr   = rets.shift(),
        min  = rets.shift(),
        sec  = rets.shift();
    equal(year, 2012);
    equal(mon,  4);
    equal(day,  9);
    equal(hr,   5);
    equal(min,  0);
    ok(isequalRel(sec, 0.000013411045, TOL));
});

test('2456026.760416666511', function () {
    var rets = invjday(2456026.760416666511)
        year = rets.shift(),
        mon  = rets.shift(),
        day  = rets.shift(),
        hr   = rets.shift(),
        min  = rets.shift(),
        sec  = rets.shift();
    equal(year, 2012);
    equal(mon,  4);
    equal(day,  9);
    equal(hr,   6);
    equal(min,  14);
    ok(isequalRel(sec, 59.999986588955, TOL));
});

test('2456026.812500000000', function () {
    var rets = invjday(2456026.812500000000)
        year = rets.shift(),
        mon  = rets.shift(),
        day  = rets.shift(),
        hr   = rets.shift(),
        min  = rets.shift(),
        sec  = rets.shift();
    equal(year, 2012);
    equal(mon,  4);
    equal(day,  9);
    equal(hr,   7);
    equal(min,  30);
    ok(isequalRel(sec, 0.000000000000, TOL));
});

test('2456026.864583333489', function () {
    var rets = invjday(2456026.864583333489)
        year = rets.shift(),
        mon  = rets.shift(),
        day  = rets.shift(),
        hr   = rets.shift(),
        min  = rets.shift(),
        sec  = rets.shift();
    equal(year, 2012);
    equal(mon,  4);
    equal(day,  9);
    equal(hr,   8);
    equal(min,  45);
    ok(isequalRel(sec, 0.000013411045, TOL));
});

test('2456026.916666666511', function () {
    var rets = invjday(2456026.916666666511)
        year = rets.shift(),
        mon  = rets.shift(),
        day  = rets.shift(),
        hr   = rets.shift(),
        min  = rets.shift(),
        sec  = rets.shift();
    equal(year, 2012);
    equal(mon,  4);
    equal(day,  9);
    equal(hr,   9);
    equal(min,  59);
    ok(isequalRel(sec, 59.999986588955, TOL));
});

test('2456026.968750000000', function () {
    var rets = invjday(2456026.968750000000)
        year = rets.shift(),
        mon  = rets.shift(),
        day  = rets.shift(),
        hr   = rets.shift(),
        min  = rets.shift(),
        sec  = rets.shift();
    equal(year, 2012);
    equal(mon,  4);
    equal(day,  9);
    equal(hr,   11);
    equal(min,  15);
    ok(isequalRel(sec, 0.000000000000, TOL));
});

test('2456027.020833333489', function () {
    var rets = invjday(2456027.020833333489)
        year = rets.shift(),
        mon  = rets.shift(),
        day  = rets.shift(),
        hr   = rets.shift(),
        min  = rets.shift(),
        sec  = rets.shift();
    equal(year, 2012);
    equal(mon,  4);
    equal(day,  9);
    equal(hr,   12);
    equal(min,  30);
    ok(isequalRel(sec, 0.000013411045, TOL));
});

test('2456027.072916666511', function () {
    var rets = invjday(2456027.072916666511)
        year = rets.shift(),
        mon  = rets.shift(),
        day  = rets.shift(),
        hr   = rets.shift(),
        min  = rets.shift(),
        sec  = rets.shift();
    equal(year, 2012);
    equal(mon,  4);
    equal(day,  9);
    equal(hr,   13);
    equal(min,  44);
    ok(isequalRel(sec, 59.999986588955, TOL));
});

test('2456027.125000000000', function () {
    var rets = invjday(2456027.125000000000)
        year = rets.shift(),
        mon  = rets.shift(),
        day  = rets.shift(),
        hr   = rets.shift(),
        min  = rets.shift(),
        sec  = rets.shift();
    equal(year, 2012);
    equal(mon,  4);
    equal(day,  9);
    equal(hr,   15);
    equal(min,  0);
    ok(isequalRel(sec, 0.000000000000, TOL));
});

test('2456027.177083333489', function () {
    var rets = invjday(2456027.177083333489)
        year = rets.shift(),
        mon  = rets.shift(),
        day  = rets.shift(),
        hr   = rets.shift(),
        min  = rets.shift(),
        sec  = rets.shift();
    equal(year, 2012);
    equal(mon,  4);
    equal(day,  9);
    equal(hr,   16);
    equal(min,  15);
    ok(isequalRel(sec, 0.000013411045, TOL));
});

test('2456027.229166666511', function () {
    var rets = invjday(2456027.229166666511)
        year = rets.shift(),
        mon  = rets.shift(),
        day  = rets.shift(),
        hr   = rets.shift(),
        min  = rets.shift(),
        sec  = rets.shift();
    equal(year, 2012);
    equal(mon,  4);
    equal(day,  9);
    equal(hr,   17);
    equal(min,  29);
    ok(isequalRel(sec, 59.999986588955, TOL));
});

test('2456027.281250000000', function () {
    var rets = invjday(2456027.281250000000)
        year = rets.shift(),
        mon  = rets.shift(),
        day  = rets.shift(),
        hr   = rets.shift(),
        min  = rets.shift(),
        sec  = rets.shift();
    equal(year, 2012);
    equal(mon,  4);
    equal(day,  9);
    equal(hr,   18);
    equal(min,  45);
    ok(isequalRel(sec, 0.000000000000, TOL));
});

test('2456027.333333333489', function () {
    var rets = invjday(2456027.333333333489)
        year = rets.shift(),
        mon  = rets.shift(),
        day  = rets.shift(),
        hr   = rets.shift(),
        min  = rets.shift(),
        sec  = rets.shift();
    equal(year, 2012);
    equal(mon,  4);
    equal(day,  9);
    equal(hr,   20);
    equal(min,  0);
    ok(isequalRel(sec, 0.000013411045, TOL));
});

test('2456027.385416666511', function () {
    var rets = invjday(2456027.385416666511)
        year = rets.shift(),
        mon  = rets.shift(),
        day  = rets.shift(),
        hr   = rets.shift(),
        min  = rets.shift(),
        sec  = rets.shift();
    equal(year, 2012);
    equal(mon,  4);
    equal(day,  9);
    equal(hr,   21);
    equal(min,  14);
    ok(isequalRel(sec, 59.999986588955, TOL));
});

test('2456027.437500000000', function () {
    var rets = invjday(2456027.437500000000)
        year = rets.shift(),
        mon  = rets.shift(),
        day  = rets.shift(),
        hr   = rets.shift(),
        min  = rets.shift(),
        sec  = rets.shift();
    equal(year, 2012);
    equal(mon,  4);
    equal(day,  9);
    equal(hr,   22);
    equal(min,  30);
    ok(isequalRel(sec, 0.000000000000, TOL));
});

test('2456027.489583333489', function () {
    var rets = invjday(2456027.489583333489)
        year = rets.shift(),
        mon  = rets.shift(),
        day  = rets.shift(),
        hr   = rets.shift(),
        min  = rets.shift(),
        sec  = rets.shift();
    equal(year, 2012);
    equal(mon,  4);
    equal(day,  9);
    equal(hr,   23);
    equal(min,  45);
    ok(isequalRel(sec, 0.000013411045, TOL));
});

test('2456027.541666666511', function () {
    var rets = invjday(2456027.541666666511)
        year = rets.shift(),
        mon  = rets.shift(),
        day  = rets.shift(),
        hr   = rets.shift(),
        min  = rets.shift(),
        sec  = rets.shift();
    equal(year, 2012);
    equal(mon,  4);
    equal(day,  10);
    equal(hr,   0);
    equal(min,  59);
    ok(isequalRel(sec, 59.999986588955, TOL));
});

test('2456027.593750000000', function () {
    var rets = invjday(2456027.593750000000)
        year = rets.shift(),
        mon  = rets.shift(),
        day  = rets.shift(),
        hr   = rets.shift(),
        min  = rets.shift(),
        sec  = rets.shift();
    equal(year, 2012);
    equal(mon,  4);
    equal(day,  10);
    equal(hr,   2);
    equal(min,  15);
    ok(isequalRel(sec, 0.000000000000, TOL));
});

test('2456027.645833333489', function () {
    var rets = invjday(2456027.645833333489)
        year = rets.shift(),
        mon  = rets.shift(),
        day  = rets.shift(),
        hr   = rets.shift(),
        min  = rets.shift(),
        sec  = rets.shift();
    equal(year, 2012);
    equal(mon,  4);
    equal(day,  10);
    equal(hr,   3);
    equal(min,  30);
    ok(isequalRel(sec, 0.000013411045, TOL));
});

test('2456027.697916666511', function () {
    var rets = invjday(2456027.697916666511)
        year = rets.shift(),
        mon  = rets.shift(),
        day  = rets.shift(),
        hr   = rets.shift(),
        min  = rets.shift(),
        sec  = rets.shift();
    equal(year, 2012);
    equal(mon,  4);
    equal(day,  10);
    equal(hr,   4);
    equal(min,  44);
    ok(isequalRel(sec, 59.999986588955, TOL));
});

test('2456027.750000000000', function () {
    var rets = invjday(2456027.750000000000)
        year = rets.shift(),
        mon  = rets.shift(),
        day  = rets.shift(),
        hr   = rets.shift(),
        min  = rets.shift(),
        sec  = rets.shift();
    equal(year, 2012);
    equal(mon,  4);
    equal(day,  10);
    equal(hr,   6);
    equal(min,  0);
    ok(isequalRel(sec, 0.000000000000, TOL));
});

test('2456027.802083333489', function () {
    var rets = invjday(2456027.802083333489)
        year = rets.shift(),
        mon  = rets.shift(),
        day  = rets.shift(),
        hr   = rets.shift(),
        min  = rets.shift(),
        sec  = rets.shift();
    equal(year, 2012);
    equal(mon,  4);
    equal(day,  10);
    equal(hr,   7);
    equal(min,  15);
    ok(isequalRel(sec, 0.000013411045, TOL));
});

test('2456027.854166666511', function () {
    var rets = invjday(2456027.854166666511)
        year = rets.shift(),
        mon  = rets.shift(),
        day  = rets.shift(),
        hr   = rets.shift(),
        min  = rets.shift(),
        sec  = rets.shift();
    equal(year, 2012);
    equal(mon,  4);
    equal(day,  10);
    equal(hr,   8);
    equal(min,  29);
    ok(isequalRel(sec, 59.999986588955, TOL));
});

test('2456027.906250000000', function () {
    var rets = invjday(2456027.906250000000)
        year = rets.shift(),
        mon  = rets.shift(),
        day  = rets.shift(),
        hr   = rets.shift(),
        min  = rets.shift(),
        sec  = rets.shift();
    equal(year, 2012);
    equal(mon,  4);
    equal(day,  10);
    equal(hr,   9);
    equal(min,  45);
    ok(isequalRel(sec, 0.000000000000, TOL));
});

test('2456027.958333333489', function () {
    var rets = invjday(2456027.958333333489)
        year = rets.shift(),
        mon  = rets.shift(),
        day  = rets.shift(),
        hr   = rets.shift(),
        min  = rets.shift(),
        sec  = rets.shift();
    equal(year, 2012);
    equal(mon,  4);
    equal(day,  10);
    equal(hr,   11);
    equal(min,  0);
    ok(isequalRel(sec, 0.000013411045, TOL));
});

test('2456028.010416666511', function () {
    var rets = invjday(2456028.010416666511)
        year = rets.shift(),
        mon  = rets.shift(),
        day  = rets.shift(),
        hr   = rets.shift(),
        min  = rets.shift(),
        sec  = rets.shift();
    equal(year, 2012);
    equal(mon,  4);
    equal(day,  10);
    equal(hr,   12);
    equal(min,  14);
    ok(isequalRel(sec, 59.999986588955, TOL));
});

test('2456028.062500000000', function () {
    var rets = invjday(2456028.062500000000)
        year = rets.shift(),
        mon  = rets.shift(),
        day  = rets.shift(),
        hr   = rets.shift(),
        min  = rets.shift(),
        sec  = rets.shift();
    equal(year, 2012);
    equal(mon,  4);
    equal(day,  10);
    equal(hr,   13);
    equal(min,  30);
    ok(isequalRel(sec, 0.000000000000, TOL));
});

test('2456028.114583333489', function () {
    var rets = invjday(2456028.114583333489)
        year = rets.shift(),
        mon  = rets.shift(),
        day  = rets.shift(),
        hr   = rets.shift(),
        min  = rets.shift(),
        sec  = rets.shift();
    equal(year, 2012);
    equal(mon,  4);
    equal(day,  10);
    equal(hr,   14);
    equal(min,  45);
    ok(isequalRel(sec, 0.000013411045, TOL));
});

test('2456028.166666666511', function () {
    var rets = invjday(2456028.166666666511)
        year = rets.shift(),
        mon  = rets.shift(),
        day  = rets.shift(),
        hr   = rets.shift(),
        min  = rets.shift(),
        sec  = rets.shift();
    equal(year, 2012);
    equal(mon,  4);
    equal(day,  10);
    equal(hr,   15);
    equal(min,  59);
    ok(isequalRel(sec, 59.999986588955, TOL));
});

test('2456028.218750000000', function () {
    var rets = invjday(2456028.218750000000)
        year = rets.shift(),
        mon  = rets.shift(),
        day  = rets.shift(),
        hr   = rets.shift(),
        min  = rets.shift(),
        sec  = rets.shift();
    equal(year, 2012);
    equal(mon,  4);
    equal(day,  10);
    equal(hr,   17);
    equal(min,  15);
    ok(isequalRel(sec, 0.000000000000, TOL));
});

test('2456028.270833333489', function () {
    var rets = invjday(2456028.270833333489)
        year = rets.shift(),
        mon  = rets.shift(),
        day  = rets.shift(),
        hr   = rets.shift(),
        min  = rets.shift(),
        sec  = rets.shift();
    equal(year, 2012);
    equal(mon,  4);
    equal(day,  10);
    equal(hr,   18);
    equal(min,  30);
    ok(isequalRel(sec, 0.000013411045, TOL));
});

test('2456028.322916666511', function () {
    var rets = invjday(2456028.322916666511)
        year = rets.shift(),
        mon  = rets.shift(),
        day  = rets.shift(),
        hr   = rets.shift(),
        min  = rets.shift(),
        sec  = rets.shift();
    equal(year, 2012);
    equal(mon,  4);
    equal(day,  10);
    equal(hr,   19);
    equal(min,  44);
    ok(isequalRel(sec, 59.999986588955, TOL));
});

test('2456028.375000000000', function () {
    var rets = invjday(2456028.375000000000)
        year = rets.shift(),
        mon  = rets.shift(),
        day  = rets.shift(),
        hr   = rets.shift(),
        min  = rets.shift(),
        sec  = rets.shift();
    equal(year, 2012);
    equal(mon,  4);
    equal(day,  10);
    equal(hr,   21);
    equal(min,  0);
    ok(isequalRel(sec, 0.000000000000, TOL));
});

test('2456028.427083333489', function () {
    var rets = invjday(2456028.427083333489)
        year = rets.shift(),
        mon  = rets.shift(),
        day  = rets.shift(),
        hr   = rets.shift(),
        min  = rets.shift(),
        sec  = rets.shift();
    equal(year, 2012);
    equal(mon,  4);
    equal(day,  10);
    equal(hr,   22);
    equal(min,  15);
    ok(isequalRel(sec, 0.000013411045, TOL));
});

test('2456028.479166666511', function () {
    var rets = invjday(2456028.479166666511)
        year = rets.shift(),
        mon  = rets.shift(),
        day  = rets.shift(),
        hr   = rets.shift(),
        min  = rets.shift(),
        sec  = rets.shift();
    equal(year, 2012);
    equal(mon,  4);
    equal(day,  10);
    equal(hr,   23);
    equal(min,  29);
    ok(isequalRel(sec, 59.999986588955, TOL));
});

test('2456028.500000000000', function () {
    var rets = invjday(2456028.500000000000)
        year = rets.shift(),
        mon  = rets.shift(),
        day  = rets.shift(),
        hr   = rets.shift(),
        min  = rets.shift(),
        sec  = rets.shift();
    equal(year, 2012);
    equal(mon,  4);
    equal(day,  11);
    equal(hr,   0);
    equal(min,  0);
    ok(isequalRel(sec, 0.000000000000, TOL));
});