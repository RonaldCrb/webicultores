import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('hola millan')
})

app.get('/ronaldelmejor', (req, res) => {
  res.send('soy el mejor')
})

module.exports = {
  path: '/api',
  handler: app
}
