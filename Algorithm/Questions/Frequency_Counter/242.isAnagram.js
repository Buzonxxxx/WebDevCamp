/*
 * [Frequency Counter]
 * isAnagram('','') // true
 * isAnagram('car', 'rca') // true
 * isAnagram('cat', 'acb') // false
 *
 */

 // verify input s.length !== t.length -> reutrn false
 // init a result obj
 // loop s
 // if chat isn't in the result obj: !result[char]
 // result[char] = 1
 // else result[char]++   
 // loop t
 // if char isn't in the result obj: !result[char] -> return false
 // else result[char]--
 // return true

// use obj
const isAnagram = (s, t) => {
	if (s.length !== t.length) return false
	const result = {}
	for (let char of s) {
			if (!result[char]) {
					result[char] = 1
			} else {
					result[char]++
			}
	}

	for (let char of t) {
			if (!result[char]) {
					return false
			} else {
					result[char] -= 1
			}        
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
