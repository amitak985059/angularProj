const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
  shopName: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  location: {
    type: { type: String, default: "Point" },
    coordinates: [Number]
  },
  avgPrepTime: { type: Number, default: 10 },
  isOpen: { type: Boolean, default: true }
});

vendorSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Vendor", vendorSchema);
