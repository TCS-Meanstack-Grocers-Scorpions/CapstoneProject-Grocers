let TicketModel = require('../user-model/ticket.model.js');
let UserModel = require('../user-model/user.model.js');
let ProductModel = require('../../Products/model/product.model.js');
let CartModel = require('../user-model/cart.model');
const ObjectId = require('mongodb').ObjectId;

//adding users
let storeUserDetails = (req, res) => {
  let product = new UserModel({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    pass: req.body.pass,
    dob: req.body.dob,
    phone: req.body.phone,
    address: req.body.address,
    funds: 12000,
    locked: false,
  });
  product.save((err, result) => {
    if (!err) {
      res.send('Records stored successfully');
    } else {
      res.send("Record didn't store...");
    }
  });
};
let getUserById = (req, res) => {
  let pid = req.params.pid;
  UserModel.find({ _id: pid }, (err, result) => {
    if (!err) {
      res.json(result);
    }
  });
};
let lockUser = (req, res) => {
  let pid = req.body.pid; //passing the id through path param
  UserModel.updateOne(
    { _id: pid },
    { $set: { locked: true } },
    (err, result) => {
      if (!err) {
        if (result.nModified > 0) {
          res.send('Record updated successfully');
        } else {
          res.send('No such User');
        }
      } else {
        res.send('Error generated ' + err);
      }
    }
  );
};

let raiseTicket = (req, res) => {
  let ticket = new TicketModel({
    _id: req.body.username,
    reason: req.body.reason,
  });

  ticket.save((err, result) => {
    if (!err) {
      res.send('Ticket raised successfully');
    } else {
      res.send('Error with Ticket ' + err);
    }
  });
};

let selectObject = (req, res) => {
  ProductModel.find({}, (err, result) => {
    if (!err) {
      res.json(result);
    } else {
      res.json(err);
    }
  });
};

let addtoCart = (req, res) => {
  var msg = 'hi';
  let cartItem = new CartModel({
    pid: req.body._id,
    quantity: req.body.quantity,
    name: req.body.name,
    price: req.body.price,
    userId: req.body.userId,
  });

  CartModel.findOne(
    { pid: req.body._id, userId: req.body.userId },
    (err3, result2) => {
      console.log('this is r2');
      console.log(result2);
      console.log('this is err3 ' + err3);
      console.log(result2);
      if (result2 === null) {
        cartItem.save((err, result) => {
          if (!err) {
            console.log('added to cart');
          }
        });
      } else {
        ProductModel.find({ _id: req.body._id }, (err, result) => {
          CartModel.findOne(
            { pid: req.body._id, userId: req.body.userId },
            (err2, result2) => {
              num = parseInt(req.body.quantity);
              console.log(result2);
              newQuantity = result2.quantity + num;
              if (result[0].quantity + 1 > newQuantity) {
                console.log('Updated');
                CartModel.updateOne(
                  { pid: req.body._id, userId: req.body.userId },
                  { $set: { quantity: newQuantity } },
                  (err, result) => {
                    /*console.log(result)*/
                  }
                );
              } else {
                console.log('Not Enough in Stock');
                msg = 'Not Enough in Stock';
              }
            }
          );
        });
      }
    }
  );
};

let unlockUser = (req, res) => {
  let uid = req.body.uid;
  //let objUid = new ObjectId(uid);
  console.log('uid: ' + uid);
  UserModel.updateOne({ _id: new ObjectId(uid) }, { $set: { locked: true } })
    .then((obj) => {
      console.log(obj);
    })
    .catch((err) => {
      console.log(err);
    });
};

let viewCart = (req, res) => {
  CartModel.find({ userId: req.params.userId }, (err, result) => {
    if (!err) {
      res.json(result);
    } else {
      res.json(err);
    }
  });
};

let updateCart = (req, res) => {
  console.log(req.body.quantity);
  console.log(req.body._id);
  CartModel.updateOne(
    { pid: req.body._id, userId: req.body.userId },
    { $set: { quantity: req.body.quantity } },
    (err, result) => {
      if (!err) {
        if (result.nModified > 0) {
          res.send('Record updated succesfully');
        } else {
          res.send('Failed to update');
        }
      } else {
        res.send('Error generated ' + err);
      }
    }
  );
};

let deleteCart = (req, res) => {
  console.log('this is id:' + req.params.pid);
  CartModel.deleteOne({ _id: req.params.pid }, (err, result) => {
    if (!err) {
      if (result.deletedCount > 0) {
        res.send('Record deleted successfully');
      } else {
        res.send('Error deleting Record');
      }
    } else {
      res.send('Error generated ' + err);
    }
  });
};

let updateUserPassword = (req, res) => {
  let uid = req.params.uid;
  let newPass = req.body.newPass;
  UserModel.updateOne({ _id: uid }, { $set: { pass, newPass } });
};
let updateUserEmail = (req, res) => {
  let uid = req.params.uid;
  let newEmail = req.body.newEmail;
  UserModel.updateOne({ _id: uid }, { $set: { email, newEmail } });
};
let updateUserAddress = (req, res) => {
  let uid = req.params.uid;
  let newAdd = req.body.newAdd;
  UserModel.updateOne({ _id: uid }, { $set: { address, newAdd } });
};
let updateUserPhone = (req, res) => {
  let uid = req.params.uid;
  let newPhone = req.body.newPhone;
  UserModel.updateOne({ _id: uid }, { $set: { phone, newPhone } });
};
let updateUserDOB = (req, res) => {
  let uid = req.params.uid;
  let newDOB = req.body.newDOB;
  UserModel.updateOne({ _id: uid }, { $set: { dob, newDOB } });
};
let updateUserFunds = (req, res) => {
  let uid = req.params.uid;
  let addedFunds = req.body.addedFunds;
  let curFunds = 0;
  UserModel.find({ _id: uid }, (err, result) => {
    if (!err) {
      curFunds = result[0].funds;
    }
  });
  let totalFunds = addedFunds + curFunds;
  UserModel.updateOne({ _id: uid }, { $set: { funds, totalFunds } });
};
//Edit Profile
let updateUserInfo = (req, res) => {
  let pid = req.body.pid;
  let newEmail = req.body.newEmail;
  let newPass = req.body.newPass;
  let newAdd = req.body.newAdd;
  let newPhone = req.body.newPhone;
  let newDob = req.body.newDob;
};

module.exports = {
  updateUserInfo,
  lockUser,
  storeUserDetails,
  raiseTicket,
  selectObject,
  addtoCart,
  viewCart,
  updateCart,
  deleteCart,
  getUserById,
  unlockUser,
  updateUserPassword,
  updateUserEmail,
  updateUserAddress,
  updateUserDOB,
  updateUserPhone,
  updateUserFunds,
};
