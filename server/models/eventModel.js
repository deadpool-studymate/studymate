var db = require('../db/schema.js');
var User = require('./userModel.js');

var Event = db.Model.extend({
  tableName: 'events',
  event: function() {
    return this.belongsToMany(User, 'user_id');
  }
});

module.exports = Event;
