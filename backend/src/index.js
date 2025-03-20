import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import inventoryRoutes from "./routes/inventoryRoutes.js";
import passport from "passport";
import LocalStrategy from "passport-local";
import User from "./models/user.js";
import session from "express-session";
import userRouter from "./routes/user.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser"; // Import body-parser

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Middleware to parse JSON request bodies with increased size limit
app.use(bodyParser.json({ limit: "50mb" })); // Increase the limit as needed
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true })); // Increase the limit as needed

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Successfully connected`, conn.connection.host);
  } catch (err) {
    console.log("Error encountered while connecting", err);
  }
};

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

connectDb();

const sessionOptions = {
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
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
app.use("/api/user", userRouter);
app.use("/api/inventory", inventoryRoutes); // Ensure the inventory routes are used
