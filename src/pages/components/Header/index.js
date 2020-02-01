import React from 'react'
import {Navbar, Nav, Form, Button} from 'react-bootstrap'

import './styles.css'
export default function Header(){
    return (
        <Navbar sticky="top"  bg="light" collapseOnSelect expand="lg" className="menu">
            <Navbar.Brand href="#" className="brand"><h1>Gerson Vaz <strong>Fotografia</strong></h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#ensaios">Ensaios Externos</Nav.Link>
                    <Nav.Link href="#eventos">Eventos</Nav.Link>
                    <Nav.Link href="#wallpapers">Wallpapers</Nav.Link>
                    <Nav.Link href="#casamento">Fotografia de Casamento</Nav.Link>
                    <Nav.Link href="#outros">Outros pacotes</Nav.Link>
                </Nav>
                <Form inline>
                    <Button variant="outline-primary">Agende agora</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}