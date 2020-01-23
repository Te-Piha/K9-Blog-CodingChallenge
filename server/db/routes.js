const express = require('express')
const router = express.Router()
const db = require('./db')

router.get('/', (req, res) => {
return db.getPosts()
    .then(posts => {res.json(posts)})

  })
module.exports = router