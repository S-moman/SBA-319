import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  customer_id: { type: mongoose.Types.ObjectId },
  itemCount: { type: Number, required: true },
  items: [
    { item_id: { type: mongoose.Types.ObjectId, _id: false } }
  ],
  total: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const Transactions = mongoose.model("transactions", transactionSchema);

export default Transactions;
