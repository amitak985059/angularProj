const router = require("express").Router();
const Order = require("../models/Order");

router.post("/", async (req, res) => {
  const io = req.app.get("io");

  const order = await Order.create(req.body);

  io.emit("newOrder", order);

  res.json(order);
});

router.patch("/:id/status", async (req, res) => {
  const io = req.app.get("io");

  const order = await Order.findByIdAndUpdate(
    req.params.id,
    { orderStatus: req.body.status },
    { new: true }
  );

  io.emit("orderUpdated", order);

  res.json(order);
});

module.exports = router;
