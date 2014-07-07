"use strict";

describe("mutils", function() {
	var o;

	beforeEach(function(done) {
		require(["../lib/mutils"], function(mutils) {
			o = mutils;
			done();
		});
	});

	it("mutils.sign should pass", function() {
		var fut;
		fut = o.sign;

	    expect(fut(-123.45)).toEqual(-1);
	    expect(fut(-1)     ).toEqual(-1);
	    expect(fut(0)      ).toEqual(0);
	    expect(fut(+1)     ).toEqual(+1);
	    expect(fut(+123.45)).toEqual(+1);

	});

	it("mutils.cross should pass", function() {
	    var xyz,
	    	fut;
	    fut = o.cross;

    	xyz = fut([1, 2, 3], [4, 5, 6]);
	    expect(xyz[0]).toEqual(-3);
	    expect(xyz[1]).toEqual( 6);
	    expect(xyz[2]).toEqual(-3);

	    xyz = fut([1, 1, 1], [4, 5, 6]);
	    expect(xyz[0]).toEqual( 1);
	    expect(xyz[1]).toEqual(-2);
	    expect(xyz[2]).toEqual( 1);

	    xyz = fut([0, 0, 0], [4, 5, 6]);
	    expect(xyz[0]).toEqual( 0);
	    expect(xyz[1]).toEqual( 0);
	    expect(xyz[2]).toEqual( 0);
	});

	it("mutils.dot should pass", function() {
		var fut;
		fut = o.dot;

		expect(fut([1, 2, 3], [4, 5, 6])).toEqual(32);
    	expect(fut([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])).toEqual(130);
	});
});
