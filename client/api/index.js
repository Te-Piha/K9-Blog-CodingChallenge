import request from 'superagent'

export function getPosts () {
  return request.get('/api/v1/posts/')
    .then(res => {
      const posts = res.body
      return posts
    })
    .catch((err) => {
      throw Error('its not working')
      // console.error(err.message, 'not sure whats going on')
    })
}