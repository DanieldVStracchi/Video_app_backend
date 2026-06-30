const express = require('express')
const cors = require('cors')
const db = require('./database')

const app = express()

app.use(cors())
app.use(express.json())


console.log("Node.js + SQLite");
console.log(db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all())

app.get('/history', (req, res) =>  {
    console.log('GET history')
    
})

app.post('/history', (req, res) => {
    console.log('PUT history')

})



app.listen(8000, () => console.log('Your server is runnning on port 8000'))