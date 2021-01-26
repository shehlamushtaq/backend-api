import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();

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
          <Button onClick={() => dispatch({ type: "DO_LOGOUT" })}>
            Logout
          </Button>
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
