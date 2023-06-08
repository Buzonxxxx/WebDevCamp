// Given two integer arrays nums1 and nums2, return an array of their intersection. 
// Each element in the result must be unique and you may return the result in any order.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]

// verify nums1, nums2 are valid
// init a result array
// loop nums1
// if nums1's element in nums2 && element not in result array
//   ==> push element in result array

var intersection = function(nums1, nums2) {
	if (nums1.length === 0 || nums2.length === 0) return false
	 const result = []
	 for (let num of nums1) {
			 if (nums2.indexOf(num) !== -1 && result.indexOf(num) === -1) {
					 result.push(num)
			 }
	 }
	 return result
};

console.log(intersection([ 1, 2, 2, 1 ], [ 2, 2 ])); // [2]
console.log(intersection([ 4, 9, 5 ], [ 9, 4, 9, 8, 4 ])); // [4, 9]
