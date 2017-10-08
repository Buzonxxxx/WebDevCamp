//reduce()方法會由左至右的為陣列中的每個元素呼叫一次回呼函式，
//並將回呼函式的傳回值當作下一次呼叫回呼函式的參數傳入

//sample 1
var numbers = [10, 20, 30]
var sum = 0
var result = numbers.reduce(function(sum, number){
  return sum + number
}, 0)
console.log(result)

//sample 2
var primaryColors = [
  {color: 'red'},
  {color: 'blue'},
  {color: 'yellow'}
]
var result = primaryColors.reduce(function(previous, primaryColor){
  previous.push(primaryColor.color)
  return previous
}, [])
console.log(result)

//interview question
//parentheses are balance or not?
function balanceParens(string){
  return !string.split("").reduce(function(previous, char){
    if (char === '(') {return ++previous}
    if (char === ')') {return --previous}
    return previous
  }, 0)
}
console.log(balanceParens(")((((((("))

