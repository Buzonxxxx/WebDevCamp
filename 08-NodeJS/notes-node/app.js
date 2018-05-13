console.log('Starting app')

const fs = require('fs')
const os = require('os')
const _ = require('lodash')
const notes = require('./notes.js')
const yargs = require('yargs')

const argv = yargs.argv
//get system user info
const user = os.userInfo()
// create file and append string
// fs.appendFileSync('greeting.txt', `Hello ${user.username}! You are in age ${notes.age}`)

// console.log(_.isString('Louis'))
// console.log(_.uniq([1,1,'Jack',2,'Louis',2,3,3,3]))

// get command from console
const command = argv._[0]
console.log(`Command is: ${command}`)
console.log('Process', process.argv)
console.log('Yargs', argv)

switch(command){
  case 'add':
  // if note = undefined, it means duplicate note
  let note = notes.addNote(argv.title, argv.body)
  if (note){
    console.log('New note added!')
    console.log('---')
    console.log(`Title: ${argv.title}`)
    console.log(`Body: ${argv.body}`)
  } else {
    console.log('The note is duplicated!')
  }
  break
  case 'list':
  notes.getAll()
  break
  case 'read':
  notes.getNote(argv.title)
  break
  case 'remove':
  notes.removeNote(argv.title)
  break
  default: 
  console.log("Command not recognized")
}