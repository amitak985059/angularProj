const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  vendorId: { type: mongoose.Schema.Types.ObjectId, ref: "Vendor" },
  items: [{
    name: String,
    quantity: Number,
    price: Number
  }],
  totalAmount: Number,
  paymentStatus: { type: String, default: "pending" },
  orderStatus: { 
    type: String, 
    enum: ["placed", "accepted", "preparing", "ready"],
    default: "placed"
  },
  pickupTime: Date
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);
