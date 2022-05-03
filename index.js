const express = require('express')
const app = express()
const PORT = process.env.PORT || 3333

const routes = require('./src/routes')
const connectToDataBase = require('./src/database')
const cors = require('cors')
const product = require('./api/product')

connectToDataBase()

app.use(cors())
app.use(express.json())
app.use('/api/product', product)
app.use(routes)

app.listen(PORT, () => {
  console.log(`Back started at http://localhost:${PORT}`)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})
