import React, { useState } from "react";
import { Row, Col, ListGroup, Button } from "react-bootstrap";

const EditPost = ({ editPost, EditPostData, setShowEdit }) => {
  console.log(editPost);
  const [title, setTitle] = useState(editPost?.title);
  const [descrip, setDesccrip] = useState(editPost?.description);
  console.log(title);
  const handleSubmit = () => {
    const newobj = {
      ...editPost,
      title,
      description: descrip,
    };
    EditPostData(newobj);
    setShowEdit(false);
  };
  return (
    <div>
      {/* <h1> Edit Post</h1> */}
      <Row>
        <Col>
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
          <Row>
            <Col>
              <Button variant="primary" size="sm" onClick={handleSubmit}>
                Save Post Changes
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default EditPost;
