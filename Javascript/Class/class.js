//class裡面不用逗點
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

