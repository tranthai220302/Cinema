import express from 'express'
import { verifyjson } from '../middleware/jwt.js';
import { createOrder } from '../Controllers/OrderController.js';
const routeOder = express.Router()

routeOder.post('/createOrder/:idM/:idR/:idS',verifyjson, createOrder);



export default routeOder;
