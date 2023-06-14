import express from "express"
import asyncHandler from 'express-async-handler';
import { ProductModel } from "../models/product";
import { product } from "../controllers/product.controllers";


export const productRouter = express.Router()
// GET: api/products
productRouter.get('/', product)

// GET: api/name/tshirt
productRouter.get(
  '/:slug',
  asyncHandler(async (req, res) => {
    const product = await ProductModel.findOne({ slug: req.params.slug })
    if (product) {
      res.json(product)
    } else {
      res.status(404).json({message: 'Product Not Found'})
    }
  })
)