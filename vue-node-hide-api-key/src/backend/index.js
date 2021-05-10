// importing express framework
const express = require('express')
// setting the app
const app = express()
// and opening it on this port
const port = 3000

// creating endpoint, to return something
app.get('/', (req, res) => {
    res.send('Hello ROkas!')
})

// launching app on specified port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})