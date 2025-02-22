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
        return done(null, false, { message: 'User not found' });
      }

      // Check if password is correct
      const isPasswordCorrect = await user.comparePassword(password);
      if (!isPasswordCorrect) {
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
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(401).json({ message: `Authentication failed: ${err.message}` });
    }
    if (!user) {
      return res.status(400).json({ message: info.message || "Invalid credentials" });
    }

    req.login(user, (err) => {
      if (err) {
        return res.status(500).json({ message: `Login failed: ${err.message}` });
      }
      return res.json({ message: "Login successful" });
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

    res.json({ message: "User registered successfully" });
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

// const check=(req,res)=>{
//     res.status(200).json(req.user)
// } edit this. 

export { login, register, logout };
