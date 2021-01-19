import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
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
      </Nav>
    </Navbar>
  );
};

export default Header;
