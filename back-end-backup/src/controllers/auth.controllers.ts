import { User, UserModel } from "../models/auth.model";
import { generateToken } from "../utils";
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import { Request, Response } from 'express'

export const login = asyncHandler(async (req: Request, res: Response) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email });
        if (user) {
            if(bcrypt.compareSync(req.body.password, user.password)) {
                res.send({
                    _id: user._id, 
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    token: generateToken(user),
                })
                return
            } 
        }
        if (!user) 
        {
            res.status(401).json({ message: 'Invalid email!' })
        } 
        else if (!bcrypt.compareSync(req.body.password, user.password)) 
        { 
            res.status(401).json({ message: 'Invalid password!' })
        } 
        else 
        {
            res.status(401).json({ message: 'Invalid email or password' })
        }
    } catch (error) {
        res.status(500).json('Sever error!')
    }
})


export const register = asyncHandler(async (req: Request, res: Response) => {
    try {
        const userExist = await UserModel.findOne({email: req.body.email})

        if (userExist) {
             res.status(400).json({ message: `${userExist.email} is already exist, please try another one!` })
        }

        const user = await UserModel.create({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password),
        } as User)

        res.send({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user)
        })
    } catch (error) {
        res.status(500).json('Error')
    }
})