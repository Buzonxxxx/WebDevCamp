// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// create a empty string stair
// loop row
//  loop column
    // if current column <= row , stair +=#
    
function steps(n) {
  for(let row = 0; row < n; row ++) {
    let stair = ""

    for (let column = 0; column < n; column++){
      if(column <= row) {
        stair += "#"
      } else {
        stair += " "
      }
    }
    console.log(stair)
  }
}

steps(2)
console.log("========")
steps(3)
console.log("========")
steps(4)