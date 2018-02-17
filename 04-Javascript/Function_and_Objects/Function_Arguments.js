//Passing function as an argument #ToPractice
//Higher order function
const years = [1990, 1965, 1937, 2005, 1998]
function arrayCalc(arr, fn) {
  let arrRes = []
  arr.forEach(function (x) {
    arrRes.push(fn(x))
  })
  return arrRes
}
function calculatAge(el) {
  return 2017 - el
}

function isFullAge(el) {
  return el >= 18
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - (0.67 * el))
  } else {
    return -1
  }
}
const ages = arrayCalc(years, calculatAge)
const fullAge = arrayCalc(ages, isFullAge)
const rates = arrayCalc(ages, maxHeartRate)
console.log("Ages: "+ages)
console.log("Full Ages: "+fullAge)
console.log("Max Heart Rtes: "+rates)