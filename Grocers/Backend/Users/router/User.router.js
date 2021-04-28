let express = require('express');
let router = express.Router();

let UserController = require('../controller/users.controller');
let PurchaseController = require('../controller/purchased.controller');
const PurchaseModel = require('../user-model/purchased.model');

router.post('/signUp', UserController.storeUserDetails);
router.get("/getUserById/:pid", UserController.getUserById);
router.put("/updateUserPassword/:uid",UserController.updateUserPassword);
router.put("/updateUserEmail/:uid",UserController.updateUserEmail);
router.put("/updateUserAddress/:uid",UserController.updateUserAddress);
router.put("/updateUserPhone/:uid",UserController.updateUserPhone);
router.put("/updateUserDOB/:uid", UserController.updateUserDOB);
router.put("/ updateUserFunds/:uid",UserController.updateUserFunds);
router.post("/ticket",UserController.raiseTicket);
router.get("/select", UserController.selectObject);
router.post("/select",UserController.addtoCart);
router.put("/updateUserInfo",UserController.updateUserInfo);
router.get("/cart/:userId",UserController.viewCart);
router.put("/cart",UserController.updateCart);
router.delete("/cart/:pid",UserController.deleteCart);
//router.get("/orderStatus:/:uid",UserController.getOrderStatus);
router.post('/signUp', UserController.storeUserDetails);
router.get('/getUserById/:pid', UserController.getUserById);
router.put('/lockUser', UserController.lockUser);
router.put('/unlockUsers/', UserController.unlockUser);
router.post('/ticket', UserController.raiseTicket);
router.get('/select', UserController.selectObject);
router.post('/select', UserController.addtoCart);
router.post("/cart",UserController.PurchaseInfo);
router.post("/changeFunds",UserController.changeUserFund);

router.get("/getUserPurchasedDetails/:pid", PurchaseController.getUserPurchaseDetails);
router.get("/getProductPurchasedDetails/:product", PurchaseController.getProductPurchaseDetails);
router.get("/datePurchased/:date", PurchaseController.datePurchased);
router.get("/twoDatesPurchased/:date/:date2", PurchaseController.twoDatesPurchaseed);

module.exports = router;