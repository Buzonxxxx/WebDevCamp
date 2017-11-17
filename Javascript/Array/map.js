/*map  
  使用 map() 時他需要回傳一個值，
  他會透過函式內所回傳的值組合成一個陣列。
*/
//sample1
const car = [
  {model: 'Buick', price: 'cheap'},
  {model: 'Carmaro', price: 'expensive'} 
]
const prices = car.map(car => car.price)
console.log(prices)

