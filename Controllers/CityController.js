import City from '../Models/CityModels.js'
import { createError } from '../ultis/createError.js';

export const createCity = async(req, res, next)=>
{
    try {
        if(!req.isAdmin){
            return next(createError(500, 'Bạn không có quyền này!'))
        }
        const data = req.body;
        const newCity = new City({
            ...data
        })
        await newCity.save()
        res.status(200).send("Tạo city thành công!")
    } catch (error) {
        next(error)
    }
}

export const listCity = async(req, res, next)=>{
    try {
        const q = req.query;
        const regex = new RegExp(q.name, 'i')
        const filter = {
            ...(q.name && {name : {$regex : regex}})
        }
        const listCity = await City.find(filter);
        res.status(200).send(listCity)
    } catch (error) {
        next(error)
    }
}