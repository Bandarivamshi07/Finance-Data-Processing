const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth.middleware");
const authorize = require("../middlewares/role.middleware");

const {
  totalIncome,
  totalExpense,
  netBalance,
} = require("../controllers/dashboard.controller");

// Analyst + Admin access
router.get(
  "/income",
  auth,
  authorize("admin", "analyst"),
  totalIncome
);

router.get(
  "/expense",
  auth,
  authorize("admin", "analyst"),
  totalExpense
);

router.get(
  "/balance",
  auth,
  authorize("admin", "analyst"),
  netBalance
);

module.exports = router;