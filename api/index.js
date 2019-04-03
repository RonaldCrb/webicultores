import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('hello world')
})

module.exports = {
  path: '/api',
  handler: app
}
