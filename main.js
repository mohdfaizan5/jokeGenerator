const express = require('express')
const app = express()

// Initializing one liner jokes
const oneLinerJoke = require('one-liner-joke');

// Setting up ejs template engine
app.set('view engine', 'ejs')

// Setting up static files
app.use(express.static('./public'))


app.get("/", function (req, resp){

  // oneLinerJoke.getRandomJoke().body
  resp.render('index', {joke: oneLinerJoke.getRandomJoke().body})
})

app.listen(3000)