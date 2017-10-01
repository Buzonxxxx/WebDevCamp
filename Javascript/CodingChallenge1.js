/*  
John and a friend invented a simple game where the player with the highest value of his height (in centimeters) 
plus five times his age wins 

1. Create variables for the heights and ages of two friends and assign them some values
2. Calculate their scores
3. Decide who wins and print the winner to the console. Include the score in the string that you output to the console.
Don't forget that there can be a draw (both players with the same score)
4. EXTRA: Add a third player and now decide who wins. Hint: you will need the && operator to take the decision. 
*/

const h1 = 172, age1 = 34
const h2 = 177, age2 = 20
const h3 = 171, age3 = 30

const calculate = (height, age) => {
  return height*5*age
}
const score1 = calculate(h1, age1)
const score2 = calculate(h2, age2)
const score3 = calculate(h3, age3)

console.log("friend 1's score is: " + score1)
console.log("friend 2's score is: " + score2)
console.log("friend 3's score is: " + score3)

if(score1 > score2 && score1 > score3){
  console.log("friend 1 wins")
}else if(score2 > score1 && score2 > score3){
  console.log("friend 2 wins")
}else if(score3 > score1 && score3 > score2){
  console.log("friend 3 wins")
}else{
console.log("Draw game!")
}