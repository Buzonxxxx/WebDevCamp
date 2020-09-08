/*
 * [Frequency Counter]
 * Implement a function called countUniqueValues, which accepts a sorted array,
 * and counts the unique values in the array. There can be negative numbers in the array,
 * but it will always be sorted.
 *
 * i.g. [1,1,1,2,2,3,4,5,6,7,7] => return 3
 *
 *
 * loop array and put element and count in object : [1,1,2,3] => {'1': 2, '2': 1, '3': 1}
 */

const countUniqueValues = (arr) => {
  const result = {};
  for (let i = 0; i < arr.length; i++) {
    if (!result[arr[i]]) {
      result[arr[i]] = 1;
    } else {
      result[arr[i]] += 1;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (result[arr[i]] === 1) {
      return arr[i];
    }
  }
  return undefined;
};

console.log(countUniqueValues([1, 1, 1, 2, 2, 3, 4, 4, 4, 7, 7]));
console.log(countUniqueValues([2, 2, 1]));
