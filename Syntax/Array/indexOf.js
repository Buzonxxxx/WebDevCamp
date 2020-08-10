// 找array內符合元素
const arr = [ 1, 2, 3, 4, 4, 5 ];

// indexOf, 找到回index, 沒找到回-1
const ingrediants = [ 'water', 'corn', 'flour', 'cheese', 'sugar', 'shrimp', 'butter' ];
console.log(ingrediants.indexOf('water'));
console.log(ingrediants.indexOf('corn'));
console.log(ingrediants.indexOf('cheese', 5)); // from Index 5
console.log(ingrediants.indexOf('cheese', 1)); // from Index 1
