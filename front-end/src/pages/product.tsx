import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetProductDetailsBySlugQuery } from '../hooks/productHooks'
import { LoadingBox } from '../components'
import MessageBox from '../components/messageBox'
import { convertProductToCartItem, getError } from '../utils'
import { ApiError } from '../types/apiError'
import { Badge, Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import EyeView from '../components/eyeViews'
import { Store } from '../Store'
import { toast } from 'react-toastify'

export const Product: React.FC = () => {
  const params = useParams()
  const { slug } = params

  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsBySlugQuery(slug!)

  const { state, dispatch } = useContext(Store)
  const { cart } = state

  const navigate = useNavigate()

  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product!._id)
    const quantity = existItem ? existItem.quantity + 1 : 1
    if (product!.countInStock < quantity) {
      toast.warn('Sorry. Product is out of stock')
      return
    }
    dispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...convertProductToCartItem(product!), quantity },
    })
    toast.success(`${product!.name} added to the cart`)
    // navigate('/')
  }

  
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
                         <Button onClick={addToCartHandler} variant="primary">
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
