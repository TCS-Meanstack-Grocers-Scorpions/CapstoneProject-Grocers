let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let UserSchema = mongoose.Schema({
    username:String,
    reason:String,
  
})

let TicketModel = mongoose.model("",UserSchema,"Tickets");

module.exports = TicketModel;