import React, { useContext, useEffect } from 'react';
import { Badge, Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Store } from '../Store';

export const Navigation: React.FC = () => {
  const {state: {mode, cart, userInfo}, 
  dispatch,
  } = useContext(Store)

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', mode)
  }, [mode])

  const switchModeHandler = () => {
    dispatch({ type: 'SWITCH_MODE' })
  }

  const signoutHandler = () => {
    dispatch({ type: 'USER_SIGNOUT' })
    localStorage.removeItem('userInfo')
    localStorage.removeItem('cartItems')
    localStorage.removeItem('shippingAddress')
    localStorage.removeItem('paymentMethod')
    window.location.href = '/signin'
  }
  return (
    <>
    <div className="nav">
      <Navbar className='navbar-nav nav-fill w-100 navbar-flex'>
        <Container>
          <Link to='/' className='nav-link'><Navbar.Brand>LOGO O DAY</Navbar.Brand></Link>
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
            {userInfo ? (
                  <NavDropdown
                    className="header-link"
                    title={`Hello, ${userInfo.name}`}
                  >
                    <Link to="/profile">
                      <NavDropdown.Item>User Profile</NavDropdown.Item>
                    </Link>
                    <Link to="/orderhistory">
                      <NavDropdown.Item>Order History</NavDropdown.Item>
                    </Link>
                    <NavDropdown.Divider />
                    <Link
                      className="dropdown-item"
                      to="#signout"
                      onClick={signoutHandler}
                    >
                      {' '}
                      Sign Out{' '}
                    </Link>
                  </NavDropdown>
                ) : (
                    <Link to="/signin" className='nav-link'>
                      Sign In
                    </Link>
                )}
          </Nav>
        </Container>
      </Navbar>
    </div>
    </>
  )
}
