import React, { useState } from "react";
import { Row, Col, ListGroup, Button } from "react-bootstrap";

const ViewPost = ({ editPost }) => {
  return (
    <div>
      <Row>
        <Col>
          <Row>
            <Col className="col-headers">Title</Col>
            <Col>{editPost?.title}</Col>
          </Row>
          <Row>
            <Col className="col-headers">Description</Col>
            <Col>{editPost?.description}</Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ViewPost;
