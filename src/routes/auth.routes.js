const express = require("express");
const router = express.Router();

const {
  register,
  login,
} = require("../controllers/auth.controller");

// PUBLIC ROUTES
router.post("/register", register);
router.post("/login", login);

module.exports = router;