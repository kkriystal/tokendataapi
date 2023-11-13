const express = require('express')
const app = express.Router()


app.get('/', (req, res) => {
  res.json(req.chainData)
})

app.get('/eth', (req, res) => {
  res.json(req.chainData.eth)
})


app.get('/eth/total', (req, res) => {
  res.json(req.chainData.eth.totalSupply.value)
})

app.get('/eth/circulating', (req, res) => {
  res.json(req.chainData.eth.circulatingSupply.value)
})


app.get('/eth/total/details', (req, res) => {
  res.json(req.chainData.eth.totalSupply)
})
 
app.get('/eth/circulating/details', (req, res) => {
  res.json(req.chainData.eth.circulatingSupply)
})

module.exports = app
