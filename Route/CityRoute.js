import express from 'express'
import { verifyjson } from '../middleware/jwt.js';
import { createCity, listCity } from '../Controllers/CityController.js';
const routeCity = express.Router()

routeCity.post('/createCity',verifyjson, createCity);
routeCity.get('/', listCity)


export default routeCity;
