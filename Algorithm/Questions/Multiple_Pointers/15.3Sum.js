// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

 // verify input
 // sort array
 // 3 pointers: i = 0, i + 1, arr.length -1
 
const threeNumberSumZero = (arr) => {
  if (arr.length === 0 || arr.length < 3) return false
  const result = []
  arr = arr.sort((a, b) => a - b)

  for (let i = 0; i < arr.length; i++) {
    let left = i + 1
    let right = arr.length - 1
    let sum = 0

    while (left < right) {
      sum = arr[left] + arr[right] + arr[i]
      if (sum === 0) {
        result.push([arr[left], arr[right], arr[i]])
        while (arr[left + 1] === arr[left]) left++ // skip dup
        while (arr[right - 1] === arr[right]) right-- // skip dup
        left++
        right--
      } else if (sum < 0) {
        left++
      } else {
        right--
      }
    }
    while (arr[i + 1] === arr[i]) i++ // skip dup
  }
  return result
}  

console.log(threeNumberSumZero([-1, 0, 1, 2, -1, -4, -2, 1, 1]))