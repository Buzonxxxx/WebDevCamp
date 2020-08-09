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
