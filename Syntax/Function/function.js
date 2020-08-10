// isValidPassword
// - at least 8 characters
// - not contain spaces
// - not contain username

const isValidPassword = (password, username) => {
	const tooShort = password.length < 8;
	const hadSpace = password.indexOf(' ') !== -1;
	const tooSimilar = password.indexOf(username) !== -1;
	if (tooShort || hadSpace || tooSimilar) return false;
	return true;
};

console.log(isValidPassword('89Fjj1nms', 'dogluver'));
console.log(isValidPassword('dogluver123!', 'dogluver'));
console.log(isValidPassword('hello1', 'dogluver'));

function add(x, y) {
	return x + y;
}

const subtract = function(x, y) {
	return x - y;
};

function multiply(x, y) {
	return x * y;
}

const divide = function(x, y) {
	return x / y;
};

//We can store functions in an array!
const operations = [ add, subtract, multiply, divide ];

//Loop over all the functions in operations
for (let func of operations) {
	let result = func(30, 5); //execute func!
	console.log(result);
}

// We can also store functions in objects!
const thing = {
	doSomething: multiply
};
console.log(thing.doSomething(4, 5)); //20
