// return first match value, return undefined if no match
const arr = [ 1, 2, 3, 4, 4, 5 ];
console.log(arr.find((num) => num > 3));

// findIndex 符合的就回傳index, 沒符合的回-1
console.log(arr.findIndex((num) => num === 3));
