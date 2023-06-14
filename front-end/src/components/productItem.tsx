import { Button, Card } from "react-bootstrap"
import { Product } from "../types/Product"
import { Link } from "react-router-dom"
import EyeView from "./eyeViews"
import { useContext } from "react";
import { Store } from "../reducers/Store";
import { CartItem } from "../types/cart";
import { convertProductToCartItem } from "../utils";
import { toast } from "react-toastify";

function ProductItem({ product }: { product: Product }) {
    const {state, dispatch} = useContext(Store);

    const {
        cart: { cartItems },
      } = state


    const addToCartHandler = async (item: CartItem) => {
    const existItem = cartItems.find((x) => x._id === product._id)
    const quantity = existItem ? existItem.quantity + 1 : 1
    if (product.countInStock < quantity) {
        toast(`Sorry. ${product.name} is out of stock`)
        return
    }

    dispatch({
        type: 'CART_ADD_ITEM',
        payload: { ...item, quantity },
      })
      toast(`${product.name} added to the cart`)
    }

    return (
      <Card>
        <Link to={`/product/${product.slug}`}>
          <img
            src={product.image}
            className="card-img-top"
            alt={product.name}
            width={250}
            height={250}
          />
        </Link>
        <Card.Body>
          <Link to={`/product/${product.slug}`}>
            <Card.Title>{product.name}</Card.Title>
          </Link>
          <EyeView numReviews={product.numReviews} />
          <Card.Text>${product.price}</Card.Text>
          <Card.Text>{product.countInStock} items left</Card.Text>
          {product.countInStock === 0 ? (
            <Button variant="light" disabled>
              Out of stock
            </Button>
          ) : (
            <Button onClick={() => addToCartHandler(convertProductToCartItem(product))}>Add to cart</Button>
          )}
        </Card.Body>
      </Card>
    )
  }
  export default ProductItem