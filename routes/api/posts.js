const express = require("express");
const router = express.Router();
const Post = require("../../models/posts.js");

//====================================================view All posts
router.get("/", async (req, res) => {
  console.log("all posts here");
  try {
    const posts = await Post.find();
    res.json({
      status: 200,
      success: true,
      data: posts,
    });
  } catch (e) {
    res.json({
      status: 404,
      success: false,
      error: e.message,
    });
  }
});

//==================================================== view single post
router.get("/:id", async (req, res) => {
  console.log("view single post");
  try {
    const post = await Post.findById(req.params.id);
    res.json({
      status: 200,
      success: true,
      data: post,
    });
  } catch (error) {
    res.json({
      status: 404,
      success: false,
      error: error.message,
    });
  }
});

//==================================================== Create  post
router.post("/", async (req, res) => {
  console.log("add new post");
  try {
    const newobj = await Post.create(req.body);
    res.json({
      status: 200,
      success: true,
      dbid: newobj._id,
    });
  } catch (error) {
    res.json({
      status: 404,
      success: false,
      error: error.message,
    });
  }
});
//==================================================== delete single post
router.delete("/:id", async (req, res) => {
  console.log("delete post");
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({
      status: 200,
      succeess: true,
      msg: "post deleted successfully",
    });
  } catch (error) {
    res.json({
      status: 404,
      succeess: false,
      error: error.message,
    });
  }
});
//==================================================== Edit single post
router.put("/:id", async (req, res) => {
  console.log("edit post");
  try {
    await Post.findByIdAndUpdate(req.params.id, req.body);
    res.json({
      status: 200,
      succeess: true,
      dbid: post._id,
    });
  } catch (error) {
    res.json({
      status: 404,
      success: false,
      error: error.message,
    });
  }
});
module.exports = router;
