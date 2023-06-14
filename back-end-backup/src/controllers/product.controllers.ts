import { ProductModel } from "../models/product"
import asyncHandler from 'express-async-handler';

// GET: api/products
export const product = asyncHandler(async (req, res) => {
    const products = await ProductModel.find()
    res.json(products)
})


// GET: api/slug/:slug
export const getSlugProduct = asyncHandler(async (req, res) => {
    const product = await ProductModel.findOne({ slug: req.params.slug })
    if (product) {
      res.json(product)
    } else {
      res.status(404).json({message: 'Product Not Found'})
    }
})