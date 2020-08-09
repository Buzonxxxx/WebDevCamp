/*
 * Write a function called sumZero which accepts a sorted array of integers.
 * The function should find the first pair where the sum is 0.
 * Return an array that includes both values that sum to zero or undefined if a pair does not exist
 *
 * i.g.
 * [-2,-1,0,1,2,3,4,5] => return [-2,2]
 * [1,2,3,4,5] => return undefined
 */

const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (arr[left] < arr[right]) {
    const sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    }
    if (sum > 0) {
      right -= 1;
    } else {
      left += 1;
    }
  }
  return undefined;
};
console.log(sumZero([-2, -1, 0, 1, 2, 3, 4, 5])); // [-2,2]
console.log(sumZero([1, 2, 3, 4, 5])); // undefined
// O(n)
