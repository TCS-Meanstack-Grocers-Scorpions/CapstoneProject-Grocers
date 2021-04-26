let EmployeeModel = require('../model/employee.model.js');

//get emp by ID
let getEmpByID = (req,res) => {
    let eid = req.params.eid;
    EmployeeModel.find({_id:eid},(err,data)=>{
        if(!error){
            res.json(data);
        }
        else{
            console.log(err.message);
        }
    })
}
//adding emp
let empUserDetails = (req, res) => {
  let emp = new EmployeeModel({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    pass: 'Welcome123',
  });

  emp.save((err, result) => {
    if (!err) {
      res.send('Records stored successfully');
    } else {
      res.send("Record didn't store...");
    }
  });
};

//delete
let deleteEmpById = (req, res) => {
  let pid = req.params.pid; //passing the id through path param
  EmployeeModel.deleteOne({ _id: pid }, (err, result) => {
    if (!err) {
      if (result.deletedCount > 0) {
        res.send('Record deleted successfully');
      } else {
        res.send('No such Product');
      }
    }
  });
};

//edit employee profile
let editEmpPro = (req, res) => {
  let pid = req.params.pid; //passing the id through path param
  EmployeeModel.findById({ _id: pid }, (err, user) => {
    if (!user) {
      req.flash('error', 'No account found');
      return res.redirect('/edit');
    }

    // good idea to trim
    var email = req.body.email.trim();
    var firstname = req.body.firstname.trim();
    var lastname = req.body.lastname.trim();
    var password = req.body.password.trim();

    // validate
    if (!email || !firstname || !lastname || !password) {
      req.flash('error', 'One or more fields are empty');
      return res.redirect('/employee'); // modified
    }

    // no need for else since you are returning early ^
    user.email = email;
    user.fname = firstname;
    user.lname = lastname;
    user.pass = password;

    user.save(function (err) {
      if (!err) {
        res.send('Records stored successfully');
      } else {
        res.send("Record didn't store...");
      }
    });
  });
};

module.exports = { empUserDetails, deleteEmpById, editEmpPro, getEmpByID };
