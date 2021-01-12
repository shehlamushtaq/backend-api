import React from "react";
import { ListGroup, Row, Col, Button } from "react-bootstrap";
const AddUser = () => {
  return (
    <div>
      <h1>Add user</h1>
      <Row>
        <Col lg={3} md={2} sm={1} xs={1}></Col>
        <Col lg={6} md={8} sm={10} xs={10}>
          <ListGroup>
            <ListGroup.Item variant="primary" className="col-headers">
              New User information
            </ListGroup.Item>
            <ListGroup.Item variant="light">
              <Row>
                <Col className="col-headers">Name</Col>
                <Col>
                  <input type="text" name='name' />
                </Col>
              </Row>
              <Row>
                <Col className="col-headers">Email</Col>
                <Col>
                  <input type="text" email='email'/>
                </Col>
              </Row>
              <Row>
                <Col className="col-headers">Password</Col>
                <Col>
                  <input type="password" />
                </Col>
              </Row>
              {/* //========================================== */}
              <Row>
                <Col>
                <Button variant="primary" size='sm'>Add User</Button>
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

export default AddUser;
