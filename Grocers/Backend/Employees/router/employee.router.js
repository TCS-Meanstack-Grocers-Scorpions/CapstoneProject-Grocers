let express = require ("express");
let router = express.Router();
let EmployeeController = require("../controller/employee.controller.js");
router.get("/getEmployeeById/:pid",EmployeeController.getEmpByID);
