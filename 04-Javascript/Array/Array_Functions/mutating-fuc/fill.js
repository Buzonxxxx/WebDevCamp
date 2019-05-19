const address = new Array(39).fill(0).join('') + 1;
console.log(typeof address)
// 0000000000000000000000000000000000000001

const test = [1,1,1,1,1,1,,1]
test.fill(5)
console.log(test)