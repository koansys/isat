/*global describe, expect, it, Pasta*/

"use strict";

describe("Pasta", function() {
  it("should make spaghetti bolognese", function() {
    var pasta = new Pasta();
    pasta.add("tomatoes");
    pasta.add("garlic");
    pasta.add("olive");
    pasta.add("herbs");
    pasta.add("meat");
    expect(pasta.getType()).toEqual("bolognese");
    expect(pasta.isTasty()).toEqual(true);
  });

  it("should make pasta with no sauce", function() {
    var pasta = new Pasta();
    pasta.add("meat");
    expect(pasta.getType()).toEqual(undefined);
    // pasta with no sauce? yeah that's not too tasty
    expect(pasta.isTasty()).toEqual(false);
  });
});
