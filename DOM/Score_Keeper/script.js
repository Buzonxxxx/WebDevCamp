const p1Button = document.querySelector("#p1")
const p2Button = document.querySelector("#p2")
const resetButton = document.querySelector("#reset")
const p1Display = document.getElementById("p1display")
const p2Display = document.getElementById("p2display")
const numInput = document.querySelector("input")
const winningScoreDisplay = document.querySelector("p span")
let p1Score = 0
let p2Score = 0
let gameOver = false
let winningScore = 5  

p1Button.addEventListener("click", () => {
  if(!gameOver){
  p1Score++
  if(p1Score === winningScore){
    p1Display.classList.add("winner")
    gameOver = true
   }}
  p1Display.textContent = p1Score
})
p2Button.addEventListener("click", () => {
  if(!gameOver){
    p2Score++
    if(p2Score === winningScore){
      p2Display.classList.add("winner")
      gameOver = true
    }
  }
  p2Display.textContent = p2Score
})

resetButton.addEventListener("click", () => {
  reset()
})

const reset = () => { 
p1Display.classList.remove("winner")
p2Display.classList.remove("winner")
gameOver = false
p1Score = 0
p2Score = 0
p1Display.textContent = 0
p2Display.textContent = 0
}

numInput.addEventListener("change", () => {
  //this = numInput
  winningScoreDisplay.textContent = this.value
  winningScore = Number(this.value)
  reset()
})

//轉num型態用Number()
//取element值用.value
// MDN events https://developer.mozilla.org/en-US/docs/Web/Events