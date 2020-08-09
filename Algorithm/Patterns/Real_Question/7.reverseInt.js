/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  const str = x.toString();
  let rStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    rStr += str[i];
  }
  if (rStr[rStr.length - 1] === '-') {
    rStr = `-${rStr}`;
  }
  rStr = parseInt(rStr, 10);
  if (rStr > 2 ** 31 - 1 || rStr < (-2) ** 31) return 0;
  return rStr;
};

console.log(reverse(-2147483648));
console.log(reverse(-1233500));
