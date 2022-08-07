// 5 kyu A Chain Adding FUnction
// https://www.codewars.com/kata/539a0e4d85e3425cb0000a88/

function add(n) {
  let fn = (x) => add(n + x);
  fn.valueOf = () => n;
  return fn;
}
