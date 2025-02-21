import mongoose from "mongoose";

const equipmentSchema=new mongoose.Schema(
    {
        creatorId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true,
        },
        name:{
            type:String,
            required:true,
        },
        image:{
            type:String,
            default:"",//add a stock photo here
        },
        expiring:{
            type:Date,
            required:true,
        },
        quantity:{
            type:Number,
            required:true, 
        },
        description:{
            type:String,
            required:true,
        },
    },
    {timestamps: true}//the timestamps will automatically create the fields for when the equipment was created and updated
);

const Equipment=mongoose.model("Equipment",equipmentSchema)

export default Equipment;