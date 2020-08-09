const john = {
	name: 'Louis',
	age: 34,
	job: 'engineer',
	presentation(style, timeOfDay) {
		if (style === 'formal') {
			console.log(`Good ${timeOfDay}, I'm ${this.name}, I'm a ${this.job} and I'm ${this.age} years old`);
		} else if (style === 'friendly') {
			console.log(
				`Hey! What's up? I'm ${this.name}, I'm a ${this.job} and I'm ${this
					.age} years old. Have a nice ${timeOfDay}.`
			);
		}
	}
};

const emily = {
	name: 'Emily',
	age: 35,
	job: 'designer'
};

john.presentation('formal', 'morning');
john.presentation('friendly', 'morning');

// call(): method borrowing, 3 arguments: this, style, timeOfDay
john.presentation.call(emily, 'friendly', 'afternoon');

// apply(): method borrowing, accept argument as array
john.presentation.apply(emily, [ 'formal', 'morning' ]);

// bind(): generate copy of function and so we can store somewhere
const johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('evening');
const emilyFormal = john.presentation.bind(emily, 'formal', 'afternoon');
emilyFormal();

/** *********************************************************** */
const years = [ 1990, 1965, 1937, 2005, 1998 ];
const calculatAge = (year) => new Date().getFullYear() - year;
const arrayCalc = (arr, fn) => {
	const arrRes = [];
	arr.forEach((year) => arrRes.push(fn(year)));
	return arrRes;
};
const ages = arrayCalc(years, calculatAge);
console.log(ages);

const isFullAge = (limit, el) => el >= limit;
const fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(fullJapan);
