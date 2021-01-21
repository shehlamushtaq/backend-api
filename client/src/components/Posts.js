import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import AddPost from "./post/AddPost";
import AllPosts from "./post/AllPosts";
import axios from "axios";
import EditPost from "./post/EditPost";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [showNewPostWind, setshowNewPostWind] = useState(false);
  const [editPost, setEditPost] = useState({});
  const [showEdit, setShowEdit] = useState(false);
   //=================================================Get all Post Function
   const GetAllPostData = () => {
    axios
      .get("http://localhost:5000/api/posts")
      .then((res) => {
        console.log(" All Posts", res);
        setPosts(res.data.data);
      })
      .catch((err) => console.log(err, "error"));
  };
//===================================================Get All Posts
  useEffect(() => {
    GetAllPostData();
  }, []);

  //=================================================Add Post Function
  const AddPostData = (obj) => {
    axios
      .post("http://localhost:5000/api/posts", obj)
      .then((res) => {
        console.log("post added", res);
        GetAllPostData();
      })
      .catch((err) => console.log(err, "error"));
  };
  //=================================================Edit Post Function
  const EditPostData = (obj) => {
    axios
      .put("http://localhost:5000/api/posts/" + obj._id, obj)
      .then((res) => {
        console.log("post eddited", res);
        GetAllPostData();
      })
      .catch((err) => console.log(err, "error"));
  };
  //=================================================Delete Post Function
  const DeletePostData = (id) => {
    axios
      .delete("http://localhost:5000/api/posts/" + id)
      .then((res) => {
        console.log("post deleted", res);
        GetAllPostData();
      })
      .catch((err) => console.log(err, "error"));
  };
 
  //=======================================================

  const InitEditProcess = (obj) => {
    setEditPost(obj);
    setShowEdit(true);
  };
//==============================================================================
  return (
    <div>
      <div className={"text-center my-2 " + (showNewPostWind ? "d-none" : "")}>
        <Button onClick={() => setshowNewPostWind(true)}>Add New Post</Button>
      </div>

      <AllPosts
        posts={posts}
        showNewPostWind={showNewPostWind}
        InitEditProcess={InitEditProcess}
      />
      <AddPost
        showNewPostWind={showNewPostWind}
        setshowNewPostWind={setshowNewPostWind}
        AddPostData={AddPostData}
      />

      <Modal show={showEdit} onHide={() => setShowEdit(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Post Information</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <EditPost editPost={editPost} />
        </Modal.Body>

        {/* <Modal.Footer>
          <Button variant="primary" onClick={() => {}}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>

      {/* <EditPost editPost={editPost} /> */}
    </div>
  );
};

export default Posts;
