
// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

/**
 * verify str
 * split the string into array separate by ' '
 * capitalize the first letter of each string
 * join the string by ' '
 */


  function capitalize(str) {
    if (str.length === 0) return false
    let arr = str.split(' ')
    let newArr = []
    for (let word of arr) {
      newArr.push(word[0].toUpperCase() + word.slice(1))  // 從index1取到最後
    }
    
    return newArr.join(' ')
  }

  console.log(capitalize('a short sentence')) //--> 'A Short Sentence'
  console.log(capitalize('a lazy fox')) //--> 'A Lazy Fox'
  console.log(capitalize('look, it is working!')) //--> 'Look, It Is Working!'


