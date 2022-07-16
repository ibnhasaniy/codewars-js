// 8 kyu N-th Power
// https://www.codewars.com/kata/57d814e4950d8489720008db/

const index = (array, n) =>
  array[n] == undefined ? -1 : Math.pow(array[n], n);
