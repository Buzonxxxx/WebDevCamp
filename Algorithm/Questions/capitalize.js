
// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

/**
 * loop each char of the string
 * if the left char is " ", the current char should be upper case 
 */

// function capitalize(str) {
//   let result = str[0].toUpperCase()
//   for(let i = 1; i < str.length; i++) {
//     if (str[i - 1] === " ") {
//       result += str[i].toUpperCase()
//     } else {
//       result += str[i]
//     }
//   }
//   return result
// }

  console.log(capitalize('a short sentence')) //--> 'A Short Sentence'
  console.log(capitalize('a lazy fox')) //--> 'A Lazy Fox'
  console.log(capitalize('look, it is working!')) //--> 'Look, It Is Working!'

  function capitalize(str) {
    const newArr = []
    const arr = str.split(' ') // turn string into array
    for (let word of arr) { // loop arr
      word = word[0].toUpperCase() + word.slice(1)
      newArr.push(word)
    }

    return newArr.join(" ")
  }
