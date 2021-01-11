import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ListGroup, Row, Col, Button } from "react-bootstrap";

const AllUsers = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        setUser(res);
      });
  }, []);

  return (
    <div>
      <h3>all users</h3>

      <Row>
        <Col lg={3} md={2} sm={1} xs={1}></Col>
        <Col lg={6} md={8} sm={10} xs={10}>
          <ListGroup>
            <ListGroup.Item variant="primary">
              <Row className="col-headers">
                <Col>Name</Col>
                <Col>Email</Col>
                <Col>Actions</Col>
              </Row>
            </ListGroup.Item>

            {user.map((item, ind) => (
              <ListGroup.Item key={ind} variant="light">
                <Row>
                  <Col>{item.name}</Col>
                  <Col>{item.email}</Col>
                  <Col>
                    <Button
                      variant="info"
                      size="sm"
                      as={Link}
                      to={"/SingleUser/" + item.id}
                    >
                      View
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col lg={3} md={2} sm={1} xs={1}></Col>
      </Row>
    </div>
  );
};

export default AllUsers;
