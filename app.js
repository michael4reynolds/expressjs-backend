const express = require('express')

const app = express()

app.get('/api', (req, res) => {
  res.json({
    msg: 'Hello /',
  })
})

app.get('/api/hello', (req, res) => {
  res.json({
    msg: 'Hello /hello',
  })
})

app.get('/api/dashboard', (req, res) => {
  res.json({
    msg: 'Hello /dashboard',
  })
})

app.listen(3000, () => console.log('Running on Port on 3000'))
