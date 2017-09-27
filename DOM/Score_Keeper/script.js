const p1Button = document.querySelector("#p1")
const p2Button = document.querySelector("#p2")
const p1Display = document.getElementById("p1display")
const p2Display = document.getElementById("p2display")
let p1Score = 0
let p2Score = 0
let gameOver = false
const winningScore = 5  

p1Button.addEventListener("click", () => {
  if(!gameOver){
  p1Score++
  if(p1Score === winningScore){
    gameOver = true
   }}
  p1Display.textContent = p1Score
})
p2Button.addEventListener("click", () => {
  if(!gameOver){
    p2Score++
    if(p2Score === winningScore){
      gameOver = true
    }
  }
  p2Display.textContent = p2Score
})
