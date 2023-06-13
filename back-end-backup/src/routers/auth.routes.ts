
import express from 'express';
import { login } from '../controllers/auth.controllers';

export const userRouter = express.Router()

userRouter.post('/signin', login)
