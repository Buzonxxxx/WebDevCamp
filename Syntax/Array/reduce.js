// reduce()方法會由左至右的為陣列中的每個元素呼叫一次回呼函式，
// 並將回呼函式的傳回值當作下一次呼叫回呼函式的參數傳入

// 加總
const numbers = [10, 20, 30];
const result = numbers.reduce((sum, number) => sum + number, 0);
console.log(result); // 60

// 取值
const primaryColors = [
  { color: 'red' },
  { color: 'blue' },
  { color: 'yellow' },
];
const result2 = primaryColors.reduce((previous, primaryColor) => {
  previous.push(primaryColor.color);
  return previous;
}, []);
console.log(result2); // [ 'red', 'blue', 'yellow' ]

// 陣列扁平化
const myArr = [[1, 2], [3, 4, 5], [6, 7, 8]];
const newArr = myArr.reduce((arr, element) => arr.concat(element), []);
console.log(newArr);
// [ 1, 2, 3, 4, 5, 6, 7, 8 ]
