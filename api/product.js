const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    res.json({
      status: 200,
      message: 'Get data has been success'
    })
  } catch (error) {
    console.error(error)
    return res.status(500).send('Server errror')
  }
})

module.exports = router
