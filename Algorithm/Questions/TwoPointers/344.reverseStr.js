// [Multiple Pointers]
// Write a function that reverses a string. The input string is given as an array of characters char[].
// Do not allocate extra space for another array,
// you must do this by modifying the input array in-place with O(1) extra memory.

const reverseString = (s) => {
	if (s.length === 0) return s;
	let str = '';
	// transform input array to string
	for (let i = 0; i < s.length; i++) {
		str += s[i];
	}
	let left = 0;
	let right = s.length - 1;
	while (right >= 0) {
		s[left] = str.charAt(right);
		left += 1;
		right -= 1;
	}
	return s;
};

const reverseString2 = (s) => {
	let temp = '';
	let i = 0;
	for (let j = s.length - 1; j > i; j--) {
		temp = s[j];
		s[j] = s[i];
		s[i] = temp;
		i++;
	}
	return s;
};

const reverseString3 = (s) => {
	return s.reverse()
}

console.log(reverseString([ 'h', 'e', 'l', 'l', 'o' ]));
console.log(reverseString2([ 'h', 'e', 'l', 'l', 'o' ]));
console.log(reverseString3([ 'h', 'e', 'l', 'l', 'o' ]));