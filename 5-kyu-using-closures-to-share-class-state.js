// Using closures to share class state
// https://www.codewars.com/kata/using-closures-to-share-class-state

// Let's make a Cat constructor!
var Cat = (function () {
  const allCats = [];
  makeNewCat = function (name, weight) {
    if (name === undefined || weight === undefined)
      throw Error('Invalid input!');

    Object.defineProperty(this, 'name', {
      get: () => name,
      set: (value) => (name = value),
    });

    Object.defineProperty(this, 'weight', {
      get: () => weight,
      set: (value) => (weight = value),
    });
    allCats.push(this);
  };

  makeNewCat['averageWeight'] = () =>
    allCats.reduce((acc, cat) => acc + cat.weight, 0) / allCats.length;

  return makeNewCat;
})();
