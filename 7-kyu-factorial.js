// 7 kyu factorial
// https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc

const factorial = (n) => {
  if (n < 0 || n > 12) throw new RangeError('You must input from 0 to 12');

  let result = 1;
  for (let i = 1; i < n + 1; i++) {
    result *= i;
  }
  return result;
};
