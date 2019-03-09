/*map  
  使用 map() 時他需要回傳一個值，
  他會透過函式內所回傳的值組合成一個*陣列*。
*/

// 要回傳一個陣列用map, 值用forEach

// map
const numbers1 = [1, 2, 3]
const double = numbers1.map(num => num*2)
console.log(double)

// forEach
const numbers2 = [1, 2, 3]
let sum = 0
numbers2.forEach(num => sum += num)
console.log(sum)

const car = [
  {model: 'Buick', price: 'cheap'},
  {model: 'Carmaro', price: 'expensive'} 
]
const prices = car.map(car => car.price)
console.log(prices)
// [ 'cheap', 'expensive' ]

const sqrt = array => array.map(el => Math.sqrt(el))
console.log(sqrt([9, 16]))
// [3, 4]