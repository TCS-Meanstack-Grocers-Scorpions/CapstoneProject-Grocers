let express = require('express');
let router = express.Router();

let OrderController = require('../controller/orders.controller');

router.put('/updateOrderStatus/', OrderController.updateStatus);

module.exports = router;
