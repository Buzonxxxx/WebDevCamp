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