const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    userID: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
    cartId: { type: mongoose.Schema.Types.ObjectId, ref: "cart" },
    address: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const OrderModel = mongoose.model("order", orderSchema);

module.exports = { OrderModel };
