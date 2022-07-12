// 8 kyu A wolf in sheep's clothing
// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15

function warnTheSheep(arr) {
  if (arr[arr.length - 1] === 'wolf')
    return 'Pls go away and stop eating my sheep';
  else {
    arr = arr.reverse();
    let wolfIndex = arr.indexOf('wolf');
    return `Oi! Sheep number ${wolfIndex}! You are about to be eaten by a wolf!`;
  }
}
