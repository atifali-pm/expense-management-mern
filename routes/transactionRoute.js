const express = require("express");
const {addTransaction, getAllTransaction} = require("../controllers/transactionController");

const router = express.Router();

// POST | Login
router.post('/add-transaction', addTransaction )

// POST | Register
router.post('/all-transactions', getAllTransaction)

module.exports = router