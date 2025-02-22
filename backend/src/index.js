import mongoose from "mongoose";
import express from "express";
import passport from 'passport';
import LocalStrategy from 'passport-local';
import User from './models/user.js';
import session from 'express-session';
import dotenv from 'dotenv';
import userRouter from './routes/user.js';
import cookieParser from "cookie-parser"
import cors from "cors"

dotenv.config()
const PORT=process.env.PORT || 5000;

const app = express();
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true

}))

export const connectDb=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Successfully connected`,conn.connection.host)
        startServer();
    } catch(err){
        console.log("Error encountered while connecting",err)
    }
}

const startServer = () => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

connectDb();
 

const sessionOptions = {
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
};


app.use(session(sessionOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

// Configure Passport Local Strategy
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Use routes for user-related functionality
app.use("/", userRouter);


app.get("/demouser", async(req,res)=>{
    let fakeuser = new User({
        email:"asj@gmail.com",
        username: "delta-student"
    });

    let registredUser= await User.register(fakeuser,"autinicate");
    res.send(registredUser);
})
// app.get("/", (req, res) => {
//     res.send("Hi, I am root");
// });
