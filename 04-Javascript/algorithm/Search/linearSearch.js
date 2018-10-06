/**
 * 
  This function accepts an array and a value
  Loop through the array and check if the current array element is equal to the value
  If it is, return the index at which the element is found
  If the value is never found, return -1
 * 
 * 
 * 
 * 
 */

// ([10, 15, 12 ,13 ,5 ,6], 13) => 13
// ([10, 15, 12 ,13 ,5 ,6], 9) => -1


function linearSearch(arr, num) {
  for( var i = 0; i< arr.length; i++){
    if(arr[i] === num) return i;
  }
  return -1;
}

console.log(linearSearch([10, 15, 12 ,13 ,5 ,6], 9))
console.log(linearSearch([10, 15, 12 ,13 ,5 ,6], 13))

// linear search
// O(n)