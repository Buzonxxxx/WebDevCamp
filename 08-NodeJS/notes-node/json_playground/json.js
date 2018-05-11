// obj to string

// const obj = {
//   name: 'Louis'
// }
// const stringObj = JSON.stringify(obj)
// console.log(typeof stringObj)
// console.log(stringObj)

// string to obj

// const personString = '{"name": "Andrew", "age": 25}'
// console.log(typeof personString)
// const person = JSON.parse(personString)
// console.log(typeof person)
// console.log(person)

const fs = require('fs')

const originalNote = {
  title: 'Some title',
  body: 'Some boty'
} 

const originalNoteString = JSON.stringify(originalNote)
fs.writeFileSync('notes.json', originalNoteString)

console.log(typeof originalNoteString)
console.log(originalNoteString)

const noteString = fs.readFileSync('notes.json')
const note = JSON.parse(noteString)

console.log(typeof note)
console.log(note.title)


