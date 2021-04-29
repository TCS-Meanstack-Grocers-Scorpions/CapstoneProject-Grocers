let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let RequestSchema = mongoose.Schema({
  empID: String,
  productID: String,
  productName: String,
  reqMsg: String,
});

let RequestModel = mongoose.model('request', RequestSchema, 'Requests');

module.exports = RequestModel;
