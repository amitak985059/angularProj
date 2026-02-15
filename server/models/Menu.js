const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  vendorId: { type: mongoose.Schema.Types.ObjectId, ref: "Vendor" },
  name: String,
  price: Number
});

module.exports = mongoose.model("Menu", menuSchema);
