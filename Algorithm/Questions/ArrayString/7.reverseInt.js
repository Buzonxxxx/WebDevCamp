/**
 * @param {number} x
 * @return {number}
 */

var reverse = function(x) {
	const str = x.toString();
	let newStr = '';
	for (let i = str.length - 1; i >= 0; i--) {
		newStr += str[i];
	}
	if (newStr[newStr.length - 1] === '-') {
		newStr = `-${newStr}`;
	}
	newStr = parseInt(newStr);
	if (newStr > 2 ** 31 - 1 || newStr < (-2) ** 31) return 0;
	return newStr;
};

console.log(reverse(-2147483648));
console.log(reverse(-123));
