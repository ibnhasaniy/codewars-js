// 6 kyu Function Composition
// https://www.codewars.com/kata/5655c60db4c2ce0c2e000026

// ES6
const compose = (...fns) => arg => fns.reduceRight((result, fn) => fn(result), arg) 

// ES5
function compose(...fns) {
  return function (arg) {
    return fns.reduceRight((result, fn) => fn(result), arg);
  };
}
