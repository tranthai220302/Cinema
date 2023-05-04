import express from 'express'
import { verifyjson } from '../middleware/jwt.js';
import { createCinema, deleteCinema, listCinema } from '../Controllers/CinemaController.js';

const routeCinema = express.Router()

routeCinema.post('/createCinema/:id',verifyjson, createCinema);
routeCinema.get('/:id', listCinema);
routeCinema.delete('/deleteCinema/:id', deleteCinema)


export default routeCinema;
