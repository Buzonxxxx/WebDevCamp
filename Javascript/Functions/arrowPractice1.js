/*
const double = function(num) {
  return num*2
}
const double = () => 2
const double = (num) => num*2
const double = (num1, num2) => num1*2 + num2*2

//一個argument 可以省略括號
const double = num => num*2

console.log(double(8))
*/

const numbers = [1,2,3]
//type 1
numbers.map(function(number){
  return number * 2
})
//type 2
numbers.map(number => number * 2 )