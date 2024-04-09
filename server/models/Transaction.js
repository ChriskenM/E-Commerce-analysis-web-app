import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

// Load currency type to support monetary values
const Schema = mongoose.Schema;
loadType(mongoose);

// Defines schema for transaction data
const TransactionSchema = new Schema(
  {
    // getter function is defined for the amount field to convert the stored value to dollars when retrieving data.
    buyer: {
      type: String,
      required: true,
    },
    amount: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    productIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  // Configure schema options to include timestamps and getters when converting to JSON
  { timestamps: true, toJSON: { getters: true } }
);

// Defines Transaction model based on TransactionSchema
const Transaction = mongoose.model("Transaction", TransactionSchema);

// Exports transation model
export default Transaction;
