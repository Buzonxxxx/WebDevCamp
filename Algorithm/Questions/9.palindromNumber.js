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

// check if x valid, x should not be negative number, x in 0 ~ 9, should be true
// convert x to String
// compare x and reversed x

var isPalindrome = function(x) {
    if (x < 0) return false
    if (x >= 0 && x <= 9) return true
    const str = x.toString()

    return str === str.split('').reverse().join('')

};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(10)); // false
