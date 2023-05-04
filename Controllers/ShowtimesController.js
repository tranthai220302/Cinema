import Showtime from "../Models/ShowtimesModel.js";
import { createError } from "../ultis/createError.js";

export const createShowtime = async(req, res, next)=>{
    if(!req.isAdmin){
        return next(createError(500, 'Bạn không có quyền này!'))
    }
    const q = req.params;
    const newShowtime = new Showtime({
        ...req.body,
        idMovie: q.id
    })
    try {
        await newShowtime.save();
        res.status(200).send('Tạo showtime thành công!')
    } catch (error) {
        next(error)
    }
}

export const listShowtime = async(req, res, next)=>{
    const q = req.params;
    const data = req.query
    try {
        const filter = {
            ...(q.id&&{idMovie: q.id}),
            ...(data.date && {date : data.date})
        }
        const listShowtime = await Showtime.find(filter)
        res.status(200).send(listShowtime)
    } catch (error) {
        next(error)
    }

}