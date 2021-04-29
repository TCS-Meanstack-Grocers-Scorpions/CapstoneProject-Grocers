const SalesModel = require('../model/sales.model.js');
const ObjectId = require('mongodb').ObjectId;

//add
let storeSaleDetails = (req,res)=>{
    let sale = new SalesModel({
        uid:req.body.uid,
        pid:req.body.pid,
        name:req.body.name,
        price:req.body.price,
        quantity:req.body.quantity,
        datePurchased:req.body.datePurchased
    });
    console.log(sale)
    sale.save((err,result)=>{
        if(!err){
            res.send("Sale stored successfully")
        } else {
            res.send("Sale didn't store...")
        }
    })
}

let getUserPurchaseDetails = (req,res)=>{
    let uid = req.params.uid;
    SalesModel.find({ uid: uid },(err,result)=>{
    // SalesModel.find({ uid: new ObjectId(uid) },(err,result)=>{
        if(!err){
            res.json(result);
        }
    });
}

let getProductPurchaseDetails = (req,res)=>{
    let product = req.params.pid;
    SalesModel.find({ name:product },(err,result)=>{
    // SalesModel.find({ name: new ObjectId(product) },(err,result)=>{
        if(!err){
            res.json(result);
        }
    });
}
let datePurchased = (req,res)=>{
    let date = req.params.date;

    SalesModel.find({ datePurchased: date},(err,result)=>{
        if(!err){
            res.json(result);
        }
    });
}
let twoDatesPurchaseed = (req,res)=>{
    let date = req.params.date;
    let date2 = req.params.date2;
    console.log(date, date2)
    SalesModel.find({ datePurchased: {$gte:date, $lte:date2}}, (err,result) => {
        if(!err){
            res.json(result);
        }
    });
}

module.exports = {storeSaleDetails, getUserPurchaseDetails, getProductPurchaseDetails, datePurchased, twoDatesPurchaseed}