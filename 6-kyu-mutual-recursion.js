// 6 kyu Mutual Recursion
// https://www.codewars.com/kata/53a1eac7e0afd3ad3300008b/

function F(n) {
  return n ? n - M(F(n - 1)) : 1;
}

function M(n) {
  return n ? n - F(M(n - 1)) : 0;
}
