const getRecipe = () => {
	setTimeout(() => {
		const recipeID = [ 523, 883, 432, 874 ];
		console.log(recipeID);

		setTimeout(
			(id) => {
				const recipe = { title: 'Fresh tomato pasta', publisher: 'Louis' };
				console.log(`${id}: ${recipe.title}`);

				setTimeout(
					(publisher) => {
						const recipe2 = { title: 'Italian Pizza', publisher: 'Jason' };
						console.log(`title: ${recipe2.title}, Publisher: ${publisher}`);
					},
					1500,
					recipe.publisher
				);
			},
			1000,
			recipeID[2]
		);
	}, 1500);
};
getRecipe();
