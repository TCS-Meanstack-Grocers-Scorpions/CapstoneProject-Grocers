let express = require("express");
let router = express.Router();

let UserController = require("../controller/users.controller.js");

router.post("/signUp", UserController.storeUserDetails);
router.post("/signin/:pid", UserController.getUserById);

module.exports = router;