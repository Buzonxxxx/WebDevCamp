//Sample1
class Person {
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
class Athlete extends Person {
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

const johnAthlete6 = new Athlete('John', 1990, 'swimmer', 3, 10)
johnAthlete6.wonMedal()
johnAthlete6.calculateAge()
/*************************************************************************************************************************************************/

//Sample2
class Car {
  constructor(options) {
    this.title = options.title
  }
  drive() {
    return 'vroom'
  }
}
class Toyota extends Car {
  constructor(options) {
    super(options) //Car.constructor()
    this.color = options.color
  }
  honk() {
    return 'beep'
  }
}
const toyota = new Toyota({ color: 'red', title: 'daily driver' })
console.log(toyota.honk())
console.log(toyota.drive())
console.log(toyota)
/*************************************************************************************************************************************************/

//Sample3
class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}
class Snake extends Monster {
  constructor(options) {
    super(options);
  }
  bite(snake) {
    console.log(`Current ${snake.name}'s health is ${snake.health -= 10}`)
  }
}

const angrySnake = new Snake({ name: 'Angry Snake' });
const happySnake = new Snake({ name: 'Happy Snake' });
angrySnake.bite(happySnake)
angrySnake.bite(happySnake)
happySnake.bite(angrySnake)
console.log(happySnake)
console.log(angrySnake)


