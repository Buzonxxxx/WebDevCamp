// //ES5
// const Person5 = function(name, yearOfBirth, job){
//   this.name = name
//   this.yearOfBirth = yearOfBirth
//   this.job = job
// }
// Person5.prototype.calculateAge = function(){
//   let age = new Date().getFullYear() - this.yearOfBirth
//   console.log(age)
// }
// //#ToPractice
// const john5 = new Person5('John', 1990, 'teacher')

// const Athlete5 = function(name, yearOfBirth, 
//   job, olypicGames, medals)
// {
//   Person5.call(this, name, yearOfBirth, job)
//   this.olypicGames = olypicGames
//   this.medals = medals
// }

// Athlete5.prototype = Object.create(Person5.prototype)

// Athlete5.prototype.wonMedal = function(){
//   this.medals++
//   console.log(this.medals)
// }

// const johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10)
// johnAthlete5.calculateAge()
// johnAthlete5.wonMedal()

//ES6
class Person6 {
  constructor (name, yearOfBirth, job){
    this.name = name
    this.yearOfBirth = yearOfBirth
    this.job = job
  }
  calculateAge(){
    let age = new Date().getFullYear() - this.yearOfBirth
    console.log(`Age: ${age}`)
  }
}
class Athlete6 extends Person6 {
  constructor(name, yearOfBirth, job, olypicGames, medals){
    super(name, yearOfBirth, job)
    this.olypicGames = olypicGames
    this.medals = medals
  }
  wonMedal(){
    this.medals++
    console.log(`Your medal amount is: ${this.medals}`)
  }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10)
johnAthlete6.wonMedal()
johnAthlete6.calculateAge()
  