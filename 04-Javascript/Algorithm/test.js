const arr = "Louasfsafasfsis"
console.log(arr.slice(0,1))
console.log(arr)


var car = {make: 'Honda', model: 'Accord', year: 1998};

console.log('make' in car);


// Calculate IM swim time 
// 100m 155s
function IMSwimTime(time) {
  var min = (time * 38) / 60
  var sec = (time * 38) % 60
  console.log(`Expected finish time is ${min} minutes ${sec} seconds`)
}
// Calculate IM bike time 
// 25 km/hr
function IMBikeTime(time) {
  var hr = 180 / time
  console.log(`Expected finish time is ${hr} hours `)
}

// Calculate IM run time 
// 6m30s/km
function IMRunTime(time) {
  var hr = 180 / time
  console.log(`Expected finish time is ${hr} hours `)
}

IMSwimTime(155)
IMBikeTime(25)
IMRunTime(150)