let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let OrderSchema = mongoose.Schema({
    _id:Number,
    name:String,
    status:String
})

let OrderModel = mongoose.model("",OrderSchema,"Order")

module.exports = OrderModel;