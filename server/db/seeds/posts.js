exports.seed = function (knex, Promise) {
  return knex('posts').del()
    .then(function () {
      return knex('posts').insert([
        { id: 1,
          postDescription: 'Day - backend',
          description: 'felt that i was loosingmy touch with the backend, so i wanted to get into it' }

      ])
    })
}