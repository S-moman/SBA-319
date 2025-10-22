import Inventory from "../models/inventory.js";
import item from "../seeders/inventory.js"

async function getInventory(req, res) {
  try {
    const results = await Inventory.find({});
    console.log(results);
    res.json(results).status(200);
  } catch (e) {
    console.log(e);
    res.json({ error: e.message }).status(400);
  }
}

async function createInventory(req, res) {
  try {
    const newDoc = req.body;
    const newItem = await Inventory.create(newDoc);
    res.json(newItem).status(201);
  } catch (e) {
    console.log(e);
    res.json({ error: "Invalid input" }).status(400);
  }
}

async function getInventoryById(req, res) {
  try {
    const results = await Inventory.findById(req.params.id);
    res.json(results).status(200);
    console.log(results);
  } catch (e) {
    console.log(e);
    res.json({ error: e.message }).status(400);
  }
}
async function deleteInventoryById(req, res) {
  try {
    const results = await Inventory.findByIdAndDelete(req.params.id);
    if (!results) {
      res.json({ error: "Not Found" }).status(404);
    } else {
      res.json(results).status(204);
    }
    console.log(results);
    res.json(results).status(200);
  } catch (e) {
    console.log(e);
    res.json({ error: e.message }).status(400);
  }
}

async function updateInventoryInfo(req, res) {
  try {
    const results = await Inventory.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.json(results).status(200);
  } catch (e) {
    console.log(e);
    res.json({ error: e.message }).status(400);
  }
}

async function getSeedData(req, res) {
  try {
    const resultDelete = await Inventory.deleteMany({});
    const resultInsert = await Inventory.insertMany(item);
    let results = await Inventory.find({});
    console.log(results);
    res.json(results).status(200);
  } catch (e) {
    console.log(e);
    res.json({ error: e.message }).status(400);
  }
}

export default {
  getInventory,
  createInventory,
  getInventoryById,
  deleteInventoryById,
  updateInventoryInfo,
  getSeedData,
};
