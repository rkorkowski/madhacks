const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    username: String,
    password: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
