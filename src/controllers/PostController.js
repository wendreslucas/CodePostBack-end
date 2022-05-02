const { response } = require('express')
const { v4: uuid } = require('uuid')
const Post = require('../models/post')

module.exports = {
  async index(request, response) {
    try {
      const posts = await Post.find()
      return response.status(200).json({ posts })
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  },

  async store(request, response) {
    const { title, content, userName } = request.body

    if (!title || !content) {
      return response
        .status(400)
        .json({ error: 'Title and content are required' })
    }

    const post = new Post({
      _id: uuid(),
      title,
      content,
      userName,
      created_datetime: new Date()
    })

    try {
      await post.save()
      return response.status(201).json({ post })
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  },

  async update(request, response) {
    const { title, content } = request.body

    if (!title && !content) {
      return response
        .status(400)
        .json({ error: 'Title and content are required' })
    }

    if (title) response.post.title = title
    if (content) response.post.content = content

    try {
      await response.post.save()
      return response.status(200).json({ post: response.post })
    } catch (error) {
      return response.status(500).json({ error: error.message })
    }
  },

  async delete(request, response) {
    try {
      await response.post.remove()
      return response.status(204).json({ message: 'Post deleted' })
    } catch (error) {
      return response.status(500).json({ error: error.message })
    }
  }
}
