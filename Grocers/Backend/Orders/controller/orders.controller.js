let OrderModel = require('../model/orders.model');

// update order status
let updateStatus = (req, res) => {
  let oid = req.params.oid;
  let orderStatus = req.params.orderUpdate;
  OrderModel.updateOne(
    {
      _id: oid,
    },
    {
      $set: {
        status: orderStatus,
      },
    }
  );
};
let getOrdersByUserID = (req,res)=>{
  let uid = req.params.uid;
  OrderModel.find({userID:uid},(err,result)=>{
    if(!err) res.json(result);
  })
}
module.exports = { updateStatus,getOrdersByUserID};
