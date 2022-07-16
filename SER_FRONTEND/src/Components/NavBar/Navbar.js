import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logo from "./logo.jpeg";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="/" className="brand">
            <img src={logo} className="logo" alt="logo"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              < NavLink to="/" className="nav">
                {" "}
                Home
              </ NavLink>
              <NavLink to="/research"  className="nav">
                Research
              </NavLink>
              < NavLink to="/projects" className="nav">
                Projects
              </ NavLink>
              < NavLink to="/events" className="nav">
                Events
              </ NavLink>
              < NavLink to="/people" className="nav">
                People
              </ NavLink>
              < NavLink to="/collabration" className="nav">
                Collabrations
              </ NavLink>
              <NavDropdown  title="More" id="navbarScrollingDropdown">
                <Container className='navbar'>
                < NavLink to="/gallery" className="nav">
                Gallery
                </ NavLink>
                 
                < NavLink to="/blogs" className="nav">
                Blogs
              </ NavLink>
              
              </Container>
                
              </NavDropdown>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
