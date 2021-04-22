//let TicketModel = require("../user-model/user.model.js");
let UserModel = require('../user-model/user.model.js');

//adding users
let storeUserDetails = (req,res)=>{
    let product = new UserModel({
        fname:req.body.fname,
        lname:req.body.lname,
        email:req.body.email,
        pass: req.body.pass,
        dob: req.body.dob,
        phone: req.body.phone,
        address: req.body.address,
        funds: 12000,
        locked: false
    });
    product.save((err,result)=>{
        if(!err){
            res.send("Records stored successfully")
        } else {
            res.send("Record didn't store...")
        }
    })
}

module.exports = {storeUserDetails};