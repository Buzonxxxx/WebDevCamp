//Passing function as an argument 
//Higher order function
const years = [1990, 1965, 1937, 2005, 1998]

const arrayCalc = (arr, fn) => {
  arrRes = []
  arr.forEach( x => arrRes.push( fn(x) ) )
  return arrRes
}

const calculatAge = (el) => 2017 - el

const isFullAge = (el) => el >= 18

const maxHeartRate = el => (el >= 18 && el <= 81)? Math.round(206.9 - (0.67 * el)) : -1

const ages = arrayCalc(years, calculatAge)
const fullAge = arrayCalc(ages, isFullAge)
const rates = arrayCalc(ages, maxHeartRate)

console.log(`Ages: ${ages}`)
console.log(`Full Ages: ${fullAge}`)
console.log(`Max Heart Rates: ${rates}`)