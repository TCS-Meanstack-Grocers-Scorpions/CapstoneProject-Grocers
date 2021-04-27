let express = require('express');
let router = express.Router();

let OrderControll = require('../controller/orders.controller');

router.put('/updateOrderStatus/', OrderControll.updateStatus);

module.exports = router;
