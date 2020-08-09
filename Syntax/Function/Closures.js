/* Closures:
A inner function has always access to the variables and parameters of its outer function,
even after the outer function has returned
*/

// sample1
const retirement = (retirementAge) =>
	function(yearOfBirth) {
		const age = new Date().getFullYear() - yearOfBirth;
		return `${retirementAge - age} year(s) left until retirement.`;
	};

const retirementUS = retirement(66)(1983);
const retirementGermany = retirement(65)(1983);
console.log(retirementUS);
console.log(retirementGermany);

// sample2
const interviewQuestion = (job) =>
	function(name) {
		if (job === 'designer') {
			console.log(`${name}, can you please explain what UX design is?`);
		} else if (job === 'teacher') {
			console.log(`What subject do you teach, ${name}?`);
		} else {
			console.log(`Hello, ${name}, what do you do?`);
		}
	};
interviewQuestion('teacher')('Mark');

// ES6 Closure
const call = () => {
	const secret = 'ES6 Rocks!';
	const reveal = () => console.log(secret);
	reveal();
};

call();
