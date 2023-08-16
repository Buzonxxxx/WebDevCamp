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
	if (str1.length !== str2.length) return false
	const result  = {}
	for (let char of str1) {
		if (result[char]) {
			result[char]++
		} else {
			result[char] = 1
		}
	}

	for (let char of str2) {
		if (!result[char]) return false
		result[char] -= 1
	}
	return true
};

// use array
// var isAnagram = function(s, t) {
// 	if (s.length !== t.length) return false;
// 	let arr = s.split('');
// 	for (let i = 0; i < t.length; i++) {
// 		const char = t[i];
// 		if (arr.indexOf(char) !== -1) {
// 			arr.splice(arr.indexOf(char), 1);
// 		} else {
// 			return false;
// 		}
// 	}
// 	if (arr.length === 0) return true;
// 	else return false;
// };
console.log(isAnagram('anagrams', 'nagarama')); // false
console.log(isAnagram('anagrams', 'nagarams')); // true
