// 4 kyu Currying vs. Partial Application
// https://www.codewars.com/kata/53cf7e37e9876c35a60002c9/

const curryPartial = (fn, ...argsA) =>{
  if(argsA.length >= fn.length) {
     return fn(...argsA)
  }
  return (...argsB) => curryPartial(fn, ...argsA, ...argsB)
}

const add = (a, b, c) => a + b + c;

console.log(curryPartial(add, 1, 2, 3));
