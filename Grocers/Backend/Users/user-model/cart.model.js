let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let CartSchema = mongoose.Schema({
    pid: String,
    quantity: Number,
    name: String,
    price: Number,
    userId:String,
    imgId:Number
})

let TicketModel = mongoose.model("cart", CartSchema, "Cart");

module.exports = TicketModel;