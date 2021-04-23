let TicketModel = require("../user-model/ticket.model.js");
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

let raiseTicket = (req, res) => {
    let ticket = new TicketModel({
        _id: req.body.username,
        reason: req.body.reason
    });

    ticket.save((err, result) => {
        if (!err) {
            res.send("Ticket raised successfully");
        }

        else {
            res.send("Error with Ticket "+ err);
        }
    })
}
let selectObject= (req,res) => {

    ProductModel.find({},(err,result)=>{
        if(!err){
            res.json(result);
        }
        else{
            res.json(err);
        }
    })
    }
module.exports = {storeUserDetails,raiseTicket,selectObject};