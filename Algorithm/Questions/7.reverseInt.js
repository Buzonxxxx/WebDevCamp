/**
 * @param {number} x
 * @return {number}
 */

var reverse = function(x) {
	let str = x.toString().split('').reverse().join('')
	
	if (str[str.length - 1] === '-') {
		str = `-${str}`;
	}
	str = parseInt(str);
	if (str > 2 ** 31 - 1 || str < (-2) ** 31) return 0;
	return str;
};

console.log(reverse(-2147483648));
console.log(reverse(-123));
