const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary() {
    return this.members.map(member => `${member} is on team ${this.teamName}`)
  }
}
console.log(team.teamSummary())