let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

let SalesSchema = mongoose.Schema({
       uid:String,  //user id, purchacer
       pid:String,  //product id
       name:String, //product name
       price:Number,    //product price
       quantity:Number, //product quantity
       datePurchased:String   
})
let SalesModel = mongoose.model("sales",SalesSchema,"Sales");

module.exports = SalesModel;