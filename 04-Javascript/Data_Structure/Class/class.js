class Person {
  constructor(firstName, yearOfBirth, job) {
    // 'this' refer to individual instance of class
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
}

const Louis = new Person('Louis', 1983, 'Programmer')

console.log(`${Louis.firstName} is ${Louis.calculateAge()} years old`)
console.log(Louis.getEmailAddress())



// Static: class method: method to the class, not to instance

class Point{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx,dy)
  }
}

const p1 = new Point(5,5)
const p2 = new Point(10,10)

const result = Point.distance(p1, p2)
console.log(result)