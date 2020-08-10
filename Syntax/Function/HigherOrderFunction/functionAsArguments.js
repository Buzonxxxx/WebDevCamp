// 一個函式(Function)若符合下列條件之一，即稱為Higher Order Function(高階函數)：
// - 接收函式做為引數的函式。
// - 回傳結果為函式的函式。

// Accept other functions as arguments

function callTwice(func) {
	func();
	func();
}

function laugh() {
	console.log('HAHAHAHAHAHAHAHAHAHAHAHA');
}
callTwice(laugh); // laugh is callback function

console.log('========================');

const years = [ 1990, 1965, 1937, 2005, 1998 ];
const arrayCalc = (arr, func) => {
	const arrRes = [];
	for (const year of arr) {
		arrRes.push(func(year));
	}
	return arrRes;
};

const calculatAge = (year) => new Date().getFullYear() - year;
const isFullAge = (age) => age >= 18;
const maxHeartRate = (el) => (el >= 18 && el <= 81 ? Math.round(206.9 - 0.67 * el) : 'Invalid age!');

const ages = arrayCalc(years, calculatAge);
const fullAge = arrayCalc(ages, isFullAge);
const rates = arrayCalc(ages, maxHeartRate);

console.log(`Ages: ${ages}`);
console.log(`Full Ages?: ${fullAge}`);
console.log(`Max Heart Rates: ${rates}`);
