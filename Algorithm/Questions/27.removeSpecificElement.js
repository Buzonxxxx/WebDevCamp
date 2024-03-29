// Given an array nums and a value val, remove all instances of that value in-place and return the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

//  Input: nums = [3,2,2,3], val = 3
//  Output: 2, nums = [2,2,_,_]

// if array valid
// loop array
// while element === val
// remove the element using splice(), decrease iterator by 1
// return the nums length

const removeElement = (nums, val) => {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === val) {
			nums.splice(i, 1);
			i--;
		}
	}
	return nums.length;
};

console.log(removeElement([ 3, 2, 2, 3 ], 3));
console.log(removeElement([ 0, 1, 2, 2, 3, 0, 4, 2 ], 2));
