const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    default: "Shehla",
  },
  email: {
    type: String,
    default: "Shehla@gmail.com",
  },
  pwd: {
    type: String,
    default: "1234",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
