import express from "express";
import KPI from "../models/KPI.js";

// Creats a router instance
const router = express.Router();

// Route for handles GET requests to fetch all KPIs
router.get("/kpis", async (req, res) => {
  try {
    const kpis = await KPI.find();
    res.status(200).json(kpis);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Exports the router
export default router;
