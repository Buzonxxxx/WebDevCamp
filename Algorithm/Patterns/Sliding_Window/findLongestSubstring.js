
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

// TODO: Practice
const findLongestSubstring = (str) => {
  if (typeof str !== 'string') {
    return null;
  }
  let start = 0; let currentLength = 0; let maxLength = 0; const
    seen = {};
  for (let i = 0; i < str.length; i++) {
    if (seen[str[i]]) {
      start = Math.max(start, seen[str[i]]);
    }
    currentLength = i - start + 1;
    maxLength = Math.max(currentLength, maxLength);
    seen[str[i]] = i + 1;
  }
  return maxLength;
};
console.log(findLongestSubstring('abcabcbb')); // 3
// console.log(findLongestSubstring("pwwkew")) // 3
// console.log(findLongestSubstring("dvdf")) // 3
