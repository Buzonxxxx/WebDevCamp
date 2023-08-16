// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// verify nums
// init a result object {}
// loop nums
// if target - num is not in the object
//   => put num and its index in the result obj
// else return [object[target - num], num's index]

 var twoSum = function(nums, target) {
	if (nums.length <= 1) return false
	const result = {}
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i]
		if (result[target - num] === undefined) {
			result[num] = i
		} else {
			return [result[target - num], i]
		}
	}
	return undefined
};

console.log(twoSum([ 2, 7, 11, 15 ], 9));