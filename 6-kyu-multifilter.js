// 6 kyu MultiFilter
// https://www.codewars.com/kata/56a298b27e9e994977000023/

var multiFilter = function (...filters) {
  return function (valueToTest) {
    const result = filters.reduce((acc, filter) => {
      return acc + filter(valueToTest);
    }, 0);
    return result === filters.length;
  };
};
