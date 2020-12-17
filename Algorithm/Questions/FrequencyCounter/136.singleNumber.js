/*
 * [Frequency Counter]
 * Implement a function called countUniqueValues, which accepts a sorted array,
 * and counts the unique values in the array. There can be negative numbers in the array,
 * but it will always be sorted.
 *
 * i.g. [1,1,1,2,2,3,4,5,6,7,7] => return 3
 *
 *
 * loop array and put element and count in object : [1,1,2,3] => {'1': 2, '2': 1, '3': 1}
 */

const countUniqueValues = (nums) => {
	const result = {};
	for (let num of nums) {
		result[num] ? (result[num] += 1) : (result[num] = 1);
	}

	for (let num of nums) {
		if (result[num] === 1) {
			return num;
		}
	}
	return false;
};

// map
// const countUniqueValues2 = (nums) => {
// 	const map = new Map();
// 	for (let i = 0; i < nums.length; i++) {
// 		if (!map.has(nums[i])) {
// 			map.set(nums[i], 1);
// 		} else {
// 			map.set(nums[i]), map.get(nums[i] + 1);
// 		}
// 	}
// 	for (let i = 0; i < nums.length; i++) {
// 		if (map.get(nums[i]) == 1) return nums[i];
// 	}
// };

console.log(countUniqueValues([ 1, 1, 1, 2, 2, 3, 4, 4, 4, 7, 7 ]));
console.log(countUniqueValues([ 2, 2, 1 ]));
// console.log(countUniqueValues2([ 1, 1, 1, 2, 2, 3, 4, 4, 4, 7, 7 ]));
// console.log(countUniqueValues2([ 2, 2, 1 ]));
