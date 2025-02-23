import User from "../models/user.js";
import bcrypt from "bcryptjs";
import asyncHandler from "../middleware/authmiddleware.js";
import generateToken from "../lib/util.js";

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (isPasswordValid) {
      createToken(res, existingUser._id);
      return res.status(200).json({
        _id: existingUser._id,
        username: existingUser.username,
        email: existingUser.email,
      });
      
    } else {
      return res.status(400).json({ message: "Invalid email or password" });
    }
  } else {
    return res.status(400).json({ message: "Invalid email or password" });
  }
});

const register = asyncHandler(async (req, res) => {
  const { email, username, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "Please fill up the form" });
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    // const token = generateToken(newUser._id);

    
    res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      // token, // Include the token in the response
    });
  } catch (error) {
    res.status(400).json({ message: "Invalid user data" });
  }
});

// Logout user
const logout = (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: `Logout failed: ${err.message}` });
    }
    res.json({ message: "Logged out successfully" });
  });
};

const check = asyncHandler(async (req, res) => {
  if (!req.user) res.status(401).json({ message: "User not logged in" });
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
    });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Update user
const updateUser = async (req, res) => {
  try {
    // Ensure the user is authenticated (Handled by isAuthenticated middleware)
    if (!req.user) {
      return res.status(401).json({ message: "You must be logged in to update your profile." });
    }

    const { password, image } = req.body;
    let updatedFields = {}; // Store fields to update

    // Update password if provided
    if (password) {
      await req.user.setPassword(password);
      updatedFields.password = "updated"; // Mark password as updated (but don't return it)
    }

    // Update image if provided
    if (image) {
      req.user.image = image;
      updatedFields.image = image;
    }

    // Save updates only if something changed
    if (Object.keys(updatedFields).length > 0) {
      await req.user.save();
    } else {
      return res.status(400).json({ message: "No changes provided." });
    }

    // Return updated user info (excluding password)
    const { username, email, uuid, image: updatedImage } = req.user;
    return res.json({
      message: "User updated successfully",
      user: { username, email, uuid, image: updatedImage },
    });

  } catch (e) {
    console.error("🔹 Update User Error:", e.message);
    res.status(500).json({ message: `Error updating user: ${e.message}` });
  }
};

export { login, register, logout, check, updateUser };
