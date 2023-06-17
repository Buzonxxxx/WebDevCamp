// Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person('John', 30);
console.log(person1);  // { name: 'John', age: 30 }


// Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person2 = new Person('Jane', 25);
console.log(person2);  // { name: 'Jane', age: 25 }