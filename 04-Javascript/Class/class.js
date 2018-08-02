class Person {
  constructor(firstName, yearOfBirth, job) {
    this.firstName = firstName
    this.yearOfBirth = yearOfBirth
    this.job = job
    this.lastName = 'Liao'
    this.emailDomain = '@facebook.com'
  }
  calculateAge(){
    return new Date().getFullYear() - this.yearOfBirth
  }
  getEmailAddress() {
    return `${this.firstName}.${this.lastName}${this.emailDomain}`
  }
  //static method: method to the class, not to instance
  static greeting() {
    console.log("Hey there!")
  }
}

Person.greeting()
const Louis = new Person('Louis', 1983, 'Programmer')
console.log(`${Louis.firstName} is ${Louis.calculateAge()} years old`)
console.log(Louis.getEmailAddress())
