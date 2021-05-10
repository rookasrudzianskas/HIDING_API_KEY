// importing express framework
const express = require('express')
// setting the app
const app = express()
// and opening it on this port
const port = 3000

// const apiUrl = 'http://api.openweathermap.org/data/2.5/weather'
const apiKey = '7072edc8ba7df4103c3a2efc6061be00'
// creating endpoint, to return something
app.get('/', (request, response) => {
    // console.log(request.query)
    let query = request.query
    query.appid = apiKey
    console.log(query)
})

// launching app on specified port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})