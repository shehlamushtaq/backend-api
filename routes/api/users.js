const express = require("express");
const { findByIdAndDelete } = require("../../models/users.js");
const router = express.Router();
// const users = require('../../Users')
const User = require("../../models/users.js");

//==============================================get all users
router.get("/", async (req, res) => {
  console.log("load all users");
  try {
    const user = await User.find();
    console.log(user);
    res.json({
      status: 200,
      success: true,
      data: user,
    });
  } catch (err) {
    res.json({
      status: 404,
      success: false,
      error: err.message,
    });
  }
});
//===============================================create new user
router.post("/add", (req, res) => {
  let {pwd, email, name} = req.body
  var salt = bcrypt.genSaltSync(pwd, salt);
  var hash = bcrypt.hashSync(pwd, salt)
  let newUser = {pwd:hash, email, name}
  try {
    User.findOne({email:req.body.email})
    .then(user=>{
      if(!user){
        ///==================save
        User.create(newUser)
        .then(user=>{
                res.json({
                      status: 201,
                      success: true,
                      dbid: user._id
        })
      })
      }///closing if
  }) .catch (err => res.json ({
    
      status: 400,
      success: false,
      error: err
    }));
  } catch (err){
    console.log(err);
    res.status(400).json({success: false, error: err.message})
}
  });
//===============================================view single User

router.get("/:id", async (req, res) => {
  try {
    const userOne = await User.findById(req.params.id);
    res.json({
      status: 200,
      success: true,
      data: userOne,
    });
  } catch (err) {
    res.json({
      status: 400,
      success: false,
      error: err.message,
    });
  }
});

//===============================================Edit user

router.post("/edit", async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.body._id, req.body);
    res.json({
      status: 201,
      success: true,
      dbid: user._id,
    });
  } catch (err) {
    res.json({
      status: 400,
      success: false,
      error: err.message,
    });
  }
});

//====================================================Delete user

router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({
      status: 200,
      success: true,
      msg: "user is deleted successfully",
    });
  } catch (err) {
    res.json({
      status: 400,
      success: false,
      error: err.message,
    });
  }
});
//=========================================login auth
router.post("/login")

module.exports = router;
