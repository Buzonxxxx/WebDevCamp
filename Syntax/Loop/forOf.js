// Easy way to iterate arrays/strings

// (o) array, string, map, set
// (x) obj

// array
const colors = [ 'red', 'green', 'blue' ];
for (let color of colors) {
	console.log(color);
}

console.log('=====');

// string
for (let char of 'cockadoodledoo') {
	console.log(char.toUpperCase());
}

console.log('=====');

const movieReviews = {
	Alien: 9,
	Amelie: 8,
	'In Bruges': 9,
	Amedeus: 10,
	'Kill Bill': 8.5,
	'Little Miss Sunshine': 7.5
};

// loop object with Object function
const movies = Object.keys(movieReviews);
for (let movie of movies) {
	console.log(movie, movieReviews[movie]);
}

const ratings = Object.values(movieReviews);
let total = 0;
for (let rating of ratings) {
	total += rating;
}
let avg = total / ratings.length;
console.log(avg);

console.log('=====');

// map: 轉成array印出來
const map = new Map();
map.set('name', 'Louis');
map.set('country', 'Taiwan');
console.log(map);
for (const info of map) {
	console.log(info);
}
