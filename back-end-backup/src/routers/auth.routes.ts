
import express from 'express';
import { login, register } from '../controllers/auth.controllers';

export const userRouter = express.Router()

// POST: api/users/signin
userRouter.post('/signin', login)
userRouter.post('/register', register)
