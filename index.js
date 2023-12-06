const express = require("express")
require('dotenv').config()
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('dakshdotcom')
})

app.get('/login', (req, res) => {
  res.send('<h1>please login at code with daksh</h1>')
})

app.get('/youtube', (req, res) => {
  res.send('<h2>welcome to youtube page of code with daksh</h2>')
})

app.listen(port, () => {
  console.log(`example app listening on the port ${port}`);
})

