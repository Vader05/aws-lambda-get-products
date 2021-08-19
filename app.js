const express = require('express')
require('dotenv').config()
const app = express()
const response = require('./src/index')
const port = process.env.PORT

app.get('', (req, res) => {
  res.send(response.getProducts());
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})