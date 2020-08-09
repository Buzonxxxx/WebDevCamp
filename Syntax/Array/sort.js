// sort, reverse
const arr = [ 1, 3, 2 ];
console.log(arr.sort());
// [1,2,3]
console.log(arr.reverse());
// [3,2,1]

// 小到大
console.log([ 4, 3, 6, 2, 7, 1, 5, 9, 8 ].sort((num1, num2) => num1 - num2));
// 大到小
console.log([ 4, 3, 6, 2, 7, 1, 5, 9, 8 ].sort((num1, num2) => num2 - num1));

// 短到長
console.log([ 'Steele', 'Colt', 'Data Structures', 'Algorithms' ].sort((str1, str2) => str1.length - str2.length));
// 長到短
console.log([ 'Steele', 'Colt', 'Data Structures', 'Algorithms' ].sort((str1, str2) => str2.length - str1.length));
