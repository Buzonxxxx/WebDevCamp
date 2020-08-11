// Executed a reducer function on each element of the array resulting in a "single value"

// 加總
const numbers = [ 10, 20, 30 ];
const result = numbers.reduce((sum, number) => sum + number, 0);
console.log(result); // 60

// 取值
const primaryColors = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' } ];
const result2 = primaryColors.reduce((previous, primaryColor) => {
	previous.push(primaryColor.color);
	return previous;
}, []);
console.log(result2); // [ 'red', 'blue', 'yellow' ]

// 陣列扁平化
const myArr = [ [ 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ] ];
const newArr = myArr.reduce((arr, element) => arr.concat(element), []);
console.log(newArr);
// [ 1, 2, 3, 4, 5, 6, 7, 8 ]
