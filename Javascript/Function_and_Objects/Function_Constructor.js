/*
1. Every Javascript object has a prototype property, which makes inheritance possible in Javascript
2. The prototype fo an object is where we put methods and properties that we want other objects to inherit
3. The Constructor's prototype property is NOT the prototype of Constructor itself, 
it's the prototype of ALL instances that are created through it
4. When a certain method(or property) is called, the search starts in the object itself, 
and if it cannot be found, the search moves on to the object's prototype.
This continues until the method is found: prototype chain

*/

//Function constructor example 1
const Person = function (name, yearOfBirth, job) {
  this.name = name
  this.yearOfBirth = yearOfBirth
  this.job = job
}

Person.prototype.calculateAge = function () {
  console.log(2017 - this.yearOfBirth)
}

Person.prototype.lastName = 'Smith'

//new operator is used to create empty object

const Louis = new Person('Louis', 1983, 'Engineer')
const Jane = new Person('Jane', 1969, 'Designer')
const Mark = new Person('Mark', 1948, 'Project Manager')

Louis.calculateAge()
Jane.calculateAge()
Mark.calculateAge()

console.log(Louis.lastName)
console.log(Jane.lastName)
console.log(Mark.lastName)

console.log(Louis)
console.log(Jane)
console.log(Mark)

//function constructor example 2
function User(firstName, lastName, gender, age) {
  this.firstName = firstName
  this.lastName = lastName
  this.gender = gender
  this.age = age
}

var user1 = new User('John', 'Smith', 'male', 26)
console.log(user1)

User.prototype.emailDomain = '@facebook.com'
User.prototype.getEmailAddress = function () {
  return this.firstName + this.lastName + this.emailDomain
}
var user200 = new User('Jill', 'Robinson', 'female', 25)
console.log(user200)
console.log(user200.emailDomain)
console.log(user200.getEmailAddress())
