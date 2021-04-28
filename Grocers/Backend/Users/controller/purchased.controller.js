const PurchaseModel = require('../user-model/purchased.model.js');

let getUserPurchaseDetails = (req,res)=>{
    let pid = req.params.pid;
    PurchaseModel.find({ _id: pid },(err,result)=>{
        if(!err){
            res.json(result);
        }
    });
}

let getProductPurchaseDetails = (req,res)=>{
    let product = req.params.product;
    PurchaseModel.find({ name: product },(err,result)=>{
        if(!err){
            res.json(result);
        }
    });
}
let datePurchased = (req,res)=>{
    let date = req.params.date;
    let date2 = req.params.date;
    PurchaseModel.find({ date: date},(err,result)=>{
        if(!err){
            res.json(result);
        }
    });
}
let twoDatesPurchaseed = (req,res)=>{
    let date = req.params.date;
    let date2 = req.params.date;
    PurchaseModel.find({ date: {$gt:date, $ls:date2}}, (err,result) => {
        if(!err){
            res.json(result);
        }
    });
}

module.exports = {getUserPurchaseDetails,getProductPurchaseDetails, datePurchased, twoDatesPurchaseed}