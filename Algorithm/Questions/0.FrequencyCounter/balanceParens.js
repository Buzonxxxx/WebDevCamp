// [Frequency Counter]
// interview question
// parentheses are balance or not?

const balanceParens = (string) => {
  const result = {}
  for(let char of string) {
    if(result[char]) {
      result[char]++
    } else {
      result[char] = 1
    }
  }
  if(result['('] === result[')']) return true
  return false
};

console.log(balanceParens(')((((((())))))')); //true
