let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let EmployeeSchema = mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    pass:String
})

let EmployeeModel = mongoose.model("",EmployeeSchema,"Employee")

module.exports = EmployeeModel;