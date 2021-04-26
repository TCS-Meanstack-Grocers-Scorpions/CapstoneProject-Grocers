let express = require("express");
let router = express.Router();

let EmployeeController = require("../controlller/emp.controller.js");

router.post("/addEmployee", EmployeeController.empUserDetails);
router.delete("/deleteEmpById/:pid",EmployeeController.deleteEmpById);
router.get("/getEmployeeById/:eid",EmployeeController.getEmpByID);

module.exports = router;