/*
  states of promises
  1. unresolved
  2. resolved -> then
  3. rejected -> catch
*/

p = new Promise((resolve, reject) => {
  // resolve()
  setTimeout(() => {
    resolve()
  }, 3000)
  // reject()
  setTimeout(() => {
    reject()
  }, 3000)
})

p
.then(() => console.log('finally finished'))
.then(() => console.log('I was also ran !!!'))
.catch(() => console.log('uh ah!!'))


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