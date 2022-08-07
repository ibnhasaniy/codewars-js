// 5 kyu Function Cache
// https://www.codewars.com/kata/525481903700c1a1ff0000e1/

function cache(func) {
  const cached = {};
  return function (...args) {
    let key = JSON.stringify(args);
    if (!(key in cached)) {
      cached[key] = func.apply(null, args);
    }
    return cached[key];
  };
}