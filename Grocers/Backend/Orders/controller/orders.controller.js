let OrderModel = require('../model/orders.model.js');
const ObjectId = require('mongodb').ObjectId;

// update order status
let updateStatus = (req, res) => {
  let oid = req.body.oid;
  let objOid = new ObjectId(oid);
  console.log('objeOid ' + objOid);
  let orderStatus = req.body.orderStatus;
  OrderModel.updateOne(
    { _id: new ObjectId(oid) },
    { $set: { status: orderStatus } }
  )
    .then((obj) => {
      console.log(obj);
    })
    .catch((err) => {
      console.log(err);
    });
};
let getOrdersByUserID = (req, res) => {
  let uid = req.params.uid;
  OrderModel.find({ userID: uid }, (err, result) => {
    if (!err) res.json(result);
  });
};
module.exports = { updateStatus, getOrdersByUserID };
