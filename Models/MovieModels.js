import mongoose, {Schema} from "mongoose";

const MovieSchema = new Schema({
    idCinema : {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true,
    },

    time : {
        type: String,
        require: true,
    },

    performer: {
        type: [String],
        required: true
    },
    director : {
        type: [String],
        required: true,
    },
    img : {
        type: [String],
        required: true,
    },
    description : {
        type: String,
        require: false
    }
}, {
    timestamps: true
})

export default mongoose.model('Movie', MovieSchema)