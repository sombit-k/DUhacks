import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const authenticate = asyncHandler(async (req, res, next) => {
  let token;

  // Ensure the token is correctly retrieved from the cookies
  if (req.cookies && req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (token) {
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decode.userId).select("-password");
      next();
    } catch (error) {
      res.status(401).json({ message: "Invalid token, not authorised" });
    }
  } else {
    res.status(401).json({ message: "No token, authorization denied" });
  }
});


