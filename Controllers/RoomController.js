import Room from '../Models/RoomModel.js'
import { createError } from '../ultis/createError.js';

export const createRoom = async(req, res, next)=>{
    if(!req.isAdmin){
        return next(createError(500, 'Bạn không có quyền này!'))
    }
    const q = req.params;
    const data = req.body;
    try {
        const newRoom = new Room({
            ...data,
            idCinema: q.idC,
            idMovie: q.id
        })

        await newRoom.save()
        res.status(200).send(newRoom);
    } catch (error) {
        next(error)
    }
}

export const listRoom = async(req, res, next) =>
{
    const q = req.params;

    try {
        const listRoom = await Room.find({
            idCinema: req.idC,
            idMovie: req.id,
            is_order : {$gt : 50}
        })

        res.status(200).send(listRoom)
    } catch (error) {
        next(error)
    }
}