const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth.middleware");
const authorize = require("../middlewares/role.middleware");

const {
  getUsers,
  updateUser,
} = require("../controllers/user.controller");

// Only admin can manage users
router.get("/", auth, authorize("admin"), getUsers);
router.put("/:id", auth, authorize("admin"), updateUser);

module.exports = router;