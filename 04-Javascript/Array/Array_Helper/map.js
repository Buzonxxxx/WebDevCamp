/*map  
  使用 map() 時他需要回傳一個值，
  他會透過函式內所回傳的值組合成一個*陣列*。
*/

// put each element of array in each iteration function
const numbers = [1, 2, 3]
const double = numbers.map(num => num*2)
console.log(double)


const car = [
  {model: 'Buick', price: 'cheap'},
  {model: 'Carmaro', price: 'expensive'} 
]
const prices = car.map(car => car.price)
console.log(prices)

