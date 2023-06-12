import React, { useEffect, useReducer } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { getError } from '../utils';
import { LoadingBox } from '../components';
import MessageBox from '../components/messageBox';
import { ApiError } from '../types/apiError';
import ProductItem from '../components/productItem';
import { Helmet } from 'react-helmet-async';
import { useGetProductsQuery } from '../hooks/productHooks';



export const MainPages = () => {
const { data: products, isLoading, error } = useGetProductsQuery()
return isLoading ? (
  <LoadingBox />
) : error ? (
  <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
) : (
  <div className='d-flex flex-column vh-100'>
    <Container className='mt-3'>
      <Row>
        <Helmet>
          <title>Candle Store</title>
        </Helmet>
          {products!.map((product) => (
          <Col key={product.slug} sm={6} md={4} lg={3}>
            <ProductItem product={product}/>
          </Col>
       ))}
      </Row>
    </Container>
  </div>
)
}
