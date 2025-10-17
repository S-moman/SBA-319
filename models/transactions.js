import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  customer_id: {type: mongoose.Schema.Types.ObjectId},
  itemCount: { type: Number, required: true },
  items: [
    {
      name: { typre: String, required: true },
      price: { type: Number, required: true },
    },
  ],
  total: { type: Number, required: true },
  date: { type: Number, required: true },
});

const Transactions = mongoose.model("transactions", transactionSchema);

export default Transactions;