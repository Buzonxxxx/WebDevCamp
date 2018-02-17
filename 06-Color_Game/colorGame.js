let numSquares = 6
let colors = generateRandomColors(numSquares)
const squares = document.querySelectorAll(".square")
let pickedColor = pickColor()
const colorDisplay = document.querySelector("#colorDisplay")
const messageDisplay = document.querySelector("#message")
const h1 = document.querySelector("h1")
const resetButton = document.querySelector("#reset")
// const easyBtn = document.querySelector("#easyBtn")
// const hardBtn = document.querySelector("#hardBtn")
const modeButtons = document.querySelectorAll(".mode")


modeButtons.forEach((button, i) => {
  button.addEventListener("click", () => {
    modeButtons[0].classList.remove("selected")
    modeButtons[1].classList.remove("selected")
    button.classList.add("selected")
    button.textContent === "Easy" ? numSquares = 3 : numSquares = 6
    reset()

  })
})

function reset() {
  //generate all new colors
  colors = generateRandomColors(numSquares)
  //pick a new random color from array
  pickedColor = pickColor()
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor
  resetButton.textContent = "New Colors"
  messageDisplay.textContent = ""
  //change colors of squares
  squares.forEach(
    (square, i) => {
      if (colors[i]) {
        square.style.display = "block"
        square.style.backgroundColor = colors[i]
      } else {
        square.style.display = "none"
      }
    })
  h1.style.backgroundColor = "steelblue"
}

resetButton.addEventListener("click", () => {
  reset()
})

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
        resetButton.textContent = "Play Again?"
        changeColors(clickedColor)
        h1.style.backgroundColor = clickedColor
      }
      else {
        square.style.backgroundColor = "black"
        messageDisplay.textContent = "Try Again!"
      }
    })
  })

function changeColors(color) {
  //loop through all squares
  squares.forEach(
    (square, i) => {
      square.style.backgroundColor = color
    })

  //change each color to match given color
}

function pickColor() {
  const random = Math.floor(Math.random() * colors.length);
  return colors[random]
}

function generateRandomColors(num) {
  // make an array
  const arr = []
  // repeat num times
  for (let i = 0; i < num; i++) {
    //get random color and push in arr
    arr.push(randomColors())
  }
  // return that array
  return arr
}

function randomColors() {
  //pick a "red" from 0~255
  const r = Math.floor(Math.random() * 256)
  //pick a "green" from 0~255
  const g = Math.floor(Math.random() * 256)
  //pick a "blue" from 0~255
  const b = Math.floor(Math.random() * 256)
  // return "rgb(" + r + "," + g + "," + b + ")"
  return `rgb(${r}, ${g}, ${b})`
}