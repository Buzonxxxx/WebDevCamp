// Given a string s, return true if the s can be palindrome after deleting at most 
// one character from it.

// Input: s = "aba"
// Output: true

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.

// Input: s = "abc"
// Output: false

const validPalindrome = (s) => {
  let i = 0
  let j = s.length - 1
  while (i < j) {
    if (s[i] !== s[j]) {
      // delete s[i]
      let deleteLeft = s.slice(0, i) + s.slice(i + 1, s.length)
      // delete s[j]
      let deleteRight = s.slice(0, j) + s.slice(j + 1, s.length)

      return isPalindrome(deleteLeft) ||
      isPalindrome(deleteRight) ||
      isPalindrome(s)
    }
    i++
    j--
  }
  return true
}

const isPalindrome = (s) => s === s.split('').reverse().join('');

console.log(validPalindrome('aba')) // true
console.log(validPalindrome('abca')) // true
console.log(validPalindrome('abc')) // false