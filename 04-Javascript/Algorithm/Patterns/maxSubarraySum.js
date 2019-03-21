// Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
// The function should calculate the maximum sum of n consecutive elements in the array.

/**
 * i.g.
 * ([1,2,5,2,8,1,5],2) // 10
 */

const loop = (arr, n) => {
  if(n > arr.length) return null
	let max = -Infinity;
	for(let i = 0; i<arr.length - n + 1; i++){
    temp = 0;
	  for(let j = 0; j < n; j++){
	    temp = temp + arr[i + j];
    }
    if (temp > max) max = temp;
  }
  return max;
}
console.log(loop([1,2,5,2,8,1,5],2))
 // O(n^2)

 const maxSubarraySum = (arr, n) => {
  if(n > arr.length) return null;
  var maxSum = 0;
  var tempSum = 0;
  for(let i = 0; i < n; i++){
    maxSum += arr[i];
  }
  for(let j = n; j<arr.length; j++){
    tempSum = maxSum - arr[j - n] + arr[j]
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
  }

console.log(maxSubarraySum([1,2,5,2,9,1,5],2))
// O(n)