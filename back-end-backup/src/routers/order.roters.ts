import express from "express"
import { isAuth } from "../utils"
import { order, payOrder } from "../controllers/order.controllers"

export const orderRouter = express.Router()

orderRouter.post('/', isAuth, order)

orderRouter.put('/:id/pay', isAuth, payOrder)
