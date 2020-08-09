// Symbol.iterator tells for..of loop how to iterate the object

const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill',
  * [Symbol.iterator]() {
    yield this.lead;
    yield this.tester;
  },
};

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
  * [Symbol.iterator]() {
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam;
  },
};

const names = [];
for (const name of engineeringTeam) {
  names.push(name);
}
console.log(names);
