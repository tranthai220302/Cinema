import mongoose, {Schema} from "mongoose";

const ShowtimeSchema = new Schema({
    idMovie: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    },
    time : {
        type: String,
        require: true,        
    },

    price : {
        type: String,
        require: true
    }
}, {
    timestamps: true,
})

export default mongoose.model('Showtime', ShowtimeSchema)