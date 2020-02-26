import React from 'react'
import {Navbar, Nav, Form, Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import './styles.css'
 function Header(){
    return (
        <Navbar  bg="light" collapseOnSelect expand="lg" className="menu">
            <Navbar.Brand href="/" className="brand">Gerson Vaz <strong>Fotografia</strong></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><NavLink to="/ensaios" className="d-inline p-2 text-black-50">Ensaios Externos</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/eventos" className="d-inline p-2 text-black-50">Outros eventos</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/wallpapers" className="d-inline p-2 text-black-50">Wallpapers</NavLink></Nav.Link>
                </Nav>
                <Form inline>
                    <Button variant="dark" type='submit'><NavLink to="/admin" className="d-inline p-2 text-white" style={{textDecoration:'none'}}>Administrador</NavLink></Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Header
