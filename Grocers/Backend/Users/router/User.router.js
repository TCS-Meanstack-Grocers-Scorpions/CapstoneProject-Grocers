let express = require('express');
let router = express.Router();

let UserController = require('../controller/users.controller.js');

router.post('/signUp', UserController.storeUserDetails);

router.get('/getUserById/:pid', UserController.getUserById);
router.put('/updateUserDetails', UserController.updateUserDetails);
router.put('/unlockUser/:pid', UserController.unlockUser);

router.post('/ticket', UserController.raiseTicket);
router.get('/select', UserController.selectObject);
router.post('/select', UserController.addtoCart);

module.exports = router;
