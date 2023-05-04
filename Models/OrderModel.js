import mongoose, {Schema} from "mongoose";

const OrderSchema = new Schema({
    idMovie: {
        type: String
    },
    idShowtime: {
        type: String,
    },
    idRoom: {
        type: String
    },
    isPay: {
        type: Boolean,
        default: false
    },
    idUser: {
        type: String,
    }
}, {
    timestamps: true
})

export default mongoose.model('Oder', OrderSchema)