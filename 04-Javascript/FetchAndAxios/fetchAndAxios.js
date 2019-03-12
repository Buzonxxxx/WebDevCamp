const fetch = require('node-fetch');
const axios = require('axios');
const url = 'https://api.github.com/users/github';

  fetch(url)
    .then(res => {
      console.log(res.status) // 200
      // return res.json() 
    })
    // .then(json => console.log(json));

  const newFetch = async() => {
    response = await axios.get(url);
    console.log(response.status) // 200
  }
    
  newFetch();