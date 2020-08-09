// Not impact original array

// slice 方法會"複製"元素一直到 end 所代表的元素，但並不包括此元素
// array.slice(begin, end(不算))
// begin 為開始的索引值，負數代表從後面開始算起，-1為倒數第一個元素。
// end 為結束的索引值，沒有填寫時則得到arr中的所有元素
const arr6 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
console.log(arr6.slice(0, 1));
// [ 1 ]
console.log(arr6);
// [ 1, 2, 3 ]
console.log(arr6.slice(5)); // 從5取到最後
// [ 2, 3 ]
console.log(arr6.slice(9));
// [ 3 ]
console.log(arr6.slice(-3)); // 從後面取三個
