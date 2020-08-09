const square = x => x * x
console.log(square(9))


//arrow function does not bind this

const user = {
  name: 'Louis',
  sayHi: () => {
    console.log(`Hi. I'm ${this.name}`)
  },
  sayHiAlt() {
    console.log(`Hi. I'm ${this.name}`)
  }
}
user.sayHi()
user.sayHiAlt()