import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Creats a router instance
const router = express.Router();

// Route for handling POST requests to authenticate users
router.post("/", async (req, res) => {
  // Destructuring name and password from the request body
  const { name, password } = req.body;

  try {
    // Finding a user with the given username
    let user = await User.findOne({ name });

    if (!user) {
      return res.status(400).json({ msg: "Invalid Input" });
    }

    // Comparing the provided password with the hashed password stored in the database
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    // Signing the JWT with a secret key and setting an expiration time
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
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Exports router.
export default router;
