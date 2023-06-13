import { UserModel } from "../models/auth.model";
import { generateToken } from "../utils";
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import { Request, Response } from 'express'

export const login = asyncHandler(async (req: Request, res: Response) => {
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
    res.status(401).json({ message: 'Invalid email or password' })
})