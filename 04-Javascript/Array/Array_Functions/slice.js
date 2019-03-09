const ages = [1, 2, 3, 4, 5, 6]
// slice 方法會"複製"元素一直到 end 所代表的元素，但並不包括此元素
// array.slice(start, end(不算))

console.log(ages.slice(0, 1))
// [ 1 ]
console.log(ages)
// [ 1, 2, 3, 4, 5, 6 ] 

console.log(ages.slice(1))
// [ 2, 3, 4, 5, 6 ]
console.log(ages.slice(2))
// [ 3, 4, 5, 6 ]

