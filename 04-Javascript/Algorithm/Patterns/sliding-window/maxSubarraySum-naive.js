// Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
// The function should calculate the maximum sum of n consecutive elements in the array.

/**
 * i.g.
 * ([1,2,5,2,8,1,5],2) // 10
 */

function maxSubarraySum(arr, num) {
  if ( num > arr.length){
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i ++){
    temp = 0;
    for (let j = 0; j < num; j++){
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
    console.log(temp)
  }
  return max;
}

 console.log(maxSubarraySum([1,2,5,2,8,1,5],2))

 // O(n^2)
