require('dotenv').config({ path: './config.env' })

const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes')
const connectToDataBase = require('./database')
const cors = require('cors')

connectToDataBase()

const app = express()
const port = 3333

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(port, () => {
  console.log(`Backend started at http://localhost:${port}`)
})
