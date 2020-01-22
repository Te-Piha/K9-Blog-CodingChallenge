const express = require('express')
const router = express.Router()
const db = require('./db')

router.get('/', (req, res) => {
return db
    .getPosts
    .then(posts => res.json(posts))
    .catch(displayError)
})

function displayError (res, err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  }
  
module.exports = router