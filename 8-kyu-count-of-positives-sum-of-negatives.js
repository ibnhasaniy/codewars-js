// 8 kyu Count of positives / sum of negatives
// https://www.codewars.com/kata/576bb71bbbcf0951d5000044

function countPositivesSumNegatives(arr) {
  if (!arr || !arr.length) return [];

  let positive = 0,
    negative = 0;
  for (const idx of Array.from(arr)) {
    if (idx > 0) positive++;
    if (idx < 0) negative += idx;
  }
  return [positive, negative];
}
