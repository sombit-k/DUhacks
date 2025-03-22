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
import Medicine from "./models/inventory.model.js";
import nodemailer from "nodemailer";

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

app.use("/api/user", userRouter);
app.use("/api/inventory", inventoryRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

// Nodemailer Setup
const transporter = nodemailer.createTransport({
  service: "gmail",
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

    console.log(`Found ${outOfStockMedicines.length} out-of-stock medicines.`);

    if (outOfStockMedicines.length > 0) {
      for (const medicine of outOfStockMedicines) {
        console.log(`📦 Checking user for medicine: ${medicine.name}`);

        // Find user by `userUuid`
        const user = await User.findOne({ uuid: medicine.userUuid });

        if (!user) {
          console.error(`User not found for medicine: ${medicine.name}, userUuid: ${medicine.userUuid}`);
          continue;
        }

        // Check if 24 hours have passed since the last email was sent
        const now = new Date();
        const lastEmailSent = medicine.lastEmailSent;
        const hoursSinceLastEmail = lastEmailSent ? (now - lastEmailSent) / (1000 * 60 * 60) : 24;

        if (hoursSinceLastEmail >= 24) {
          console.log(`📧 Sending email to: ${user.email}`);

          // Send Email Alert
          let emailInfo = await transporter.sendMail({
            from: process.env.EMAIL,
            to: user.email,
            subject: "⚠️ Urgent: Medicine Out of Stock Alert",
            text: `Dear ${user.username},\n\nYour medicine "${medicine.name}" is out of stock. Please restock it as soon as possible.\n\nBest regards,\nYour Inventory Team`,
          });

          console.log(`✅ Email Sent to ${user.email}:`, emailInfo.messageId);

          // Update the lastEmailSent field
          medicine.lastEmailSent = now;
          await medicine.save();
        } else {
          console.log(`⏳ Email already sent within the last 24 hours for medicine: ${medicine.name}`);
        }
      }
    } else {
      console.log("No out-of-stock medicines found.");
    }
  } catch (error) {
    console.error("Error Checking Inventory:", error);
  }
};

// Check inventory every 10 seconds
setInterval(checkAndSendReminders, 10000);