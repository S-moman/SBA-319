import Customers from "../models/customers.js";
import customer from "../seeders/customers.js";

async function getCustomerInfo(req, res) {
  try {
    const results = await Customers.find({});
    console.log(results);
    res.json(results).status(200);
  } catch (e) {
    console.log(e);
    res.json({ error: e.message }).status(400);
  }
}

async function createCustomer(req, res) {
  try {
    const newDoc = req.body;
    const newCust = await Customers.create(newDoc);
    res.json(newCust).status(201);
  } catch (e) {
    console.log(e);
    res.json({ error: "Invalid input" }).status(400);
  }
}

async function getCustById(req, res) {
  try {
    const results = await Customers.findById(req.params.id);
    res.json(results).status(200);
    console.log(results);
  } catch (e) {
    console.log(e);
    res.json({ error: e.message }).status(400);
  }
}
async function deleteCustById(req, res) {
  try {
    const results = await Customers.findByIdAndDelete(req.params.id);
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

async function updateCustInfo(req, res) {
  try {
    const results = await Customers.findByIdAndUpdate(
      { _id: req.params.id }, req.body
    );
    res.json(results).status(200);
  } catch (e) {
    console.log(e);
    res.json({ error: e.message }).status(400);
  }
}

async function getSeedData(req, res) {
  try {
    const resultDelete = await Customers.deleteMany({});
    const resultInsert = await Customers.insertMany(customer);
    let results = await Customers.find({});
    console.log(results);
    res.json(results).status(200);
  } catch (e) {
    console.log(e);
    res.json({ error: e.message }).status(400);
  }
}
async function getCustByUserName(req, res) {
  try {
    const results = await Customers.find( { userName: req.params.userName } );
    res.json(results).status(200);
    console.log(results);
  } catch (e) {
    console.log(e);
    res.json({ error: e.message }).status(400);
  }
}

async function deleteCustByUserName(req, res) {
  try {
    const results = await Customers.find( { userName: req.params.username } );
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


async function getCustByEmail(req, res) {
  try {
    const results = await Customers.find({email: req.params.email});
    res.json(results).status(200);
    console.log(results);
  } catch (e) {
    console.log(e);
    res.json({ error: e.message }).status(400);
  }
}

async function deleteCustByEmail(req, res) {
  try {
    const results = await Customers.find( { email: req.params.email } );
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

async function updateCustByEmail(req, res) {
  try {
    const results = await Customers.find(
      { email: req.params.email }, req.body
    );
    res.json(results).status(200);
  } catch (e) {
    console.log(e);
    res.json({ error: e.message }).status(400);
  }
}


export default {
  getCustomerInfo,
  getSeedData,
  createCustomer,
  getCustById,
  deleteCustById,
  updateCustInfo,
  getCustByUserName,
  getCustByEmail,
  deleteCustByEmail,
  deleteCustByUserName,
  updateCustByEmail,
};
