// fill, join: 填滿array
const address = new Array(39).fill(0).join('') + 1;
console.log(address, address.length);
// 0000000000000000000000000000000000000001 40

// reverse & join(把element接起來變string)
const letters = [ 'E', 'S', 'R', 'E', 'V', 'E', 'R' ];
console.log(letters.reverse().join('').toLowerCase());
