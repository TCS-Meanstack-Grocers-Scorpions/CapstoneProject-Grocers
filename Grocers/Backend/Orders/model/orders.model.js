let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let OrderSchema = mongoose.Schema({
  _id:String,
  pid:String,
  name:String,
  price:Number,
  quantity:Number,
  datePurchased:String,
  orderStatus:String,
  userId:String
});

let OrderModel = mongoose.model("Order",OrderSchema,"itemsPurchased");

module.exports = OrderModel;
