import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'

import './styles.css'
export default function Header(){
    return (
        <Navbar sticky="top"  bg="light" collapseOnSelect expand="lg" className="menu">
            <Navbar.Brand href="/" className="brand">Gerson Vaz <strong>Fotografia</strong></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/ensaios">Ensaios Externos</Nav.Link>
                    <Nav.Link href="/eventos">Outros Eventos</Nav.Link>
                    <Nav.Link href="/wallpapers">Wallpapers</Nav.Link>
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>
    )
}