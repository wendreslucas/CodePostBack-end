const express = require('express')
const app = express()
const routes = require('./routes')

const connectToDataBase = require('./database')
const cors = require('cors')
const product = require('../api/product')

connectToDataBase()
const PORT = process.env.PORT || 3333

app.use(cors())
app.use(express.json())
app.use('/api/product', product)
app.use(routes)

app.listen(PORT, () => {
  console.log(`Backend started at http://localhost:${PORT}`)
})
