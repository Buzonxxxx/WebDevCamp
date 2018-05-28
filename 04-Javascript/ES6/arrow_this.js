class Person {
  constructor(name) {
    this.name = name
  }
  myFriends6(friends) {
    let arr = friends.map(el => `${this.name} is friends with ${el}`)
    console.log(arr)
  }
}

var friends = ['Louis', 'Bob', 'Jane']
const person = new Person('Mike').myFriends6(friends)