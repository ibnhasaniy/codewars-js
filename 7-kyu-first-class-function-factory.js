// 7 kyu First-Class Function Factory
// https://www.codewars.com/kata/563f879ecbb8fcab31000041

//  ES6
// const factory = (n) => (arr) => arr.map((el) => el * n);

// ES5
function factory(n) {
  return function (arr) {
    return arr.map(function (el) {
      return el * n;
    });
  };
}