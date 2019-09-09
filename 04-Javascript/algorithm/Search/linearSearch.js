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

const search = (arr, n) => {
  for (let i = 0; i < arr.length; i++ ) {
    if (arr[i] == n) {
      return i;
    }
  }
  return -1;
}
// Linear Search O(n)

console.log(search([1,2,3,4,5,6],4)) // 3  
console.log(search([1,2,3,4,5,6],6)) // 5
console.log(search([1,2,3,4,5,6],11)) // -1