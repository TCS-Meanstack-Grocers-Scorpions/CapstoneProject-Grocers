let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let RequestSchema = mongoose.Schema({
  productID: Number,
  productName: String,
  empID: Number,
  reqMsg: String,
});

let RequestModel = mongoose.model('request', RequestSchema, 'Requests');

module.exports = RequestModel;
