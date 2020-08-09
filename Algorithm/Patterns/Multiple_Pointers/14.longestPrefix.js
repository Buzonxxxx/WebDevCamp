// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".


const longestCommonPrefix = (strs) => {
  if (strs == null || strs.length === 0) return '';

  let result = strs[0];
  for (let i = 1; i < strs.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (result[j] !== strs[i][j]) {
        result = result.slice(0, j);
        break;
      }
    }
  }
  return result;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
