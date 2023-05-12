/*
 * [Sliding Window]
 * Write a function called maxSubarraySum which accepts an array of integers and a number called n.
 * The function should calculate the maximum sum of n "consecutive elements" in the array.
 *
 * i.g.
 * ([1,2,5,2,8,1,5], 2) // 10
 *
 * validate input
 * sum to n and assign to tempSum
 * update maxSum
 *
 * loop from n, add right element, minus left element, update maxSum
 *
 */

const maxSubArraySum = (arr, n) => {
  if (n > arr.length || arr.length <= 0) {
    return null;
  }
  let tempSum = 0;
  let maxSum = 0;
  for (let i = 0; i < n; i++) {
    tempSum += arr[i];
  }
  maxSum = Math.max(tempSum, maxSum);
  for (let i = n; i < arr.length - 1; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
};
console.log(maxSubArraySum([1, 2, 5, 2, 9, 1, 5], 2)); // 11
// console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 3)); // 15
// O(n)
