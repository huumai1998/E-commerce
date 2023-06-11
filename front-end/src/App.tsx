// import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { sampleProducts } from './data'
import { Footer, Navigation } from './components';
import { Col, Container, Row } from 'react-bootstrap';


function App() {

  return (
    <>
    <Router>
      < body>
      <Navigation />
        <div className='d-flex flex-column vh-100'>
          <main>
          <Container className='mt-3'>
            <Row>
              { sampleProducts.map(product => 
                <Col key={product.slug} sm={6} md={4} lg={3}>
                <img src={product.image} width={300} height={300}/>
                <h2>{product.name}</h2>
                <p>${product.price}</p>
            </Col>)
            }
            </Row>
          </Container>
          </main>
        </div>
        <Footer/>
      </body>
    </Router>
    </>
  )
}

export default App
