import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { sampleProducts } from '../data'

export const Main: React.FC = () => {
  return (
    <>
    <div className='main-page'>
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
    </div>
    </>
  )
}
