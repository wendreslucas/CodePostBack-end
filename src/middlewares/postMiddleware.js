const { validate: isUuid } = require('uuid')
const Post = require('../models/post')

module.exports = {
  async validateId(request, response, next) {
    const { id } = request.params

    if (!isUuid(id)) {
      return response.status(400).json({ error: 'Invalid id' })
    }

    try {
      const post = await Post.findById(id)
      response.post = post
      if (!post) {
        return response.status(404).json({ error: 'Post not found' })
      }
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
    next()
  }
}
