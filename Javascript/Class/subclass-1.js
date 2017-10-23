//Sample1
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

/****************************************************/
//Sample2
class Car {
  constructor({ options }) {
    this.title = title
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
