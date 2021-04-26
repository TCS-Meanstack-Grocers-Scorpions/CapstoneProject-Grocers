let RequestModel = require('../model/requests.model.js');

//retrieve all admin details
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
      res.send(result);
      //res.json({"msg":"Record stored successfully"})
    } else {
      res.send("Record didn't store ");
    }
  });
};

module.exports = { saveRequest };
