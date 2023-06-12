import { Button, Card } from "react-bootstrap"
import { Product } from "../types/Product"
import { Link } from "react-router-dom"
import EyeView from "./eyeViews"

function ProductItem({ product }: { product: Product }) {
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
            <Button>Add to cart</Button>
          )}
        </Card.Body>
      </Card>
    )
  }
  export default ProductItem