import mongoose, {Schema} from "mongoose";
    
const CinemaSchema = new Schema({
    idCity : {
        type: String,
        require: true,
    },

    address: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },


}, {
    timestamps: true
})

export default mongoose.model('Cinema', CinemaSchema)