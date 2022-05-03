require('dotenv').config()

const mongoose = require('mongoose')

function connectToDataBase() {
  mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const db = mongoose.connection
  db.on('error', error => console.error(error))
  db.once('open', () => console.log('Connected to MongoDB'))
}

module.exports = connectToDataBase
