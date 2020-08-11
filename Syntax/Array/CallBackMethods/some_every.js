// return boolean
// every 全部符合才回true
const words = [ 'dog', 'dig', 'log', 'bag', 'wag' ];
const result = words.every((word) => {
	const last = word.length - 1;
	return word[last] === 'g';
});
console.log(result);

// some 一個符合就回true
console.log(words.some((word) => word[0] === 'd'));
