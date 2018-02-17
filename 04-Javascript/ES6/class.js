//ES5
// const Person5 = function(name, yearOfBirth, job){
//   this.name = name
//   this.yearOfBirth = yearOfBirth
//   this.job = job
// }
// Person5.prototype.calculateAge = function(){
//   let age = new Date().getFullYear() - this.yearOfBirth
//   console.log(age)
// }
// const john5 = new Person5('John', 1990, 'teacher')

// console.log(john5)
// john5.calculateAge()

//ES6
class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name
    this.yearOfBirth = yearOfBirth
    this.job = job
  }
  calculateAge() {
    let age = new Date().getFullYear() - this.yearOfBirth
    console.log(age)
  }
  //static method: method to the class, not to instance
  static greeting() {
    console.log("Hey there!")
  }
}
const john6 = new Person6('John', 1990, 'teacher')
console.log(john6)
john6.calculateAge()
Person6.greeting()