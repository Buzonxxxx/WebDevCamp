/*
 * given string 'abcdefglkjhgfd', and number n
 *
 * i.g.
 * print(str, 2) => 'aba'
 * print(str, 3) => 'abcba'
 * print(str, 4) => 'abcdcba'
 *
 */

const print = (str, n) => {
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

console.log(print('abcdefglkjhgfd', 2));
