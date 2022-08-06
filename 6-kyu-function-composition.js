// 6 kyu Function Composition
// https://www.codewars.com/kata/5421c6a2dda52688f6000af8/

// ES6
const compose = (f,g) => (...args) => f(g.apply(null, args))

// ES5
function compose(f, g) {
  return function (...args) {
    return f(g.apply(null, args));
  };
}
