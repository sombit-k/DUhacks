import passport from 'passport';
import User from "../models/user.js";
import { Strategy as LocalStrategy } from 'passport-local';
import { generateToken } from "../lib/util.js";

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

      return done(null, user, { message: 'Authentication successful' });
    } catch (e) {
      return done(e);
    }
  }
));

// Middleware to authenticate using passport-local
const login = (req, res, next) => {
  passport.authenticate("local", async (err, user, info) => {
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

      // Generate JWT and set it in cookie
      const token = generateToken(user.uuid, res);

      // Return user details (excluding token)
      const { username, email, uuid, image } = user;
      return res.json({
        message: "Login successful",
        token: token,
        user: { username, email, uuid, image },
      });
    });
  })(req, res, next);
};

// Register user
const register = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user instance
    const newUser = new User({ email, username });

    // Register the user with password hashing
    await User.register(newUser, password); // Hashes and saves password

    // Generate JWT and set it in a secure cookie
    generateToken(newUser.uuid, res);

    // Return user details (excluding token)
    const { username: newUsername, email: newEmail, uuid, image } = newUser;
    return res.json({
      message: "User registered successfully",
      user: { username: newUsername, email: newEmail, uuid, image },
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
    res.clearCookie("jwt"); // Clear the JWT cookie
    res.json({ message: "Logged out successfully" });
  });
};

const check = (req, res) => {
  // Check if user is logged in
  if (!req.user) {
    return res.status(401).json({ message: 'No user logged in' });
  }

  // Return the logged-in user's information, including image
  const { username, email, uuid, image } = req.user;  // Assuming these fields are in the user schema
  res.json({
    user: { username, email, uuid, image },  // Add image here
  });
};

// Update user
const updateUser = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "You must be logged in to update your profile." });
    }

    const { password, image } = req.body;
    let updatedFields = {};

    if (password) {
      await req.user.setPassword(password);
      updatedFields.password = "updated";
    }

    if (image) {
      req.user.image = image;
      updatedFields.image = image;
    }

    if (Object.keys(updatedFields).length > 0) {
      await req.user.save();
    } else {
      return res.status(400).json({ message: "No changes provided." });
    }

    const { username, email, uuid, image: updatedImage } = req.user;
    console.log("Updated user details:", { username, email, uuid, image: updatedImage }); // Print new details

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
