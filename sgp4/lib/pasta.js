"use strict";

function Pasta() {
  // recipes for good pasta sauces
  this.sauces = {
    "bolognese": ["tomatoes", "garlic", "olive", "herbs", "meat"]
  };
  this.sauceIngredients = [];
}
Pasta.prototype.add = function (ingredient) {
  this.sauceIngredients.push(ingredient);
};

Pasta.prototype.getType = function () {
  for (var posssibleSauce in this.sauces) {
    // var ingredientsValid = true;
    // checking if arrays are equal
    if (!(this.sauceIngredients.sort() > this.sauces[posssibleSauce].sort() ||
          this.sauceIngredients.sort() < this.sauces[posssibleSauce].sort())) {
      return posssibleSauce;
    }
  }
  return undefined;
};

Pasta.prototype.isTasty = function () {
  if (this.getType() !== undefined) { return true; }
  return false;
};
