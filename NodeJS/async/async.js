const getIDs = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve([ 523, 883, 432, 974 ]);
	}, 1500);
});

const getRecipe = (recID) => {
	return new Promise((resolve, reject) => {
		setTimeout(
			(id) => {
				const recipe = { title: 'Fresh tomato pasta', publisher: 'Louis' };
				resolve(`${id}: ${recipe.title}`);
			},
			1500,
			recID
		);
	});
};

const getRelated = (publisher) => {
	return new Promise((resolve, reject) => {
		setTimeout(
			(pub) => {
				const recipe2 = { title: 'Italian Pizza', publisher: 'Jason' };
				resolve(`title: ${recipe2.title}, Publisher: ${pub}`);
			},
			1500,
			publisher
		);
	});
};

async function getRecipesAW() {
	const IDs = await getIDs;
	console.log(IDs);
	const recipe = await getRecipe(IDs[2]);
	console.log(recipe);
	const related = await getRelated('Louis');
	console.log(related);
	return recipe;
}

getRecipesAW().then((result) => console.log(`${result} is the best ever!`));
