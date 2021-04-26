let express = require('express');
let router = express.Router(); //router reference
let RequestController = require('../controller/requests.controller.js');

router.post('/getRequests', RequestController.getRequests);
router.post('/sendRequest', RequestController.saveRequest);

module.exports = router;
