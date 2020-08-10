// Return a function

const makeBetweenFunc = (x, y) => {
	return function(num) {
		return num >= x && num <= y;
	};
};

const isChild = makeBetweenFunc(0, 18);
console.log(isChild(15));
console.log(makeBetweenFunc(0, 18)(15));

const isNineties = makeBetweenFunc(1990, 2000);
console.log(isNineties(1866));
console.log(makeBetweenFunc(1990, 2000)(1866));

console.log('=================');

const interviewQuestion = (job) => {
	if (job === 'designer') {
		return function(name) {
			console.log(`${name}, can you please explain what UX design is?`);
		};
	}
	if (job === 'teacher') {
		return function(name) {
			console.log(`What subject do you teach, ${name}?`);
		};
	}
	return function(name) {
		console.log(`Hello, ${name}, what do you do?`);
	};
};
const teacherQuestion = interviewQuestion('teacher');
const designerQuestion = interviewQuestion('designer');

teacherQuestion('Jane');
designerQuestion('Louis');
interviewQuestion('teacher')('Mark');
