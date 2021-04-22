let express = require("express");
let router = express.Router();
let UserController = require("../controller/Users.control.js");


router.post("/ticket",UserController.raiseTicket);




module.exports = router;