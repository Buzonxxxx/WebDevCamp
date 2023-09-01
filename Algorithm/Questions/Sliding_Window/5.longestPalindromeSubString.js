// Given a string, find the longest substring which is a palindrome
// input s = “aabbccdeedccbaa”  output - bccdeedccb

// verift s: if s.length === 0 return false
// create a function to verify if it's a palindrome string with s, index i, index j
// let maxLength = 0
// let startingIndex = 0

// loop s from i = 0
    // loop s from j = i
    // if (s, i, j) is palindrome
        // if (j - i + 1 > maxLength), update maxLength, update startingIndex
// return s.substring(startingIndex, startingIndex + maxLength

var longestPalindrome = function(s) {
    if (s.length === 0) return false

    let maxLength = 0
    let startingIndex = 0

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (isPalindrome(s, i, j)) {
                if (j - i + 1 > maxLength) {
                    maxLength = j - i + 1
                    startingIndex = i
                }
            }
        }
    }
    return s.substring(startingIndex, startingIndex + maxLength)
}

const isPalindrome = (s, i, j) => {
    while (i < j) {
        if (s[i] !== s[j]) return false
        i++
        j--
    }
    return true
}

console.log(longestPalindrome("aabbccdeedccbaa")) // `bccdeedccb`
console.log(longestPalindrome("babad")) // bab
console.log(longestPalindrome("cbbd")) // bb
