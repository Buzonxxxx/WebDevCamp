//reduce()方法會由左至右的為陣列中的每個元素呼叫一次回呼函式，
//並將回呼函式的傳回值當作下一次呼叫回呼函式的參數傳入

//加總
const numbers = [10, 20, 30]
// first argument is initila value, second argument is element in array
const result = numbers.reduce((sum, number) => sum + number, 0) //0 is initial value
console.log(result)

//取值
var primaryColors = [
  { color: 'red' },
  { color: 'blue' },
  { color: 'yellow' }
]
var result2 = primaryColors.reduce((previous, primaryColor) => {
  previous.push(primaryColor.color)
  return previous
}, [])
console.log(result2)


//陣列扁平化
const myArr = [
  [1, 2],
  [3, 4, 5],
  [6, 7, 8]
]

const newArr = myArr.reduce((arr, element) => arr.concat(element), [])
console.log(newArr);
// [ 1, 2, 3, 4, 5, 6, 7, 8 ]

//interview question
//parentheses are balance or not?
const balanceParens = string => {
  return !string.split("").reduce((previous, char) => {
    if (char === '(') { return ++previous }
    if (char === ')') { return --previous }
    return previous
  }, 0)
}
console.log(balanceParens(")((((((())))))"))
