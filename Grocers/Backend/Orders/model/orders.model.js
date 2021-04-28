let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let OrderSchema = mongoose.Schema({
  name: String,
  status: String,
  userID: Number,
});

let OrderModel = mongoose.model('', OrderSchema, 'order');

module.exports = OrderModel;
