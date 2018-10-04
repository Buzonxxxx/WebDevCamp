// Write a function called sumZero which accepts a sorted array of integers. 
// The function should find the first pair where the sum is 0. 
// Return an array that includes both values that sum to zero or undefined if a pair does not exist

/**
 * get the first element in array and loop over the array to find the pair that sum is zero
 * [-3, -2, -1, 0, 1, 2, 3]
 * -3 + -2 || -1 || 0 .... = 0
 * return the pair in array
 * 
 * 
 */


 function sumZero(arr) {
  for (var i = 0; i < arr.length; i++){
    for (var j = 1; j < arr.length; j++){
      if(arr[i] + arr[j] === 0){
        return [arr[i], arr[j]]
      }
    }
  }
 }

 console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]))

 // O(n^2)