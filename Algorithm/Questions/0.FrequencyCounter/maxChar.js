
// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


// put each char and its count in the obj
// find the largest count in the obj

function maxChar(str) {
  const result = {}
  for(let char of str) {
    if (!result[char]) {
        result[char] = 1
    } else {
        result[char] += 1
    }
  }
  
  let maxChar = ''
  let max = 0
  for(let char in result) {
    if (result[char] > max) {
        max = result[char]
        maxChar = char
    }
  }
  return maxChar

}

console.log(maxChar("apple 1231111"))