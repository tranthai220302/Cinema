import express from 'express'
import { verifyjson } from '../middleware/jwt.js';
import { createRoom } from '../Controllers/RoomController.js';
const routeRoom = express.Router()

routeRoom.post('/createRoom/:idC/:id',verifyjson, createRoom)


export default routeRoom;
