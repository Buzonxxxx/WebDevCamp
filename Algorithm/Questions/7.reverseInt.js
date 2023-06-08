/**
 * @param {number} x
 * @return {number}
 */


// The Math.sign() static method returns 1 or -1, 
// indicating the sign of the number passed as argument. 
// If the input is 0 or -0, it will be returned as-is.

// convert number to String
// reverse the string
// check if it's negative
// check if it's outside the 32 bit range

var reverse = function(n) {
	const reversed = n.toString().split('').reverse().join('')
	const number = parseInt(reversed) * Math.sign(n)
	
	if (number > 2 ** 31 - 1 || number < (-2) ** 31) return 0;

	return number
};

console.log(reverse(-2147483648));
console.log(reverse(-123));
