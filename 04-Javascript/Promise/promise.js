/*
  states of promises
  1. unresolved
  2. resolved -> then
  3. rejected -> catch
*/

promise = new Promise((resolve, reject) => {
  // resolve()
  setTimeout(() => {
    resolve()
  }, 3000)
  // reject()
  setTimeout(() => {
    reject()
  }, 3000)
})

promise
.then(() => console.log('finally finished'))
.then(() => console.log('I was also ran !!!'))
.catch(() => console.log('uh ah!!'))
