const translateRomanNumeral = (romanNumeral) => {
	const DIGIT_VALUES = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000
	};

	let result = 0;
	const input = romanNumeral.split('');
	for (let i = 0; i < input.length; i++) {
		const currentValue = DIGIT_VALUES[input[i]];
		const nextValue = DIGIT_VALUES[input[i + 1]];
		if (currentValue === undefined) {
			return 'null';
		}
		if (currentValue < nextValue) {
			result += nextValue - currentValue;
			i += 1;
		} else {
			result += currentValue;
		}
	}
	return result;
};

console.log(translateRomanNumeral('XXXIV'));
