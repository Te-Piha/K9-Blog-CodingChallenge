const express = require('express')
const router = express.Router()
const db = require('./db')

router.get('/', (req, res) => {
  return db.getPosts()
    .then(posts => { res.json(posts) })
})

router.post('/', (req, res) => {
  const body = req.body

  db.newPost(body)
    .then(res.redirect('/'))
})

module.exports = router
