// import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Footer, Navigation } from './components';
import { Cart, MainPages, Product } from './pages';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
    <>
      <Router>
        <Navigation />
        <ToastContainer position="top-center" limit={1}/>
        <Container className='mt-3 max-height'>
          <Routes>
            <>
              <Route path="/" element={<MainPages />} />
              <Route path="product/:slug" element={<Product />}/>
              <Route path="/cart" element={<Cart />} />
              {/* <Route path="*" element={<Navigate to="/" />} /> */}
            </>
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
    </>
  )
}

export default App
