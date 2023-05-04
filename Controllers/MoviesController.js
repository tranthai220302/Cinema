import Movie from '../Models/MovieModels.js'
import { createError } from "../ultis/createError.js";
import Showtime from '../Models/ShowtimesModel.js'
export const createMovie = async (req, res, next)=>
{
    try {
        if(!req.isAdmin)
        {
            return next(createError(500, 'Bạn không có quyền này!'))
        }
        const data = req.body;
        const newMovie = new Movie({
            ...data,
            idCinema: req.params.id
        })
        
        await newMovie.save()
        res.status(200).send("Tại phim thành công!")
    } catch (error) {
        next(error)
    }
}

export const deleteMovie = async (req, res, next)=>
{
    const idCinema = req.params.id;
    if(!req.isAdmin){
        return next(createError(500, 'Bạn không có quyền này!'))
    }
    try {
        const deleteMovie = await Movie.findByIdAndDelete(idCinema);
        res.status(200).send('Xoá phim thành công!')
    } catch (error) {
        next(error)
    }
}

export const getlistMovie = async (req, res, next)=>
{
    const q = req.query;
    const regex = new RegExp(q.name, "i");
    const filter = {
        ...(q.name && {name: {$regex: regex}}),
        idCinema: req.params.id
    }
    try {
        const listMovie = await Movie.find(filter);
        res.status(200).send(listMovie)
    } catch (error) {
        next(error)
    }
    
}

export const getMovie = async (req, res, next) =>{
    const q = req.params;
    const Movi = await Movie.find({
        _id: q.id
    })
    res.status(200).send(Movi)
}