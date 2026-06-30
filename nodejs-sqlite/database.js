const { DatabaseSync } = require('node:sqlite')
const db = new DatabaseSync('data.db')

db.exec(`
  CREATE TABLE IF NOT EXISTS history(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    url TEXT,
);     
    CREATE TABLE IF NOT EXISTS bookmarks(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    url TEXT,
    date_added DATETIME DEFAULT CURRENT_TIMESTAMP,
); 
`)

module.exports = db;
