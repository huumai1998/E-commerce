import { UserModel } from "../models/auth.model";
import { generateToken } from "../utils";
import express, {Request, Response} from 'express';
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';

export const login = asyncHandler(async (req: Request, res: Response) => {
    const user = await UserModel.findOne({username: req.body.username});
    if (user) {
        if(bcrypt.compareSync(req.body.password, user.password)) {
            res.send({
                _id: user._id, 
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user),
            })
        }
    }
})


module.exports = {login}