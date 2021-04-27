let OrderModel = require('../model/orders.model.js');

// update order status
let updateStatus = (req, res) => {
  let oid = req.body.oid.valueOf();
  console.log(oid);
  let orderStatus = req.body.orderStatus;
  OrderModel.updateOne({ _id: oid }, { $set: { status: orderStatus } })
    .then((obj) => {
      console.log(obj);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { updateStatus };
