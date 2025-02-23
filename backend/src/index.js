import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import inventoryRoutes from "./routes/inventoryRoutes.js";
import userRouter from "./routes/user.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT || 3001; // Ensure the port number is set to 3001

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Successfully connected`, conn.connection.host);
  } catch (err) {
    console.log("Error encountered while connecting", err);
  }
};
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());

// Configure Passport Local Strategy
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Use routes for user-related functionality
app.use("/api/user", userRouter);
app.use("/api/inventory", inventoryRoutes);

app.listen(PORT, () => {
  connectDb();
  console.log(`Server is running on port ${PORT}`);
});
