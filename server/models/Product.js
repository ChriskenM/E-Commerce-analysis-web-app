import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

// Loads currency type to support monetary values
const Schema = mongoose.Schema;
loadType(mongoose);

// Defines the schema for product data, including price, expense, and transactions fields.
const ProductSchema = new Schema(
  {
    //  Getter functions are defined for currency fields to convert stored values to dollars when retrieving data.
    price: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    expense: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    transactions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction",
      },
    ],
  },
  // Configure schema options to include timestamps and getters when converting to JSON
  { timestamps: true, toJSON: { getters: true } }
);

// Define Product model based on ProductSchema
const Product = mongoose.model("Product", ProductSchema);

// Exports product model
export default Product;
