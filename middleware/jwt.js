import jwt from 'jsonwebtoken'
import { createError } from '../ultis/createError.js';
import dotenv from 'dotenv'
dotenv.config()
export const verifyjson = (req, res, next) =>
{
    try {
        const token = req.cookies.accessToken;
        if(!token){
            return next(createError(500, 'Token is not valid'))
        }
        jwt.verify(token, process.env.KEY_JWT, async(err,payload) =>
        {
            if(err){
                return next(err)
            }
            req.id = payload.id;
            req.isAdmin = payload.isAdmin
            next()
        })
    } catch (error) {
        next(error)
    }
}