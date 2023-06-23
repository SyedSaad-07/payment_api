const express = require("express");
const router = express.Router();

const { Transaction, TransactionDetail } = require("../controller/Payment");

router.post("/newTransaction/",Transaction);
router.get("/transactionDetail",TransactionDetail);
module.exports = router;