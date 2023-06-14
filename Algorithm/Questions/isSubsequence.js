/**
 * [Multiple Pointers]
 * Taking two strings and check whether the characters in the first string form a subsequence of the characters
 * in the second string, without order change
 * Time O(N+M)
 *
 */

// isSubsequence('hello', 'hello world')); // true
// isSubsequence('sing', 'string')); // true

const isSubsequence = (str1, str2) => {
  if (str1.length === 0 || str2.length === 0) return false
  if (str1.length > str2.length) return false

  let i = 0 // index of str1
  let j = 0 // index of str2
  while (j < str2.length) {
    if (str1[i] === str2[j]) {
      i++
    }
    if (i === str1.length) {
      return true
    } 
    j++
  }
return false
  
};

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'string')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
