// 8 kyu Find the position!
// https://www.codewars.com/kata/5808e2006b65bff35500008f/

function position(letter) {
  const alphabets = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  return `Position of alphabet: ${alphabets.indexOf(letter) + 1}`;
}
