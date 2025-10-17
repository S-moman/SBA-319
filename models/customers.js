import mongoose from "mongoose";


const customerSchema = new mongoose.Schema({
//   account_id: { type: Number, required: true },
  username: { type: String, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  birthdate: { type: Date, required: true },
  email: { type: String, required: true },
  active: { type: Boolean },
//   transactions: [{type: mongoose.Schema.Types.ObjectId} ],
});

const Customers = mongoose.model("customers", customerSchema);

export default Customers;
