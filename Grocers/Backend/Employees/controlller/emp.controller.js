let EmployeeModel = require('../model/employee.model.js');

//get emp by ID
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
//adding emp
let empUserDetails = (req,res)=>{
    let emp = new EmployeeModel({
        fname:req.body.fname,
        lname:req.body.lname,
        email:req.body.email,
        pass: "Welcome123"
    });
    emp.save((err,result)=>{
        if(!err){
            res.send("Records stored successfully")
        } else {
            res.send("Record didn't store...")
        }
    })
}
//delete
let deleteEmpById = (req,res)=>{
    let pid = req.params.pid;       //passing the id through path param
    EmployeeModel.deleteOne({_id:pid},(err,result)=>{
        if(!err){
            if(result.deletedCount>0){
                res.send("Record deleted successfully")
            }else {
                res.send("No such Product")
            }
        } 
    })
}

module.exports = {empUserDetails, deleteEmpById, getEmpByID};