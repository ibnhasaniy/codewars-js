// 6 kyu Once
// https://www.codewars.com/kata/5307ff5b588fe6d7000000a5

function once(fn) {
  let isOnce = false;
  return function (...args) {
    console.log(args)
    if (!isOnce) {
      isOnce = true;
      return fn.apply(this, args);
    }
  };
}
let logOnce = once(console.log)
logOnce(12)