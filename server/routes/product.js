import express from "express";
import Product from "../models/Product.js";

// Creats a router instance
const router = express.Router();

// Route for handling GET requests to fetch all products
router.get("/products", async (req, res) => {
  // Fetch all products from the database
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Export router
export default router;
