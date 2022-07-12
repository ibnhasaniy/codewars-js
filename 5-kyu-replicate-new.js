// Replicate `new`
// https://www.codewars.com/kata/558cb3df5f511f40d500001d
// https://www.codewars.com/kata/replicate-new

// My solution
function nouveau(Constructor, ...args) {
  let instance = {};
  instance.__proto__ = Constructor.prototype;
  let object = Constructor.apply(instance, args);
  if (
    (typeof object === 'function' || typeof object === 'object') &&
    object !== null
  )
    return object;
  else return instance;
}

// 2nd way
// const nouveau = (Constructor, ...args) => Reflect.construct(Constructor, args); // that's it :)
