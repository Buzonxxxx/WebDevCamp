
/*
 * [Frequency Counter]
 * isAnagram('','') // true
 * isAnagram('car', 'rca') // true
 * isAnagram('cat', 'acb') // false
 *
 *
 * check string length
 * put str1 char in obj and add count
 * loop str2 to get char
 * if char not in obj => false
 * if chat in obj => count - 1, if complete the loop, return true
 */

const anagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  const charCount = {};
  for (let i = 0; i < str1.length; i++) {
    if (!charCount[str1[i]]) {
      charCount[str1[i]] = 1;
    } else {
      charCount[str1[i]] += 1;
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (!charCount[str2[i]]) {
      return false;
    }
    charCount[str2[i]] -= 1;
  }
  console.log(charCount);
  return true;
};
console.log(anagram('anagrams', 'nagarams'));
