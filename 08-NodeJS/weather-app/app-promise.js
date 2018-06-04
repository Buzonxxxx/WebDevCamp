const yargs = require('yargs')
const axios = require('axios')

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('helo', 'h')
  .argv

  const encodedAddress = encodeURIComponent(argv.address)
  geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyArKQYVVDuotzt6rvZyEQeXC2zlx7-CEB8`

  axios.get(geocodeUrl).then((response) => {
    if(response.data.status === 'ZERO_RESULTS') {
      throw new Error('Unable to find that address.')
    }
    const lat = response.data.results[0].geometry.location.lat
    const lng = response.data.results[0].geometry.location.lng
    const weatherUrl = `https://api.darksky.net/forecast/e1a90f332437d644e8d4a0b2909526c1/${lat},${lng}`
    console.log(response.data.results[0].formatted_address)
    return axios.get(weatherUrl)
  }).then((response) => {
    const temperature = response.data.currently.temperature
    const apparentTemperature = response.data.currently.apparentTemperature
    console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}`)
  }).catch((e) => {
    if(e.code === 'ENOTFOUND') {
      console.log('Unalbe to connect API servers')
    } else {
      console.log(e.message)
    }
  })