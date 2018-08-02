const ages = [1, 2, 3, 4, 5, 6]
// slice 方法會複製元素一直到 end 所代表的元素，但並不包括此元素
// array.slice(start, end(不算))
console.log(ages.slice(0,1))
console.log(ages)

// splice: 從 start 位置開始移除指定的元素個數，然後插入新元素。刪除的元素會當做新的 Array 物件傳回
// array.splice(start, deleteCount, item1, ....., itemX)
console.log(ages.splice(0, 1))
console.log(ages)

console.log(ages.splice(0, 2, 'xd', 'kk'))
console.log(ages)