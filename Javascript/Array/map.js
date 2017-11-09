/*map  
  使用 map() 時他需要回傳一個值，
  他會透過函式內所回傳的值組合成一個陣列。
*/
//sample1
const numbers = [1,2,3]
const doubleNumbers = []
const doubled = numbers.map(number => number*2)
console.log(doubled)

//sample2
const car = [
  {model: 'Buick', price: 'cheap'},
  {model: 'Carmaro', price: 'expensive'} 
]
const prices = car.map(car => car.price)
console.log(prices)

//sample3
const pluck = (array, index) => array.map(array => array.index)  
 
const paints = [ 
  { color: 'red' }, 
  { color: 'blue' }, 
  { color: 'yellow' }
];
console.log(pluck(paints, 'color'));

