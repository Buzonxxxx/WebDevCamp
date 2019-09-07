/* 
 * 1
 * [sliding window]
 * Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
 * The function should calculate the maximum sum of n consecutive elements in the array.
 *
 * i.g.
 * ([1,2,5,2,8,1,5], 2) // 10
 * 
 * 
 */

const maxSubArraySum = (arr, n) => {
  if(n > arr.length || arr.length <= 0) {
    return null;
  }
  let tempSum = 0, maxSum = 0;
  // sum from index 0 to n
  for (let i = 0; i < n; i++){
    tempSum = tempSum + arr[i];
  }
  maxSum = Math.max(tempSum, maxSum)
  for (let i = n; i < arr.length; i++){
    //減掉頭個數字arr[i - n], 加上新的數字 arr[i]
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(tempSum, maxSum)
  }
  return maxSum;
}  
console.log(maxSubArraySum([1,2,5,2,9,1,5], 2)) // 11
console.log(maxSubArraySum([1,2,5,2,8,1,5], 3)) // 15
// O(n)

/* 
 * 2.
 * find the longest substring
 * 找長度起算點
 * 發現重複, 更新起算點到重複的下一個字
 * 依序檢查置換最大長度
 *
 * i.g. 'pwwkew' // 3
 * 
 * validate string
 * let start count = 0, maxLength = 0
 * loop over string and put char and char's next index in obj
 * if found dup char, update start count index to next of dup char: 
 * (發現重複的字，切掉重複的字, 再繼續往後算長度)
 * count length
 * maxLength = (maxLength, currentLength)
 * return maxLength
 * 
 */

const findLongestSubstring = str => {
  if (typeof str !== "string") {
    return null;
  }
  let start = 0, maxLength = 0, currentLength = 0, seen = {};
  for (let i = 0; i < str.length; i++){
    if(seen[str[i]]) {
      // if found dup, update start to dup char index's next
      start = Math.max(start, seen[str[i]])
    }
    // length = current index - beginning of substring + 1 (to include current in count)
    currentLength = i - start + 1;
    maxLength = Math.max(maxLength, currentLength)
    // store the index of the next char so as to not double count
    seen[str[i]] = i + 1;
  }
  return maxLength;
}
// console.log(findLongestSubstring('abcabcbb')) // 3
// console.log(findLongestSubstring("pwwkew")) // 3
// console.log(findLongestSubstring("dvdf")) // 3
