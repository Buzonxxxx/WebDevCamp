/**
 * @param {number} x
 * @return {number}
 */

var reverse = function(n) {
	const reversed = n.toString().split('').reverse().join('')
	
	if (reversed > 2 ** 31 - 1 || reversed < (-2) ** 31) return 0;

	return parseInt(reversed) * Math.sign(n)
};

console.log(reverse(-2147483648));
console.log(reverse(-123));
