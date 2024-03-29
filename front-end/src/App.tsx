// import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Footer, Navigation } from './components';
import { Cart, MainPages, PaymentPage, Product, Register, ShippingAddress, SigninPages } from './pages';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Container } from "react-bootstrap";
import { ProtectedRoute } from "./components/protectedRoute";
import { PlaceOrderPage } from "./pages/placeOrderPage";

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
              <Route path="/signin" element={<SigninPages />} />
              <Route path="/signup" element={<Register />} />
              <Route path="" element={<ProtectedRoute />}>
                  <Route path="/shipping" element={<ShippingAddress />} />
                  <Route path="/payment" element={<PaymentPage />} />
                  <Route path="/placeorder" element={<PlaceOrderPage />} />
              </Route>
              <Route path="*" element={<Navigate to="/" />} />
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
