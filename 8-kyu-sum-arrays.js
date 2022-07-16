// 8-kyu Sum Arrays
// https://www.codewars.com/kata/53dc54212259ed3d4f00071c

const sum = (arr) => arr.reduce((a, b) => a + b, 0);

// const sum = (numbers) => {
//   if (!numbers || !numbers.length) return 0;

//   let sum = 0;
//   for (const idx of numbers) {
//     sum += idx;
//   }
//   return sum;
// };
