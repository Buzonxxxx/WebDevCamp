// 找array內符合元素
const arr = [ 1, 2, 3, 4, 4, 5 ];

// indexOf, 找到回index, 沒找到回-1
const ingrediants = [ 'water', 'corn', 'flour', 'cheese', 'sugar', 'shrimp', 'butter' ];
console.log(ingrediants.indexOf('water')); // 0
console.log(ingrediants.indexOf('corn')); // 1
console.log(ingrediants.indexOf('xxxx')); // -1
console.log(ingrediants.indexOf('cheese', 5)); // start from Index 5
console.log(ingrediants.indexOf('cheese', 1)); // start from Index 1
