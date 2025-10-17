// Lets get the app started, lets import express & call it
import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import morgan from "morgan";
const app = express();
const port = process.env.PORT || 4444;

await mongoose.connect(process.env.ATLAS_URI);
console.log("Connected to Database");

import customerRoutes from "./routes/customers.js";

app.use(morgan("common"));
app.use(express.json())
app.use("/customers", customerRoutes);

app.get("/", (req, res) => {
  res
    .send(
      "We are back live with another application coming at you, stay tuned!!!"
    )
    .status(200);
});

app.use((err, _req, res, next) => {
  res.status(500).send("Looks like we make a mistake, give us a minute...");
});

app.listen(port, (req, res) => {
  console.log(`Listening on port: ${port}...`);
});
