const express = require("express");

const app = express();
const path = require("path");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 5000;
app.listen(PORT, (req, res) => {
    console.log("My second Server is running at port: ", PORT);
});


const users = require('./Users')
console.log(users);
app.get('/api/users', (req, res) => {
    res.json(users)
})
app.get('/api/users/:id', (req, res) => {
    let id = req.params.id
    console.log(id);
    let result = users.filter((item) => item.id == id)
    res.json(result[0])
})