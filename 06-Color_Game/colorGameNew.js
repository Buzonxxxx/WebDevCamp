let numSquares = 6
let colors = []
let pickedColor
const squares = document.querySelectorAll(".square")
const colorDisplay = document.querySelector("#colorDisplay")
const messageDisplay = document.querySelector("#message")
const h1 = document.querySelector("h1")
const resetButton = document.querySelector("#reset")
const modeButtons = document.querySelectorAll(".mode")

class ColorGame {
  constructor(){
    resetButton.addEventListener("click", () => {
      this.reset()
    })
  }
  init() {
    this.setUpModeButtons()
    this.setUpSquares()
    this.reset()
  }
  setUpModeButtons() {
    modeButtons.forEach((button, i) => {
      button.addEventListener("click", () => {
        modeButtons[0].classList.remove("selected")
        modeButtons[1].classList.remove("selected")
        button.classList.add("selected")
        button.textContent === "Easy" ? numSquares = 3 : numSquares = 6
        this.reset()
      })
    })
  }
  reset() {
    //generate all new colors
    colors = this.generateRandomColors(numSquares)
    //pick a new random color from array
    pickedColor = this.pickColor()
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
  generateRandomColors(num) {
    // make an array
    const arr = []
    // repeat num times
    for (let i = 0; i < num; i++) {
      //get random color and push in arr
      arr.push(this.randomColors())
    }
    // return that array
    return arr
  }
  randomColors() {
    //pick a "red" from 0~255
    const r = Math.floor(Math.random() * 256)
    //pick a "green" from 0~255
    const g = Math.floor(Math.random() * 256)
    //pick a "blue" from 0~255
    const b = Math.floor(Math.random() * 256)
    // return "rgb(" + r + "," + g + "," + b + ")"
    return `rgb(${r}, ${g}, ${b})`
  }
  pickColor() {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random]
  }
  setUpSquares() {
    //mode buttons event listeners
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
            this.changeColors(clickedColor)
            h1.style.backgroundColor = clickedColor
          }
          else {
            square.style.backgroundColor = "black"
            messageDisplay.textContent = "Try Again!"
          }
        })
      })
  }
  changeColors(color) {
    //loop through all squares
    squares.forEach(
      (square, i) => {
        square.style.backgroundColor = color
      })
  }
}

const colorGame = new ColorGame()
colorGame.init()