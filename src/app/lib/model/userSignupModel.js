const { default: mongoose } = require("mongoose");

const userSignupModel = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  city: String,
  address: String,
  contact: String,
});

export const userSignUpSchema =
  mongoose.models.users || mongoose.model("users", userSignupModel);
