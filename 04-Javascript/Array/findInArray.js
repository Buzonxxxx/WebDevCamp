// 找array內符合元素
const arr = [1,2,3,4,4,5]

// filter 有符合的回array, 沒符合的回空array
console.log(arr.filter(num => num > 3 ))

// find 一個符合的就回傳值, 沒符合的回undeifned
console.log(arr.find(num => num > 3 ))

// findIndex 符合的就回傳index, 沒符合的回-1
console.log(arr.findIndex(num => num == 3 ))

// some 一個符合就回true 
console.log(arr.some(num => num > 3))

// every 全部符合才回true
console.log(arr.every(num => num > 3))

// includes, 找到回true, 沒找到回false
console.log(arr.includes(3))

// indexOf, 找到回index, 沒找到回-1
console.log(arr.indexOf(0), arr.indexOf(3))



