import React, { useEffect, useReducer } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Product } from '../types/Product';
import axios from 'axios';
import { getError } from '../utils';
import { LoadingBox } from '../components';
import MessageBox from '../components/messageBox';
import { ApiError } from '../types/apiError';

type State = {
  products: Product[],
  loading: boolean,
  error: string
}

type Action =
  | { type: 'FETCH_REQUEST' }
  | {
      type: 'FETCH_SUCCESS'
      payload: Product[]
    }
  | { type: 'FETCH_FAIL'; payload: string }


const initialState: State = {
  products: [],
  loading: true,
  error: '',
}


const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true }
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false }
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export const MainPages = () => {
  const [{ loading, error, products }, dispatch] = useReducer<
  React.Reducer<State, Action>
>(reducer, initialState)
  useEffect(() => {
 const fetchData = async () => {
   dispatch({ type: 'FETCH_REQUEST' })
   try {
     const result = await axios.get('/api/products')
     dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
   } catch (err) {
     dispatch({ type: 'FETCH_FAIL', payload: getError(err as ApiError) })
   }
 }
 fetchData()
}, [])

return loading ? (
  <LoadingBox />
) : error ? (
  <MessageBox variant="danger">{error}</MessageBox>
) : (
  <div className='d-flex flex-column vh-100'>
    <Container className='mt-3'>
      <Row>
          {products.map((product) => (
          <Col key={product.slug} sm={6} md={4} lg={3}>
            <Link to={'/product/' + product.slug}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
                width={250}
                height={250}
              />
              <h2>{product.name}</h2>
              <p>${product.price}</p>
            </Link>
          </Col>
       ))}
      </Row>
    </Container>
  </div>
)
}
