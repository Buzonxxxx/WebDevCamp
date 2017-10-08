//Object.create
const personProto = {
  calculateAge: function() {
    console.log(2016 - this.yearOfBirth)
  }
}

const John = Object.create(personProto)
John.name = 'John'
John.yearOfBirth = 1990
John.job = 'teacher'

const Jane = Object.create(personProto, 
{
    name: { value: 'Jane'},
    yearOfBirth: { value: 1969},
    job: { value: 'designer'}
})

console.log(John)
console.log(Jane.yearOfBirth)
console.log(John.calculateAge())