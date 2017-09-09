//this keyword
function User(firstName, lastName, gender, age){
  this.firstName = firstName
  this.lastName = lastName
  this.gender = gender
  this.age = age
}

var user1 = new User('John', 'Smith', 'male', 26)
console.log(user1)

User.prototype.emailDomain = '@facebook.com'
User.prototype.getEmailAddress = function(){
  return this.firstName + this.lastName + this.emailDomain
}
var user200 = new User('Jill', 'Robinson', 'female', 25)
console.log(user200)
console.log(user200.emailDomain)
console.log(user200.getEmailAddress())

