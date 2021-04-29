let express = require('express');
let router = express.Router(); //router reference
let SalesController = require("../controller/sales.controller.js");

router.get('/getUserPurchasedDetails/:uid', SalesController.getUserPurchaseDetails);
router.get('/getProductPurchasedDetails/:pid', SalesController.getProductPurchaseDetails);
router.get('/getDatePurchasedDetails/:date', SalesController.datePurchased);
router.get('/twoDatesPurchased/:date/:date2', SalesController.twoDatesPurchaseed);
router.post('/storeSaleDetails', SalesController.storeSaleDetails);

module.exports=router;