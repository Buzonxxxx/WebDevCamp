/*
  states of promises
  1. unresolved
  2. resolved -> then
  3. rejected -> catch
*/

p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolved promise data')
  }, 3000)
  setTimeout(() => {
    reject('Rejectedd promise data')
  }, 3000)
})

p
.then( (response) => {
  console.log('finally finished')
  console.log('I was also ran !!!')
  console.log(response)
})
.catch((error) => {
  console.log('uh ah!!')
  console.log(error)
})


// rewrite in async/await, use try/catch for error handler
const np = async() => {
  try {
  await setTimeout(() => {
    console.log('finally finished')
    console.log('I was also ran !!!')
  }, 3000)
  } catch(e) {
    console.log('uh ah!!')
  }
}

np()