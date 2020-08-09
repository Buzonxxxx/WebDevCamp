/* eslint-disable func-names */
// Functions returning functions
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
