let express = require("express");
let router = express.Router();

let UserController = require("../controller/users.controller.js");

router.post("/signUp", UserController.storeUserDetails);
router.get("/getUserById/:pid", UserController.getUserById);
router.put("/updateUserDetails", UserController.updateUserDetails);

module.exports = router;