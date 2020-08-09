
const getIDs = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([523, 883, 432, 974]);
    reject(new Error('something bad happened'));
  }, 1500);
});

const getRecipe = (recID) => new Promise((resolve, reject) => {
  setTimeout((id) => {
    const recipe = { title: 'Fresh tomato pasta', publisher: 'Louis' };
    resolve(`${id}: ${recipe.title}`);
    reject(new Error('something bad happened'));
  }, 1500, recID);
});

const getRelated = (publisher) => new Promise((resolve, reject) => {
  setTimeout((pub) => {
    const recipe2 = { title: 'Italian Pizza', publisher: 'Jason' };
    resolve(`title: ${recipe2.title}, Publisher: ${pub}`);
    reject(new Error('something bad happened'));
  }, 1500, publisher);
});

// get [523, 883, 432, 974] from resolve
getIDs
  .then((IDs) => {
    console.log(IDs);
    return getRecipe(IDs[2]);
  })
  .then((recipe) => {
    console.log(recipe);
    return getRelated('Louis');
  })
  .then((recipe) => {
    console.log(recipe);
  })
  .catch((error) => {
    console.log(error);
  });
