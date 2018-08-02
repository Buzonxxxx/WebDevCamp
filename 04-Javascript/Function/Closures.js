// Closures: 
// A inner function has always access to the variables 
// and parameters of its outer function, even after the outer function
// has returned

function retirement(retirementAge) {
  const a = ' year(s) left until retirement.'
  return function (yearOfBirth) {
    const age = new Date().getFullYear() - yearOfBirth
    console.log((retirementAge - age) + a)
  }
}

const retirementUS = retirement(66)(1983)
const retirementGermany = retirement(65)(1983)
const retirementIceland = retirement(67)(1983)
const retirementTaiwan = retirement(65)(1983)
retirementUS
retirementGermany
retirementIceland
retirementTaiwan

//rewrite InterviewFunctions
function interviewQuestion(job) {
  return function (name) {
    if (job === 'designer') {
      console.log(name + ', can you please explain what UX design is? ')
    } else if (job === 'teacher') {
      console.log('What subject do you teach, ' + name + '?')
    } else {
      console.log('Hello, ' + name + ', what do you do?')
    }
  }
}
  interviewQuestion('teacher')('Mark')