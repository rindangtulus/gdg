import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function Navigation() {
  return (
    <div>
      <Navbar expand="lg" className="navbar-header">
        <Container fluid>
          <Navbar.Brand href="#">
            <Row>
              <Col>
                <img
                  height={60}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx1ifvMfrD9VzaphHBYLhM6wUV-YHR0g28Ow&s"
                  style={{ display: "flex" }}
                ></img>
              </Col>
              <Col style={{ marginTop: "15px" }}>
                <p>Google Developer Group</p>
              </Col>
            </Row>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#home">
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link href="#about-me">
                <Link to="/aboutme">About me</Link>
              </Nav.Link>
              <NavDropdown title="Social media" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">
                  <a href="url">Instagram</a>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action3">
                  <a href="url">Facebook </a>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default Navigation;
