// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// remove space using regex
// .replace(/[^\w]/g, '') => only keep character 
// e.g. 'rail safety' => railsafety
function anagrams(stringA, stringB) {
  const cleanStringA = stringA.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
  const cleanStringB = stringB.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
  return cleanStringA === cleanStringB
}

console.log(anagrams('rail safety', 'fairy tales'))
// console.log(anagrams('RAIL! SAFETY!', 'fairy tales'))
// console.log(anagrams('Hi there', 'Bye there'))


// Solution#1
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA)
//   const bCharMap = buildCharMap(stringB)

//   if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
//     return false
//   }

//   for (char in aCharMap){
//     if(aCharMap[char] !== bCharMap[char]){
//       return false
//     }
//   }
//   return true
// }

// function buildCharMap(str) {
//   const charMap = {}
  
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     if (charMap[char]){
//       charMap[char] + 1
//     } else {
//       charMap[char] = 1
//     }
//   }
//   return charMap
// }