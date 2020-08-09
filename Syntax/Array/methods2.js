// 找array內符合元素
const arr = [ 1, 2, 3, 4, 4, 5 ];

// filter 有符合的回array, 沒符合的回空array
console.log(arr.filter((num) => num > 3));

// find 一個符合的就回傳值, 沒符合的回undeifned
console.log(arr.find((num) => num > 3));

// findIndex 符合的就回傳index, 沒符合的回-1
console.log(arr.findIndex((num) => num === 3));

// some 一個符合就回true
console.log(arr.some((num) => num > 3));

// every 全部符合才回true
console.log(arr.every((num) => num > 3));

// indexOf, 找到回index, 沒找到回-1
const ingrediants = [ 'water', 'corn', 'flour', 'cheese', 'sugar', 'shrimp', 'butter' ];
console.log(ingrediants.indexOf('water'));
console.log(ingrediants.indexOf('corn'));
console.log(ingrediants.indexOf('cheese', 5)); // from Index 5
console.log(ingrediants.indexOf('cheese', 1)); // from Index 1

// includes, return boolean
console.log(arr.includes(0));
console.log(arr.includes(3));
