import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./nav.css";
import logo from "../../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faArrowLeft,
  faPhone,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Navbars() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="fluid">
          <Navbar.Brand href="#home">
            {" "}
            <img src={logo} alt="logo" />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home" className="active">
                Home
              </Nav.Link>
              <NavDropdown title="pages" id="basic-nav-dropdown">
                <NavDropdown.Item href="/about us">About Us</NavDropdown.Item>
                <NavDropdown.Item href="/team"> Our Team </NavDropdown.Item>
                <NavDropdown.Item href="/faqs">FAQ's</NavDropdown.Item>
                <NavDropdown.Item href="/booking"> Booking</NavDropdown.Item>
                <NavDropdown.Item href="/login and register">
                  Login / Register
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Servises" id="basic-nav-dropdown">
                <NavDropdown.Item href="/services">Servises</NavDropdown.Item>
                <NavDropdown.Item href="/services details">
                  Servises Details
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Blog" id="basic-nav-dropdown">
                <Link to="/blog">
                  <NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
                </Link>
                <NavDropdown.Item href="/blog-details">
                  Blog Details
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <Link to="/contact">Contact Us</Link>
             </Nav.Link>
              <Nav.Link>
                <FontAwesomeIcon icon={faSearch} />
              </Nav.Link>
              <Nav.Link>
               <p style={{display:"flex", justifyContent:"center", alignItems:"center"}}> <FontAwesomeIcon icon={faPhone} className="phone" />{" "}
                (+01)999888777</p>
              </Nav.Link>
              <Nav.Link>
                <button>
                  
                  Contac Us
                   <FontAwesomeIcon className="arr" icon={faAngleRight} />
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default Navbars;
