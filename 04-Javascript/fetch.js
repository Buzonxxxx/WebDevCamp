url = "https://jsonplaceholder.typicode.com/posts12132/"

fetch(url)
  .then(response => console.log(response))
  .catch(error => console.log('BAD', error))
  // .then(data => console.log(data))