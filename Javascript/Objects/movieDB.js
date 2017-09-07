const movie = [
	{
		title: "In Bruges",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Frozen",
		rating: 4.5,
		hasWatched: false
	},
	{
		title: "Mad Max Fury Roas",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Les Miserables",
		rating: 3.5,
		hasWatched: false
	}
	];

movie.forEach(index => {
	if (index.hasWatched === true){
console.log("You have watched \"" + index.title + "\" - "+index.rating+" stars");
	}
	else
console.log("You have not seen \"" + index.title + "\" - "+index.rating+" stars");
});

console.log("USE YOUR OWN MOVIES!");

