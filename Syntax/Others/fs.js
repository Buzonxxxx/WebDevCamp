// 檔案處理, file handling
const fs = require('fs');

const originalNote = {
	title: 'Some title',
	body: 'Some body'
};
// obj to string
const originalNoteString = JSON.stringify(originalNote);

// save file to local
fs.writeFileSync('notes.json', originalNoteString);

// read file from local
const noteString = fs.readFileSync('notes.json');

// string to obj
const note = JSON.parse(noteString);
console.log(note);

// remove file from local
fs.unlinkSync('./notes.json');
