// Bind, Call and Apply

const john = {
  name: 'Louis',
  age: 34,
  job: 'engineer',
  presentation: function (style, timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m '
        + this.name + ', I\'m a ' + this.job + ' and I\'m '
        + this.age + ' years old')
    } else if (style === 'friendly') {
      console.log('Hey! What\'s up? I\'m a ' + this.job + ' and I\'m '
        + this.age + ' years old. Have a nice ' + timeOfDay + '.')
    }
  }
}
john.presentation('formal', 'Morning')
john.presentation('friendly', 'Morning')

const emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
}
// call(): method borrowing, 3 arguments: this, style, timeOfDay
john.presentation.call(emily, 'formal', 'Morning')

// apply(): accept argument as array
// john.presentation.apply(emily, ['formal', 'Morning'])

// bind(): generate copy of function and so we can store somewhere
const johnFriendly = john.presentation.bind(john, 'friendly')
johnFriendly('Evening')
johnFriendly('morning')
const emilyFormal = john.presentation.bind(emily, 'formal')
emilyFormal('afternoon')

/**************************************************************/
// Rewrite function argument
// #ToPractice
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

function isFullAge(limit, el) {
  return el >= limit
}

const ages = arrayCalc(years, calculatAge)
const fullJapan = arrayCalc(ages, isFullAge.bind(this, 20))
console.log(ages)
console.log(fullJapan)

