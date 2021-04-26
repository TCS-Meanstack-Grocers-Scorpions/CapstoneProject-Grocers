let TicketModel = require("../user-model/ticket.model.js");
let UserModel = require('../user-model/user.model.js');
let ProductModel = require("../../Products/model/product.model.js");
let CartModel = require('../user-model/cart.model');
//adding users
let storeUserDetails = (req, res) => {
    let product = new UserModel({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        pass: req.body.pass,
        dob: req.body.dob,
        phone: req.body.phone,
        address: req.body.address,
        funds: 12000,
        locked: false
    });
    product.save((err, result) => {
        if (!err) {
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
            res.send("Error with Ticket " + err);
        }
    })
}

let selectObject = (req, res) => {

    ProductModel.find({}, (err, result) => {
        if (!err) {
            res.json(result);
        }
        else {
            res.json(err);
        }
    })
}

let addtoCart = (req, res) => {

    let cartItem = new CartModel({
        _id: req.body._id,
        quantity: req.body.quantity
    });

    cartItem.save((err, result) => {
        if (!err) {
            res.send("Added to cart");
        }
        else {
            CartModel.findOne({ _id: req.body._id }, (err, result) => {
                if (!err) {
                    num = parseInt(req.body.quantity);
                    console.log(result);
                    newQuantity = result.quantity + num;
                    console.log(newQuantity);
                    ProductModel.find({ _id: req.body._id }, (err, result) => {

                        if (result[0].quantity+1 > newQuantity) {
                            CartModel.updateOne({ _id: req.body._id }, { $set: { quantity: newQuantity } }, (err, result) => {/*console.log(result)*/ });
                        }
                        else {
                            console.log("Not Enough in Stock");
                        }
                    })

                }
            })


            res.send("Updated existing item");
        }
    })
}
//Edit Profile 
let updateUserInfo= (req,res) => {
    let pid = req.body.pid;
    let newEmail = req.body.newEmail;
    let newPass = req.body.newPass;
    let newAdd = req.body.newAdd;
    let newPhone = req.body.newPhone;
    let newDob = req.body.newDob;
}
module.exports = { storeUserDetails, raiseTicket, selectObject, addtoCart, getUserById, updateUserDetails, updateUserInfo };