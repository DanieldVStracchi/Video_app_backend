const db = require('./database')
console.log("Node.js + SQLite");
console.log(db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all())
