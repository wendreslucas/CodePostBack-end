const mongoose = require('mongoose')

function connectToDataBase() {
  mongoose.connect(
    'mongodb+srv://wendreslucas:NewHorizons7@postnode.zkzuj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )

  const db = mongoose.connection
  db.on('error', error => console.error(error))
  db.once('open', () => console.log('Connected to MongoDB'))
}

module.exports = connectToDataBase
