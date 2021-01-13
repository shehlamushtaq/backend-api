const express = require("express");

const app = express();
const path = require("path");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
<<<<<<< HEAD
app.use(bodyParser.json());
=======

var cors = require('cors')

app.use(cors())

const dbConnect = require('./config/db.js')

>>>>>>> 703d7de7c68d9ca41d6d2f77c83731639faa4dee
const PORT = process.env.PORT || 5000;
///connect to db 
dbConnect();
app.listen(PORT, (req, res) => {
  console.log("My second Server is running at port: ", PORT);
});
<<<<<<< HEAD
var cors = require("cors");
app.use(cors());
=======
>>>>>>> 703d7de7c68d9ca41d6d2f77c83731639faa4dee

app.use("/api/users", require("./routes/api/users"));
// const users = require('./Users')
// console.log(users);
