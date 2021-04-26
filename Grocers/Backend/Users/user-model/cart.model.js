let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let CartSchema = mongoose.Schema({
    _id: String,
    quantity: Number,
    name: String,
    price: Number
})

let TicketModel = mongoose.model("cart", CartSchema, "Cart");

module.exports = TicketModel;