const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    userID: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    order: [
      {
        _id: { type: mongoose.Schema.Types.ObjectId, ref: "cart" },
        
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
        qty: { type: Number, required: true },
        address: { type: String, required: true },
      },
    ],
  },
  {
    versionKey: false,
  }
);

const OrderModel = mongoose.model("order", orderSchema);

module.exports = { OrderModel };
