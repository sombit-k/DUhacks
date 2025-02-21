import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv"


dotenv.config()
const PORT=process.env.PORT

const app = express();

export const connectDb=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Successfully connected`,conn.connection.host)
    } catch(err){
        console.log("Error encountered while connecting",err)
    }
}

app.listen(PORT,()=>{
    connectDb()
    console.log(`Server is running on port ${PORT}`)
})
 