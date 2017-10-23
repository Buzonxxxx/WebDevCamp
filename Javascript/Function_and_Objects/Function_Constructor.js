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
//ES5
// const Person = function (name, yearOfBirth, job) {
//   this.name = name
//   this.yearOfBirth = yearOfBirth
//   this.job = job
// }
// Person.prototype.lastName = 'Smith'

// Person.prototype.calculateAge = function () {
//   console.log(2017 - this.yearOfBirth)
// }

// ES6
class Person {
  constructor(name, yearOfBirth, job){
    this.name = name
    this.yearOfBirth = yearOfBirth
    this.job = job
    this.lastName = 'Smith'
  }
  calculateAge(){
    return 2017 - this.yearOfBirth
  }
}
//new operator is used to create empty object
const Louis = new Person('Louis', 1983, 'Engineer')
console.log(`${Louis.name} is ${Louis.calculateAge()} years old`)
console.log(`Louis' last name is ${Louis.lastName}`)
console.log(Louis)

//function constructor example 2
//ES5
// function User(firstName, lastName, gender, age) {
//   this.firstName = firstName
//   this.lastName = lastName
//   this.gender = gender
//   this.age = age
// }

// User.prototype.emailDomain = '@facebook.com'
// User.prototype.getEmailAddress = function () {
//   return this.firstName + this.lastName + this.emailDomain
// }

//ES6
class User {
  constructor(firstName, lastName, gender, age){
    this.firstName = firstName
    this.lastName = lastName
    this.gender = gender
    this.age = age
    this.emailDomain = '@facebook.com'
  }
  getEmailAddress() {
    return `${this.firstName}${this.lastName}${this.emailDomain}`
  }
}
const user = new User('Jill', 'Robinson', 'female', 25)
console.log(user)
console.log(user.getEmailAddress())
