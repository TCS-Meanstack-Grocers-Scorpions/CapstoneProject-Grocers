let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

let PurchasedSchema = mongoose.Schema({
   _id:String, //this is userId
   items: [{
       pid:String,
       name:String,
       price:Number,
       quantity:Number,
       datePurchased:String,
       orderStatus:String,
       orderTotal:Number
   }],
  
})
let PurchaseModel = mongoose.model("purchased",PurchasedSchema,"Purchased");

module.exports = PurchaseModel;