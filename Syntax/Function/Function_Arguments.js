// 接受Funciton 回傳 Function 的 Function
// Higher order function

const years = [ 1990, 1965, 1937, 2005, 1998 ];

const arrayCalc = (arr, fn) => {
	const arrRes = [];
	arr.forEach((year) => arrRes.push(fn(year)));
	return arrRes;
};

const calculatAge = (year) => new Date().getFullYear() - year;
const isFullAge = (age) => age >= 18;
const maxHeartRate = (el) => (el >= 18 && el <= 81 ? Math.round(206.9 - 0.67 * el) : -1);

const ages = arrayCalc(years, calculatAge);
const fullAge = arrayCalc(ages, isFullAge);
const rates = arrayCalc(ages, maxHeartRate);

console.log(`Ages: ${ages}`);
console.log(`Full Ages?: ${fullAge}`);
console.log(`Max Heart Rates: ${rates}`);
