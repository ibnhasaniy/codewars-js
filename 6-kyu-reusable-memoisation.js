// 6 kyu Resuable Memoisation
// https://www.codewars.com/kata/5b773b698adeaeb6b80000df

const memo = (fn) => {
  const cache = new Map();
  return (x) => {
    if (!cache.has(x)) cache.set(x, fn(x));
    return cache.get(x);
  };
};
