// Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

// Example 1:
// Input: "aba"
// Output: True
// Example 2:
// Input: "abca"
// Output: True
// Explanation: You could delete the character 'c'.
// Note:
// The string will only contain lowercase characters a-z. The maximum length of the string is 50000.

/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = (s) => {
  const stop = s.length / 2
  for (let i = 0; i < stop; i++) {
      let j = s.length - i - 1
      if (s[i] !== s[j]) {
          return isPalindrome(deleteChar(s, i)) || isPalindrome(deleteChar(s, j))
      }
  }
  return true
};

// delete s[i]
const deleteChar = (s, i) => s.slice(0, i) + s.slice(i + 1, s.length);

const isPalindrome = (s) => s === s.split('').reverse().join('');

console.log(validPalindrome('abca'))


