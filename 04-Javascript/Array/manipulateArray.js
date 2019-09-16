// fill, join: 填滿array
const address = new Array(39).fill(0).join('') + 1;
// console.log(address, address.length)
// 0000000000000000000000000000000000000001 40

// join: array to string
const a = [1,1,1]
// console.log(a.join(''))
// 111

// concat 
const f1 = ['Jane', 'Olive']
const f2 = ['Ken, John']
let bigFamily = f1.concat(f2)
// console.log(bigFamily)

// spread parameter 把一個陣列展開(expand)成個別數值"的速寫語法
bigFamily = [...f1, 'Louis', ...f2]
// console.log(bigFamily)

const max = array => Math.max(...array)
const min = array => Math.min(...array)
// console.log(max([-5, 100]))
// 100
// console.log(min([-5, 100]))  
// -5

// push: add to the end of an array
// pop:  remove the last item of an array
// (faster than shift/unshift)
const arr = [1,2,3]
arr.push(4)
// console.log(arr)
// [1,2,3,4]

arr.pop()
// console.log(arr)
// [1,2,3]

// unshift: add to the in front of an array
// shift:   remove the first item of an array
const arr2 = [1,2,3]
arr2.shift()
// console.log(arr2)
// [2,3]

arr2.unshift(1)
// console.log(arr2)
// [1,2,3]

// sort, reverse
const arr3 = [1,3,2]
// console.log(arr.sort())
// [1,2,3]
// console.log(arr.reverse())
// [3,2,1]

// 小到大
// console.log([4,3,6,2,7,1,5,9,8].sort((num1, num2) => num1 - num2))
// 大到小
// console.log([4,3,6,2,7,1,5,9,8].sort((num1, num2) => num2 - num1))

// 短到長
// console.log([ "Steele", "Colt", "Data Structures", "Algorithms" ].sort((str1, str2) => str1.length - str2.length))
// 長到短
// console.log([ "Steele", "Colt", "Data Structures", "Algorithms" ].sort((str1, str2) => str2.length - str1.length))

// delete
const arr4 = [1, 2, 3];
delete arr4[0];
// console.log(arr4)
// [ <1 empty item>, 2, 3 ]

arr4.length = 0
// console.log(arr4)
// []

// from: string to array
const arr5 = Array.from("ABCD");
// console.log(arr5);
// [ 'A', 'B', 'C', 'D' ]

// slice 方法會"複製"元素一直到 end 所代表的元素，但並不包括此元素
// array.slice(begin, end(不算))
// begin 為開始的索引值，負數代表從後面開始算起，-1為倒數第一個元素。
// end 為結束的索引值，沒有填寫時則得到arr中的所有元素
const arr6 = [1, 2, 3]
// console.log(arr6.slice(0, 1))
// [ 1 ]

// console.log(arr6)
// [ 1, 2, 3 ] 

// console.log(arr6.slice(1))
// [ 2, 3 ]

// console.log(arr6.slice(2))
// [ 3 ]

// splice: 從 start 位置開始"移除"指定的元素個數，然後插入新元素。刪除的元素會當做新的 Array 物件傳回
// array.splice(start, deleteCount, item1, ....., itemX)
const arr7 = [1, 2, 3]
// console.log(arr7.splice(0, 1))
// [ 1 ]

// console.log(arr7)
// [ 2, 3 ]

const arr8 = [1, 2, 3]
// console.log(arr8.splice(1, 2, 'xd'))
// [ 2, 3 ] 

// console.log(arr8)
// [ 1, 'xd' ]





