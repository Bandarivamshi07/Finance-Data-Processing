const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth.middleware");
const authorize = require("../middlewares/role.middleware");

const {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} = require("../controllers/record.controller");

// CREATE (Admin only)
router.post("/", auth, authorize("admin"), createRecord);

// READ (All roles)
router.get(
  "/",
  auth,
  authorize("admin", "analyst", "viewer"),
  getRecords
);

// UPDATE (Admin only)
router.put("/:id", auth, authorize("admin"), updateRecord);

// DELETE (Admin only)
router.delete("/:id", auth, authorize("admin"), deleteRecord);

module.exports = router;