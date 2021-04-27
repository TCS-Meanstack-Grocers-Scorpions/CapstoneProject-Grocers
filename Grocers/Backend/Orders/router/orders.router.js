let express = require('express');
let router = express.Router();
let OrderControll = require('../controller/orders.controller');
router.put('/updateOrderStatus/', OrderController.updateStatus);
router.get('/getOrdersByUserID/:uid',OrderController.getOrdersByUserID)

module.exports = router;
