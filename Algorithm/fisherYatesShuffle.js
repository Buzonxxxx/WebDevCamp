// Fisher Yates Shuffle Algorithm
function shuffle(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		// pick random element before current element
		let j = Math.floor(Math.random() * (i + 1));
		// swap
		[ arr[i], arr[j] ] = [ arr[j], arr[i] ];
		console.log(arr);
	}
}

shuffle([ 1, 2, 3, 4, 5, 6, 7, 8 ]);
