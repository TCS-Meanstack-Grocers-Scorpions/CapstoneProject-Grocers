let OrderModel = require('../model/orders.model.js');
let ItemModel=require("../../Users/user-model/item.model");
let UserModel=require("../../Users/user-model/user.model")
// update order status
let updateStatus = (req, res) => {
  let oid = req.body.oid;
  let Status = req.body.orderStatus;
  
  ItemModel.findOne({_id:oid},(err,res)=>{console.log(res)})
  ItemModel.updateOne(
    { _id: oid },
    { $set: { orderStatus: Status } }
  )
    .then((obj) => {
      console.log(obj);
      currFunds=0;
      if(Status=='Cancelled') {
        UserModel.find({ _id: uid }, (err, result) => {
          if (!err) {
            curFunds = result[0].funds;
          }
          let totalFunds = obj.price + curFunds;
          UserModel.updateOne(
            { _id: uid },
            { $set: { funds: totalFunds } },
            (err, result) => {
              if (!err) {
                if (result.nModified > 0) {
                  res.send('Record updated succesfully');
                } else {
                  res.send('Record is not available');
                }
              } else {
                res.send('Error generated ' + err);
              }
            }
          );
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
let getOrdersByUserID = (req, res) => {
  let uid = req.params.uid;
  OrderModel.find({ userId: uid }, (err, result) => {
    if (!err) res.json(result);
  });
};

let getAllOrders= (req,res)=>{
  OrderModel.find({}, (err, result) => {
    if (!err) res.json(result);
  });
}
module.exports = { updateStatus, getOrdersByUserID,getAllOrders };
