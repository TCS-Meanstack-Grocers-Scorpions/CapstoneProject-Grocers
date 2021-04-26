let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let RequestSchema = mongoose.Schema({
  empID: Number,
  productID: Number,
  productName: String,
  reqMsg: String,
});

let RequestModel = mongoose.model('request', RequestSchema, 'Requests');

module.exports = RequestModel;
