// Function scope: var
if (true) {
	var name = 'Louis';
}
console.log(name);

// Block scope: let/const
// if (true) {
// 	let animal = 'eel';
// }
// console.log(animal);

// Lexical scope
const outer = () => {
	let movie = 'Amadeus';
	const inner = () => {
		console.log(movie.toUpperCase());
	}
	inner();
}
outer()
