import passport from 'passport';
import User from "../models/user.js";
import crypto from 'crypto';
import { Strategy as LocalStrategy } from 'passport-local';

// Passport local strategy setup for login
passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      // Find user by username
      const user = await User.findOne({ username });

      if (!user) {
        console.log("User not found");
        return done(null, false, { message: 'User not found' });
      }

      // Check if password is correct
      const isPasswordCorrect = await user.comparePassword(password);
      if (!isPasswordCorrect) {
        console.log("Invalid password");
        return done(null, false, { message: 'Invalid password' });
      }

      // If valid, generate token and save it to the user model
      let token = crypto.randomBytes(20).toString("hex");
      user.token = token;
      await user.save();

      return done(null, user, { message: 'Authentication successful' });
    } catch (e) {
      return done(e);
    }
  }
));


// Middleware to authenticate using passport-local
const login = (req, res, next) => {
  passport.authenticate('local', async (err, user, info) => {
    if (err) {
      return res.status(401).json({ message: `Authentication failed: ${err.message}` });
    }
    if (!user) {
      return res.status(400).json({ message: info.message || "Invalid credentials" });
    }

    req.login(user, async (err) => {
      if (err) {
        return res.status(500).json({ message: `Login failed: ${err.message}` });
      }

      // Generate a token here (e.g., JWT or your custom token)
      let token = crypto.randomBytes(20).toString("hex");
      user.token = token;
      await user.save();

      // Return the user details including the new token
      const { username, email, uuid, image } = user;
      return res.json({
        message: "Login successful",
        token: token,
        user: { username, email, uuid, image }, // Include user details
      });
    });
  })(req, res, next);
};

// Register user
const register = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({ email, username });
    await User.register(newUser, password);

    // Generate a token after successful registration
    let token = crypto.randomBytes(20).toString("hex");
    newUser.token = token;
    await newUser.save();

    // Return the user details including the new token
    const { username: newUsername, email: newEmail, uuid, image } = newUser;
    return res.json({
      message: "User registered successfully",
      token: token,
      user: { username: newUsername, email: newEmail, uuid, image }, // Include user details
    });
  } catch (e) {
    res.status(500).json({ message: `Something went wrong: ${e.message}` });
  }
};

// Logout user
const logout = (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: `Logout failed: ${err.message}` });
    }
    res.json({ message: "Logged out successfully" });
  });
};


const check = (req, res) => {
  // Check if user is logged in
  if (!req.user) {
    return res.status(401).json({ message: 'No user logged in' });
  }

  // Return the logged-in user's information, including image
  const { username, email, uuid, token, image } = req.user;  // Assuming these fields are in the user schema
  res.json({
    user: { username, email, uuid, token, image },  // Add image here
  });
};


//Update user

const updateUser = async (req, res) => {
  try {
    // Ensure the user is authenticated
    if (!req.user) {
      return res.status(401).json({ message: 'You must be logged in to update your profile.' });
    }

    const { password, image } = req.body;

    // Update the password if provided
    if (password) {
      // Using passport-local-mongoose's `setPassword` method to hash and set a new password
      await req.user.setPassword(password);
      await req.user.save();  // Save the user with the new password
    }

    // Update the image if provided
    if (image) {
      req.user.image = image; // Update the image field
      await req.user.save();  // Save the user with the new image
    }

    // Return updated user information (excluding password)
    const { username, email, uuid, image: updatedImage } = req.user;
    return res.json({
      message: 'User updated successfully',
      user: { username, email, uuid, image: updatedImage },
    });

  } catch (e) {
    console.error(e);
    res.status(500).json({ message: `Error updating user: ${e.message}` });
  }
};


export { login, register, logout, check , updateUser};
