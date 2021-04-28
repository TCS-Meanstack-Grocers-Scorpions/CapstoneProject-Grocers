let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

let PurchasedSchema = mongoose.Schema({
   userId:String, //this is userId
   items: [{
       pid:String,
       name:String,
       price:Number,
       quantity:Number,
       datePurchased:String,
       orderStatus:String,
   }],
   total:Number
})
let PurchaseModel = mongoose.model("purchased",PurchasedSchema,"Purchased");

module.exports = PurchaseModel;