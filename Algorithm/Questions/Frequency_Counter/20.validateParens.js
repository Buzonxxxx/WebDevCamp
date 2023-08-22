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

// verify s
// loop s
// if char = '(', push ')' to array
// if char = '[', push '}' to array
// if char = '{', push '}' to array
// if array.length === 0 || array.pop() !== char -> return false

// if array.length === 0 return true
// return fasle

const isValid = (s) => {
	if (s.length <= 1) return false
	let arr = []
	for (let i = 0; i < s.length; i++) {
		const char = s[i]
		if (char === '(') arr.push(')')
		else if (char === '[') arr.push(']')
		else if (char === '{') arr.push ('}')
		else if (arr.length === 0 || char !== arr.pop()) return false
	}
	if (arr.length === 0) return true
	return false
};
console.log(isValid('{[]}')); // true
console.log(isValid('((')); // false
console.log(isValid('()')); // true
console.log(isValid('[(])')); // false
