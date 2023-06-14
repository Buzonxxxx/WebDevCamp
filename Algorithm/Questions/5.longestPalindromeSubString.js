// Given a string, find the longest substring which is a palindrome
// input s = “aabbccdeedccbaa”  output - bccdeedccb

 // verify input
 // create a function check verify palindrome with s, index i , index j
 // init max length and starting index of palindrome substring
 // loop i
 //   loop j
 // if s, i, j is palindrome
 // check palindrome substring's length
 // if length > max length => update max length, and starting index
 // return s.substring(startingIndex, startingIndex + maxLen)


const longestPalindrome = (s) => {
    if (s.length === 0) return false

    let startingIndex = 0;
    let maxLength = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (check(s, i, j)) {
                if (j - i + 1 > maxLength) {
                    maxLength = j - i + 1;
                    startingIndex = i;
                }
            }
        }
    }
    return s.substring(startingIndex, startingIndex + maxLength);
}

const check = (s, i, j) => {
  while (i < j) {
      if (s[i] !== s[j]) {
          return false;
      }
      i++;
      j--;
  }
  return true;
}

console.log(longestPalindrome("aabbccdeedccbaa"))
console.log(longestPalindrome("babad"))
console.log(longestPalindrome("cbbd"))
