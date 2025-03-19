import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

import { v4 as uuidv4 } from 'uuid';

const { Schema } = mongoose;

const userSchema = new Schema({
    uuid: {  
        type: String,
        default: uuidv4,  
        unique: true      
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    image:{
        type:String,
        default: "https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg",
        set :(v)=> v === ""? "https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg":v,
    }
});

userSchema.plugin(passportLocalMongoose);
const User = mongoose.model('User', userSchema);
export default User;