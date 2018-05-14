const person = {
  name: 'Louis'
}

person.age = 25

debugger

person.name = 'Liao'
debugger
console.log(person)


/*
[Hot to user debugger]
- set debugger breakpoint in your code
- node inspect xxx.js
- type 'c' to the debugger breakpoint
- type 'repl'
- verify your code
*/