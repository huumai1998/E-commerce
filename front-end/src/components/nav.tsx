import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

export const Navigation: React.FC = () => {
  return (
    <>
    <div className="nav">
      <Navbar className='navbar-nav nav-fill w-100 navbar-flex'>
        <Container>
          <Navbar.Brand>LOGO O DAY</Navbar.Brand>
          <Nav>
            <Link to="/" className='nav-link'>Cart</Link>
            <Link to="/" className='nav-link'>Sign In</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
    </>
  )
}
