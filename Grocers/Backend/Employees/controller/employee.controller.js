const e = require('express');
let EmployeeModel = require('../model/employee.model.js');
let getEmpByID = (req,res=>{
    let eid = req.params.eid;
    EmployeeModel.find({_id:eid},(err,data)=>{
        if(!error){
            res.json(data);
        }
        else{
            console.log(err.message);
        }
    })
})
module.exports={getEmpByID}