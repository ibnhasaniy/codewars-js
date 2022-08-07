// 6 kyu Combinator Flip
// https://www.codewars.com/kata/541b5694204d12573700101c/

function flip(fn) {
  return function (...args) {
    return fn(...args.reverse());
  };
}
