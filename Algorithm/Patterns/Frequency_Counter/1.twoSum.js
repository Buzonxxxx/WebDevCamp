/**
 *
 * Given an array of integers, return indices of the two numbers
 * such that they add up to a specific target.
 *
 // validate input (nums.length >= 2)
 // if (target - num) not in obj, put num and its index in object i.g {'2': 0}
 // else return index of (target - num) and index of num
 */

const twoSum = (nums, target) => {
	if (nums.length < 2) return false;
	const result = {};
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		if (!(target - num in result)) {
			result[num] = i; // 9 - 2 = 7, not in obj, => {'2':0, }, 9 - 7 = 2, in obj => return index
		} else {
			return [ result[target - num], i ];
		}
	}
	return undefined;
};

console.log(twoSum([ 2, 7, 11, 15 ], 9));
