import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cookieParser from  'cookie-parser'
import routeUser from './Route/UserRoute.js'
import routeMovie from './Route/MoviesRoute.js'
import routeCity from './Route/CityRoute.js'
import routeCinema from './Route/CinemaRoute.js'
import routeRoom from './Route/RoomRoute.js'
import routeShowtime from './Route/ShowtimesRoute.js'
import routeOder from './Route/OrderRoute.js'

dotenv.config()
const app = express()
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
mongoose.connect(process.env.URL_MONGODB, {
}).then(() =>
{
    console.log("Connect mongodb successful!");
}).catch((err)=>
{
    console.log(err);
})


app.use('/api/auth', routeUser)
app.use('/api/movi', routeMovie)
app.use('/api/city', routeCity)
app.use('/api/cinema', routeCinema)
app.use('/api/room', routeRoom)
app.use('/api/showtime', routeShowtime)
app.use('/api/order', routeOder)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
  
    return res.status(errorStatus).send(errorMessage);
  });
app.listen(8080, ()=> {
    console.log("Server is listening 8080")
})