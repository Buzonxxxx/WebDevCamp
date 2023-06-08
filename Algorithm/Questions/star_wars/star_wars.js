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
  try {
      const response = await axios.get('https://swapi.py4e.com/api/films/');
      let films = response.data.results
      let vehicleAPIs = []
      for(let film of films) {
        vehicleAPIs = vehicleAPIs.concat(film.vehicles)
      }
      
      let uniqueVehicleAPIs = [...new Set(vehicleAPIs)]

      for (let vehicleAPI of uniqueVehicleAPIs) {
        const response = await axios.get(vehicleAPI)
        
        const max_atmosphering_speed = response.data.max_atmosphering_speed
        const vehicleName = response.data.name
        
        if (max_atmosphering_speed && max_atmosphering_speed > 1000) {
          console.log(`The ${vehicleName}'s speed is over 1000, it'is ${max_atmosphering_speed}`)
        }
      }
    } catch(error){
      console.log(error)
    }
  }

  async function test() {
    await getSpecis()
    await listAllFilms()
    await overOneThousandSpeed()
  }

  test()