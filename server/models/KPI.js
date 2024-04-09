import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

// Loads currency type to support monetary values
const Schema = mongoose.Schema;
loadType(mongoose);

// Defines schema for daily revenue and expenses data
const daySchema = new Schema(
  {
    date: String,
    revenue: {
      type: mongoose.Types.Currency,
      currency: "USD",
      // Getter function to convert stored value to dollars
      get: (v) => v / 100,
    },
    expenses: {
      type: mongoose.Types.Currency,
      currency: "USD",
      // Getter function to convert stored value to dollars
      get: (v) => v / 100,
    },
  },
  // Configure schema options to include getters when converting to JSON
  { toJSON: { getters: true } }
);

// Defines schema for monthly revenue and expenses data
const monthSchema = new Schema(
  {
    month: String,
    revenue: {
      type: mongoose.Types.Currency,
      currency: "USD",
      // Getter function to convert stored value to dollars
      get: (v) => v / 100,
    },
    expenses: {
      type: mongoose.Types.Currency,
      currency: "USD",
      // Getter function to convert stored value to dollars
      get: (v) => v / 100,
    },
    operationalExpenses: {
      type: mongoose.Types.Currency,
      currency: "USD",
      // Getter function to convert stored value to dollars
      get: (v) => v / 100,
    },
    nonOperationalExpenses: {
      type: mongoose.Types.Currency,
      currency: "USD",
      // Getter function to convert stored value to dollars
      get: (v) => v / 100,
    },
  },
  // Configure schema options to include getters when converting to JSON
  { toJSON: { getters: true } }
);

// Defines schema for KPI (Key Performance Indicators) data
const KPISchema = new Schema(
  {
    // Getter function converts stored value to dollars
    totalProfit: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    totalRevenue: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    totalExpenses: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    expensesByCategory: {
      type: Map,
      of: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => v / 100,
      },
    },
    monthlyData: [monthSchema],
    dailyData: [daySchema],
  },
  // Configure schema options to include timestamps and getters when converting to JSON
  { timestamps: true, toJSON: { getters: true } }
);

// Defines KPI model based on KPISchema
const KPI = mongoose.model("KPI", KPISchema);

// Exports KPI model
export default KPI;
