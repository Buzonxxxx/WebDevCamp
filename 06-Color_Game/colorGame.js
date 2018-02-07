const colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
]

const squares = document.querySelectorAll(".square")
const pickedColor = pickColor()
const colorDisplay = document.querySelector("#colorDisplay")
const messageDisplay = document.querySelector("#message")

colorDisplay.textContent = pickedColor

squares.forEach(
  (square, i) => {
    square.style.backgroundColor = colors[i]
    square.addEventListener("click", () => {
      //grab color of clicked square
      const clickedColor = square.style.backgroundColor
      //compare color in pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!"
        changeColors(clickedColor)
      }
      else {
        square.style.backgroundColor = "black"
        messageDisplay.textContent = "Try Again!"
      }
    })
  })

const changeColors = (color) => {
  //loop through all squares
  squares.forEach(
    (square, i) => {
      square.style.backgroundColor = color
    })

  //change each color to match given color
}

// const pickColor = () => {
//   const random = Math.floor(Math.random() *  colors.length)
//   return colors[random]
// }

function pickColor() {
  const random = Math.floor(Math.random() *  colors.length);
  return colors[random]
}