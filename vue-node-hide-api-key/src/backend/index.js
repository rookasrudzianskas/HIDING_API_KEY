// importing express framework
const express = require('express')
// setting the app
const app = express()
// and opening it on this port
const port = 3000

// const apiUrl = 'http://api.openweathermap.org/data/2.5/weather'
// creating endpoint, to return something
app.get('/', (request, response) => {
    console.log(request.query)
})

// launching app on specified port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})