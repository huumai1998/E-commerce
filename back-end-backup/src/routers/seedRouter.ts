import express, {Request, Response} from "express"
import asyncHandler from 'express-async-handler';
import { UserModel } from "../models/auth.model";
import { sampleUsers } from "../data";


export const seedRouter = express.Router()
// GET: api/products
seedRouter.get(
  '/',
  asyncHandler(async ( req: Request, res: Response ) => {
    await UserModel.deleteMany({})
    const createdUsers = await UserModel.insertMany(sampleUsers)
    res.send({ createdUsers })
  })
)