exports.up = function (knex, Promise) {
    return knex.schema.createTable('posts', function (table) {
      table.increments('id').primary()
      table.string('postDescription')
      table.text('description')
    })
  }
  
  exports.down = function (knex) {
    return knex.schema.dropTable('posts')
  }