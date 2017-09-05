//TBD

//type 1
const team1 = {
  members: ["Jane", "Louis"],
  teamName: "Champions",
  teamSummary: function(){
    return this.members.map(function(member){
      return `${member} is on team ${this.teamName}`
    })
  }
}

//type 2
const team2 = {
  members: ["Jane", "Louis"],
  teamName: "Champions",
  teamSummary: function(){
    return this.members.map(member =>`${member} is on team ${this.teamName}`)
  }
}
console.log(team1.teamSummary())
console.log(team2.teamSummary())