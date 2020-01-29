const connection = require('./connection')

function getPosts (db = connection) {
  return db('posts')
    .select()
}

function newPost (body, db = connection) {
  return db('posts')
    .insert({
      postDescription: body.postDescription,
      description: body.description
    })
}

module.exports = {
  getPosts,
  newPost
}
