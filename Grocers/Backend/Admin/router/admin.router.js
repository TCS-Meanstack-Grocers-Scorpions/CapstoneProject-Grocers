let express = require('express');
let router = express.Router(); //router reference
let AdminController = require("../controller/admin.controller.js");

router.get("/adminDetails",AdminController.getAdminDetails);

module.exports=router;