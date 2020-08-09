// 先用dot notation, 不行才用square brackets[]
const me = {}; // or const person1 = new Object();
me.name = 'Louis';
me['my cat'] = 'cutie';
me[100] = 'one hundred';
console.log(me);
console.log(me.name); // key = variable
console.log(me['my cat']); // key = string
console.log(me[100]); // 100 was converted to '100' in key

console.log('==========');

// Object.create
const personPortal = {
	calculateAge() {
		return 2016 - this.yearOfBirth;
	}
};

const John = Object.create(personPortal);
John.name = 'John';
John.yearOfBirth = 1990;
John.job = 'teacher';

console.log(John);
console.log(John.yearOfBirth);
console.log(John.calculateAge());
