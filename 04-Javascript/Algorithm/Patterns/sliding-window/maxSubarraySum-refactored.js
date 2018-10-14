// Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
// The function should calculate the maximum sum of n consecutive elements in the array.

/**
 * i.g.
 * ([1,2,5,2,8,1,5],2) // 10
 */

// function maxSubarraySum(arr, num){
//   let maxSum = 0;
//   let tempSum = 0;
//   if (arr.length < num) return null;
//   for (let i = 0; i < num; i++) {
//     maxSum += arr[i];
//   }
//   tempSum = maxSum;
//   for (let i = num; i < arr.length; i++) {
//     tempSum = tempSum - arr[i - num] + arr[i];
//     maxSum = Math.max(maxSum, tempSum);
//     // console.log(maxSum)
//   }
//   return maxSum;
// }


function maxSubarraySum(arr, n){
  if(n > arr.length) return null;
  var maxSum = 0;
  var tempSum = 0;
  for(let i = 0; i< n; i++){
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