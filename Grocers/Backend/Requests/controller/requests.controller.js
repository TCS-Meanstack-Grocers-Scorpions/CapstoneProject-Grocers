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
      //res.json({"msg":"Record stored successfully"})
    } else {
      res.send("Record didn't store ");
    }
  });
};

module.exports = { saveRequest, getRequests };
