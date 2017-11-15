/*map  
  使用 map() 時他需要回傳一個值，
  他會透過函式內所回傳的值組合成一個陣列。
  The map() method creates a new array with the results of calling a function 
  for every array element.
  https://www.w3schools.com/jsref/jsref_map.asp
*/
//sample1
const car = [
  {model: 'Buick', price: 'cheap'},
  {model: 'Carmaro', price: 'expensive'} 
]
const prices = car.map(car => car.price)
console.log(prices)

//sample2
const pluck = array => array.map(paint => paint.color)  
const paints = [ 
  { color: 'red' }, 
  { color: 'blue' }, 
  { color: 'yellow' }
];
console.log(pluck(paints));

