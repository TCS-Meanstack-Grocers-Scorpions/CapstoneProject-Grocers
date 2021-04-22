
//Load all required modules 
let app = require("express")();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");

let url = "mongodb://localhost:27017/Grocers";

app.use(bodyParser.urlencoded({ extended: true }));    // enable body part data  
app.use(bodyParser.json());                         // json data. 
app.use(cors()); // used model from line 5
//Database connection without warning 
const mongooseDbOption = {       // to avoid warning 
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url, mongooseDbOption);   //ready to connect 

mongoose.connection
 
//link to router module like a import concept. 

var Users = require("./Users/router/user.router.js");

app.use("/",Users);

app.listen(9090, () => console.log("Server is running on port number 9090"));


