// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

  // verify input
 // sort array: nums.sort((a, b) => a - b)
 // init result array
 // loop nums using for loop
 // get left point = i + 1
 // get right point = nums.length -1
 // let sum = 0
 // use while loop
 // while (left < right)
  // get sum = nums[i] + nums[left] + nums[right] 
  // if sum === 0, result.push([nums[i], nums[left], nums[right]])
    // while(nums[left] === nums[left + 1]) left++
    // while(nums[right] === nums[right - 1]) right--
    // left++
    // right--
  // else if sum < 0
    // left++
  // else if sum > 0
    // right-- 
 // while nums[i] === nums[i++], i++
 // return result
 
 var threeSum = function(nums) {
  if (nums.length < 3) return false
  nums.sort((a,b) => a - b)
  let result = []

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] == nums[i-1]) {
      continue
    }

    let left = i + 1
    let right = nums.length - 1
    let sum = 0

    while (left < right) {
      sum = nums[i] + nums[left] + nums[right]
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]])
        while (left < right && nums[left] === nums[left + 1]) left++
        while (left < right && nums[right] === nums[right - 1]) right--
        left++
        right--
      } else if (sum < 0) {
        left++
      } else if (sum > 0) {
        right--
      }
    }
  }
  return result
};

console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, 1, 1])) // [ [ -2, 0, 2 ], [ -2, 1, 1 ], [ -1, -1, 2 ], [ -1, 0, 1 ] ]
console.log(threeSum([-1,0,1,2,-1,-4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0,1,1])); // []
console.log(threeSum([0,0,0])); // [[0,0,0]]