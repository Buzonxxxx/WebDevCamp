const colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
]

const squares = document.querySelectorAll(".square")
const pickedColor = colors[3]
const colorDisplay = document.querySelector("#colorDisplay")
colorDisplay.textContent = pickedColor

/* [for method]
for (let i = 0; i < squares.length; i++) {
  // add initial colors to squares
  squares[i].style.backgroundColor = colors[i]

  //add click listeners to squares
  squares[i].addEventListener("click", function () {
    //grab color of clicked square
    const clickedColor = this.style.backgroundColor
    //compare color in pickedColor
    if (clickedColor === pickedColor) {
      alert("Correct!")
    }
    else {
      alert("Wrong!")
    }
  })
}
*/

//[forEach method]
squares.forEach(
  (square, i) => {
    square.style.backgroundColor = colors[i]
    square.addEventListener("click", () => {
      //grab color of clicked square
      const clickedColor = square.style.backgroundColor
      //compare color in pickedColor
      if (clickedColor === pickedColor) {
        alert("Correct!")
      }
      else {
        alert("Wrong!")
      }
    })
  })

