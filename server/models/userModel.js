var db = require('../db/schema.js');
var Event = require('./eventModel.js');

var User = db.Model.extend({
  tableName: 'users',
  event: function() {
    return this.belongsToMany(Event, 'event_id');
  }
});

module.exports = User;
