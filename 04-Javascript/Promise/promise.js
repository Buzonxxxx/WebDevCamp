let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
    // reject();
  }, 3000);
})
  .then(() => console.log('Finally finished!'))
  .then(() => console.log('I was also ran.'))
  .catch(() => console.log('uh oh!'))
