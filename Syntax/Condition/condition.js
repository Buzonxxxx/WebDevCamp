// switch
const job = 'teacher';
switch (job) {
	case 'teacher':
		console.log('John teaches kids.');
		break;
	case 'driver':
		console.log('John drives a cab in Lisbon.');
		break;
	case 'cop':
		console.log('John helps fight crime.');
		break;
	default:
		console.log('John does something else');
}

// logic operator order: 先! 再 && 再 ||
const x = 7;
const result = x == 7 || (x === 3 && x > 10); // 先 && 再 ||
console.log(result);

// tenary operator
const num = 7;
num === 7 ? console.log('lucky!') : console.log('bad!');
