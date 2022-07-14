// 8 kyu Will there be enough space?
// https://www.codewars.com/kata/5875b200d520904a04000003/

const enough = (cap, on, wait) => (cap - on >= wait ? 0 : on - (cap - wait));
