let express = require("express");
let router = express.Router();
let UserController = require("../controller/users.controller.js");

router.post("/ticket",UserController.raiseTicket);
router.post("/signUp", UserController.storeUserDetails)




module.exports = router;