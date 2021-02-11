import React, { useState, useRef } from "react";
import { ListGroup, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const LoginUser = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const msgRef = useRef();
  const history = useHistory();

  const dispatch = useDispatch();

  const handleSubmit = () => {
    let user = { email, pwd };

    axios
      .post("http://localhost:5000/api/users/login", user)
      .then((res) => {
        console.log(res.data.data);
        localStorage.setItem('userData', JSON.stringify(res.data.data))
        // if (res.data.success) {
        //   dispatch({
        //     type: "DO_LOGIN",
        //     payload: res.data.data,
        //   });
        //   history.push("/");
        // } else {
        //   msgRef.current.innerHTML = res.data.msg;
        //   msgRef.current.classList.remove("d-none");
        // }
      })
      .catch((err) => {
        console.log(err);
        // if (err.data.code === "error") {
        //   msgRef.current.classList.remove("d-none");
        // }
      });
  };

  return (
    <div>
      <h1>Login user</h1>
      <Row>
        <Col lg={3} md={2} sm={1} xs={1}></Col>
        <Col lg={6} md={8} sm={10} xs={10}>
          <h5 ref={msgRef} className="d-none"></h5>
          <ListGroup>
            <ListGroup.Item variant="primary" className="col-headers">
              Existing User Login
            </ListGroup.Item>
            <ListGroup.Item variant="light">
              <Row>
                <Col className="col-headers">Email</Col>
                <Col>
                  <input
                    type="text"
                    email="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
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
                  />
                </Col>
              </Row>
              {/* //=================================================== */}

              <Row>
                <Col>
                  <Button variant="primary" size="sm" onClick={handleSubmit}>
                    Log In
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

export default LoginUser;
