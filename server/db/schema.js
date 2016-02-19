var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : '173.194.105.1',
    user     : 'test',
    password : '',
    database : 'studymate',
    charset  : 'utf8'
  }
});

var Bookshelf = require('bookshelf')(knex);
var db = Bookshelf;

db.knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    knex.schema.createTable('users', function (user) {
      user.increments('id').primary();
      user.string('username', 100);
      user.string('password', 100);
      user.integer('events_id');
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('events').then(function(exists) {
  if (!exists) {
    knex.schema.createTable('events', function (event) {
      event.increments('id').primary();
      event.string('name', 100);
      event.string('topic', 100);
      event.string('place', 100);
      event.dateTime('datetime')
      event.integer('user_id');
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

module.exports = Bookshelf;