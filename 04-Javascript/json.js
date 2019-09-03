// 檔案處理, file handling
const fs = require("fs");

const originalNote = {
  title: "Some title",
  body: "Some body"
};
// obj to string
const originalNoteString = JSON.stringify(originalNote);

// save file to local
fs.writeFileSync("notes.json", originalNoteString);

console.log(typeof originalNoteString);
console.log(originalNoteString);

// read file from local
const noteString = fs.readFileSync("notes.json");

// string to obj
const note = JSON.parse(noteString);

console.log(typeof note);
console.log(note);

// remove file from local
// fs.unlinkSync("./notes.json");
