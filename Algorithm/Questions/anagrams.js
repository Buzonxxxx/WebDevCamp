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

console.log(anagrams('rail safety', 'fairy tales')) // true
console.log(anagrams('RAIL! SAFETY!', 'fairy tales')) // true
console.log(anagrams('Hi there', 'Bye there')) // false
