// 8 kyu Grasshopper - Summation
// https://www.codewars.com/kata/55d24f55d7dd296eb9000030

const summation = function (num) {
  let result = 0;

  for (let i = 0; i <= num; i++) {
    result += i;
  }

  return result;
};
