import express from 'express'
import { createShowtime, listShowtime } from '../Controllers/ShowtimesController.js';
import { verifyjson } from '../middleware/jwt.js';
const routeShowtime = express.Router()

routeShowtime.post('/createShow/:id',verifyjson, createShowtime);
routeShowtime.get('/:id', listShowtime);


export default routeShowtime;
