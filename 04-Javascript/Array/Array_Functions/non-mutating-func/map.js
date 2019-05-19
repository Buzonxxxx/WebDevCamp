// 透過函式內所回傳的值組合成一個陣列
// The map method creates a new array with the results of calling a provided function on every element

const numbers1 = [1, 2, 3];
const double = numbers1.map(num => num * 2);
console.log(double);

const car = [
  { model: "Buick", price: "cheap" },
  { model: "Carmaro", price: "expensive" }
];
const prices = car.map(car => car.price);
console.log(prices);
// [ 'cheap', 'expensive' ]

const sqrt = array => array.map(el => Math.sqrt(el));
console.log(sqrt([9, 16]));
// [3, 4]
