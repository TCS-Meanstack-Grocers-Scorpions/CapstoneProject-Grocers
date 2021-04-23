let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

let UserSchema = mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    pass:String,
    dob:Date,
    phone:Number,
    address:String,
    funds:Number,
    locked:Boolean
})
let UserModel = mongoose.model("user",UserSchema,"User");

module.exports = UserModel;