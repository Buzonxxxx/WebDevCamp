const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')

const argv = yargs.argv

// get command from console
const command = argv._[0]
console.log(`Command is: ${command}`)

let message, note

switch(command){
  case 'add':
  // if note = undefined, it means duplicate note
  note = notes.addNote(argv.title, argv.body)
  if (note){
    console.log('New note added!')
    notes.logNote(note)
  } else {
    console.log('The note is duplicated!')
  }
  break
  
  case 'list':
  let allNotes = notes.getAll()
  console.log(`Printing ${allNotes.length} note(s)`)
  allNotes.forEach(note => notes.logNote(note))
  break
  
  case 'read':
  note = notes.getNote(argv.title)
  if (note){
    console.log('Note found')
    notes.logNote(note)
  } else {
    console.log('Note not found')
  }
  break

  case 'remove':
  const notRemoved = notes.removeNote(argv.title)
  message = notRemoved ? 'Note was removed' : 'Note not found' 
  console.log(message)
  break
  
  default: 
  console.log("Command not recognized")
}