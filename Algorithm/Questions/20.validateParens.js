/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
  1. Open brackets must be closed by the same type of brackets.
  2. Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.

Example 1:
Input: "()"
Output: true

Example 2:
Input: "()[]{}"
Output: true

Example 3:
Input: "(]"
Output: false

Example 4:
Input: "([)]"
Output: false

Example 5:
Input: "{[]}"
Output: true
*/
const isValid = (s) => {
  if (s === null || s.length <= 0) return true;
  const arr = s.split('');
  const stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '[') stack.push(']');
    else if (arr[i] === '{') stack.push('}');
    else if (arr[i] === '(') stack.push(')');
    else if (stack.length === 0 || arr[i] !== stack.pop()) return false;
    console.log(stack);
  }
  if (stack.length === 0) return true;
  return false;
};
console.log(isValid('{[]}'));
