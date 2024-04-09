import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Creats a router instance
const router = express.Router();

// Route for handling POST requests to register a new user
router.post("/", async (req, res) => {
  // Destructuring user input from request body
  const { name, email, password } = req.body;

  try {
    // Checks if user already exists in the database
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // If user doesn't exist, creates a new user instance with provided details
    user = new User({
      name,
      email,
      password,
    });

    // Generating salt and hashing the password using bcrypt
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Saving the user to the database
    await user.save();

    // Creating a JSON Web Token (JWT) payload with user ID
    const payload = {
      user: {
        id: user.id,
      },
    };

    // Signing the JWT token with a secret key and setting expiration time
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    // Handling server errors
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Exports route
export default router;
