import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
  item_name: { type: String, required: true },
  price: { type: Number, required: true },
  item_sku: { type: String },
  discription: { type: String },
  inStock: { type: Boolean, default: true },
  quantity: { type: Number, required: true },
  updated: {type: Date, default: Date.now }
});

const Inventory = mongoose.model("inventory", inventorySchema, "inventory");

export default Inventory;
