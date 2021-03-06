/*
 *
 * Determine whether an integer is a palindrome. An integer is a palindrome
 * when it reads the same backward as forward.
 *
 * Example 1:
 * Input: 121
 * Output: true
 *
 * Example 2:
 * Input: -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it becomes 121-.
 * Therefore it is not a palindrome.
 *
 * Example 3:
 * Input: 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 *
 * Follow up:
 * Coud you solve it without converting the integer to a string?
 *
 */

// validate num
// save num to target
// reverse num
// if reverse num === num return true

const isPalindrome = (num) => {
	if (num < 0) return false;
	if (num >= 0 && num < 10) return true;
    // reverse num shoule equal to num
    const str = num.toString().split('').reverse().join('')
    
    const newNum = parseInt(str)
    if (newNum == num) return true
		return false
};

console.log(isPalindrome(121));
console.log(isPalindrome(10));
