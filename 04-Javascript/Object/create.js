//Object.create
const personPortal = {
  calculateAge() {
   return  (2016 - this.yearOfBirth)
  } 
}

const John = Object.create(personPortal)
John.name = 'John'
John.yearOfBirth = 1990
John.job = 'teacher'

console.log(John)
console.log(John.yearOfBirth)
console.log(John.calculateAge())