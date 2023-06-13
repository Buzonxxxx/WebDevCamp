/* eslint-disable operator-assignment */
/* eslint-disable no-bitwise */

// Bitwise
const getSum = (a, b) => {
  let temp;
  while (a !== 0) {
    temp = (a & b) << 1; // a & b 得到所有需要进位的地方，左移一位完成进位。
    b = a ^ b; // a ^ b 得到a与b不一样的地方，即不需要进位的地方
    a = temp;
  }
  return b;
};

console.log(getSum(2, 3));
