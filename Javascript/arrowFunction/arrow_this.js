const team = {
  members: ["Jane", "Louis"],
  teamName: "Champions",
  teamSummary: function(){
    return this.members.map(member =>`${member} is on team ${this.teamName}`)
  }
}
console.log(team.teamSummary())


function Person(name){
  this.name = name
}
/*************************************************************************************************************/
// ES5
Person.prototype.myFriends5 = function (friends) {
  var arr = friends.map(function(el){
    return this.name + ' is friends with ' + el
  }.bind(this))
  console.log(arr)
}
var friends = ['Louis', 'Bob', 'Jane']
new Person('John').myFriends5(friends)

//ES6
Person.prototype.myFriends6 = function(friends) {
  var arr = friends.map(el => `${this.name} is friends with ${el}`)
  console.log(arr)
}
var friends = ['Louis', 'Bob', 'Jane']
new Person('Mike').myFriends6(friends)