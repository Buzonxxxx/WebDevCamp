// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// put vowels in an array
// verify str
// init count = 0
// loop str
// if char in vowels array, count it


function vowels(str) {
  const table = ['a', 'e', 'i', 'o', 'u']
  if (str.length === 0) return false
  let count = 0
  for (let char of str) {
    if (table.includes(char)) count++
  }
  return count
}

  console.log(vowels('Hi There!')) //--> 3
  console.log(vowels('Why do you ask?')) //--> 4
  console.log(vowels('Why?')) //--> 0