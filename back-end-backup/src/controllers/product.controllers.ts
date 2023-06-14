import { ProductModel } from "../models/product"
import asyncHandler from 'express-async-handler';

// GET: api/products
export const product = asyncHandler(async (req, res) => {
    const products = await ProductModel.find()
    res.json(products)
})