const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema({
  sl_no: Number,
  profile_pic: String,
  name: String,
  designation: String,
  role: String,
  rank: String,
  username: String,
  password: String,
  license_no: String,
  date_from: String,
  date_to: String,
  approval_mto: Boolean,
  available: {
    type: Boolean,
    default: true,
  },
});

const driverModel = mongoose.model("drivers", driverSchema);

module.exports = driverModel;
