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
let getUserById = (req,res)=>{  
    let pid = req.params.pid;
    UserModel.find({_id: pid},(err,result)=>{
        if(!err){
            res.json(result);
        }
    })
}
let updateUserDetails = (req,res)=>{
    let pid = req.body.pid;       //passing the id through path param
    let locked = req.body.locked;
    UserModel.updateMany({_id:pid},{$set:{locked:locked}},(err,result)=>{
        if(!err){
            if(result.nModified>0){
                res.send("Record updated successfully")
            } else {
                res.send("No such Product")
            }
        } else {
            res.send("Error generated "+err)
        }
    })
}

module.exports = {storeUserDetails, getUserById, updateUserDetails}; 