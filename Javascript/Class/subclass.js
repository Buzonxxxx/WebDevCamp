class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

class Snake extends Monster{
    constructor(options){
        super(options);
    }
    
    
    bite(snake){
        return snake.health -= 10
    }
}

const angrySnake = new Snake({name: 'Angry Snake'});
const happySnake = new Snake({name: 'Happy Snake'});
console.log(angrySnake.bite(happySnake))
console.log(angrySnake.bite(happySnake))
console.log(happySnake)
console.log(angrySnake)

/****************************************************/
class Car {
    constructor({title}){
      this.title = title
    }
    drive(){
      return 'vroom'
    }
  }
  
  // const car = new Car({title: 'Toyota'})
  // console.log(car.drive())
  // console.log(car)
  
  class Toyota extends Car{
    constructor(options){
      super(options) //Car.constructor()
      this.color = options.color
    }
    honk(){
      return 'beep'
    }
  }
  const toyota = new Toyota({color: 'red', title: 'daily driver'})
  console.log(toyota.honk())
  console.log(toyota.drive())
  console.log(toyota)
  