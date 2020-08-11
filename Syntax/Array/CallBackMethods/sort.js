// sort, reverse
const arr = [ 1, 3, 2 ];
console.log(arr.sort());
console.log(arr.reverse());

console.log('==========');

const prices = [ 12, 3000, 35.99, 400.5, 9500, 99.99 ];

const badSort = prices.sort();
console.log(badSort);

// 小到大
const ascSort = prices.sort((a, b) => a - b);
console.log(ascSort);

// 大到小
const descSort = prices.sort((a, b) => b - a);
console.log(descSort);

console.log('==========');

// 短到長
console.log([ 'Steele', 'Colt', 'Data Structures', 'Algorithms' ].sort((str1, str2) => str1.length - str2.length));
// 長到短
console.log([ 'Steele', 'Colt', 'Data Structures', 'Algorithms' ].sort((str1, str2) => str2.length - str1.length));
