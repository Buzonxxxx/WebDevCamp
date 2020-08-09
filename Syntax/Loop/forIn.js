/* eslint-disable guard-for-in */
// 用for...in遍歷陣列，得到的是索引
const array = ['a', 'b', 'c'];
for (const key in array) {
  if (array.length !== 0) {
    // console.log(key, array[key]);
  }
}

// 用for...in遍歷物件，得到的是索引
const table = {
  a: 10,
  b: true,
  c: 'jadeshu',
};
for (const key in table) {
  if (table[key] === 'jadeshu') {
    // console.log(key);
  }
}

// 用for...in遍歷string，得到的是索引
const str = 'hello';
for (const x in str) {
  console.log(str[x]);
}
