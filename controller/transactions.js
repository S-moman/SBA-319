import Transactions from "../models/transactions.js";

async function getTransactions(req, res) {
  try {
    const results = await Transactions.find({});
    res.json(results).status(200);
  } catch (e) {
    console.log(e);
    res.json({ error: e.message }).status(400);
  }
}

async function createTransaction(req, res) {
  try {
    const newDoc = req.body;
    const newTran = await Transactions.create(newDoc);
    res.json(newTran).status(201);
  } catch (e) {
    console.log(e);
    res.json({ error: "Invalid input" }).status(400);
  }
}

async function getTranById(req, res) {
  try {
    const results = await Transactions.findById(req.params.findById);
    res.json(results).status(200);
  } catch (e) {
    console.log(e);
    res.json({ error: e.message }).status(400);
  }
}

async function deleteTranById(req, res) {
  try {
    const results = await Transactions.findByIdAndDelete(req.params.id);
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

export default {
  getTransactions,
  getTranById,
  createTransaction,
  deleteTranById,
};
