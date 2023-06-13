import React, { useContext, useEffect } from 'react';
import { Badge, Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Store } from '../Store';

export const Navigation: React.FC = () => {
  const {state: {mode, cart}, 
  dispatch,
  } = useContext(Store)

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', mode)
  }, [mode])

  const switchModeHandler = () => {
    dispatch({ type: 'SWITCH_MODE' })
  }
  return (
    <>
    <div className="nav">
      <Navbar className='navbar-nav nav-fill w-100 navbar-flex'>
        <Container>
          <Navbar.Brand>LOGO O DAY</Navbar.Brand>
          <Nav>
          <Button variant={mode} onClick={switchModeHandler}>
               <i
                 className={mode === 'light' ? 'fa fa-sun' : 'fa fa-moon'}
               ></i>
          </Button>
            <Link to="/cart" className='nav-link'>
              Cart
               {cart.cartItems.length > 0 && (
                 <Badge pill bg="danger">
                   {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                 </Badge>
               )}
            </Link>
            <Link to="/" className='nav-link'>Sign In</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
    </>
  )
}
