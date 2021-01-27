const express = require("express");
const { findByIdAndDelete } = require("../../models/users.js");
const router = express.Router();
// const users = require('../../Users')
const User = require("../../models/users.js");
var bcrypt = require("bcryptjs");
const session = require("express-session");

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
  let { pwd, email, name } = req.body;
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(pwd, salt);
  let newUser = { pwd: hash, email, name };

  console.log(newUser);
  try {
    User.findOne({ email })
      .then((user) => {
        if (!user) {
          ///==================save
          User.create(newUser).then((user) => {
            res.json({
              status: 201,
              success: true,
              dbid: user._id,
            });
          });
        } else {
          console.log("user already foumd");
          res.json({ status: 201 });
        }
      })
      .catch((err) =>
        res.json({
          status: 400,
          success: false,
          error: err,
        })
      );
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, error: err.message });
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
router.post("/login", async (req, res) => {
  try {
    const { email, pwd } = req.body;
    console.log(email);
    User.findOne({ email })
      .then((user) => {
        bcrypt.compare(pwd, user.pwd).then((isMatch) => {
          if (!isMatch) {
            console.log("Invalid Password");
            res.json({ success: false, msg: "invalid password" });
          } else {
            let onLineUser = {
              id: user._id,
              name: user.name,
              email: user.email,
            };
            req.session.user = onLineUser;
            console.log(req.session.user);
            res.json({
              status: 200,
              success: true,
              data: user,
              msg: "Login successfully",
            });
          }
        });
      })
      .catch((err) => {
        console.log(err);
        res.json({ success: false, msg: "Email not found" });
      });
  } catch (e) {
    console.log(e);
    res.json({ success: false, msg: "Database connection error" });
  }
});
//==============================================================log out
router.post("/logout", (req, res) => {
  // req.session
  //   .destroy()
  //   .then((sess) => {
  //     res.clearCookie("session-id");
  //     res.json({
  //       status: 200,
  //       msg: "logout success",
  //     });
  //   })
  //   .catch((err) => {
  //     res.json({
  //       status: 400,
  //       msg: "logout failed",
  //     });
  //   });

  req.session.destroy((err) => {
    //delete session data from store, using sessionID in cookie
    if (err) throw err;
    res.clearCookie("session-id"); // clears cookie containing expired sessionID
    //res.send("Logged out successfully");
    res.json({
      status: 200,
      msg: "logout success",
    });
  });
});
module.exports = router;
