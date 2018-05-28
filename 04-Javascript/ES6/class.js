//sample1
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

//sample2
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

const Louis = new Person('Louis', 1983, 'Engineer')
console.log(`${Louis.name} is ${Louis.calculateAge()} years old`)
console.log(`Louis' last name is ${Louis.lastName}`)
console.log(Louis)

// sample3
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