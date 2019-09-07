/* 
 * 1.
 * Given a sorted array of integers, write a function called search, 
 * that accepts a value and returns the index where the value passed to the function is located. 
 * If the value is not found, return -1
 *
 * i.g. search([1,2,3,4,5,6],4) // 3  
 * 
 * 
 * // loop array and put number and it's index in object
 * // if n in obj's key, return obj's value
*/

// [frequency counter]
const search = (arr, n) => {
  const result = {};
  for (let i = 0; i < arr.length; i++ ) {
    if (!result[arr[i]]) {
      result[arr[i]] = i;
    }
  }
  if (n in result ) return result[n]
  else return -1
}
// O(n)

// [divide and conquer]
const search1 = (arr, n) => {
  let min = 0; max = arr.length - 1;
  while(min <= max){
    let middleIndex = Math.floor((min + max) / 2);
    let currentNum = arr[middleIndex];
    if (currentNum < n){
      min = middleIndex + 1;
    }
    else if (currentNum > n){
      max = middleIndex -1;
    }
    else {
      return middleIndex;
    }
  }
  return -1;
}
// Binart Search O(log(n))

console.log(search([1,2,3,4,5,6],4)) // 3  
console.log(search([1,2,3,4,5,6],6)) // 5
console.log(search([1,2,3,4,5,6],11)) // -1
console.log(search1([1,2,3,4,5,6],4)) // 3  
console.log(search1([1,2,3,4,5,6],6)) // 5
console.log(search1([1,2,3,4,5,6],11)) // -1