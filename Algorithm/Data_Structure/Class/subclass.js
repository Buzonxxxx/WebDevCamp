// Sample1
class Person {
  constructor({ name, yearOfBirth, job }) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calculateAge() {
    const age = new Date().getFullYear() - this.yearOfBirth;
    console.log(`Age: ${age}`);
  }
}
class Athlete extends Person {
  // 用super不要destructure
  constructor(options) {
    super(options); // Car.constructor()
    this.olypicGames = options.olypicGames;
    this.medals = options.medals;
  }

  wonMedal() {
    this.medals += 1;
    console.log(`Your medal amount is: ${this.medals}`);
  }
}

const johnAthlete6 = new Athlete({
  name: 'John', yearOfBirth: 1990, job: 'swimmer', olypicGames: 3, medals: 10,
});
johnAthlete6.wonMedal();
johnAthlete6.calculateAge();

// Sample2
class Monster {
  constructor({ name }) {
    this.health = 100;
    this.name = name;
  }
}
class Snake extends Monster {
  constructor(options) {
    super(options);
  }

  bite(snake) {
    console.log(`Current ${snake.name}'s health is ${snake.health -= 10}`);
  }
}

const angrySnake = new Snake({ name: 'Angry Snake' });
const happySnake = new Snake({ name: 'Happy Snake' });
angrySnake.bite(happySnake);
angrySnake.bite(happySnake);
happySnake.bite(angrySnake);
console.log(happySnake);
console.log(angrySnake);
