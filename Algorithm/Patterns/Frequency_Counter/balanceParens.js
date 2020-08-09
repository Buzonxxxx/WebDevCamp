/* eslint-disable no-plusplus */
// interview question
// parentheses are balance or not?

const balanceParens = (string) => {
  const arr = string.split('');
  const result = {};
  for (let i = 0; i < arr.length; i++) {
    const char = arr[i];
    if (!result[char]) {
      result[char] = 1;
    } else {
      result[char] += 1;
    }
  }
  if (result['('] === result[')']) return true;
  return false;
};

console.log(balanceParens(')((((((())))))'));
