const axios = require('axios')
// https://swapi.py4e.com/

// Please design an automation script to check:

// 1. How many different specis appears in film-6(Revenge of the sith)?
// 2. Please list all the film names and sort the name by episode_id.
// 3. Please find out all vehicles which max_atmosphering_speed is over 1000.

async function getSpecis() {
  try {
      const response = await axios.get('https://swapi.py4e.com/api/films/6');
      const species = response.data.species
      console.log(`There are ${species.length} specis appears in film-6(Revenge of the sith)`)
    } catch(error){
      console.log(error)
    }
  }

async function listAllFilms() {
  try {
      const response = await axios.get('https://swapi.py4e.com/api/films/');
      let films = response.data.results
      films = films.sort((a, b) => a.episode_id - b.episode_id)
      for(let film of films) {
        console.log(`The No.${film.episode_id} film's name is ${film.title}`)
      }
    } catch(error){
      console.log(error)
    }
  }

async function overOneThousandSpeed() {
  let results = []
  let response = null
  let page = 1
  do {
    try {
      response = await axios.get(`https://swapi.py4e.com/api/vehicles/?page=${page}`);
      results = results.concat(response.data.results)
      page++
    } catch (error) {
      console.error('Error fetching data:', error);
      break;
    }
  } while (response && response.data.next !== null)
  
  for (let vehicle of results) {
    if (vehicle.max_atmosphering_speed > 1000)
      console.log(`The ${vehicle.name}'s speed is over 1000, it'is ${vehicle.max_atmosphering_speed}`)
    }
      
}

  async function test() {
    await getSpecis()
    await listAllFilms()
    await overOneThousandSpeed()
  }

  test()