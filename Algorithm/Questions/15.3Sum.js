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

console.log(threeNumberSumZero([-1,0,1,2,-1,-4,-2,1,1]))