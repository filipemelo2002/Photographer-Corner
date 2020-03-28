import React, { useEffect, useState } from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Header() {
  const [name, setName] = useState("Administrador");
  const [buttonType, setButtonType] = useState("outline-dark");
  function handleButtonClick() {
    if (localStorage.getItem("adminId")) {
      localStorage.clear();
      buttonStyles();
    }
  }
  function buttonStyles() {
    if (localStorage.getItem("adminId")) {
      setName("Sair");
      setButtonType("outline-danger");
    } else {
      setName("Administrador");
      setButtonType("outline-dark");
    }
  }
  useEffect(() => {
    buttonStyles();
  }, []);
  return (
    <Navbar bg="light" collapseOnSelect expand="lg" className="menu">
      <Navbar.Brand href="/" className="brand">
        Gerson Vaz <strong>Fotografia</strong>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link to="/ensaios" as={Link}>
            Ensaios Externos
          </Nav.Link>
          <Nav.Link to="/eventos" as={Link}>
            Outros Eventos
          </Nav.Link>
          <Nav.Link to="/wallpapers" as={Link}>
            Wallpapers
          </Nav.Link>
        </Nav>
        <Form inline>
          <Button
            variant={buttonType}
            as={Link}
            to="/admin"
            onClick={() => handleButtonClick()}
          >
            {name}
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
