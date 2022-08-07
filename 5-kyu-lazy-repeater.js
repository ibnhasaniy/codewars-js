// 5 kyu Lazy Repeater
// https://www.codewars.com/kata/51fc3beb41ecc97ee20000c3

function makeLooper(str) {
  let index = 0;
  return () => {
    if (index === str.length) index = 0;
    return str[index++];
  };
}
