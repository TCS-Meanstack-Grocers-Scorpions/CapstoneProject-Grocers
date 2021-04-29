let express = require('express');
let router = express.Router();

let EmployeeController = require('../controlller/emp.controller.js');

router.get('/getEmployeeById/:pid', EmployeeController.getEmpByID);
router.post('/addEmployee', EmployeeController.empUserDetails);
router.delete('/deleteEmpById/:pid', EmployeeController.deleteEmpById);
router.put('/editEmployeeProfile', EmployeeController.editEmpPro);
router.put('/http://localhost:9090/emp/changeEmployeePassword/:eid',EmployeeController.changeEmpPassword);
module.exports = router;
