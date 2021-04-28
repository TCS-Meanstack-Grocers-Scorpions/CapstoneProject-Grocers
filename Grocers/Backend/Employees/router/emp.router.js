let express = require('express');
let router = express.Router();

let EmployeeController = require('../controlller/emp.controller.js');

router.get('/getEmployeeById/:eid', EmployeeController.getEmpByID);
router.post('/addEmployee', EmployeeController.empUserDetails);
router.delete('/deleteEmpById/:pid', EmployeeController.deleteEmpById);
router.put('/editEmployeeProfile', EmployeeController.editEmpPro);

module.exports = router;
