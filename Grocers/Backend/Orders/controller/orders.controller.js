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

module.exports = { updateStatus };
