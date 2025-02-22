import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

import { v4 as uuidv4 } from 'uuid';

const { Schema } = mongoose;

const userSchema = new Schema({
    email:{
        type:String,
        require:true
    },
    uuid: {  
        type: String,
        default: uuidv4,  
        unique: true      
    }
});

userSchema.plugin(passportLocalMongoose);
const User = mongoose.model('User', userSchema);
export default User;