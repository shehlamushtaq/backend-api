import React, { useState } from "react";
import { Button, Row, Col, ListGroup } from "react-bootstrap";

const AddPost = ({ showNewPostWind, setshowNewPostWind, AddPostData }) => {
  const [title, setTitle] = useState("");
  const [descrip, setDesccrip] = useState("");
  const handleSubmit = () => {
    const obj = {
      title,
      description: descrip,
    };
    AddPostData(obj);
    setTitle("");
    setDesccrip("");
    setshowNewPostWind(false);
  };
  return (
    <div className={showNewPostWind ? "" : "d-none"}>
      {/* <h1>AddPost</h1> */}
      <div className="text-center my-2">
        <Button onClick={() => setshowNewPostWind(false)}>
          Existing Posts
        </Button>
      </div>
      <Row>
        <Col lg={3} md={2} sm={1} xs={1}></Col>
        <Col lg={6} md={8} sm={10} xs={10}>
          <ListGroup>
            <ListGroup.Item variant="primary" className="col-headers">
              New Post
            </ListGroup.Item>
            <ListGroup.Item variant="light">
              <Row>
                <Col className="col-headers">Title</Col>
                <Col>
                  <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                  />
                </Col>
              </Row>
              <Row>
                <Col className="col-headers">Description</Col>
                <Col>
                  <textarea
                    type="text"
                    onChange={(e) => setDesccrip(e.target.value)}
                    value={descrip}
                  />
                </Col>
              </Row>

              {/* //=================================================== */}
              {/* <Row>
                  <Col className="col-headers">Desc</Col>
                  <Col>
                    <FileBase64
                      multiple={false}
                      onDone={({base64})=>setimg(base64)}
                    />                </Col>
                </Row> */}
              {/* //========================================== */}
              <Row>
                <Col>
                  <Button variant="primary" size="sm" onClick={handleSubmit}>
                    Add Post
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col lg={3} md={2} sm={1} xs={1}></Col>
      </Row>
    </div>
  );
};

export default AddPost;
