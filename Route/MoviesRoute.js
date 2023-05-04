import express from 'express'
import { createMovie, deleteMovie, getMovie, getlistMovie } from '../Controllers/MoviesController.js';
import { verifyjson } from '../middleware/jwt.js';
const routeMovie = express.Router()

routeMovie.get('/movies/:id', getlistMovie);
routeMovie.post('/createMovie/:id',verifyjson, createMovie);
routeMovie.delete('/deleteMovie/:id',verifyjson, deleteMovie)
routeMovie.get('/movie/:id', getMovie)


export default routeMovie;
