"use strict";


describe("angl", function() {
  var TOLERANCE = 1e-15,
      fut;

  beforeEach(function(done) {
      require(['../lib/angl'], function(angl) {
          fut = angl.angl;
          done();
      });
  });

  it("Should have the same vectors", function() {
    expect(fut([0, 0, 1], [0, 0, 1])).toEqual(0.00000000000000e+00);
  });

  it("Should support 2 dimensions", function() {
    expect(Math.abs(fut([0, 0, 1], [0, 1, 1]) - 7.85398163397448e-01)).toBeLessThan(TOLERANCE);
  });

  it("Should support 3 dimensions", function() {
    expect(Math.abs(fut([0, 0, 1], [1, 1, 1]) - 9.55316618124509e-01)).toBeLessThan(TOLERANCE);
  });

  it("Should support different sizes", function() {
    expect(Math.abs(fut([1, 2, 3], [4, 5, 6]) - 2.25726128552734e-01)).toBeLessThan(TOLERANCE);
  });

});
