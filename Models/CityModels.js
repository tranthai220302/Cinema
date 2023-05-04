import mongoose, {Schema} from "mongoose";

const CitySchema = new Schema({
    name : {
        type: String,
        require: true,
        unique: true,
    },
    img : {
        type: String,
        require: true,
    },
    numberCinema : {
        type: Number,
        require: true,
        default: 0
    },
    description : {
        type: String,
        require: false
    }
}, {
    timestamps: true
})

export default mongoose.model('City', CitySchema)