//Object.create
const personProto = {
  calculateAge() {
    console.log(2016 - this.yearOfBirth)
  }
}

const John = Object.create(personProto)
John.name = 'John'
John.yearOfBirth = 1990
John.job = 'teacher'

console.log(John)
console.log(John.yearOfBirth)
console.log(John.calculateAge())