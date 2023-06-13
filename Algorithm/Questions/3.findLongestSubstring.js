// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// check if s is valid
// init an array ot put each char
// init max length = 0
// loop s 
// if char in array, update array (remove the previous same char in array)
// else push char to array
// compare array length and max length and get the bigger one
// return max length

var lengthOfLongestSubstring = function(s) {
	if (s.length === 0) return 0
    if (s.length === 1) return 1

    let arr = []
    let maxLen = 0
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (arr.indexOf(char) !== -1) { 
            arr = arr.slice(arr.indexOf(char) + 1) //  // 從index取到最後
        }
        arr.push(char) // [a, b, c], a => [b, c, a]
        maxLen = Math.max(maxLen, arr.length)
    }
    return maxLen
};

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('pwwkew')); // 3
console.log(lengthOfLongestSubstring('dvdfsdsdsadtyuuiop')); // 6
