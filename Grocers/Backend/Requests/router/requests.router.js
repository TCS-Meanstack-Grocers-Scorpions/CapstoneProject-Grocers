let express = require('express');
let router = express.Router(); //router reference
let RequestController = require('../controller/requests.controller.js');

router.get('/getRequests', RequestController.getRequests);
router.post('/sendRequest', RequestController.saveRequest);
router.post('/deleteRequest', RequestController.deleteRequestById);

module.exports = router;
