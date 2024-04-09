import express from "express";
import Transaction from "../models/Transaction.js";

// Creats a router instance
const router = express.Router();

// Route for handling GET requests to fetch transactions
router.get("/transactions", async (req, res) => {
  try {
    // Fetching transactions from the database
    // Sorting transactions by creation date in descending order
    const transactions = await Transaction.find()
      .limit(50)
      .sort({ createdOn: -1 });

    res.status(200).json(transactions);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Exports route
export default router;
