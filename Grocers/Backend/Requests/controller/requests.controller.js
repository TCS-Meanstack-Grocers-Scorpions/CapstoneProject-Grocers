let RequestModel = require('../model/requests.model.js');

//retrieve all request details
let getRequests = (req, res) => {
  RequestModel.find({}, (err, result) => {
    if (!err) {
      res.json(result);
    }
  });
};

//save requests to admin
let saveRequest = (req, res) => {
  let request = new RequestModel({
    productID: req.body.pid,
    productName: req.body.pname,
    empID: req.body.empId,
    reqMsg: req.body.msg,
  });

  request.save({}, (err, result) => {
    if (!err) {
      res.send('Record stored successfully ');
    } else {
      console.log(err);
      res.send("Record didn't store ");
    }
  });
};

let deleteRequestById = (req, res) => {
  let id = req.params.id; //passing the id through path param
  RequestModel.deleteOne({ _id: id }, (err, result) => {
    if (!err) {
      if (result.deletedCount > 0) {
        res.send('Record deleted successfully');
      } else {
        res.send('No such Product');
      }
    }
  });
};

module.exports = { saveRequest, getRequests, deleteRequestById };
