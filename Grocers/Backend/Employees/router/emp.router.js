let express = require("express");
let router = express.Router();

let EmployeeController = require("../controlller/emp.controller.js");

router.post("/addEmployee", EmployeeController.empUserDetails);
router.delete("/deleteEmpById/:pid",EmployeeController.deleteEmpById);

module.exports = router;