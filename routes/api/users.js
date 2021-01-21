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

router.post("/", (req, res) => {
  try {
    User.findOne({email:req.body.email})
    .then(user=>{
      if(user){
        res.json({
          success: false,
          status:404,
          msg:"user Already exits"
        })
      }else{
         User.create(req.body).then(
           user=>{
                     res.json({
          status: 201,
          success: true,
          dbid: user._id,
        });

           }
         )
      }
    })

  } catch (err) {
    res.json({
      status: 400,
      success: false,
      error: err.message,
    });
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

module.exports = router;
