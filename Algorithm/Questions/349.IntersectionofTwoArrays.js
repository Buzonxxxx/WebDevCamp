// Given two arrays, write a function to compute their intersection.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]

var intersection = function(nums1, nums2) {
	const result = [];
	for (let num of nums1) {
		if (nums2.indexOf(num) !== -1 && result.indexOf(num) === -1) result.push(num);
	}
	return result;
};

console.log(intersection([ 1, 2, 2, 1 ], [ 2, 2 ]));
console.log(intersection([ 4, 9, 5 ], [ 9, 4, 9, 8, 4 ]));
