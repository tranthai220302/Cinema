import mongoose, {Schema} from "mongoose";

const RoomSchema  = new Schema({
    idMovie: {
        type: String,
        require: true,
    },
    idCinema: {
        type : String,
        require: true,
        default: 50
    }, 
    Max_people: {
        type: Number,
        require: true,
        default: 50
    },
    name : {
        type: String,
        require: true
    },
    int_order: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true,
})

export default mongoose.model('Room', RoomSchema)