import mongoose from "mongoose";
// import customer from "../models/customers.js";
// import item from '../models/inventory.js'

const transactionSchema = new mongoose.Schema({
  customer_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  itemCount: { type: Number, required: true },
  items: [
    { item_id: { type: mongoose.Schema.Types.ObjectId, required: true } },
  ],
  total: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const Transactions = mongoose.model("transactions", transactionSchema);

export default Transactions;
