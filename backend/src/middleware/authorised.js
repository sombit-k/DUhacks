import jwt from "jsonwebtoken";
import User from "../models/user.js";

const isAuthenticated = async (req, res, next) => {
    const token = req.cookies.jwt || req.header("Authorization")?.replace("Bearer ", "");

    // console.log("🔹 Extracted Token:", token);

    if (!token) {
        return res.status(401).json({ message: "You must be logged in to access this resource." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // console.log("🔹 Decoded Token:", decoded);

        // Find user using uuid instead of ObjectId (_id)
        const user = await User.findOne({ uuid: decoded.userId }).select("-password");

        if (!user) {
            return res.status(401).json({ message: "Invalid token. Please log in again." });
        }

        req.user = user;
        next();
    } catch (e) {
        console.error("🔹 JWT Verification Error:", e.message);
        return res.status(403).json({ message: "Invalid or expired token." });
    }
};

export default isAuthenticated;
