// 8 kyu Sum without highest and lowest number
// https://www.codewars.com/kata/576b93db1129fcf2200001e6/

//  first way
function sumArray(array) {
  if (!array || array.length < 2) {
    return 0;
  }
  array = array.sort((a, b) => a - b);
  let result = 0;
  for (let i = 1; i < array.length - 1; i++) {
    result += array[i];
  }
  return result;
}


// second way
// function sumArray(array) {
//   if(!array) return 0
//   let arr = array.sort((a,b) => a - b)
//   arr.pop();
//   arr.shift();
//   let result = 0;
//   for(const idx of arr){
//     result += idx
//   }
//   return result
// }
