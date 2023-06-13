/*
 * Given a sorted array nums, remove the duplicates in-place such that each element appear only once
 * and return the new length.
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place
 * with O(1) extra memory
 */

// if nums valid
// loop nums
// while current element === next element
// remove the current element using splice()
// decrease the iterator by 1
// return nums length

const removeDuplicates = (nums) => {
	for (let i = 0; i < nums.length; i++) {
		let currentVal = nums[i];
		let nextVal = nums[i + 1];
		if (currentVal === nextVal) {
			nums.splice(i, 1); // 從 start 位置開始"移除"指定的元素個數
			i--;
		}
	}
	return nums.length;
};

console.log(removeDuplicates([ 0, 0, 1, 1, 1, 2, 2, 3, 3, 4 ]));
