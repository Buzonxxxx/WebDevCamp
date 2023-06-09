/*
 * given string 'abcdefglkjhgfd', and number n
 *
 * i.g.
 * print(str, 2) => 'aba'
 * print(str, 3) => 'abcba'
 * print(str, 4) => 'abcdcba'
 *
 * verify inputs
 * slice the string from index 0 to index n - 1
 * 
 */

// const print = (str, n) => {
//   let ans = '';
//   for (let i = 0; i < n; i++) {
//     ans += str[i]; // abcd
//     if (i === n - 1) {
//       i -= 1;
//       while (i >= 0) {
//         ans += str[i];
//         i -= 1;
//       }
//       return ans;
//     }
//   }
//   return undefined;
// };

const print = (str, n) => {
  if (str.length === 0 || n > str.length) return false
  let result = str.slice(0, n) // abcd
  result = result.slice(0, result.length - 1) + result.split('').reverse().join('') // abc + dcba = abcdcba
  return result
};


console.log(print('abcdefglkjhgfd', 4)); //abcdcba




