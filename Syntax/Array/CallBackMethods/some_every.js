// 找array內符合元素
const arr = [ 1, 2, 3, 4, 4, 5 ];

// some 一個符合就回true
console.log(arr.some((num) => num > 3));

// every 全部符合才回true
console.log(arr.every((num) => num > 3));
