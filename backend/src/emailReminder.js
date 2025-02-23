import nodemailer from "nodemailer";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Inventory from "./models/inventory.js"; // Import Inventory model
import User from "./models/user.js"; // Import User model

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("MongoDB Connection Error:", error));

// Nodemailer Setup
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});

// Function to Check Medicine Quantity and Send Email Reminders
const checkAndSendReminders = async () => {
    try {
        const lowStockMedicines = await Inventory.find({ quantity: { $lt: 20 } });

        if (lowStockMedicines.length > 0) {
            for (const medicine of lowStockMedicines) {
                const userid = medicine.userId; // Get user's id from inventory data
                
                const user = await User.findById(userid);// Get user from user database 

                const userEmail = user.email; // Get user's email from user data

                // Send Email Reminder
                let emailInfo = await transporter.sendMail({
                    from: process.env.EMAIL,
                    to: userEmail,
                    subject: "Low Medicine Stock Alert",
                    text: `Reminder: The stock for ${medicine.name} is low (Remaining: ${medicine.quantity}). Please reorder.`,
                });
                console.log(`Email Sent to ${userEmail}:`, emailInfo.messageId);
            }
        } else {
            console.log("No low-stock medicines found.");
        }
    } catch (error) {
        console.error("Error Checking Inventory:", error);
    }
};

// Run the function every 10 minutes
setInterval(() => {
    console.log("Checking inventory for low-stock medicines...");
    checkAndSendReminders();
}, 10 * 60 * 1000); // 10 minutes (10 * 60 * 1000 ms)

export default checkAndSendReminders;
