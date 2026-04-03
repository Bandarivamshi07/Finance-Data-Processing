const mongoose = require("mongoose");
const { ROLES, STATUS } = require("../utils/constants");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

   role: {
  type: String,
  enum: Object.values(ROLES),
  default: ROLES.VIEWER,
},

status: {
  type: String,
  enum: Object.values(STATUS),
  default: STATUS.ACTIVE,
},
  },
  { timestamps: true }
);

userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};


module.exports = mongoose.model("User", userSchema);