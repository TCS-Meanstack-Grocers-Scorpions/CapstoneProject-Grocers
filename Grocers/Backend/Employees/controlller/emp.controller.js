let EmployeeModel = require('../model/employee.model.js');
const ObjectId = require('mongodb').ObjectId;

//get emp by ID
// let getEmpByID = (req, res) => {
//   let eid = req.params.eid;
//   EmployeeModel.find({ _id: eid }, (err, result) => {
//     if (!err) {
//       res.json(data);
//     }
//   });
// };

let getEmpByID = (req, res) => {
  let pid = req.params.pid;
  EmployeeModel.find({ _id: new ObjectId(pid)}, (err, result) => {
    if (!err) {
      res.json(result);
    }
  });
};

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
  let eid = req.body.eid;
  let bemail = req.body.email.trim();
  let bfirstname = req.body.firstname.trim();
  let blastname = req.body.lastname.trim();
  let bpassword = req.body.password.trim();
  EmployeeModel.updateOne(
    { _id: new ObjectId(eid) },
    {
      $set: {
        fname: bfirstname,
        lname: blastname,
        email: bemail,
        pass: bpassword,
      },
    }
  )
    .then((obj) => {
      console.log(obj);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { empUserDetails, deleteEmpById, editEmpPro, getEmpByID };
