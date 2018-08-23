// Promise way
const getIDs = new Promise((resolve, reject) => {
  setTimeout(() => {[
    resolve([523, 883, 432, 974])
  ]}, 1500)
})

const getRecipe = recID => {
  return new Promise((resolve, reject) => {
    setTimeout(ID => {
    const recipe = { title: 'Fresh tomato pasta', publisher: 'Louis' }
    resolve(`${ID}: ${recipe.title}`)
    }, 1500, recID)
  })
}

const getRelated = publisher => {
  return new Promise((resolve, reject) => {
    setTimeout(pub => {
    const recipe = { title: 'Italian Pizza', publisher: 'Louis'}
    resolve(`${pub}: ${recipe.title}`)
    }, 1500, publisher)
  })
}

// getIDs
//   .then(IDs => {
//     console.log(IDs)
//     return getRecipe(IDs[2])
//   })
//   .then(recipe => {
//     console.log(recipe)
//     return getRelated('Louis')
//   })
//   .then(releatd => {
//     console.log(releatd)
//   })
//   .catch(error => console.log('error'))


//async await way
async function getRecipesAW() {
  const IDs = await getIDs
  console.log(IDs)
  const recipe = await getRecipe(IDs[2])
  console.log(recipe)
  const related = await getRelated('Louis')
  console.log(related)
  return recipe
}
// getRecipesAW()
getRecipesAW().then(result => console.log(`${result} is the best ever!`))