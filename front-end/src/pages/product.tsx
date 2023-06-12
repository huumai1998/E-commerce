import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { useGetProductDetailsBySlugQuery } from '../hooks/productHooks'
import { LoadingBox } from '../components'
import MessageBox from '../components/messageBox'
import { getError } from '../utils'
import { ApiError } from '../types/apiError'
import { Badge, Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import EyeView from '../components/eyeViews'

export const Product: React.FC = () => {
  const params = useParams()
  const { name } = params

  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsBySlugQuery(name!)


  return (
    isLoading ? (
      <LoadingBox /> )
      :
      error ? (
        <MessageBox variant='danger'>{getError(error as ApiError)}</MessageBox>
      )
      : !product ? (
        <MessageBox variant='danger'>Product Not Found</MessageBox>
      )
      : (
    <div>
      <Container className='mt-3 max-height'>
      <Row>
           <Col md={6}>
             <img
               className="large img-large"
               src={product.image}
               alt={product.name}
             ></img>
           </Col>
           <Col md={3}>
             <ListGroup variant="flush">
               <ListGroup.Item>
                 <Helmet>
                   <title>{product.name}</title>
                 </Helmet>
                 <h1>{product.name}</h1>
               </ListGroup.Item>
               <ListGroup.Item>
                 <EyeView
                   numReviews={product.numReviews}
                 ></EyeView>
               </ListGroup.Item>
               <ListGroup.Item>Price : ${product.price}</ListGroup.Item>
               <ListGroup.Item>
                 Description:
                 <p>{product.description}</p>
               </ListGroup.Item>

               <ListGroup.Item>
                     <Row>
                       <Col>Status:</Col>
                       <Col>
                         {product.countInStock > 0 ? (
                           <Badge bg="success">In Stock</Badge>
                         ) : (
                           <Badge bg="danger">Unavailable</Badge>
                         )}
                       </Col>
                     </Row>
                   </ListGroup.Item>

                   {product.countInStock > 0 && (
                     <ListGroup.Item>
                       <div className="d-grid">
                         <Button variant="primary">
                           Add to Cart
                         </Button>
                       </div>
                     </ListGroup.Item>
                   )}
             </ListGroup>
           </Col>
         </Row>
      </Container>
    </div>
    )
  )
}
