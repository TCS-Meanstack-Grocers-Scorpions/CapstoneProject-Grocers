let AdminModel = require("../model/admin.model.js");

//retrieve all admin details
let getAdminDetails = (req,res)=>{
    AdminModel.find({},(err,result)=>{
        if(!err){
            res.json(result);
        }
    })
}
module.exports={getAdminDetails};