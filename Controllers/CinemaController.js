import Cinema from '../Models/CinemaModel.js'
import CityModels from '../Models/CityModels.js';
import Movie from '../Models/MovieModels.js';
import { createError } from '../ultis/createError.js'
export const createCinema = async(req, res, next)=>{
    if(!req.isAdmin){
        return next(createError(500, 'Bạn không có quyền này!'))
    }
    const idCity = req.params.id
    try {
        const data = req.body;
        const newCinema = new Cinema({
            ...data,
            idCity: idCity
        })

        await newCinema.save()
        await CityModels.findByIdAndUpdate(
            idCity,
            { $inc: { numberCinema: 1 } }
        )
        res.status(200).send("Tạo rạp thành công!")
    } catch (error) {
        next(error)
    }
}

export const deleteCinema = async(req, res, next)=>{
    if(req.isAdmin){
        return next(createError(500, 'Bạn không có quyền này!'))
    }
    const id = req.params.id
    try {
        const Cinema_dele = await Cinema.findById(id);
        const id_Cinema = Cinema_dele.idCity;
        await Cinema.findByIdAndDelete(id);
        await Movie.deleteMany({
            idCinema: id
        })
        await CityModels.findByIdAndUpdate(id_Cinema, {
            $inc : {numberCinema : -1}
        })
        res.status(200).send("Xoá thành công")
    } catch (error) {
        next(error)
    }
}

export const listCinema = async(req, res, next)=>{
    const q = req.query;
    const regex = new RegExp(q.name, 'i')
    const regex1 = new RegExp(q.address, 'i')

    const filter = {
        ...(q.name&&{name : {$regex : regex}}),
        ...(q.address && {address: {$regex: regex1}})
    }

    try {
        const listCinema = await Cinema.find(filter)
        res.status(200).send(listCinema)
    } catch (error) {
        next(error)
    }
}