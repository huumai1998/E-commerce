import express from "express"
import { getSlugProduct, product } from "../controllers/product.controllers";


export const productRouter = express.Router()
// GET: api/products
productRouter.get('/', product)

// GET: api/name/tshirt
productRouter.get('/:slug', getSlugProduct)