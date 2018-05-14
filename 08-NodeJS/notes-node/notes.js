console.log('Starting notes.js')

const fs = require('fs')

const fetchNotes = () => {
  try{
    const noteString = fs.readFileSync('notes-data.json')
    return JSON.parse(noteString)
  } catch (e) {
    return []
  }
}

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

const addNote = (title, body) => {
  let notes = fetchNotes()
  const note = {
    title,
    body
  }
  
// title沒有重複才加新note
  const duplicateNotes = notes.filter( note => note.title === title)
  if (duplicateNotes.length === 0) {
    notes.push(note)
    saveNotes(notes)
    return note
  }
}

const getAll = () => {
  console.log('Getting all notes') 
}

const getNote = (title) => {
  console.log(`Getting note: ${title}`)
}

const removeNote = (title) => {
  // fetch notes
  let notes = fetchNotes()
  //只存沒被移除的note
  const filteredNotes =  notes.filter( note => note.title !== title)
  saveNotes(filteredNotes)

  return notes.length !== filteredNotes.length
  }

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}

module.exports.add = (a, b) => a + b

module.exports.age = 25