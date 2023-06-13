import { Product } from "./types/Product"
import { ApiError } from "./types/apiError"
import { CartItem } from "./types/cart"

export const getError = (error: ApiError) => {
    return error.response && error.response.data.message
      ? error.response.data.message
      : error.message
  }



  export const convertProductToCartItem = (product: Product): CartItem => {
    const cartItem: CartItem = {
      _id: product._id,
      name: product.name,
      slug: product.slug,
      image: product.image,
      price: product.price,
      countInStock: product.countInStock,
      quantity: 1,
    }
    return cartItem
  }