const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director';
const person2 = 'James Cameron';

const team = {
	[role]: person,
	[role2]: person2,
	[1 + 6 + 9]: 'sixteen'
};

const addProp = (obj, k, v) => ({ ...obj, [k]: v });
console.log(addProp(team, 'happy', ':)'));
