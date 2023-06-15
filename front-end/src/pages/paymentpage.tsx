import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Store } from '../reducers/Store'
import { CheckOutSteps } from '../components'
import { Helmet } from 'react-helmet-async'
import { Button, Form } from 'react-bootstrap'

export const PaymentPage = () => {
    const navigate = useNavigate()
    const { state, dispatch } = useContext(Store)
    const {
      cart: { shippingAddress, paymentMethod },
    } = state
  
    const [paymentMethodName, setPaymentMethod] = useState(
      paymentMethod || 'PayPal'
    )
  
    useEffect(() => {
      if (!shippingAddress.address) {
        navigate('/shipping')
      }
    }, [shippingAddress, navigate])
    const submitHandler = (e: React.SyntheticEvent) => {
      e.preventDefault()
      dispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethodName })
      localStorage.setItem('paymentMethod', paymentMethodName)
      navigate('/placeorder')
    }
  return (
    <div>
    <CheckOutSteps step1 step2 step3></CheckOutSteps>
    <div className="container small-container">
      <Helmet>
        <title>Payment Method</title>
      </Helmet>
      <h1 className="my-3">Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <div className="mb-3">
          <Form.Check
            type="radio"
            id="PayPal"
            label="PayPal"
            value="PayPal"
            checked={paymentMethodName === 'PayPal'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <Form.Check
            type="radio"
            id="Stripe"
            label="Stripe"
            value="Stripe"
            checked={paymentMethodName === 'Stripe'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <Button type="submit">Continue</Button>
        </div>
      </Form>
    </div>
  </div>
  )
}
