// splice: 從 start 位置開始"移除"指定的元素個數，然後插入新元素。刪除的元素會當做新的 Array 物件傳回
// array.splice(start, deleteCount, item1, ....., itemX)
const ages = [1, 2, 3, 4, 5, 6]

console.log(ages.splice(0, 1))
console.log(ages)

console.log(ages.splice(0, 2, 'xd', 'kk'))
console.log(ages)