let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let TicketSchema = mongoose.Schema({
    _id:String,
    reason:String,
  
})

let TicketModel = mongoose.model("ticket",TicketSchema,"Tickets");

module.exports = TicketModel;