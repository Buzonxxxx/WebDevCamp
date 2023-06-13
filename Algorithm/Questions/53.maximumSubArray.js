// [Sliding Window]

// Given an integer array nums, find the contiguous subarray (containing at least one number)
// which has the largest sum and return its sum.

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// if nums is valid
// init maxSum and curSum = nums[0]
// loop array
// if current sum + next element < next element
// => current sum = next element
// else current sum += next element
// compare current sum and max sum and get the bugger one

const maxSubArray = (nums) => {
	if (nums.length === 0) return 0;
	
	let maxSum = nums[0];
	let curSum = nums[0];
	for (let i = 1; i < nums.length; i++) {
		if (curSum + nums[i] >= nums[i]) {
			curSum += nums[i];
		} else {
			curSum = nums[i];
		}
		maxSum = Math.max(curSum, maxSum);
	}
	return maxSum;
};

console.log(maxSubArray([ -2, 1, -3, 4, -1, 2, 1, -5, 4 ])); // 6
