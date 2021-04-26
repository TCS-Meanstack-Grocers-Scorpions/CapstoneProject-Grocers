let express = require("express");
let router = express.Router();

let UserController = require("../controller/users.controller.js");

router.post("/signUp", UserController.storeUserDetails);
router.post("/ticket",UserController.raiseTicket);
router.get("/select", UserController.selectObject);
router.post("/select",UserController.addtoCart);
router.get("/cart",UserController.viewCart);
router.put("/cart",UserController.updateCart);
router.delete("/cart/:pid",UserController.deleteCart);
module.exports = router;