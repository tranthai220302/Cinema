import UserModel from "../Models/UserModel.js";
import bcrypt from 'bcrypt'
import { createError } from "../ultis/createError.js";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
export const register = async(req, res, next)=>
{
    const data = req.body;
    const hassPassword = bcrypt.hashSync(data.password, 5)
    try {
      const newUser = new UserModel({
        ...data,
        password : hassPassword
      })  
      await newUser.save()
      return res.status(200).send("Đăng ký thành công!")
    } catch (error) {
        next(error)
    }
}

export const login = async(req, res, next)=>
{
    try {
        const data = req.body;

        const userLogin = await UserModel.findOne({
            username: data.username
        })
    
        if(!userLogin){
            return next(createError(500, 'Tài khoản không chính xác!'))
        }
        const isPass = bcrypt.compareSync(data.password, userLogin.password)
        if(!isPass){
            return next(createError(500, 'Mật khẩu không chính xác !'))
        }
        
        const token = jwt.sign({
            id: userLogin._id,
            isAdmin : userLogin.isAdmin
        }, process.env.KEY_JWT)
        res.cookie('accessToken', token, {
            httpOnly: true,
        }).status(200).send('Đăng nhập thành công!')
    } catch (error) {
        next(error)
    }
}

export const logout = (req, res, next) =>
{
    try {
        res.clearCookie( 'accessToken', {
            sameSite: "none",
            secure: true,
        }).status(200).send("Đăng xuất thành công!")
    } catch (error) {
        next(error)
    }
}