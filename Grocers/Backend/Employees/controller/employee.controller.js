const e = require('express');
let EmployeeModel = require('../model/employee.model.js');
let getEmpByID = (req,res=>{
    let pid = req.params.pid;
    EmployeeModel.find({_id:pid},(err,data)=>{
        if(!error){
            res.json(data);
        }
        else{
            console.log(err.message);
        }
    })
})
module.exports={getEmpByID}