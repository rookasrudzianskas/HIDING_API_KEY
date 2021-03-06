// importing express framework
var qs = require('qs');
require('dotenv').config()


const express = require('express')
const axios = require('axios')
// setting the app
const app = express()
// and opening it on this port
const port = 3001

const apiUrl = 'http://api.openweathermap.org/data/2.5/weather'
// the api key is in the .env file
const apiKey = process.env.API_KEY
// creating endpoint, to return something
app.get('/', (request, response) => {
    response.set("Access-Control-Allow-Origin", "*")
    // console.log(request.query)
    // this makes the new object from request query, what comes from front end
    // also adds the api key from backend
    // and then with qs stringify we turn the object into one bis string to make the request
    let query = request.query
    query.appid = apiKey
    let queryString = qs.stringify(query)
    // console.log(queryString)
    // we make the api request to the weathere site with the following strings
    axios(`${apiUrl}?${queryString}`).then(res => {
        response.send(res.data);
    }).catch()
})

// launching app on specified port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})