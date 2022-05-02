const express = require('express')
const routes = express.Router()

const PostController = require('./controllers/PostController')
const postMiddleware = require('./middlewares/postMiddleware')

routes.get('/posts', PostController.index)
routes.post('/posts', PostController.store)
routes.put('/posts/:id', postMiddleware.validateId, PostController.update)
routes.delete('/posts/:id', postMiddleware.validateId, PostController.delete)

module.exports = routes
