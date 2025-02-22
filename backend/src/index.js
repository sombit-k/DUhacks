import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import { data } from "./init/data.js";
import medicinesRoutes from "./routes/medicinesRoutes.js";

dotenv.config()
const PORT = process.env.PORT

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

export const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Successfully connected`, conn.connection.host)
    } catch (err) {
        console.log("Error encountered while connecting", err)
    }
}

// app.get("/", (req, res) => {
//     res.send("API is running");
// })
//TO save sample data to the database

// const initDB = async () => {
//     await Inventory.deleteMany();
//     await Inventory.insertMany(data);
//     console.log("Sample data was saved");

// }

app.use("/", medicinesRoutes);


app.listen(PORT, () => {
    connectDb()
    // .then(() => {
    //     initDB();
    // })
    console.log(`Server is running on port ${PORT}`)
})
