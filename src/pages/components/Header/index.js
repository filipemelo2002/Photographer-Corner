import React, { useEffect, useContext } from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";
import HeaderContext from "../../context";
export default function Header({
  btnText = "Administrador",
  btnStyles = "outline-dark"
}) {
  const { buttonStyles } = useContext(HeaderContext);
  function handleButtonClick() {
    if (localStorage.getItem("adminId")) {
      localStorage.clear();
      buttonStyles();
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
            variant={btnStyles}
            as={Link}
            to="/admin"
            onClick={() => handleButtonClick()}
          >
            {btnText}
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
