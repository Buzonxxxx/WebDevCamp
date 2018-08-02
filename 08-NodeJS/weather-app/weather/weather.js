const request = require('request')

const getWeather = (lat, lng, callback) => {

  request({
    url: `https://api.darksky.net/forecast/e1a90f332437d644e8d4a0b2909526c1/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if(error) {
      callback('Unalbe to connect to Forecast.io server.')
    } else if (response.statusCode === 400) {
      callback("Unalbe to fetch weather.")
    } else if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      })
    } else {
      callback("Unalbe to fetch weather.")
    }
  })
}

module.exports.getWeather = getWeather