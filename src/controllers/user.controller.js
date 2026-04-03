const User = require("../models/user.model");

// GET ALL USERS (Admin)
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    next(err);
  }
};

// UPDATE USER STATUS / ROLE
exports.updateUser = async (req, res, next) => {
  try {
    const { role, status } = req.body;

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role, status },
      { new: true }
    );

    res.json(user);
  } catch (err) {
    next(err);
  }
};