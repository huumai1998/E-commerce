import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

export const Nav: React.FC = () => {
  return (
    <>
    <div className="nav">
      <Navbar className='navbar-nav nav-fill w-100 navbar-flex'>
        <Container>
          <Navbar.Brand>LOGO O DAY</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
    </>
  )
}
