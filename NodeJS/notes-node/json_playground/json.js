const fs = require('fs')

const originalNote = {
  title: 'Some title',
  body: 'Some body'
} 

// obj to string
const originalNoteString = JSON.stringify(originalNote)
fs.writeFileSync('notes.json', originalNoteString)

console.log(typeof originalNoteString)
console.log(originalNoteString)

const noteString = fs.readFileSync('notes.json')

// string to obj
const note = JSON.parse(noteString)

console.log(typeof note)
console.log(note.title)


