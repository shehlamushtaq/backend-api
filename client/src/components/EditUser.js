import React, { useState } from "react";
import { ListGroup, Row, Col, Button } from "react-bootstrap";

const EditUser = ({ userObj, EditUserData }) => {
  const [name, setName] = useState(userObj.name);
  const [email, setEmail] = useState(userObj.email);
  const [pwd, setPwd] = useState(userObj.pwd);

  const handleSubmit = () => {
    let user = { name, email, pwd };
    EditUserData(user);
  };
  return (
    <Row>
      <Col>
        <Row>
          <Col className="col-headers">Name</Col>
          <Col>
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </Col>
        </Row>
        <Row>
          <Col className="col-headers">Email</Col>
          <Col>
            <input
              type="text"
              email="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Col>
        </Row>
        <Row>
          <Col className="col-headers">Password</Col>
          <Col>
            <input
              type="password"
              name="pwd"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
            />
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-2">
            <Button variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default EditUser;
