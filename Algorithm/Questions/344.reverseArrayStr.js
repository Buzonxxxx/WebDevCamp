// [Multiple Pointers]
// Write a function that reverses a string. The input string is given as an array of characters char[].
// Do not allocate extra space for another array,
// you must do this by modifying the input array in-place with O(1) extra memory.

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// verify s
// loop s and swap the left and right element

var reverseString = function(s) {
	if (s.length === 0) return false
	let temp = ''
	let i = 0
	let j = s.length - 1
	while (i < j) {
		 // swap
		 temp = s[j]
		 s[j] = s[i]
		 s[i] = temp
		 i++
		 j--
	}
	return s
};

const reverseString2 = (s) => {
	s.reverse()
	return s
}

console.log(reverseString([ 'h', 'e', 'l', 'l', 'o' ]));
console.log(reverseString2([ 'h', 'e', 'l', 'l', 'o' ]));