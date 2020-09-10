// loop string
// if next value bigger than current value, result += nextValue - currentVal

const translateRomanNumeral = (s) => {
	const table = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000
	};
	let result = 0;
	for (let i = 0; i < s.length; i++) {
		const currentVal = table[s[i]];
		const nextVal = table[s[i + 1]];
		if (currentVal < nextVal) {
			result += nextVal - currentVal;
			i++;
		} else {
			result += currentVal;
		}
	}
	return result;
};

console.log(translateRomanNumeral('XXXIV'));
