import mongoose, {Schema} from "mongoose";

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        require: true
    },
    password:{
        type: String,
        require: true,
        unique: true,
    },
    email : {
        type: String,
        require: true,
        unique: true,
    },
    img : {
        type: String,
        require: false,
    },
    address: {
        type: String,
        require: false,
    },
    phone : {
        type: String,
        require: false,
    }, 
    firstname: {
        type: String,
        require: false,
    },
    lastname : {
        type: String,
        require: false
    },
    isAdmin : {
        type: Boolean,
        default: false
    }
},
    {timestamps: true},
)

export default mongoose.model('User', UserSchema)