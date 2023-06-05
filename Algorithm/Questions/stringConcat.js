/*
 * given string 'abcdefglkjhgfd', and number n
 *
 * i.g.
 * print(str, 2) => 'aba'
 * print(str, 3) => 'abcba'
 * print(str, 4) => 'abcdcba'
 *
 */

const print1 = (str, n) => {
  let ans = '';
  for (let i = 0; i < n; i++) {
    ans += str[i];
    if (i === n - 1) {
      i -= 1;
      while (i >= 0) {
        ans += str[i];
        i -= 1;
      }
      return ans;
    }
  }
  return undefined;
};

const print2 = (str, n) => {
  let newStr = str.slice(0, n) // 'abcd'
  newStr = newStr.slice(0, newStr.length - 1 ) + newStr.split('').reverse().join('') // 'abc' + 'dcba'
  return newStr
};



console.log(print1('abcdefglkjhgfd', 4)); //abcdcba
console.log(print2('abcdefglkjhgfd', 4)); //abcdcba
