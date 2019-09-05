class Bike {
  constructor(brand, type, color, outFactoryYear) {
    this.brand = brand
    this.type = type
    this.color = color
    this.outFactoryYear = outFactoryYear;
    this.owner = 'Louis'
  }
  calculateProdYear() {
    return new Date().getFullYear() - this.outFactoryYear
  }
}
const cervelo = new Bike('cervelo', 'road bike', 'blue', 6)
console.log(`The color is ${cervelo.color} and it's produced on ${cervelo.calculateProdYear()}`)

// Static: class method: call by class, not instance
class Point{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx,dy) // Math.sqrt(dx*dx + dy*dy)
  }
}

const p1 = new Point(5,5)
const p2 = new Point(10,10)

const result = Point.distance(p1, p2)
console.log(result)