const SalesModel = require('../model/sales.model.js');
const ObjectId = require('mongodb').ObjectId;

let getUserPurchaseDetails = (req,res)=>{
    let uid = req.params.uid;
    SalesModel.find({ uid: new ObjectId(uid) },(err,result)=>{
        if(!err){
            res.json(result);
        }
    });
}

let getProductPurchaseDetails = (req,res)=>{
    let product = req.params.product;
    SalesModel.find({ name:product },(err,result)=>{
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
    let date2 = req.params.date;
    SalesModel.find({ datePurchased: {$gt:date, $ls:date2}}, (err,result) => {
        if(!err){
            res.json(result);
        }
    });
}

module.exports = {getUserPurchaseDetails, getProductPurchaseDetails, datePurchased, twoDatesPurchaseed}