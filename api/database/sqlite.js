const sqlite3 = require("sqlite3").verbose();
const path = require("path");

let dbPath = path.resolve(__dirname, 'KeyboardCorner_Users');
let db = new sqlite3.Database(dbPath, err => {
  if (err) throw err;
  console.log('Connected to KeyboardCorner_Users database.');
});

module.exports = db;