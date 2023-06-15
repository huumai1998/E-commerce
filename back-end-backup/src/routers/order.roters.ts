import express from "express"
import { isAuth } from "../utils"
import { order } from "../controllers/order.controllers"

export const orderRouter = express.Router()

orderRouter.post('/', isAuth, order)
