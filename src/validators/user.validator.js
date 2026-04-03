const { body } = require("express-validator");

exports.registerValidator = [
  body("name")
    .notEmpty()
    .withMessage("Name is required"),

  body("email")
    .isEmail()
    .withMessage("Valid email required"),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),

  body("role")
    .optional()
    .isIn(["admin", "analyst", "viewer"])
    .withMessage("Invalid role"),
];

exports.updateUserValidator = [
  body("role")
    .optional()
    .isIn(["admin", "analyst", "viewer"])
    .withMessage("Invalid role"),

  body("status")
    .optional()
    .isIn(["active", "inactive"])
    .withMessage("Invalid status"),
];