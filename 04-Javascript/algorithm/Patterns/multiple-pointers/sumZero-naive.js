// Write a function called sumZero which accepts a sorted array of integers. 
// The function should find the first pair where the sum is 0. 
// Return an array that includes both values that sum to zero or undefined if a pair does not exist

/*
example:
  [-2,-1,0,1,2,3,4,5] => return [-2,2]
  [1,2,3,4,5] => return undefined

 - nested for loop to find the pair
 
 */

function sumZero(arr){
	for(let i = 0; i<arr.length; i++){
	  for(j= i+1; j< arr.length; j++){
	    if(arr[i] + arr[j] === 0) return[arr[i], arr[j]];
    }
  }
  return undefined;
}


 console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]))

 // O(n^2)