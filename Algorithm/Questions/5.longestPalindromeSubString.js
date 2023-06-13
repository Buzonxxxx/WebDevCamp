// Given a string, find the longest substring which is a palindrome
// input s = “aabbccdeedccbaa”  output - bccdeedccb

// verify s
 // create a function that get string, start index, end index to check if it is a palindrome
 // init startingIndex = 0, maxLength = 0
 // loop s from i=0 to s.length
 //   loop from j=i to s.length
 //   if s,i,j is palindrome and the length is bigger than maxLength
 //   update start index and max length
 // return s.substring(startIndex, startIndex + maxLength)


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
