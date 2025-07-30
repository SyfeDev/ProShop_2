import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import {FaShoppingCart , FaUser} from 'react-icons/fa'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <hader>
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
        <Container>
            <Navbar.Brand href="/">
            <img src={logo} alt="ProShop Logo"  />
            ProShop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="/cart"><FaShoppingCart  /> Cart</Nav.Link>
                    <Nav.Link href="/login"><FaUser /> Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>

        </Navbar>
    </hader>
  )
}

export default Header 