const express = require('express')
const mongoose = require('mongoose')

const app = express()
const routes = require('./routes')
const connectToDataBase = require('./database')
const cors = require('cors')
const product = require('../api/product')

connectToDataBase()

app.use(express.json({ extended: false }))
app.use('/api/product', product)
app.use(routes)

const port = process.env.port || 8080
app.listen(port, () => {
  console.log(`Backend started at http://localhost:${port}`)
})
