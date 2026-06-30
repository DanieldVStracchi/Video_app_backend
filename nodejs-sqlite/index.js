const express = require('express')
const cors = require('cors')
const db = require('./database')

const app = express()

app.use(cors())
app.use(express.json())


console.log("Node.js + SQLite");
console.log(db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all())

//HISTORY
//GET
app.get('/history', (req, res) => {
    console.log('GET history')
    const rows = db.prepare('SELECT * FROM history ORDER BY id DESC').all()
    res.json(rows)
})

//POST
app.post('/history', (req, res) => {
    console.log('POST history', req.body)
    const { url } = req.body

    if (!url) {
        console.log('URL not found or missing')
        return res.status(400).json({ error: 'Needs a valid URL' })
    }

    db.prepare('INSERT INTO history (url) VALUES (?)').run(url)

    res.send({});
})










//PUT
app.put('/history', (req, res) => {
    console.log('PUT history' + req.params.id, req.body)

    const id = req.params.id
    const url = req.body.url

    db.prepare('UPDATE history SET url = ? WHERE id = ?').run(url, id)

    const info = stmt.run(url, req.params.id)
    console.log(info.changes, '(UPDATED)')
    res.json({ message: 'UPDATED' })
})


//DELETE
app.delete('/history', (req, res) => {
    console.log('DELETE history' + req.params.id)

    const id = req.params.id

    db.prepare('DELETE FROM history WHERE id = ?')

    console.log('ROW DELETED')
    res.json({ message: 'DELETED' })

})

//------------------------------------------------------------------------------------------------------//

//BOOKMARK
//GET
app.get('/bookmarks', (req, res) => {
    console.log('GET bookmarks')

    const rows = db.prepare('SELECT * FROM bookmarks').all()

    console.log(rows)
    res.json(rows)
})

//POST
app.post('/bookmarks', (req, res) => {
    console.log('POST bookmarks'), req.body

    const url = req.body.url

    db.prepare('INSERT INTO bookmarks (url) VALUES (?)').run(url)

    console.log('SAVED INTO BOOKMARKS')
    res.json({ message: 'SAVED' })
})

//PUT
app.put('/bookmarks', (req, res) => {
    console.log('PUT bookmarks'), req.body

    const id = req.params.id
    const url = req.body.url

    db.prepare('UPDATE bookmarks SET url = ? WHERE id = ?').run(url, id)

    console.log('UPDATING BOOKMARKS')
    res.json({ message: 'UPDATED' })
})

//DELETE
app.delete('/bookmarks', (req, res) => {
    console.log('DELETE bookmarks')

    const id = req.params.id

    db.prepare('DELETE FROM bookmarks WHERE id = ?').run(id)

    console.log('DELETING FROM BOOKMARKS')
    res.json({message: 'DELETED'})
})



app.listen(8000, () => console.log('Your server is runnning on port 8000'))