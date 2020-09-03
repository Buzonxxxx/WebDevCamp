// splice: 從 start 位置開始"移除"指定的元素個數，然後插入新元素。刪除的元素會當做新的 Array 物件傳回
// array.splice(start, deleteCount, itemToInsert)

// delete value
const arr7 = [ 1, 2, 3 ];
console.log(arr7.splice(0, 1)); // return deleted values
// [ 1 ]
console.log(arr7);
// [ 2, 3 ]

// delete value
const arr9 = [ 1, 2, 3, 4, 5 ];
console.log(arr9.splice(2)); // 從index 2 之後全部刪掉, 回傳刪掉的值
// [ 3, 4, 5 ]
console.log(arr9);
// [ 1, 2 ]

// insert value
const animals = [ 'shark', 'salmon', 'whale', 'bear' ];
animals.splice(1, 0, 'octpous');
console.log(animals);
// [ 'shark', 'octpous', 'salmon', 'whale', 'bear' ]

// replace value
const animals2 = [ 'shark', 'salmon', 'whale', 'bear' ];
console.log(animals2.splice(0, 2, 'SHARK', 'SALMON')); // return deleted values
// [ 'shark', 'salmon' ]
console.log(animals2);
// [ 'SHARK', 'SALMON', 'whale', 'bear' ]