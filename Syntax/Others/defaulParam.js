const greet = (person, greeting = 'hi', punctuation = '!') => {
	console.log(`${greeting}, ${person}${punctuation}`);
};
greet('Louis')
