import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Header = () => {
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();

  const Logout = () => {
    dispatch({ type: "DO_LOGOUT" });
    axios
      .post("http://localhost:5000/api/users/logout")
      .then((res) => console.log(res));
  };

  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand as={Link} to="/">
        My Site
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">
          All Users
        </Nav.Link>
        <Nav.Link as={Link} to="/AddUser">
          Add New User
        </Nav.Link>
        <Nav.Link as={Link} to="/posts">
          Posts
        </Nav.Link>
        {isLogin ? (
          <Button onClick={Logout}>Logout</Button>
        ) : (
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
        )}
      </Nav>
    </Navbar>
  );
};

export default Header;
