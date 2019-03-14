/* Closures: 
A inner function has always access to the variables and parameters of its outer function, 
even after the outer function has returned
*/

// sample1
const retirement = (retirementAge) => {
  const a = ' year(s) left until retirement.'
  return function (yearOfBirth) {
    const age = new Date().getFullYear() - yearOfBirth
    return ((retirementAge - age) + a)
  }
}

const retirementUS = retirement(66)(1983)
const retirementGermany = retirement(65)(1983)
console.log(retirementUS)
console.log(retirementGermany)

// sample2
const interviewQuestion = job => {
  return function (name) {
    if (job === 'designer') {
      console.log(`${name}, can you please explain what UX design is?`)
    } else if (job === 'teacher') {
      console.log(`What subject do you teach, ${name}?`)
    } else {
      console.log(`Hello, ${name}, what do you do?`)
    }
  }
}
  interviewQuestion('teacher')('Mark')