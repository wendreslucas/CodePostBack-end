const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: false
  },
  created_datetime: {
    type: Date
  }
})

module.exports = mongoose.model('Post', postSchema)
