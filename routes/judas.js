const express = require('express')
const app = express.Router()


app.get('/', (req, res) => {
  res.json(req.chainData)
})

app.get('/total', (req, res) => {
  res.json(req.chainData.eth.totalSupply.value)
})

app.get('/circulating', (req, res) => {
  res.json(req.chainData.eth.circulatingSupply.value)
})


app.get('/total/details', (req, res) => {
  res.json(req.chainData.eth.totalSupply)
})
 
app.get('/circulating/details', (req, res) => {
  res.json(req.chainData.eth.circulatingSupply)
})

module.exports = app
