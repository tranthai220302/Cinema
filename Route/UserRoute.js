import express from 'express'
import { logout, login, register } from '../Controllers/UserController.js'
const routeUser = express.Router()

routeUser.post('/register', register)
routeUser.post('/login', login),
routeUser.post('/logout', logout)


export default routeUser;
