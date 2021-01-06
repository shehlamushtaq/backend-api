const express = require("express");

const app = express();
const path = require("path");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 5000;
app.listen(PORT, (req, res) => {
    console.log("My second Server is running at port: ", PORT);
});

app.use('/api/users', require('./routes/api/users'))
// const users = require('./Users')
// console.log(users);
