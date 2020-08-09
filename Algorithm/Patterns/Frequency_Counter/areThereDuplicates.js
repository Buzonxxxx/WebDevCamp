/**
 * Accept a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.
 *
 * 1. Use rest parameter to put arguments in array
 * 2. loop array and put each element/count in object
 * 3. if object length === array length, return false(no duplicate), else return true(has duplicate)
 */

const areThereDuplicates = (...args) => {
  const result = {};
  for (let i = 0; i < args.length; i++) {
    if (!result[args[i]]) {
      result[args[i]] = 1;
    } else {
      result[args[i]] += 1;
    }
  }
  // has dup
  if (Object.keys(result).length !== args.length) return true;
  // no dup
  return false;
};

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
