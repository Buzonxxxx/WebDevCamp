/**
 * 
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
 
 * 
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// verify s
// move non zero elements to the left with original order
// loop s
// init pos to save the current position
// if element is not eauql to zero, move to left
// add zeros in the end

var moveZeroes = function(nums) {
  if (nums.length === 0) return false
  
  // move non-zero numbers to left with original order
  let pos = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
        nums[pos] = nums[i]
        pos++
    }
  }

  // add zero to the end
  for (let i = pos; i < nums.length; i++) {
    nums[i] = 0
  }
  return nums
  
};

console.log(moveZeroes([0,1,0,3,12])) // [ 1, 3, 12, 0, 0 ]