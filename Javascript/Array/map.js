/*map  
  使用 map() 時他需要回傳一個值，
  他會透過函式內所回傳的值組合成一個陣列。
*/
//sample1
var numbers = [1,2,3]
var doubleNumbers = []
var doubled = numbers.map(number => number*2)
console.log(doubled)

//sample2
var car = [
  {model: 'Buick', price: 'cheap'},
  {model: 'Carmaro', price: 'expensive'} 
]
var prices = car.map(car => car.price)
console.log(prices)

//sample3
function pluck(array, property) {
  return array.map(array => array[property]);   
 }
var paints = [ 
  { color: 'red' }, 
  { color: 'blue' }, 
  { color: 'yellow' }
];
console.log(pluck(paints, 'color'));

