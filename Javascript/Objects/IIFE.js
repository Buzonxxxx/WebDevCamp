//IIFE

//Original function
// function game(){
//   let score = Math.random()*10
//   if (score >=5){
//     console.log(score)
//   }
// }
// game()

//IIFE without argument
// (function () {
//   let score = Math.random()*10
//   if (score >=5){
//     console.log(score)
//   }
// })()

//IIFE with argument
(function (num) {
  let score = Math.random()*10
  if (score >= 5 - num){
    console.log(score)
  }
})(5)