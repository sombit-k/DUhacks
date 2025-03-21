import nodemailer from "nodemailer";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Medicine from "./models/inventory.model.js";
import User from "./models/user.js";

dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch(error => console.error("MongoDB Connection Error:", error));

// Nodemailer Setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  port: 465,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// Function to Check Medicine Stock and Send Email Reminders
const checkAndSendReminders = async () => {
  try {
    console.log("🔍 Checking inventory for zero-stock medicines...");

    // Find medicines where quantity is 0
    const outOfStockMedicines = await Medicine.find({ quantity: 0 });

    console.log(` Found ${outOfStockMedicines.length} out-of-stock medicines.`);

    if (outOfStockMedicines.length > 0) {
      for (const medicine of outOfStockMedicines) {
        console.log(`📦 Checking user for medicine: ${medicine.name}`);

        // Find user by `userUuid`
        const user = await User.findOne({ uuid: medicine.userUuid });

        if (!user) {
          console.error(` User not found for medicine: ${medicine.name}`);
          continue;
        }

        console.log(`📧 Sending email to: ${user.email}`);

        // Send Email Alert
        let emailInfo = await transporter.sendMail({
          from: process.env.EMAIL,
          to: user.email,
          subject: "⚠️ Urgent: Medicine Out of Stock Alert",
          text: `Dear ${user.username},\n\nYour medicine "${medicine.name}" is out of stock. Please restock it as soon as possible.\n\nBest regards,\nYour Inventory Team`,
        });

        console.log(`✅ Email Sent to ${user.email}:`, emailInfo.messageId);
      }
    } else {
      console.log(" No out-of-stock medicines found.");
    }
  } catch (error) {
    console.error("Error Checking Inventory:", error);
  }
};

// Run the function every 5 seconds
// setInterval(checkAndSendReminders, 5000);

export default checkAndSendReminders;
