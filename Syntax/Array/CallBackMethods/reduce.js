// Executed a reducer function on each element of the array resulting in a "single value"

// 加總
const numbers = [ 10, 20, 30 ];
const total = numbers.reduce((sum, number) => sum + number, 0);
console.log(total); // 60

// Finding max value
const grades = [ 89, 96, 58, 77, 62, 93, 81, 99, 73 ];
const topScore = grades.reduce((max, grade) => Math.max(grade, max));
console.log(topScore);

// 取值
const primaryColors = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' } ];
const result = primaryColors.reduce((previous, primaryColor) => {
	previous.push(primaryColor.color);
	return previous;
}, []);
console.log(result); // [ 'red', 'blue', 'yellow' ]

// 陣列扁平化
const myArr = [ [ 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ] ];
const newArr = myArr.reduce((arr, element) => arr.concat(element), []);
console.log(newArr);
// [ 1, 2, 3, 4, 5, 6, 7, 8 ]
