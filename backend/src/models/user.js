import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    email:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    // image:{
    //     type:String,
    //     default: "https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg",
    //     set :(v)=> v === ""? "https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg":v,
    // }
});

const User = mongoose.model('User', userSchema);
export default User;