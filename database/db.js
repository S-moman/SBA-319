import mongoose from "mongoose";

await mongoose.connect(process.env.ATLAS_URI);

console.log("Connected to Database");

