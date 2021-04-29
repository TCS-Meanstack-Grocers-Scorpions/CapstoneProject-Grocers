let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

let ItemSchema = mongoose.Schema({
       pid:String,
       name:String,
       price:Number,
       quantity:Number,
       datePurchased:String,
       orderStatus:String,
       userId:String
})
let ItemModel = mongoose.model("itemsPurchased",ItemSchema,"itemsPurchased");

module.exports = ItemModel;