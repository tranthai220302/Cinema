import MovieModels from '../Models/MovieModels.js';
import Order from '../Models/OrderModel.js';
import RoomModel from '../Models/RoomModel.js';
import ShowtimesModel from '../Models/ShowtimesModel.js';

export const createOrder = async(req, res, next)=>{
    const data = req.params;

    try {
        const newOrder = new Order({
            idMovie: data.idM,
            idRoom: data.idR,
            idShowtime: data.idS,
            idUser: req.id,
            isPay: true,
        })
        await newOrder.save()
        const movie = MovieModels.findById(data.idM);
        const room = RoomModel.findById(data.idR);
        const time = ShowtimesModel.findById(data.idS);

        const pay = {
            'Movie': movie.findOneAndRemove,
            'Room': room.name,
            'Time' :"Ngay :" + time.date + " " + "Time" + time.time,
            'Price': time.Price
        }
        res.status(200).send(pay)
    } catch (error) {
        next(error)
    }
}