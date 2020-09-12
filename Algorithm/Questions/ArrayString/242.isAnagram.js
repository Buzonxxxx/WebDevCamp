/*
 * [Frequency Counter]
 * isAnagram('','') // true
 * isAnagram('car', 'rca') // true
 * isAnagram('cat', 'acb') // false
 *
 *
 * check string length
 * put str1 char in obj and add count
 * loop str2 to get char
 * if char not in obj => false
 * if chat in obj => count - 1, if complete the loop, return true
 */

// use obj
const isAnagram = (str1, str2) => {
	if (str1.length !== str2.length) return false;
	const charCount = {};
	for (let i = 0; i < str1.length; i++) {
		if (!charCount[str1[i]]) {
			charCount[str1[i]] = 1;
		} else {
			charCount[str1[i]] += 1;
		}
	}
	for (let i = 0; i < str2.length; i++) {
		if (!charCount[str2[i]]) {
			return false;
		}
		charCount[str2[i]] -= 1;
	}
	return true;
};

// use array
var isAnagram2 = function(s, t) {
	if (s.length !== t.length) return false;
	let arr = s.split('');
	for (let i = 0; i < t.length; i++) {
		const char = t[i];
		if (arr.indexOf(char) !== -1) {
			arr.splice(arr.indexOf(char), 1);
		} else {
			return false;
		}
	}
	if (arr.length === 0) return true;
	else return false;
};
console.log(isAnagram('anagrams', 'nagarams'));
console.log(isAnagram2('anagrams', 'nagarams'));
