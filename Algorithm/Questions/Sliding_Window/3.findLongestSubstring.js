// Given a string s, find the length of the longest substring without repeating characters.

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// verify s, if s.length === 0 return false, if s.length === 1 return 1
// init arr
// init maxLength
// loop s
// if char in arr, slice the array from char + 1 to the end
// push each char to array
// update maxLength: compare array length and max length and get the bigger one
// return maxLEngth

var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return false
    if (s.length === 1) return 1
    let arr = []
    let maxLength = 0

    for (let char of s) {
        if (arr.indexOf(char) !== -1) {
            arr = arr.slice(arr.indexOf(char) + 1)
        }
        arr.push(char)
        maxLength = Math.max(maxLength, arr.length)
    }
    return maxLength
};

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('pwwkew')); // 3
console.log(lengthOfLongestSubstring('dvdfsdsdsadtyuuiop')); // 6
